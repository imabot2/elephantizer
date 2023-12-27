import settings from "Js/settings";


const NOT_SET = 0;
const RIGHT = 1;
const WRONG = -1;

class Model {


  /**
   * Sanitize a string 
   * - Trim the string
   * - Remove spaces aroung hyphens
   * - Replace multiple spaces with single space
   * @param {string} str String to sanitize
   * @param {boolean} preserveLastSpace When true, preserve the space at the end of the string, otherwise, trim the space
   * @returns The sanitized string
   */
  sanitize(str, preserveLastSpace = false) {

    // Prepare last space character
    const lastSpace = (preserveLastSpace && str[str.length - 1] == ' ') ? ' ' : '';

    // Trim the string
    str = str.trim();

    // Remove spaces around hyphens
    str = str.replace(/\s*-\s*/g, "-");

    // Replace multiples spaces with single space
    str = str.replace(/\s+/g, " ");

    // Replace the last space if required
    return str + lastSpace;
  }


  /**
   * Set the expected answer for future comparison
   * @param {string} answer The expected answer
   */
  setAnswer(expected) {
    this.expected = this.sanitize(expected);

    // Replace hyphen if required in the options
    if (settings.get('ignoreHyphens')) this.expected = this.expected.replace(/-/g, " ");

    // To lower case if case non sensitive
    if (!settings.get('caseInsensitive')) this.expected = this.expected.toLowerCase();

    // Remove accents if ignored
    if (settings.get('ignoreAccents')) this.expected = this.expected.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    this.mask = new Array(this.expected.length).fill(NOT_SET);
  }


  /**
   * Count the cumulated number of erroneous characters in the user answer
   * @param {string} answer The answer submitted by the user
   */
  update(answer) {
    answer = this.sanitize(answer, true);

    // Replace hyphen if required in the options
    if (settings.get('ignoreHyphens')) answer = answer.replace(/-/g, " ");

    // To lower case if case non sensitive
    if (!settings.get('caseInsensitive')) answer = answer.toLowerCase();

    // Remove accents if ignored
    if (settings.get('ignoreAccents')) answer = answer.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    
    //console.log(this.expected)
    //console.log(answer)
    for (let i = 0; i < answer.length; i++) {

      if (answer[i] !== this.expected[i] ?? '') this.mask[i] = WRONG;
      else if (this.mask[i] === NOT_SET) this.mask[i] = RIGHT;
    }
  }


  /**
   * Count the number of mistyped characters
   * @returns The number of mistyped characters
   */
  count() {
    // Count the number of non valid characters
    let counter = this.mask.reduce((accumulator, status) => {
      return (status !== RIGHT) ? accumulator + 1 : accumulator;
    }, 0);

    // Limit to the number of character in the expeted answer
    return Math.min(counter, this.expected.length);

  }
}


export default new Model();


