import notifications from 'Js/notifications';
import translate from './translate.js';


/**
 * Model for the series class
 */
class Model {
  constructor() {
    // Contains all the series already loaded
    this.series = {};
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

          // Prepare the object to append in the list
          const newDeck = {
            meta: deck.metaData,
            cards: deck.cards
          }
          // Append the object in the list          
          this.series[path] = newDeck;

          // Resolve th promise and return the new deck
          resolve(this.series[path]);
        })
        .catch((error) => {
          // An error occurred, notify the user and reject the promise
          notifications.error(translate.error6000, translate.error6000Message, 15000);
          reject(error);
        })
    })
  }


}


export default new Model();