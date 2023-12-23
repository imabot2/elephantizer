import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    signIn: "Sign in",
    signInToSave: " to save your result.",
    memorization: "Memorization",
    searchTime: "Search time",
    accuracy: "Accuracy",
    wpm: "Words per minute",
  },



  fr: {
    signIn: "Connectez-vous",
    signInToSave: " pour sauvegarder vos résultats.",
    memorization: "Mémorisation",
    searchTime: "Recherche",
    accuracy: "Précision",
    wpm: "Mots par minute",
  },

}


export default translations[languages.current()];

