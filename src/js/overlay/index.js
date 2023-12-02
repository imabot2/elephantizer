import view from "./view.js";
import model from "./model.js";



class Overlay {
  constructor() { }


  /**
     * Reset the overlay timer to its inital value
     */
  resetTimer() { model.resetTimer(); }


  /**
   * Restart the overlay timer to its inital value
   */
  restartTimer() { model.restartTimer(); }


  /**
   * Hide the overlay
   */
  hide() { view.hide(); }


  /**
   * Show the overlay
   */
  show() { view.show(); }

  /**
   * change the overlay message for the invitation to start
   */
  setStartMessage() { view.setStartMessage(); }


  /**
   * change the overlay message for the invitation to continue
   */  
  setContinueMessage() { view.setContinueMessage(); }

  /**
   * Set the callback function when the user click on the overlay or press a key
   * @param {function} callback The function call when the user click or press a key
   */
  setClickEventCallback(callback) { view.setClickEventCallback(callback); }


  /**
   * Set the callback function called when the overlay timer is over
   * @param {function} callback Function called when the timer is over
   */
  setTimeOverEventCallback(callback) { model.setTimeOverEventCallback(callback); }

}

export default new Overlay();