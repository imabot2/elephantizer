import coreTyping from "Js/coreTyping";
import settings from "Js/settings";


/**
 * Model of the core class
 * Dispatch to the right core (typing or card mode)
 */
class Model {

  /**
   * Constructor, set default typing mode
   */
  constructor() {

    // Set default learning mode to typing 
    this.core = coreTyping
  }

  
  /**
   * Get current learning mode and dispatch to coreCard or coreTyping
   */
  reset() {

    // Dispatch to the requested mode
    if (settings.get('learningMode') === 'typing')
      this.core = coreTyping;
    else
      this.core = coreCards;

    // Reset the core
    this.core.reset();
  }


}


export default new Model();