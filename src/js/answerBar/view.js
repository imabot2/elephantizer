import * as bootstrap from "bootstrap";
import "./answerBar.css";
import htmlAnswerBar from "./answerBar.html";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";
import str2dom from "doma";
import specialCharacters from "Js/specialCharacters";
import model from "./model.js";


/**
 * View for the ANSWER BAR module
 */
class View {

  /**
   * Constructor
   * - Get DOM elements
   * - Initialize tooltips
   * - Populate the special characters button
   */
  constructor() {

    // Prepare the button element
    this.containerEl = str2dom.one(parseEjs(htmlAnswerBar, translate));

    // Initialize button tooltip
    this.submitButtonContainerEl = this.containerEl.querySelector('.submit-button-container');
    this.submitButtonEl = this.submitButtonContainerEl.querySelector('img');
    this.submitButtonTooltip = new bootstrap.Tooltip(this.submitButtonEl);

    // Append the special characters button
    let specialCharacterButtonContainerEl = this.containerEl.querySelector('.special-characters-button-container');
    specialCharacters.appendButtonTo(specialCharacterButtonContainerEl);

    // Append the special characters button
    this.inputEl = this.containerEl.querySelector('.input');

    // At startup, the answer bar is disabled
    this.disable();

    // Prevent paste in the answer bar
    this.inputEl.addEventListener('paste', event => { event.preventDefault(); });

    // Trigger model event when the answer input has changed    
    this.inputEl.addEventListener("input", (event) => { model.onInputEvent(event); });

    // Trigger model event on composition end, run the callback event
    this.inputEl.addEventListener("compositionend", () => { model.onCompositionEndEvent(); });

    // Trigger model event when the user press a key in the answer bar
    this.inputEl.addEventListener("keydown", (event) => { model.onKeyPressedEvent(event); });

    // Trigger model event when the user click on the submit button
    this.submitButtonEl.addEventListener('click', () => { model.onSubmitEvent(); })
  }


  /**
   * Set the prompt to the answer input
   * When the prompt is updated, focus on the answer bar
   * @param {string} prompt The prompt to display in the answer input
   */
  setPrompt(prompt) {
    this.inputEl.setAttribute("placeholder", prompt);
  }


  /**
   * Disable the answer input (and the submit button)
   */
  disable() {
    this.isDisabled = true;
    this.inputEl.classList.add("disabled");
    this.submitButtonContainerEl.classList.add("disabled");
    this.submitButtonTooltip.disable();
  }


  /**
   * Enable the answer input (and the submit button)
   */
  enable() {
    this.isDisabled = false;
    this.inputEl.classList.remove("disabled");
    this.submitButtonContainerEl.classList.remove("disabled");
    this.submitButtonTooltip.enable();
  }


  /**
   * Get the text typed in the answer bar
   * @returns The current text in the answer input
   */
  getAnswerText() {
    return this.inputEl.innerText;
  }


  /**
   * Append the answer bar to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) {
    // Append the element to the parent
    parent.append(this.containerEl);
  }

}


export default new View();