import View from "./view.js";


/**
 * Module for the Pie Charts
 */
export default class PieChart {

  constructor(parent, unit) { this.view = new View(parent, unit); }


  /**
   * // Set the colors of the pie chart
   * @param {string} mainColor Color of the first data in the dataset
   * @param {string} secondaryColor Color of the second data in the dataset
   */
  setColors(mainColor, secondaryColor) { this.view.setColors(mainColor, secondaryColor); }


  /**
   * Set the pie chart unit
   * @param {string} unit The unit of the pie chart label
   */
  setUnit(unit) { this.view.setUnit(unit); }


  /**
   * Set labels for the pie chart (for the tooltips)
   * @param {string} mainLabel Label of the first data in the dataset
   * @param {string} secondaryLabel Label of the second data in the dataset
   */
  setTooltipLabels(mainLabel, secondaryLabel) { this.view.setTooltipLabels(mainLabel, secondaryLabel); }


  /**
   * Update the pie chart with the new ratio
   * @param {number} ratio New ratio in range [0; 1]
   * @param {number} from Initial value displayed in the label
   * @param {number} to Final value displayed in the label
   */
  setRatio(ratio, from, to, digit) { this.view.setRatio(ratio, from, to, digit); }


  /**
   * Enable animation in the pie chart
   */
  enableAnimation() { this.view.enableAnimation(); }


  /**
   * Disable animation in the pie chart
   */
  disableAnimation() { this.view.disableAnimation(); }
}