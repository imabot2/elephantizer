import { app } from "Js/firebase/index.js";
import { getAuth, signInWithEmailAndPassword, signInWithGoogle } from "firebase/auth";
import view from "./view.js";
import translate from "./translate.js";
import notifications from "Js/notifications";


class Model {


  /**
   * Constructor
   */
  constructor() {
    // Initialize Firebase Authentication and get a reference to the service
    this.auth = getAuth(app);
  }


  signInWithEmailPassword(email, password) {

    return new Promise((resolve, reject) => {

      signInWithEmailAndPassword(this.auth, email, password)
        .then(() => { resolve(); })
        .catch((error) => {          
          switch (error.code) {
            case 'auth/invalid-email': notifications.error(translate.invalidEmailTitle, translate.invalidEmailMessage); break;
            case "auth/invalid-login-credentials": notifications.error(translate.wrongCredentialsTitle, translate.wrongCredentialsMessage); break;
            default:
              notifications.error(translate.error4001Title, translate.error4001Message);
              console.error (error)
          }
          reject(error);
        });
    })
  }


  /**
   * Sign in with Google account
   */
  signInWithGoogle() {

    model.signInWithGoogle()
      .catch((errorMsg) => {
        console.log(errorMsg);
      })
      .finally(() => {
        view.enableLoginForm();
        view.enableLoginButton();
      });
  }
}


export default new Model();