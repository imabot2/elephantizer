import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    europe: 'European Countries in French',
    europeShort: 'Europe',
    afrique: 'African Countries in French',
    afriqueShort: 'Africa',
    ameriqueDuSud: 'South America Countries in French',
    ameriqueDuSudShort: 'South America',
  },

  fr: {
    europe: 'Les pays européens',
    europeShort: "Europe",
    afrique: "Les pays d'Afrique",
    afriqueShort: 'Afrique',
    ameriqueDuSud: "Les pays d'Amérique du sud",
    ameriqueDuSudShort: 'Amérique du sud',
  },
}

export default translations[languages.current()];

