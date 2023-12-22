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


  /**
   * Update the current selection with an array of new paths
   * @param {array} newSelection An array containing the new selection
   * @returns a promise resolved when the series are loaded, reject if no deck can't be loaded
   */
  set(newSelection) { return model.set(newSelection); }


  /**
   * Store the last selection saved in Firestore
   * @param {array} selection Array of path saved in backend
   */
  setLastSavedSelection(selection) { model.setLastSavedSelection(selection); }


  /**
   * Compare the current selection with the last selection stored on server   
   * @return {boolean} Return true if the selection has changed, false otherwise
   */
  hasSelectionChanged() { return model.hasSelectionChanged(); }


  /**
   * Add a new deck in the selection
   * @param {string} path Path of the deck to add
   * @returns A promise resolved when the deck is loaded
   */
  add(path) { return model.add(path); }


  /**
   * Count the number of series currently loading
   * @returns The current number of series currently loading
   */
  numberSeriesLoading() { model.numberSeriesLoading(); }


  /**
   * Resolve a promise when all the series are loaded
   * @returns a promise resolved when all the series are loaded
   */
  async onAllSeriesLoaded() { return model.onAllSeriesLoaded(); }

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