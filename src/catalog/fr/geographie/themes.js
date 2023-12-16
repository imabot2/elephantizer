import translate from "./translate.js";
import countryOutline from "./contour-des-pays/series.js";
import paysSurLaCarte from "./pays-sur-la-carte/series.js";


const categories = {

  "contour-des-pays" : {
    name: translate.countryOutline,
    shortName: translate.countryOutlineShort,
    series: countryOutline
  },
  "pays-sur-la-carte" : {
    name: translate.countriesOnTheMap,
    shortName: translate.countriesOnTheMapShort,
    series: paysSurLaCarte
  },
};

export default categories;