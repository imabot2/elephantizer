import view from "./view.js";
import generator from "Js/generator";
import series from "Js/series";

class Model {

  constructor() {}

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
    this.currentQuestion = this.nextQuestion;
  }
  




}


export default new Model();