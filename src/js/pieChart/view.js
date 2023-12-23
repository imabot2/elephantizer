import "./pieChart.css";
import htmlPieChart from "./pieChart.html";
import str2dom from "doma";
import Chart from 'chart.js/auto';
import ease from "Js/ease";
import settings from "Js/settings";



export default class View {

  /**
   * Create the pie chart element
   * @param {object} unit The parent element in the DOM
   */
  constructor(parent) {
    // Create and initialize the pie chart
    this.containerEl = str2dom.one(htmlPieChart);

    // Append the pie chart to its parent
    parent.append(this.containerEl);

    // Get the canvas element
    this.canvasEl = this.containerEl.querySelector('canvas');

    // Get the label element for updating
    this.valueText = this.containerEl.querySelector('span');

    // No animation at start up
    this.animation = false;

    // Current ratio of the pie chart
    this.ratio = 0;

    // No tooltip at startup
    this.labels = ['', ''];


    // Create the chart
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
        animation: { duration: 0, animateRotate: true, animateScale: false, easing: 'easeOutQuart' },
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
   * @param {number} ratio New ratio in range [0; 1]
   * @param {number} from Initial value displayed in the label
   * @param {number} to Final value displayed in the label
   */
  setRatio(ratio, from, to, digit = 0) {

    let previousRatio = this.ratio;
    this.ratio = ratio;
    this.chart.data.datasets[0].data = [this.ratio, 1 - this.ratio];
    this.chart.update();
    this.updateValue(from ?? 100 * previousRatio, to ?? 100 * this.ratio, digit);
  }

  
  /**
   * // Set the colors of the pie chart
   * @param {string} mainColor Color of the first data in the dataset
   * @param {string} secondaryColor Color of the second data in the dataset
   */
  setColors(mainColor, secondaryColor) {
    this.chart.data.datasets[0].backgroundColor = [mainColor, secondaryColor];
    this.chart.data.datasets[0].hoverBackgroundColor = [mainColor, secondaryColor];
    this.chart.update();
  }

  /**
   * Set labels for the pie chart (for the tooltips)
   * @param {string} mainLabel Label of the first data in the dataset
   * @param {string} secondaryLabel Label of the second data in the dataset
   */
  setTooltipLabels(mainLabel, secondaryLabel) {
    this.labels = [mainLabel, secondaryLabel];
  }


  /**
   * Update the label with the easeOutQuad function
   * @param {float} from Initial value of the ratio
   * @param {float} to Final value of the ratio
   */
  updateValue(from, to, digit) {
    // If there is an animation, increase percentage in the label
    if (!this.animation) {
      this.valueText.innerText = (100 * this.ratio).toFixed(digit);
      return;
    }
    ease.outQuartProgress(this.valueText, from, to, digit);
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

    // If the animation time is zero, do not enable animations
    if (settings.get('resultsAnimationDuration') === 0) { this.disableAnimation(); return; }

    // Enable animations
    this.animation = true;
    this.chart.options.animation.duration = settings.get('resultsAnimationDuration');
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