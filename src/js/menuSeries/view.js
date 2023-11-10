import * as bootstrap from "bootstrap";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";
import htmlContainer from "./container.html";
import htmlButton from "./button.html";
import menu from 'Js/menu'
import model from './model.js';
import selection from 'Js/selection';

class View {

  /**
   * Constructor
   * - Append the settings menu to the modal
   */
  constructor() {
    // Append the settings to the menu
    this.containerEl = str2dom.one(parseEjs(htmlContainer, translate));
    // Get the parent in the container
    this.parentEl = this.containerEl.querySelector('.parent');

    // Event delegation when the user click on checkbox or radio button
    this.parentEl.addEventListener('click', (e) => { this.onBtnClicked(e); });
  }


  /**
   * Callback function called when a button (radio or checkbox) is clicked
   * @param {object} event The enven that triggered the function call
   */
  onBtnClicked(event) {
    
    // Check if this is a checkbox or radio button
    const target  = event.target.closest('[data-type]');
    if (target==null) return;

    // Get the button type and path
    const type = target.getAttribute('data-type');
    const path = target.getAttribute('data-path');
    if (type == "toggle-deck") selection.toggleDeck(path);
    if (type == "select-deck") selection.selectDeck(path);
  }



  /**
   * Populate the Series menu according to the current path
   * @param {string} path Path to the current series
   */
  populate(path) {    

    // Erase the previous categories list
    this.parentEl.innerHTML = "";

    const htmlButtonTranslated = parseEjs(htmlButton, translate);

    // For each category, append the button
    model.series(path).forEach((deck) => {
      
      // Prepare the checkbox ID
      deck.id = deck.path.replaceAll('/', '_');
      
      // ...prepare and append the button
      let button = str2dom.one(parseEjs(htmlButtonTranslated, deck));
      this.parentEl.append(button);

    })

    // Enable the tooltips
    const tooltipTriggerList = this.parentEl.querySelectorAll('[data-bs-toggle="tooltip"]');    
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, { trigger: 'hover' }));

  }

  /**
   * Append the settings to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) {
    // Append the element to the parent
    parent.append(this.containerEl);

    // Prepare the collapse
    this.containerCollapse = new bootstrap.Collapse(this.containerEl, { toggle: false, parent: parent });
  }


  /**
   * Collapse the main menu
   */
  collapse() {
    this.containerCollapse.hide();
  }

  /**
   * Extend the collapse menu
   */
  expand(path) {
    if (path) this.populate(path);
    menu.setTitle(translate.title);
    this.containerCollapse.show();
  }

}


export default new View();