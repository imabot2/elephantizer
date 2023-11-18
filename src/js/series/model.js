import notifications from 'Js/notifications';
import translate from './translate.js';
import catalog from "Catalog/catalog.js";

/**
 * Model for the series class
 */
class Model {

  /**
   * Constructor Initialize an empty object
   */
  constructor() {
    // Contains all the series already loaded
    this.series = {};
  }

  /**
   * Returns the list of UIDs for a given deck
   * If the deck has not been loaded, returns an empty array
   * @param {string} path The path of the deck
   * @returns An array containing the UIDs
   */
  getUids(path) {

    if (!this.series.hasOwnProperty(path)) return [];
    return Object.keys(this.series[path].cards);
  }

  /**
   * Return human readable data for a given path
   * @param {string} path The partial or full path
   * @returns An object containing the data (names, paths ...)
   */
  pathToObject(path) {
    // Split the path
    const keys = path.split('/');

    // Create the object
    const obj = {};

    // Set language if key is in the path
    if (keys[0] == undefined) return obj;
    obj.language = catalog[keys[0]].name;
    obj.languagePath = keys[0];

    // Set category if key is in the path
    if (keys[1] == undefined) return obj;
    obj.category = catalog[keys[0]].category[keys[1]].shortName;
    obj.categoryPath = `${keys[0]}/${keys[1]}`;

    // Set series if key is in the path
    if (keys[2] == undefined) return obj;
    obj.deck = catalog[keys[0]].category[keys[1]].series[keys[2]].shortName;
    obj.deckPath = `${keys[0]}/${keys[1]}/${keys[2]}`;

    // Return the object
    return obj;
  }


  /**
   * Get the meta data for a given path
   * @param {string} path The path of the deck
   * @returns {object} The meta data for the deck
   */
  meta(path) {
    // If the path is in the list
    if (path in this.series) return this.series[path].meta;

    // The series is currently loading ?
    return undefined;
  }


  /**
   * Load a deck, if not yet in memory
   * @param {string} path Path to load, example: 'en/countries-on-the-map/europe'
   * @returns A promise resolved when the deck is loaded
   */
  load(path) {

    // Return a promise
    return new Promise((resolve, reject) => {

      // Check if the deck is already loaded
      if (path in this.series) { resolve(this.series[path]); return; }

      // Import the required typing test
      import('../../catalog/' + path + '/index.js')
        .then((deck) => {

          // Add meta data related to language, category and deck
          deck.metaData.language = this.getLanguageMetaData(path);
          deck.metaData.category = this.getCategoryMetaData(path);
          deck.metaData.deck = this.getDeckMetaData(path);

          // Append the object in the list          
          this.series[path] = {
            meta: deck.metaData,
            cards: deck.cards
          }

          // Resolve the promise and return the new deck
          resolve(this.series[path]);
        })
        .catch((error) => {
          // An error occurred, notify the user and reject the promise
          notifications.error(translate.error6000, translate.error6000Message, 15000);
          console.error(error);
          reject(error);
        })
    })
  }





  /**
   * Return the meta data related to the language for a given path
   * @param {string} path The path to process
   * @returns A object containing the meta data (key and name)
   */
  getLanguageMetaData(path) {
    // Split the path to get the keys
    const keys = path.split('/');

    // Return the language meta data
    return {
      key: keys[0],
      name: catalog[keys[0]].name
    }
  }


  /**
   * Return the meta data related to the category for a given path
   * @param {string} path The path to process
   * @returns A object containing the meta data (key, name, shortname)
   */
  getCategoryMetaData(path) {
    // Split the path to get the keys
    const keys = path.split('/');

    // Return the category meta data
    return {
      key: keys[1],
      name: catalog[keys[0]].category[keys[1]].name,
      shortName: catalog[keys[0]].category[keys[1]].shortName,
    }
  }


  /**
   * Return the meta data related to the deck for a given path
   * @param {string} path The path to process
   * @returns A object containing the meta data (key, name, shortname)
   */
  getDeckMetaData(path) {
    // Split the path to get the keys
    const keys = path.split('/');

    // Return the deck meta data
    return {
      key: keys[2],
      name: catalog[keys[0]].category[keys[1]].series[keys[2]].name,
      shortName: catalog[keys[0]].category[keys[1]].series[keys[2]].shortName,
    }
  }

}


export default new Model();