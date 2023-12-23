import View from "./view.js";

export default class LineChart {


  constructor(parent, path) {
    this.view = new View(parent, path);
  }

  /**
   * Reset the chart to zeros
   */
  reset() { this.view.reset(); }


  /**
   * Update the chart with history data
   */
  update() { this.view.update(); }


  /**
   * Enable animation in the line chart
   */
  enableAnimation() { this.view.enableAnimation(); }


  /**
   * Disable animation in the line chart
   */
  disableAnimation() { this.view.disableAnimation(); }
}