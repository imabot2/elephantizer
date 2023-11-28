import model from "./model.js";
import view from "./view.js";


/**
 * Main file of the stopwatch module
 */
class Stopwatch {

  /**
   * Constructor 
   */
  constructor() { }


  /**
   * Reset the stopwatch
   * @param {integer} duration Initial time of the stopwatch in seconds
   * @param {string} direction Direction of the stopwatch [ 'down' | 'up' ]
   */
  reset(duration, direction) { model.reset(duration, direction); }

  /**
   * Start or restart the stopwatch
   */
  start() { model.start(); }
  

  /**
   * Show the stopwatch with the animation
   */
  show() { view.show(); }


  /**
  * Hide the stopwatch with the animation
  */
  hide() { view.hide(); }


  /**
   * Set the callback function called when the timer is over
   * @param {function} callback Callback function called when the timer is over
   */
  setTimeOverCallback(callback) { model.setTimeOverCallback(callback); }

}


export default new Stopwatch();