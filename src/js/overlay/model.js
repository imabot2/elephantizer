import Timer from "Js/timer";

class Model {
  constructor() {

    // Create and configure the timer for the overlay
    this.overlayTimer = new Timer(10, 'down');

    // Set the callback when the timer is over
    this.timeOverCallback = () => {};
    this.overlayTimer.onTimerOver(() => { this.timeOverCallback(); });
  }

  /**
   * Reset the overlay timer to its inital value
   */
  resetTimer() {
    this.overlayTimer.reset();
  }

  /**
   * Restart the overlay timer to its inital value
   */
  restartTimer() {
    this.overlayTimer.restart();
  }


  /**
   * Set the callback function called when the overlay timer is over
   * @param {function} callback Function called when the timer is over
   */
  setTimeOverEventCallback(callback) { 
    this.timeOverCallback = callback; 
  }


}

export default new Model();