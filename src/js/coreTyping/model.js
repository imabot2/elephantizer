import view from "./view.js";
import generator from "Js/generator";
import series from "Js/series";
import answerBar from "Js/answerBar";
import selection from "Js/selection"
import analytics from "Js/analytics";
import Timer from "Js/timer";
import stopwatch from "Js/stopwatch";
import settings from "Js/settings";


/**
 * Model of the Core Typing module
 */
class Model {

  constructor() {

    // Set callback function when the answer input changed
    answerBar.onInput((answer) => { this.onAnswerInputChanges(answer); });

    // Set callback function when the user press enter in the answer bar
    answerBar.onSubmit((answer) => { this.onSubmitAnswer(answer); });

    // Set the callback function when the time is over
    stopwatch.setTimeOverCallback(() => { this.onTimeOver(); });

    // Initialize the timer used for each question
    this.questionTimer = new Timer();

    // Current state is ready
    this.status = "ready";
  }


  /**
   * Reset the memory test and prepare the first questions
   */
  reset() {

    // Reset the question generator
    generator.reset();

    // Hide the timer
    stopwatch.hide();

    // Reset the stopwatch according to the current settings
    if (settings.get('timerMode') === 'down')
      stopwatch.reset(settings.get('duration'), 'down');
    else
      stopwatch.reset(0, 'up');

    // Prepare the first and next questions
    this.prepareNextQuestion();
    this.switchToNextQuestion();
    this.prepareNextQuestion();

    // Prepare the answer bar
    answerBar.clear();
    answerBar.enable();
  }


  /**
   * Callback function called when the answer bar input changes
   * @param {string} answer The current input in the answer bar
   */
  onAnswerInputChanges(answer) {

    // If the timer is on pause, start and display the timers
    if (this.status === "ready") {

      this.status = "running";
      analytics.log("Start memory test", Object.assign({}, selection.current()));
      stopwatch.start();
      stopwatch.show();

      this.questionTimer.init(0, "up");
      this.questionTimer.start();
    }


    console.log('input', answer);

  }


  /**
   * Callback function called when the user validate the answer
   * @param {string} answer The current input in the answer bar
   */
  onSubmitAnswer(answer) {
    console.log('submit', answer);
  }


  /**
   * Callback function called when the test is over
   */
  onTimeOver() {
    console.log('Time Over');
  }


  /**
   * Get and prepare the next question
   */
  prepareNextQuestion() {
    const next = generator.getNextQuestion();
    this.nextQuestion = series.get(next.path, next.uid);
    view.prepareNextQuestion(this.nextQuestion);
  }


  /**
   * Switch to the next question 
   * Next question becomes current question
   */
  switchToNextQuestion() {
    view.switchToNextQuestion();
    answerBar.setPrompt(this.nextQuestion.prompt);
    this.currentQuestion = this.nextQuestion;
  }

}


export default new Model();