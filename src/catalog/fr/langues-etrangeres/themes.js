import translate from "./translate.js";
import anglais from "./anglais/series.js";
import espagnol from "./espagnol/series.js";
import grec from "./grec/series.js";

const categories = {

  "anglais" : {
    name: translate.anglais,
    shortName: translate.anglaisShort,
    series: anglais
  },
  "espagnol" : {
    name: translate.espagnol,
    shortName: translate.espagnolShort,
    series: espagnol
  },
  "grec" : {
    name: translate.grec,
    shortName: translate.grecShort,
    series: grec
  },
};

export default categories;