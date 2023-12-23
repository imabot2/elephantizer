import translate from "./translate.js";
import auth from "Js/auth";
import notifications from "Js/notifications";
import { db } from "Js/firebase";
import { collection, doc, writeBatch, query, onSnapshot, orderBy, serverTimestamp } from "firebase/firestore";


/**
 * Model for the History module
 */
class Model {

  /**
   * Constructor, initialize data and event listener
   */
  constructor() {
    // Contains the user history
    this.data = {};

    // Prepare the global events for the Firestore listener
    this.historyUpdatedFromServer = new Event("history-updated-from-server");
  }


  /**
   * Get the history data for a given path
   * @param {string} path Path to the series or 'main' to get the global stats
   * @returns {object} History data for the required path
   */
  get(path) {
    
    // Prepare the function output
    let output = {
      index:[],
      memorizationRatio: [],
      maxDistanceRatio: [],
      timeToFirstKeyRatio: [],
      wpm: [],
    }

    // If there is no data return empty arrays
    if (!this.data.hasOwnProperty(path)) return output;

    // Dispatch each parameter in the output object
    this.data[path].forEach((data, index) => {

      output.index.push(index);      
      output.memorizationRatio.push(data.memorizationRatio*100);
      output.maxDistanceRatio.push(data.maxDistanceRatio*100);
      output.timeToFirstKeyRatio.push(data.timeToFirstKeyRatio*100);
      output.wpm.push(data.wpm);      
    })

    // Return the prepared data
    return output;
  }


  /**
   * Split the results to get data for each deck
   * @param {object} data Results of the last memory test
   * @returns {object} The batchs for each deck + the global data
   */
  prepareBatches(data) {
    // Contains the batchs
    let batches = {};

    // For each question, sum data
    for (const question of data.questions) {

      // Create the batch if does not exists yet
      let current = batches[question.path] = batches[question.path] ?? {
        count: 0,
        timeToFirstKeyRatio: 0,
        memorizationRatio: 0,
        memorizationRatioUser: 0,
        maxDistanceRatio: 0,
        nbCharacters: 0,
        typingTime: 0,
      };

      // Sum data for each parameter
      current.count++;
      current.timeToFirstKeyRatio += question.timeToFirstKeyRatio;
      current.memorizationRatio += question.memorizationRatio;
      current.memorizationRatioUser += question.memorizationRatioUser;
      current.maxDistanceRatio += question.maxDistanceRatio;
      current.nbCharacters += question.finalAnswer.trim().length + 1;
      current.typingTime += question.typingTime;

    }


    //Compute averages
    for (const path of Object.keys(batches)) {

      // Get current batch
      let batch = batches[path];

      // Compute averages
      const N = batch.count;
      batch.wpm = 12000 * (batch.nbCharacters / batch.typingTime);
      batch.memorizationRatioUser = batch.memorizationRatioUser / N;
      batch.memorizationRatio = batch.memorizationRatio / N;
      batch.maxDistanceRatio = batch.maxDistanceRatio / N;
      batch.timeToFirstKeyRatio = batch.timeToFirstKeyRatio / N;
      batch.path = path;
      batch.timestamp = serverTimestamp();

      // Delete unused parameters
      delete batch.count;
      delete batch.nbCharacters;
      delete batch.typingTime;
    }

    // Append global results
    batches.main = {
      wpm: data.wpm,
      memorizationRatioUser: data.memorizationRatioUser,
      memorizationRatio: data.memorizationRatio,
      maxDistanceRatio: data.maxDistanceRatio,
      timeToFirstKeyRatio: data.timeToFirstKeyRatio,
      path: 'main',
      timestamp: serverTimestamp(),
    }

    // Return the batchs prepared for Firestore
    return batches;
  }


  /**
   * Store the memory test history in Firestore
   * @param {object} data The result data to save
   * @returns A promise resolved when data are saved
   */
  save(data) {

    // Return a promise
    return new Promise((resolve, reject) => {

      // If the user is not logged, do not save to database
      if (!auth.isLogged()) { resolve(); return; }

      // Prepare the batches for each deck
      let batches = this.prepareBatches(data);

      // Get a new write batch
      const batch = writeBatch(db);

      for (const data of Object.values(batches)) {
        // Document to write
        const docRef = doc(collection(db, "users", `${auth.userId()}`, "history"));

        // Add the document to the batch
        batch.set(docRef, data);
      }

      // Return the promise
      batch.commit()
        .then(() => { resolve(); return; })
        .catch((error) => {
          console.error(error);
          notifications.error(translate.error8000, translate.error8000Message);
          reject(error);

        })
    })
  }

  /**
   * Start listening for update from the Firestore server
   * @returns A promise resolved when the first update is received from the server
   */
  async startListeningDB() {

    // If the user is not logged in, do not start the listener
    if (!auth.isLogged()) return Promise.resolve();

    // If there is already a listener, running, don't start another one
    if (this.unsubscribe != undefined) return Promise.resolve();

    return new Promise((resolve) => {
      this.listenDB();
      document.body.addEventListener('history-updated-from-server', () => {
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
      this.data = {};
    }
  }


  /**
   * Listen for Firestore DB history change 
   */
  listenDB() {

    // Prepare the query
    // Listen to all the history with ascending timestamp
    const queryHistory = query(collection(db, "users", `${auth.userId()}`, "history"), orderBy('timestamp', 'asc'));

    // Create the listener
    this.unsubscribe = onSnapshot(queryHistory, (querySnapshot) => {

      // Update only if remote changes
      const source = querySnapshot.metadata.hasPendingWrites ? "Local" : "Server";
      if (source == "Server") {

        // Reset the data
        this.data = {};

        // For each document
        querySnapshot.forEach((doc) => {

          // Add the document to the history data
          let { path, ...data } = doc.data();
          if (!this.data.hasOwnProperty(doc.data().path)) this.data[doc.data().path] = [];
          this.data[doc.data().path].push(data);
        })

        // When the documents are updated, trigger the event
        document.body.dispatchEvent(this.historyUpdatedFromServer);
      }
    })
  }

}



export default new Model();