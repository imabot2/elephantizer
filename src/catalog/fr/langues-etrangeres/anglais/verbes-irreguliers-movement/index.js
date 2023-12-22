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
  'be-en2fr': {
    type: 'text',
    question: 'to be',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'was/were been être'
  },
  'be-fr2en': {
    type: 'text',
    question: 'être',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'be was/were been'
  },
  'go-en2fr': {
    type: 'text',
    question: 'to go',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'went gone aller'
  },
  'go-fr2en': {
    type: 'text',
    question: 'aller',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'go went gone'
  },
  'send-en2fr': {
    type: 'text',
    question: 'to send',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'sent sent envoyer'
  },
  'send-fr2en': {
    type: 'text',
    question: 'envoyer',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'send sent sent'
  },
  'come-en2fr': {
    type: 'text',
    question: 'to come',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'came come venir'
  },
  'come-fr2en': {
    type: 'text',
    question: 'venir',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'come came come'
  },
  'drive-en2fr': {
    type: 'text',
    question: 'to drive',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'drove driven conduire'
  },
  'drive-fr2en': {
    type: 'text',
    question: 'conduire',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'drive drove driven'
  },
  'leave-en2fr': {
    type: 'text',
    question: 'to leave',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'left left laisser'
  },
  'leave-fr2en': {
    type: 'text',
    question: 'laisser',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'leave left left'
  },
  'bring-en2fr': {
    type: 'text',
    question: 'to bring',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'brought brought apporter'
  },
  'bring-fr2en': {
    type: 'text',
    question: 'apporter',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'bring brought brought'
  },
  'fly-en2fr': {
    type: 'text',
    question: 'to fly',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'flew flown voler'
  },
  'fly-fr2en': {
    type: 'text',
    question: 'voler (dans les airs)',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'fly flew flown'
  },
  'hide-en2fr': {
    type: 'text',
    question: 'to hide',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'hid hidden cacher'
  },
  'hide-fr2en': {
    type: 'text',
    question: 'cacher',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'hide hid hidden'
  },
  'ride-en2fr': {
    type: 'text',
    question: 'to ride',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'rode ridden chevaucher'
  },
  'ride-fr2en': {
    type: 'text',
    question: 'chevaucher',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'ride rode ridden'
  },
  'seek-en2fr': {
    type: 'text',
    question: 'to seek',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'sought sought rechercher'
  },
  'seek-fr2en': {
    type: 'text',
    question: 'rechercher',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'seek sought sought'
  },
  'bend-en2fr': {
    type: 'text',
    question: 'to bend',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'bent bent plier'
  },
  'bend-fr2en': {
    type: 'text',
    question: 'plier',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'bend bent bent'
  }
};