import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    accordsEnAnglais: 'English to French chords',
  },

  fr: {
    accordsEnAnglais: "Les accords en Anglais"
  },
}

export default translations[languages.current()];
