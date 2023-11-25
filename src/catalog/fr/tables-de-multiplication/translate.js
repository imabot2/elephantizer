import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    tableDe0: 'O Times Multiplication Table',
    tableDe0Short: 'O Times Table',
    tableDe1: '1 Times Multiplication Table',
    tableDe1Short: '1 Times Table',
  },

  fr: {
    tableDe0: 'Table de multiplication de 0',
    tableDe0Short: 'Table de 0',
    tableDe1: 'Table de multiplication de 1',
    tableDe1Short: 'Table de 1',
  },
}

export default translations[languages.current()];

