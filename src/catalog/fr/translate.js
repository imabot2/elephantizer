import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    alphabetGrec: 'Greek Alphabet in French',
    alphabetGrecShort: 'Greek Alphabet',
    countriesOnTheMap: 'Countries On The Map in French',
    countriesOnTheMapShort: 'Countries On The Map',
    tableDeMultiplication: 'Multiplication tables',
    radiotelephonie: 'Radiotéléphony',
    radiotelephonieShort: 'Radiotéléphony',
  },

  fr: {
    alphabetGrec: 'Alphabet grec en français',
    alphabetGrecShort: 'Alphabet grec',
    countriesOnTheMap: 'Les pays sur la carte en Français',
    countriesOnTheMapShort: 'Les pays sur la carte',
    tableDeMultiplication: 'Tables de multiplication',
    radiotelephonie: "Radiotéléphonie",
    radiotelephonieShort: "Radiotéléphonie",
  },
}

export default translations[languages.current()];

