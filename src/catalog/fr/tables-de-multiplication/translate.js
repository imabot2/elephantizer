import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    tableDe0a5: 'O to 5 Multiplication Tables',
    tableDe0a5Short: 'O to 5 Times Tables',
    tableDe6a10: '6 to 10 Multiplication Tables',
    tableDe6a10Short: '6 to 10 Times Tables',
    tableDe11a15: '11 to 15 Multiplication Tables',
    tableDe11a15Short: '11 to 15 Times Tables',
    tableDe16a20: '16 to 20 Multiplication Tables',
    tableDe16a20Short: '16 to 20 Times Tables',
  },



  fr: {
    tableDe0a5: 'Tables de multiplication de 0 à 5',
    tableDe0a5Short: 'Tables de 0 à 5',
    tableDe6a10: 'Tables de multiplication de 6 à 10',
    tableDe6a10Short: 'Tables de 6 à 10',
    tableDe11a15: 'Tables de multiplication de 11 à 15',
    tableDe11a15Short: 'Tables de 11 à 15',
    tableDe16a20: 'Tables de multiplication de 16 à 20',
    tableDe16a20Short: 'Tables de 16 à 20',

  },
}

export default translations[languages.current()];

