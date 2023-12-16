import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    geografie: 'Geography in German',
    geografieShort: 'Geography',
  },

  fr: {
    geografie: 'Géographie en allemand',
    geografieShort: 'Géographie',
  },
}

export default translations[languages.current()];
