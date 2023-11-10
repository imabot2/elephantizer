import * as bootstrap from "bootstrap";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";
import htmlContainer from "./container.html";
import htmlButton from "./button.html";
import menu from 'Js/menu';
import model from './model.js';

class View {

  /**
   * Constructor
   * - Append the settings menu to the modal
   */
  constructor() {

    // Prepare the categories container
    this.containerEl = str2dom.one(parseEjs(htmlContainer, translate));
    // Get the parent in the container
    this.parentEl = this.containerEl.querySelector('.parent');
  }


  /**
   * Populate the categories menu
   * @param {string} path Path to the current categories
   */
  populate(path) {

    // Erase the previous categories list
    this.parentEl.innerHTML = "";

    // For each category ...
    model.categories(path).forEach((category) => {
      // Prepare and append the button
      let button = str2dom.one(parseEjs(htmlButton, category));
      this.parentEl.append(button);
    })

  }


  /**
   * Append the settings to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) {
    // Append the element to the parent
    parent.append(this.containerEl);

    // Prepare the collapse
    this.containerCollapse = new bootstrap.Collapse(this.containerEl, { toggle: false, parent: parent, show: 1 });
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
  /**
   * Expand the menu
   * If path is provided, the menu is populated beforehand
   * @param {string} path Path to the new language
   */
  expand(path = undefined) {
    if (path) this.populate(path);
    menu.setTitle(translate.title);
    this.containerCollapse.show();
  }

}


export default new View();