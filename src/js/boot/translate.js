import languages from "Js/languages/index.js";

/**
 * List of translation for the bootloader module
 */
const translations = {

  en: {
    authentification: 'Authentification',
    settings: 'User settings',
  },

  fr: {
    authentification: "Authentification.",
    settings: "Paramètres de l'utilisateurs",
  },

}

export default translations[languages.current()];

