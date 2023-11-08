import translate from "./translate.js";
import en from "./en/categories.js";
import de from "./de/categories.js";
import fr from "./fr/categories.js";
import iso from "./iso/categories.js";

const catalog = {
  en: {
    name: translate.english,
    category: en,
  },
  fr: {
    name: translate.french,
    category: fr,
  },
  de: {
    name: translate.german,
    category: de,
  },
  iso: {
    name: translate.iso,
    category: iso,
  },
};

export default catalog;