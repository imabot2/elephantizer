import htmlModal from "./modal.html";
import * as bootstrap from "bootstrap";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";
import model from './model.js'
import validator from "email-validator";

class View {

  /**
   * Constructor
   * - Call the parent constructor
   * - Populate the signin modal
   */
  constructor() {
    // Append the modal to the DOM
    this.modalEl = str2dom.one(parseEjs(htmlModal, translate));
    document.body.append(this.modalEl);
    this.modal = new bootstrap.Modal(this.modalEl);

    // Get the Google button
    this.googleBtnEl = this.modalEl.querySelector('.google-btn');
    this.googleBtnEl.addEventListener('click', () => { this.onGoogleSignIn(); })

    // Get email and password element
    this.emailEl = this.modalEl.querySelector('.email');
    this.passwordEl = this.modalEl.querySelector('.password');
    this.emailEl.addEventListener('input', () => { this.unsetEmailValid(); })

    // Submit button
    this.submitButtonEl = this.modalEl.querySelector('.submit-btn');
    this.submitButtonEl.addEventListener('click', () => { this.onSubmit(); });

    // Forget password button
    this.forgotPasswordEl = this.modalEl.querySelector('.forget-password');
    this.forgotPasswordEl.addEventListener('click', (e) => { this.onForgotPassword(e); });
  }


  /**
   * The user clicked on the "Sign In With Google Button"
   */
  onGoogleSignIn() {
    // Disable the form during login
    this.disableForm();

    // Sign in with Google
    model.signInWithGoogle()
      .then(() => {
        // User successfully logged in, hide the modal
        this.hideModal()
      })
      .catch(() => {
        // An error occurred during login, enable the form
        this.enableForm();
      })

  }


  /**
   * Callback function called when the user sign in with email/password
   */
  onSubmit() {
    this.disableForm();
    model.signInWithEmailPassword(this.emailEl.value, this.passwordEl.value)
      .then(() => {
        // User successfully logged in, hide the modal
        this.hideModal()
      })
      .catch(() => {
        // An error occurred during login, enable the form
        this.enableForm();
      })
  }


  /**
   * Callback function called when the user click on the forgot password button
   */
  onForgotPassword(event) {
    event.preventDefault();


    // Check if the email is valid
    let emailValid = validator.validate(this.emailEl.value);
    if (!emailValid) {
      this.setEmailInvalid();
      return;
    }

    // The email is valid, send the reset link
    this.disableForm();
    model.sendPasswordResetEmail(this.emailEl.value)
      .finally(() => { 
        this.enableForm();
      })
  }

  /**
   * Mark the email input  as invalid
   */
  setEmailInvalid() {
    this.emailEl.classList.add("is-invalid");
  }


  /**
   * Unse the email input as invalid
   */
  unsetEmailValid() {
    this.emailEl.classList.remove("is-invalid");
  }


  /**
   * Disable the form inputs
   */
  disableForm() {
    this.emailEl.classList.add("disabled");
    this.passwordEl.classList.add("disabled");
    this.submitButtonEl.classList.add("disabled");
    this.googleBtnEl.classList.add("disabled");
  }

  /**
   * Enable the form inputs
   */
  enableForm() {
    this.emailEl.classList.remove("disabled");
    this.passwordEl.classList.remove("disabled");
    this.submitButtonEl.classList.remove("disabled");
    this.googleBtnEl.classList.remove("disabled");
  }

  /**
   * Open the sign in modal
   */
  showModal() {
    this.enableForm();
    this.modal.show();
  }

  /**
   * Open the sign in modal
   */
  hideModal() {
    this.modal.hide();
  }

}


export default new View();