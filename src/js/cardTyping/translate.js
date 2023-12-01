import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    overlayMessage: "Click here or press a key to start.",
  },

  fr: {
    overlayMessage: "Cliquez ici ou appuyez sur une touche pour commencer.",
  },

}


export default translations[languages.current()];

