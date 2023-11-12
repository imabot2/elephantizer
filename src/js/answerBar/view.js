import * as bootstrap from "bootstrap";
import "./answerBar.css";
import htmlAnswerBar from "./answerBar.html";
import str2dom from "doma";
import specialCharacters from "Js/specialCharacters";



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
    this.containerEl = str2dom.one(htmlAnswerBar);

    // Initialize button tooltip
    this.submitButtonEl = this.containerEl.querySelector('.submit-button-container>img');
    new bootstrap.Tooltip(this.submitButtonEl);

    // Append the special characters button
    let specialCharacterButtonContainerEl = this.containerEl.querySelector('.special-characters-button-container');
    specialCharacters.appendButtonTo(specialCharacterButtonContainerEl);
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