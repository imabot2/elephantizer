import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    alphabetPhoneticDeLOtan: 'NATO Phonetic Alphabet',
    alphabetPhoneticDeLOtanShort: 'NATO Phonetic Alphabet',
  },

  fr: {
    alphabetPhoneticDeLOtan: "Alphabet phonétique de l'OTAN",
    alphabetPhoneticDeLOtanShort: "Alphabet phonétique de l'OTAN",
  },
}

export default translations[languages.current()];

