import translate from "./translate.js"
import tablesDeMultiplication from "./tables-de-multiplication/series.js";
import tableDAddition from "./tables-d-addition/series.js";

const categories = {
  "tables-d-addition" : {
    name: translate.tableDAddition,
    shortName: translate.tableDAddition,
    series: tableDAddition,
  },
  "tables-de-multiplication" : {
    name: translate.tableDeMultiplication,
    shortName: translate.tableDeMultiplication,
    series: tablesDeMultiplication,
  },

};

export default categories;