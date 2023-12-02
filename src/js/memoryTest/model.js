import selection from "Js/selection";
import series from "Js/series";
import statistics from "Js/statistics";



class Model {
  constructor() {

    // Initialize the memory test at startup
    this.meta = {};
    this.questions = [];
  }


  /**
   * Reset the memory test 
   * - Empty the question list
   * - Reset the current question
   */
  reset(mode) {

    // Store the meta data
    // - current mode (typing or cards)
    // - current selection
    this.meta = {
      'mode': mode,
      'selection': selection.current(),
    }

    // Memory test is empty at startup
    this.questions = [];
  }


  /**
   * Start a new question in the
   * @param {string} path Path of the next question
   * @param {string} uid UID of the next question
   */
  createNewQuestion(path, uid) {

    // Get question data and statistics
    const stats = statistics.get(path, uid);
    const question = series.get(path, uid);

    // Create a new question with path and uid
    const newQuestion = {
      'path': path,
      'uid': uid,
      'count': stats.count,
      'maxDistance': 0,
      'rightAnswer': question.answer,
    }

    // Append the question at the end of the array
    this.questions.push(newQuestion);
  }

  /**
   * Process the last question
   */
  process() {

    this.computeWpm();
    this.computeRatioMaxDistance();
    this.computeRatioFinalDistance();
    this.computeRatioFinalDistance();
    this.computeAnswerScore();
    
    console.log(this.current());
  }


  /**
   * Compute the score for the current question
   */
  computeAnswerScore() {
    // Compute the weighted global score for this question
    console.log ('TODO revoir le calcul du score avec le temps avant le premier caractère')
    console.log (this.questions)
    console.log (this.current().time-this.current().typingTime)
    //qStat.answerScore = 0.40 * qStat.ratioDistance + 0.40 * qStat.ratioMaxDistance + 0.2 * qStat.ratioWpm;
  }


  /**
   * Compute the maximum distance ratio
   */
  computeRatioMaxDistance() {    
    this.current().ratioMaxDistance = Math.max(1 - (this.current().maxDistance / this.current().rightAnswer.length), 0);
  }


  /**
   * Compute the final distance ratio
   */
  computeRatioFinalDistance() {    
    this.current().ratioFinalDistance = Math.max(1 - (this.current().finalDistance / this.current().rightAnswer.length), 0);
  }


  /**
   * Compute the WPM for the current question
   */
  computeWpm() {
    // Compute WPM
    // Length +1 to consider the last space
    // Characters per millisecond = Number of character / typing time
    // Characters per minute = 60000 * Characters per millisecond 
    // Words per minute = Characters per minute / 5
    this.current().wpm = 12000 * (this.current().finalAnswer.trim().length + 1) / this.current().typingTime;
  }


  /**
   * Store the typing time
   * @param {object} time_ms The typing time in milliseconds
   */
  setTypingTime(time_ms) {
    this.current().typingTime = time_ms;
  }





  /**
   * Update the maximum distance for the current question
   * @param {integer} distance The current Levenshtein distance
   */
  updateMaxDistance(distance) {
    this.current().maxDistance = Math.max(this.current().maxDistance, distance);
  }


  /**
   * Store the final distance when the answer is submitted
   * @param {integer} distance The final distance at the end of the memory test
   */
  setFinalDistance(distance) {
    this.current().finalDistance = distance;
  }


  /**
   * Store the final submitted answer
   * @param {string} answer The final answer
   */
  setFinalAnswer(answer) {
    this.current().finalAnswer = answer;
  }


  /**
   * Store the time to answer the last and current question
   * @param {object} time_ms The final time in milliseconds
   */
  setTime(time_ms) {
    this.current().time = time_ms;
  }


  /**
   * Get the last ans current question appended in the memory test
   * @returns A reference to the last question 
   */
  current() {
    return this.questions[this.questions.length - 1];
  }
}


export default new Model();