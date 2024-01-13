import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    additionTables: 'Addition Tables',
    additionTablesShort: 'Addition Tables', 
    multiplicationTables: 'Multiplication Tables',
    multiplicationTablesShort: 'Multiplication Tables',  
  },

  fr: {
    additionTables: "Tables d'addition",
    additionTablesShort: "Tables d'addition", 
    multiplicationTables: 'Tables de multiplication',
    multiplicationTablesShort: 'Tables de multiplication',
  },
}

export default translations[languages.current()];

