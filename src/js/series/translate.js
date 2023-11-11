import languages from "Js/languages/index.js";

/**
 * List of translation for the authentification module
 */
const translations = {

  en: {
   
    error6000: 'Error #6000',
    error6000Message: 'An unexpected error occurred while loading a deck of cards. Please retry later.',
  },

  fr: {
    error6000: 'Erreur 6000',
    error6000Message: "Une erreur inattendue s'est produite lors du chargement d'une série de cartes. Veuillez réessayer plus tard.",
  },

}


export default translations[languages.current()];

