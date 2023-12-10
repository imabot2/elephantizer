import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    europe: 'Outline of European Countries',
    europeShort: 'Europe',
  },

  fr: {
    europe: 'Les contours des pays européens',
    europeShort: "Europe",
  },
}

export default translations[languages.current()];

