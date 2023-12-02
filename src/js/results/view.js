import "./results.css";
import * as bootstrap from "bootstrap";
import str2dom from "doma";
import { parseEjs } from "Js/languages";
import translate from "./translate.js";
import htmlResults from "./results.html";
import model from "./model.js";
import PieChart from "Js/pieChart";


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

    // Create pie charts
    this.pieMemorization = new PieChart(this.modalEl.querySelector('.pie-memorization'));
    this.pieMemorization.setUnit('%');
    
  }

  /**
   * Update the results data in the 
   */
  update() {

    // Update the score
    this.modalEl.querySelector('.score .value').textContent = Math.round(model.data.score);


  }



  /**
   * Show the result modal
   */
  show() {

    // Compute the statitics
    model.process();

    // Populate the modal
    this.update();

    // Show the modal
    this.modal.show();
  }
}


export default new View();