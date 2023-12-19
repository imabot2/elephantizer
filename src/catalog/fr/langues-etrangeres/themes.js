import translate from "./translate.js";
import anglais from "./anglais/series.js";
import grec from "./grec/series.js";

const categories = {

  "anglais" : {
    name: translate.anglais,
    shortName: translate.anglaisShort,
    series: anglais
  },
  "grec" : {
    name: translate.grec,
    shortName: translate.grecShort,
    series: grec
  },
};

export default categories;