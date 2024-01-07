import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    africa: 'African Countries in English',
    africaShort: 'Africa',
    europe: 'European Countries in English',
    europeShort: 'Europe',
    oceania: 'Countries of Oceania in English',
    ocaniaShort: 'Oceania',
    northAmerica: 'North American Countries in English',
    northAmericaShort: 'North America',
    southAmerica: 'South American Countries in English',
    souhtAmericaShort: 'South America',
  },

  fr: {
    africa: "Les pays d'Afrique en anglais",
    africaShort: "Afrique",
    europe: "Les pays d'Europe en anglais",
    europeShort: "Europe",
    oceania: "Les pays d'Océanie en anglais",
    ocaniaShort: 'Oceanie',
    northAmerica: "L'Amérique du Nord en anglais",
    northAmericaShort: 'Amérique du Nord',
    southAmerica: "L'Amérique du Sud en anglais",
    souhtAmericaShort: 'Amérique du Sud',

  },
}

export default translations[languages.current()];

