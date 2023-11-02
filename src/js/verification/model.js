import { app } from "Js/firebase/index.js";
import { getAuth, sendEmailVerification } from "firebase/auth";
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
}


export default new Model();