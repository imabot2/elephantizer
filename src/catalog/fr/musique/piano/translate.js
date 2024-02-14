import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    accordsFrancaisEnAnglais: 'French to English chords',
    accordsFrancaisEnAnglaisShort: 'French to English',
    accordsAnglaisEnFrancais: 'English to French chords',
    accordsAnglaisEnFrancaisShort: 'English to French',
    accordsMajeurs: 'Major Chords',
    accordsMajeursShort: 'Major Chords',
    accordsMineurs: 'Minor Chords',
    accordsMineursShort: 'Minor Chords',
  },


  fr: {
    accordsFrancaisEnAnglais: "Les accords du français vers l'anglais",
    accordsFrancaisEnAnglaisShort:  'Français vers anglais',
    accordsAnglaisEnFrancais: "Les accords de l'anglais vers le français",
    accordsAnglaisEnFrancaisShort: 'Anglais vers français',
    accordsMajeurs: 'Les accords majeurs',
    accordsMajeursShort: 'Accords majeurs',
    accordsMineurs: 'Les accords mineurs',
    accordsMineursShort: 'Accords mineurs',

  },
}

export default translations[languages.current()];

