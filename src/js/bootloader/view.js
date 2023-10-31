import "./console.css"
import { Console } from "./view-console.js";

class View extends Console {
  
  /**
   * Constructor, call the parent constructor
   */
  constructor() {
    super();

    // Get the loader overlay element
    this.loaderEl = document.getElementById('bootloader');
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