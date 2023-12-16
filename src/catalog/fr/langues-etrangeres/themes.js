import translate from "./translate.js";
import grec from "./grec/series.js";

const categories = {

  "grec" : {
    name: translate.grec,
    shortName: translate.grecShort,
    series: grec
  },

};

export default categories;