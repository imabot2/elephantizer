import model from "./model.js";
import settings from "Js/settings";
import card from "Js/cardTyping";
import correction from "Js/correction";

/**
 * View for the Typing Core module
 */
class View {

  constructor() {
    this.isRightAnswerVisible = false;
    this.rightAnswerOverEvent = new Event("right-answer-over-event");
  }

  /**
   * Show the right answer during delay_ms milliseconds
   * @param {string} answer The right answer to display
   * @returns A promise resolved when the 
   */
  showRightAnswer(answer, delay_ms) {
    return new Promise((resolve) => {

      // Resolve the promise when the right answer is over
      document.body.addEventListener("right-answer-over-event", () => {
        this.isRightAnswerVisible = false
        resolve();
      }, { once: true });

      // If the right answer is already visible, return;
      if (this.isRightAnswerVisible) return;
      
      // Set the flag
      this.isRightAnswerVisible = true;

      // Show the expected answer      
      correction.setRightAnswer(answer);

      
      // Display the answer during the requested time
      setTimeout(() => {

        // Hide the correction before hidding the right answer
        correction.hideCorrection();

        // Hide the wrong answer
        correction.hideRightAnswer();

        // Trigger the event to resolve the promise
        document.body.dispatchEvent(this.rightAnswerOverEvent);

      }, delay_ms);
    })
  }
  

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