import * as bootstrap from "bootstrap";
import "./button.css";
import htmlButton from "./button.html";
import str2dom from "doma";

class View {
  constructor() {
    // Prepare the button element
    this.buttonEl = str2dom.one(htmlButton);

    // Initialize button tooltip
    new bootstrap.Tooltip(this.buttonEl);
  }


  /**
   * Append the answer bar to the provided parent
   * @param {object} parent Parent element
   */
  appendButtonTo(parent) {
    // Append the element to the parent
    parent.append(this.buttonEl);
  }

}


export default new View();