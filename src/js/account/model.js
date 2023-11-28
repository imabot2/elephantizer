import { app } from "Js/firebase";
import { getAuth, updateProfile } from "firebase/auth";
import notifications from "Js/notifications";
import translate from "./translate";

class Model {

  /**
   * Constructor
   */
  constructor() {
    // Initialize Firebase Authentication and get a reference to the service
    this.auth = getAuth(app);
  }



  /**
   * Update the username for the current account (user must be logged)
   * @param {string} newName The new username 
   */
  updateUsername(newName) {
    return new Promise((resolve, reject) => {
      updateProfile(this.auth.currentUser, { displayName: newName })
        .then(() => {
          resolve();
        })
        .catch((error) => {
          notifications.error(translate.error2000, translate.error2000Message)
          reject(error);
        })
    })
  }
}

export default new Model();