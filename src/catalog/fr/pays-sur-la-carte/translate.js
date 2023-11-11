import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    europe: 'European Countries in French',
    europeShort: 'Europe',
  },

  fr: {
    europe: 'Les pays européens',
    europeShort: "Europe",
  },
}

export default translations[languages.current()];

