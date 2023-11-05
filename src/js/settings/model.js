import view from './view.js'
import auth from "Js/auth";
import notifications from "Js/notifications";
import { db } from "Js/firebase";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";



/**
 * Model for the settings module
 */
class model {

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

      // Contains the series of decks
      series: ['/en/countries-on-the-map/europe/'],
    }

    // At startup, set the current settings as the default settings
    this.current = structuredClone(this.default);

    // Catch events to listen/unsubscribe from DB updates
    document.body.addEventListener('auth-sign-in', () => { this.listenDB(); });
    document.body.addEventListener('auth-sign-out', () => { this.stopListeningDB();});

  }


  /**
   * Load settings from Firestore and update the settings menu
   * @returns A promise resolved when the settings are up-to-date
   */
  init() {

      // Set the default parameters to the view
      view.update();

      // If the user not logged, return a resolved promise
      if (!auth.isLogged()) return Promise.resolve();
        
      // The user is logged, download settings from the database
      return this.load({updateView: true});      
  }


  /**
   * Update a single parameter of the settings
   * @param {string} key The field to update
   * @param {string} value The new value of the field key
   * @param {boolean} options.updateView Update the view after updating the settings when true
   * @param {boolean} options.save Save the settings on Firestore when true
   */
  updateField(key, value, { updateView = false, save = false }) {
    // Check if the key exists
    if (!key in this.default) return;

    // Check if the value changed
    if (this.current[key] != value) {
      // Update the value and save the new settings
      this.current[key] = value;

      // If requested, update the view and save the settings
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
  update(newSettings, { updateView = false, save = false }) {
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

      // Overwrite the backend settings with the current settings
      setDoc(docRefSettings, this.current)
        .then(() => {
          resolve();
        })
        .catch((error) => {
          notifications(translate.error5000, translate.error5000Message);
          console.error(error);
          reject(error);
        })


    })
  }


  /**
   * Load the current settings from the Firestore DB
   * @param {boolean} options.updateView When true, update the view after downloading the settings
   * @returns A promise resolved when the settings are loaded
   */
  load({ updateView = false }) {
    // Return a promise
    return new Promise((resolve, reject) => {

      // If the user is not logged in, do not load settings
      if (!auth.isLogged()) { resolve(); return; }

      // Create the document reference for the current settings
      const docRefSettings = doc(db, "users", `${auth.userId()}`, "settings", "current");

      getDoc(docRefSettings)
        .then((docSnap) => {
          if (docSnap.exists()) this.update(docSnap.data(), { 'updateview': updateView });
          resolve();
        })
        .catch((error) => {
          notifications(translate.error5002, translate.error5002Message);
          console.error(error);
          reject(error);
        })
    })
  }

  /**
   * Listen for Firestore DB settings change 
   * On change, update the current settings
   */
  listenDB() {

    // If the user is not logged in, do not use the listener
    if (!auth.isLogged()) return;

    // Create the document reference
    const docRefSettings = doc(db, "users", `${auth.userId()}`, "settings", "current");

    // Set the listener on the reference document
    this.unsubscribe = onSnapshot(docRefSettings, (doc) => {
      // Update only if remote changes
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      if (source == "Server") {
        // Update the current settings and the settings menu
        this.update(doc.data(), { updateView: true });
      }
    });
  }


  /**
   * Stop listening from the settings update from DB
   */
  stopListeningDB() {
    if (this.unsubscribe !== undefined) this.unsubscribe();  
  }


}

export default new model();