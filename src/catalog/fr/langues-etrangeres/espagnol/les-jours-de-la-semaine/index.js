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
  'lundi': {
    type: 'text',
    question: 'lundi',
    prompt: 'Ce jour en espagnol ?',
    answer: 'lunes'
  },
  'mardi': {
    type: 'text',
    question: 'mardi',
    prompt: 'Ce jour en espagnol ?',
    answer: 'martes'
  },
  'mercredi': {
    type: 'text',
    question: 'mercredi',
    prompt: 'Ce jour en espagnol ?',
    answer: 'miércoles'
  },
  'jeudi': {
    type: 'text',
    question: 'jeudi',
    prompt: 'Ce jour en espagnol ?',
    answer: 'jueves'
  },
  'vendredi': {
    type: 'text',
    question: 'vendredi',
    prompt: 'Ce jour en espagnol ?',
    answer: 'viernes'
  },
  'samedi': {
    type: 'text',
    question: 'samedi',
    prompt: 'Ce jour en espagnol ?',
    answer: 'sábado'
  },
  'dimanche': {
    type: 'text',
    question: 'dimanche',
    prompt: 'Ce jour en espagnol ?',
    answer: 'domingo'
  }
};