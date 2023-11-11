import view from "./view.js";
import model from "./model.js";

class MenuCategories {
  constructor() { }

  /**
   * Update the buttons accoring to the current selection
   * @param {array} selection An array containing the paths of the current selection
   */
  updateSelection(selection) { view.updateSelection(selection); }


  /**
   * Append the settings to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) { view.appendTo(parent); }

  /**
   * Collapse the series menu
   */
  collapse() { view.collapse(); }

  
  /**
   * Extend the collapse menu
   */
  expand(path) { view.expand(path); }
}


export default new MenuCategories();