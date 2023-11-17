import series from "Js/series";
import auth from "Js/auth";
import notifications from "Js/notifications";
import { db } from "Js/firebase";
import { doc, serverTimestamp, writeBatch } from "firebase/firestore";



/**
 * Model for the statistics module
 */
class Model {
  constructor() {
    // Contains the user statistics for each questions
    this.data = {};
  }


  get(path, uid) {
    if (!this.data.hasOwnProperty('path')) this.createDeck(path);
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
    uids.forEach(uid => {
      this.data[path].stats[uid] = {
        count: 0,
        score: 0,
      }
    })
  }

}

export default new Model();