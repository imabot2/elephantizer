import view from "./view.js";
import model from "./model.js";


/**
 * Module for displaying the results at the end of the memory test
 */
class Results {
  constructor() { }


  /**
   * Reset the results for the next memory test
   * @param {string} mode The current typing mode [ 'typing' | 'card' ]
   */
  reset(mode) { model.reset(mode); }


  /**
   * Add a new question in the results
   * @param {object} data The question data
  */
  addQuestion(data) { model.addQuestion(data); }


  /**
   * Store the test duration in milliseconds
   * @param {integer} time_ms The test duration in milliseconds
   */
  setTestDuration(time_ms) { model.setTestDuration(time_ms); }


  /**
   * Process data when the test is over
   * - Compute global WPM
   * - Compute global memorization ratio
   * @returns False if the user hasn't answered any questions.
   */
  process() { return model.process(); }


  /**
   * Get results status, true when the modal is ready to show results
   * @returns True when the modal is ready to show results
   */
  isReady() { return view.isReady; }



  /**
   * Show the result modal
   */
  show() { view.show(); }


  /**
   * Set the callback function called when the modal is hide
   * @param {function} callback Callback function
   */
  onHide(callback) { view.onHide(callback); }


  /**
   * Set the callback function called when the modal is hidden
   * @param {function} callback Callback function
   */
  onHidden(callback) { view.onHidden(callback); }
}


export default new Results();