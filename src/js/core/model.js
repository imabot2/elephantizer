import view from "./view.js";
import generator from "Js/generator";

class Model {

  constructor() {}

  /**
   * Reset the memory test and prepare the first questions
   */
  reset() {
    generator.reset();
    console.log (generator.getNextQuestion());
  }
}


export default new Model();