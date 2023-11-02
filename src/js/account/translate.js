import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    error2000: "Error #2000",
    error2000Message: "An unexpected error occurred while updating the username"
    
  },

  fr: {
    error2000: "Erreur 2000",
    error2000Message: "Une erreur inattendue s'est produite pendant la mise à jour du nom d'utilisateur",
  },

}


export default translations[languages.current()];

