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
    ameriqueDuNord: 'North America Countries in French',
    ameriqueDuNordShort: 'north America',
    ameriqueDuSud: 'South America Countries in French',
    ameriqueDuSudShort: 'South America',
    oceanie: 'Countries of Oceania in French',
    oceanieShort: 'Ocenania',
  },

  fr: {
    europe: 'Les pays européens',
    europeShort: "Europe",
    afrique: "Les pays d'Afrique",
    afriqueShort: 'Afrique',
    ameriqueDuNord: "Les pays d'Amérique du nord",
    ameriqueDuNordShort: 'Amérique du nord',
    ameriqueDuSud: "Les pays d'Amérique du sud",
    ameriqueDuSudShort: 'Amérique du sud',
    oceanie: "Les pays d'Océanie",
    oceanieShort: 'Océanie',

  },
}

export default translations[languages.current()];

