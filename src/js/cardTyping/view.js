import "./card.css";
import htmlCard from "./card.html";
import str2dom from "doma";
import answerBar from "Js/answerBar";
import correction from "Js/correction";



/**
 * View for the card typing module
 */
class View {

  /**
   * Constructor 
   * - Get DOM elements
   * - Add event listener on resize
   */
  constructor() {
    // Append the button to the DOM    
    this.containerEl = str2dom.one(htmlCard);
    document.body.append(this.containerEl);

    // Get outer images
    this.outerImages = [];
    this.outerImages[0] = this.containerEl.querySelector('.image-outer-0');
    this.outerImages[1] = this.containerEl.querySelector('.image-outer-1');

    // Get inner images
    this.innerImages = [];
    this.innerImages[0] = this.containerEl.querySelector('.image-inner-0');
    this.innerImages[1] = this.containerEl.querySelector('.image-inner-1');

    // Get text containers
    this.texts = [];
    this.texts[0] = this.containerEl.querySelector('.text-0');
    this.texts[1] = this.containerEl.querySelector('.text-1');

    // Properties of the current question
    this.current = {
      type: 'outer',
      outerId: 0,
      innerId: 0,
      textId: 0,
    }


    // Populate answer bar container
    let answerBarContainer = this.containerEl.querySelector('.answer-bar-container');
    answerBar.appendTo(answerBarContainer);

    // Populate correction container
    let bodyContainerEl = this.containerEl.querySelector('.body-container');
    correction.appendTo(bodyContainerEl);

    // On resize, resize the main container     
    window.visualViewport.addEventListener('resize', () => { this.onResize(); });

    // Call the onResize function for first rendering
    this.onResize();
  }


  /**
   * Prepare the next question (set image and store data)
   * @param {object} data Data of the next question
  */
  prepareNextQuestion(nextQuestion) {

    this.nextQuestion = nextQuestion;
    switch (this.nextQuestion.type) {
      case 'outer': this.prepareNextOuterImage(); break;
      case 'inner': this.prepareNextInnerImage(); break;
      case 'text': this.prepareNextText(); break;
    }
   
  }


  /**
   * Hide the current question and show the next question
   * @returns A promise when the transition is over for both (shown and hidden)
   */
  switchToNextQuestion() {    
    return Promise.all([this.hideCurrentQuestion(), this.showNextQuestion()]);    
  }


  /**
   * Show the current question
   * @returns A promise resolved whent the next question opacity is equal to 1
   */
  showNextQuestion() {

    return new Promise((resolve) => {
      let visibleElement;

      // Dispatch according to the next question type
      switch (this.nextQuestion.type) {

        case 'outer':
          this.current.outerId = 1 - this.current.outerId
          visibleElement = this.outerImages[this.current.outerId];
          visibleElement.style.opacity = 1;
          break;

        case 'inner':
          this.current.innerId = 1 - this.current.innerId
          visibleElement = this.innerImages[this.current.innerId];
          visibleElement.style.opacity = 1;
          break;

        case 'text':
          this.current.textId = 1 - this.current.textId;
          visibleElement = this.texts[this.current.textId];
          visibleElement.style.opacity = 1;
          break;
      }

      // Set the new type (outer, inner or text)
      this.current.type = this.nextQuestion.type;

      // When the transition is over, resolve the promise
      visibleElement.addEventListener('transitionend', () => { resolve(); }, { once: true });
    })
  }


  /**
   * Hide the current question
   * @returns A promise when the transition is over (element is hidden)
   */
  hideCurrentQuestion() {

    return new Promise((resolve) => {

      // Select the element to hide (current one)
      let hiddenElement;
      switch (this.current.type) {
        // Set opacity to 0.001 to prevent flickering on Firefox
        case 'outer': hiddenElement = this.outerImages[this.current.outerId]; break;
        case 'inner': hiddenElement = this.innerImages[this.current.innerId]; break;
        case 'text': hiddenElement = this.texts[this.current.textId]; break;
      }

      // Hide the element
      hiddenElement.style.opacity = 0.001;

      // Resolve when transition is over
      hiddenElement.addEventListener('transitionend', () => { resolve(); }, { once: true });
    })
  }


  /**
   * Prepare the next inner image in background for smooth transitions
   */
  prepareNextInnerImage() {
    
    // Get the next index
    const index = 1 - this.current.innerId;

    // Set the next inner image
    this.innerImages[index].querySelector('img').src = this.nextQuestion.image;
  }


  /**
   * Prepare the next outer image in background for smooth transitions
   */
  prepareNextOuterImage() {
    // Get the next index
    const index = 1 - this.current.outerId;

    // Set the next inner image
    this.outerImages[index].querySelector('img').src = this.nextQuestion.image;
  }


  /**
   * Prepare the next text in background for smooth transitions
   */
  prepareNextText() {
    // Get the next index
    const index = 1 - this.current.textId;

    // Set the next badge and question text
    this.texts[index].querySelector('div').innerHTML = this.nextQuestion.deck.nativeName;
    this.texts[index].querySelector('div:nth-child(2)').innerHTML = this.nextQuestion.question;
  }


  /**
  * Resize the card container to the current height / width
  */
  onResize() {
    window.scrollTo({ top: 0, behavior: 'instant' });
    this.containerEl.style.width = `${window.visualViewport.width}px`;
    this.containerEl.style.height = `${window.visualViewport.height}px`;
    correction.onResize();
  }
}


export default new View();