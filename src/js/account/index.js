import model from "./model";


class Account {
  constructor() {

  }


  /**
   * Update the username of the current user
   * @param {string} username The new username
   * @returns a promise resolved when the username is updated
   */
  updateUsername(username) { return model.updateUsername(username); }
}

export default new Account();