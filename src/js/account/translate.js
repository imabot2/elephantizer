import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    error2001: "Error #2001",
    error2001Message: "An unexpected error occurred while updating the username"
    
  },

  fr: {
    error2001: "Erreur 2001",
    error2001Message: "Une erreur inattendue s'est produite pendant la mise à jour du nom d'utilisateur",
  },

}


export default translations[languages.current()];

