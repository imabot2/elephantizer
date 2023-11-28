import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "Js/firebase";


class Model {

  /**
   * Constructor
   */
  constructor() {
    this.analytics = getAnalytics(app);
  }



  /**
   * Log an event
   * @param {string} event The event to log
   */
  log (eventName, data) {
    logEvent(this.analytics, eventName, data);
  }
}


export default new Model();