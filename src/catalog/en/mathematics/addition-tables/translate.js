import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    tables0to5: 'O to 5 Addition Tables',
    tables0to5Short: 'O to 5 Tables',
    tables6to10: '6 to 10 Addition Tables',
    tables6to10Short: '6 to 10 Tables',
    invertedTables0to5: '0 to 5 Inverted Addition Tables',
    invertedTables0to5Short: '0 to 5 Inverted Tables',
    invertedTables6to10: '6 to 10 Inverted Addition Tables',
    invertedTables6to10Short: '6 to 10 Inverted Tables',
  },



  fr: {
    tables0to5: "Tables d'addition de 0 à 5",
    tables0to5Short: 'Tables de 0 à 5',
    tables6to10: "Tables d'addition de 6 à 10",
    tables6to10Short: 'Tables de 6 à 10',
    invertedTables0to5: "Tables d'addition inversée de 0 à 5",
    invertedTables0to5Short: 'Tables inversées de 0 à 5',
    invertedTables6to10: "Tables d'addition inversée de 6 à 10",
    invertedTables6to10Short: 'Tables inversées de 6 à 10',

  },
}

export default translations[languages.current()];

