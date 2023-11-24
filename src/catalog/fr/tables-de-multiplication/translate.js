import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    tableDe0: 'O Times Multiplication Table',
    tableDe0Short: 'O Times Table',
  },

  fr: {
    tableDe0: 'Table de multiplication de 0',
    tableDe0Short: 'Table de 0',
  },
}

export default translations[languages.current()];

