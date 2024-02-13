import translate from "./translate.js";
import geographie from "./geographie/themes.js";
import langueFrancaise from "./langue-francaise/themes.js";
import languesEtrangeres from "./langues-etrangeres/themes.js";
import mathematiques from "./mathematiques/themes.js";
import musique from "./musique/themes.js";
import telecommunications from "./telecommunications/themes.js";


const categories = {

  "geographie" : {
    name: translate.geographie,
    shortName: translate.geographieShort,
    theme: geographie
  },
  "langue-francaise" : {
    name: translate.langueFrancaise,
    shortName: translate.langueFrancaiseShort,
    theme: langueFrancaise
  },
  "langues-etrangeres" : {
    name: translate.languesEtrangeres,
    shortName: translate.languesEtrangeresShort,
    theme: languesEtrangeres
  },
  "mathematiques" : {
    name: translate.mathematiques,
    shortName: translate.mathematiquesShort,
    theme: mathematiques
  },
  "musique" : {
    name: translate.musique,
    shortName: translate.musique,
    theme: musique
  },
  "telecommunications" : {
    name: translate.telecommunications,
    shortName: translate.telecommunicationsShort,
    theme: telecommunications
  },
};

export default categories;