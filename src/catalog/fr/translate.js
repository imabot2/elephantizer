import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    alphabetGrec: 'Greek Alphabet in French',
    alphabetGrecShort: 'Greek Alphabet',
    countryOutline: 'Country Outline in French',
    countryOutlineShort: 'Country Outline',
    countriesOnTheMap: 'Countries On The Map in French',
    countriesOnTheMapShort: 'Countries On The Map',
    figuresDeStyle: 'French figures of speech',
    figuresDeStyleShort: 'Figures of speech',
    tableDeMultiplication: 'Multiplication tables',
    radiotelephonie: 'Radiotelephony',
    radiotelephonieShort: 'Radiotelephony',
  },

  fr: {
    alphabetGrec: 'Alphabet grec',
    alphabetGrecShort: 'Alphabet grec',
    countryOutline: 'Les contours des pays',
    countryOutlineShort: 'Les contours des pays',
    countriesOnTheMap: 'Les pays sur la carte',
    countriesOnTheMapShort: 'Les pays sur la carte',
    figuresDeStyle: 'Les figures de style',
    figuresDeStyleShort: 'Figures de style',    
    tableDeMultiplication: 'Tables de multiplication',
    radiotelephonie: "Radiotéléphonie",
    radiotelephonieShort: "Radiotéléphonie",
  },
}

export default translations[languages.current()];

