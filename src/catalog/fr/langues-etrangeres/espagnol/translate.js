import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    lesCouleurs: 'Colors in Spanish',
    lesCouleursShort: 'Colors',
    lesJoursDeLaSemaine: 'Days of the week in Spanish',
    lesJoursDeLaSemaineShort: 'Days',
    lesMoisDeLAnnee: 'Months in Spanish',
    lesMoisDeLAnneeShort: 'Months',
  },


  fr: {
    lesCouleurs: 'Les couleurs en espagnol',
    lesCouleursShort: 'Les couleurs',
    lesJoursDeLaSemaine: 'Les jours de la semaine en espagnol',
    lesJoursDeLaSemaineShort: 'Les jours',
    lesMoisDeLAnnee: "Les mois de l'année en espagnol",
    lesMoisDeLAnneeShort: "Les mois de l'année",
  },
}

export default translations[languages.current()];

