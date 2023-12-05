import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    title: "Current selection",
    atLeastOneDeck: "Empty Selection",
    atLeastOneDeckMessage: "You must select at least one series.",

    error7000: 'Error #7000',
    error7000Message: 'Error while loading memory test.',
  },

  fr: {
    title: "Thèmes sélectionnés",
    atLeastOneDeck: "Selection vide",
    atLeastOneDeckMessage: "Vous devez sélectionner au moins une série.",

    error7000: 'Error #7000',
    error7000Message: "Erreur lors du chargement d'un test.",
  },

}


export default translations[languages.current()];

