import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    anglais: '🇬🇧 English',
    anglaisShort: '🇬🇧',
    grec: '🇬🇷 Greek',
    grecShort: '🇬🇷',
  },

  fr: {
    anglais: '🇬🇧 Anglais',
    anglaisShort: '🇬🇧',
    grec: '🇬🇷 Grec',
    grecShort: '🇬🇷',
  },
}

export default translations[languages.current()];
