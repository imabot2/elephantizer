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
   * Return an array with the categories
   * @returns An array of objects containing the name and path of the categories
   */
  categories(path) {
    
    // Isolate the category
    let categories = catalog[path].category;

    // Isolate the name and the path
    let list = Object.keys(categories).map((key) => {
      
      // Return the object containing the categories (name and path)
      return {
        name: categories[key].name,
        path: `${path}/${key}`,
      };
    })
    // Return the list of name and path
    return list;
  }

}


export default new Model();