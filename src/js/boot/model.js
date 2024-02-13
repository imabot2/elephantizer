import catalog from "Catalog/catalog.js";



class Model {
  constructor() { }


  /**
   * Get the deck path from the URL (if exists and valid)
   * @returns The deck required from the URL path (if valid)
   */
  getFromUrl() {
    // Get the path from the URL
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    // If the path is valid, return the path, otherwise, return undefined
    if (this.checkPath(path)) return path;
    return undefined;
  }


  /**
   * Get the selection from the URL
   * @returns {array} The new selection not loaded
   */
  getFromUrlQuery() {

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