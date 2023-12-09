import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    error8000: 'Error #8000',
    error8000Message: 'Error while saving memory test statistics.',
  },

  fr: {

    error8000: 'Erreur #8000',
    error8000Message: "Erreur lors de la sauvegarde des statistiques du test mémoire.",
  },

}


export default translations[languages.current()];

