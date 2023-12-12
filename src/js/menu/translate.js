import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    back: "back",
    title: "Menu",
    selectMemoryTest: "Select Memory Test",
    settings: '<i class="bi bi-gear-fill me-2"></i> Settings',
    showLastResults: '<i class="bi bi-bar-chart-fill me-2"></i> Last Results',
    about: "About",
    automatiSaveMessage: "Changes are automatically saved.",
    closeBtn: "Close",
  },

  fr: {
    back: "Retour",
    title: "Menu",
    selectMemoryTest: "Sélection des questions",
    settings: '<i class="bi bi-gear-fill me-2"></i> Paramètres',
    showLastResults: '<i class="bi bi-bar-chart-fill me-2"></i> Derniers résultats',
    about: "À propos",
    automatiSaveMessage: "Les changements sont automatiquement enregistrés.",
    closeBtn: "Fermer",
  },

}


export default translations[languages.current()];

