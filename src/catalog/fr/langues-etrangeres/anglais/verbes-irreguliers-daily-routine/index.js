import "Catalog/catalog.css";
import "Catalog/en/english-language/irregular-verbs/style.css";

// Target language of the test
export var metaData = {

  // Quiz flag
  flag: "/static/circle-flags/gb.svg",

  // Special characters for this test
  specialCharacters: ['é', 'à', 'è', 'ê', 'ô', 'û', 'â', 'î', 'ü', 'ù', 'ë', 'œ', 'ç', 'ï', 'É', 'À', 'È', 'Ê', 'Ô', 'Û', 'Â', 'Î', 'Ü', 'Ù', 'Ë', 'Œ', 'Ç', 'Ï'],


}

export var cards = {
  'find-en2fr': {
    type: 'text',
    question: 'to find',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'found found trouver'
  },
  'find-fr2en': {
    type: 'text',
    question: 'trouver',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'find found found'
  },
  'set-en2fr': {
    type: 'text',
    question: 'to set',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'set set fixer'
  },
  'set-fr2en': {
    type: 'text',
    question: 'fixer',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'set set set'
  },
  'light-en2fr': {
    type: 'text',
    question: 'to light',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'lit lit éclairer'
  },
  'light-fr2en': {
    type: 'text',
    question: 'éclairer',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'light lit lit'
  },
  'hold-en2fr': {
    type: 'text',
    question: 'to hold',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'held held tenir'
  },
  'hold-fr2en': {
    type: 'text',
    question: 'tenir',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'hold held held'
  },
  'dream-en2fr': {
    type: 'text',
    question: 'to dream',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'dreamt dreamt rêver'
  },
  'dream-fr2en': {
    type: 'text',
    question: 'rêver',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'dream dreamt dreamt'
  },
  'rise-en2fr': {
    type: 'text',
    question: 'to rise',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: "rose risen s'élever"
  },
  'rise-fr2en': {
    type: 'text',
    question: "s'élever",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'rise rose risen'
  },
  'sleep-en2fr': {
    type: 'text',
    question: 'to sleep',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'slept slept dormir'
  },
  'sleep-fr2en': {
    type: 'text',
    question: 'dormir',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'sleep slept slept'
  },
  'sit-en2fr': {
    type: 'text',
    question: 'to sit',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: "sat sat s'asseoir"
  },
  'sit-fr2en': {
    type: 'text',
    question: "s'asseoir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'sit sat sat'
  },
  'lay-en2fr': {
    type: 'text',
    question: 'to lay',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'laid laid poser'
  },
  'lay-fr2en': {
    type: 'text',
    question: 'poser',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'lay laid laid'
  },
  'wake-en2fr': {
    type: 'text',
    question: 'to wake',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'woke woken se réveiller'
  },
  'wake-fr2en': {
    type: 'text',
    question: 'se réveiller',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'wake woke woken'
  },
  'lie-en2fr': {
    type: 'text',
    question: 'to lie (in bed)',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: "lay lain s'allonger"
  },
  'lie-fr2en': {
    type: 'text',
    question: "s'allonger",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'lie lay lain'
  },
  'shut-en2fr': {
    type: 'text',
    question: 'to shut',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'shut shut fermer'
  },
  'shut-fr2en': {
    type: 'text',
    question: 'fermer (éteindre)',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'shut shut shut'
  }
};