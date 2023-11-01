import languages from "Js/languages/index.js";

/**
 * List of translation for the bootloader module
 */
const translations = {
  
  en: {
    loadingTag: 'LOADING',
    errorTag: 'ERROR',
    successTag: 'OK'
  },

  fr: {
    loadingTag: 'CHARGEMENT',
    errorTag: 'ERREUR',
    successTag: 'OK'
  },

}

export default translations[languages.current()];

