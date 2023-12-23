import model from "./model.js";


/**
 * Facade for the history class
 */
class History {
  /**
   * Constructor
   */
  constructor() {}


  /**
   * Get the history data for a given path
   * @param {string} path Path to the series or 'main' to get the global stats
   * @returns {object} History data for the required path
   */
  get(path) { return model.get(path); }



  /**
   * Store the memory test history in Firestore
   * @param {object} data The result data to save
   * @returns A promise resolved when data are saved
   */
  save(data) { model.save(data); }


  /**
  * Start listening for update from the Firestore server
  * @returns A promise resolved when the first update is received from the server
  */
  async startListeningDB() { return model.startListeningDB(); }


  /**
   * Stop listening from the statistics update from DB
   */
  stopListeningDB() { model.stopListeningDB(); }
}


export default new History();