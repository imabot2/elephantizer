
/**
 * Model data for the settings module
 */
export default class ModelData {

  /**
   * Constructor
   * - Create the default settings object
   * - Deep copy the default settings to the current settings
   */
  constructor() {

    // Default settings
    this.default = {

      // Current language
      language: 'en',

      // Learning mode [ 'typing' | 'cards' ]
      learningMode: 'typing',

      // Timer mode [ 'series' | 'up' | 'down' ]
      timerMode: "down",
      // Timer duration [s]
      duration: 60,
    }

    // At startup, set the current settings as the default settings
    this.current = structuredClone(this.default);
  }


  /**
   * Update a single parameter of the settings
   * @param {string} key The field to update
   * @param {string} value The new value of the field key
   * @param {boolean} options.updateView Update the view after updating the settings when true
   * @param {boolean} options.save Save the settings on Firestore when true
   * @returns {boolean} True if the parameter exists and has been updated, false otherwise
   */
  updateField(key, value) {

    // Check if the key exists
    if (!key in this.default) return false;

    // Check if the value changed
    if (this.current[key] == value) return false;

    // Update the value and save the new settings
    this.current[key] = value;
    return true;
  }
}

