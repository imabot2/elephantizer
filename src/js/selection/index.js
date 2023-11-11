import model from "./model.js";

class Selection {
  constructor() { }


  /**
   * Return the current selection
   * @returns {array} An array containing the path to the current selection
   */
  current() { return model.selection; }

  
  /**
   * Toggle a deck given by its path
   * Remove the deck if it is in the selection, otherwise, add the deck
   * @param {string} path path to the deck , example: 'en/countries-on-the-map/europe'
   */
  toggleDeck(path) { model.toggleDeck(path); }


  /**
   * Select a single deck (remove the selection and add the deck)
   * @param {string} path  Path the the deck, example: 'en/countries-on-the-map/europe'
   */
  selectDeck(path) { model.selectDeck(path); }
}


export default new Selection();