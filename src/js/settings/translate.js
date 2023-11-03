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
  },
  fr: {
    duration: "Durée",
    durationLabel: "Sélectionner la durée du test mémoire",
    duration15s: "15s",
    duration30s: "30s",
    duration60s: "60s",
    duration2min: "2min",
    duration5min: "5min",
  },

}


export default translations[languages.current()];

