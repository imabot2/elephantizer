import "./overlay.css";
import str2dom from "doma";
import { parseEjs } from "Js/languages";
import translate from "./translate.js";
import htmlOverlay from "./overlay.html";

class View {


  constructor() {

    // Append the button to the DOM    
    this.overlayEl = str2dom.one(parseEjs(htmlOverlay, translate));
    document.body.append(this.overlayEl);

    this.messageEl = this.overlayEl.querySelector('.message');

    // When the user click in the overlay or press a key, trigger the event
    this.onClickCallback = () => { };
    this.overlayEl.addEventListener('click', (event) => { this.onClickEvent(event); });
    this.overlayEl.addEventListener('keydown', (event) => { this.onClickEvent(event); });
  }


  /**
   * change the overlay message for the invitation to start
   */
  setStartMessage() {
    this.messageEl.innerHTML = translate.overlayMessageStart;
  }


  /**
   * change the overlay message for the invitation to continue
   */  
  setContinueMessage() {
    this.messageEl.innerHTML = translate.overlayMessageContinue;
  }

  
  /**
   * Set the focus on the overlay
   */
  focus() {
    this.overlayEl.focus();
  }


  /**
   * Hide the overlay
   */
  hide() {
    this.overlayEl.classList.add('hide');
  }


  /**
   * Show the overlay and set focus on the overlay
   * @param {integer} ms Duration of the fade in effect in ms
   */
  show(fadeIn_ms = 1000) {
    this.overlayEl.style.setProperty('--overlay-fade-in-duration', `${fadeIn_ms}ms`);
    this.overlayEl.classList.remove('hide');
    
    // Set a timeout to prevent rejecting the focus during transition
    setTimeout(() => { 
      this.focus();
     }, 100)
  }


  /**
   * Callback function called when the user click on the overlay or press a key
   * @param {object} event The event that triggered the function
   */
  onClickEvent(event) {
    event.preventDefault();
    this.onClickCallback();
  }


  /**
   * Set the callback function when the user click on the overlay or press a key
   * @param {function} callback The function call when the user click or press a key
   */
  setClickEventCallback(callback) {
    this.onClickCallback = callback;
  }
}

export default new View();