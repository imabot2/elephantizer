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


  /**
   * Navigate to the requested menu
   * @param {string} target Name of the target menu
   */
  navigate(target) { model.navigate(target); }


  /**
   * Open the menu modal
   */
  open() { view.open(); }


  /**
   * Set the callback function called when the modal is hide
   * @param {function} callback Callback function 
   */
  onHide(callback) { view.onHide(callback); }
}

export default new Menu();