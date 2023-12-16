import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    parDefinition: 'French figures of speech by definition',
    parDefinitionShort: 'By definition',
    parLExemple: 'French figures of speech by definition',
    parLExempleShort: 'By definition',
  },

  fr: {
    parDefinition: "Les figures de style par définition",    
    parDefinitionShort: "Par définition",
    parLExemple: "Les figures de style par l'exemple",
    parLExempleShort: "Par l'exemple",
    
  },
}

export default translations[languages.current()];

