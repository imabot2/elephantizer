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
  'do-en2fr': {
    type: 'text',
    question: 'to do',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'did done faire'
  },
  'do-fr2en': {
    type: 'text',
    question: 'faire',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'do did done'
  },
  'say-en2fr': {
    type: 'text',
    question: 'to say',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'said said dire'
  },
  'say-fr2en': {
    type: 'text',
    question: 'dire',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'say said said'
  },
  'feel-en2fr': {
    type: 'text',
    question: 'to feel',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'felt felt se sentir'
  },
  'feel-fr2en': {
    type: 'text',
    question: 'se sentir (éprouver)',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'feel felt felt'
  },
  'mean-en2fr': {
    type: 'text',
    question: 'to mean',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'meant meant signifier'
  },
  'mean-fr2en': {
    type: 'text',
    question: 'signifier (vouloir dire)',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'mean meant meant'
  },
  'deal-en2fr': {
    type: 'text',
    question: 'to deal',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'dealt dealt distribuer'
  },
  'deal-fr2en': {
    type: 'text',
    question: 'distribuer (donner)',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'deal dealt dealt'
  },
  'hear-en2fr': {
    type: 'text',
    question: 'to hear',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'heard heard entendre'
  },
  'hear-fr2en': {
    type: 'text',
    question: 'entendre',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'hear heard heard'
  },
  'begin-en2fr': {
    type: 'text',
    question: 'to begin',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'began begun commencer'
  },
  'begin-fr2en': {
    type: 'text',
    question: 'commencer',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'begin began begun'
  },
  'bear-en2fr': {
    type: 'text',
    question: 'to bear',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'bore borne porter'
  },
  'bear-fr2en': {
    type: 'text',
    question: 'porter / supporter',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'bear bore borne'
  },
  'forget-en2fr': {
    type: 'text',
    question: 'to forget',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'forgot forgotten oublier'
  },
  'forget-fr2en': {
    type: 'text',
    question: 'oublier',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'forget forgot forgotten'
  },
  'withdraw-en2fr': {
    type: 'text',
    question: 'to withdraw',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'withdrew withdrawn se retirer'
  },
  'withdraw-fr2en': {
    type: 'text',
    question: 'se retirer (se rétracter)',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'withdraw withdrew withdrawn'
  },
  'forgive-en2fr': {
    type: 'text',
    question: 'to forgive',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'forgave forgiven pardonner'
  },
  'forgive-fr2en': {
    type: 'text',
    question: 'pardonner',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'forgive forgave forgiven'
  },
  'forbid-en2fr': {
    type: 'text',
    question: 'to forbid',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'forbade forbidden interdire'
  },
  'forbid-fr2en': {
    type: 'text',
    question: 'interdire',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'forbid forbade forbidden'
  },
  'weep-en2fr': {
    type: 'text',
    question: 'to weep',
    prompt: 'Passé simple | participe passé | Traduction',
    answer: 'wept wept pleurer'
  },
  'weep-fr2en': {
    type: 'text',
    question: 'pleurer',
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: 'weep wept wept'
  }
};