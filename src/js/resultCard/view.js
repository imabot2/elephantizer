import "./card.css";
import str2dom from "doma";
import { parseEjs } from "Js/languages";
import translate from "./translate.js";
import htmlCard from "./card.html";
import series from "Js/series";

/**
 * View for the Result Card module
 */
export default class View {

  /**
   * Constructor, create the card element
   */
  constructor() {
    // Create the card from HTML
    this.cardEl = str2dom.one(parseEjs(htmlCard, translate));
  }


  /**
   * Populate the card with the data for a given question
   * @param {object} stats Question statistics
   */
  populate(stats, idCard=0) {

    // Set the question number
    this.cardEl.querySelector(".id-badge").innerText = `#${idCard}`;

    // Get question data
    const question = series.get(stats.path, stats.uid);

    // Populate the card image/text
    switch (question.type) {
      case 'outer': this.populateOuter(question.image); break;
      case 'inner': this.populateInner(question.image); break;
      case 'text': this.populateText(question.question); break;
    }

    // Populate the card
    this.populateFlag(question.flag);
    this.populateHeader(stats);
    this.populateBody(stats);
    this.populateSuccessFailBadge(stats.finalDistance === 0);

  }


  /**
   * Populate the card body
   * @param {object} stats Question statistics
   */
  populateBody(stats) {

    // Set the body data
    this.cardEl.querySelector('.user-answer').textContent = stats.finalAnswer;
    let searchTime = stats.time - stats.typingTime;
    this.cardEl.querySelector(".search-time").innerText = `${(searchTime / 1000).toFixed((searchTime < 12000) ? 1 : 0)}s`;
    this.cardEl.querySelector(".time").innerText = `${(stats.time / 1000).toFixed((stats.time < 12000) ? 1 : 0)}s`;
    this.cardEl.querySelector(".accuracy").innerText = `${parseFloat(((100 * stats.maxDistanceRatio).toFixed(1)))}%`;
    this.cardEl.querySelector(".wpm").innerText = `${(stats.wpm).toFixed(0)}wpm`;
    this.cardEl.querySelector(".answered").innerText = `${stats.count + 1} ${(stats.count) ? 'times' : 'time'}`;
  }


  /**
   * Populate the card header
   * @param {object} stats Question statistics
   */
  populateHeader(stats) {

    //  Populate the right answer
    this.cardEl.querySelector('.right-answer').textContent = stats.rightAnswer;

    // Populate Score
    this.cardEl.querySelector('.score').textContent = `${parseFloat((100 * stats.memorizationRatioUser).toFixed(1))}%`;

    // Prepare progression badge
    let progress = 100 * (stats.newScore - stats.previousScore);
    let progressText = (progress >= 0) ? '+' : '';
    progressText += progress.toFixed((progress > 10) ? 1 : 2);
    progressText += "%";

    // Set value in the badge
    let badge = this.cardEl.querySelector(".progression")

    // Set badge color
    badge.innerText = progressText;
    if (progress < 0) badge.classList.add("bg-danger")
    if (progress == 0) badge.classList.add("bg-dark")
    if (progress > 0) badge.classList.add("bg-success")
  }



  /**
   * Add the flag on top of the card
   * @param {string} flagImg The path to the image flag
   */
  populateFlag(flagImg) {
    this.cardEl.querySelector('.flag').src = flagImg;
  }

  /**
   * Display an outer image in the top of the card
   * @param {string} image The image to display
   */
  populateOuter(image) {
    this.cardEl.querySelector('.card-img-top').src = image;
    this.cardEl.querySelector('.card-img-top').classList.add('outer');
    this.cardEl.querySelector('.card-img-top').classList.remove('d-none');
  }


  /**
   * Display an inner image in the top of the card
   * @param {string} image The image to display
   */
  populateInner(image) {
    this.cardEl.querySelector('.card-img-top').src = image;
    this.cardEl.querySelector('.card-img-top').classList.add('inner');
    this.cardEl.querySelector('.card-img-top').classList.remove('d-none');
  }


  populateText(question) {
    this.cardEl.querySelector('.card-header > div').innerHTML = question;
    this.cardEl.querySelector('.card-header').classList.remove('d-none');
  }

  populateSuccessFailBadge(success) {
    if (success) this.cardEl.querySelector('.card-footer > img').src = "/static/icons/success.png";
    else {
      this.cardEl.querySelector('.card-footer > img').src = "/static/icons/error.png";
      this.cardEl.classList.add("failed");
    }    
  }
  /**
   * Append the card to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) {
    // Append the element to the parent
    parent.append(this.cardEl);
  }
}