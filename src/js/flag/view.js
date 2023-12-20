import "./flag.css";
import * as bootstrap from "bootstrap";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";
import str2dom from "doma";
import htmlFlag from "./flag.html";


/**
 * View for the Flag module
 */
class View {

  /**
   * Constructor
   * - Initialize DOM elements
   * - Get animationend event
   */
  constructor() {
    // Prepare the flag element    
    this.flagEl = str2dom.one(parseEjs(htmlFlag, translate));

    //Get the DOM elements
    this.animationEl = this.flagEl.querySelector('.animation');
    this.frontEl = this.animationEl.querySelector('.front');
    this.backEl = this.animationEl.querySelector('.back');

    // Initialize tooltips
    new bootstrap.Tooltip(this.animationEl);

    // Keep track of the front and back image sources
    this.backImageSrc = "#";
    this.frontImageSrc = "#";

    // Event when the animation is over
    this.animationEl.addEventListener("animationend", () => {

      // Set the new front flag
      this.frontEl.src = this.frontImageSrc;

      // Remove the animation
      this.animationEl.classList.remove("animate");
    });
  }


  /**
   * Set the next flag to display
   * @param {string} imageSrc Path or URL of the next flag
   */
  setNext(imageSrc) {
    this.backImageSrc = imageSrc;
  }


  /**
   * Set and display the current flag
   * @param {string} imageSrc Path or URL of the current flag
   */
  setCurrent(imageSrc) {
    this.frontImageSrc = imageSrc;
    this.frontEl.src = imageSrc;
  }


  /**
   * Switch the flags (run the animation)
   * Do not run the animation if the flags are identical
   * @returns True if the flag has changed, false otherwier
   */
  showNext() {

    // Do not run the animation if the image is the same (no changes)
    if (this.backImageSrc === this.frontImageSrc) return false;

    // Set the next image
    this.backEl.src = this.backImageSrc;

    // Start the animation
    this.animationEl.classList.add("animate");

    // The next image becomes the new from image
    this.frontImageSrc = this.backImageSrc;

    // The flag has changed, return true
    return true;
  }


  /**
   * Append the flag to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) {
    // Append the element to the parent
    parent.append(this.flagEl);
  }
}



export default new View();