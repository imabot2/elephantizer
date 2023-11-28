import view from "./view.js";

class Correction {
  constructor() { }

  /**
   * Display the correction or hide the correction bar if string is empty
   * @param {string} correction The correction to display
   */
  setCorrectionHTML(correction) { view.setCorrectionHTML(correction); }


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