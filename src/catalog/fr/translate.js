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
    multiplicationTableDe0a10: 'Multiplication tables from 0 to 10',
    multiplicationTableDe11a20: 'Multiplication tables from 11 to 20',
    radiotelephonie: 'Radiotéléphony',
    radiotelephonieShort: 'Radiotéléphony',
  },

  fr: {
    alphabetGrec: 'Alphabet grec en français',
    alphabetGrecShort: 'Alphabet grec',
    countriesOnTheMap: 'Les pays sur la carte en Français',
    countriesOnTheMapShort: 'Les pays sur la carte',
    multiplicationTableDe0a10: 'Tables de multiplication de 0 à 10',
    multiplicationTableDe11a20: 'Tables de multiplication de 11 à 20',
    radiotelephonie: "Radiotéléphonie",
    radiotelephonieShort: "Radiotéléphonie",
  },
}

export default translations[languages.current()];

