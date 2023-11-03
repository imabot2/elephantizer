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
  }

}


export default new View();