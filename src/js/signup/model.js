import view from "./view.js";
import translate from "./translate.js"
import passwordValidator from "password-validator";
import validator from "email-validator";
import notifications from "Js/notifications";
import { app } from "Js/firebase/index.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import account from "Js/account";
import verification from "Js/verification"



/**
 * Model for the signup module
 */
class Model {
  /**
   * Constructor
   */
  constructor() {
    // Initialize Firebase Authentication and get a reference to the service
    this.auth = getAuth(app);
  }


  /**
    * Submit a new user based on email and password
    * @param {string} email email address of the new user
    * @param {*} password password of the new user
    * @returns A promise resolved if the user is created
    */
  submitNewUser(username, email, password) {

    // Return a promise on user creation
    return new Promise((resolve, reject) => {

      // Create the new user
      this.registerUserInFirebase(email, password)
        .then(() => {
          // Account is successfully created
          notifications.success(translate.accountCreatedTitle, translate.accountCreatedMessage);

          // Update username before sending the verification email
          account.updateUsername(username).finally(() => {
            // Send verification email
            verification.sendEmail().then(() => {
              verification.showModal(email);
            })
          })

          // Resolve the promise
          resolve();
        })
        .catch((error) => {
          reject(error);
        })
    })
  }


  /**
   * Register a new user in Firebase
   * @param {string} email The email address of the new user
   * @param {string} password The password of the new user
   * @return {promise} A promise resolved when the user is created
   */
  registerUserInFirebase(email, password) {
    return new Promise((resolve, reject) => {

      // Create the new user
      createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
          resolve(userCredential);
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/email-already-in-use": notifications.warning(translate.existingAccountTitle, translate.existingAccountMessage.replace("<%=email%>", email)); break;
            default: notifications.error(translate.error1001, translate.error1001Message);
          }
          reject(error);
        });

    })
  }


  /**
   * Check if a username is valid
   * @param {string} username The username to check
   * @returns an empty string if the username is valid, a message otherwise
   */
  checkUsername(username) {

    // Check the username length
    if (username.length < 4) return translate.usernameTooShort;
    if (username.length > 20) return translate.usernameTooLong;

    // Check if there is at least 4 letters in the username
    let atLeastThreeLetters = /(?:[A-Za-zÀ-ÖØ-öø-ÿ].*){4}/g.test(username);
    if (!atLeastThreeLetters) return translate.usernameNotEnoughLetters;

    // Check for disallowed characters
    let validChar = /(^([a-zA-Z0-9À-ÖØ-öø-ÿ]|[-._ &]){4,20}$)/i.test(username);
    if (!validChar) return translate.invalidCharacters;

    // The username is valid
    return "";

  }


  /**
   * Check is a password is valid and return a human readable string explaining the problem
   * @param {string} password The password to check
   * @returns {string} A human readable string that explain why the password is not valid or an empty string if the password is valid
   */
  checkPassword(password) {

    // Create a schema
    var schema = new passwordValidator();

    // Add properties to it
    schema
      .is().min(8, "A minimum of 8 characters is required")
      .is().max(100, "Maximum of 100 characters")
      .has().uppercase(1, "At least one uppercase character")
      .has().lowercase(1, "At least one lowercase character")
      .has().digits(1, "At least one digit")

    // Get a full list of rules which failed
    let validation = schema.validate(password, { details: true });
    if (validation.length == 0) return "";
    return validation[0].message;
  }


  /**
   * Check if an email address is valid
   * @param {string} email The email address to check
   * @returns True if the email is valid
   */
  checkEmail(email) {
    return validator.validate(email);
  }
}

export default new Model();