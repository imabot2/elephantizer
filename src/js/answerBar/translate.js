import languages from "Js/languages/index.js";

/**
 * List of translation for the authentification module
 */
const translations = {

  en: {
    submitTooltip: 'Click to submit your answer [Enter] or press space to check.',
  },

  fr: {
    submitTooltip: 'Cliquez pour soumettre votre réponse [Enter] ou appuyez sur Espace pour vérifier.',
  },

}


export default translations[languages.current()];

