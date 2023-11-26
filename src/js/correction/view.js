import "./correction.css";
import htmlCorrection from "./correction.html";
import str2dom from "doma";



/**
 * View for the Correction module
 */
class View {
  constructor() {

    // Prepare the button element
    this.containerEl = str2dom.one(htmlCorrection);

    this.flipCardEl = this.containerEl.querySelector('.flip-card');

    // Get the correction and answer element
    this.rightAnswerEl = this.containerEl.querySelector('.back-container>div');
    this.correctionEl = this.containerEl.querySelector('.front-container>div');

    setTimeout(() => {
      this.setCorrection('coucou ceci est un long texte qui va être sur plusieurs lignes')
    }, 2000)

    setTimeout(() => {
      this.hideCorrection()
    }, 4000)

    setTimeout(() => {
      this.setCorrection('Une réponse')
    }, 6000)
  }


  setRightAnswer(rightAnswer) {
    this.rightAnswerEl.innerHTML = rightAnswer;
    this.resizeContainer();
    
  }


  hideCorrection() {    
    this.correctionEl.style.opacity = 0;
  }

  setCorrection(correction) {
    this.correctionEl.innerHTML = correction;
    this.correctionEl.style.opacity = 0.8;
    this.resizeContainer();
  }


  /**
   * Resize the main container to adapt to the card content
   */
  resizeContainer() {
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