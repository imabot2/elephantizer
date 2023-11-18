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
   * 
   */
  constructor() {
    // Contains the user statistics for each questions
    this.data = {};


  }


  /**
   * Get the statistics of a given question
   * Create the deck statistics if the deck does not exist
   * Create the questions statistics if the statistics doex not exist
   * @param {string} path Path to the deck
   * @param {string} uid UID of the requested question
   * @returns {object} the statistics of the question
   */
  get(path, uid) {
    if (!this.data.hasOwnProperty('path')) this.createDeck(path);
    if (!this.data[path].stats.hasOwnProperty('uid')) this.createQuestion(path, uid);
    return this.data[path].stats[uid];
  }

  /**
   * Load settings from Firestore and update the settings menu
   * @returns A promise resolved when the settings are up-to-date
   */
  init() {
    console.log('Init statistics from Firestore');

  }


  /**
  * Listen for Firestore DB settings change 
  * On change, update the current settings
  */
  listenDB() {


    // If the user is not logged in, do not use the listener
    if (!auth.isLogged()) return;

    // If there is already a listener, running, don't start another one
    if (this.unsubscribe != undefined) return;
    
    const queryStats = query(collection(db, "users", `${auth.userId()}`, "statistics"));

    console.log ('LISTENING')

    this.unsubscribe = onSnapshot(queryStats, (querySnapshot) => {
      console.log ('callback');
      querySnapshot.forEach((doc) => {
        console.log (doc.data());
      })
      
    })
    /*
    import { collection, query, where, onSnapshot } from "firebase/firestore";

const q = query(collection(db, "cities"), where("state", "==", "CA"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const cities = [];
  querySnapshot.forEach((doc) => {
      cities.push(doc.data().name);
  });
  console.log("Current cities in CA: ", cities.join(", "));
});
*/


    /*
        
        
    
        // Create the document reference
        const docRefSettings = doc(db, "users", `${auth.userId()}`, "settings", "current");
    
        // Set the listener on the reference document
        this.unsubscribe = onSnapshot(docRefSettings, (doc) => {
          
          // Update only if remote changes
          const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
          if (source == "Server") {
            
            // If the document does not exist (first connextion ?), create an empty settings
            const settings = (doc.exists()) ? doc.data() : {};
            // Update the current settings and the settings menu
            this.update(settings, { updateView: true });
            // Set the flag to true to continue the boot sequence
            this.firstSettingsFromDB = true;
          }
    
        })
        */
  }

  /**
   * Stop listening from the settings update from DB
   */
  stopListeningDB() {
    if (this.unsubscribe !== undefined) {
      this.unsubscribe();
      this.unsubscribe = undefined;
    }
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

      // Sanitize document name for Firestore
      let docName = path.replaceAll('/', '\\');

      // Document to write
      const docRef = doc(db, "users", `${auth.userId()}`, "statistics", docName);

      // Add the document to the batch
      batch.set(docRef,
        {
          counter: ++this.data[path].counter,
          timestamp: serverTimestamp(),
          stats: this.data[path].stats,
        })
    })

    // Return the promise
    return batch.commit();
  }


  /**
   * Create empty statistics for a question given by its path and UID
   * @param {string} path Path to the deck
   * @param {string} uid UID of the question
   */
  createQuestion(path, uid) {
    this.data[path].stats[uid] = {
      count: 0,
      score: 0,
    }
  }


  /**
   * Create the statistics for a given deck
   * @param {string} path Path to the new deck
   */
  createDeck(path) {

    // Crete the new entry
    this.data[path] = {
      counter: 0,
      updated: true,
      stats: {},
    }

    // For each UID, create a new stat
    const uids = series.getUids(path);
    uids.forEach(uid => { this.createQuestion(path, uid); });
  }

}

export default new Model();