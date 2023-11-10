import model from './model.js';

class Series {
  constructor() { }

  /**
   * Load a deck, if not yet in memory
   * @param {string} path Path to load, example: 'en/countries-on-the-map/europe'
   */
  load(path) { return model.load(path); }
}


export default new Series();