import view from "./view.js";


/**
 * Facade for the flag module
 */
class Flag {
  /**
   * Constructor
   */
  constructor() { }


  /**
   * Set the next flag to display
   * @param {string} imageSrc Path or URL of the next flag
   */
  setNext(imageSrc) { view.setNext(imageSrc); }


  /**
   * Set and display the current flag
   * @param {string} imageSrc Path or URL of the current flag
   */
  setCurrent(imageSrc) { view.setCurrent(imageSrc); }


  /**
   * Switch the flags (run the animation)
   * Do not run the animation if the flags are identical
   * @returns True if the flag has changed, false otherwier
   */
  showNext() { view.showNext(); }


  /**
   * Append the flag to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) { view.appendTo(parent); }
}

export default new Flag();