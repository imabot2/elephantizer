import view from "./view.js";


/**
 * Module that manages the card for typing mode
 * - inner images
 * - outer images
 * - text questions
 */
class CardTyping {
  constructor() { }

  /**
   * Hide the current question and show the next question
   * @returns A promise when the transition is over
   */
  switchToNextQuestion() { return view.switchToNextQuestion(); }


  /**
   * Prepare the next question (set image and store data)
   * @param {object} data Data of the next question
   */
  prepareNextQuestion(nextQuestion) { view.prepareNextQuestion(nextQuestion); }


  /**
   * Hide the overlay
   */
  hideOverlay() { view.hideOverlay(); }


  /**
   * Show the overlay
   */
  showOverlay() { view.showOverlay(); }

  
  /**
   * Set the callback function when the user click on the overlay or press a key
   * @param {function} callback The function call when the user click or press a key
   */
  setOverlayEventCallback(callback) { view.setOverlayEventCallback(callback); }
}


export default new CardTyping();