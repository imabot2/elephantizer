import translate from "./translate.js"
import countriesOnTheMap from "./countries-on-the-map/series.js";
import countryOutline from "./country-outline/series.js";

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
};

export default categories;