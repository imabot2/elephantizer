import { app } from "Js/firebase/index.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import view from "./view.js";


class Auth {


  constructor() {
    // Initialize Firebase Authentication and get a reference to the service
    this.auth = getAuth(app);

    // Prepare the global events
    this.signInEvent = new Event("auth-sign-in");
    this.signOutEvent = new Event("auth-sign-out");
    this.emailNotVerifiedEvent = new Event("auth-email-not-verified");

    
    // Event listener on authentification changed
    onAuthStateChanged(this.auth, (user) => {
      if (user) this.onUserLoggedIn(user); else this.onUserLoggedOut();
    });
  }


  /**
   * Callback function called whent the user is logged
   * @param {object} user The user data
   */
  onUserLoggedIn(user) {
    // The user is logged in, trigger the sing in event
    document.body.dispatchEvent(this.signInEvent)


    // The user is logged, but the email is not verified, trigger the event
    if (!user.emailVerified) document.body.dispatchEvent(this.emailNotVerifiedEvent);
  }


  /**
   * Callback function called when the user log out
   */
  onUserLoggedOut() {
    // User log out, trigger the log out event
    document.body.dispatchEvent(this.signOutEvent);

    // Change the button in the view
    view.showLogInButton();
  }


  /**
   * Return a promise when the user status changed
   * @returns {promise} A promise with the user credentials
   */
  onUserStateChanged() {
    return new Promise((resolve) => {      
      onAuthStateChanged(this.auth, (user) => { resolve(user); });
    })
  }

}


export default new Auth();