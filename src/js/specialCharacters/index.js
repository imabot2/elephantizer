import view from "./view.js";

class SpecialCharacters {
  constructor() { }

  /**
   * Set the callback function called when the user click on a special character
   * @param {function} callback Callback function
   */
  setButtonClickCallback(callback) { view.setButtonClickCallback(callback); }


  /**
   * Populate the special characters modal
   * @param {array} list Array of characters to populate
   */
  populate(list) { view.populate(list); }


  /**
   * Append the special characters button to the provided parent
   * @param {object} parent Parent element
   */
  appendButtonTo(parent) { view.appendButtonTo(parent); }


  /**
   * Set the callback function called when the modal is show
   * @param {function} callback Function called when the modal is show
   */
  setShowModalCallback(callback) { view.setShowModalCallback(callback); }


  /**
   * Set the callback function called when the modal is hide
   * @param {function} callback Function called when the modal is hide
   */
  setHiddenModalCallback(callback) { view.setHiddenModalCallback(callback); }


  /**
   * Show the modal
   */
  open() { view.open(); }


  /**
   * Hide the modal
   */
  close() { view.close(); }

}


export default new SpecialCharacters();