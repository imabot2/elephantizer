import ModelData from "./modelData.js";
import view from './view.js';
import auth from "Js/auth";
import notifications from "Js/notifications";
import selection from "Js/selection";
import { db } from "Js/firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";



/**
 * Model for the settings module
 * Extends the class model data that contains the settings data
 */
class Model extends ModelData {

  /**
   * Constructor
   * - Call the parent constructor
   * - Create the event when settings are updated from server
   */
  constructor() {

    // Call parent constructor,
    // Create default and current data
    super();

    // Prepare the global events for the Firestore listener
    this.settingsUpdatedFromServer = new Event("settings-updated-from-server");
  }


  /**
   * Load settings from Firestore and update the settings menu
   * Initialization must be done outside the constructor, 
   * otherwise there is conflict between the view constructor and the model constructor
   * @returns A promise resolved when the settings are up-to-date
   */
  init() {

    // Set the default parameters to the view
    view.update();

    // If the user not logged, return a resolved promise
    if (!auth.isLogged()) return Promise.resolve();

    // Start listening for update from Firestore
    return this.startListeningDB();
  }



  /**
   * Update a single parameter of the settings
   * @param {string} key The field to update
   * @param {string} value The new value of the field key
   * @param {boolean} options.updateView Update the view after updating the settings when true
   * @param {boolean} options.save Save the settings on Firestore when true
   */
  updateField(key, value, { updateView = false, save = false }) {

    // Update the field
    if (super.updateField(key, value)) {

      // If the field is updated, update the view and save the settings is requested
      if (updateView) view.update();
      if (save) this.save();
    }
  }


  /**
   * Update the current settings with the newSettings object
   * The function perform a smart merge:
   * - fields not present in newSettings are preserved
   * - fields not present in newSettings and not present in the current settings are set to the default value
   * - perform a deep copy 
   * @param {object} newSettings The new settings to update
   * @param {boolean} options.updateView Update the view after updating the settings when true
   * @param {boolean} options.save Save the settings on Firestore when true
   */
  async update(newSettings = {}, { updateView = false, save = false }) {

    // Update the selection
    await selection.set(newSettings.selection ?? []);

    // Merge only the fields existing in the default settings
    Object.keys(this.default).forEach((key) => {
      this.current[key] = newSettings[key] ?? this.current[key] ?? this.default[key];
    })
    if (updateView) view.update();
    if (save) this.save();
  }


  /**
   * Save the current settings in the database
   * @returns A promise resolved when the settings are saved
   */
  save() {
    // Return a promise
    return new Promise((resolve, reject) => {

      // If the user is not logged in, do not save
      if (!auth.isLogged()) { resolve(); return; }

      // Create the document reference for the current settings
      const docRefSettings = doc(db, "users", `${auth.userId()}`, "settings", "current");

      // Add the current selection to the settings
      let settingsToSave = this.current;
      settingsToSave.selection = selection.current();

      // Overwrite the backend settings with the current settings
      setDoc(docRefSettings, settingsToSave)
        .then(() => {
          // Success, update the last saved selection and resolve the promise
          selection.setLastSavedSelection(selection.current());
          resolve();
        })
        .catch((error) => {
          // An error occured, notify the user and reject the promise
          notifications(translate.error5000, translate.error5000Message);
          console.error(error);
          reject(error);
        })


    })
  }


  /**
   * Start listening for update from the Firestore server
   * @returns A promise resolved when the first update is received from the server
   */
  startListeningDB() {

    // If the user is not logged in, do not start the listener
    if (!auth.isLogged()) return Promise.resolve();

    // If there is already a listener, running, don't start another one
    if (this.unsubscribe != undefined) return Promise.resolve();

    return new Promise((resolve) => {
      this.listenDB();
      document.body.addEventListener('settings-updated-from-server', () => {
        resolve();
      }, { once: true })
    })
  }


  /**
   * Stop listening from the settings update from DB
   */
  stopListeningDB() {
    if (this.unsubscribe !== undefined) {
      this.unsubscribe();
      this.unsubscribe = undefined;      
      
      // When stop listening DB, reset the current settings as the default settings
      this.current = structuredClone(this.default);
    }


  }


  /**
   * Listen for Firestore DB settings changes
   * On change or update of the current settings
   */
  listenDB() {

    // Create the document reference
    const docRefSettings = doc(db, "users", `${auth.userId()}`, "settings", "current");

    // Set the listener on the reference document
    this.unsubscribe = onSnapshot(docRefSettings, async (doc) => {

      // Update only if remote changes
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      if (source == "Server") {

        // If the document does not exist (first connextion ?), create an empty settings
        const settings = (doc.exists()) ? doc.data() : {};

        // Update the current settings and the settings menu
        await this.update(settings, { updateView: true });

        // Keep track of the selection stored in the database
        selection.setLastSavedSelection(selection.current());

        // Everytime settings are updated from DB, trigger the event
        document.body.dispatchEvent(this.settingsUpdatedFromServer);
      }
    })
  }


}

export default new Model();