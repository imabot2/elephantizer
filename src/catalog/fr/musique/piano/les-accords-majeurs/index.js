import "Catalog/catalog.css";

// Target language of the test
export var metaData = {

  // Quiz flag
  flag: "/static/circle-flags/fr.svg",

  // Special characters for this test
  specialCharacters: ['é', 'à', 'è', 'ê', 'ô', 'û', 'â', 'î', 'ü', 'ù', 'ë', 'œ', 'ç', 'ï', 'É', 'À', 'È', 'Ê', 'Ô', 'Û', 'Â', 'Î', 'Ü', 'Ù', 'Ë', 'Œ', 'Ç', 'Ï'],

}



export var cards = {
  //#region Table de 0
  "do": {
    type: 'text',
    question: 'do',
    prompt: "Notes de l'accord ?",
    answer: "do-mi-sol"
  },
  "re": {
    type: 'text',
    question: 'ré',
    prompt: "Notes de l'accord ?",
    answer: "ré-fa dièse-la"
  },
  "mi": {
    type: 'text',
    question: 'mi',
    prompt: "Notes de l'accord ?",
    answer: "mi-sol dièse-si"
  },
  "fa": {
    type: 'text',
    question: 'fa',
    prompt: "Notes de l'accord ?",
    answer: "fa-la-do"
  },
  "sol": {
    type: 'text',
    question: 'sol',
    prompt: "Notes de l'accord ?",
    answer: "sol-si-ré"
  },
  "la": {
    type: 'text',
    question: 'la',
    prompt: "Notes de l'accord ?",
    answer: "la-do dièse-mi"
  },
  "si": {
    type: 'text',
    question: 'si',
    prompt: "Notes de l'accord ?",
    answer: "si-ré dièse-fa dièse"
  },

};