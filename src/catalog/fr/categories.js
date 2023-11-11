import translate from "./translate.js";
import paysSurLaCarte from "./pays-sur-la-carte/series.js";


const categories = {
  "pays-sur-la-carte" : {
    name: translate.countriesOnTheMap,
    shortName: translate.countriesOnTheMapShort,
    series: paysSurLaCarte
  },
};

export default categories;