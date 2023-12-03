import selection from "Js/selection";


/**
 * Model for the Results module
 */
class Model {
  constructor() {
    this.data = {};
  }

  /**
   * Reset the results for the next memory test
   * @param {string} mode The current typing mode [ 'typing' | 'card' ]
   */
  reset(mode) {
    console.log (selection.current())
    
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
   */
  process() {

    // Prepare sums for average calculation
    let nbCharacters = 0;
    let typingtime = 0;
    let memorizationRatio = 0;
    let finalDistance = 0;
    let maxDistance = 0;
    let timeToFirstKey = 0;
    
    // Compute sum for each question
    this.data.questions.forEach((question) => {
      nbCharacters += question.finalAnswer.trim().length + 1;
      memorizationRatio+= question.memorizationRatio;
      typingtime+= question.typingTime;
      finalDistance += question.finalDistanceRatio;
      maxDistance += question.maxDistanceRatio;
      timeToFirstKey += question.time - question.typingTime;
    })

    // Compute average
    this.data.wpm =  12000 * (nbCharacters / typingtime);
    this.data.memorizationRatio = memorizationRatio / this.data.questions.length;
    this.data.finalDistanceRatio = finalDistance / this.data.questions.length;
    this.data.maxDistanceRatio = maxDistance / this.data.questions.length;
    this.data.timeToFirstKey_sec = (timeToFirstKey / this.data.questions.length)/1000;

    // Compute the time to first key ratio
    const ratio = 1.1-1/(1.1+Math.exp(-0.8*this.data.timeToFirstKey_sec + 4))
    this.data.timeToFirstKeyRatio = Math.min(ratio, 1);

    // Compute global score
    this.data.score = this.data.wpm * this.data.memorizationRatio * 100;

    console.log (this.data)
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