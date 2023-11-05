import view from "./view.js";
import model from "./model.js";


class Auth {
  constructor() {
  }

  /**
   * Return a promise when the user status changed
   * @returns {promise} A promise with the user credentials
   */
  async waitForAuthCompleted() { return await model.onUserStateChanged(); }


  /**
   * Check if the user is logged with a verified email
   * @returns True if the user is logged with a verified email, false otherwise
   */
  isLogged() { return model.isLoggedAndVerified(); }


  /**
   * Get the current user ID
   * @returns The ID of the current user or undefined if the user is not logged
   */
  userId() { return model.getUserId(); }

}


export default new Auth();