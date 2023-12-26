import translate from "./translate.js"
import french from "./french/series.js";
import greek from "./greek/series.js";
import spanish from "./spanish/series.js";

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
  "spanish": {
    name: translate.spanish,
    shortName: translate.spanishShort,
    series: spanish
  },
};

export default categories;