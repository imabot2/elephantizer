import translate from "./translate.js";
import paysSurLaCarte from "./pays-sur-la-carte/list.js";


const categories = {
  "pays-sur-la-carte" : {
    name: translate.countriesOnTheMap,
    list: paysSurLaCarte
  },
};

export default categories;