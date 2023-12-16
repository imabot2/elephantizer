import translate from "./translate.js"
import foreignLanguages from "./foreign-languages/themes.js";
import geography from "./geography/themes.js";
import mathematics from "./mathematics/themes.js";
import telecommunications from "./telecommunications/themes.js";

const categories = {

  "foreign-languages": {
    name: translate.foreignLanguages,
    shortName: translate.foreignLanguagesShort,
    theme: foreignLanguages,
  },
  "geography": {
    name: translate.geography,
    shortName: translate.geographyShort,
    theme: geography,
  },
  "mathematics": {
    name: translate.mathematics,
    shortName: translate.mathematicsShort,
    theme: mathematics
  },
  "telecommunications": {
    name: translate.telecommunications,
    shortName: translate.telecommunications,
    theme: telecommunications
  },

};

export default categories;