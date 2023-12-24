import "Catalog/catalog.css";
import "Catalog/en/english-language/colors/style.css";

// Target language of the test
export var metaData = {

  // Quiz flag
  flag: "/static/circle-flags/fr.svg",

  // Special characters for this test
  specialCharacters: ['é', 'à', 'è', 'ê', 'ô', 'û', 'â', 'î', 'ü', 'ù', 'ë', 'œ', 'ç', 'ï', 'É', 'À', 'È', 'Ê', 'Ô', 'Û', 'Â', 'Î', 'Ü', 'Ù', 'Ë', 'Œ', 'Ç', 'Ï'],
}


export var cards = {
  'white': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:white;"></div>White',
    prompt: 'Translate in French?',
    answer: 'blanc'
  },
  'beige': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:beige;"></div>Beige',
    prompt: 'Translate in French?',
    answer: 'beige'
  },
  'pink': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:pink;"></div>Pink',
    prompt: 'Translate in French?',
    answer: 'rose'
  },
  'mauve': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:mediumorchid;"></div>Mauve',
    prompt: 'Translate in French?',
    answer: 'mauve'
  },
  'red': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:red;"></div>Red',
    prompt: 'Translate in French?',
    answer: 'rouge'
  },
  'purple': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:purple;"></div>Purple',
    prompt: 'Translate in French?',
    answer: 'violet'
  },
  'brown': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:brown;"></div>Brown',
    prompt: 'Translate in French?',
    answer: 'marron'
  },
  'golden': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:gold;"></div>Golden',
    prompt: 'Translate in French?',
    answer: 'doré'
  },
  'orange': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:orange;"></div>Orange',
    prompt: 'Translate in French?',
    answer: 'orange'
  },
  'yellow': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:yellow;"></div>Yellow',
    prompt: 'Translate in French?',
    answer: 'jaune'
  },
  'green': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:green;"></div>Green',
    prompt: 'Translate in French?',
    answer: 'vert'
  },
  'turquoise': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:turquoise;"></div>Turquoise',
    prompt: 'Translate in French?',
    answer: 'turquoise'
  },
  'blue': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:blue;"></div>Blue',
    prompt: 'Translate in French?',
    answer: 'bleu'
  },
  'navy': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:navy;"></div>Navy Blue',
    prompt: 'Translate in French?',
    answer: 'bleu marine'
  },
  'silver': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:silver;"></div>Silver',
    prompt: 'Translate in French?',
    answer: 'argent'
  },
  'gray': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:gray;"></div>Gray',
    prompt: 'Translate in French?',
    answer: 'gris'
  },
  'black': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:black;"></div>Black',
    prompt: 'Translate in French?',
    answer: 'noir'
  }
};