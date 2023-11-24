import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    countriesOnTheMap: 'Countries On The Map in French',
    countriesOnTheMapShort: 'Countries On The Map',
    multiplicationTable: 'Multiplication tables',
  },

  fr: {
    countriesOnTheMap: 'Les pays sur la carte en Français',
    countriesOnTheMapShort: 'Les pays sur la carte',
    multiplicationTable: 'Tables de multiplication',
  },
}

export default translations[languages.current()];

