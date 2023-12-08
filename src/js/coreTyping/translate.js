import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    noQuestionAnsweredTitle: "No questions answered",
    noQuestionAnsweredMessage: "What happened? You didn't answer any questions!"
  },

  fr: {
    noQuestionAnsweredTitle: "Aucune réponse",
    noQuestionAnsweredMessage: "Que s'est-il passé ? Vous n'avez répondu à aucune question !"
  },

}


export default translations[languages.current()];

