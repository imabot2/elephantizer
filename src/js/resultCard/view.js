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
   * @param {object} stats Question data
   */
  populate(stats) {
    console.log(stats);
    const question = series.get(stats.path, stats.uid);
    console.log(question);

    switch (question.type) {
      case 'outer': this.populateOuter(question.image); break;
      case 'inner': this.populateInner(question.image); break;
      case 'text': this.populateText(question.question); break;


    }

    this.populateSuccessFailBadge(stats.finalDistance === 0);
  }

  populateOuter(image) {
    console.log (image)
    this.cardEl.querySelector('.card-img-top').src = image;
  }

  populateInner(image) {

  }

  populateText(question) {

  }
  
  populateSuccessFailBadge(success) {
    if (success) this.cardEl.querySelector('.card-footer > img').src = "/static/icons/success.png";
    else this.cardEl.querySelector('.card-footer > img').src = "/static/icons/error.png";
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