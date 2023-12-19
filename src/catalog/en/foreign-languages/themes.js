import translate from "./translate.js"
import french from "./french/series.js";
import greek from "./greek/series.js";

const categories = {
  "french": {
    name: translate.french,
    shortName: translate.frenchShort,
    series: french
  },
  "greek": {
    name: translate.greek,
    shortName: translate.greekShort,
    series: greek
  },

};

export default categories;