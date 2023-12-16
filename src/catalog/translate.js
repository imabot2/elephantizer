import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    english: "🇬🇧 English",
    englishShort: "🇬🇧",
    french: "🇨🇵 French",
    frenchShort: "🇨🇵",
    german: "🇩🇪 German",
    germanShort: "🇩🇪",
    iso: "ISO Norm",
  },

  fr: {
    english: "🇬🇧 Anglais",
    englishShort: "🇬🇧",
    french: "🇨🇵 Français",
    frenchShort: "🇨🇵",
    german: "🇩🇪 Allemand",
    germanShort: "🇩🇪",
    iso: "Norme ISO",
  },
}

export default translations[languages.current()];

