import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    title: "Settings",


    learningMode: "Learning Mode",
    learningModeLabel:
      "In <strong>typing mode</strong>, you type the answer on the keyboard.<br>" +
      "In <strong>Card mode</strong>, you simply validate whether the answer is correct or not.",
    typingMode: "Typing",
    cardMode: "Cards",


    timerMode: "Timer Mode",
    timerModeLabel:
      "In <strong>Timer</strong> mode, results are displayed at the end of the stopwatch.<br>" +
      "In <strong>Infinite</strong> mode, you stop the test whenever you want.<br>" +
      "In <strong>Series</strong> mode, the test ends when you've completed a full series.",
    downMode: "Timer",
    upMode: "Infinite",
    seriesMode: "Series",


    duration: "Duration",
    durationLabel: "Select memory test duration.",
    duration30s: "30s",
    duration60s: "60s",
    duration2min: "2min",
    duration5min: "5min",


    caseInsensitive: "Case Insensitive",
    caseInsensitiveLabel: "When this mode is activated, there is no difference between <strong>upper</strong> and <strong>lower case</strong>. When disabled, the answers are case sensitive.",
    caseInsensitiveTrue: "On",
    caseInsensitiveFalse: "Off",

    ignoreAccents: "Ignore Accents",
    ignoreAccentsLabel: "When this mode is activated, accented letters (é, ê, ñ, ö ...) can be replaced by the same letter <strong>without accent</strong>.",
    ignoreAccentsTrue: "On",
    ignoreAccentsFalse: "Off",

    ignoreHyphens: "Ignore Hyphens",
    ignoreHyphensLabel: "When this mode is activated, <strong>hyphens</strong> are ignored and can be replaced by <strong>spaces</strong>.",
    ignoreHyphensTrue: "On",
    ignoreHyphensFalse: "Off",


    rightAnswerDuration: "Right Answer Duration",
    rightAnswerDurationLabel: "Select how long the correct answer is displayed.",
    rightAnswerDuration500: "0.5s",
    rightAnswerDuration1000: "1s",
    rightAnswerDuration1500: "1.5s",
    rightAnswerDuration2000: "2s",
    rightAnswerDuration2500: "2.5s",
    rightAnswerDuration3000: "3s",


    error5000: 'Error #5000',
    error5000Message: 'An unknow error occurred while saving your settings. Please check your internet connection or try again later.',

    error5001: 'Error #5001',
    error5001Message: 'An unknow error occurred while real time listening your settings. Please check your internet connection or try again later.',

    error5002: 'Error #5002',
    error5002Message: 'An unknow error occurred while downloading your settings. Please check your internet connection or try again later.',
  },



  fr: {
    title: "Paramètres",


    learningMode: "Mode d'apprentissage",
    learningModeLabel:
      "Dans le mode <strong>Clavier</strong>, vous tapez la réponse au clavier.<br>" +
      "Dans le mode <strong>Cartes</strong>, vous validez simplement si la réponse est correcte ou non.",
    typingMode: "Clavier",
    cardMode: "Cartes",


    timerMode: "Timer Mode",
    timerModeLabel:
      "Dans le mode <strong>Chrono</strong>, les résulats s'affichent à la fin du chronomètre.<br>" +
      "Dans le mode <strong>Infini</strong>, vous arrêtez le test quand vous le souhaitez.<br>" +
      "Dans le mode <strong>Série</strong>, le test se termine quand vous avez fait une série complète.",
    downMode: "Chrono",
    upMode: "Infini",
    seriesMode: "Série",


    duration: "Durée",
    durationLabel: "Sélection de la durée du test de mémorisation.",
    duration30s: "30s",
    duration60s: "60s",
    duration2min: "2min",
    duration5min: "5min",


    caseInsensitive: "Sans majuscules",
    caseInsensitiveLabel: "Lorsque ce mode est activé, il n'y a pas de différence entre les <strong>majuscules</strong> et les <strong>minuscules</strong>. Lorsqu'il est désactivé, les réponses sont sensibles à la casse.",
    caseInsensitiveTrue: "On",
    caseInsensitiveFalse: "Off",

    ignoreAccents: "Sans accents",
    ignoreAccentsLabel: "Lorsque ce mode est activé, les lettres accentées (é, è, ê, à ...) peuvent être remplacées par la même lettre <strong>sans accent</strong>.",
    ignoreAccentsTrue: "On",
    ignoreAccentsFalse: "Off",

    ignoreHyphens: "Sans traits d'union",
    ignoreHyphensLabel: "Quand ce mode est activé, les <strong>traits d'union</strong> sont ignorés et peuvent être remplacés par des <strong>espaces</strong>.",
    ignoreHyphensTrue: "On",
    ignoreHyphensFalse: "Off",

    rightAnswerDuration: "Durée de la réponse",
    rightAnswerDurationLabel: "Sélectionnez la durée d'affichage de la bonne réponse.",
    rightAnswerDuration500: "0,5s",
    rightAnswerDuration1000: "1s",
    rightAnswerDuration1500: "1,5s",
    rightAnswerDuration2000: "2s",
    rightAnswerDuration2500: "2,5s",
    rightAnswerDuration3000: "3s",
    
    error5000: 'Erreur 5000',
    error5000Message: "Une erreur inconnue s'est produite lors de la sauvegarde de vos paramètres. Veuillez vérifier votre connexion internet ou réessayer plus tard.",

    error5001: 'Erreur 5001',
    error5001Message: "Une erreur inconnue s'est produite lors de l'écoute en temps réel de vos paramètres. Veuillez vérifier votre connexion internet ou réessayer plus tard.",

    error5002: 'Erreur 5002',
    error5002Message: "Une erreur inconnue s'est produite lors du téléchargement de vos paramètres. Veuillez vérifier votre connexion internet ou réessayer plus tard.",
  },

}


export default translations[languages.current()];

