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
    question: '<div class="color-circle" style="background-color:white;"></div>Blanc',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'blanco'
  },
  'beige': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:beige;"></div>Beige',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'beige'
  },
  'pink': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:pink;"></div>Rose',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'rosa'
  },
  'mauve': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:mediumorchid;"></div>Mauve',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'malva'
  },
  'red': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:red;"></div>Rouge',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'rojo'
  },
  'purple': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:purple;"></div>Violet',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'morado'
  },
  'brown': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:brown;"></div>Marron',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'marrón'
  },
  'golden': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:gold;"></div>Doré',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'dorado'
  },
  'orange': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:orange;"></div>Orange',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'naranja'
  },
  'yellow': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:yellow;"></div>Jaune',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'amarillo'
  },
  'green': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:green;"></div>Vert',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'verde'
  },
  'turquoise': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:turquoise;"></div>Turquoise',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'turquesa'
  },
  'blue': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:blue;"></div>Bleu',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'azul'
  },
  'navy': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:navy;"></div>Bleu marine',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'azul marino'
  },
  'silver': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:silver;"></div>Argent',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'plateado'
  },
  'gray': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:gray;"></div>Gris',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'gris'
  },
  'black': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:black;"></div>Noir',
    prompt: 'Cette couleur en espagnol ?',
    answer: 'negro'
  },
};