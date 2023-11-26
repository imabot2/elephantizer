import view from "./view.js";

class Correction {
  constructor() { }



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