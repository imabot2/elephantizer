import view from "./view.js";
import model from "./model.js";


class AnswerBar {
  constructor() { }

  /**
   * Set the prompt to the answer input
   * When the prompt is updated, focus on the answer bar
   * @param {string} prompt The prompt to display in the answer input
   */
  setPrompt(prompt) { view.setPrompt(prompt); }

  
  /**
   * Clear the input field
   */
  clear() { view.clear(); }


  /**
   * Disable the answer input (and the submit button)
   */
  disable() { view.disable(); }


  /**
   * Enable the answer input (and the submit button)
   */
  enable() { view.enable(); }


  /**
   * Set the callback function when the answer input change
   * @param {function} callback Callback function called when the input change
   */
  onInput(callback) { model.onInput(callback); }


  /**
   * Set the callback function when the Enter key is pressed in the answer input
   * @param {function} callback Callback function called when the user press enter
   */
  onSubmit(callback) { model.onSubmit(callback); }


  /**
   * Append the answer bar to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) { view.appendTo(parent); }

}


export default new AnswerBar();