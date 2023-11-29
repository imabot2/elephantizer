import { Model } from "./model.js";



export default class Timer {
  
  /**
   * Create a new timer object
   */
  constructor() {
    this.model = new Model();
  }


  /*
   * Initialize the timer to a given value
   * @param {integer} seconds Inital value of the timer in seconds
   * @param {string} direction Direction of the timer [ "up" | "down" ]
   */
  init(seconds, direction) { this.model.init(seconds, direction); }


  /**
   * Reset the timer to the last initial configuration
   */
  reset() { this.model.reset(); }

  
  /**
   * Reset and restart the timer
   */
  restart() { this.model.restart(); }

  /**
   *  Start or restart the timer
   */
  start() { this.model.start(); }


  /**
   *  Pause the timer
   */
  pause() { this.model.pause(); }
  

  /**
   * Get the current time splitted in minutes, seconds dozens
   * @returns  {object} An object with { min : minutes, sec : seconds, doz: dozen of ms, countDown: count down mode (bool) }
   */
  getTime() { return this.model.getTime(); }



  /**
   * Set the callback function called when the timer is updated (every second)
   * @param {function} callback Callback functin called when the timer is updated
   */
  onUpdate(callback) { this.model.onUpdate(callback); }


  /**
   * Set the callback function called when the timer is over
   * @param {function} callback Callback function called when the timer is over
   */
  onTimerOver(callback) { this.model.onTimerOver(callback) }

}