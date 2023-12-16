import translate from "./translate.js";
import radiotelephonie from "./radiotelephonie/series.js";


const categories = {

  "radiotelephonie" : {
    name: translate.radiotelephonie,
    shortName: translate.radiotelephonieShort,
    series: radiotelephonie,
  },

};

export default categories;