import languages from "Js/languages";
import auth from "Js/auth";
import { db } from "Js/firebase";
import { doc, setDoc } from "firebase/firestore";


class model {
  constructor() {

    // Default settings
    this.default = {

      // Current language
      language: 'en',

      // Timer mode [ 'series' | 'up' | 'down' ]
      timerMode: "down",
      // Timer duration [s]
      timerDuration: 60,

    }

    // Set current settings as default
    this.current = structuredClone(this.default);
  }



  load() {

  }


  /**
   * Save the current settings in the database
   * @returns A promise resolved when the settings are saved
   */
  save() {
    return new Promise((resolve, reject) => {


      // Create the document reference for the current settings
      const docRefSettings = doc(db, "users", `${auth.userId()}`, "settings", "current");

      // Append the current series selection to the settings
      this.current.selection = [];


      setDoc(docRefSettings, this.current)
        .then(() => {
          resolve();
        })
        .catch((error) => {
          notifications(translate.error5000, translate.error500Message);
          console.error(error)
          reject(error);
        })


    })
  }

}

export default new model();