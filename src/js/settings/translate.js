import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    duration: "Duration",
    durationLabel: "Select memory test duration",
    duration15s: "15s",
    duration30s: "30s",
    duration60s: "60s",
    duration2min: "2min",
    duration5min: "5min",

    error5000: 'Error #5000',
    error5000message: 'An unknow error occured while saving your settings. Please check your internet connection or try again later.',
  },
  fr: {
    duration: "Durée",
    durationLabel: "Sélectionner la durée du test mémoire",
    duration15s: "15s",
    duration30s: "30s",
    duration60s: "60s",
    duration2min: "2min",
    duration5min: "5min",

    error5000: 'Erreur 5000',
    error5000message: "Une erreur inconnue s'est produite lors de la sauvegarde de vos paramètres. Veuillez vérifier votre connexion internet ou réessayer plus tard.",
  },

}


export default translations[languages.current()];

