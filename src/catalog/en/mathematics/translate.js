import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    multiplicationTables: 'Multiplication Tables',
    multiplicationTablesShort: 'Multiplication Tables',  
  },

  fr: {
    multiplicationTables: 'Tables de multiplication',
    multiplicationTablesShort: 'Tables de multiplication',
  },
}

export default translations[languages.current()];

