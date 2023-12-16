import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {   
    countryOutline: 'Country Outline in French',
    countryOutlineShort: 'Country Outline',
    countriesOnTheMap: 'Countries On The Map in French',
    countriesOnTheMapShort: 'Countries On The Map',
  },

  fr: {
    countryOutline: 'Les contours des pays',
    countryOutlineShort: 'Les contours des pays',
    countriesOnTheMap: 'Les pays sur la carte',
    countriesOnTheMapShort: 'Les pays sur la carte',
  },
}

export default translations[languages.current()];

