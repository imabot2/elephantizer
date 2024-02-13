import languages from "Js/languages/index.js";

/**
 * List of translation for the bootloader module
 */
const translations = {

  en: {
    authentification: 'Authentification',
    settings: 'User settings',
    statistics: 'User data', 
    history: "Load user history",
    loadFromUrlPath: 'Load <%=path%> from URL path',
    loadFromUrlQuery: 'Load <%=n%> deck(s) from URL',
    defaultSeries: 'Load default deck',
    core: 'Prepare first questions',
  },

  fr: {
    authentification: "Authentification",
    settings: "Paramètres de l'utilisateur",
    statistics: 'Données utilisateur', 
    history: "Chargement de l'historique",
    loadFromUrlPath: "Charge le jeu de cartes <%=path%> depuis l'URL",
    loadFromUrlQuery: "Charge <%=n%> jeu(x) de cartes depuis l'URL",
    defaultSeries: 'Charge le jeu de cartes',
    core: 'Prépare les premières questions',
  },

}

export default translations[languages.current()];

