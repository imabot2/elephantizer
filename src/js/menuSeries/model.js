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
   * Return an array with the current series
   * @returns An array of objects containing the name and path of the serries
   */
  series(path) {
    // Split the path
    let language, category, theme;
    [language, category, theme] = path.split('/');

    // Isolate the category
    let series = catalog[language].category[category].theme[theme].series;

    // Isolate the name and the path
    let list = Object.keys(series).map((key) => {

      // Return the object containing the categories (name and path)
      return {
        name: series[key].name,
        path: `${language}/${category}/${theme}/${key}`,
      };
    })
    // Return the list of name and path
    return list;
  }

}


export default new Model();