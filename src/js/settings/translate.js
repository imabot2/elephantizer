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


    beta: "Question difficulty",
    betaLabel: "This setting allows you to choose whether the questions you had the most difficulty with will be asked more or less frequently:<ul>" +
      "<li>With a coefficient of <strong>-10</strong>, the <strong>easiest</strong> questions will be asked to you very often.</li>" +
      "<li>With a coefficient of <strong>0</strong>, the questions are drawn randomly (<strong>equiprobable</strong>).</li>" +
      "<li>With a coefficient of <strong>10</strong>, the <strong>most difficult</strong> questions will be asked very often.</li>" +
      "</ul>",

      correctionThreshold: "Correction Threshold",
      correctionThresholdLabel: "Select the <strong>memory threshold</strong> above which corrections will no longer be displayed.<ul>"+
      "<li>With a threshold of <strong>0%</strong>, the correction will <strong>never</strong> be displayed.</li>"+    
      "<li>With a threshold of <strong>100%</strong>, the correction will <strong>always</strong> be displayed.</li>"+
      "<li>With a threshold of <strong>50%</strong>, the correction will only be displayed if your memorization score is <strong>below 50%</strong>.</li>"+
      "</ul>",


    correctionDelay: "Correction Delay",
    correctionDelayLabel: "You can delay <strong>the display of help</strong>. This delay is the time between a mistyped letter and the correction being displayed.",
    correctionDelay0: "0s",
    correctionDelay1000: "1s",
    correctionDelay2000: "2s",
    correctionDelay5000: "5s",
    correctionDelay10000: "10s",


  
    rightAnswerDuration: "Final Answer",
    rightAnswerDurationLabel: "Select how long the <strong>expected response</strong> is displayed when you have submitted a wrong answer.",
    rightAnswerDuration500: "0.5s",
    rightAnswerDuration1000: "1s",
    rightAnswerDuration1500: "1.5s",
    rightAnswerDuration2000: "2s",
    rightAnswerDuration2500: "2.5s",
    rightAnswerDuration3000: "3s",


    resultsAnimationDuration: "Results Animation",
    resultsAnimationDurationLabel: "Select animation duration when the results are shown.",
    resultsAnimationDuration0ms: "Off",
    resultsAnimationDuration500ms: "500ms",
    resultsAnimationDuration750ms: "750ms",
    resultsAnimationDuration1000ms: "1s",


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


    beta: "Difficulté des questions ",
    betaLabel: "Ce paramètre permet de choisir si les questions où vous avez eu le plus de difficulté vous seront posées plus ou moins fréquemment :<ul>" +
      "<li>Avec un coefficient de <strong>-10</strong>, les questions les <strong>plus faciles</strong> vous seront très souvent posées.</li>" +
      "<li>Avec un coefficient de <strong>0</strong>, les questions sont tirées au hasard (</strong>équiprobable</strong>).</li>" +
      "<li>Avec un coefficient de <strong>10</strong>, les questions les <strong>plus difficiles</strong> seront très souvent posées.</li>" +
      "</ul>",


    correctionThreshold: "Seuil de correction",
    correctionThresholdLabel: "Sélectionnez le <strong>seuil de mémorisation</strong> à partir duquel les corrections ne s'afficheront plus.<ul>"+
    "<li>Avec un seuil de <strong>0%</strong>, la correction ne s'affichera <strong>jamais</strong>.</li>"+    
    "<li>Avec un seuil de <strong>100%</strong>, la correction s'affichera <strong>toujours</strong>.</li>"+
    "<li>Avec un seuil de <strong>50%</strong>, la correction ne s'affichera que si votre score de mémorisation est <strong>inférieur à 50%</strong>.</li>"+
    "</ul>",

    correctionDelay: "Délai avant correction",
    correctionDelayLabel: "Vous pouvez retarder <strong>l'affichage de l'aide</strong>. Ce délai correspond à la durée entre la saisie d'une lettre erronée et l'affichage de la correction.",
    correctionDelay0: "0s",
    correctionDelay1000: "1s",
    correctionDelay2000: "2s",
    correctionDelay5000: "5s",
    correctionDelay10000: "10s",


    rightAnswerDuration: "Réponse finale",
    rightAnswerDurationLabel: "Sélectionnez la durée d'affichage de la <strong>solution attendue</strong> lorsque vous avez soumis une réponse erronée.",
    rightAnswerDuration500: "0,5s",
    rightAnswerDuration1000: "1s",
    rightAnswerDuration1500: "1,5s",
    rightAnswerDuration2000: "2s",
    rightAnswerDuration2500: "2,5s",
    rightAnswerDuration3000: "3s",


    resultsAnimationDuration: "Animation des résulats",
    resultsAnimationDurationLabel: "Sélectionnez la durée de l'animation lorsque les résultats sont affichés.",
    resultsAnimationDuration0ms: "Off",
    resultsAnimationDuration500ms: "500ms",
    resultsAnimationDuration750ms: "750ms",
    resultsAnimationDuration1000ms: "1s",

    error5000: 'Erreur 5000',
    error5000Message: "Une erreur inconnue s'est produite lors de la sauvegarde de vos paramètres. Veuillez vérifier votre connexion internet ou réessayer plus tard.",

    error5001: 'Erreur 5001',
    error5001Message: "Une erreur inconnue s'est produite lors de l'écoute en temps réel de vos paramètres. Veuillez vérifier votre connexion internet ou réessayer plus tard.",

    error5002: 'Erreur 5002',
    error5002Message: "Une erreur inconnue s'est produite lors du téléchargement de vos paramètres. Veuillez vérifier votre connexion internet ou réessayer plus tard.",
  },

}


export default translations[languages.current()];

