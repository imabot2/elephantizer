import translate from "./translate.js";
import figuresDeStyle from "./figures-de-style/series.js";



const categories = {

  "figures-de-style" : {
    name: translate.figuresDeStyle,
    shortName: translate.figuresDeStyleShort,
    series: figuresDeStyle
  },

};

export default categories;