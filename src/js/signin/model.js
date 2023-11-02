import { app } from "Js/firebase/index.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import view from "./view.js";
import translate from "./translate.js";
import notifications from "Js/notifications";

/**
 * Model class for the signin module
 */
class Model {


  /**
   * Constructor
   */
  constructor() {
    // Initialize Firebase Authentication and get a reference to the service
    this.auth = getAuth(app);
    // Get a reference to the Google Authentification service
    this.googleProvider = new GoogleAuthProvider();
  }


  /**
   * 
   * @param {*} email 
   * @param {*} password 
   * @returns 
   */
  signInWithEmailPassword(email, password) {

    return new Promise((resolve, reject) => {

      signInWithEmailAndPassword(this.auth, email, password)
        .then(() => { resolve(); })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email': notifications.error(translate.invalidEmailTitle, translate.invalidEmailMessage); break;
            case "auth/invalid-login-credentials": notifications.error(translate.wrongCredentialsTitle, translate.wrongCredentialsMessage); break;
            default:
              notifications.error(translate.error4000Title, translate.error4000Message);
              console.error(error)
          }
          reject(error);
        });
    })
  }


  /**
   * Sign in with Google account
   */
  signInWithGoogle() {

    return new Promise((resolve, reject) => {

      signInWithPopup(this.auth, this.googleProvider)
        .then(() => { resolve(); })
        .catch((error) => {
          switch (error.code) {
            case "auth/popup-closed-by-user": notifications.error(translate.googlePopupClosedTitle, translate.googlePopupClosedMessage); break;
            default:
              notifications.error(translate.error4001, translate.error4001Message);
              console.error(error);

          }
          reject(error)
        })
    });
  }


  /**
   * Send a reset password email
   * @param {string} email Email address of the user
   * @returns a promise
   */
  sendPasswordResetEmail(email) {
    return new Promise((resolve, reject) => {
      sendPasswordResetEmail(this.auth, email)
        .then(() => { 
          notifications.success(translate.resetPasswordEmailSentTitle, translate.resetPasswordEmailSentMessage.replace('<%=email%>', email), 3000);
          resolve(); 
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/too-many-requests": notifications.error(translate.tooManyRequestsTitle, translate.tooManyRequestsMessage);
            default:
              notifications.error(translate.error4002, translate.error4002Message)
              console.error(error)              
          }
          reject(error);
        });

    })
  }

}


export default new Model();