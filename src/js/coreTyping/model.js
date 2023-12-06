import view from "./view.js";
import auth from "Js/auth";
import generator from "Js/generator";
import series from "Js/series";
import answerBar from "Js/answerBar";
import selection from "Js/selection"
import analytics from "Js/analytics";
import Timer from "Js/timer";
import stopwatch from "Js/stopwatch";
import levenshtein from "Js/levenshtein";
import correction from "Js/correction";
import settings from "Js/settings";
import questionStatistics from "Js/questionStatistics";
import overlay from "Js/overlay";
import results from "Js/results";
import statistics from "Js/statistics";
/**
 * Model of the Core Typing module
 */
class Model {

  /**
   * Constructor
   * - set the callback function
   * - create the timers
   */
  constructor() {

    // Set callback function when the answer input changed
    answerBar.onInput((answer) => { this.onAnswerInputChanges(answer); });

    // Set callback function when the user press enter in the answer bar
    answerBar.onSubmit((answer) => { this.onSubmitAnswer(answer); });

    // Set the callback function when the time is over
    stopwatch.setTimeOverCallback(() => { this.onTestOver(); });

    // Set the overlay callback function (user click in the overlay or time is over)
    overlay.setClickEventCallback(() => { this.onPauseOver(); })
    overlay.setTimeOverEventCallback(() => { this.onPause(); })

    // Initialize the timer used for each question (total time & wpm)
    this.questionTimer = new Timer();
    this.wpmTimer = new Timer();
  }


  /**
   * Reset the memory test and prepare the first questions
   */
  reset() {
    
    // Current status of the memory test during reset
    this.status = "reset";

    // Show the overlay at start up only if user is logged
    view.setOverlayVisible(auth.isLogged(), 100);

    // Reset the question generator
    generator.reset();

    // Reset the memory test statistics
    results.reset('typing');

    // Reset the stopwatch
    stopwatch.reset();

    // Reset the Levenshtein engine
    levenshtein.reset();

    // Populate the current question to prevent errors in switchToNexQuestion
    this.currentQuestion = { remaining: 1 }

    // Prepare the first and next questions
    this.prepareNextQuestion();
    this.switchToNextQuestion();

    // Reset the overlay timer
    overlay.resetTimer();
    overlay.setStartMessage();


    // Memory test is ready
    this.status = "ready";
  }


  /**
   * Callback function called when the answer bar input changes
   * @param {string} answer The current input in the answer bar
   */
  onAnswerInputChanges(answer) {

    // Do nothing if the test is over
    if (this.status === "over") return;

    // If the timer is not running, start the timers
    if (this.status === "ready") this.onStarted();

    // Start the WPM timer (only apply on first character)
    this.wpmTimer.start();
    overlay.restartTimer();

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
        this.processQuestionOver(answer, distanceCheck);
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
    this.wpmTimer.init(0, 'up');
    this.questionTimer.init(0, "up");
    this.questionTimer.start();

    // Restart the overlay and change the message
    view.hideOverlay();
    overlay.restartTimer();
    overlay.setContinueMessage();
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

    // Update max Leenshtein distance
    questionStatistics.updateMaxDistance(distance);

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

    // If the timer is on pause, start and display the timers
    if (this.status === "ready") {
      this.onStarted();
      return;
    }

    // Compute the Levenshtein distance
    let distance = levenshtein.distance(answer, this.currentQuestion.answer);

    // Process the current question for statistics
    this.processQuestionOver(answer, distance);
  }


  /**
   * Process the current question 
   * Call every time a question is submited (success of failed) 
   * - Update the statistics   
   */
  processQuestionOver(answer, distance) {

    // Store the final data and compute question statistics    
    questionStatistics.updateMaxDistance(distance);
    questionStatistics.setFinalDistance(distance);
    questionStatistics.setFinalAnswer(answer);
    questionStatistics.setTypingTime(this.wpmTimer.getTime().raw);
    questionStatistics.setTime(this.questionTimer.getTime().raw);
    questionStatistics.process();

    // Restart the timer
    this.questionTimer.restart();
    this.wpmTimer.reset();

    // Check if this is the right answer
    if (distance == 0) {
      // This is the right answer
      this.switchToNextQuestion();
    }
    else {
      // This is a wrong answer
      this.wrongAnswer();
    }
  }


