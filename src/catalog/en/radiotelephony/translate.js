import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    natoPhoneticAlphabet: 'NATO Phonetic Alphabet',
    natoPhoneticAlphabetShort: 'NATO Phonetic Alphabet',
  },

  fr: {
    natoPhoneticAlphabet: "Alphabet phonétique de l'OTAN",
    natoPhoneticAlphabetShort: "Alphabet phonétique de l'OTAN",
  },
}

export default translations[languages.current()];

