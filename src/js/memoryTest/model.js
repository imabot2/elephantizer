import selection from "Js/selection";
import series from "Js/series";
import statistics from "Js/statistics";


/**
 * Model for the Memory Test module
 */
class Model {
  constructor() {

    // Initialize the memory test at startup
    this.meta = {};
    this.questions = [];
    this.performances = {};
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
   * Process the memory test data when the test is over
   */
  processTestOver() {
    console.log (this.questions)
    // Remove the last question if not answered
    if (this.current().memorizationRatio === undefined) this.questions.pop();


    let nbCharacters = 0;
    let typingtime = 0;
    let memorizationRatio = 0;
    
    this.questions.forEach((question) => {
      console.log(question.memorizationRatio, question.wpm);
      nbCharacters += this.current().finalAnswer.trim().length + 1;
      memorizationRatio+= question.memorizationRatio;
      typingtime+= question.typingTime;
    })

    this.performances.wpm =  12000 * (nbCharacters / typingtime);
    this.performances.memorizationRatio = memorizationRatio / this.questions.length;

    console.log (this.performances);
    console.log (this.meta)

  }


  /**
   * Process the last question
   */
  processQuestionOver() {

    this.computeWpm();
    this.computeMaxDistanceRatio();
    this.computeFinalDistanceRatio();
    this.computeTimeToFirstKeyRatio();
    this.computeMemorizationRatio();
  }


  /**
   * Compute the global memorization ratio 
   */
  computeMemorizationRatio() {
    this.current().memorizationRatio = this.current().timeToFirstKeyRatio * this.current().maxDistanceRatio * this.current().finalDistanceRatio;
  }



  /**
   * Compute the memorization ratio
   * Convert time to first key into ratio in the range [0; 1]
   */
  computeTimeToFirstKeyRatio() {
    const timeToFirstKey_sec = (this.current().time-this.current().typingTime)/1000;
    const ratio = 1.1-1/(1.1+Math.exp(-0.8*timeToFirstKey_sec + 4))
    this.current().timeToFirstKeyRatio = Math.min(ratio, 1);
  }


  /**
   * Compute the maximum distance ratio
   */
  computeMaxDistanceRatio() {    
    this.current().maxDistanceRatio = Math.max(1 - (this.current().maxDistance / this.current().rightAnswer.length), 0);
  }


  /**
   * Compute the final distance ratio
   */
  computeFinalDistanceRatio() {    
    this.current().finalDistanceRatio = Math.max(1 - (this.current().finalDistance / this.current().rightAnswer.length), 0);
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
   * Store the test duration in milliseconds
   * @param {integer} time_ms The test duration in milliseconds
   */
  setTestDuration(time_ms) {
    this.meta.duration = time_ms;
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