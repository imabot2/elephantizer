import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    badgePrefix: "#",
    yourAnswer: "Answered:",
    score: "Score:",
    progressRatio: "Progress:",
    searchTime: "Search:",
    totalTime: "Time:",
    accuracy: "Accuracy:",
    typingSpeed: "Typing speed:",
    answered: "Counter:",
    time: "time",
    times: "times",
  },



  fr: {
    badgePrefix: "",
    yourAnswer: "Répondu :",
    score: "Score :",
    progressRatio: "Progression :",
    searchTime: "Recherche :",
    totalTime: "Temps :",
    accuracy: "Précision :",
    typingSpeed: "Vitesse :",
    answered: "Compteur :",
    time: "fois",
    times: "fois",
  },

}


export default translations[languages.current()];

