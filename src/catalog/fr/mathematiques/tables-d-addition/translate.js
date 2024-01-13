import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    tablesDe0a5: '0 to 5 Addition Tables',
    tablesDe0a5Short: '0 to 5 Tables',
    tablesDe6a10: '6 to 10 Addition Tables',
    tablesDe6a10Short: '6 to 10 Tables',
    tablesInverseesDe0a5: '0 to 5 Inverted Addition Tables',
    tablesInverseesDe0a5Short: '0 to 5 Inverted Tables',
    tablesInverseesDe6a10: '6 to 10 Inverted Addition Tables',
    tablesInverseesDe6a10Short: '6 to 10 Inverted Tables',
  },


  fr: {
    tablesDe0a5: "Tables d'additions de 0 à 5",
    tablesDe0a5Short: "Tables de 0 à 5",
    tablesDe6a10: "Tables d'addition de 6 à 10",
    tablesDe6a10Short: 'Tables de 6 à 10',
    tablesInverseesDe0a5: "Tables d'addition inversée de 0 à 5",
    tablesInverseesDe0a5Short: 'Tables inversées de 0 à 5',
    tablesInverseesDe6a10: "Tables d'addition inversée de 6 à 10",
    tablesInverseesDe6a10Short: 'Tables inversées de 6 à 10',
  },
}

export default translations[languages.current()];

