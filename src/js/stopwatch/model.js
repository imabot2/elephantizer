import view from "./view.js";
import Timer from "Js/timer";
import settings from "Js/settings";

class Model {
  constructor() {

    this.timer = new Timer();
    // Set the callback function to update the timer
    this.timer.onUpdate((time) => this.onUpdate(time));

    // Callback function when the timer is over
    this.onTimeOverCallback = () => { }
    this.timer.onTimerOver(() => { this.onTimeOverCallback(); });

    // Reset the timer
    this.reset();
  }


  /**
   * Reset the stopwatch according to the current settings
   */
  reset() {

    // Hide the stopwatch
    view.hide();

    // Initialize the stopwatch with the settings
    if (settings.get('timerMode') === 'down')
      this.timer.init(settings.get('duration'), 'down');
    else
      this.timer.init(0, 'up');

    // Force first refresh
    this.refresh();
  }



  /**
   * Start or restart the timer
   */
  start() {
    this.timer.start();
    view.unblink();
  }


  /**
   * Pause the timer
   */
  pause() {
    this.timer.pause();
    view.blink();
  }

  /**
   * Refresh the timer in the view
   * It time is not provided, get current time from the timer
   * @param {object} time The time object with minutes, seconds ...
   */
  refresh(time) {

    time = time ?? this.timer.getTime();
    if (time.countDown)
      view.setValue(time.sec, time.doz);
    else
      view.setValue(time.min, time.sec);
  }

  /**
   * Callback function called when the timer must be updated
   * @param {object} time The time object with minutes, seconds ...
   */
  onUpdate(time) {
    this.refresh(time);
  }


  /**
   * Set the callback function called when the timer is over
   * @param {function} callback Callback function called when the timer is over
   */
  setTimeOverCallback(callback) {
    this.onTimeOverCallback = callback;
  }

}

export default new Model();