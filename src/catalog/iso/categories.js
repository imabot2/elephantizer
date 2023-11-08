import translate from './translate.js';
import countryCode from "./country-codes/list.js";


const categories = {
  "country-codes" : {
    name: translate.isoCountryCode,
    list: countryCode,
  },
};

export default categories;