import translate from "./translate.js"
import countriesOnTheMap from "./countries-on-the-map/list.js";
import chess from "./chess/list.js";

const categories = {
  "countries-on-the-map" : {
    name: translate.countriesOnTheMap,
    list: countriesOnTheMap
  },
  "chess": {
    name: translate.chess,
    list: chess
  },
};

export default categories;