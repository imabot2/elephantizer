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
  'be-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | was/were | been |  être</span>',
    prompt: 'Infinitif ?',
    answer: 'be'
  },
  'be-ps': {
    type: 'text',
    question: '<span class="text-xl">to be | <em>?</em> | been |  être</span>',
    prompt: 'Passé simple ?',
    answer: 'was/were'
  },
  'be-pp': {
    type: 'text',
    question: '<span class="text-xl">to be | was/were | <em>?</em> | être</span>',
    prompt: 'Participe passé ?',
    answer: 'been'
  },
  'be-tr': {
    type: 'text',
    question: '<span class="text-xl">to be | was/were | been | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'être'
  },
  'have-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | had | had |  avoir</span>',
    prompt: 'Infinitif ?',
    answer: 'have'
  },
  'have-ps': {
    type: 'text',
    question: '<span class="text-xl">to have | <em>?</em> | had |  avoir</span>',
    prompt: 'Passé simple ?',
    answer: 'had'
  },
  'have-pp': {
    type: 'text',
    question: '<span class="text-xl">to have | had | <em>?</em> | avoir</span>',
    prompt: 'Participe passé ?',
    answer: 'had'
  },
  'have-tr': {
    type: 'text',
    question: '<span class="text-xl">to have | had | had | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'avoir'
  },
  'do-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | did | done |  faire</span>',
    prompt: 'Infinitif ?',
    answer: 'do'
  },
  'do-ps': {
    type: 'text',
    question: '<span class="text-xl">to do | <em>?</em> | done |  faire</span>',
    prompt: 'Passé simple ?',
    answer: 'did'
  },
  'do-pp': {
    type: 'text',
    question: '<span class="text-xl">to do | did | <em>?</em> | faire</span>',
    prompt: 'Participe passé ?',
    answer: 'done'
  },
  'do-tr': {
    type: 'text',
    question: '<span class="text-xl">to do | did | done | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'faire'
  },
  'see-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | saw | seen |  voir</span>',
    prompt: 'Infinitif ?',
    answer: 'see'
  },
  'see-ps': {
    type: 'text',
    question: '<span class="text-xl">to see | <em>?</em> | seen |  voir</span>',
    prompt: 'Passé simple ?',
    answer: 'saw'
  },
  'see-pp': {
    type: 'text',
    question: '<span class="text-xl">to see | saw | <em>?</em> | voir</span>',
    prompt: 'Participe passé ?',
    answer: 'seen'
  },
  'see-tr': {
    type: 'text',
    question: '<span class="text-xl">to see | saw | seen | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'voir'
  },
  'get-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | got | got |  obtenir</span>',
    prompt: 'Infinitif ?',
    answer: 'get'
  },
  'get-ps': {
    type: 'text',
    question: '<span class="text-xl">to get | <em>?</em> | got |  obtenir</span>',
    prompt: 'Passé simple ?',
    answer: 'got'
  },
  'get-pp': {
    type: 'text',
    question: '<span class="text-xl">to get | got | <em>?</em> | obtenir</span>',
    prompt: 'Participe passé ?',
    answer: 'got'
  },
  'get-tr': {
    type: 'text',
    question: '<span class="text-xl">to get | got | got | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'obtenir'
  },
  'find-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | found | found |  trouver</span>',
    prompt: 'Infinitif ?',
    answer: 'find'
  },
  'find-ps': {
    type: 'text',
    question: '<span class="text-xl">to find | <em>?</em> | found |  trouver</span>',
    prompt: 'Passé simple ?',
    answer: 'found'
  },
  'find-pp': {
    type: 'text',
    question: '<span class="text-xl">to find | found | <em>?</em> | trouver</span>',
    prompt: 'Participe passé ?',
    answer: 'found'
  },
  'find-tr': {
    type: 'text',
    question: '<span class="text-xl">to find | found | found | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'trouver'
  },
  'go-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | went | gone |  aller</span>',
    prompt: 'Infinitif ?',
    answer: 'go'
  },
  'go-ps': {
    type: 'text',
    question: '<span class="text-xl">to go | <em>?</em> | gone |  aller</span>',
    prompt: 'Passé simple ?',
    answer: 'went'
  },
  'go-pp': {
    type: 'text',
    question: '<span class="text-xl">to go | went | <em>?</em> | aller</span>',
    prompt: 'Participe passé ?',
    answer: 'gone'
  },
  'go-tr': {
    type: 'text',
    question: '<span class="text-xl">to go | went | gone | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'aller'
  },
  'buy-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | bought | bought |  acheter</span>',
    prompt: 'Infinitif ?',
    answer: 'buy'
  },
  'buy-ps': {
    type: 'text',
    question: '<span class="text-xl">to buy | <em>?</em> | bought |  acheter</span>',
    prompt: 'Passé simple ?',
    answer: 'bought'
  },
  'buy-pp': {
    type: 'text',
    question: '<span class="text-xl">to buy | bought | <em>?</em> | acheter</span>',
    prompt: 'Participe passé ?',
    answer: 'bought'
  },
  'buy-tr': {
    type: 'text',
    question: '<span class="text-xl">to buy | bought | bought | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'acheter'
  },
  'make-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | made | made |  fabriquer</span>',
    prompt: 'Infinitif ?',
    answer: 'make'
  },
  'make-ps': {
    type: 'text',
    question: '<span class="text-xl">to make | <em>?</em> | made |  fabriquer</span>',
    prompt: 'Passé simple ?',
    answer: 'made'
  },
  'make-pp': {
    type: 'text',
    question: '<span class="text-xl">to make | made | <em>?</em> | fabriquer</span>',
    prompt: 'Participe passé ?',
    answer: 'made'
  },
  'make-tr': {
    type: 'text',
    question: '<span class="text-xl">to make | made | made | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'fabriquer'
  },
  'read-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | read | read |  lire</span>',
    prompt: 'Infinitif ?',
    answer: 'read'
  },
  'read-ps': {
    type: 'text',
    question: '<span class="text-xl">to read | <em>?</em> | read |  lire</span>',
    prompt: 'Passé simple ?',
    answer: 'read'
  },
  'read-pp': {
    type: 'text',
    question: '<span class="text-xl">to read | read | <em>?</em> | lire</span>',
    prompt: 'Participe passé ?',
    answer: 'read'
  },
  'read-tr': {
    type: 'text',
    question: '<span class="text-xl">to read | read | read | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'lire'
  },
  'set-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | set | set |  fixer</span>',
    prompt: 'Infinitif ?',
    answer: 'set'
  },
  'set-ps': {
    type: 'text',
    question: '<span class="text-xl">to set | <em>?</em> | set |  fixer</span>',
    prompt: 'Passé simple ?',
    answer: 'set'
  },
  'set-pp': {
    type: 'text',
    question: '<span class="text-xl">to set | set | <em>?</em> | fixer</span>',
    prompt: 'Participe passé ?',
    answer: 'set'
  },
  'set-tr': {
    type: 'text',
    question: '<span class="text-xl">to set | set | set | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'fixer'
  },
  'know-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | knew | known |  savoir</span>',
    prompt: 'Infinitif ?',
    answer: 'know'
  },
  'know-ps': {
    type: 'text',
    question: '<span class="text-xl">to know | <em>?</em> | known |  savoir</span>',
    prompt: 'Passé simple ?',
    answer: 'knew'
  },
  'know-pp': {
    type: 'text',
    question: '<span class="text-xl">to know | knew | <em>?</em> | savoir</span>',
    prompt: 'Participe passé ?',
    answer: 'known'
  },
  'know-tr': {
    type: 'text',
    question: '<span class="text-xl">to know | knew | known | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'savoir'
  },
  'send-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | sent | sent |  envoyer</span>',
    prompt: 'Infinitif ?',
    answer: 'send'
  },
  'send-ps': {
    type: 'text',
    question: '<span class="text-xl">to send | <em>?</em> | sent |  envoyer</span>',
    prompt: 'Passé simple ?',
    answer: 'sent'
  },
  'send-pp': {
    type: 'text',
    question: '<span class="text-xl">to send | sent | <em>?</em> | envoyer</span>',
    prompt: 'Participe passé ?',
    answer: 'sent'
  },
  'send-tr': {
    type: 'text',
    question: '<span class="text-xl">to send | sent | sent | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'envoyer'
  },
  'take-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | took | taken |  prendre</span>',
    prompt: 'Infinitif ?',
    answer: 'take'
  },
  'take-ps': {
    type: 'text',
    question: '<span class="text-xl">to take | <em>?</em> | taken |  prendre</span>',
    prompt: 'Passé simple ?',
    answer: 'took'
  },
  'take-pp': {
    type: 'text',
    question: '<span class="text-xl">to take | took | <em>?</em> | prendre</span>',
    prompt: 'Participe passé ?',
    answer: 'taken'
  },
  'take-tr': {
    type: 'text',
    question: '<span class="text-xl">to take | took | taken | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'prendre'
  },
  'show-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | showed | shown |  montrer</span>',
    prompt: 'Infinitif ?',
    answer: 'show'
  },
  'show-ps': {
    type: 'text',
    question: '<span class="text-xl">to show | <em>?</em> | shown |  montrer</span>',
    prompt: 'Passé simple ?',
    answer: 'showed'
  },
  'show-pp': {
    type: 'text',
    question: '<span class="text-xl">to show | showed | <em>?</em> | montrer</span>',
    prompt: 'Participe passé ?',
    answer: 'shown'
  },
  'show-tr': {
    type: 'text',
    question: '<span class="text-xl">to show | showed | shown | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'montrer'
  },
  'think-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | thought | thought |  penser</span>',
    prompt: 'Infinitif ?',
    answer: 'think'
  },
  'think-ps': {
    type: 'text',
    question: '<span class="text-xl">to think | <em>?</em> | thought |  penser</span>',
    prompt: 'Passé simple ?',
    answer: 'thought'
  },
  'think-pp': {
    type: 'text',
    question: '<span class="text-xl">to think | thought | <em>?</em> | penser</span>',
    prompt: 'Participe passé ?',
    answer: 'thought'
  },
  'think-tr': {
    type: 'text',
    question: '<span class="text-xl">to think | thought | thought | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'penser'
  },
  'learn-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | learnt | learnt |  apprendre</span>',
    prompt: 'Infinitif ?',
    answer: 'learn'
  },
  'learn-ps': {
    type: 'text',
    question: '<span class="text-xl">to learn | <em>?</em> | learnt |  apprendre</span>',
    prompt: 'Passé simple ?',
    answer: 'learnt'
  },
  'learn-pp': {
    type: 'text',
    question: '<span class="text-xl">to learn | learnt | <em>?</em> | apprendre</span>',
    prompt: 'Participe passé ?',
    answer: 'learnt'
  },
  'learn-tr': {
    type: 'text',
    question: '<span class="text-xl">to learn | learnt | learnt | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'apprendre'
  },
  'cost-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | cost | cost |  coûter</span>',
    prompt: 'Infinitif ?',
    answer: 'cost'
  },
  'cost-ps': {
    type: 'text',
    question: '<span class="text-xl">to cost | <em>?</em> | cost |  coûter</span>',
    prompt: 'Passé simple ?',
    answer: 'cost'
  },
  'cost-pp': {
    type: 'text',
    question: '<span class="text-xl">to cost | cost | <em>?</em> | coûter</span>',
    prompt: 'Participe passé ?',
    answer: 'cost'
  },
  'cost-tr': {
    type: 'text',
    question: '<span class="text-xl">to cost | cost | cost | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'coûter'
  },
  'say-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | said | said |  dire</span>',
    prompt: 'Infinitif ?',
    answer: 'say'
  },
  'say-ps': {
    type: 'text',
    question: '<span class="text-xl">to say | <em>?</em> | said |  dire</span>',
    prompt: 'Passé simple ?',
    answer: 'said'
  },
  'say-pp': {
    type: 'text',
    question: '<span class="text-xl">to say | said | <em>?</em> | dire</span>',
    prompt: 'Participe passé ?',
    answer: 'said'
  },
  'say-tr': {
    type: 'text',
    question: '<span class="text-xl">to say | said | said | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'dire'
  },
  'come-bf': {
    type: 'text',
    question: '<span class="text-xl">to <em>?</em> | came | come |  venir</span>',
    prompt: 'Infinitif ?',
    answer: 'come'
  },
  'come-ps': {
    type: 'text',
    question: '<span class="text-xl">to come | <em>?</em> | come |  venir</span>',
    prompt: 'Passé simple ?',
    answer: 'came'
  },
  'come-pp': {
    type: 'text',
    question: '<span class="text-xl">to come | came | <em>?</em> | venir</span>',
    prompt: 'Participe passé ?',
    answer: 'come'
  },
  'come-tr': {
    type: 'text',
    question: '<span class="text-xl">to come | came | come | <em>?</em></span>',
    prompt: 'Traduction ?',
    answer: 'venir'
  }
};