import translate from "./translate.js";
import paysSurLaCarte from "./pays-sur-la-carte/series.js";
import tablesDeMultiplication from "./tables-de-multiplication/series.js";

const categories = {
  "pays-sur-la-carte" : {
    name: translate.countriesOnTheMap,
    shortName: translate.countriesOnTheMapShort,
    series: paysSurLaCarte
  },
  "tables-de-multiplication" : {
    name: translate.multiplicationTable,
    shortName: translate.multiplicationTable,
    series: tablesDeMultiplication,
  },
};

export default categories;