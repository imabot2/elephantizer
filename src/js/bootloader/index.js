import view from "./view.js";


class Bootloader {
  constructor() {
  }


  /**
   * Hide the loader overlay
   * @param {integer} ms Fade out duration in milliseconds
   */
  hide(ms) { return view.hideLoader(ms); }


  /**
   * Return a promise resolved when the last message is resolved (success or error)
   * @returns A promise resolve when the last message is resolved
   */
  onLastMessageResolved() { return view.onLastMessageResolved(); }


  /**
   * Create and append a new message in the console
   * @param {string} message The message text
   * @returns {integer} The ID of the new message
   */
  log(message) { return view.createNewMessage(message); }


  /**
   * Clear the console (delete all the messages)
   */
  clearConsole() { view.clearConsole(); }


  /**
   * Mark a message as successfull
   * @param {integer} id ID of the message
   */
  setSuccess(id) { view.setSuccess(id); }


  /**
   * Mark a message as failed and display a message in the console
   * @param {integer} id ID of the message
   */
  setError(id) { view.setError(id); }
}



export default new Bootloader();