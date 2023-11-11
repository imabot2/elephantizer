import view from "./view.js";
import series from "Js/series";
import menuSeries from "Js/menuSeries";
import notifications from "Js/notifications";
import translate from "./translate.js";

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
    console.log ('For trasking the bug', list);
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
  add(path) {
    return new Promise((resolve, reject) => {
      // Add the path to the current selection
      this.selection.push(path);

      // Load the deck from server
      series.load(path)
        .then(() => {
          this.onSelectionUpdated();
          resolve();
        })
        .catch((error) => {
          console.log (error);
          // If the deck can't be loaded, remove the path from the current selection
          this.remove();
          this.onSelectionUpdated();
          reject();
        })
    })
  }

  /**
   * Remove a deck from the current selection
   * Note that if the deck is keeped in memory even if it is no longer in the selection
   * @param {string} path Path of the deck to remove
   */
  remove(path) {

    // Check if there is at least two deck in the current selection
    if (this.selection.length <= 1) {
      // Can't remove the last deck
      notifications.warning(translate.atLeastOneDeck, translate.atLeastOneDeckMessage);
      // The selection is updated
      this.onSelectionUpdated();
      return;
    }

    // Get the index and remove the deck
    const index = this.selection.indexOf(path);
    this.selection.splice(index, 1);

    // The selection is updated
    this.onSelectionUpdated();
  }

  /**
   * Select a single deck (remove the selection and add the deck)
   * @param {string} path  Path the the deck, example: 'en/countries-on-the-map/europe'
   */
  selectDeck(path) {
    // Clear the selection
    this.selection = [];
    // Add the requested path
    this.add(path);

    // The selection is updated
    this.onSelectionUpdated();
  }

}


export default new Model();