import htmlModal from "./modal.html";
import * as bootstrap from "bootstrap";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";
import model from "./model.js";


class View {

  constructor() {
    // Append the modal to the DOM
    this.signUpModalEl = str2dom.one(parseEjs(htmlModal, translate));
    document.body.append(this.signUpModalEl);
    this.signUpModal = new bootstrap.Modal(this.signUpModalEl);

    // Get form elements
    this.usernameEl = this.signUpModalEl.querySelector('.username');
    this.usernameFeedbackEl = this.signUpModalEl.querySelector('.username-feedback');
    this.emailEl = this.signUpModalEl.querySelector('.email');
    this.passwordEl = this.signUpModalEl.querySelector('.password');
    this.passwordFeedbackEl = this.signUpModalEl.querySelector('.password-feedback');
    this.submitEl = this.signUpModalEl.querySelector('.submit');

    // Attach the event when the user click the submit button
    this.submitEl.addEventListener('click', () => { this.submitNewUser(); })
    this.usernameEl.addEventListener('input', () => { this.checkUsername(); })
    this.passwordEl.addEventListener('input', () => { this.checkPassword(); })
    this.emailEl.addEventListener('input', () => { this.checkEmail(); })
    
    this.showSignUpForm();
  }

  /**
   * Check the username and update the feedback
   */
  checkUsername() {
    // Check username
    let usernameFeedback = model.checkUsername(this.usernameEl.value);
    this.usernameFeedbackEl.innerHTML = usernameFeedback;
    if (usernameFeedback !== "") {
      this.usernameEl.classList.remove("is-valid");
      this.usernameEl.classList.add("is-invalid");
    }
    else {
      this.usernameEl.classList.add("is-valid");
      this.usernameEl.classList.remove("is-invalid");
    }
  }


  /**
   * Check the password and update the feedback
   */
  checkPassword() {
    // Check password
    let passwordFeedback = model.checkPassword(this.passwordEl.value);
    this.passwordFeedbackEl.innerHTML = passwordFeedback;
    if (passwordFeedback !== "") {
      this.passwordEl.classList.remove("is-valid");
      this.passwordEl.classList.add("is-invalid");
    }
    else {
      this.passwordEl.classList.add("is-valid");
      this.passwordEl.classList.remove("is-invalid");
    }
  }

  /**
   * Check email and update feedback
   */
  checkEmail() {
    // Check email
    let emailValid = model.checkEmail(this.emailEl.value);
    if (!emailValid) {
      this.emailEl.classList.remove("is-valid");
      this.emailEl.classList.add("is-invalid");      
    } 
    else {
      this.emailEl.classList.add("is-valid");
      this.emailEl.classList.remove("is-invalid");
    }
  }


  /**
  * This callback function is called when a new user is submited
  * Check email and password and register new user
  */
  submitNewUser() {

    // Check password
    let passwordFeedback = model.checkPassword(this.passwordEl.value);
    this.passwordFeedbackEl.innerHTML = passwordFeedback;
    if (passwordFeedback !== "") {
      this.passwordEl.classList.remove("is-valid");
      this.passwordEl.classList.add("is-invalid");
    }
    // Check email
    let emailValid = model.checkEmail(this.emailEl.value);
    if (!emailValid) this.emailEl.classList.add("is-invalid");

    // Check username
    let usernameFeedback = model.checkUsername(this.usernameEl.value);
    this.usernameFeedbackEl.innerHTML = usernameFeedback;
    if (usernameFeedback !== "") {
      this.usernameEl.classList.remove("is-valid");
      this.usernameEl.classList.add("is-invalid");
    }

    // Email and password are valid, submit the new user
    if (passwordFeedback === "" && emailValid) this.register(this.emailEl.value, this.passwordEl.value);

  }


  /**
   * Register the user and disable the submit button
   * @param {string} email The user email
   * @param {string} password The user password
   */
  register(email, password) {
    // Disable the button during registration
    this.disableSubmitButton();

    // Submit the new user
    model.submitNewUser(email, password)
      .then(() => {
        // New user is created, hide the modal
        this.hideSignUpForm();
        this.enableSubmitButton();
      })
      .finally(() => {
        // Something wrong happened, remove the spinner 
        this.enableSubmitButton();
      })

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
   * Disable the submit button and add a spinner
   */
  disableSubmitButton() {
    // Display the spinner in the button
    this.submitEl.innerHTML = `<div class="spinner-border spinner-border-sm" role="status"></div>`
    this.submitEl.classList.add("disabled");
  }

  /**
   * Open the sign up form
   */
  showSignUpForm() {
    this.signUpModal.show();
  }

  /**
   * Close the sign up form
   */
  hideSignUpForm() {
    this.signUpModal.hide();
  }


}


export default new View();