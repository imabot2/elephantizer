import model from "./model.js";

class Analytics {

  constructor() { }

  /**
   * Log an event
   * @param {string} event The event to log
   */
  log(eventName, data) { model.log(eventName, data); }
}


export default new Analytics();