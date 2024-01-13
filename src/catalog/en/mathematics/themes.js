import translate from "./translate.js"
import multiplicationTables from "./multiplication-tables/series.js";
import additionTables from "./addition-tables/series.js";


const categories = {
  "addition-tables": {
    name: translate.additionTables,
    shortName: translate.additionTablesShort,
    series: additionTables
  },
  "multiplication-tables": {
    name: translate.multiplicationTables,
    shortName: translate.multiplicationTablesShort,
    series: multiplicationTables
  },

};

export default categories;