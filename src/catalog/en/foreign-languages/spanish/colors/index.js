import "Catalog/catalog.css";
import "Catalog/en/english-language/colors/style.css";

// Target language of the test
export var metaData = {

  // Quiz flag
  flag: "/static/circle-flags/es.svg",

  // Special characters for this test
  specialCharacters: ['á', 'é', 'í', 'ñ', 'ó', 'ú', 'ü' ,'Á', 'É', 'Í', 'Ñ', 'Ó', 'Ú', 'Ü'],
}


export var cards = {
  'white': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:white;"></div>White',
    prompt: 'Translate in Spanish?',
    answer: 'blanco'
  },
  'beige': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:beige;"></div>Beige',
    prompt: 'Translate in Spanish?',
    answer: 'beige'
  },
  'pink': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:pink;"></div>Pink',
    prompt: 'Translate in Spanish?',
    answer: 'rosa'
  },
  'mauve': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:mediumorchid;"></div>Mauve',
    prompt: 'Translate in Spanish?',
    answer: 'malva'
  },
  'red': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:red;"></div>Red',
    prompt: 'Translate in Spanish?',
    answer: 'rojo'
  },
  'purple': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:purple;"></div>Purple',
    prompt: 'Translate in Spanish?',
    answer: 'morado'
  },
  'brown': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:brown;"></div>Brown',
    prompt: 'Translate in Spanish?',
    answer: 'marrón'
  },
  'golden': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:gold;"></div>Golden',
    prompt: 'Translate in Spanish?',
    answer: 'dorado'
  },
  'orange': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:orange;"></div>Orange',
    prompt: 'Translate in Spanish?',
    answer: 'naranja'
  },
  'yellow': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:yellow;"></div>Yellow',
    prompt: 'Translate in Spanish?',
    answer: 'amarillo'
  },
  'green': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:green;"></div>Green',
    prompt: 'Translate in Spanish?',
    answer: 'verde'
  },
  'turquoise': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:turquoise;"></div>Turquoise',
    prompt: 'Translate in Spanish?',
    answer: 'turquesa'
  },
  'blue': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:blue;"></div>Blue',
    prompt: 'Translate in Spanish?',
    answer: 'azul'
  },
  'navy': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:navy;"></div>Navy Blue',
    prompt: 'Translate in Spanish?',
    answer: 'azul marino'
  },
  'silver': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:silver;"></div>Silver',
    prompt: 'Translate in Spanish?',
    answer: 'plateado'
  },
  'gray': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:gray;"></div>Gray',
    prompt: 'Translate in Spanish?',
    answer: 'gris'
  },
  'black': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:black;"></div>Black',
    prompt: 'Translate in Spanish?',
    answer: 'negro'
  }
  
};