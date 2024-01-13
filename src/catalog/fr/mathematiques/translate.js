import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    tableDeMultiplication: 'Multiplication tables',
    tableDAddition: 'Addition tables',
  },

  fr: {
    tableDeMultiplication: 'Tables de multiplication',
    tableDAddition: "Tables d'addition"
  },
}

export default translations[languages.current()];
