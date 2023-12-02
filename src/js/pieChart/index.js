import View from "./view.js";



export default class PieChart {

  constructor(parent, unit) { this.view = new View(parent, unit); }

  /**
   * Set the pie chart unit
   * @param {string} unit The unit of the pie chart label
   */
  setUnit(unit) { this.view.setUnit(unit); }



}