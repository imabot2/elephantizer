import model from './model.js';

class Series {
  constructor() { }

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
   * Load a deck, if not yet in memory
   * @param {string} path Path to load, example: 'en/countries-on-the-map/europe'
   */
  async load(path) { return model.load(path); }
}


export default new Series();