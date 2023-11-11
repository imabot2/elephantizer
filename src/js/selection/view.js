import * as bootstrap from "bootstrap";
import model from "./model.js";
import htmlContainer from "./container.html";
import translate from "./translate.js";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";

class View {
  constructor() {
    // Append the settings to the menu
    this.containerEl = str2dom.one(parseEjs(htmlContainer, translate));

  }

  update() {
    console.log(model.selection);
  }

  /**
 * Append the settings to the provided parent
 * @param {object} parent Parent element
 */
  appendTo(parent) {
    // Append the element to the parent
    parent.append(this.containerEl);

    // Prepare the collapse
    this.containerCollapse = new bootstrap.Collapse(this.containerEl, { toggle: false });
  }

  /**
   * Collapse the selection after a given delay
   * @param {integer} delay Delay before collapsing in milliseconds
   */
  collapse(delay = 0) {
    console.log(delay)
    setTimeout(() => {
      this.containerCollapse.hide();
    }, delay);
  }

  /**
   * Expand the selection after a given delay
   * @param {integer} delay Delay before expanding in milliseconds
   */
  expand(delay = 0) {

    this.update();
    setTimeout(() => {
      this.containerCollapse.show();
    }, delay)
  }

}

export default new View();