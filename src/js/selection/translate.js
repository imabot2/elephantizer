import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    title: "Current selection",
    atLeastOneDeck: "Empty Selection",
    atLeastOneDeckMessage: "You must select at least one series.",
  },

  fr: {
    title: "Thèmes sélectionnés",
    atLeastOneDeck: "Selection vide",
    atLeastOneDeckMessage: "Vous devez sélectionner au moins une série.",
  },

}


export default translations[languages.current()];