  /**
   * Function called when the answer is wrong
   * - Display the right answer
   */
  wrongAnswer() {

    // Disable the answer bar
    answerBar.disable();

    // Show the right answer 
    view.showRightAnswer(this.currentQuestion.answer, settings.get('rightAnswerDuration'))
      .then(() => {
        // The right answer is over, go to the next question is the test is still running
        if (this.status == "running") this.switchToNextQuestion();
      })
  }


  /**
   * Callback function called when the test is over
   */
  onTestOver() {

    // Update status and disable input bar    
    this.status = "over";

    // Store the test duration
    results.setTestDuration(stopwatch.getElapsedTime());    

    // Stop the stopwatch
    stopwatch.stop();

    // Stop the overlay 
    overlay.stop();
    view.hideOverlay();

    // Disable the answer bar
    answerBar.disable();

    // Save the memory test statistics
    statistics.save();

    // Show the right answer for the last question
    view.showRightAnswer(this.currentQuestion.answer, settings.get('rightAnswerDuration'))
      .then(() => {
        // Hide the timer
        stopwatch.hide();

        // Process the data
        results.show();
      })
  }


  /**
   * Get and prepare the next question
   */
  prepareNextQuestion() {
    // Get the next question path and uid
    const next = generator.getNextQuestion();

    // Get the question
    this.nextQuestion = series.get(next.path, next.uid);
    // Append the remaining
    this.nextQuestion.remaining = next.remaining;

    // Prepare the next question in the DOM
    view.prepareNextQuestion(this.nextQuestion);
  }


  /**
   * Switch to the next question 
   * Next question becomes current questionshowOverlay
   */
  switchToNextQuestion() {

    // If the test is over, do not switch to next question
    if (this.status == 'over') return;

    // Check if this was the last question of the series
    if (this.currentQuestion.remaining == 0) {
      this.onTestOver();
      return;
    }

    // Update the view
    view.switchToNextQuestion()
      .then(() => {
        // When the view is updated, prepare the next question
        this.prepareNextQuestion();
      })

    // The new current question is the old next one
    this.currentQuestion = this.nextQuestion;

    // Create a new question in the memory test
    questionStatistics.new(this.currentQuestion.path, this.currentQuestion.uid);

    // Reset the answer bar
    answerBar.reset(true);

    // Set the next prompt
    answerBar.setPrompt(this.currentQuestion.prompt);

    // Remove the correction
    correction.setCorrectionHTML('');
  }


  /**
   * Callback function called when the memory test enters in pause mode
   */
  onPause() {

    // Pause the memory test
    this.status = "paused";

    // Show the overlay
    view.showOverlay();
    overlay.resetTimer();

    // Pause the timer
    stopwatch.pause();

    // Pause the timers    
    this.wpmTimer.pause();
    this.questionTimer.pause();
  }


  /**
   * Callback function called when the memory test leave the pause mode
   */
  onPauseOver() {

    // If the test is over, do nothing
    if (this.status === "over") return;

    // If the memory test is not started, starts the memory test
    if (this.status === "ready") { this.onStarted(); return; }

    // Restarts and show the stopwatch
    stopwatch.start();

    // Restart the overlay
    view.hideOverlay();
    overlay.restartTimer();

    // If the user already typed someting, restart the timer
    if (this.wpmTimer.hasAlreadyStarted()) this.wpmTimer.start();

    // Restart the question timer
    this.questionTimer.start();

    // Test was in pause, it is now running    
    this.status = "running";

  }
}


export default new Model();