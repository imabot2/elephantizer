import "./results.css";
import * as bootstrap from "bootstrap";
import str2dom from "doma";
import { parseEjs } from "Js/languages";
import translate from "./translate.js";
import htmlResults from "./results.html";
import model from "./model.js";
import PieChart from "Js/pieChart";
import ease from "Js/ease";
import settings from "Js/settings";
import colors from "Js/cssColors";

/**
 * View for the results module
 */
class View {

  /**
   * Constructor
   * - Create and initialize the modal
   * - Create and populate the pie charts
   */
  constructor() {

    // Create and initialize the modal
    this.modalEl = str2dom.one(parseEjs(htmlResults, translate));
    document.body.append(this.modalEl);
    this.modal = new bootstrap.Modal(this.modalEl);

    // Enable the tooltips
    const tooltipTriggerList = this.modalEl.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, { html: true }));

    // Get the elements from DOM
    this.scoreEl = this.modalEl.querySelector('.score .value');
    this.wpmEl = this.modalEl.querySelector('.wpm .value');

    // Keep of a copy of data shown in the result modal
    this.data = {};
    // True when the modal has data to display
    this.isReady = false;

    // Set the callback function when the modal is shown
    this.modalEl.addEventListener('shown.bs.modal', () => { this.onModalShown(); });

    // Set the callback function when the modal is hide
    this.onModalHideCallback = () => {};
    this.modalEl.addEventListener('hide.bs.modal', () => { this.onModalHideCallback(); });

    // Create pie charts
    this.pieMemorization = new PieChart(this.modalEl.querySelector('.pie-memorization'));
    this.pieMemorization.setUnit('%');
    this.pieMemorization.setColors(colors.red, colors.lightGrey);

    this.pieResponseTime = new PieChart(this.modalEl.querySelector('.pie-response-time'));
    this.pieResponseTime.setUnit('s');
    this.pieResponseTime.setColors(colors.blue, colors.lightGrey);

    this.pieRightAnswers = new PieChart(this.modalEl.querySelector('.pie-right-answers'));
    this.pieRightAnswers.setUnit('%');
    this.pieRightAnswers.setColors(colors.green, colors.lightGrey);

    this.pieAccuracy = new PieChart(this.modalEl.querySelector('.pie-accuracy'));
    this.pieAccuracy.setUnit('%');
    this.pieAccuracy.setColors(colors.orange, colors.lightGrey);

    
  }


  /**
   * Set the statistics data for displaying in the modal
   * @param {object} data The statistics data
   */
  setData(data) {
    // Deep copy of the data
    this.data = structuredClone(data);

    // Modal is ready to show results
    this.isReady = true;
  }


  /**
   * Show the result modal
   */
  show() {
    
    // Prepare the modal for the animations
    this.beforeModalShow();

    // Show the modal
    this.modal.show();
  }


  /**
   * Reset the modal to restart a new animation
   */
  reset() {

    // Reset score and progress
    this.scoreEl.innerText = 0;
    this.wpmEl.innerText = 0;
    
    // Reset memory score pie chart
    this.pieMemorization.disableAnimation();
    this.pieMemorization.setRatio(0);

    // Reset response time pie chart
    this.pieResponseTime.disableAnimation();
    this.pieResponseTime.setRatio(0);


    // Reset right answers pie chart
    this.pieRightAnswers.disableAnimation();
    this.pieRightAnswers.setRatio(0);

    // Reset accuracy pie chart
    this.pieAccuracy.disableAnimation();
    this.pieAccuracy.setRatio(0);

    //this.resultsProgressEl.innerText = 0;

    /*    
    // Populate cards
    this.populateCards();
    */
  }


  /**
   * Update the modal with the model data
   */
  update() {

    // Update the score and progress
    ease.outQuartProgress(this.scoreEl, 0, this.data.score);
    ease.outQuartProgress(this.wpmEl, 0, this.data.wpm);

    // Update memory score pie chart
    this.pieMemorization.enableAnimation();
    this.pieMemorization.setRatio(this.data.memorizationRatioUser);

    // Update right answers pie chart
    this.pieResponseTime.enableAnimation();
    this.pieResponseTime.setRatio(this.data.timeToFirstKeyRatioUser, 0, this.data.timeToFirstKey_sec, 1);

    // Update right answers pie chart
    this.pieRightAnswers.enableAnimation();
    this.pieRightAnswers.setRatio(this.data.finalDistanceRatio);

    // Update accuracy pie chart
    this.pieAccuracy.enableAnimation();
    this.pieAccuracy.setRatio(this.data.maxDistanceRatio);

    //ease.outQuartProgress(this.progressEl, 0, 100 * this.results.progress, (this.results.progress >= 0.1) ? 1 : 2, true)
  }


  /**
   * When the show instance is called, reset the modal content to run the animations
   */
  beforeModalShow() {
    if (settings.get('resultsAnimationDuration') === 0) 
      // If animation are disable in settings, show the results before the modal is shown
      this.update();    
    else
      // If animation are enable in settings, start animations at zero
      this.reset();

  }


  /**
   * Callback function called when the modal is shown
   * Lauch the animation
   */
  onModalShown() {
    if (settings.get('resultsAnimationDuration') !== 0) 
      setTimeout(() => { this.update(); }, 250);
  }

  /**
   * Set the callback function called when the modal is hide
   * @param {function} callback Callback function
   */
  onHide(callback) {
    this.onModalHideCallback = callback;
  }


}


export default new View();