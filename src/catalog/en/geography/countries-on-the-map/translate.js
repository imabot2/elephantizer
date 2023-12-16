import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    africa: 'African Countries in English',
    africaShort: 'Africa',
    europe: 'European Countries in English',
    europeShort: 'Europe',
  },

  fr: {
    africa: "Les pays d'Afrique en anglais",
    africaShort: "Afrique",
    europe: "Les pays d'Europe en anglais",
    europeShort: "Europe",

  },
}

export default translations[languages.current()];

