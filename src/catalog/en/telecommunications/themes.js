import translate from "./translate.js"
import radiotelephony from "./radiotelephony/series.js";

const categories = {


  "radiotelephony": {
    name: translate.radiotelephony,
    shortName: translate.radiotelephonyShort,
    series: radiotelephony
  },

};

export default categories;