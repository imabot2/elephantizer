import "./pieChart.css";
import htmlPieChart from "./pieChart.html";
import * as bootstrap from "bootstrap";
import str2dom from "doma";
import Chart from 'chart.js/auto';
import ease from "Js/ease";

export default class View {

  /**
   * Create the pie chart element
   * @param {object} unit The parent element in the DOM
   */
  constructor(parent, unit) {
    // Create and initialize the pie chart
    this.containerEl = str2dom.one(htmlPieChart);

    // Append the pie chart to its parent
    this.appendTo(parent);

    // Get the canvas element
    this.canvasEl = this.containerEl.querySelector('canvas');

    // Get the label element for updating
    this.valueText = this.containerEl.querySelector('span');

    // No animation at start up
    this.animation = false;

    // Current ratio of the pie chart
    this.ratio = 0;


    this.chart = new Chart(this.canvasEl, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [this.ratio, 1 - this.ratio],
          backgroundColor: ['red', 'lightgrey'],
          hoverBackgroundColor: ['red', 'lightgrey'],
          borderWidth: 0,
          spacing: 0,
          hoverOffset: 10,
          hoverBorderRadius: 10,
        }],
      },

      options: {
        cutout: '70%',
        layout: { padding: 10 },
        animation: { duration: 0, animateRotate: true, animateScale: false },
        plugins: {
          legend: { display: true },
          tooltip: {
            displayColors: false,
            callbacks: {
              title: (t) => { return this.tooltipTitleCallback(t) },
              label: (t) => { return this.tooltipLabelCallback(t) }
            }
          },
        },
      }
    });

    setTimeout(() => {
      this.enableAnimation();
      this.setTooltipLabels('first', 'second')
      this.setRatio(0.75);
    }, 500)

  }


  /**
   * Set the pie chart unit
   * @param {string} unit The unit of the pie chart label
   */
  setUnit(unit) {
    // Set the unit in the pie chart label
    this.containerEl.querySelector('.unit').textContent = unit;
  }

  /**
   * Update the pie chart with the new ratio
   * @param {float} ratio Ratio to display in the pie chart
   */
  setRatio(ratio, from, to) {

    let previousRatio = this.ratio;
    this.ratio = ratio;
    this.chart.data.datasets[0].data = [this.ratio, 1 - this.ratio];
    this.chart.update();
    this.updateValue(from ?? 100 * previousRatio, to ?? 100 * this.ratio);
  }

  /**
   * Append the pie chart to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) {
    parent.append(this.containerEl);
  }


  /**
   * Set labels for the pie chart (for the tooltips)
   * @param {string} mainLabel Label of the first data in the dataset
   * @param {*} secondaryLabel Label of the second data in the dataset
   */
  setTooltipLabels(mainLabel, secondaryLabel) {
    this.labels = [mainLabel, secondaryLabel];
  }


  /**
   * Update the label with the easeOutQuad function
   * @param {float} from Initial value of the ratio
   * @param {float} to Final value of the ratio
   */
  updateValue(from, to) {
    // If there is an animation, increase percentage in the label
    if (!this.animation) {
      this.valueText.innerText = Math.round(100 * this.ratio);
      return;
    }
    ease.outQuadProgress(this.valueText, from, to);
  }


  /**
   * Callback function called before the tooltip is displayed
   * Must return the title of the tooltip
   * @param {object} tooltipItems The tooltip item provided by Chart.js
   * @returns The title of the tooltip
   */
  tooltipTitleCallback(tooltipItems) {

    return `${this.labels[tooltipItems[0].dataIndex]}`
  }


  /**
   * Callback function called before the tooltip is displayed
   * Must return the label of the tooltip
   * @param {object} tooltipItems The tooltip item provided by Chart.js
   * @returns The label of the tooltip
   */
  tooltipLabelCallback(tooltipItems) {
    if (tooltipItems.dataIndex == 0)
      return `${(this.ratio * 100).toFixed(2)}%`;
    else
      return `${((1 - this.ratio) * 100).toFixed(2)}%`;
  }


  /**
   * Enable animation in the pie chart
   */
  enableAnimation() {
    this.animation = true;
    this.chart.options.animation.duration = 1000;
    this.chart.update();
  }


  /**
   * Disable animation in the pie chart
   */
  disableAnimation() {
    this.animation = false;
    this.chart.options.animation.duration = 0;
    this.chart.update();
  }


}