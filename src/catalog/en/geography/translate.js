import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    countriesOnTheMap: 'Countries On The Map',
    countriesOnTheMapShort: 'Countries On The Map',
    isoCountriesCodes: 'ISO country codes',
    isoCountriesCodesShort: 'ISO country codes',
    countryOutline: 'Country Outline',
    countryOutlineShort: 'Country Outline',
  },

  fr: {
    countriesOnTheMap: 'Les pays sur la carte en anglais',
    countriesOnTheMapShort: 'Les pays sur la carte',
    isoCountriesCodes: 'Le code ISO des pays en anglais',
    isoCountriesCodesShort: 'Code ISO des pays',
    countryOutline: 'Les contours des pays en anglais',
    countryOutlineShort: 'Les contours des pays',
  },
}

export default translations[languages.current()];

