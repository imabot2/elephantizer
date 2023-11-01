import view from "./view.js";


class notifications {
  
  /**
   * Contructor, do nothing
   */
  constructor() {}


  /**
   * Display an error toast
   * @param {string} title Title of the toast
   * @param {string} message Message to display in the body of the toast
   * @param {integer} message Message delay in milliseconds
   */
  error(title, message, ms) { view.error(title, message, ms) }


  /**
   * Display a warning toast
   * @param {string} title Title of the toast
   * @param {string} message Message to display in the body of the toast
   * @param {integer} message Message delay in milliseconds 
   */
  warning(title, message, ms) { view.warning(title, message, ms) }


  /**
   * Display a success toast
   * @param {string} title Title of the toast
   * @param {string} message Message to display in the body of the toast
   * @param {integer} message Message delay in milliseconds
   */
  success(title, message, ms) { view.success(title, message, ms) }


  /**
   * Display an info toast
   * @param {string} title Title of the toast
   * @param {string} message Message to display in the body of the toast
   * @param {integer} message Message delay in milliseconds
   */
  info(title, message, ms) { view.info(title, message, ms) }


  /**
  * Display a message toast
  * @param {string} title Title of the toast
  * @param {string} message Message to display in the body of the toast
  * @param {integer} message Message delay in milliseconds
  */
  message(title, message, ms) { view.message(title, message, ms) }

}

export default new notifications();