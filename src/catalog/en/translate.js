import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    geography: 'Geography',
    geographyShort: 'Geography',
    foreignLanguages: 'Foreign Languages',
    foreignLanguagesShort: 'Foreign Languages',
    mathematics: 'Mathematics',
    mathematicsShort: 'Mathematics',
    telecommunications: 'Telecommunications',
    telecommunicationsShort: 'Telecommunications',
  },

  fr: {
    geography: 'Géographie',
    geographyShort: 'Géographie',
    foreignLanguages: 'Langues étrangères',
    foreignLanguagesShort: 'Langues étrangères',
    mathematics: 'Mathématiques en anglais',
    mathematicsShort: 'Mathématiques',
    telecommunications: 'Télécommunications en anglais',
    telecommunicationsShort: 'Télécommunications',
  },
}

export default translations[languages.current()];

