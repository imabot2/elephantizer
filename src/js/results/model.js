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
    let finalDistanceRatio = 0;
    let maxDistance = 0;
    let maxDistanceRatio = 0;
    let timeToFirstKey = 0;
    let timeToFirstKeyRatioUser = 0;
    let rightAnswersRaw = 0;
    let rightAnswers = 0;
    let progress = 0;
    let previousScore = 0;
    let newScore = 0;

    
    // Compute sum for each question
    this.data.questions.forEach((question) => {
      nbCharacters += question.finalAnswer.trim().length + 1;
      memorizationRatioUser+= question.memorizationRatioUser;
      memorizationRatio+= question.memorizationRatio;
      typingtime+= question.typingTime;
      finalDistance += question.finalDistance;
      finalDistanceRatio += question.finalDistanceRatio;
      maxDistance += question.maxDistance;
      maxDistanceRatio += question.maxDistanceRatio;
      timeToFirstKey += question.time - question.typingTime;
      timeToFirstKeyRatioUser += question.timeToFirstKeyRatioUser;
      rightAnswers += (question.finalDistance == 0);
      rightAnswersRaw += (question.maxDistance == 0);
      progress += (question.previousScore == 0) ? question.newScore : question.newScore/question.previousScore;
      previousScore += question.previousScore;
      newScore += question.newScore;
    })

    // Compute average
    const N = this.data.questions.length;
    this.data.nbCharacters = nbCharacters;
    this.data.wpm =  12000 * (nbCharacters / typingtime);
    this.data.wpmRaw =  12000 * (nbCharacters / this.data.duration);
    this.data.memorizationRatioUser = memorizationRatioUser / N;
    this.data.memorizationRatio = memorizationRatio / N;
    this.data.finalDistance = finalDistance;
    this.data.finalDistanceRatio = finalDistanceRatio / N;
    this.data.maxDistance = maxDistance;
    this.data.maxDistanceRatio = maxDistanceRatio / N;
    this.data.timeToFirstKey_sec = (timeToFirstKey / N)/1000;
    this.data.timeToFirstKeyRatioUser = timeToFirstKeyRatioUser / N;
    this.data.rightAnswers = rightAnswers;
    this.data.rightAnswersRaw = rightAnswersRaw;
    this.data.progress = progress/N;
    this.data.previousScore = previousScore; 
    this.data.newScore = newScore;
    this.data.progress = (newScore - previousScore) / N

    // Compute global score
    this.data.score = this.data.wpmRaw * this.data.memorizationRatio * 100;

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