import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    grec: 'Greek',
    grecShort: 'Greek',
  },

  fr: {
    grec: 'Grec',
    grecShort: 'Grec',
  },
}

export default translations[languages.current()];
