import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    overlayMessageStart: "Click here or press a key to start.",
    overlayMessageContinue: "Click here or press a key to continue.",
  },

  fr: {
    overlayMessageStart: "Cliquez ici ou appuyez sur une touche pour commencer.",
    overlayMessageContinue: "Cliquez ici ou appuyez sur une touche pour continuer.",
  },

}


export default translations[languages.current()];

