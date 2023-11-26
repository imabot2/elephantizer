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
      this.setCorrection('Une correction');
      this.showCorrection();
      this.setRightAnswer('Une bonne réponse');
    }, 2000)

    setTimeout(() => {
      this.showRightAnswer();
      
    }, 3000)
    setTimeout(() => {
      this.hideCorrection();
      this.hideRightAnswer();
    }, 5000)
    setTimeout(() => {
      this.showCorrection();
    }, 5500)
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

  setCorrection(correction) {
    this.correctionEl.innerHTML = correction;
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