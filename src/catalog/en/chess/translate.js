import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    stockfishStartingPosition: 'Stockfish Starting Position',
    stockfishStartingPositionShort: 'Stockfish',
  },

  fr: {
    stockfishStartingPosition: 'Les premiers coups selon Stockfish',
    stockfishStartingPositionShort: 'Stockfish',
  },
}

export default translations[languages.current()];

