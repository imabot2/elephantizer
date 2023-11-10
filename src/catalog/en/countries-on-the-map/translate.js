import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    africa: 'African Countries',
    europe: 'European Countries',
  },

  fr: {
    africa: "Les pays d'Afrique en anglais",
    europe: "Les pays d'Europe en anglais",
  },
}

export default translations[languages.current()];

