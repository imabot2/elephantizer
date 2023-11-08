import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    countriesOnTheMap: 'Countries On The Map',
    chess: 'Chess',
  },

  fr: {
    countriesOnTheMap: 'Les pays sur la carte',
    chess: 'Échecs',
  },
}

export default translations[languages.current()];

