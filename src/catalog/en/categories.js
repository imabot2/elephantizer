import translate from "./translate.js"
import countriesOnTheMap from "./countries-on-the-map/series.js";
import chess from "./chess/series.js";

const categories = {
  "countries-on-the-map" : {
    name: translate.countriesOnTheMap,
    series: countriesOnTheMap
  },
  "chess": {
    name: translate.chess,
    series: chess
  },
};

export default categories;