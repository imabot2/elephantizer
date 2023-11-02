import "./menu.css";
import * as bootstrap from "bootstrap";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";
import htmlModal from "./modal.html";
import htmlBurger from "./burger.html";


class View {

  /**
   * Constructor
   * - Create the menu modal
   */
  constructor() {

    // Append the button to the DOM
    this.burgerEl = str2dom.one(parseEjs(htmlBurger, translate));
    document.body.append(this.burgerEl);

    // Append the modal to the DOM
    this.modalEl = str2dom.one(parseEjs(htmlModal, translate));
    document.body.append(this.modalEl);
    this.modal = new bootstrap.Modal(this.modalEl);

    this.parent = this.modalEl.querySelector(".content");

    // Prepare the collapsable menus
    this.mainMenuEl = this.modalEl.querySelector(".main-menu");
    console.log(this.mainMenuEl)
    this.collapse = new bootstrap.Collapse(this.mainMenuEl, { toggle: false, parent: parent });

    setInterval(() => {
      this.collapse.toggle();
    }, 2000)


    this.showModal();
  }





  /**
   * Show the modal
   */
  showModal() {
    this.modal.show();
  }

}

export default new View();