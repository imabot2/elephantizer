import series from "Js/series";
import statistics from "Js/statistics";
import results from "Js/results";

/**
 * Model for the question statistics
 */
class Model {

  /**
   * Constructor 
   * Initialize the data
   */
  constructor() {

    // Initialize the question statistics test at startup
    this.data = {};
  }


  /**
   * Start a new question in the
   * @param {string} path Path of the next question
   * @param {string} uid UID of the next question
   */
  new(path, uid) {

    // Get question data and statistics
    const stats = statistics.get(path, uid);
    const question = series.get(path, uid);

    // Create a new question with path and uid
    this.data = {
      'path': path,
      'uid': uid,
      'count': stats.count,
      'previousScore': stats.score,
      'maxDistance': 0,
      'rightAnswer': question.answer,
    }
  }


  /**
   * Process the last question
   * - compute the ratio 
   * - store the question in the results
   * @returns The statistics for the question
   */
  process() {

    // Compute the statistics
    this.computeWpm();
    this.computeMaxDistanceRatio();
    this.computeFinalDistanceRatio();
    this.computeTimeToFirstKeyRatio();
    this.computeMemorizationRatio();

    // Update the deck global statistics and get previous and new score
    this.data.newScore = statistics.update(this.data.path, this.data.uid, this.data.memorizationRatio);

    // Add the question in the results    
    results.addQuestion(this.data);

    return this.data;
  }


  /**
   * Compute the global memorization ratio 
   */
  computeMemorizationRatio() {
    this.data.memorizationRatio = this.data.timeToFirstKeyRatio * this.data.maxDistanceRatio * this.data.finalDistanceRatio;
    this.data.memorizationRatioUser = this.data.timeToFirstKeyRatioUser * this.data.maxDistanceRatio * this.data.finalDistanceRatio;
  }



  /**
   * Compute the memorization ratio
   * Convert time to first key into ratio in the range [0; 1]
   */
  computeTimeToFirstKeyRatio() {
    const timeToFirstKey_sec = (this.data.time - this.data.typingTime) / 1000;
    const ratio = 1 - 1 / (1 + Math.exp(-1.5 * timeToFirstKey_sec + 5.3));
    this.data.timeToFirstKeyRatio = ratio;
    this.data.timeToFirstKeyRatioUser = Math.min(1.1002588437228038 * ratio, 1);
  }


  /**
   * Compute the maximum distance ratio
   */
  computeMaxDistanceRatio() {
    this.data.maxDistanceRatio = Math.max(1 - (this.data.maxDistance / this.data.rightAnswer.length), 0);
  }


  /**
   * Compute the final distance ratio
   */
  computeFinalDistanceRatio() {
    this.data.finalDistanceRatio = Math.max(1 - (this.data.finalDistance / this.data.rightAnswer.length), 0);
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
    this.data.wpm = 12000 * (this.data.finalAnswer.trim().length + 1) / this.data.typingTime;
  }


  /**
   * Return the current memorization ratio
   * @returns The current memorization ratio
   */
  getScore() {
    return this.data?.newScore ?? this.data?.previousScore ?? 0;
  }

  /**
   * Store the typing time
   * @param {object} time_ms The typing time in milliseconds
   */
  setTypingTime(time_ms) {
    this.data.typingTime = time_ms;
  }


  /**
   * Update the maximum distance for the current question
   * @param {integer} distance The current Levenshtein distance
   */
  updateMaxDistance(distance) {
    this.data.maxDistance = Math.max(this.data.maxDistance, distance);
  }


  /**
   * Store the final distance when the answer is submitted
   * @param {integer} distance The final distance at the end of the memory test
   */
  setFinalDistance(distance) {
    this.data.finalDistance = distance;
  }


  /**
   * Store the final submitted answer
   * @param {string} answer The final answer
   */
  setFinalAnswer(answer) {
    this.data.finalAnswer = answer;
  }


  /**
   * Store the time to answer the last and current question
   * @param {object} time_ms The final time in milliseconds
   */
  setTime(time_ms) {
    this.data.time = time_ms;
  }
}


export default new Model();