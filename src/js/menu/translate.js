import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    back: "back",
    menuTitle: "Menu",
    selectMemoryTest: "Select Memory Test",
    settings: "Settings",
    about: "About",
  },

  fr: {
    back: "Retour",
    menuTitle: "Menu",
    selectMemoryTest: "Sélection des questions",
    settings: "Préférences",
    about: "À propos",
  },

}


export default translations[languages.current()];

