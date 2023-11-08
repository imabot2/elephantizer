import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    english: "English",
    french: "French",
    german: "German",
    iso: "ISO Norm",
  },

  fr: {
    english: "Anglais",
    french: "Français",
    german: "Allemand",
    iso: "Norme ISO",
  },
}

export default translations[languages.current()];

