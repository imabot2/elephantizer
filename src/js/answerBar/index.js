import view from "./view.js";

class AnswerBar {
  constructor() { }

  /**
 * Append the answer bar to the provided parent
 * @param {object} parent Parent element
 */
  appendTo(parent) { view.appendTo(parent); }

}


export default new AnswerBar();