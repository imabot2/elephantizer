import translate from "./translate.js"
import landerAufDerKarte from "./lander-auf-der-karte/list.js";

const categories = {
  "lander-auf-der-karte" : {
    name: translate.countriesOnTheMap,
    list: landerAufDerKarte
  },
};

export default categories;