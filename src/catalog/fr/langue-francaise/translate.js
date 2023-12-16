import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    figuresDeStyle: 'French figures of speech',
    figuresDeStyleShort: 'Figures of speech',
  },

  fr: {
    figuresDeStyle: 'Les figures de style',
    figuresDeStyleShort: 'Figures de style',    
  },
}

export default translations[languages.current()];

