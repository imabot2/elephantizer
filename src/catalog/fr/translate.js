import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    geographie: 'Geography in French',
    geographieShort: 'Geography',
    langueFrancaise: 'French Language',
    langueFrancaiseShort: 'French Language',
    languesEtrangeres: 'Foreign Languages in French',
    languesEtrangeresShort: 'Foreign Languages',
    mathematiques: 'Mathematics in French',
    mathematiquesShort: 'Mathematics',
    telecommunications: 'Telecommunications in French',
    telecommunicationsShort: 'Telecommunications',
  },

  fr: {
    geographie: 'Géographie',
    geographieShort: 'Géographie',
    langueFrancaise: 'Langue française',
    langueFrancaiseShort: 'Langue française',
    languesEtrangeres: 'Langues étrangères',
    languesEtrangeresShort: 'Langues étrangères',
    mathematiques: 'Mathématiques',
    mathematiquesShort: 'Mathématiques',
    telecommunications: 'Télécommunications',
    telecommunicationsShort: 'Télécommunications',
  },
}

export default translations[languages.current()];

