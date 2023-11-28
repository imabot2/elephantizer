import model from "./model.js";

class Levenshtein {
  constructor() { }


  /**
   * Reset the Levenshtein with the settings options
   */
  reset() { model.reset(); }


  /**
   * Return the string sanitized (trim and remove extra spaces)
   * @param {string} str The string to sanitize
   * @returns The sanitized string
   */
  sanitize(str) { return model.sanitize(str); }


  /**
   * Compute the Levenshtein distance between two strings
   * @param {string} from Initial string
   * @param {string} to Final string
   * @returns The Levenshtein distance between the two string
   */
  distance(from, to) { return model.distance(from, to); }


  /**
   * Compute a HTML string with the operation as class of the HTML elements
   * @returns A string containing the HTML
   */
  getHTML() { return model.getHTML(); }
}


export default new Levenshtein();