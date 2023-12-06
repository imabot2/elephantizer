import "./menu.css";
import * as bootstrap from "bootstrap";
import str2dom from "doma";
import { parseEjs } from "Js/languages";
import translate from "./translate.js";
import htmlModal from "./modal.html";
import htmlBurger from "./burger.html";
import model from "./model.js";

import settings from "Js/settings";
import menuLanguages from "Js/menuLanguages";
import menuCategories from "Js/menuCategories";
import menuSeries from "Js/menuSeries";
import selection from "Js/selection";


class View {

  /**
   * Constructor
   * - Create the menu modal
   * - Initialize the collapse
   */
  constructor() {

    // Append the button to the DOM
    this.burgerEl = str2dom.one(parseEjs(htmlBurger, translate));
    document.body.append(this.burgerEl);

    // Append the modal to the DOM
    this.modalEl = str2dom.one(parseEjs(htmlModal, translate));
    document.body.append(this.modalEl);
    this.modal = new bootstrap.Modal(this.modalEl);

    // Get the modal body element (collapse parent)
    this.bodyEl = this.modalEl.querySelector(".modal-body");
    this.containerEl = this.bodyEl.querySelector('.collapsible-menu')

    // Prepare the collapsable menus
    this.mainMenuEl = this.containerEl.querySelector(".main-menu");
    this.mainMenuCollapse = new bootstrap.Collapse(this.mainMenuEl, { toggle: false, parent: this.containerEl });

    // Set the main menu title
    this.setTitle(translate.title);
        
    // Populate the menu with submenus
    this.populate();

    // Reset to the main menu when the modal is closed
    this.onModalHideCallback = () => {};
    this.modalEl.addEventListener('hide.bs.modal',() => { this.onModalHide(); });

    // Set callback when the user click the back button
    this.backBtn = this.modalEl.querySelector(".back-btn");
    this.backBtn.addEventListener('click', (event) => { model.onBackBtnClicked(event); });

    // Set the event listener when the user click a button in the modal
    this.bodyEl.addEventListener("click", (event) => { this.onBtnClicked(event); });
  }


  /**
   * Populate the menu with submenu (settings, languages, categories...)
   */
  populate() {
    settings.appendTo(this.containerEl);
    menuLanguages.appendTo(this.containerEl);
    menuCategories.appendTo(this.containerEl);
    menuSeries.appendTo(this.containerEl);
    selection.appendTo(this.bodyEl);
  }

  /**
   * Callback functin called when the user click a button in the menu
   * @param {object} event The click event
   * @returns 
   */
  onBtnClicked(event) {

    // Check if this is a navigation button
    let element = event.target.closest("[navigation-target]");
    if (element === null) return;

    // Navigate to the new menu
    model.navigate(element.getAttribute('navigation-target'), element.getAttribute('navigation-path'));
  }


  /**
   * Set the menu title
   * @param {string} New title of the menu
   */
  setTitle(title) {
    this.modalEl.querySelector('.menu-title').innerText = title;
  }

  /**
   * Collapse the main menu
   */
  collapse() {
    this.mainMenuCollapse.hide();
  }

  /**
   * Extend the collapse menu
   */
  expand() {
    this.setTitle(translate.title);
    this.mainMenuCollapse.show();
  }

  /**
   * Close the menu (hide the modal)
   */
  close() {
    this.modal.hide();
  }


  /**
   * Open the menu (show the modal)
   */
  open() {
    this.modal.show();
  }


  /**
   * Set the callback function called when the modal is hide
   * @param {function} callback Callback function 
   */
  onHide(callback) {
    this.onModalHideCallback = callback;
  }

  /**
   * Callback function called when the modal is closed
   */
  onModalHide() {

    // Reset the menu for the next time
    model.navigate('main');

    // If the selection has changed, save the settings
    if (selection.hasSelectionChanged()) settings.save();

    // Call the callback function
    this.onModalHideCallback();
  }
}

export default new View();