import view from "./view.js";
import generator from "Js/generator";
import series from "Js/series";
import answerBar from "Js/answerBar";

class Model {

  constructor() {

    // Set callback function when the answer input changed
    answerBar.onInput((answer) => { this.onAnswerInputChanges(answer); });

    // Set callback function when the user press enter in the answer bar
    answerBar.onSubmit((answer) => { this.onSubmitAnswer(answer); });


  }

  /**
   * Reset the memory test and prepare the first questions
   */
  reset() {
    
    // Reset the question generator
    generator.reset();

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
    console.log('input', answer);
  }


  /**
   * Callback function called when the user validate the answer
   * @param {string} answer The current input in the answer bar
   */
  onSubmitAnswer(answer) {
    console.log ('submit', answer);
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