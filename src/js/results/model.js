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
    
    // Compute sum for each question
    this.data.questions.forEach((question) => {
      nbCharacters += question.finalAnswer.trim().length + 1;
      memorizationRatio+= question.memorizationRatio;
      typingtime+= question.typingTime;
    })

    // Compute average
    this.data.wpm =  12000 * (nbCharacters / typingtime);
    this.data.memorizationRatio = memorizationRatio / this.data.questions.length;

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