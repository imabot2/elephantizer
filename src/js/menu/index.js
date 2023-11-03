import view from "./view.js";
import model from "./model.js";





class Menu {
  constructor() {

  }

  /**
   * Set the menu title
   * @param {string} New title of the menu
   */
  setTitle(title) { view.setTitle(title); }

}

export default new Menu();