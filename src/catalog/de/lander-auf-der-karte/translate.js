import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    europe: 'European Countries in German',
  },

  fr: {
    europe: "Les pays d'Europe en allemand",
  },
}

export default translations[languages.current()];

