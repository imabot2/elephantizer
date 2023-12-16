import view from "./view.js";
import series from "Js/series";
import menuSeries from "Js/menuSeries";
import notifications from "Js/notifications";
import translate from "./translate.js";
import language from "Js/languages";
import catalog from "Catalog/catalog.js";


/**
 * Model for the SELECTION module
 */
class Model {
  /**
   * Constructor
   * - Create an empty selection
   */
  constructor() {
    // Current selection
    this.selection = [];

    // Last saved selectin
    this.lastSavedSelection = [];

    // List of decks currently loading
    this.deckListLoading = [];

    // Event triggerd when all the series are loaded
    this.allSeriesLoadedEvent = new Event("all-series-loaded");
  }


  /**
   * Get the selection from the URL
   * @returns {array} The new selection not loaded
   */
  async getFromUrl() {

    // Get the string from the URL query
    const selectionString = new URLSearchParams(window.location.search).get('selection');
    const toLoad = selectionString.split('___');

    // Filter the invalid path
    return toLoad.filter(path => this.checkPath(path));
  }


  /**
   * Check if a given path exists in the catalog
   * @param {string} path The path to check
   * @returns True if the path exists, false otherwise
   */
  checkPath(path) {

    // Get each element of the path
    const [language, category, theme, series] = path.split('/');

    // Check if the path exists    
    if (catalog[language]?.category[category]?.theme[theme]?.series.hasOwnProperty(series)) return true;

    // The path does not exist, return false
    return false;
  }


  /**
   * Set the default selection according to the user language
   * @returns A promise resolved when the default deck is loaded
   */
  async loadDefaultSelection() {

    // Empty the current selection
    this.selection = [];

    // According to the user language, load the default deck
    switch (language.current()) {
      case 'fr': return this.add('fr/geographie/pays-sur-la-carte/europe');
      case 'de': return this.add('de/geografie/lander-auf-der-karte/europa');
      default: return this.add('en/geography/countries-on-the-map/europe');
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
          resolve(this.selection.length);
          return;
        }

        // The selection is empty, load the default deck
        this.loadDefaultSelection()
          .then(() => {
            this.onSelectionUpdated();
            resolve(this.selection.length);
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

    // Then order by themes name
    if (A.theme.shortName.toLowerCase() < B.theme.shortName.toLowerCase()) return -1;
    if (A.theme.shortName.toLowerCase() > B.theme.shortName.toLowerCase()) return 1;

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

      // Check if the deck is already in the selection, do not add twice
      if (path in this.selection) { resolve(false); return; }

      // Add the path to the current selection
      this.selection.push(path);

      // Add the new deck in the pending list
      this.deckListLoading.push(path);


      // Load the deck from server
      series.load(path)
        .then(() => {
          if (updateView) this.onSelectionUpdated();
          this.removeFromListLoading(path);
          resolve(true);
        })
        .catch((error) => {
          console.error(error);

          // If the deck can't be loaded, remove the path from the current selection and from the pending list
          this.remove(path, updateView);
          this.removeFromListLoading(path);
          reject(false);
        })
    })
  }


  /**
   * Remove a path from the loading pending list
   * Trigger the all-series-loaded event when the list is empty
   * @param {string} path The path to remove (loaded or rejected)
   */
  removeFromListLoading(path) {

    // Get the index of the typing test
    const index = this.deckListLoading.indexOf(path);

    // Remove the test if exist, otherwise show an error message
    if (index !== -1)
      this.deckListLoading.splice(this.deckListLoading.indexOf(path), 1);
    else
      notifications.error(translate.error7000, translate.error7000Message);

    // If the list is empty, trigger event all test loaded
    if (this.deckListLoading.length === 0)
      document.body.dispatchEvent(this.allSeriesLoadedEvent);
  }


  /**
   * Count the number of series currently loading
   * @returns The current number of series currently loading
   */
  numberSeriesLoading() {
    return this.deckListLoading.length;
  }


  /**
   * Resolve a promise when all the series are loaded
   * @returns a promise resolved when all the series are loaded
   */
  async onAllSeriesLoaded() {
    return new Promise((resolve) => {

      // If there is no series loading, resolve the promise
      if (this.deckListLoading.length === 0) { resolve(); return; }

      // When the event is triggered, resolve the promise
      document.body.addEventListener('all-series-loaded', () => {
        resolve();
      }, { once: true });
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
    //if (updateView) this.onSelectionUpdated();
  }



}


export default new Model();