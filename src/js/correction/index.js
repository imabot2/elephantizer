import view from "./view.js";

class Correction  {
  constructor() {}


  /**
   * Append the correction elements to the provided parent
   * @param {object} parent Parent element
   */
    appendTo(parent) { view.appendTo(parent); }
}


export default new Correction();