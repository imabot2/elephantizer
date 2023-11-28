import view from "./view.js";

class Correction {
  constructor() { }

  /**
   * Set and display the correction or hide the correction bar if string is empty
   * @param {string} correction The correction to display
   */
  setCorrectionHTML(correction) { view.setCorrectionHTML(correction); }


  /**
   * Update and show the right answer
   * @param {string} rightAnswer The right answer to display
 */
  setRightAnswer(rightAnswer) { view.setRightAnswer(rightAnswer); }


  /**
   * Hide the right answer (flip the right answer card)
   */
  hideRightAnswer() { view.hideRightAnswer(); }


  /**
   * Resize the main container to adapt to the card content
   */
  onResize() { view.onResize(); }


  /**
   * Append the correction elements to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) { view.appendTo(parent); }
}


export default new Correction();