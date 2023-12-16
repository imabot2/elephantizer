import translate from "./translate.js"
import tablesDeMultiplication from "./tables-de-multiplication/series.js";

const categories = {
  "tables-de-multiplication" : {
    name: translate.tableDeMultiplication,
    shortName: translate.tableDeMultiplication,
    series: tablesDeMultiplication,
  },

};

export default categories;