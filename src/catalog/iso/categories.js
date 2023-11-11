import translate from './translate.js';
import countryCode from "./country-codes/series.js";


const categories = {
  "country-codes" : {
    name: translate.isoCountryCode,
    shortName: translate.isoCountryCodeShort,
    series: countryCode,
  },
};

export default categories;