import htmlSignInModal from "./templateSignInModal.html";
import * as bootstrap from "bootstrap";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";

export default class ViewSignIn {

  constructor() {
    // Append the modal to the DOM
    this.signInModalEl = str2dom.one(parseEjs(htmlSignInModal, translate));
    document.body.append(this.signInModalEl);
    this.signInModal = new bootstrap.Modal(this.signInModalEl);

    

    this.showLoginModal();
  }

  showLoginModal() {
    this.signInModal.show();
  }



}