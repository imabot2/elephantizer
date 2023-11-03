import view from "./view.js";
import model from "./model.js";

class MenuLanguages {
  constructor() { }


  /**
   * Append the settings to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) { view.appendTo(parent); }


  /**
   * Extend the collapse menu
   */
  expand() { view.expand(); }
}


export default new MenuLanguages();