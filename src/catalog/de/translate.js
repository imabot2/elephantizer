import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    countriesOnTheMap: 'Countries On The Map in German',
  },

  fr: {
    countriesOnTheMap: 'Les pays sur la carte en Allemand',
  },
}

export default translations[languages.current()];

