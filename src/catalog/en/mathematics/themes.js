import translate from "./translate.js"
import multiplicationTables from "./multiplication-tables/series.js";


const categories = {
  
  "multiplication-tables": {
    name: translate.multiplicationTables,
    shortName: translate.multiplicationTablesShort,
    series: multiplicationTables
  },
};

export default categories;