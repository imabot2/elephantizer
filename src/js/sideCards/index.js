import view from "./view.js"


/**
 * Facade for the Side Cards module
 */
class SideCards {
  constructor() { }



  /**
   * Show the success card.
   * The card is automaticaly hidden after a delay
   * @param {float} score Score of the card
   * @param {float} progress The progress percentage
   * @param {integer} ms Delay to answer the question in milliseconds
   * @param {float} wpm wordd per minute
   */
  showSuccessCard(score, progress, ms, wpm) { view.showSuccessCard(score, progress, ms, wpm); }


  /**
   * Show the failed card.
   * The card is automaticaly hidden after a delay
   * @param {float} score Score of the card
   * @param {float} progress The progress percentage
   * @param {integer} ms Delay to answer the question in milliseconds
   * @param {float} wpm wordd per minute
   */
  showFailedCard(score, progress, ms, wpm) { view.showFailedCard(score, progress, ms, wpm); }


  /**
   * Return a promise resolved when the side cards are hidden
   * @returns A promise resolved when the side card are hidden
   */
  waitForCardsOver() { return view.waitForCardsOver(); }
}


export default new SideCards();