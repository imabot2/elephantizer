import "./lineChart.css";
import htmlLineChart from "./lineChart.html";
import str2dom from "doma";
import Chart from 'chart.js/auto';
var mobile = require('is-mobile');
import settings from "Js/settings";
import history from "Js/history";
import auth from "Js/auth";

export default class View {

  /**
   * Constructor for the line chart
   * @param {object} parent Parent element
   */
  constructor(parent, path) {


    // Create and initialize the pie chart
    this.containerEl = str2dom.one(htmlLineChart);

    // Append the pie chart to its parent
    parent.append(this.containerEl);

    // Store the chart label
    this.path = path;

    // Get the canvas element
    this.canvasEl = this.containerEl.querySelector('canvas');

    // No animation at start up
    this.animation = false;

    // True when data are updated
    this.dataUpdated = false;

    // Create the chart
    this.chart = new Chart(this.canvasEl, this.options());

    // When history data changes, update the local data
    document.body.addEventListener('history-updated-from-server', () => { this.updateData(); });
  }


  /**
   * Reset the chart to zeros
   */
  reset() {

    // If the user is not logged, show the sign in message, otherwise show the chart
    if (!auth.isLogged()) { this.hideChart(); return; }
    this.showChart()

    // Fill the chart with zeros
    const zeros = new Array(this.data.index.length).fill(0);
    this.chart.data.labels = this.data.index;
    this.chart.data.datasets[0].data = zeros;
    this.chart.data.datasets[1].data = zeros;
    this.chart.data.datasets[2].data = zeros;
    this.chart.data.datasets[3].data = zeros;
    this.chart.update();
  }

  /**
   * Update the chart with history data
   */
  update() {

    // If the user is not logged, show the sign in message, otherwise show the chart
    if (!auth.isLogged()) { this.hideChart(); return; }
    this.showChart()

    // Deep copy the data to prevent chart being updated during animation
    const data = structuredClone(this.data);

    // Set data    
    this.chart.data.labels = data.index;
    this.chart.data.datasets[0].data = data.memorizationRatio;
    this.chart.data.datasets[1].data = data.timeToFirstKeyRatio;
    this.chart.data.datasets[2].data = data.maxDistanceRatio;
    this.chart.data.datasets[3].data = data.wpm;

    // Update chart
    this.chart.update();
    this.dataUpdated = false;
  }

  /**
   * Callback function called when the history data has changed
   */
  updateData() {
    // Store the update data
    this.data = history.get(this.path);

    // Data are updated
    this.dataUpdated = true;
  }


  /**
   * Prepare set of data for chart.js
   * @returns The fake data for chart.js
   */
  rawData() {
    const labels = ['1', '2', '3', '4', '5', '6', '7'];
    return {
      labels: labels,
      datasets: [
        {
          label: 'Memorization',
          data: ['0.1', '0.3', '0.2', '0.5', '0.6', '0.4', '0.7'],
          tension: 0.2,
          borderColor: "#e83c4b",
          backgroundColor: "#e83c4b",
          pointStyle: 'circle',
          pointRadius: 2,
          pointHoverRadius: 5,
          yAxisID: 'y',
          fill: {
            target: 'origin',
            above: '#e83c4b30',   // Area will be red above the origin
          },
        },
        {
          label: 'Search Time',
          data: ['0.3', '0.2', '0.7', '0.4', '0.1', '0.9', '0.3'],
          tension: 0.2,
          borderColor: "#4865d6",
          backgroundColor: "#4865d680",
          yAxisID: 'y',
          //borderWidth: 1.5,
          showLine: false,
          pointRadius: 2,
          pointHoverRadius: 5,
        },
        {
          label: 'Accuracy',
          data: ['0.3', '0.2', '0.7', '0.4', '0.1', '0.9', '0.3'],
          tension: 0.2,
          borderColor: "#F08700",
          backgroundColor: "#F0870080",
          yAxisID: 'y',
          //borderWidth: 1.5,
          showLine: false,
          pointRadius: 2,
          pointHoverRadius: 5,
        },
        {
          label: 'wpm',
          data: ['10', '16', '20', '70', '50', '60', '70'],
          tension: 0.2,
          borderColor: "#331832",
          backgroundColor: "#331832",
          yAxisID: 'y1',
        }
      ]
    };
  }


  /**
   * Prepare options for chart.js
   * @returns Options for chart.js
   */
  options() {
    return {
      type: 'line',
      data: this.rawData(),
      options: {
        animation: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            displayColors: true,
            callbacks: {
              //title: (t) => { return this.tooltipTitleCallback(t) },
              labelColor: (t) => {
                return {
                  borderColor: 'white', //t.dataset.borderColor,
                  backgroundColor: t.dataset.borderColor,
                  borderWidth: 1,
                  borderRadius: 2,
                }
              },
              label: (t) => { return ` ${t.dataset.label}: ${t.raw.toFixed(1)}${(t.dataset.label === 'wpm') ? '' : '%'}`; }
            }
          },
        },
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          x: { display: false },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            min: 0,
            max: 100,
            title: {
              display: !mobile(),
              text: 'Memorization',
            },
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            min: 0,
            title: {
              display: !mobile(),
              text: 'Words Per Minute',
            },

            // grid line settings
            grid: { drawOnChartArea: false },
          },
        }
      },
    }
  }


  /**
   * Enable animation in the line chart
   */
  enableAnimation() {

    // If the animation time is zero, do not enable animations
    if (settings.get('resultsAnimationDuration') === 0) { this.disableAnimation(); return; }

    // Enable animations
    this.animation = true;
    this.chart.options.animation = {
      duration: settings.get('resultsAnimationDuration'),
      easing: 'easeOutQuart',
      onComplete: (animation) => {
        // If data has been updated in the mean time, update the chart
        if (this.dataUpdated) this.update();
      }
    };


    this.chart.update();
  }


  /**
   * Disable animation in the line chart
   */
  disableAnimation() {
    this.animation = false;
    this.chart.options.animation = false;
    //this.chart.options.animation.duration = 0;
    this.chart.update();
  }


  /**
   * Hide the chart and display the login message
   */
  hideChart() {
    this.containerEl.querySelector('.message-sign-in').classList.remove('d-none');
    this.containerEl.querySelector('.chart-container').classList.add('d-none');
  }


  /**
   * Hide the login message and show the chart
   */
  showChart() {
    this.containerEl.querySelector('.message-sign-in').classList.add('d-none');
    this.containerEl.querySelector('.chart-container').classList.remove('d-none');
  }



}