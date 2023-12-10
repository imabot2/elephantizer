import model from "./model.js";



/**
 * Module managing the current question statistics
 */
class QuestionStatistics {

  constructor() { }


  /**
   * Start a new question in the
   * @param {string} path Path of the next question
   * @param {string} uid UID of the next question
   */
  new(path, uid) { model.new(path, uid); }


  /**
   * Process the last question
   */
  process() { model.process(); }


  /**
   * Return the current memorization ratio
   * @returns The current memorization ratio
   */
  getScore() { return model.getScore(); }


  /**
   * Store the typing time
   * @param {object} time_ms The typing time in milliseconds
   */
  setTypingTime(time_ms) { model.setTypingTime(time_ms); }

  /**
   * Store the current question counter
   * @param {integer} count Number of time the question has been asked
   */
  setCounter(count) { model.setCounter(count); }

  /**
   * Store the current question right answer
   * @param {string} answer Expected answer for this question
   */
  setRightAnswer(answer) { model.setRightAnswer(answer); }


  /**
   * Update the maximum distance for the current question
   * @param {integer} distance The current Levenshtein distance
   */
  updateMaxDistance(distance) { model.updateMaxDistance(distance); }


  /**
   * Store the final distance when the answer is submitted
   * @param {integer} distance The final distance at the end of the memory test
   */
  setFinalDistance(distance) { model.setFinalDistance(distance); }


  /**
   * Store the final submitted answer
   * @param {string} answer The final answer
   */
  setFinalAnswer(answer) { model.setFinalAnswer(answer); }


  /**
   * Store the time to answer the last and current question
   * @param {object} time_ms The final time in milliseconds
   */
  setTime(time_ms) { model.setTime(time_ms); }

}


export default new QuestionStatistics();