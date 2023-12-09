import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    minuscule: 'The Lower-Case Greek Alphabet in French',
    minusculeShort: 'Lower-Case',
    majuscule: 'The Upper-Case Greek Alphabet in French',
    majusculeShort: 'Upper-Case',
  },

  fr: {
    minuscule: "L'alphabet grec en minuscule",
    minusculeShort: "Minuscule",
    majuscule: "L'alphabet grec en majuscule",
    majusculeShort: "Majuscule",
  },
}

export default translations[languages.current()];

