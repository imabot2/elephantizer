import "Catalog/catalog.css";
import "Catalog/en/english-language/colors/style.css";

// Target language of the test
export var metaData = {

  // Quiz flag
  flag: "/static/circle-flags/es.svg",

  // Special characters for this test
  specialCharacters: ['á', 'é', 'í', 'ñ', 'ó', 'ú', 'ü', 'Á', 'É', 'Í', 'Ñ', 'Ó', 'Ú', 'Ü'],
}


export var cards = {
  'janvier': {
    type: 'text',
    question: 'janvier',
    prompt: 'Ce mois en espagnol ?',
    answer: 'enero'
  },
  'fevrier': {
    type: 'text',
    question: 'février',
    prompt: 'Ce mois en espagnol ?',
    answer: 'febrero'
  },
  'mars': {
    type: 'text',
    question: 'mars',
    prompt: 'Ce mois en espagnol ?',
    answer: 'marzo'
  },
  'avril': {
    type: 'text',
    question: 'avril',
    prompt: 'Ce mois en espagnol ?',
    answer: 'abril'
  },
  'mai': {
    type: 'text',
    question: 'mai',
    prompt: 'Ce mois en espagnol ?',
    answer: 'mayo'
  },
  'juin': {
    type: 'text',
    question: 'juin',
    prompt: 'Ce mois en espagnol ?',
    answer: 'junio'
  },
  'juillet': {
    type: 'text',
    question: 'juillet',
    prompt: 'Ce mois en espagnol ?',
    answer: 'julio'
  },
  'aout': {
    type: 'text',
    question: 'août',
    prompt: 'Ce mois en espagnol ?',
    answer: 'agosto'
  },
  'septembre': {
    type: 'text',
    question: 'septembre',
    prompt: 'Ce mois en espagnol ?',
    answer: 'septiembre'
  },
  'octobre': {
    type: 'text',
    question: 'octobre',
    prompt: 'Ce mois en espagnol ?',
    answer: 'octubre'
  },
  'novembre': {
    type: 'text',
    question: 'novembre',
    prompt: 'Ce mois en espagnol ?',
    answer: 'noviembre'
  },
  'decembre': {
    type: 'text',
    question: 'décembre',
    prompt: 'Ce mois en espagnol ?',
    answer: 'diciembre'
  }
};