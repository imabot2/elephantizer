import view from "./view.js";
import selection from "Js/selection";


/**
 * Model for the Results module
 */
class Model {
  constructor() {
    
    // Results data (questions + statistics)
    this.data = {};

    // True when the results have been processed at least once
    this.isProcessed = false;
  }


  /**
   * Reset the results for the next memory test
   * @param {string} mode The current typing mode [ 'typing' | 'card' ]
   */
  reset(mode) {
    
    // Reset data
    this.data = {};

    // Store the meta data
    // - current mode (typing or cards)
    // - current selection
    this.data.mode = mode;
    this.data.selection = selection.current();
    this.data.questions = [];
  }


  /**
   * Process data when the test is over
   * - Compute global WPM
   * - Compute global memorization ratio
   * @returns False if the user hasn't answered any questions.
   */
  process() {

    if (this.data.questions.length === 0) return false;

    // Prepare sums for average calculation
    let nbCharacters = 0;
    let typingtime = 0;
    let memorizationRatioUser = 0;
    let memorizationRatio = 0;
    let finalDistance = 0;
    let maxDistance = 0;
    let timeToFirstKey = 0;
    let timeToFirstKeyRatioUser = 0;
    
    // Compute sum for each question
    this.data.questions.forEach((question) => {
      nbCharacters += question.finalAnswer.trim().length + 1;
      memorizationRatioUser+= question.memorizationRatioUser;
      memorizationRatio+= question.memorizationRatio;
      typingtime+= question.typingTime;
      finalDistance += question.finalDistanceRatio;
      maxDistance += question.maxDistanceRatio;
      timeToFirstKey += question.time - question.typingTime;
      timeToFirstKeyRatioUser += question.timeToFirstKeyRatioUser;
    })

    // Compute average
    const N = this.data.questions.length;
    this.data.wpm =  12000 * (nbCharacters / typingtime);
    this.data.memorizationRatioUser = memorizationRatioUser / N;
    this.data.memorizationRatio = memorizationRatio / N;
    this.data.finalDistanceRatio = finalDistance / N;
    this.data.maxDistanceRatio = maxDistance / N;
    this.data.timeToFirstKey_sec = (timeToFirstKey / N)/1000;
    this.data.timeToFirstKeyRatioUser = timeToFirstKeyRatioUser / N;

    // Compute global score
    this.data.score = this.data.wpm * this.data.memorizationRatio * 100;

    // Update data in the view
    view.setData(this.data);
    console.log (this.data)

    return true;
  }


  /**
   * Add a new question in the results
   * @param {object} data The question data
   */
  addQuestion(data) {
    this.data.questions.push(data);
  }


  /**
   * Store the test duration in milliseconds
   * @param {integer} time_ms The test duration in milliseconds
   */
  setTestDuration(time_ms) {
    this.data.duration = time_ms;
  }


}


export default new Model();