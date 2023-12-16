import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    greek: 'Greek',
    greekShort: 'Greek',
  },

  fr: {
    greek: 'Grec',
    greekShort: 'Grec',
  },
}

export default translations[languages.current()];
