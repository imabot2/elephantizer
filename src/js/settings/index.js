import model from "./model.js";
import view from "./view.js";



class Settings {
  /**
   * Constructor
   */
  constructor() {
    view.update();
  }

  /**
   * Load settings from Firestore and update the settings menu
   * @returns A promise resolved when the settings are up-to-date
   */
  async init() { return model.init(); }


  /**
   * Listen for settings changes from the Firestore DB
   */
  listenDB() { return model.listenDB(); }


  /**
   * Append the settings to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) { view.appendTo(parent); }


  /**
   * Collapse the settings menu
   */
  collapse() { view.collapse(); }

  /**
   * Show the settings menu (Expand the collapse menu)
   */
  expand() { view.expand(); }
}


export default new Settings();