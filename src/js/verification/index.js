import model from "./model"
import view from "./view"

class Verification {
  constructor() {

  }

  /**
   * Show the email verification modal
   */
  showModal(email) { view.showModal(email); }


  /**
   * Send a verification email to the current user
   * @returns A promise resolved when the email is send
   */
  sendEmail() { return model.sendVerificationEmail(); }
}


export default new Verification();