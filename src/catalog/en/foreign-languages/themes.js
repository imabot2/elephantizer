import translate from "./translate.js"
import greek from "./greek/series.js";

const categories = {
  "greek": {
    name: translate.greek,
    shortName: translate.greekShort,
    series: greek
  },

};

export default categories;