import translate from './translate.js';
import countryCode from "./country-codes/series.js";


const categories = {
  "country-codes" : {
    name: translate.isoCountryCode,
    series: countryCode,
  },
};

export default categories;