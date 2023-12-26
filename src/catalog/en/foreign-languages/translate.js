import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    french: '🇫🇷 French',
    frenchShort: '🇫🇷',    
    greek: '🇬🇷 Greek',
    greekShort: '🇬🇷',
    spanish: '🇪🇸 Spanish',
    spanishlShort: '🇪🇸',
  },

  fr: {
    french: '🇫🇷 Français',
    frenchShort: '🇫🇷',
    greek: '🇬🇷 Grec',
    greekShort: '🇬🇷',
    spanish: '🇪🇸 Espagnol',
    spanishShort: '🇪🇸',
  },
}

export default translations[languages.current()];
