import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    title: "Current selection",
    atLeastOneDeck: "No series selected", 
    atLeastOneDeckMessage: "You must select at least one series of cards.",
  },

  fr: {
    title: "Thèmes sélectionnés",
    atLeastOneDeck: "Aucune série sélectionnée", 
    atLeastOneDeckMessage: "Vous devez sélectionner au moins une série de cartes.",
  },

}


export default translations[languages.current()];

