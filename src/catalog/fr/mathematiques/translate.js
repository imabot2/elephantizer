import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    tableDeMultiplication: 'Multiplication tables',
  },

  fr: {
    tableDeMultiplication: 'Tables de multiplication',
  },
}

export default translations[languages.current()];
