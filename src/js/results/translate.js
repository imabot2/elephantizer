import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    scoreTitle: "Score",
    memorizationTitle: "Memorization",
    memorizationPieChartMainTooltips: "Memorization Score",
    memorizationPieChartRoomProgressTooltip: "Room For Progress",
  },

  fr: {
    scoreTitle: "Score",
    memorizationTitle: "Mémorisation",
    memorizationPieChartMainTooltips: "Score de mémorisation",
    memorizationPieChartRoomProgressTooltip: "Marge de progression",
  },

}


export default translations[languages.current()];

