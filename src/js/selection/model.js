import series from "Js/series";



class Model {
  constructor() {
    this.selection = [];
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
        .then(() => { resolve(); })
        .catch(() => {
          // If the deck can't be loaded, remove the path from the current selection
          this.removePath();
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
    // Get the index and remove the deck
    const index = this.selection.indexOf(path);
    this.selection.splice(index, 1);
  }

  /**
   * Select a single deck (remove the selection and add the deck)
   * @param {string} path  Path the the deck, example: 'en/countries-on-the-map/europe'
   */
  selectDeck(path) {
    console.log('single', path);
  }

}


export default new Model();