import translate from "./translate.js"
import accordsEnAnglais from "./les-accords-en-anglais/series.js";
import piano from "./piano/series.js";


const categories = {
  "les-accords-en-anglais" : {
    name: translate.accordsEnAnglais,
    shortName: translate.accordsEnAnglais,
    series: accordsEnAnglais,
  },
  "piano" : {
    name: translate.piano,
    shortName: translate.piano,
    series: piano,
  },

};

export default categories;