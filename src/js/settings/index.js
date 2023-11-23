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
   * Return the requested settings parameter
   * If name is define, returns the parameter name
   * Otherwise, return all the settingd
   * @param {string} key The setting name
   * @returns The settings parameter if name is defined, an object with all the parameters otherwise
   */
  get(name) { return model.get(name); }



  /**
   * Load settings from Firestore and update the settings menu
   * @returns A promise resolved when the settings are up-to-date
   */
  async init() { return model.init(); }


  /**
   * Save the current settings in the database
   * @returns A promise resolved when the settings are saved
   */
  save() { return model.save(); }


  /**
   * Start listening for update from the Firestore server
   * @returns A promise resolved when the first update is received from the server
   */
  async startListeningDB() { return model.startListeningDB(); }


  /**
   * Stop listening from the settings update from DB
   */
  stopListeningDB() { model.stopListeningDB(); }


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