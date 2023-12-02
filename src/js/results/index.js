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
   * Show the result modal
   */
  show() { view.show(); }

}


export default new Results();