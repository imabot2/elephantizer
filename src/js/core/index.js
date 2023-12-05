import view from "../coreTyping/view.js";
import model from "../coreTyping/model.js";


/**
 * Core engine of the memory test
 * This module only dispatch to the core typing or core card according to the settings
 */
class Core {

  /**
   * Constructor
   */
  constructor() {}

  /**
   * Get current learning mode and dispatch to coreCard or coreTyping
   */
  reset() { model.reset(); }
}


export default new Core();