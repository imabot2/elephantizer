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
    about: "About",
  },

  fr: {
    back: "Retour",
    title: "Menu",
    selectMemoryTest: "Sélection des questions",
    settings: '<i class="bi bi-gear-fill me-2"></i> Paramètres',
    about: "À propos",
  },

}


export default translations[languages.current()];

