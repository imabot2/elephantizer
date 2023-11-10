import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    title: "Series",
    radioTooltip: 'Select only this series.<br>This will disable all others.',
    checkboxTooltip: 'Add or remove this series.',
  },

  fr: {
    title: "Séries",
    radioTooltip: 'Sélectionnez uniquement cette série.<br>Ce choix désactivera toutes les autres séries.',
    checkboxTooltip: 'Ajouter ou supprimer cette série.',
  },

}


export default translations[languages.current()];

