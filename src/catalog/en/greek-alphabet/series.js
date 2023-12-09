import translate from "./translate.js";

const series = {
  "lowercase" : {
    nativeName: "The lower-case Greek alphabet",
    name: translate.lowercase,
    shortName: translate.lowercaseShort,
  },
  "uppercase" : {
    nativeName: "The upper-case Greek alphabet",
    name: translate.uppercase,
    shortName: translate.uppercaseShort,
  },
  
};

export default series;