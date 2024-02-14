import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    accordsEnAnglais: 'English to French chords',
    piano: 'piano',
  },

  fr: {
    accordsEnAnglais: "Les accords en Anglais",
    piano: 'piano',
  },
}

export default translations[languages.current()];
