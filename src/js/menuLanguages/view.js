import * as bootstrap from "bootstrap";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";
import htmlContainer from "./container.html";
import menu from 'Js/menu'

class View {

  /**
   * Constructor
   * - Append the settings menu to the modal
   */
  constructor() {
    // Append the settings to the menu
    this.containerEl = str2dom.one(parseEjs(htmlContainer, translate));
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