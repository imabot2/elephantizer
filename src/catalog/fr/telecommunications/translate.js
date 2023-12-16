import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    radiotelephonie: 'Radiotelephony',
    radiotelephonieShort: 'Radiotelephony',
  },

  fr: {
    radiotelephonie: "Radiotéléphonie",
    radiotelephonieShort: "Radiotéléphonie",
  },
}

export default translations[languages.current()];

