import "./correction.css";
import htmlCorrection from "./correction.html";
import str2dom from "doma";



/**
 * View for the Correction module
 */
class View {

  /**
   * Constructor
   * - Prepare HTML elements
   */
  constructor() {

    // Prepare the button element
    this.containerEl = str2dom.one(htmlCorrection);

    this.flipCardEl = this.containerEl.querySelector('.flip-card');

    // Get the correction and answer element
    this.rightAnswerEl = this.containerEl.querySelector('.back-container>div');
    this.correctionEl = this.containerEl.querySelector('.front-container>div');
  }


  hideRightAnswer() {
    this.flipCardEl.classList.remove('flip');
  }

  showRightAnswer() {
    this.flipCardEl.classList.add('flip');
  }


  setRightAnswer(rightAnswer) {
    this.rightAnswerEl.innerHTML = rightAnswer;
    this.onResize();
  }


  hideCorrection() {    
    this.correctionEl.style.opacity = 0;
  }

  showCorrection() {
    this.flipCardEl.classList.remove('flip');    
    this.correctionEl.style.opacity = 0.8;
  }

  /**
   * Display the correction or hide the correction bar if string is empty
   * @param {string} correction The correction to display
   */
  setCorrectionHTML(correction) {
    this.correctionEl.innerHTML = correction;
    if (correction.length === 0) this.hideCorrection(); else this.showCorrection();
    this.onResize();
  }


  /**
   * Resize the main container to adapt to the card content
   */
  onResize() {
    const height = Math.max(this.correctionEl.offsetHeight, this.rightAnswerEl.offsetHeight);
    this.flipCardEl.style.height = `${height}px`;
  }


  /**
   * Append the correction elements to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) {
    // Append the element to the parent
    parent.append(this.containerEl);
  }
}


export default new View();