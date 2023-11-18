import model from "./model.js";
import view from "./view.js";

class Selection {
  constructor() { }

  /**
   * Return the current selection
   * @returns {array} An array containing the path to the current selection
   */
  current() { return model.selection; }


  /**
   * Set the default selection according to the user language
   * @returns A promise resolved when the default deck is loaded
   */
  async loadDefaultSelection() { return model.loadDefaultSelection(); }


  set(newSelection) { return model.set(newSelection); }


  /**
   * Add a new deck in the selection
   * @param {string} path Path of the deck to add
   * @returns A promise resolved when the deck is loaded
   */
  add(path) { return model.add(path); }


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


  /**
   * Append the settings to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) { view.appendTo(parent); }


  /**
   * Collapse the selection after a given delay
   * @param {integer} delay Delay before collapsing in milliseconds
   */
  collapse(delay) { view.collapse(delay); }


  /**
   * Expand the selection after a given delay
   * @param {integer} delay Delay before expanding in milliseconds
   */
  expand(delay) { view.expand(delay); }
}


export default new Selection();