import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    europe: 'European Countries ISO Code',
    europeShort: 'Europe',
  },

  fr: {
    europe: 'Les code ISO des pays européens',
    europeShort: 'Europe',
  },
}

export default translations[languages.current()];

