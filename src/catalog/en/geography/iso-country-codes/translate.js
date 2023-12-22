import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    europe: 'ISO codes for European countries',
    europeShort: 'Europe',
  },

  fr: {
    europe: "Les codes ISO des pays d'Europe en anglais",
    europeShort: "Europe",
  },
}

export default translations[languages.current()];

