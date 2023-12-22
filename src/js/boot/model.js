import catalog from "Catalog/catalog.js";



class Model {
  constructor() { }



  async getFromUrl() {
    console.log (window.location.pathname)
  }

  /**
   * Get the selection from the URL
   * @returns {array} The new selection not loaded
   */
  async getFromUrlQuery() {

    // Get the string from the URL query
    const selectionString = new URLSearchParams(window.location.search).get('selection');

    // If there is no selection in the URL query, return an empty array
    if (selectionString === null) return [];

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


}

export default new Model();