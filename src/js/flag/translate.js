
import languages from "Js/languages/index.js";

/**
 * List of translation for the authentification module
 */
const translations = {

  en: {
    flagTooltip: "Language of the answer",  
  },

  fr: {
    flagTooltip: "Langage de la réponse",
  },

}


export default translations[languages.current()];

