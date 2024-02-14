import "Catalog/catalog.css";

// Target language of the test
export var metaData = {

  // Quiz flag
  flag: "/static/circle-flags/gb.svg",

  // Special characters for this test
  specialCharacters: ['é', 'à', 'è', 'ê', 'ô', 'û', 'â', 'î', 'ü', 'ù', 'ë', 'œ', 'ç', 'ï', 'É', 'À', 'È', 'Ê', 'Ô', 'Û', 'Â', 'Î', 'Ü', 'Ù', 'Ë', 'Œ', 'Ç', 'Ï'],

}



export var cards = {
  //#region Table de 0
  "do": {
    type: 'text',
    question: 'do mineur',
    prompt: "Notes de l'accord ?",
    answer: "do-mi bémol-sol"
  },
  "re": {
    type: 'text',
    question: 'ré mineur',
    prompt: "Notes de l'accord ?",
    answer: "ré-fa-la"
  },
  "mi": {
    type: 'text',
    question: 'mi mineur',
    prompt: "Notes de l'accord ?",
    answer: "mi-sol-si"
  },
  "fa": {
    type: 'text',
    question: 'fa mineur',
    prompt: "Notes de l'accord ?",
    answer: "fa-la bémol-do"
  },
  "sol": {
    type: 'text',
    question: 'sol mineur',
    prompt: "Notes de l'accord ?",
    answer: "sol-si bémol-ré"
  },
  "la": {
    type: 'text',
    question: 'la mineur',
    prompt: "Notes de l'accord ?",
    answer: "la-do-mi"
  },
  "si": {
    type: 'text',
    question: 'si mineur',
    prompt: "Notes de l'accord ?",
    answer: "si-ré-fa dièse"
  },

};