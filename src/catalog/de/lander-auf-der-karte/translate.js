import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    europe: 'European Countries in German',
    europeShort: 'Europe',
  },

  fr: {
    europe: "Les pays d'Europe en allemand",
    europeShort: "Europe",
  },
}

export default translations[languages.current()];

