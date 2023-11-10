import view from "./view.js";
import model from "./model.js";

class MenuMemoryTests {
  constructor() { }


  /**
   * Append the settings to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) { view.appendTo(parent); }


    /**
     * Collapse the category menu
     */
    collapse() { view.collapse(); }

  /**
   * Extend the collapse menu
   */
  expand(path) { view.expand(path); }
}


export default new MenuMemoryTests();