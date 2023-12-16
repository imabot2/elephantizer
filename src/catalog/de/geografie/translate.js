import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    countriesOnTheMap: 'Countries On The Map in German',
    countriesOnTheMapShort: 'Countries On The Map',
  },

  fr: {
    countriesOnTheMap: 'Les pays sur la carte en Allemand',
    countriesOnTheMapShort: 'Les pays sur la carte',
  },
}

export default translations[languages.current()];

