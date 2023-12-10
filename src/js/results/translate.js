import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {    
    scoreTitle: "Score",
    scoreTitleTooltip: "This score represents <strong>overall performance</strong>, calculated on the basis of the number of correct answers, response times, typing speed and typing errors.",

    memorizationTitle: "Memorization",
    memorizationTitleTooltip: "This percentage reflects <strong>your knowledge of the answers</strong>.<br>A percentage of 100% means you know all the answers by heart.",
    
    wpmTitle: "Words Per Minute",
    wpmTitleTooltip: "The number of words per minute (wpm) is your normalized <strong>typing speed</strong>.<br>The average typing speed is around 40 words per minute",

    responseTimeTitle: "Time to First Key",
    responseTimeTitleTooltip: "Response time represents the time elapsed between the <strong>question being displayed</strong> and <strong>the start of the answer</strong>.<br>On average, good memorization should enable you to start answering in less than 2 seconds.",

    rightAnswersTitle: "Right Answers",
    rightAnswersTitleTooltip: "This percentage represents the <strong>number of correct answers</strong>.<br>A score of 100% means that all answers submitted are correct.",

    accuracyTitle: "Accuracy",
    accuracyTitleTooltip: "This percentage represents the <strong>accuracy of your answers</strong>.<br>A percentage of 100% means you've typed all the answers without ever mistyping. ",

    closeBtn: "Close",
  },

  fr: {
    scoreTitle: "Score",
    scoreTitleTooltip: "Ce score représente la <strong>performance globale</strong> calculée en fonction du nombre de bonnes réponses, des temps de réponse, de la vitesse de saisie et des erreurs de frappe.",
    
    memorizationTitle: "Mémorisation",
    memorizationTitleTooltip: "Ce pourcentage reflète <strong>votre connaissance des réponses</strong>.<br>Un pourcentage de 100% signifie que vous connaissez toutes les réponses par cœur.",

    wpmTitle: "Mots par minute",
    wpmTitleTooltip: "Le nombre de mots par minute (wpm) est votre <strong>vitesse de frappe</strong> normalisée.<br>La vitesse moyenne de frappe est d'environ 40 mots par minute.",
    

    responseTimeTitle: "Temps de réponse",
    responseTimeTitleTooltip: "Le temps de réponse représente le temps écoulé entre <strong>l'affichage de la question</strong> et le <strong>début de la réponse</strong>.<br>En moyenne, une bonne mémorisation permet de commencer à répondre en moins de 2 secondes.",

    rightAnswersTitle: "Réponses correctes",
    rightAnswersTitleTooltip: "Ce pourcentage représente le <strong>nombre de réponses correctes</strong>. Les erreurs de frappe corrigées ne sont pas comptabilisées.<br>Un score de 100% signifie que toutes les réponses soumises sont exactes.",

    accuracyTitle: "Précision",
    accuracyTitleTooltip: "Ce pourcentage représente la <strong>précision de vos réponses</strong>.<br>Un pourcentage de 100% signifie que vous avez tapé toutes les réponses sans jamais faire une seule erreur de frappe.",

    closeBtn: "Fermer",
  },

}


export default translations[languages.current()];

