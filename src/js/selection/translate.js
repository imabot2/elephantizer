import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    title: "Current selection",
  },

  fr: {
    title: "Thèmes sélectionnés",
  },

}


export default translations[languages.current()];

