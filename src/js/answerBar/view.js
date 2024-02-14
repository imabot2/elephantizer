import * as bootstrap from "bootstrap";
import "./answerBar.css";
import htmlAnswerBar from "./answerBar.html";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";
import str2dom from "doma";
import specialCharacters from "Js/specialCharacters";
import model from "./model.js";
import flag from "Js/flag";
var mobile = require('is-mobile');

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
    this.placeHolderEl = this.containerEl.querySelector('.place-holder');
    this.placeHolderContentEl = this.placeHolderEl.querySelector('div');

    // Prepare the tooltip and hide after 1.5s to prevent hiding the answer bar
    this.submitButtonEl = this.submitButtonContainerEl.querySelector('img');
    this.submitButtonTooltip = new bootstrap.Tooltip(this.submitButtonEl, {trigger: 'hover'});
    this.submitButtonEl.addEventListener('shown.bs.tooltip', () => {
      setTimeout(() => { this.submitButtonTooltip.hide()}, 1500);
    })
    

    // Append the special characters button
    let specialCharacterButtonContainerEl = this.containerEl.querySelector('.special-characters-button-container');
    specialCharacters.appendButtonTo(specialCharacterButtonContainerEl);

    // Append the flag in the container
    flag.appendTo(this.containerEl);

    // Append the special characters button
    this.inputEl = this.containerEl.querySelector('.input');

    // At startup, the answer bar is disabled
    this.disable();

    // Prevent paste in the answer bar
    this.inputEl.addEventListener('paste', event => { event.preventDefault(); });

    // Trigger model event when the answer input has changed    
    this.inputEl.addEventListener("input", (event) => { this.onInputEvent(event); });

    // Trigger model event on composition end, run the callback event
    this.inputEl.addEventListener("compositionend", () => { model.onCompositionEndEvent(); });

    // Trigger model event when the user press a key in the answer bar
    this.inputEl.addEventListener("keydown", (event) => { model.onKeyPressedEvent(event); });

    // Trigger model event when the user click on the submit button
    this.submitButtonEl.addEventListener('click', () => { model.onSubmitEvent(); })
  }


  /**
   * Insert a text at the caret
   * @param {string} text The text to insert
   */
  insertAtCaret(text) {
    
    // Set focus on the answer bar
    this.focus();

    // Get and delete the current selection
    var sel, range;
    sel = window.getSelection();
    range = sel.getRangeAt(0);
    range.deleteContents();

    // Insert the new text
    var textNode = document.createTextNode(text);
    range.insertNode(textNode);
    range.setStartAfter(textNode);
    sel.removeAllRanges();
    sel.addRange(range);

    // Trigger the input event
    this.onInputEvent();    
  }


  /**
   * Reset the answer bar
   * - Clear the input
   * - Enable/disable if requested
   * - Set focus on desktop devices
   * @param {boolean} enable 
   * When true, the answer bar is enable
   * When false, the answer bar is disable
   * When undefined, the answer bar keep its previous state (enable or disable)
   */
  reset(enable) {
    this.clear();
    if (enable === true) this.enable(); 
    if (enable === false) this.disable();
    if (!mobile()) this.focus();
  }


  /**
   * Set the prompt to the answer input
   * When the prompt is updated, focus on the answer bar
   * @param {string} prompt The prompt to display in the answer input
   */
  setPrompt(prompt) {
    this.placeHolderContentEl.innerHTML = prompt;
  }


  /**
   * Set the focus on the answer bar
   */
  focus() {
    this.inputEl.focus();
  }


  /**
   * Clear the input field
   */
  clear() {
    this.inputEl.innerHTML = '<br>';
    this.placeHolderEl.classList.remove('hide');
  }

  
  /**
   * Disable the answer input (and the submit button)
   */
  disable() {
    this.isDisabled = true;
    this.containerEl.classList.add("disabled");
    this.submitButtonContainerEl.classList.add("disabled");
    this.submitButtonTooltip.disable();
  }


  /**
   * Enable the answer input (and the submit button)
   */
  enable() {
    this.isDisabled = false;
    this.containerEl.classList.remove("disabled");
    this.submitButtonContainerEl.classList.remove("disabled");
    this.submitButtonTooltip.enable();
    this.focus();
  }


  /**
   * Get the text typed in the answer bar
   * @returns The current text in the answer input
   */
  getAnswerText() {
    return this.inputEl.textContent;
  }


  /**
   * Append the answer bar to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) {
    // Append the element to the parent
    parent.append(this.containerEl);
  }


  onInputEvent(event) {
    if (this.inputEl.textContent == '') this.placeHolderEl.classList.remove('hide'); else this.placeHolderEl.classList.add('hide');
    model.onInputEvent(event);
  }

}


export default new View();