import catalog from "Catalog/catalog.js";



/**
 * Model for th menuLanguage module
 */
class Model {

  /**
   * Constructor
   */
  constructor() { }


  /**
   * Return an array with the categories
   * @returns An array of objects containing the name and path of the categories
   */
  themes(path) {

    // Split the path
    let language, category;
    [language, category] = path.split('/');

    // Isolate the category
    let themes = catalog[language].category[category].theme;

    
    // Isolate the name and the path
    let list = Object.keys(themes).map((key) => {

      // Return the object containing the categories (name and path)
      return {
        name: themes[key].name,
        path: `${language}/${category}/${key}`,
      };
    })
    // Return the list of name and path
    return list;
  }

}


export default new Model();