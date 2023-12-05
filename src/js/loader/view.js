import "./loader.css";
import str2dom from "doma";
import { parseEjs } from "Js/languages";
import translate from "./translate.js";
import htmlLoader from "./loader.html";

class View {


  constructor() {

    // Append the button to the DOM    
    this.overlayEl = str2dom.one(parseEjs(htmlLoader, translate));
    document.body.append(this.overlayEl);
  }

  /**
   * Hide the overlay
   */
  hide() {
    this.overlayEl.classList.add('hide');
  }


  /**
   * Show the overlay and set focus on the overlay
   */
  show() {
    this.overlayEl.classList.remove('hide');
  }
}

export default new View();