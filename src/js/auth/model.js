import { app } from "Js/firebase/index.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import view from "./view.js";
import notifications from "Js/notifications"


class Model {


  constructor() {

    // Initialize Firebase Authentication and get a reference to the service
    this.auth = getAuth(app);

    // Prepare the global events
    this.signInEvent = new Event("auth-sign-in");
    this.signOutEvent = new Event("auth-sign-out");
    this.emailNotVerifiedEvent = new Event("auth-email-not-verified");

    // At start up, the user is not logged in
    this.isLoggedIn = false;

    // Event listener on authentification changed
    onAuthStateChanged(this.auth, (user) => {
      if (user) this.onSignIn(user); else this.onSignOut();
    });
  }


  /**
   * Callback function called when the user is logged
   * @param {object} user The user data
   */
  onSignIn(user) {

    // If the user is not yet logged, display the notification
    if (!this.isLoggedIn) {

      // The user is logged in, trigger the sign in event
      document.body.dispatchEvent(this.signInEvent)

      // The user is logged, but the email is not verified, trigger the event
      if (!user.emailVerified) document.body.dispatchEvent(this.emailNotVerifiedEvent);
    }


    // The user is now logged
    this.isLoggedIn = true;

    // Hide the login form
    //view.hideSignInForm();

    // Update user picture or log out icon
    view.showUserLoggedButton(this.getUserName(), this.getUserEmail(), this.getUserPicture());
  }


  /**
   * Return the current user email used for authentification
   * @returns The user email or undefined if the user is not logged in
   */
  getUserEmail() {
    if (this.auth.currentUser === null) return undefined;
    return this.auth.currentUser.email;
  }

  /**
   * Return the current user name
   * @returns The user name or email if displayName is not defined
   */
  getUserName() {
    if (this.auth.currentUser === null) return undefined;
    if (this.auth.currentUser.displayName) return this.auth.currentUser.displayName;
    return this.auth.currentUser.email;
  }


  /**
   * Get the user picture 
   * @returns the URL of the user picture, or undefined if the user has no picture
   */
  getUserPicture() {
    if (this.auth.currentUser === null) return undefined;
    return this.auth.currentUser.photoURL;
  }


  /**
   * Callback function called when the user log out
   */
  onSignOut() {

    // If the user is really logged out, display a notification
    if (this.isLoggedIn) notifications.info("Logged out", "You've been logged out");

    // Change user status
    this.isLoggedIn = false;

    // Reset the delay between verification email
    this.resendEmailTimeout = 30;

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


export default new Model();