import htmlModal from "./modal.html";
import * as bootstrap from "bootstrap";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";
import model from "./model.js";


class View {

  constructor() {
    // Append the modal to the DOM
    this.modalEl = str2dom.one(parseEjs(htmlModal, translate));
    document.body.append(this.modalEl);
    this.modal = new bootstrap.Modal(this.modalEl);

    // Get form elements
    this.usernameEl = this.modalEl.querySelector('.username');
    this.usernameFeedbackEl = this.modalEl.querySelector('.username-feedback');
    this.emailEl = this.modalEl.querySelector('.email');
    this.passwordEl = this.modalEl.querySelector('.password');
    this.passwordFeedbackEl = this.modalEl.querySelector('.password-feedback');
    this.submitEl = this.modalEl.querySelector('.submit');

    // Attach the event when the user click the submit button
    this.submitEl.addEventListener('click', () => { this.submitNewUser(); })
    this.usernameEl.addEventListener('input', () => { this.checkUsername(); })
    this.passwordEl.addEventListener('input', () => { this.checkPassword(); })
    this.emailEl.addEventListener('input', () => { this.checkEmail(); })
  }


  /**
 * Register the user and disable the submit button
 * @param {string} email The user email
 * @param {string} password The user password
 */
  submitNewUser() {

    // If the form is not valid, do not process registration
    if (!this.isFormValid()) return;

    // Disable the button during registration
    this.addSpinnerSubmitButton();

    // Submit the new user
    model.submitNewUser(this.usernameEl.value, this.emailEl.value, this.passwordEl.value)
      .then(() => {
        // New user is created, hide the modal
        this.hideSignUpForm();
        this.enableSubmitButton();
      })
      .catch(() => {
        // Something wrong happened, remove the spinner 
        this.enableSubmitButton();
      })

  }



  /**
   * Check the username and update the feedback
   */
  checkUsername() {
    // Check username
    let usernameFeedback = model.checkUsername(this.usernameEl.value);
    this.usernameFeedbackEl.innerHTML = usernameFeedback;
    if (usernameFeedback === "") {
      this.usernameEl.classList.add("is-valid");
      this.usernameEl.classList.remove("is-invalid");
      if (this.isFormValid()) this.enableSubmitButton(); else this.disableSubmitButton();
    }
    else {
      this.usernameEl.classList.remove("is-valid");
      this.usernameEl.classList.add("is-invalid");
      this.disableSubmitButton();
    }
  }


  /**
   * Check the password and update the feedback
   */
  checkPassword() {
    // Check password
    let passwordFeedback = model.checkPassword(this.passwordEl.value);
    this.passwordFeedbackEl.innerHTML = passwordFeedback;
    if (passwordFeedback === "") {
      this.passwordEl.classList.add("is-valid");
      this.passwordEl.classList.remove("is-invalid");
      if (this.isFormValid()) this.enableSubmitButton(); else this.disableSubmitButton();
    }
    else {
      this.passwordEl.classList.remove("is-valid");
      this.passwordEl.classList.add("is-invalid");
      this.disableSubmitButton();
    }
  }


  /**
   * Check email and update feedback
   */
  checkEmail() {
    // Check email
    let emailValid = model.checkEmail(this.emailEl.value);
    if (emailValid) {
      this.emailEl.classList.add("is-valid");
      this.emailEl.classList.remove("is-invalid");
      if (this.isFormValid()) this.enableSubmitButton(); else this.disableSubmitButton();
    }
    else {
      this.emailEl.classList.remove("is-valid");
      this.emailEl.classList.add("is-invalid");
      this.disableSubmitButton();
    }

  }

  /**
   * Check if the form fields are all valid
   * @returns {boolean} True if the form is valid
   */
  isFormValid() {
    // Check password
    let passwordFeedback = model.checkPassword(this.passwordEl.value);
    let emailValid = model.checkEmail(this.emailEl.value);
    let usernameFeedback = model.checkUsername(this.usernameEl.value);
    return (passwordFeedback === "" && usernameFeedback === "" && emailValid);

  }






  /**
   * Disable the submit button and add a spinner
   */
  enableSubmitButton() {
    // Display the spinner in the button
    this.submitEl.innerHTML = translate.signUpSubmitBtn;
    this.submitEl.classList.remove("disabled");
  }


  /**
   * Disable the submit button
   */
  disableSubmitButton() {
    this.submitEl.classList.add("disabled");
  }

  /**
   * Add a spinner and disable the submit button
   */
  addSpinnerSubmitButton() {
    // Display the spinner in the button
    this.submitEl.innerHTML = `<div class="spinner-border spinner-border-sm" role="status"></div>`
    this.submitEl.classList.add("disabled");
  }


  /**
   * Open the sign up form
   */
  showSignUpForm() {
    this.modal.show();
  }

  /**
   * Close the sign up form
   */
  hideSignUpForm() {
    this.modal.hide();
  }


}


export default new View();