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
   * Stop the overlay timer
   */
  stop() { model.stop(); }


  /**
   * Hide the overlay
   */
  hide() { view.hide(); }


  /**
   * Show the overlay and set focus on the overlay
   * @param {integer} fadeIn_ms Duration of the fade in effect in ms
   */
  show(fadeIn_ms) { view.show(fadeIn_ms); }

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