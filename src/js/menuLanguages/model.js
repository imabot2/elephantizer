import catalog from "Catalog/catalog.js";


/**
 * Model for th menuLanguage module
 */
class Model {

  /**
   * Constructor
   */
  constructor() {}


  /**
   * Iterator protocol
   */
  *iterator() {
    // For each language in the catalog
    for (let lang in catalog) {
      // Product the name and the path of the current language
      yield {
        name: catalog[lang].name, 
        path: `${lang}`,
      };
    }
  }


  /**
   * Iterable protocol
   */
  [Symbol.iterator]() {
    return this.iterator();
  }

}


export default new Model();