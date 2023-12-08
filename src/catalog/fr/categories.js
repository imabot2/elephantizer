import translate from "./translate.js";
import paysSurLaCarte from "./pays-sur-la-carte/series.js";
import tablesDeMultiplicationDe0a10 from "./tables-de-multiplication-de-0-a-10/series.js";
import tablesDeMultiplicationDe11a20 from "./tables-de-multiplication-de-11-a-20/series.js";
import radiotelephonie from "./radiotelephonie/series.js";


const categories = {

  "pays-sur-la-carte" : {
    name: translate.countriesOnTheMap,
    shortName: translate.countriesOnTheMapShort,
    series: paysSurLaCarte
  },
  "radiotelephonie" : {
    name: translate.radiotelephonie,
    shortName: translate.radiotelephonieShort,
    series: radiotelephonie,
  },
  "tables-de-multiplication-de-0-a-10" : {
    name: translate.multiplicationTableDe0a10,
    shortName: translate.multiplicationTableDe0a10,
    series: tablesDeMultiplicationDe0a10,
  },
  "tables-de-multiplication-de-11-a-20" : {
    name: translate.multiplicationTableDe11a20,
    shortName: translate.multiplicationTableDe11a20,
    series: tablesDeMultiplicationDe11a20,
  },

};

export default categories;