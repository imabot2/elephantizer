import translate from "./translate.js";
import en from "./en/categories.js";
import de from "./de/categories.js";
import fr from "./fr/categories.js";


const catalog = {
  en: {
    name: translate.english,
    shortName: translate.englishShort,
    category: en,
  },
  fr: {
    name: translate.french,
    shortName: translate.frenchShort,
    category: fr,
  },
  de: {
    name: translate.german,
    shortName: translate.germanShort,
    category: de,
  },

};

export default catalog;