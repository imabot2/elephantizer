import view from "./view.js"
import model from "./model.js"


class Settings {
  /**
   * Constructor
   */
  constructor() { }

  /**
   * Get the current settings
   * @returns The current settings
   */
  current() { return model.current; }


  /**
   * Save the current settings in the database
   */
  save() { return model.save(); }


  /**
   * Append the settings to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) { view.appendTo(parent); }


  /**
   * Show the settings menu (Expand the collapse menu)
   */
  expand() { view.expand(); }
}


export default new Settings();