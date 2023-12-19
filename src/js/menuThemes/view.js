import * as bootstrap from "bootstrap";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";
import htmlContainer from "./container.html";
import htmlButton from "./button.html";
import menu from 'Js/menu';
import model from './model.js';
import series from "Js/series"

class View {

  /**
   * Constructor
   * - Prepare the DOM elements
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
    model.themes(path).forEach((theme) => {
      // Prepare and append the button
      let button = str2dom.one(parseEjs(htmlButton, theme));
      this.parentEl.append(button);
    })

  }


  /**
   * Populate the breadcrumb according to the path
   * @param {string} path The path to the current series
   */
  populateBreadcrumb(path) {
    
    // Get data for populating the breadcrumb
    const data = series.pathToObject(path);

    // Populate the language button
    let languageEl = this.containerEl.querySelector('.breadcrumb-language');
    languageEl.innerText = data.language;
    languageEl.setAttribute('navigation-path', data.languagePath);

    // Populate the category button
    let categoryEl = this.containerEl.querySelector('.breadcrumb-category');
    categoryEl.innerText = data.category;
    categoryEl.setAttribute('navigation-path', data.categoryPath);
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
   * Expand the menu
   * If path is provided, the menu is populated beforehand
   * @param {string} path Path to the new language
   */
  expand(path = undefined) {

    // If the path is defined, populate the menu
    if (path) {
      this.populate(path);
      this.populateBreadcrumb(path);
    }

    // Set title
    menu.setTitle(translate.title);

    // Show the container
    this.containerCollapse.show();
  }

}


export default new View();