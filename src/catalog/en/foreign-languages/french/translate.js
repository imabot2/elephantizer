import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    colors: 'Colors in French',
    colorsShort: 'Colors',
  },

  fr: {
    colors: 'Les couleurs en Français',
    colorsShort: 'Les couleurs',
  },
}

export default translations[languages.current()];

