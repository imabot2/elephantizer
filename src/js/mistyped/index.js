import model from "./model.js";


/**
 * Model for the Mistyped module
 */
class Mistyped {

  /**
   * Sanitize a string 
   * - Trim the string
   * - Remove spaces aroung hyphens
   * - Replace multiple spaces with single space
   * @param {string} str String to sanitize
   * @param {boolean} preserveLastSpace When true, preserve the space at the end of the string, otherwise, trim the space
   * @returns The sanitized string
   */
  sanitize(str, preserveLastSpace = false) { return model.sanitize(str, preserveLastSpace); }


  /**
   * Set the expected answer for future comparison
   * @param {string} answer The expected answer
   */
  setAnswer(expected) { model.setAnswer(expected); }


  /**
   * Count the cumulated number of erroneous characters in the user answer
   * @param {string} answer The answer submitted by the user
   */
  update(answer) { model.update(answer); }


  /**
   * Count the number of mistyped characters
   * @returns The number of mistyped characters
   */
  count() { return model.count(); }
}


export default new Mistyped();