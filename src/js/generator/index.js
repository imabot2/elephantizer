import model from "./model.js";


class Generator  {

  constructor() {

  }


  /**
   * Reset the generator
   * 1. Get current mode (series or relevant)
   * 2. Populate the list of questions according to the current selection
   * 3. Populare the list of remaining questions (= indexes of all the questions)
   */
  reset() { model.reset(); }

  /**
   * Return the current generator mode
   * @returns The current mode ['series' | 'relevant']
   */
  mode() { return model.mode; }


  /**
   * Return the next question according to the current mode
   */
  getNextQuestion()  { return model.getNextQuestion(); }
}




export default new Generator();