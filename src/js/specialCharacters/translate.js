
import languages from "Js/languages/index.js";

/**
 * List of translation for the authentification module
 */
const translations = {

  en: {
    btnTooltip: "Click or press [Tab] to insert special characters.",
    btnTooltipDisabled: "There is no special characters for this test.",
   
  },

  fr: {
    btnTooltip: "Clickez ou appuyez sur [Tab] pour insérer des caractères spéciaux.",
    btnTooltipDisabled: "Il n'y a pas de caractères spéciaux pour ce test.",
  },

}


export default translations[languages.current()];

