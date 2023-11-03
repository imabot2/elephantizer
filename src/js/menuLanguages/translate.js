import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    title: "Languages",
  },

  fr: {
    title: "Langues",
  },

}


export default translations[languages.current()];

