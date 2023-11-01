import languages from "Js/languages/index.js";

/**
 * List of translation for the bootloader module
 */
const translations = {

  en: {
    authentification: 'Checking for authentification',
  },

  fr: {
    authentification: "Vérification de l'authentification.",
  },

}

export default translations[languages.current()];

