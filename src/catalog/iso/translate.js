import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    isoCountryCode: 'ISO Country Code',
    isoCountryCodeShort: 'ISO Country Code',
  },

  fr: {
    isoCountryCode: 'Les codes ISO des pays',
    isoCountryCodeShort: 'Les codes ISO des pays',
  },
}

export default translations[languages.current()];

