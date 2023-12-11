import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    countriesOnTheMap: 'Countries On The Map',
    countriesOnTheMapShort: 'Countries On The Map',
    countryOutline: 'Country Outline',
    countryOutlineShort: 'Country Outline',
    greekAlphabet: 'Greek Alphabet',
    greekAlphabetShort: "Greek Alphabet",
    multiplicationTables: 'Multiplication Tables',
    multiplicationTablesShort: 'Multiplication Tables',
    radiotelephony: "Radiotelephony",
    radiotelephonyShort: "Radiotelephony",
  },

  fr: {
    countriesOnTheMap: 'Les pays sur la carte en anglais',
    countriesOnTheMapShort: 'Les pays sur la carte',
    countryOutline: 'Les contours des pays en anglais',
    countryOutlineShort: 'Les contours des pays',
    greekAlphabet: "L'alphabet grec en anglais",
    greekAlphabetShort: "L'alphabet grec",
    multiplicationTables: 'Tables de multiplication',
    multiplicationTablesShort: 'Tables de multiplication',
    radiotelephony: "Radiotelephonie",
    radiotelephonyShort: "Radiotelephonie",
  },
}

export default translations[languages.current()];

