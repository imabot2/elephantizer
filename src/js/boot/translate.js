import languages from "Js/languages/index.js";

/**
 * List of translation for the bootloader module
 */
const translations = {

  en: {
    authentification: 'Authentification',
    settings: 'User settings',
    statistics: 'User data', 
    loadFromUrl: 'Load <%=n%> deck(s) from URL',
    defaultSeries: 'Load default deck',
    core: 'Prepare first questions',
  },

  fr: {
    authentification: "Authentification",
    settings: "Paramètres de l'utilisateurs",
    statistics: 'Données utilisateurs', 
    loadFromUrl: "Charge <%=n%> jeu(x) de cartes depuis l'URL",
    defaultSeries: 'Charge le jeu de cartes',
    core: 'Prépare les premières questions',
  },

}

export default translations[languages.current()];

