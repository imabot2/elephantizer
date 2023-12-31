import translate from "./translate.js"
import landerAufDerKarte from "./lander-auf-der-karte/series.js";

const categories = {
  "lander-auf-der-karte" : {
    name: translate.countriesOnTheMap,
    shortName: translate.countriesOnTheMapShort,
    series: landerAufDerKarte
  },
};

export default categories;