import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    radiotelephony: "Radiotelephony",
    radiotelephonyShort: "Radiotelephony",
  },

  fr: {
    radiotelephony: "Radiotelephonie",
    radiotelephonyShort: "Radiotelephonie",
  },
}

export default translations[languages.current()];

