class Model {
  constructor() {
    this.series = [];
  }

  /**
   * Toggle a deck given by its path
   * Remove the deck if it is in the selection, otherwise, add the deck
   * @param {string} path path to the deck , example: 'en/countries-on-the-map/europe'
   */
  toggleDeck(path) {
    console.log ('toggle', path);
  }


  /**
   * Select a single deck (remove the selection and add the deck)
   * @param {string} path  Path the the deck, example: 'en/countries-on-the-map/europe'
   */
  selectDeck(path) {
    console.log('single',path);
  }

}


export default new Model();