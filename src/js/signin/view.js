import htmlModal from "./modal.html";
import * as bootstrap from "bootstrap";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";

export default class ViewSignIn {

  /**
   * Constructor
   * - Call the parent constructor
   * - Populate the signin modal
   */
  constructor() {


    // Append the modal to the DOM
    this.signInModalEl = str2dom.one(parseEjs(htmlModal, translate));
    document.body.append(this.signInModalEl);
    this.signInModal = new bootstrap.Modal(this.signInModalEl);
   

    
  }


  /**
   * Open the sign in form
   */
  showSignInForm() {
    this.signInModal.show();
  }

  /**
   * Open the sign in form
   */
  hideSignInForm() {
    this.signInModal.hide();
  }

}