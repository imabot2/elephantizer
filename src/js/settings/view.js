import "./settings.css";
import model from "./model.js";
import * as bootstrap from "bootstrap";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";
import htmlSettings from "./settings.html";

import menu from 'Js/menu';

class View {

  /**
   * Constructor
   * - Append the settings menu to the modal
   */
  constructor() {
    // Append the settings to the menu
    this.settingsEl = str2dom.one(parseEjs(htmlSettings, translate));

    // Set the event listener when the user click a button in the modal
    this.settingsEl.addEventListener("click", (event) => { this.onBtnClicked(event); });
  }


  /**
   * Callback function called when the user click on a button
   * @param {object} event Event that triggered the callback
   */
  onBtnClicked(event) {

    // The click should not be propagated outside the settings container
    if (event.target.id == 'settings-menu') event.preventDefault();

    // Check if this is a navigation button
    let element = event.target.closest('[data-type="settings"]');
    if (element === null) return;

    // Get the key and the value for update
    const key = element.getAttribute('data-key');
    const value = element.getAttribute('data-value');
    model.updateField(key, value, {save:true, updateView:true});

  }


  /**
   * Update the settings menu according to the current settings in the model
   */
  update() {

    // Update the learning mode
    this.settingsEl.querySelector(`#settings-learningMode-${model.current.learningMode}`).checked = true;
    // Update the timer mode
    this.settingsEl.querySelector(`#settings-timerMode-${model.current.timerMode}`).checked = true;
    // Update the test duration in the settings
    this.settingsEl.querySelector(`#settings-duration-${model.current.duration}`).checked = true;
    
    // Disable / enable the sections
    if (model.current.timerMode!='down') this.disable('.duration'); else this.enable('.duration');
  }


  
  /**
   * Disable a section of the settings
   * @param {string} target The CSS selector of the section header to disable
   */  
  disable(target) {
    // Disable the title
    const section = this.settingsEl.querySelector(target);
    section.classList.add('disabled');

    // Disable the buttons
    const buttons = section.querySelectorAll("input");
    [...buttons].forEach(button => button.disabled=true);
  }


  /**
   * Enable a section of the settings
   * @param {string} target The CSS selector of the section header to enable
   */
  enable(target) {
    // Enable the title
    const section = this.settingsEl.querySelector(target);
    section.classList.remove('disabled');

    // Enable the buttons
    const buttons = section.querySelectorAll("input");
    [...buttons].forEach(button => button.disabled=false);
  }


  /**
   * Append the settings to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) {
    // Append the element to the parent
    parent.append(this.settingsEl);

    // Prepare the collapse
    this.settingsCollapse = new bootstrap.Collapse(this.settingsEl, { toggle: false, parent: parent });
  }


  /**
   * Collapse the main menu
   */
  collapse() {
    this.settingsCollapse.hide();
  }

  
  /**
   * Extend the collapse menu
   */
  expand() {
    this.settingsCollapse.show();
    menu.setTitle(translate.title);
  }

}


export default new View();