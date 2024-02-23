/**
 * Model for the ration to color module
 */
class Model {

  /**
   * Convert the value to color
   * @param {float} value The ratio value between 0 and 1
   * @returns {object} An object containing the RGB components [r,g,b]
   */
  toRgb(value) {

    // Colors and values
    const colorStops = [
      { value: 0, color: { r: 232, g: 60, b: 75 } },      // Red
      { value: 1 / 3, color: { r: 240, g: 135, b: 0 } },  // Orange
      { value: 2 / 3, color: { r: 187, g: 219, b: 6 } },  // Yellow
      { value: 1, color: { r: 12, g: 202, b: 74 } }       // Green
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

  /**
   * Convert the value to  CSS color
   * @param {float} value The ratio value between 0 and 1
   * @returns {string} A string with the rgb hexa color (#d6b103)   
   */
  toCss(value) {
    const {r, g, b} = this.toRgb(value);
    return `#${r.toString(16).padStart(2,0)}${g.toString(16).padStart(2,0)}${b.toString(16).padStart(2,0)}`;
  }
}

export default new Model();