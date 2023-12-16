import translate from "./translate.js";

const series = {
  "lowercase-alphabet" : {
    nativeName: "The lower-case Greek alphabet",
    name: translate.lowercase,
    shortName: translate.lowercaseShort,
  },
  "uppercase-alphabet" : {
    nativeName: "The upper-case Greek alphabet",
    name: translate.uppercase,
    shortName: translate.uppercaseShort,
  },
  
};

export default series;