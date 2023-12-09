import translate from "./translate.js";
import alphabetGrec from "./alphabet-grec/series.js";
import paysSurLaCarte from "./pays-sur-la-carte/series.js";
import tablesDeMultiplication from "./tables-de-multiplication/series.js";
import radiotelephonie from "./radiotelephonie/series.js";


const categories = {

  "alphabet-grec" : {
    name: translate.alphabetGrec,
    shortName: translate.alphabetGrecShort,
    series: alphabetGrec
  },
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
  "tables-de-multiplication" : {
    name: translate.tableDeMultiplication,
    shortName: translate.tableDeMultiplication,
    series: tablesDeMultiplication,
  },

};

export default categories;