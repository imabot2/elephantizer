import "./style.css";
import * as bootstrap from "bootstrap";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";
import str2dom from "doma";
import htmlButton from "./button.html";
import htmlModal from "./modal.html";
import htmlItem from "./item.html";
import answerBar from "Js/answerBar";

/**
 * View for the Special Characters module
 */
class View {

  /**
   * Constructor
   * - Initialize HTML elements
   * - Prepare events
   */
  constructor() {
    // Prepare the button element    
    this.buttonEl = str2dom.one(parseEjs(htmlButton, translate));

    // Prepare the modal element    
    this.modalEl = str2dom.one(parseEjs(htmlModal, translate));
    document.body.append(this.modalEl);
    this.modal = new bootstrap.Modal(this.modalEl);

    // Initialize button tooltip
    new bootstrap.Tooltip(this.buttonEl);

    // The button is enable by default
    this.isEnable = false;

    // Default list of characters is empty
    this.list = [];

    // Add the event listener triggered when the user click the button
    this.buttonEl.addEventListener('click', () => { if (this.isEnable) this.open(); })
    this.buttonTooltip = bootstrap.Tooltip.getInstance(this.buttonEl);

    // Initialize the container with the buttons and add event listener to catch button click
    this.countainerEl = this.modalEl.querySelector('.list');
    this.countainerEl.addEventListener("click", (e) => { this.onButtonClick(e); });

    // Set the modal callback function
    this.onModalShowCallback = () => { };
    this.modalEl.addEventListener('show.bs.modal', () => { this.onModalShowCallback(); });

    this.onModalHiddenCallback = () => { };
    this.modalEl.addEventListener('hidden.bs.modal', () => { this.onModalHiddenCallback(); });

    // Default callback for button clicked
    this.onButtonClickedCallback = () => { };
  }


  /**
   * Populate the special characters modal
   * @param {array} list Array of characters to populate
   */
  populate(list) {

    // Save the list of special characters
    this.list = list;

    // If the list is empty, disable the main button, otherwise, enable the button
    if (list.length === 0) { this.disable(); return; } else this.enable();

    // Empty the container
    this.countainerEl.innerHTML = "";

    // Populate the character list
    list.forEach((character, index) => {
      this.countainerEl.innerHTML += htmlItem.replace("<%=index%>", index).replace("<%=character%>", character);
    });
  }


  /**
   * Callback function triggered when a button is clicked
   * @param {event} event The container event
   */
  onButtonClick(event) {
    // Close the modal when a character is selected
    this.close();

    // Get the character index and add the character to the answer bar
    let index = event.target.getAttribute("data-index");
    answerBar.insertAtCaret(this.list[index]);
  }


  /**
   * Append the special characters to the provided parent
   * @param {object} parent Parent element
   */
  appendButtonTo(parent) {
    // Append the element to the parent
    parent.append(this.buttonEl);
  }


  /**
   * Disable the button that open the modal
   */
  disable() {
    this.isEnable = false;
    this.buttonEl.classList.add('disable');
    this.buttonTooltip.setContent({ '.tooltip-inner': translate.btnTooltipDisabled });
  }


  /**
   * Enable the button that open the modal
   */
  enable() {
    this.isEnable = true;
    this.buttonEl.classList.remove('disable');
    this.buttonTooltip.setContent({ '.tooltip-inner': translate.btnTooltip });
  }


  /**
   * Show the modal
   */
  open() {
    this.modal.show();
  }


  /**
   * Hide the modal
   */
  close() {
    this.modal.hide();
  }


  /**
   * Set focus on the first character
   */
  setFocusOnFirst() {
    document.getElementById("special-character-0").focus();
  }


  /**
   * Set the callback function called when the modal is show
   * @param {function} callback Function called when the modal is show
   */
  setShowModalCallback(callback) {
    this.onModalShowCallback = callback;
  }


  /**
   * Set the callback function called when the modal is hide
   * @param {function} callback Function called when the modal is hide
   */
  setHiddenModalCallback(callback) {
    this.onModalHiddenCallback = callback;
  }


  /**
   * Set the callback function called when the user click on a special character
   * @param {function} callback Callback function
   */
  setButtonClickCallback(callback) {
    this.onButtonClickedCallback = callback;
  }
}


export default new View();