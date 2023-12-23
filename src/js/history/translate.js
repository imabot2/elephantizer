import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {    
    error9000: 'Error #9000',
    error9000Message: 'Error while saving memory test history.',
  },

  fr: {
    error9000: 'Erreur #9000',
    error9000Message: "Erreur lors de la sauvegarde du test mémoire dans l'historique.",
  },

}


export default translations[languages.current()];

