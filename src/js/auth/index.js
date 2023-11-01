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
}


export default new Auth();