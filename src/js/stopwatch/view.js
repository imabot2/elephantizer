import "./stopwatch.css";
import model from "./model.js";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";
import htmlStopwatch from "./stopwatch.html";

class View {

  /**
   * Constructor
   * - append the stopwatch to the DOM
   * - get elements from DOM
   */
  constructor() {
    // Append the stopwatch to the page
    this.stopwatchContainerEl = str2dom.one(htmlStopwatch);
    document.body.append(this.stopwatchContainerEl);

    // Get the text of the timer
    this.stopwatchTextEl = this.stopwatchContainerEl.querySelector("span");
  }


  /**
   * Set the time in the stopwatch
   * @param {integer} minutes minutes [0; 99]
   * @param {integer} seconds seconds [0; 59]
   */
  setValue(minutes, seconds) {
    this.stopwatchTextEl.innerText = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  /**
   * Show the stopwatch with the animation
   */
  show() {
    this.stopwatchContainerEl.style.top = `-${10}px`;
  }

  /**
  * Hide the stopwatch with the animation
  */
  hide() {
    let h = this.stopwatchContainerEl.offsetHeight;
    this.stopwatchContainerEl.style.top = `-${1.6 * h}px`;
  }
}


export default new View();