import htmlContainer from "./container.html";
import htmlButton from "./button.html";
import * as bootstrap from "bootstrap";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";
import model from "./model.js";
import menu from 'Js/menu'

class View {

  /**
   * Constructor
   * - Append the settings menu to the modal
   */
  constructor() {
    // Prepare the language container
    this.containerEl = str2dom.one(parseEjs(htmlContainer, translate));
    // Get the parent in the container
    this.parentEl = this.containerEl.querySelector('.parent');

    // Populate the language list
    this.populate();
  }


  /**
   * Populate the language menu
   */
  populate() {
    // For each language
    for (var language of model) {
      // Prepare and append the button
      let button = str2dom.one(parseEjs(htmlButton, language));
      this.parentEl.append(button);
    }
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
  expand() {
    menu.setTitle(translate.title);
    this.containerCollapse.show();
  }

}


export default new View();