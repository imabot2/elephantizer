import model from "./model.js";

class ratioToColor {
  constructor() { }


  /**
   * Convert the value to color
   * @param {float} value The ratio value between 0 and 1
   * @returns {object} An object containing the RGB components [r,g,b]
   */
  toRgb(value) { return model.toRgb(value); }


  /**
   * Convert the value to color
   * @param {float} value The ratio value between 0 and 1
   * @returns {object} An object containing the RGB components [r,g,b]
   */
  toCss(value) { return model.toCss(value); }

}


export default new ratioToColor();



