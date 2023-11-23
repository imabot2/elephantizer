import model from './model.js';

class Series {
  constructor() { }

  /**
   * Get the series data
   * - The full serie if path is not defined, 
   * - The deck is path is defined and uid is not defined
   * - The question if path and uid are defined
   * @param {string} path The path to the requested deck 
   * @param {string} uid The UID of the requested question
   * @returns {object} The full serie, the deck or the question requested
   */
  get(path, uid) { return model.get(path, uid); }

  /**
   * Return human readable data for a given path
   * @param {string} path The partial or full path
   * @returns An object containing the data (names, paths ...)
   */
  pathToObject(path) { return model.pathToObject(path); }


  /**
   * Get the meta data for a given path
   * @param {string} path The path of the deck
   * @returns {object} The meta data for the deck
   */
  meta(path) { return model.meta(path); }



  /**
   * Returns the list of UIDs for a given deck
   * @param {string} path The path of the deck
   * @returns An array containing the UIDs
   */
  getUids(path) { return model.getUids(path); }

  /**
   * Load a deck, if not yet in memory
   * @param {string} path Path to load, example: 'en/countries-on-the-map/europe'
   */
  async load(path) { return model.load(path); }
}


export default new Series();