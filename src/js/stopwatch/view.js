import "./stopwatch.css";
import model from "./model.js";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";
import htmlStopwatch from "./stopwatch.html";
import settings from "Js/settings";

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
    this.stopwatchTextEl = this.stopwatchContainerEl.querySelector(".stopwatch");
    this.stopwatchCounterEl = this.stopwatchContainerEl.querySelector(".counter");
  }


  /**
   * Blink the timer
   */
  blink() {
    this.stopwatchTextEl.classList.add('blink');
  }


  /**
   * Stop blinking
   */
  unblink() {
    this.stopwatchTextEl.classList.remove('blink');
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
   * Set the counter values
   * @param {integer} current number of questions answered
   * @param {integer} total Total number of questions in the memory test
   */
  setCounter(current, total) {
    this.stopwatchCounterEl.innerText = `${current}/${total}`;
  }


  /**
   * Show the question counter
   */
  showCounter() {
    this.stopwatchCounterEl.classList.remove('d-none');
  }


  /**
   * Show the question counter
   */
  hideCounter() {
    this.stopwatchCounterEl.classList.add('d-none');
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
    this.stopwatchContainerEl.style.top = `${-h-50}px`;
  }
}


export default new View();