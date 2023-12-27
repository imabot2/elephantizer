import "./cards.css";
import str2dom from "doma";
import { parseEjs } from "Js/languages";
import translate from "./translate.js";
import htmlSuccessCards from "./successCard.html";
import htmlFailedCards from "./failedCard.html";
import settings from "Js/settings";

/**
 * View for the Side Card module
 */
class View {

  /**
   * Constructor
   * - Prepare HTML elements
   */
  constructor() {
    // Create and initialize the modal
    this.successContainer = str2dom.one(parseEjs(htmlSuccessCards, translate));
    document.body.append(this.successContainer);

    this.successScore = this.successContainer.querySelector(".score > span");
    this.successProgressBadge = this.successContainer.querySelector(".progression .badge");
    this.successProgressIcon = this.successProgressBadge.querySelector(".bi");
    this.successProgressValue = this.successProgressBadge.querySelector(".progression .value");
    this.successTime = this.successContainer.querySelector(".time");
    this.successWpm = this.successContainer.querySelector(".wpm > span");

    // Set the card width for the animation
    let width = this.successContainer.offsetWidth;
    this.successContainer.style.setProperty("--success-card-width", `${width}px`);



    // Get the card width for the animation    
    this.failedContainer = str2dom.one(parseEjs(htmlFailedCards, translate));
    document.body.append(this.failedContainer);

    // Get the elements of the failed card
    this.failedScore = this.failedContainer.querySelector(".score > span");
    this.failedProgressBadge = this.failedContainer.querySelector(".progression .badge");
    this.failedProgressIcon = this.failedProgressBadge.querySelector(".bi");
    this.failedProgressValue = this.failedProgressBadge.querySelector(".progression .value");

    this.failedTime = this.failedContainer.querySelector(".time");
    this.failedWpm = this.failedContainer.querySelector(".wpm > span");

    // Set the card width for the animation
    width = this.failedContainer.offsetWidth;
    this.failedContainer.style.setProperty("--failed-card-width", `${width}px`);

    // Counter that count the side card pending
    this.toHideCounterSuccess = 0;
    this.toHideCounterFailed = 0;

    // Create the event when the card are hide
    this.cardHideEvent = new Event('cards-hide');
  }


  /**
   * Hide the success card
   */
  hideSuccessCard() {
    // Decrease the counter and return if not equal to zero (still cards pending)
    this.toHideCounterSuccess--;
    if (this.toHideCounterSuccess) return;

    // Hide the card
    this.successContainer.classList.remove("show");
        
    // If both cards are hidden trigger the event    
    if (this.toHideCounterFailed === 0) this.successContainer.dispatchEvent(this.cardHideEvent);
  }


  /**
   * Hide the failed card
   */
  hideFailedCard() {
    // Decrease the counter and return if not equal to zero (still cards pending)
    this.toHideCounterFailed--;
    if (this.toHideCounterFailed) return; 

    // Hide the card
    this.failedContainer.classList.remove("show");


    // If both cards are hidden trigger the event
    if (!this.toHideCounterSuccess) this.successContainer.dispatchEvent(this.cardHideEvent);
  }


  /**
   * Return a promise resolved when the side cards are hidden
   * @returns A promise resolved when the side card are hidden
   */
  waitForCardsOver() {
    return new Promise((resolve) => {
      // If the cards are hidden, resolve the promise
      if (this.toHideCounterSuccess + this.toHideCounterFailed==0) { resolve(); return; }
      this.successContainer.addEventListener('cards-hide', () => {
        setTimeout (() => { resolve(); }, 200);
      }, { once: true })
    })
  }


  /**
   * Show the success card.
   * The card is automaticaly hidden after a delay
   * @param {float} score Score of the card
   * @param {float} progress The progress percentage
   * @param {integer} ms Delay to answer the question in milliseconds
   * @param {float} wpm wordd per minute
   */
  showSuccessCard(score, progress, ms, wpm) {

    // Do not show the side card if option is off
    if (settings.get('sideCardsAnimationDuration') === 0) return;

    // Set values in the card
    this.successScore.textContent = `${Math.round(score)}`;
    this.setSuccessProgress(progress);
    this.successTime.innerHTML = this.timeToHTML(ms);
    this.successWpm.textContent = `${Math.round(wpm)}`;

    // Show the card
    this.successContainer.classList.add("show");
    this.toHideCounterSuccess++;

    // Hide the card after 800 milliseconds
    setTimeout(() => {
      this.hideSuccessCard();
    }, settings.get('sideCardsAnimationDuration'))
  }

