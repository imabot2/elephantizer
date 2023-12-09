import card from "Js/cardTyping";
import correction from "Js/correction";
import answerBar from "Js/answerBar";
import overlay from "Js/overlay";
import settings from "Js/settings";

/**
 * View for the Typing Core module
 */
class View {

  /**
   * Constructor
   * - Set the right answer flag and events
   */
  constructor() {
    this.isRightAnswerVisible = false;
    this.rightAnswerOverEvent = new Event("right-answer-over-event");
  }

  /**
   * Show the right answer
   * @param {string} answer The right answer to display
   * @returns A promise resolved when the 
   */
  showRightAnswer(answer) {
    return new Promise((resolve) => {

      // Resolve the promise when the right answer is over
      document.body.addEventListener("right-answer-over-event", () => {
        this.isRightAnswerVisible = false;
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

      }, settings.get('rightAnswerDuration'));
    })
  }


  /**
   * Show the last answer of the quizz
   * @returns Return a promise when the last answer is shown
  */
  showLastAnswer(answer) {
    return new Promise((resolve) => {
      if (settings.get('timerMode') !== 'down') { resolve(); return; }
      this.showRightAnswer(answer).then (() => { resolve(); })
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

  /**
   * Hide the overlay
   */
  hideOverlay() {
    overlay.hide();
    answerBar.enable();
  }


  /**
   * Show the overlay
   */
  showOverlay(fadeIn_ms) {
    overlay.show(fadeIn_ms);
    answerBar.disable();
  }

  /**
   * Show or hide the overlay 
   */
  setOverlayVisible(visible, fadeIn_ms) {
    if (visible) this.showOverlay(fadeIn_ms);
    else this.hideOverlay();
  }
}

export default new View();