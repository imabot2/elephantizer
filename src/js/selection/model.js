import view from "./view.js";
import series from "Js/series";
import menuSeries from "Js/menuSeries";
import notifications from "Js/notifications";
import translate from "./translate.js";
import language from "Js/languages";
/**
 * Model for the SELECTION module
 */
class Model {
  /**
   * Constructor
   * - Create an empty selection
   */
  constructor() {
    this.selection = [];
    this.lastSavedSelection = [];
  }

  /**
   * Set the default selection according to the user language
   * @returns A promise resolved when the default deck is loaded
   */
  loadDefaultSelection() {

    // Empty the current selection
    this.selection = [];

    // According to the user language, load the default deck
    switch (language.current()) {
      case 'fr': return this.add('fr/pays-sur-la-carte/europe');
      case 'de': return this.add('de/lander-auf-der-karte/europa');
      default: return this.add('en/countries-on-the-map/europe');
    }
  }


  /**
   * Update the current selection with an array of new paths
   * @param {array} newSelection An array containing the new selection
   * @returns a promise resolved when the series are loaded, reject if no deck can't be loaded
   */
  set(newSelection) {

    // Empty the current selection
    this.selection = [];

    // Return a promise when all the decks are loaded
    return new Promise((resolve, reject) => {

      // Array of promises
      let promises = [];

      // Add each deck in the new selection
      newSelection.forEach((path) => { promises.push(this.add(path, false)); })

      // When all promises are resolved or rejected
      Promise.allSettled(promises).finally(() => {

        // If the selection is not empty, update the view and resolve the promise
        if (this.selection.length) { 
          this.onSelectionUpdated(); 
          resolve(); 
          return; 
        }

        // The selection is empty, load the default deck
        this.loadDefaultSelection()
          .then(() => { 
            this.onSelectionUpdated();
            resolve(); 
          })
          .catch((error) => { reject(error); })
      });
    })
  }


  /**
   * Store the last selection saved in Firestore
   * @param {array} selection Array of path saved in backend
   */
  setLastSavedSelection(selection) {
    this.lastSavedSelection = structuredClone(selection);
  }


  /**
   * Compare the current selection with the selection stored on server
   * @return {boolean} Return true if the selection has changed, false otherwise
   */
  hasSelectionChanged() {
    return (this.selection.sort().toString() !== this.lastSavedSelection.sort().toString());
  }


  /**
   * Return an ordered list of meta data sorted by
   * 1. Language name
   * 2. Category short name
   * 3. Deck short name
   * @returns An ordered list of the meta data of the current selection
   */
  orderedList() {

    // Get the list of meta data
    let list = this.selection.map(path => series.meta(path));

    // Sort the list
    list.sort(this.compare);

    // Return the ordered list
    return list;
  }


  /**
   * Compare two deck (for the sort function) based on:
   * 1. Language name
   * 2. Category short name
   * 3. Deck short name
   * @param {object} A Meta data of the first object
   * @param {object} B Meta data of the second object
   * @returns The relative order of the two elements
   */
  compare(A, B) {

    // Order by language first
    if (A.language.name.toLowerCase() < B.language.name.toLowerCase()) return -1;
    if (A.language.name.toLowerCase() > B.language.name.toLowerCase()) return 1;

    // Then order by category name
    if (A.category.shortName.toLowerCase() < B.category.shortName.toLowerCase()) return -1;
    if (A.category.shortName.toLowerCase() > B.category.shortName.toLowerCase()) return 1;

    // The Order by deck name
    if (A.deck.shortName.toLowerCase() < B.deck.shortName.toLowerCase()) return -1;
    if (A.deck.shortName.toLowerCase() > B.deck.shortName.toLowerCase()) return 1;

    // Twice the same path, shouldn't happen
    return 0;
  }



  /**
   * Callback function called when the selection is updated
   */
  onSelectionUpdated() {
    // Update the checkboxes and radio button in the Series menu
    menuSeries.updateSelection(this.selection);

    // Update the current selection
    view.populate();
  }


  /**
   * Toggle a deck given by its path
   * Remove the deck if it is in the selection, otherwise, add the deck
   * @param {string} path path to the deck , example: 'en/countries-on-the-map/europe'
   */
  toggleDeck(path) {
    // If the deck is already in the selection, remove the element
    if (this.selection.includes(path)) {
      this.remove(path);
      return Promise.resolve();
    }
    // Otherwise, add the element in the selection
    else return this.add(path);
  }


  /**
   * Add a new deck in the selection
   * @param {string} path Path of the deck to add
   * @returns A promise resolved when the deck is loaded
   */
  add(path, updateView = true) {
    return new Promise((resolve, reject) => {

      // Add the path to the current selection
      this.selection.push(path);

      // Load the deck from server
      series.load(path)
        .then(() => {
          if (updateView) this.onSelectionUpdated();
          resolve(true);
        })
        .catch((error) => {
          console.error(error);
          // If the deck can't be loaded, remove the path from the current selection
          this.remove(path, updateView);
          reject(false);
        })

    })
  }

  /**
   * Remove a deck from the current selection
   * Note that if the deck is keeped in memory even if it is no longer in the selection
   * @param {string} path Path of the deck to remove
   */
  remove(path, updateView = true) {

    // Check if there is at least two deck in the current selection
    if (this.selection.length <= 1) {
      // Can't remove the last deck
      notifications.warning(translate.atLeastOneDeck, translate.atLeastOneDeckMessage);
      // The selection is updated
      if (updateView) this.onSelectionUpdated();
      return;
    }

    // Get the index and remove the deck
    const index = this.selection.indexOf(path);
    this.selection.splice(index, 1);

    // The selection is updated
    if (updateView) this.onSelectionUpdated();
  }


  /**
   * Select a single deck (remove the selection and add the deck)
   * @param {string} path  Path the the deck, example: 'en/countries-on-the-map/europe'
   */
  selectDeck(path, updateView = true) {
    // Clear the selection
    this.selection = [];
    // Add the requested path
    this.add(path, updateView);

    // The selection is updated
    if (updateView) this.onSelectionUpdated();
  }

}


export default new Model();