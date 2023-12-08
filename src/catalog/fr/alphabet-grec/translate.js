import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    minuscule: 'The Lower-Case Greek Alphabet in French',
    minusculeShort: 'Lower-Case',
  },

  fr: {
    minuscule: "L'alphabet grec en minuscule",
    minusculeShort: "Minuscule",
  },
}

export default translations[languages.current()];

