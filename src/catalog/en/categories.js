import translate from "./translate.js"
import countriesOnTheMap from "./countries-on-the-map/series.js";
import chess from "./chess/series.js";

const categories = {
  "countries-on-the-map" : {
    name: translate.countriesOnTheMap,
    shortName: translate.countriesOnTheMapShort,
    series: countriesOnTheMap
  },
  "chess": {
    name: translate.chess,
    shortName: translate.chessShort,
    series: chess
  },
};

export default categories;