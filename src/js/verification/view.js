import htmlModal from "./modal.html";
import * as bootstrap from "bootstrap";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";
import translate from "./translate.js";
import model from "./model.js";
import notifications from "Js/notifications";
import Timer from "Js/timer";

/**
 * View class for the verification module
 */
class View {

  /**
   * Constructor
   * - Prepare the timer
   * - Prepare the modal
   * - Get DOM elements
   */
  constructor() {

    // Delay before the user can ask for resending the verification email
    
    // Prepare the timer
    this.timer = new Timer();

    // Append the modal to the DOM
    this.modalEl = str2dom.one(parseEjs(htmlModal, translate));
    document.body.append(this.modalEl);
    this.modal = new bootstrap.Modal(this.modalEl);

    // Get the timer elements
    this.timerEl = this.modalEl.querySelector(".timer");
    this.timerHelperEl = this.modalEl.querySelector('.timer-helper');

    // Get the button element
    this.buttonEl = this.modalEl.querySelector(".resend-btn");
    this.buttonEl.addEventListener('click', () => { this.resendEmail(); });

    // If the user log in or out, reset the timer delay
    document.body.addEventListener('auth-sign-in', () => { this.resetRetryDelay() });
    document.body.addEventListener('auth-sign-out', () => { this.resetRetryDelay() });

    // Initialize the timer
    this.resetRetryDelay();
    this.timer.onUpdate((time) => this.updateTimer(time))
    this.timer.onTimerOver(() => this.timerOver());
  }


  /**
   * Reset the delay between two verification email
   */
  resetRetryDelay() {
    this.resendEmailTimeout = 30;
    this.timer.init(this.resendEmailTimeout, "down");
    this.timerOver();
  }

  

  /**
   * Resend a verification email to the user.
   */
  resendEmail() {
    // Disable the button to prevent the user sending too much email
    this.disableButton();

    // Send the verification email
    model.sendVerificationEmail()
    .then((email) => {
      // Success => notify the user
      notifications.success(translate.emailSentTitle, translate.emailSentMessage.replace("<%=email%>", email));      
    })

    // Enable the button after the delay
    this.timer.init(this.resendEmailTimeout, "down");
    this.timer.start();
    //setTimeout(() => { this.enableButton(); }, this.resendEmailTimeout);

    // Double the delay between resend
    this.resendEmailTimeout *= 2;
  }


  /**
   * Callcack function called when the timer must be updated
   * @param {object} time The detailled time
   */
  updateTimer(time) {
    this.timerEl.innerText = `${Math.round(time.raw/1000)}s`;
    this.timerHelperEl.classList.remove("d-none")
  }


  /**
   * Callback function called when the timer is over
   * - Hide the timer
   * - Enable the button
   */
  timerOver() {
    this.timerHelperEl.classList.add("d-none");
    this.enableButton();
  }


  /**
   * Disable the send again button
   */
  disableButton() {
    this.buttonEl.classList.add("disabled");
  }


  /**
   * Enable the send again button
   */
  enableButton() {
    this.buttonEl.classList.remove("disabled");
  }


  /**
   * Open the sign up form
   */
  showModal(email) {
    this.modalEl.querySelector(".email").innerText = email;
    this.modal.show();
  }


  /**
   * Close the sign up form
   */
  hideModal() {
    this.modal.hide();
  }
}

export default new View();