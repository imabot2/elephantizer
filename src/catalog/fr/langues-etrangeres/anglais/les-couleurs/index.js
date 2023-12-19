import "Catalog/catalog.css";
import "Catalog/en/english-language/colors/style.css";

// Target language of the test
export var metaData = {

  // Quiz flag
  flag: "/static/circle-flags/gb.svg",

  // Special characters for this test
  specialCharacters: ['é', 'à', 'è', 'ê', 'ô', 'û', 'â', 'î', 'ü', 'ù', 'ë', 'œ', 'ç', 'ï', 'É', 'À', 'È', 'Ê', 'Ô', 'Û', 'Â', 'Î', 'Ü', 'Ù', 'Ë', 'Œ', 'Ç', 'Ï'],
}


export var cards = {
  'white': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:white;"></div>Blanc',
    prompt: 'Cette couleur en anglais ?',
    answer: 'white'
  },
  'beige': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:beige;"></div>Beige',
    prompt: 'Cette couleur en anglais ?',
    answer: 'beige'
  },
  'pink': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:pink;"></div>Rose',
    prompt: 'Cette couleur en anglais ?',
    answer: 'pink'
  },
  'mauve': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:mediumorchid;"></div>Mauve',
    prompt: 'Cette couleur en anglais ?',
    answer: 'mauve'
  },
  'red': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:red;"></div>Rouge',
    prompt: 'Cette couleur en anglais ?',
    answer: 'red'
  },
  'purple': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:purple;"></div>Violet',
    prompt: 'Cette couleur en anglais ?',
    answer: 'purple'
  },
  'brown': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:brown;"></div>Marron',
    prompt: 'Cette couleur en anglais ?',
    answer: 'brown'
  },
  'golden': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:gold;"></div>Doré',
    prompt: 'Cette couleur en anglais ?',
    answer: 'golden'
  },
  'orange': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:orange;"></div>Orange',
    prompt: 'Cette couleur en anglais ?',
    answer: 'orange'
  },
  'yellow': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:yellow;"></div>Jaune',
    prompt: 'Cette couleur en anglais ?',
    answer: 'yellow'
  },
  'green': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:green;"></div>Vert',
    prompt: 'Cette couleur en anglais ?',
    answer: 'green'
  },
  'turquoise': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:turquoise;"></div>Turquoise',
    prompt: 'Cette couleur en anglais ?',
    answer: 'turquoise'
  },
  'blue': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:blue;"></div>Bleu',
    prompt: 'Cette couleur en anglais ?',
    answer: 'blue'
  },
  'navy': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:navy;"></div>Bleu marine',
    prompt: 'Cette couleur en anglais ?',
    answer: 'navy blue'
  },
  'silver': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:silver;"></div>Argent',
    prompt: 'Cette couleur en anglais ?',
    answer: 'silver'
  },
  'gray': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:gray;"></div>Gris',
    prompt: 'Cette couleur en anglais ?',
    answer: 'gray'
  },
  'black': {
    type: 'text',
    question: '<div class="color-circle" style="background-color:black;"></div>Noir',
    prompt: 'Cette couleur en anglais ?',
    answer: 'black'
  },
};