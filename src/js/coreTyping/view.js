import model from "./model.js";
import settings from "Js/settings";
import card from "Js/cardTyping";

/**
 * View for the Typing Core module
 */
class View {

  constructor() {}


  /**
   * Prepare the next question in background
   * @param {object} data An object containing the next question data
   */
  prepareNextQuestion(data) {
    card.prepareNextQuestion(data);
  }


  /**
   * Switch to the next question
   * @returns A promise resolved when the transition is over
   */
  switchToNextQuestion() {
    return card.switchToNextQuestion();
  }
}

export default new View();