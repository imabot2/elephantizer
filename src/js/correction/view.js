import "./correction.css";
import htmlCorrection from "./correction.html";
import str2dom from "doma";


class View {
  constructor() {

    // Prepare the button element
    this.containerEl = str2dom.one(htmlCorrection);
  }




  /**
   * Append the correction elements to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) {
    // Append the element to the parent
    parent.append(this.containerEl);
  }
}


export default new View();