  /**
   * Show the failed card.
   * The card is automaticaly hidden after a delay
   * @param {float} score Score of the card
   * @param {float} progress The progress percentage
   * @param {integer} ms Delay to answer the question in milliseconds
   * @param {float} wpm wordd per minute
   */
  showFailedCard(score, progress, ms, wpm) {

    // Do not show the side card if option is off
    if (settings.get('sideCardsAnimationDuration') === 0) return;

    // Set values in the card
    this.failedScore.textContent = `${Math.round(score)}`;
    this.setFailedProgress(progress);
    this.failedTime.innerHTML = this.timeToHTML(ms);
    this.failedWpm.textContent = `${Math.round(wpm)}`;

    // Show the card
    this.failedContainer.classList.add("show");
    this.toHideCounterFailed++;

    // Hide the card after 800 milliseconds
    setTimeout(() => {
      this.hideFailedCard();
    }, settings.get('sideCardsAnimationDuration'))

  }


  /**
   * Update the progression badge for the success card
   * - Set color
   * - Set icon
   * - Set value
   * @param {float} value The percentage of progression
   */
  setSuccessProgress(value) {
    if (value >= 0) {
      // Set icon
      this.successProgressIcon.classList.remove('bi-graph-down-arrow');
      this.successProgressIcon.classList.add('bi-graph-up-arrow');
      // Set badge color        
      this.successProgressBadge.classList.remove('bg-danger');
      this.successProgressBadge.classList.add('bg-success');
      // Set value
      this.successProgressValue.textContent = `+${value.toFixed(1)}`;

    }
    else {
      // Set icon
      this.successProgressIcon.classList.remove('bi-graph-up-arrow');
      this.successProgressIcon.classList.add('bi-graph-down-arrow');
      // Set badge color      
      this.successProgressBadge.classList.remove('bg-success');
      this.successProgressBadge.classList.add('bg-danger');
      // Set value
      this.successProgressValue.textContent = `${value.toFixed(1)}`;
    }
  }


  /**
   * Update the progression badge for the failed card
   * - Set color
   * - Set icon
   * - Set value
   * @param {float} value The percentage of progression
   */
  setFailedProgress(value) {
    if (value >= 0) {
      // Set icon
      this.failedProgressIcon.classList.remove('bi-graph-down-arrow');
      this.failedProgressIcon.classList.add('bi-graph-up-arrow');
      // Set badge color
      this.failedProgressBadge.classList.remove('bg-danger');
      this.failedProgressBadge.classList.add('bg-success');
      // Set value
      this.failedProgressValue.textContent = `+${value.toFixed(1)}`;

    }
    else {
      // Set icon
      this.failedProgressIcon.classList.remove('bi-graph-up-arrow');
      this.failedProgressIcon.classList.add('bi-graph-down-arrow');
      // Set badge color
      this.failedProgressBadge.classList.remove('bg-success');
      this.failedProgressBadge.classList.add('bg-danger');
      // Set value
      this.failedProgressValue.textContent = `${value.toFixed(1)}`;
    }
  }

  /**
   * Convert a time in milliseconds to human readable HTML
   * @param {integer} ms time to convert in milliseconds
   * @returns {string} A string containing the HTML with the time 
   */
  timeToHTML(ms) {

    // Less than 10s, display seconds with two digits
    if (ms < 10000) {
      return `<span>${(ms / 1000).toFixed(2)}</span>s`;
    }

    // Less than 60s, display seconds with one digit
    if (ms < 60000) {
      return `<span>${(ms / 1000).toFixed(1)}</span>s`;
    }

    // One minute or more, display minutes:seconds
    let seconds = Math.round(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = Math.floor((seconds % 60));
    return `<span>${minutes}:${seconds.toString().padStart(2, "0")}<span>`;
  }
}


export default new View();