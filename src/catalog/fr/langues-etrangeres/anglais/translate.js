import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    lesCouleurs: 'Colors',
    lesCouleursShort: 'Colors',
    verbesIrregulier: 'Irregular verbs part 1',
    verbesIrregulierShort: 'Irregular verbs (1)',
    verbesIrregulierDailyRoutine: 'Irregular verbs (Daily routine)',
    verbesIrregulierDailyRoutineShort: 'Irregular verbs (Daily routine)',
    verbesIrregulierMovement: 'Irregular verbs (Movement)',
    verbesIrregulierMovementShort: 'Irregular verbs (Movement)',
    
  },

  
  fr: {
    lesCouleurs: 'Les couleurs en anglais',
    lesCouleursShort: 'Les couelurs',  
    verbesIrregulier: 'Les verbes irréguliers partie 1',
    verbesIrregulierShort: 'Verbes irréguliers (1)',
    verbesIrregulierDailyRoutine: 'Verbes irréguliers (Daily routine)',
    verbesIrregulierDailyRoutineShort: 'Verbes irréguliers (Daily routine)',
    verbesIrregulierMovement: 'Verbes irréguliers (Movement)',
    verbesIrregulierMovementShort: 'Verbes irréguliers (Movement)',
  },
}

export default translations[languages.current()];

