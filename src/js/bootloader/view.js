import "./console.css"
import languages from "Js/languages";
import { Console } from "./view-console.js";

class View extends Console {

  /**
   * Constructor
   * - Call the parent constructor
   * - Get DOM elements
   * - Change the loading image according to the user language
   */
  constructor() {
    super();

    // Get the loader overlay element
    this.loaderEl = document.getElementById('bootloader');

    // Set the loading image according to current language
    this.loaderImageEl = this.loaderEl.querySelector('img');
    this.loaderImageEl.src = `/static/loader/loader-${languages.current()}.png`;
  }


  /**
   * Hide the loader overlay
   * @param {integer} ms Fade out duration in milliseconds
   */
  hideLoader(ms) {

    // Set deflaut time is ms is not provided
    ms = ms ?? 250;
    // Set transition time and start transition
    this.loaderEl.style.transition = `opacity ${ms}ms ease-in-out`;
    this.loaderEl.style.opacity = 0;

    // Start a timer to hide the overlay (prevent keeping the overlay over page content)
    setTimeout(() => {
      this.loaderEl.classList.add("d-none");
      this.clearConsole();
    }, ms);
  }
}


export default new View();