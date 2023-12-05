import view from "./view.js";


/**
 * Module for the loader overlay
 */
class Overlay {
  constructor() { }


  /**
   * Hide the overlay
   */
  hide() { view.hide(); }


  /**
   * Show the overlay and set focus on the overlay
   */
  show() { view.show(); }

}

export default new Overlay();