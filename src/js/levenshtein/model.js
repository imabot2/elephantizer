import Levenshtein from "./levenshtein.js";
import settings from "Js/settings"

class Model {
  constructor() {
    this.levenshtein = new Levenshtein();
  }


  /**
   * Reset the Levenshtein with the settings options
   */
  reset() {

    // Prepare the options object
    const options = {
      trim: true,
      removeExtraSpaces: true,
      ignoreHyphens: settings.get('ignoreHyphens'),
      caseSensitive: !settings.get('caseInsensitive'),
      ignoreAccents: settings.get('ignoreAccents'),
      appendSpaces: true,
    }

    // Apply the options
    this.levenshtein.setOptions(options);
  }


  /**
   * Compute the Levenshtein distance between two strings
   * @param {string} from Initial string
   * @param {string} to Final string
   * @returns The Levenshtein distance between the two string
   */
  distance(from, to) {
    return this.levenshtein.distance(from, to);
  }


  /**
   * Compute a HTML string with the operation as class of the HTML elements
   * @returns A string containing the HTML
   */
  getHTML() {
    return this.levenshtein.getHTML();
  }

}


export default new Model();