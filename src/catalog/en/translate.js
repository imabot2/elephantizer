import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    countriesOnTheMap: 'Countries On The Map',
    countriesOnTheMapShort: 'Countries On The Map',
    multiplicationTables: 'Multiplication Tables',
    radiotelephony: "Radiotelephony",
    radiotelephonyShort: "Radiotelephony",
  },

  fr: {
    countriesOnTheMap: 'Les pays sur la carte en anglais',
    countriesOnTheMapShort: 'Les pays sur la carte',
    multiplicationTables: 'Tables de multiplication',
    radiotelephony: "Radiotelephonie",
    radiotelephonyShort: "Radiotelephonie",
  },
}

export default translations[languages.current()];

