import translate from "./translate.js"
import geografie from "./geografie/themes.js";

const categories = {
  "geografie" : {
    name: translate.geografie,
    shortName: translate.geografieShort,
    theme: geografie
  },
};

export default categories;
