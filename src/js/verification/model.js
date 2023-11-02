import { app } from "Js/firebase/index.js";
import { getAuth, sendEmailVerification, reload } from "firebase/auth";
import auth from 'Js/auth';
import notifications from "Js/notifications";
import translate from "./translate";
import view from "./view";

class Model {
  /**
   * Constructor
   */
  constructor() {
    // Initialize Firebase Authentication and get a reference to the service
    this.auth = getAuth(app);

    // Polling setInterval for email verification
    this.polling = undefined;
  }


  /**
   * Send a verification email to the current user
   * @returns A promise resolved when the email is send
   */
  sendVerificationEmail() {
    return new Promise((resolve, reject) => {

      // Send the verification email
      sendEmailVerification(this.auth.currentUser)
        .then(() => {
          // Email sent successfully          
          resolve(this.auth.currentUser.email);
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/too-many-requests": notifications.error(translate.tooManyRequestsTitle, translate.tooManyRequestsMessage, 5000); break;
            default:
              // An unknow error occured while sending the email
              notifications.error(translate.error3001, translate.error3001Message.replace("<%=email%>", this.auth.currentuser.email));
          }
          reject(error);
        });
    });
  }



  /**
   * Refresh used authentification data and check if the email has been verified
   * Once the email is verified, close the message and push a notification
   */
  pollingForEmailVerified() {

    // If there is already a polling running, do not run a second one
    if (this.polling !== undefined) {return}

    // Start the timer for polling
    this.polling = setInterval(() => {
      
      // If the user is no longer logged, don't check for email verification  
      if (this.auth.currentUser === null) {
        this.stopPolling();
        return;
      }

      // Reload user data
      reload(this.auth.currentUser)
        .then(() => {

          // Check if the email is verified
          if (this.auth.currentUser.emailVerified) {
            // The email has been verified, notify the user and hide the modal
            notifications.success(translate.emailVerifiedTitle, translate.emailVerifiedMessage);
            view.hideModal();
            this.stopPolling();
          }
        })
        .catch((error) => {
          // If an error occured, notify the user and stop the polling
          notifications.error(translate.error3002, translate.error3002Message);
          this.stopPolling();
          reject(error)
        });

    }, 3000);
  }


  /**
   * Stop the polling for email verification
   */
  stopPolling() {
    clearInterval(this.polling);
    this.polling = undefined;
  }
}


export default new Model();