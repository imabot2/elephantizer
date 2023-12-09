import view from "./view.js";


/**
 * Model for the answer bar module
 * Manage key pressed and enter
 */
class Model {

  /**
   * Constructor, set the default callback functions
   */
  constructor() {

    // Callback function and event when the user press Enter key
    this.onInputCallback = () => { };

    // Callback function and event when the user press Enter key
    this.onSubmitCallback = () => { };
  }



  /**
   * Set the callback function when the answer input change
   * @param {function} callback Callback function called when the input change
   */
  onInput(callback) {
    this.onInputCallback = callback;
  }


  /**
   * Set the callback function when the Enter key is pressed in the answer input
   * @param {function} callback Callback function called when the user press enter
   */
  onSubmit(callback) {
    this.onSubmitCallback = callback;
  }


  /**
  * Add the event listener when input changes
  */
  onInputEvent(event) {

    // Do not process if this is a composition
    if (event.isComposing) return;

    // Run the callback function
    this.onInputCallback(view.getAnswerText());
  }

  /**
   * Function called when the composition end (input has changed)   
   */
  onCompositionEndEvent() {
    // On composition end, run the callback event
    this.onInputCallback(view.getAnswerText());
  }


  /**
   * Prepare the event listener when the user press enter
   */
  onKeyPressedEvent(event) {

    // If the input is disabled, prevent adding characters in the input field
    if (view.isDisabled) {
      event.preventDefault();
      return;
    }

    // Prevent Ctrl + Z
    if ((event.ctrlKey || event.metaKey) && event.key == "z") {
      event.preventDefault();
      return false;
    }

    // On Tab key, open the special characters modal 
    if (event.key === "Tab") {
      event.preventDefault();

      console.log('TO DO open the special character modal')
      //specialCharacters.showModal(true);
    }

    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {

      // Run the callback function
      this.onSubmitEvent();

      // Cancel the default action (no enter in the answer input)
      event.preventDefault();
    }
  }

  /**
   * Function called when the user submit the answer
   */
  onSubmitEvent() {
    // Run the callback
    this.onSubmitCallback(view.getAnswerText());
  }


}

export default new Model();