import translate from "./translate.js"
import countriesOnTheMap from "./countries-on-the-map/series.js";
import countryOutline from "./country-outline/series.js";
import isoCountriesCodes from "./iso-country-codes/series.js";

const categories = {
  "countries-on-the-map": {
    name: translate.countriesOnTheMap,
    shortName: translate.countriesOnTheMapShort,
    series: countriesOnTheMap
  },
  "country-outline": {
    name: translate.countryOutline,
    shortName: translate.countryOutlineShort,
    series: countryOutline
  },
  "iso-country-codes": {
    name: translate.isoCountriesCodes,
    shortName: translate.isoCountriesCodesShort,
    series: isoCountriesCodes
  },

};

export default categories;