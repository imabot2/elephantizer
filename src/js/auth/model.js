import { app } from "Js/firebase/index.js";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import view from "./view.js";
import translate from "./translate.js";
import notifications from "Js/notifications";
import verification from "Js/verification";


/**
 * Model for the auth module
 */
class Model {

  /**
   * Constructor
   * - Get authentification handler
   * - Create the events (sing-in and sing-out)
   * - Add event listener on authentification status changed
   */
  constructor() {

    // Initialize Firebase Authentication and get a reference to the service
    this.auth = getAuth(app);

    // Prepare the global events
    this.signInEvent = new Event("auth-sign-in");
    this.signOutEvent = new Event("auth-sign-out");

    // At start up, the user is not logged in
    this.isLoggedIn = false;

    // Event listener on authentification changed
    onAuthStateChanged(this.auth, (user) => {
      if (user) this.onSignIn(user); else this.onSignOut();
    });
  }



  /**
    * Check if the user is logged with a verified email
    * @returns True if the user is logged with a verified email, false otherwise
    */
  isLoggedAndVerified() {

    // If the user is not logged, return false
    if (this.auth.currentUser === null) return false;

    // If the user email has not been verified, return false
    if (!this.auth.currentUser.emailVerified) return false;

    // The user is logged and email is verified, return true
    return true;
  }


  /**
   * Log the user out
   */
  signOut() {
    // Log out the user
    signOut(this.auth);
  }


  /**
   * Callback function called when the user is logged
   * @param {object} user The user data
   */
  onSignIn(user) {

    // If the user is not yet logged, display the notification
    if (!this.isLoggedIn) {

      // The user is now logged
      this.isLoggedIn = true;

      // The user is logged in, trigger the sign in event
      document.body.dispatchEvent(this.signInEvent);


      // The user is logged, but the email is not verified, trigger the event
      if (user.emailVerified) {
        // The user logged in with a verified email, notify the user
        notifications.success(translate.userLoggedTitle, translate.userLoggedMessage.replace('<%=email%>', user.email));
      }
      else {
        // If the email show the modal and pool for verification
        verification.showModal(user.email);
        verification.pollingForEmailVerified();
      }

    }

    // Update user picture or log out icon
    view.showUserLoggedButton(this.getUserName(), this.getUserEmail(), this.getUserPicture());
  }


  /**
   * 
   * @returns The user ID or undefined if the user is not logged
   */
  getUserId() {
    if (this.auth.currentUser === null) return undefined;
    return this.auth.currentUser.uid;
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