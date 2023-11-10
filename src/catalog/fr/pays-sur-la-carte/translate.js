import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    europe: 'European Countries in French',
  },

  fr: {
    europe: 'Les pays européens',
  },
}

export default translations[languages.current()];

