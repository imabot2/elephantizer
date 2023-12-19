import model from "./model.js";

/**
 * Generator module (used to generate the next question)
 */
class Generator {

  constructor() { }


  /**
   * Reset the generator
   * 1. Get current mode (series or relevant)
   * 2. Populate the list of questions according to the current selection
   * 3. Populare the list of remaining questions (= indexes of all the questions)
   */
  reset() { model.reset(); }


  /**
   * Count the number of remaining questions in the series
   * @returns The number of remaining questions in the series
   */
  countRemaining() { return model.countRemaining(); }


  /**
   * Count the total number of questions in the series
   * @returns The total number of questions in the series
   */
  countQuestions() { return model.countQuestions(); }


  /**
   * Return the current generator mode
   * @returns The current mode ['series' | 'relevant']
   */
  mode() { return model.mode; }


  /**
   * Return the next question according to the current mode
   */
  getNextQuestion() { return model.getNextQuestion(); }
}




export default new Generator();