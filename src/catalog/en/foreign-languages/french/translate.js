import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    colors: 'Colors in French',
    colorsShort: 'Colors',
    numbersFrom0to19: 'Numbers in French from 0 to 19',
    numbersFrom0to19Short: 'Numbers (0 to 19)',
  },

  fr: {
    colors: 'Les couleurs en Français',
    colorsShort: 'Les couleurs',
    numbersFrom0to19: 'Les nombres en Français de 0 à 19',
    numbersFrom0to19Short: 'Nombres (0 to 19)',
  },
}

export default translations[languages.current()];

