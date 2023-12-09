import translate from "./translate.js"
import countriesOnTheMap from "./countries-on-the-map/series.js";
import multiplicationTables from "./multiplication-tables/series.js";
import radiotelephony from "./radiotelephony/series.js";

const categories = {
  "countries-on-the-map" : {
    name: translate.countriesOnTheMap,
    shortName: translate.countriesOnTheMapShort,
    series: countriesOnTheMap
  },
  "multiplication-tables": {
    name: translate.multiplicationTables,
    shortName: translate.multiplicationTables,
    series: multiplicationTables
  },
  "radiotelephony": {
    name: translate.radiotelephony,
    shortName: translate.radiotelephonyShort,
    series: radiotelephony
  },

};

export default categories;