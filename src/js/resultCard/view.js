import "./card.css";
import str2dom from "doma";
import { parseEjs } from "Js/languages";
import translate from "./translate.js";
import htmlCard from "./card.html";
import series from "Js/series";
import PieChart from "Js/pieChart";
import colors from "Js/cssColors";



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
  populate(stats, idCard = 0) {

    // Set the question number
    this.cardEl.querySelector(".id-badge").innerText = `${translate.badgePrefix}${idCard+1}`;

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
    this.cardEl.querySelector('.memorization-ratio').textContent = `${parseFloat(((100 * stats.memorizationRatioUser).toFixed(1)))}%`;    
    let searchTime = stats.time - stats.typingTime;
    this.cardEl.querySelector(".search-time").innerText = `${(searchTime / 1000).toFixed((searchTime < 12000) ? 1 : 0)}s`;
    this.cardEl.querySelector(".time").innerText = `${(stats.time / 1000).toFixed((stats.time < 12000) ? 1 : 0)}s`;
    this.cardEl.querySelector(".accuracy").innerText = `${parseFloat(((100 * stats.maxDistanceRatio).toFixed(1)))}%`;
    this.cardEl.querySelector(".wpm").innerText = `${(stats.wpm).toFixed(0)}wpm`;
    this.cardEl.querySelector(".answered").innerText = `${stats.count + 1} ${(stats.count) ? translate.times : translate.time}`;
  }


  /**
   * Populate the card header
   * @param {object} stats Question statistics
   */
  populateHeader(stats) {

    //  Populate the right answer
    this.cardEl.querySelector('.right-answer').textContent = stats.rightAnswer;

    // Create the chart
    const pie = new PieChart(this.cardEl.querySelector('.memorization-pie'), '%');

    // Update score pie chart
    pie.disableAnimation();
    pie.setUnit('%');
    const { r, g, b } = this.interpolateColor(stats.newScore);
    pie.setColors(`rgb(${r}, ${g}, ${b})`, colors.lightGrey);
    pie.setRatio(stats.newScore, 0, stats.newScore, 1);


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


  /**
   * Display the question text in the top of the card
   * @param {string} questionText The question to display
   */
  populateText(questionText) {
    this.cardEl.querySelector('.card-header > div').innerHTML = questionText;
    this.cardEl.querySelector('.card-header').classList.remove('d-none');
  }


  /**
   * Set the footer badge (success or failed)
   * @param {boolean} success True if the final answer is correct, false otherwhise
   */
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


  /**
   * Interpolate the chart pie color
   * @param {float} value The ratio value
   * @returns {object} An object containing the RGB components [r,g,b]
   */
  interpolateColor(value) {

    // Colors and values
    const colorStops = [
      { value: 0, color: { r: 232, g: 60, b: 75 } },    // Red
      { value: 1 / 3, color: { r: 240, g: 135, b: 0 } },   // Orange
      { value: 2 / 3, color: { r: 187, g: 219, b: 6 } },   // Yellow
      { value: 1, color: { r: 12, g: 202, b: 74 } }      // Green
    ];

    // Compute beginning and end of the range
    let startColor, endColor;
    for (let i = 0; i < colorStops.length - 1; i++) {
      if (value >= colorStops[i].value && value <= colorStops[i + 1].value) {
        startColor = colorStops[i];
        endColor = colorStops[i + 1];
        break;
      }
    }

    // CVompute the factor
    const factor = (value - startColor.value) / (endColor.value - startColor.value);

    // Compute RGB components
    const r = Math.round(startColor.color.r + factor * (endColor.color.r - startColor.color.r));
    const g = Math.round(startColor.color.g + factor * (endColor.color.g - startColor.color.g));
    const b = Math.round(startColor.color.b + factor * (endColor.color.b - startColor.color.b));

    // Returns the color
    return { r, g, b };
  }
}