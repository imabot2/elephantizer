import model from "./model.js";



/**
 * Module managing the current memory test statistics
 */
class MemoryTest {
  constructor() { }

  /**
   * Reset the memory test 
   * - Empty the question list
   * - Reset the current question
   */
  reset(mode) { model.reset(mode); }


  /**
   * Process the memory test data when the test is over
   */
  processTestOver() { model.processTestOver(); }


  /**
   * Process the last question
   */
  processQuestionOver() { model.processQuestionOver(); }


  /**
   * Start a new question in the
   * @param {string} path Path of the next question
   * @param {string} uid UID of the next question
   */
  createNewQuestion(path, uid) { model.createNewQuestion(path, uid); }


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


  /**
   * Store the test duration in milliseconds
   * @param {integer} time_ms The test duration in milliseconds
   */
  setTestDuration(time_ms) { model.setTestDuration(time_ms); }


}


export default new MemoryTest();