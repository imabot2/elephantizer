import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    lowercase: 'The Lower-Case Greek Alphabet',
    lowercaseShort: 'Lower-Case',
    uppercase: 'The Upper-Case Greek Alphabet',
    uppercaseShort: 'Upper-Case',
  },

  fr: {
    lowercase: "L'alphabet grec en minuscule en Anglais",
    lowercaseShort: "Minuscule",
    uppercase: "L'alphabet grec en majuscule en Anglais",
    uppercaseShort: "Majuscule",
  },
}

export default translations[languages.current()];

