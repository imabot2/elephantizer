import languages from "Js/languages/index.js";

/**
 * List of translation for the bootloader module
 */
const translations = {

  en: {
    authentification: 'Authentification',
    settings: 'User settings',
    statistics: 'User data', 
    defaultSeries: 'Load default deck',
  },

  fr: {
    authentification: "Authentification",
    settings: "Paramètres de l'utilisateurs",
    statistics: 'Données utilisateurs', 
    defaultSeries: 'Charge le jeu de cartes',
  },

}

export default translations[languages.current()];

