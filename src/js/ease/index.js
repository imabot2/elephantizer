
import model from "./model.js";

class Ease {
  constructor()  {}

  /**
   * Increase a number from from to to during one second with the easeOutQuad function
   * @param {element} element The element to update
   * @param {float} from Initial value
   * @param {float} to Final value
   * @param {integer} digits Number of digits after the comma
   * @param {boolean} sign When true the sign is always displayed
   */

  outQuartProgress(element, from, to, digits, sign) { return model.outQuartProgress(element, from, to, digits, sign); }
}


export default new Ease();

