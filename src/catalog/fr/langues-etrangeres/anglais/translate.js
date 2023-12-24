import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    lesCouleurs: 'Colors',
    lesCouleursShort: 'Colors',
    lesNombreDe0à19: 'Numbers from 0 to 19',
    lesNombreDe0à19Short: 'Numbers (0 to 19)',
    verbesIrregulier: 'Irregular verbs part 1',
    verbesIrregulierShort: 'Irregular verbs (1)',
    verbesIrregulierConversation: 'Irregular verbs (Conversation)',
    verbesIrregulierConversationShort: 'Irregular verbs (Conversation)',
    verbesIrregulierDailyRoutine: 'Irregular verbs (Daily routine)',
    verbesIrregulierDailyRoutineShort: 'Irregular verbs (Daily routine)',
    verbesIrregulierMovement: 'Irregular verbs (Movement)',
    verbesIrregulierMovementShort: 'Irregular verbs (Movement)',
    
  },

  
  fr: {
    lesCouleurs: 'Les couleurs en anglais',
    lesCouleursShort: 'Couleurs',  
    lesNombreDe0à19: 'Les nombres en anglais de 0 à 19',
    lesNombreDe0à19Short: 'Nombres (0 to 19)',    
    verbesIrregulier: 'Les verbes irréguliers partie 1',
    verbesIrregulierShort: 'Verbes irréguliers (1)',
    verbesIrregulierConversation: 'Verbes irréguliers (Conversation)',
    verbesIrregulierConversationShort: 'Verbes irréguliers (Conversation)',
    verbesIrregulierDailyRoutine: 'Verbes irréguliers (Daily routine)',
    verbesIrregulierDailyRoutineShort: 'Verbes irréguliers (Daily routine)',
    verbesIrregulierMovement: 'Verbes irréguliers (Movement)',
    verbesIrregulierMovementShort: 'Verbes irréguliers (Movement)',
  },
}

export default translations[languages.current()];

