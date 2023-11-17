import model from "./model.js"

class Statistics {
  constructor() { }


  /**
 * Load statistics from Firestore is the user is logged
 * @returns A promise resolved when the statistics are loaded
 */
  async init() { return model.init(); }


  get(path, uid) { return model.get(path, uid); }
  
  
  /**
   * Save the statistics on Firebase
   * Save only updated statistics
   * @returns A promise resolved when the data are saved
   */
  async save() { return model.save(); }
}

export default new Statistics();