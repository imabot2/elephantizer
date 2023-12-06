import series from "Js/series";
import auth from "Js/auth";
import notifications from "Js/notifications";
import { db } from "Js/firebase";
import { doc, collection, query, onSnapshot, serverTimestamp, writeBatch } from "firebase/firestore";



/**
 * Model for the statistics module
 */
class Model {


  /**
   * Constructor
   * - Create empty statistics
   * - Prepare the events
   */
  constructor() {
    // Contains the user statistics for each questions
    this.data = {};

    // Prepare the global events for the Firestore listener
    this.statisticsUpdatedFromServer = new Event("statistics-updated-from-server");
  }




  /**
   * Load settings from Firestore and update the settings menu
   * @returns A promise resolved when the statistics are ready (default or database if the user is logged)
   */
  init() {
    return this.startListeningDB();
  }


  /**
   * Create empty statistics for a question given by its path and UID
   * @param {string} path Path to the deck
   * @param {string} uid UID of the question
   */
  createQuestion(path, uid) {
    // Create empty stats for the new question
    this.data[path].stats[uid] = {
      count: 0,
      score: 0,
    }
    // A new question is created, the deck is updated
    this.data[path].updated = true;
  }


  /**
   * Create the statistics for a given deck
   * @param {string} path Path to the new deck
   */
  createDeck(path) {
    // Crete the new entry
    this.data[path] = {
      counter: 0,
      updated: false,
      stats: {},
    }
  }


  /**
   * Get the statistics for a given question
   * Create the deck statistics if the deck does not exist
   * Create the questions statistics if the statistics doex not exist
   * @param {string} path Path to the deck
   * @param {string} uid UID of the requested question
   * @returns {object} the statistics of the question
   */
  get(path, uid) {
    if (!this.data.hasOwnProperty(path)) this.createDeck(path);
    if (!this.data[path].stats.hasOwnProperty(uid)) this.createQuestion(path, uid);
    return this.data[path].stats[uid];
  }


  /**
   * Update the statistics for a given question
   * @param {string} path The path to the deck
   * @param {string} uid The question UID
   * @param {number} memorizationRatio The memorization ratio for this question
   */
  update(path, uid, score) {

    // Get the statistics of the question to update
    const question = this.data[path].stats[uid];

    // Store the previous score (for computing the offset)
    let previousScore = question.score;
    question.score = (question.score * question.count + score) / (question.count + 1);

    // Increase the counter for this question
    question.count++;

    // This deck has been updated
    this.data[path].updated = true;

    // Return the previous and the new score
    return { "previousScore": previousScore, "newScore": question.score };
  }


  /**
   * Save the statistics on Firebase
   * Save only updated statistics
   * @returns A promise resolved when the data are saved
   */
  save() {

    // Get a new write batch
    const batch = writeBatch(db);

    // For each deck
    const paths = Object.keys(this.data);
    paths.forEach(path => {

      // If data is not updated, do not save on Firebase
      if (!this.data[path].updated) return;

      // Sanitize the deck before saving. 
      // Keep only existing questions in the series
      this.sanitizeDeck(path);

      // Sanitize document name for Firestore
      let docName = path.replaceAll('/', '\\');

      // Document to write
      const docRef = doc(db, "users", `${auth.userId()}`, "statistics", docName);

      // Increase the counter everytime data are updated on the server
      this.data[path].counter++;

      // Add the document to the batch
      batch.set(docRef,
        {
          counter: this.data[path].counter,
          stats: this.data[path].stats,
        })
    })

    // Return the promise
    return batch.commit();
  }


  /**
   * Remove statistics that do not exist in series
   * @param {string} path Path to the current deck
   */
  sanitizeDeck(path) {

    // Get the list of UID (the UIDs to keep)
    const uidsReference = series.getUids(path);

    // For each UID in the series
    Object.keys(this.data[path].stats).forEach((uid) => {

      // If the UID is not in the series, remove the statistics from data
      if (!uidsReference.includes(uid)) delete this.data[path].stats[uid];
    })
  }



  /**
   * Start listening for update from the Firestore server
   * @returns A promise resolved when the first update is received from the server
   */
  startListeningDB() {

    // If the user is not logged in, do not start the listener
    if (!auth.isLogged()) return Promise.resolve();

    // If there is already a listener, running, don't start another one
    if (this.unsubscribe != undefined) return Promise.resolve();

    return new Promise((resolve) => {
      this.listenDB();
      document.body.addEventListener('statistics-updated-from-server', () => {
        resolve();
      }, { once: true })
    })
  }


  /**
   * Stop listening from the statistics update from DB
   */
  stopListeningDB() {
    if (this.unsubscribe !== undefined) {
      this.unsubscribe();
      this.unsubscribe = undefined;
    }
  }


  /**
  * Listen for Firestore DB statistics change 
  * On change, update the current statistics
  */
  listenDB() {

    // Prepare the query
    // Listen to all the statistics
    const queryAllStats = query(collection(db, "users", `${auth.userId()}`, "statistics"));

    // Create the listener
    this.unsubscribe = onSnapshot(queryAllStats, (querySnapshot) => {

      // Update only if remote changes
      const source = querySnapshot.metadata.hasPendingWrites ? "Local" : "Server";
      if (source == "Server") {

        // For each document
        querySnapshot.forEach((doc) => {

          // Get path from document ID
          let path = doc.id.replaceAll('\\', '/');

          // Update the deck with data from the server
          this.updateDeckFromDB(path, doc.data());
        })

        // When the documents are updated, trigger the event
        document.body.dispatchEvent(this.statisticsUpdatedFromServer);
      }
    })
  }


  /**
   * Perform a smart merge with data loaded from DB and local data
   * @param {string} path Path to the deck
   * @param {object} data Data to update from Forestore
   */
  updateDeckFromDB(path, data) {

    // If the deck do not exist in statistics, create the deck
    if (!this.data.hasOwnProperty(path)) this.createDeck(path);

    // Update meta data
    this.data[path].counter = data.counter;
    this.data[path].updated = false;

    // Merge statistics
    this.data[path].stats = { ...this.data[path].stats, ...data.stats };
  }

}

export default new Model();