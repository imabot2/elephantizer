import view from "./view.js";

class SpecialCharacters {
  constructor() { }

  /**
 * Append the answer bar to the provided parent
 * @param {object} parent Parent element
 */
  appendButtonTo(parent) { view.appendButtonTo(parent); }

}


export default new SpecialCharacters();