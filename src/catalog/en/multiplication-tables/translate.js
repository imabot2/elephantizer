import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    table0to5: 'O to 5 Multiplication Tables',
    table0to5Short: 'O to 5 Times Tables',
    table6to10: '6 to 10 Multiplication Tables',
    table6to10Short: '6 to 10 Times Tables',
    table11to15: '11 to 15 Multiplication Tables',
    table11to15Short: '11 to 15 Times Tables',
    table16to20: '16 to 20 Multiplication Tables',
    table16to20Short: '16 to 20 Times Tables',
  },



  fr: {
    table0to5: 'Tables de multiplication de 0 à 5',
    table0to5Short: 'Tables de 0 à 5',
    table6to10: 'Tables de multiplication de 6 à 10',
    table6to10Short: 'Tables de 6 à 10',
    table11to15: 'Tables de multiplication de 11 à 15',
    table11to15Short: 'Tables de 11 à 15',
    table16to20: 'Tables de multiplication de 16 à 20',
    table16to20Short: 'Tables de 16 à 20',

  },
}

export default translations[languages.current()];

