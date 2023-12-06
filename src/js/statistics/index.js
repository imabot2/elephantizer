import model from "./model.js"

class Statistics {
  constructor() { }


  /**
 * Load statistics from Firestore is the user is logged
 * @returns A promise resolved when the statistics are loaded
 */
  async init() { return model.init(); }


  /**
   * Get the statistics for a given question
   * Create the deck statistics if the deck does not exist
   * Create the questions statistics if the statistics doex not exist
   * @param {string} path Path to the deck
   * @param {string} uid UID of the requested question
   * @returns {object} the statistics of the question
   */
  get(path, uid) { return model.get(path, uid); }
  
  
  /**
   * Update the statistics for a given question
   * @param {string} path The path to the deck
   * @param {string} uid The question UID
   * @param {number} memorizationRatio The memorization ratio for this question
   */
  update(path, uid, memorizationRatio) { return model.update(path, uid, memorizationRatio); }



  /**
   * Save the statistics on Firebase
   * Save only updated statistics
   * @returns A promise resolved when the data are saved
   */
  async save() { return model.save(); }


  /**
   * Start listening for update from the Firestore server
   * @returns A promise resolved when the first update is received from the server
   */
  startListeningDB() { return model.startListeningDB(); }


  /**
   * Stop listening from the statistics update from DB
   */
  stopListeningDB() { return model.stopListeningDB(); }
}

export default new Statistics();