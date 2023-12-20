import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    lesCouleurs: 'Colors in Spanish',
    lesCouleursShort: 'Colors',
  },

  
  fr: {
    lesCouleurs: 'Les couleurs en espagnol',
    lesCouleursShort: 'Les couleurs',  
  },
}

export default translations[languages.current()];

