import model from "../coreTyping/model.js";

class Core {

  constructor() {}

  /**
   * Reset the memory test and prepare the first questions
   */
  reset() { model.reset(); }
}


export default new Core();