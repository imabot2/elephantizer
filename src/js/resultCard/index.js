import View from "./view.js";


/**
 * Facade for the Result Card module
 */
export default class ResultCard {

  /**
   * Create the view since this module is not a singleton
   */
  constructor() {this.view = new View(); }


  /**
   * Populate the card with the data for a given question
   * @param {object} stats Question data statistics
   */
  populate(stats) { this.view.populate(stats); }


  /**
   * Append the card to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) { this.view.appendTo(parent); }
}