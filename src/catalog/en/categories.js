import translate from "./translate.js"
import countriesOnTheMap from "./countries-on-the-map/series.js";
import countryOutline from "./country-outline/series.js";
import greekAlphabet from "./greek-alphabet/series.js";
import multiplicationTables from "./multiplication-tables/series.js";
import radiotelephony from "./radiotelephony/series.js";

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
  "greek-alphabet": {
    name: translate.greekAlphabet,
    shortName: translate.greekAlphabetShort,
    series: greekAlphabet
  },
  "multiplication-tables": {
    name: translate.multiplicationTables,
    shortName: translate.multiplicationTablesShort,
    series: multiplicationTables
  },
  "radiotelephony": {
    name: translate.radiotelephony,
    shortName: translate.radiotelephonyShort,
    series: radiotelephony
  },

};

export default categories;