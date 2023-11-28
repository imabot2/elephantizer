import view from "./view.js";
import generator from "Js/generator";
import series from "Js/series";
import answerBar from "Js/answerBar";
import selection from "Js/selection"
import analytics from "Js/analytics";
import Timer from "Js/timer";
import stopwatch from "Js/stopwatch";
import levenshtein from "Js/levenshtein";
import correction from "Js/correction";

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
  }


  /**
   * Reset the memory test and prepare the first questions
   */
  reset() {

    // Current status of the memory test during reset
    this.status = "reset";

    // Reset the question generator
    generator.reset();

    // Prepare the first and next questions
    this.prepareNextQuestion();
    this.switchToNextQuestion();
    this.prepareNextQuestion();

    // Reset the stopwatch
    stopwatch.reset();

    // Reset the Levenshtein engine
    levenshtein.reset();

    // Prepare the answer bar
    answerBar.reset(true);

    // Memory test is ready
    this.status = "ready";
  }


  /**
   * Callback function called when the answer bar input changes
   * @param {string} answer The current input in the answer bar
   */
  onAnswerInputChanges(answer) {

    // If the timer is not running, start the timers
    if (this.status === "ready") this.onStarted();

    // Compute the Levenshtein distance for checking the answer
    // The distanceCheck must be calculated BEFORE the truncated distance 
    // Because the Levenstein class is reused with getHTML
    let distanceCheck = levenshtein.distance(answer, this.currentQuestion.answer);

    // Check the answer (user pressed space at the end of the right answer)
    if (answer[answer.length - 1] === " ") {

      // If this is the right answer 
      // or if f the current score if less than 0.8 and the answer is higher than the answer
      // process the answer
      console.log('TODO Add score checking');
      if ((/*this.current.score >= 0.8 &&*/ levenshtein.sanitize(answer).length >= this.currentQuestion.answer.length) || distanceCheck == 0) {

        // Process the current question for statistics
        //this.processQuestionOver(distanceCheck);

        // The user press space, submit the answer
        this.onSubmitAnswer(answer);
        return;
      }
    }

    // The answer is not submitted, update the correction
    this.updateCorrection(answer);
  }


  /**
   * Call when the test is started
   * - Start and show the stopwatch
   * - Log current selection to analytics
   * - Starts the question timer
   */
  onStarted() {

    // Test is running
    this.status = "running";
    analytics.log("Start memory test", Object.assign({}, selection.current()));

    // Starts and show the stopwatch
    stopwatch.start();
    stopwatch.show();

    // Starts question timer
    this.questionTimer.init(0, "up");
    this.questionTimer.start();
  }

  /**
   * Update the correction for the provided answer
   * @param {string} answer The answer typed by the user
   */
  updateCorrection(answer) {

    // Sanitize the user answer, and preserve the last space
    const sanitized = levenshtein.sanitize(answer, true);

    // Compute the Levenshtein distance of the truncated answer
    let len = Math.min(sanitized.length, this.currentQuestion.answer.length);
    let distance = levenshtein.distance(sanitized.slice(0, len), this.currentQuestion.answer.slice(0, len));
    console.log (distance);

    console.log('TODO Keep max distance');
    //this.currentStats.maxDistance = Math.max(this.currentStats.maxDistance, distance);

    // Set the correction if the distance is higher than zero or the user answer is longer than the expected answer
    // And the score is not higher than 0.8
    console.log('TODO add score checking');
    if ((distance || sanitized.length > this.currentQuestion.answer.length) /*&& (this.current.score < 0.8 || this.questionTimer.getTime().raw > 10000)*/) {

      // Show the correction if the Levenshtein distance is not null
      let html = levenshtein.getHTML();
      html += `<span class="extra insert">${this.currentQuestion.answer.slice(len)}</span>`;

      // If the answer is longer than the expected answer, add deleted extra characters
      if (sanitized.length > this.currentQuestion.answer.length)
        html += `<span class="delete">${sanitized.slice(len)}</span>`;

      correction.setCorrectionHTML(html);
    }
    else
      correction.setCorrectionHTML("");
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