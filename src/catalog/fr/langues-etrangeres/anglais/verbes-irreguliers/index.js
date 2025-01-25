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
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "was/were been être"
  },
  'be-fr2en': {
    type: 'text',
    question: "être",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "be was/were been"
  },
  'have-en2fr': {
    type: 'text',
    question: 'to have',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "had had avoir"
  },
  'have-fr2en': {
    type: 'text',
    question: "avoir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "have had had"
  },
  'do-en2fr': {
    type: 'text',
    question: 'to do',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "did done faire"
  },
  'do-fr2en': {
    type: 'text',
    question: "faire",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "do did done"
  },
  'see-en2fr': {
    type: 'text',
    question: 'to see',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "saw seen voir"
  },
  'see-fr2en': {
    type: 'text',
    question: "voir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "see saw seen"
  },
  'get-en2fr': {
    type: 'text',
    question: 'to get',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "got got obtenir"
  },
  'get-fr2en': {
    type: 'text',
    question: "obtenir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "get got got"
  },
  'find-en2fr': {
    type: 'text',
    question: 'to find',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "found found trouver"
  },
  'find-fr2en': {
    type: 'text',
    question: "trouver",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "find found found"
  },
  'go-en2fr': {
    type: 'text',
    question: 'to go',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "went gone aller"
  },
  'go-fr2en': {
    type: 'text',
    question: "aller",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "go went gone"
  },
  'buy-en2fr': {
    type: 'text',
    question: 'to buy',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "bought bought acheter"
  },
  'buy-fr2en': {
    type: 'text',
    question: "acheter",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "buy bought bought"
  },
  'make-en2fr': {
    type: 'text',
    question: 'to make',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "made made fabriquer"
  },
  'make-fr2en': {
    type: 'text',
    question: "fabriquer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "make made made"
  },
  'read-en2fr': {
    type: 'text',
    question: 'to read',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "read read lire"
  },
  'read-fr2en': {
    type: 'text',
    question: "lire",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "read read read"
  },
  'set-en2fr': {
    type: 'text',
    question: 'to set',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "set set fixer"
  },
  'set-fr2en': {
    type: 'text',
    question: "fixer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "set set set"
  },
  'know-en2fr': {
    type: 'text',
    question: 'to know',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "knew known savoir"
  },
  'know-fr2en': {
    type: 'text',
    question: "savoir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "know knew known"
  },
  'send-en2fr': {
    type: 'text',
    question: 'to send',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "sent sent envoyer"
  },
  'send-fr2en': {
    type: 'text',
    question: "envoyer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "send sent sent"
  },
  'take-en2fr': {
    type: 'text',
    question: 'to take',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "took taken prendre"
  },
  'take-fr2en': {
    type: 'text',
    question: "prendre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "take took taken"
  },
  'show-en2fr': {
    type: 'text',
    question: 'to show',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "showed shown montrer"
  },
  'show-fr2en': {
    type: 'text',
    question: "montrer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "show showed shown"
  },
  'think-en2fr': {
    type: 'text',
    question: 'to think',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "thought thought penser"
  },
  'think-fr2en': {
    type: 'text',
    question: "penser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "think thought thought"
  },
  'learn-en2fr': {
    type: 'text',
    question: 'to learn',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "learnt learnt apprendre"
  },
  'learn-fr2en': {
    type: 'text',
    question: "apprendre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "learn learnt learnt"
  },
  'cost-en2fr': {
    type: 'text',
    question: 'to cost',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "cost cost coûter"
  },
  'cost-fr2en': {
    type: 'text',
    question: "coûter",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "cost cost cost"
  },
  'say-en2fr': {
    type: 'text',
    question: 'to say',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "said said dire"
  },
  'say-fr2en': {
    type: 'text',
    question: "dire",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "say said said"
  },
  'come-en2fr': {
    type: 'text',
    question: 'to come',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "came come venir"
  },
  'come-fr2en': {
    type: 'text',
    question: "venir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "come came come"
  },
  'let-en2fr': {
    type: 'text',
    question: 'to let',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "let let laisser"
  },
  'let-fr2en': {
    type: 'text',
    question: "laisser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "let let let"
  },
  'give-en2fr': {
    type: 'text',
    question: 'to give',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "gave given donner"
  },
  'give-fr2en': {
    type: 'text',
    question: "donner",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "give gave given"
  },
  'sell-en2fr': {
    type: 'text',
    question: 'to sell',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "sold sold vendre"
  },
  'sell-fr2en': {
    type: 'text',
    question: "vendre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "sell sold sold"
  },
  'pay-en2fr': {
    type: 'text',
    question: 'to pay',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "paid paid payer"
  },
  'pay-fr2en': {
    type: 'text',
    question: "payer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "pay paid paid"
  },
  'light-en2fr': {
    type: 'text',
    question: 'to light',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "lit lit éclairer"
  },
  'light-fr2en': {
    type: 'text',
    question: "éclairer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "light lit lit"
  },
  'write-en2fr': {
    type: 'text',
    question: 'to write',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "wrote written écrire"
  },
  'write-fr2en': {
    type: 'text',
    question: "écrire",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "write wrote written"
  },
  'become-en2fr': {
    type: 'text',
    question: 'to become',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "became become devenir"
  },
  'become-fr2en': {
    type: 'text',
    question: "devenir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "become became become"
  },
  'keep-en2fr': {
    type: 'text',
    question: 'to keep',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "kept kept garder"
  },
  'keep-fr2en': {
    type: 'text',
    question: "garder",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "keep kept kept"
  },
  'run-en2fr': {
    type: 'text',
    question: 'to run',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "ran run courir"
  },
  'run-fr2en': {
    type: 'text',
    question: "courir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "run ran run"
  },
  'put-en2fr': {
    type: 'text',
    question: 'to put',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "put put mettre"
  },
  'put-fr2en': {
    type: 'text',
    question: "mettre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "put put put"
  },
  'tell-en2fr': {
    type: 'text',
    question: 'to tell',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "told told raconter"
  },
  'tell-fr2en': {
    type: 'text',
    question: "raconter",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "tell told told"
  },
  'drive-en2fr': {
    type: 'text',
    question: 'to drive',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "drove driven conduire"
  },
  'drive-fr2en': {
    type: 'text',
    question: "conduire",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "drive drove driven"
  },
  'meet-en2fr': {
    type: 'text',
    question: 'to meet',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "met met rencontrer"
  },
  'meet-fr2en': {
    type: 'text',
    question: "rencontrer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "meet met met"
  },
  'feel-en2fr': {
    type: 'text',
    question: 'to feel',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "felt felt sentir"
  },
  'feel-fr2en': {
    type: 'text',
    question: "sentir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "feel felt felt"
  },
  'choose-en2fr': {
    type: 'text',
    question: 'to choose',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "chose chosen choisir"
  },
  'choose-fr2en': {
    type: 'text',
    question: "choisir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "choose chose chosen"
  },
  'speed-en2fr': {
    type: 'text',
    question: 'to speed',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "sped sped accélérer"
  },
  'speed-fr2en': {
    type: 'text',
    question: "accélérer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "speed sped sped"
  },
  'mean-en2fr': {
    type: 'text',
    question: 'to mean',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "meant meant signifier"
  },
  'mean-fr2en': {
    type: 'text',
    question: "signifier",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "mean meant meant"
  },
  'build-en2fr': {
    type: 'text',
    question: 'to build',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "built built construire"
  },
  'build-fr2en': {
    type: 'text',
    question: "construire",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "build built built"
  },
  'leave-en2fr': {
    type: 'text',
    question: 'to leave',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "left left laisser"
  },
  'leave-fr2en': {
    type: 'text',
    question: "laisser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "leave left left"
  },
  'bid-en2fr': {
    type: 'text',
    question: 'to bid',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "bade bidden faire une offre"
  },
  'bid-fr2en': {
    type: 'text',
    question: "faire une offre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "bid bade bidden"
  },
  'lead-en2fr': {
    type: 'text',
    question: 'to lead',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "led led mener"
  },
  'lead-fr2en': {
    type: 'text',
    question: "mener",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "lead led led"
  },
  'wed-en2fr': {
    type: 'text',
    question: 'to wed',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "wed wed se marier"
  },
  'wed-fr2en': {
    type: 'text',
    question: "se marier",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "wed wed wed"
  },
  'fall-en2fr': {
    type: 'text',
    question: 'to fall',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "fell fallen tomber"
  },
  'fall-fr2en': {
    type: 'text',
    question: "tomber",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "fall fell fallen"
  },
  'win-en2fr': {
    type: 'text',
    question: 'to win',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "won won gagner"
  },
  'win-fr2en': {
    type: 'text',
    question: "gagner",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "win won won"
  },
  'spring-en2fr': {
    type: 'text',
    question: 'to spring',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "sprang sprung surgir"
  },
  'spring-fr2en': {
    type: 'text',
    question: "surgir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "spring sprang sprung"
  },
  'deal-en2fr': {
    type: 'text',
    question: 'to deal',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "dealt dealt négocier"
  },
  'deal-fr2en': {
    type: 'text',
    question: "négocier",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "deal dealt dealt"
  },
  'hold-en2fr': {
    type: 'text',
    question: 'to hold',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "held held tenir"
  },
  'hold-fr2en': {
    type: 'text',
    question: "tenir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "hold held held"
  },
  'feed-en2fr': {
    type: 'text',
    question: 'to feed',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "fed fed nourrir"
  },
  'feed-fr2en': {
    type: 'text',
    question: "nourrir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "feed fed fed"
  },
  'understand-en2fr': {
    type: 'text',
    question: 'to understand',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "understood understood comprendre"
  },
  'understand-fr2en': {
    type: 'text',
    question: "comprendre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "understand understood understood"
  },
  'cut-en2fr': {
    type: 'text',
    question: 'to cut',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "cut cut couper"
  },
  'cut-fr2en': {
    type: 'text',
    question: "couper",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "cut cut cut"
  },
  'bring-en2fr': {
    type: 'text',
    question: 'to bring',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "brought brought apporter"
  },
  'bring-fr2en': {
    type: 'text',
    question: "apporter",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "bring brought brought"
  },
  'ring-en2fr': {
    type: 'text',
    question: 'to ring',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "rang rung sonner"
  },
  'ring-fr2en': {
    type: 'text',
    question: "sonner",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "ring rang rung"
  },
  'hit-en2fr': {
    type: 'text',
    question: 'to hit',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "hit hit frapper"
  },
  'hit-fr2en': {
    type: 'text',
    question: "frapper",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "hit hit hit"
  },
  'string-en2fr': {
    type: 'text',
    question: 'to string',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "strung strung mettre des cordes"
  },
  'string-fr2en': {
    type: 'text',
    question: "mettre des cordes",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "string strung strung"
  },
  'break-en2fr': {
    type: 'text',
    question: 'to break',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "broke broken casser"
  },
  'break-fr2en': {
    type: 'text',
    question: "casser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "break broke broken"
  },
  'saw-en2fr': {
    type: 'text',
    question: 'to saw',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "sawed sawn scier"
  },
  'saw-fr2en': {
    type: 'text',
    question: "scier",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "saw sawed sawn"
  },
  'hear-en2fr': {
    type: 'text',
    question: 'to hear',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "heard heard entendre"
  },
  'hear-fr2en': {
    type: 'text',
    question: "entendre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "hear heard heard"
  },
  'stand-en2fr': {
    type: 'text',
    question: 'to stand',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "stood stood se tenir debout"
  },
  'stand-fr2en': {
    type: 'text',
    question: "se tenir debout",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "stand stood stood"
  },
  'begin-en2fr': {
    type: 'text',
    question: 'to begin',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "began begun commencer"
  },
  'begin-fr2en': {
    type: 'text',
    question: "commencer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "begin began begun"
  },
  'wind-en2fr': {
    type: 'text',
    question: 'to wind',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "wound wound enrouler"
  },
  'wind-fr2en': {
    type: 'text',
    question: "enrouler",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "wind wound wound"
  },
  'fit-en2fr': {
    type: 'text',
    question: 'to fit',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "fit fit s'adapter"
  },
  'fit-fr2en': {
    type: 'text',
    question: "s'adapter",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "fit fit fit"
  },
  'dream-en2fr': {
    type: 'text',
    question: 'to dream',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "dreamt dreamt rêver"
  },
  'dream-fr2en': {
    type: 'text',
    question: "rêver",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "dream dreamt dreamt"
  },
  'cast-en2fr': {
    type: 'text',
    question: 'to cast',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "cast cast jeter"
  },
  'cast-fr2en': {
    type: 'text',
    question: "jeter",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "cast cast cast"
  },
  'bear-en2fr': {
    type: 'text',
    question: 'to bear',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "bore borne supporter"
  },
  'bear-fr2en': {
    type: 'text',
    question: "supporter",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "bear bore borne"
  },
  'blow-en2fr': {
    type: 'text',
    question: 'to blow',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "blew blown souffler"
  },
  'blow-fr2en': {
    type: 'text',
    question: "souffler",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "blow blew blown"
  },
  'speak-en2fr': {
    type: 'text',
    question: 'to speak',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "spoke spoken parler"
  },
  'speak-fr2en': {
    type: 'text',
    question: "parler",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "speak spoke spoken"
  },
  'fight-en2fr': {
    type: 'text',
    question: 'to fight',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "fought fought combattre"
  },
  'fight-fr2en': {
    type: 'text',
    question: "combattre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "fight fought fought"
  },
  'wear-en2fr': {
    type: 'text',
    question: 'to wear',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "wore worn porter"
  },
  'wear-fr2en': {
    type: 'text',
    question: "porter",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "wear wore worn"
  },
  'rise-en2fr': {
    type: 'text',
    question: 'to rise',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "rose risen s'élever"
  },
  'rise-fr2en': {
    type: 'text',
    question: "s'élever",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "rise rose risen"
  },
  'sleep-en2fr': {
    type: 'text',
    question: 'to sleep',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "slept slept dormir"
  },
  'sleep-fr2en': {
    type: 'text',
    question: "dormir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "sleep slept slept"
  },
  'drink-en2fr': {
    type: 'text',
    question: 'to drink',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "drank drunk boire"
  },
  'drink-fr2en': {
    type: 'text',
    question: "boire",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "drink drank drunk"
  },
  'eat-en2fr': {
    type: 'text',
    question: 'to eat',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "ate eaten manger"
  },
  'eat-fr2en': {
    type: 'text',
    question: "manger",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "eat ate eaten"
  },
  'fly-en2fr': {
    type: 'text',
    question: 'to fly',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "flew flown voler"
  },
  'fly-fr2en': {
    type: 'text',
    question: "voler",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "fly flew flown"
  },
  'beat-en2fr': {
    type: 'text',
    question: 'to beat',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "beat beaten battre"
  },
  'beat-fr2en': {
    type: 'text',
    question: "battre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "beat beat beaten"
  },
  'hide-en2fr': {
    type: 'text',
    question: 'to hide',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "hid hidden cacher"
  },
  'hide-fr2en': {
    type: 'text',
    question: "cacher",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "hide hid hidden"
  },
  'spend-en2fr': {
    type: 'text',
    question: 'to spend',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "spent spent dépenser"
  },
  'spend-fr2en': {
    type: 'text',
    question: "dépenser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "spend spent spent"
  },
  'grow-en2fr': {
    type: 'text',
    question: 'to grow',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "grew grown grandir"
  },
  'grow-fr2en': {
    type: 'text',
    question: "grandir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "grow grew grown"
  },
  'ride-en2fr': {
    type: 'text',
    question: 'to ride',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "rode ridden chevaucher"
  },
  'ride-fr2en': {
    type: 'text',
    question: "chevaucher",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "ride rode ridden"
  },
  'forget-en2fr': {
    type: 'text',
    question: 'to forget',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "forgot forgotten oublier"
  },
  'forget-fr2en': {
    type: 'text',
    question: "oublier",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "forget forgot forgotten"
  },
  'spread-en2fr': {
    type: 'text',
    question: 'to spread',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "spread spread se propager"
  },
  'spread-fr2en': {
    type: 'text',
    question: "se propager",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "spread spread spread"
  },
  'lose-en2fr': {
    type: 'text',
    question: 'to lose',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "lost lost perdre"
  },
  'lose-fr2en': {
    type: 'text',
    question: "perdre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "lose lost lost"
  },
  'seek-en2fr': {
    type: 'text',
    question: 'to seek',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "sought sought rechercher"
  },
  'seek-fr2en': {
    type: 'text',
    question: "rechercher",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "seek sought sought"
  },
  'wet-en2fr': {
    type: 'text',
    question: 'to wet',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "wet wet mouiller"
  },
  'wet-fr2en': {
    type: 'text',
    question: "mouiller",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "wet wet wet"
  },
  'draw-en2fr': {
    type: 'text',
    question: 'to draw',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "drew drawn dessiner"
  },
  'draw-fr2en': {
    type: 'text',
    question: "dessiner",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "draw drew drawn"
  },
  'stick-en2fr': {
    type: 'text',
    question: 'to stick',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "stick stuck coller"
  },
  'stick-fr2en': {
    type: 'text',
    question: "coller",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "stick stick stuck"
  },
  'slide-en2fr': {
    type: 'text',
    question: 'to slide',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "slid slid glisser"
  },
  'slide-fr2en': {
    type: 'text',
    question: "glisser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "slide slid slid"
  },
  'catch-en2fr': {
    type: 'text',
    question: 'to catch',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "caught caught attraper"
  },
  'catch-fr2en': {
    type: 'text',
    question: "attraper",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "catch caught caught"
  },
  'split-en2fr': {
    type: 'text',
    question: 'to split',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "split split séparer"
  },
  'split-fr2en': {
    type: 'text',
    question: "séparer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "split split split"
  },
  'sit-en2fr': {
    type: 'text',
    question: 'to sit',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "sat sat s'asseoir"
  },
  'sit-fr2en': {
    type: 'text',
    question: "s'asseoir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "sit sat sat"
  },
  'teach-en2fr': {
    type: 'text',
    question: 'to teach',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "taught taught enseigner"
  },
  'teach-fr2en': {
    type: 'text',
    question: "enseigner",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "teach taught taught"
  },
  'strip-en2fr': {
    type: 'text',
    question: 'to strip',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "stripped stripped déshabiller"
  },
  'strip-fr2en': {
    type: 'text',
    question: "déshabiller",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "strip stripped stripped"
  },
  'strike-en2fr': {
    type: 'text',
    question: 'to strike',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "struck struck frapper"
  },
  'strike-fr2en': {
    type: 'text',
    question: "frapper",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "strike struck struck"
  },
  'shoe-en2fr': {
    type: 'text',
    question: 'to shoe',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "shod shod chausser"
  },
  'shoe-fr2en': {
    type: 'text',
    question: "chausser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "shoe shod shod"
  },
  'lay-en2fr': {
    type: 'text',
    question: 'to lay',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "laid laid poser"
  },
  'lay-fr2en': {
    type: 'text',
    question: "poser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "lay laid laid"
  },
  'prove-en2fr': {
    type: 'text',
    question: 'to prove',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "proved proven prouver"
  },
  'prove-fr2en': {
    type: 'text',
    question: "prouver",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "prove proved proven"
  },
  'bet-en2fr': {
    type: 'text',
    question: 'to bet',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "bet bet parier"
  },
  'bet-fr2en': {
    type: 'text',
    question: "parier",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "bet bet bet"
  },
  'throw-en2fr': {
    type: 'text',
    question: 'to throw',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "threw thrown lancer"
  },
  'throw-fr2en': {
    type: 'text',
    question: "lancer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "throw threw thrown"
  },
  'wake-en2fr': {
    type: 'text',
    question: 'to wake',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "woke woken se réveiller"
  },
  'wake-fr2en': {
    type: 'text',
    question: "se réveiller",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "wake woke woken"
  },
  'burn-en2fr': {
    type: 'text',
    question: 'to burn',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "burnt burnt brûler"
  },
  'burn-fr2en': {
    type: 'text',
    question: "brûler",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "burn burnt burnt"
  },
  'lie-en2fr': {
    type: 'text',
    question: 'to lie',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "lay lain s'allonger"
  },
  'lie-fr2en': {
    type: 'text',
    question: "s'allonger",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "lie lay lain"
  },
  'lie-en2fr': {
    type: 'text',
    question: 'to lie',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "lied lied mentir"
  },
  'lie-fr2en': {
    type: 'text',
    question: "mentir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "lie lied lied"
  },
  'hurt-en2fr': {
    type: 'text',
    question: 'to hurt',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "hurt hurt blesser"
  },
  'hurt-fr2en': {
    type: 'text',
    question: "blesser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "hurt hurt hurt"
  },
  'swing-en2fr': {
    type: 'text',
    question: 'to swing',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "swung swung se balancer"
  },
  'swing-fr2en': {
    type: 'text',
    question: "se balancer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "swing swung swung"
  },
  'shoot-en2fr': {
    type: 'text',
    question: 'to shoot',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "shot shot tirer"
  },
  'shoot-fr2en': {
    type: 'text',
    question: "tirer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "shoot shot shot"
  },
  'spin-en2fr': {
    type: 'text',
    question: 'to spin',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "span spun tourner"
  },
  'spin-fr2en': {
    type: 'text',
    question: "tourner",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "spin span spun"
  },
  'shut-en2fr': {
    type: 'text',
    question: 'to shut',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "shut shut fermer"
  },
  'shut-fr2en': {
    type: 'text',
    question: "fermer / éteindre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "shut shut shut"
  },
  'sing-en2fr': {
    type: 'text',
    question: 'to sing',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "sang sung chanter"
  },
  'sing-fr2en': {
    type: 'text',
    question: "chanter",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "sing sang sung"
  },
  'hang-en2fr': {
    type: 'text',
    question: 'to hang',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "hung hung pendre"
  },
  'hang-fr2en': {
    type: 'text',
    question: "pendre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "hang hung hung"
  },
  'mistake-en2fr': {
    type: 'text',
    question: 'to mistake',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "mistook mistaken se méprendre"
  },
  'mistake-fr2en': {
    type: 'text',
    question: "se méprendre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "mistake mistook mistaken"
  },
  'quit-en2fr': {
    type: 'text',
    question: 'to quit',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "quit quit arrêter"
  },
  'quit-fr2en': {
    type: 'text',
    question: "arrêter",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "quit quit quit"
  },
  'bend-en2fr': {
    type: 'text',
    question: 'to bend',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "bent bent plier"
  },
  'bend-fr2en': {
    type: 'text',
    question: "plier",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "bend bent bent"
  },
  'swim-en2fr': {
    type: 'text',
    question: 'to swim',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "swam swum nager"
  },
  'swim-fr2en': {
    type: 'text',
    question: "nager",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "swim swam swum"
  },
  'spell-en2fr': {
    type: 'text',
    question: 'to spell',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "spelt spelt épeler"
  },
  'spell-fr2en': {
    type: 'text',
    question: "épeler",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "spell spelt spelt"
  },
  'arise-en2fr': {
    type: 'text',
    question: 'to arise',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "arose arisen survenir"
  },
  'arise-fr2en': {
    type: 'text',
    question: "survenir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "arise arose arisen"
  },
  'dive-en2fr': {
    type: 'text',
    question: 'to dive',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "dived dived plonger"
  },
  'dive-fr2en': {
    type: 'text',
    question: "plonger",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "dive dived dived"
  },
  'sink-en2fr': {
    type: 'text',
    question: 'to sink',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "sank sunk couler"
  },
  'sink-fr2en': {
    type: 'text',
    question: "couler",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "sink sank sunk"
  },
  'rid-en2fr': {
    type: 'text',
    question: 'to rid',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "rid rid débarrasser"
  },
  'rid-fr2en': {
    type: 'text',
    question: "débarrasser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "rid rid rid"
  },
  'breed-en2fr': {
    type: 'text',
    question: 'to breed',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "bred bred se reproduire"
  },
  'breed-fr2en': {
    type: 'text',
    question: "se reproduire",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "breed bred bred"
  },
  'dig-en2fr': {
    type: 'text',
    question: 'to dig',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "dug dug creuser"
  },
  'dig-fr2en': {
    type: 'text',
    question: "creuser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "dig dug dug"
  },
  'shake-en2fr': {
    type: 'text',
    question: 'to shake',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "shook shaken secouer"
  },
  'shake-fr2en': {
    type: 'text',
    question: "secouer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "shake shook shaken"
  },
  'shed-en2fr': {
    type: 'text',
    question: 'to shed',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "shed shed verser"
  },
  'shed-fr2en': {
    type: 'text',
    question: "verser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "shed shed shed"
  },
  'bind-en2fr': {
    type: 'text',
    question: 'to bind',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "bind bound lier"
  },
  'bind-fr2en': {
    type: 'text',
    question: "lier",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "bind bound bound"
  },
  'smell-en2fr': {
    type: 'text',
    question: 'to smell',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "smelt smelt sentir (une odeur)"
  },
  'smell-fr2en': {
    type: 'text',
    question: "sentir (une odeur)",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "smell smelt smelt"
  },
  'lean-en2fr': {
    type: 'text',
    question: 'to lean',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "leant leant pencher"
  },
  'lean-fr2en': {
    type: 'text',
    question: "pencher",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "lean leant leant"
  },
  'steal-en2fr': {
    type: 'text',
    question: 'to steal',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "stole stolen dérober"
  },
  'steal-fr2en': {
    type: 'text',
    question: "dérober",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "steal stole stolen"
  },
  'bite-en2fr': {
    type: 'text',
    question: 'to bite',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "bit bitten mordre"
  },
  'bite-fr2en': {
    type: 'text',
    question: "mordre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "bite bit bitten"
  },
  'shine-en2fr': {
    type: 'text',
    question: 'to shine',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "shone shone briller"
  },
  'shine-fr2en': {
    type: 'text',
    question: "briller",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "shine shone shone"
  },
  'zinc-en2fr': {
    type: 'text',
    question: 'to zinc',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "zincked zincked zinguer"
  },
  'zinc-fr2en': {
    type: 'text',
    question: "zinguer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "zinc zincked zincked"
  },
  'undertake-en2fr': {
    type: 'text',
    question: 'to undertake',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "undertook undertaken entreprendre"
  },
  'undertake-fr2en': {
    type: 'text',
    question: "entreprendre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "undertake undertook undertaken"
  },
  'tear-en2fr': {
    type: 'text',
    question: 'to tear',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "tore torn pleurer"
  },
  'tear-fr2en': {
    type: 'text',
    question: "pleurer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "tear tore torn"
  },
  'upset-en2fr': {
    type: 'text',
    question: 'to upset',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "upset upset bouleverser"
  },
  'upset-fr2en': {
    type: 'text',
    question: "bouleverser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "upset upset upset"
  },
  'freeze-en2fr': {
    type: 'text',
    question: 'to freeze',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "froze frozen geler"
  },
  'freeze-fr2en': {
    type: 'text',
    question: "geler",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "freeze froze frozen"
  },
  'burst-en2fr': {
    type: 'text',
    question: 'to burst',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "burst burst éclater"
  },
  'burst-fr2en': {
    type: 'text',
    question: "éclater",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "burst burst burst"
  },
  'knit-en2fr': {
    type: 'text',
    question: 'to knit',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "knit knit tricoter"
  },
  'knit-fr2en': {
    type: 'text',
    question: "tricoter",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "knit knit knit"
  },
  'leap-en2fr': {
    type: 'text',
    question: 'to leap',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "leapt leapt bondir"
  },
  'leap-fr2en': {
    type: 'text',
    question: "bondir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "leap leapt leapt"
  },
  'withdraw-en2fr': {
    type: 'text',
    question: 'to withdraw',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "withdrew withdrawn se rétracter"
  },
  'withdraw-fr2en': {
    type: 'text',
    question: "se rétracter",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "withdraw withdrew withdrawn"
  },
  'sweat-en2fr': {
    type: 'text',
    question: 'to sweat',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "sweat sweat suer"
  },
  'sweat-fr2en': {
    type: 'text',
    question: "suer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "sweat sweat sweat"
  },
  'bust-en2fr': {
    type: 'text',
    question: 'to bust',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "bust bust bousiller"
  },
  'bust-fr2en': {
    type: 'text',
    question: "bousiller",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "bust bust bust"
  },
  'strive-en2fr': {
    type: 'text',
    question: 'to strive',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "strove striven s'efforcer"
  },
  'strive-fr2en': {
    type: 'text',
    question: "s'efforcer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "strive strove striven"
  },
  'spill-en2fr': {
    type: 'text',
    question: 'to spill',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "spilt spilt renverser"
  },
  'spill-fr2en': {
    type: 'text',
    question: "renverser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "spill spilt spilt"
  },
  'abide-en2fr': {
    type: 'text',
    question: 'to abide',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "abided abided demeurer"
  },
  'abide-fr2en': {
    type: 'text',
    question: "demeurer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "abide abided abided"
  },
  'sweep-en2fr': {
    type: 'text',
    question: 'to sweep',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "swept swept balayer"
  },
  'sweep-fr2en': {
    type: 'text',
    question: "balayer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "sweep swept swept"
  },
  'thrust-en2fr': {
    type: 'text',
    question: 'to thrust',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "thrust thrust pousser"
  },
  'thrust-fr2en': {
    type: 'text',
    question: "pousser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "thrust thrust thrust"
  },
  'forgive-en2fr': {
    type: 'text',
    question: 'to forgive',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "forgave forgiven pardonner"
  },
  'forgive-fr2en': {
    type: 'text',
    question: "pardonner",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "forgive forgave forgiven"
  },
  'shrink-en2fr': {
    type: 'text',
    question: 'to shrink',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "shrank shrunk rétrécir"
  },
  'shrink-fr2en': {
    type: 'text',
    question: "rétrécir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "shrink shrank shrunk"
  },
  'awake-en2fr': {
    type: 'text',
    question: 'to awake',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "awoke awoken se réveiller"
  },
  'awake-fr2en': {
    type: 'text',
    question: "se réveiller",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "awake awoke awoken"
  },
  'melt-en2fr': {
    type: 'text',
    question: 'to melt',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "melted molten fondre"
  },
  'melt-fr2en': {
    type: 'text',
    question: "fondre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "melt melted molten"
  },
  'swear-en2fr': {
    type: 'text',
    question: 'to swear',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "swore sworn jurer"
  },
  'swear-fr2en': {
    type: 'text',
    question: "jurer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "swear swore sworn"
  },
  'lend-en2fr': {
    type: 'text',
    question: 'to lend',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "lent lent prêter"
  },
  'lend-fr2en': {
    type: 'text',
    question: "prêter",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "lend lent lent"
  },
  'shear-en2fr': {
    type: 'text',
    question: 'to shear',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "shore shorn tondre"
  },
  'shear-fr2en': {
    type: 'text',
    question: "tondre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "shear shore shorn"
  },
  'behold-en2fr': {
    type: 'text',
    question: 'to behold',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "beheld beheld contempler"
  },
  'behold-fr2en': {
    type: 'text',
    question: "contempler",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "behold beheld beheld"
  },
  'sting-en2fr': {
    type: 'text',
    question: 'to sting',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "stung stung piquer"
  },
  'sting-fr2en': {
    type: 'text',
    question: "piquer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "sting stung stung"
  },
  'undergo-en2fr': {
    type: 'text',
    question: 'to undergo',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "underwent undergone subir"
  },
  'undergo-fr2en': {
    type: 'text',
    question: "subir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "undergo underwent undergone"
  },
  'shave-en2fr': {
    type: 'text',
    question: 'to shave',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "shaved shaven se raser"
  },
  'shave-fr2en': {
    type: 'text',
    question: "se raser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "shave shaved shaven"
  },
  'grind-en2fr': {
    type: 'text',
    question: 'to grind',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "ground ground broyer"
  },
  'grind-fr2en': {
    type: 'text',
    question: "broyer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "grind ground ground"
  },
  'sneak-en2fr': {
    type: 'text',
    question: 'to sneak',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "snuck snuck se faufiler"
  },
  'sneak-fr2en': {
    type: 'text',
    question: "se faufiler",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "sneak snuck snuck"
  },
  'swell-en2fr': {
    type: 'text',
    question: 'to swell',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "swelled swollen gonfler"
  },
  'swell-fr2en': {
    type: 'text',
    question: "gonfler",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "swell swelled swollen"
  },
  'spit-en2fr': {
    type: 'text',
    question: 'to spit',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "spat spat cracher"
  },
  'spit-fr2en': {
    type: 'text',
    question: "cracher",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "spit spat spat"
  },
  'dwell-en2fr': {
    type: 'text',
    question: 'to dwell',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "dwelt dwelt habiter"
  },
  'dwell-fr2en': {
    type: 'text',
    question: "habiter",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "dwell dwelt dwelt"
  },
  'bleed-en2fr': {
    type: 'text',
    question: 'to bleed',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "bled bled saigner"
  },
  'bleed-fr2en': {
    type: 'text',
    question: "saigner",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "bleed bled bled"
  },
  'weave-en2fr': {
    type: 'text',
    question: 'to weave',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "wove woven tisser"
  },
  'weave-fr2en': {
    type: 'text',
    question: "tisser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "weave wove woven"
  },
  'thrive-en2fr': {
    type: 'text',
    question: 'to thrive',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "throve thriven prospérer"
  },
  'thrive-fr2en': {
    type: 'text',
    question: "prospérer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "thrive throve thriven"
  },
  'creep-en2fr': {
    type: 'text',
    question: 'to creep',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "crept crept ramper"
  },
  'creep-fr2en': {
    type: 'text',
    question: "ramper",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "creep crept crept"
  },
  'sew-en2fr': {
    type: 'text',
    question: 'to sew',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "sewed sewn coudre"
  },
  'sew-fr2en': {
    type: 'text',
    question: "coudre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "sew sewed sewn"
  },
  'withstand-en2fr': {
    type: 'text',
    question: 'to withstand',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "withstood withstood résister à"
  },
  'withstand-fr2en': {
    type: 'text',
    question: "résister à",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "withstand withstood withstood"
  },
  'flee-en2fr': {
    type: 'text',
    question: 'to flee',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "fled fled fuire"
  },
  'flee-fr2en': {
    type: 'text',
    question: "fuire",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "flee fled fled"
  },
  'sling-en2fr': {
    type: 'text',
    question: 'to sling',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "slung slung lancer"
  },
  'sling-fr2en': {
    type: 'text',
    question: "lancer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "sling slung slung"
  },
  'tread-en2fr': {
    type: 'text',
    question: 'to tread',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "trod trodden marcher"
  },
  'tread-fr2en': {
    type: 'text',
    question: "marcher",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "tread trod trodden"
  },
  'preset-en2fr': {
    type: 'text',
    question: 'to preset',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "preset preset prérégler"
  },
  'preset-fr2en': {
    type: 'text',
    question: "prérégler",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "preset preset preset"
  },
  'stride-en2fr': {
    type: 'text',
    question: 'to stride',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "strode stridden marcher à grand pas"
  },
  'stride-fr2en': {
    type: 'text',
    question: "marcher à grand pas",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "stride strode stridden"
  },
  'slit-en2fr': {
    type: 'text',
    question: 'to slit',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "slit slit fendre"
  },
  'slit-fr2en': {
    type: 'text',
    question: "fendre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "slit slit slit"
  },
  'spoil-en2fr': {
    type: 'text',
    question: 'to spoil',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "spoilt spoilt gâcher"
  },
  'spoil-fr2en': {
    type: 'text',
    question: "gâcher",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "spoil spoilt spoilt"
  },
  'sow-en2fr': {
    type: 'text',
    question: 'to sow',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "sowed sown semer"
  },
  'sow-fr2en': {
    type: 'text',
    question: "semer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "sow sowed sown"
  },
  'withhold-en2fr': {
    type: 'text',
    question: 'to withhold',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "withheld withheld refuser"
  },
  'withhold-fr2en': {
    type: 'text',
    question: "refuser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "withhold withheld withheld"
  },
  'forbid-en2fr': {
    type: 'text',
    question: 'to forbid',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "forbade forbidden interdire"
  },
  'forbid-fr2en': {
    type: 'text',
    question: "interdire",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "forbid forbade forbidden"
  },
  'weep-en2fr': {
    type: 'text',
    question: 'to weep',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "wept wept pleurer"
  },
  'weep-fr2en': {
    type: 'text',
    question: "pleurer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "weep wept wept"
  },
  'inlay-en2fr': {
    type: 'text',
    question: 'to inlay',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "inlaid inlaid incruster"
  },
  'inlay-fr2en': {
    type: 'text',
    question: "incruster",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "inlay inlaid inlaid"
  },
  'cling-en2fr': {
    type: 'text',
    question: 'to cling',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "clung clung s'accrocher"
  },
  'cling-fr2en': {
    type: 'text',
    question: "s'accrocher",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "cling clung clung"
  },
  'stink-en2fr': {
    type: 'text',
    question: 'to stink',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "stank stunk puer"
  },
  'stink-fr2en': {
    type: 'text',
    question: "puer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "stink stank stunk"
  },
  'slay-en2fr': {
    type: 'text',
    question: 'to slay',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "slew slain tuer"
  },
  'slay-fr2en': {
    type: 'text',
    question: "tuer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "slay slew slain"
  },
  'fling-en2fr': {
    type: 'text',
    question: 'to fling',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "flung flung lancer"
  },
  'fling-fr2en': {
    type: 'text',
    question: "lancer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "fling flung flung"
  },
  'mislead-en2fr': {
    type: 'text',
    question: 'to mislead',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "misled misled induire en erreur"
  },
  'mislead-fr2en': {
    type: 'text',
    question: "induire en erreur",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "mislead misled misled"
  },
  'foresee-en2fr': {
    type: 'text',
    question: 'to foresee',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "foresaw foreseen prévoir"
  },
  'foresee-fr2en': {
    type: 'text',
    question: "prévoir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "foresee foresaw foreseen"
  },
  'mow-en2fr': {
    type: 'text',
    question: 'to mow',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "mowed mown tondre"
  },
  'mow-fr2en': {
    type: 'text',
    question: "tondre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "mow mowed mown"
  },
  'overtake-en2fr': {
    type: 'text',
    question: 'to overtake',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "overtook overtaken dépasser"
  },
  'overtake-fr2en': {
    type: 'text',
    question: "dépasser",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "overtake overtook overtaken"
  },
  'sunburn-en2fr': {
    type: 'text',
    question: 'to sunburn',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "sunburnt sunburnt prendre un coup de soleil"
  },
  'sunburn-fr2en': {
    type: 'text',
    question: "prendre un coup de soleil",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "sunburn sunburnt sunburnt"
  },
  'sublet-en2fr': {
    type: 'text',
    question: 'to sublet',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "sublet sublet sous-louer"
  },
  'sublet-fr2en': {
    type: 'text',
    question: "sous-louer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "sublet sublet sublet"
  },
  'kneel-en2fr': {
    type: 'text',
    question: 'to kneel',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "knelt knelt s'agenouiller"
  },
  'kneel-fr2en': {
    type: 'text',
    question: "s'agenouiller",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "kneel knelt knelt"
  },
  'rive-en2fr': {
    type: 'text',
    question: 'to rive',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "rived riven déchirer"
  },
  'rive-fr2en': {
    type: 'text',
    question: "déchirer",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "rive rived riven"
  },
  'forsake-en2fr': {
    type: 'text',
    question: 'to forsake',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "forsook forsaken abandonner"
  },
  'forsake-fr2en': {
    type: 'text',
    question: "abandonner",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "forsake forsook forsaken"
  },
  'misunderstand-en2fr': {
    type: 'text',
    question: 'to misunderstand',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "misunderstood misunderstood mal comprendre"
  },
  'misunderstand-fr2en': {
    type: 'text',
    question: "mal comprendre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "misunderstand misunderstood misunderstood"
  },
  'clothe-en2fr': {
    type: 'text',
    question: 'to clothe',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "clad clad habiller, vêtir"
  },
  'clothe-fr2en': {
    type: 'text',
    question: "habiller, vêtir",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "clothe clad clad"
  },
  'vex-en2fr': {
    type: 'text',
    question: 'to vex',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "vexed vexed contrarier"
  },
  'vex-fr2en': {
    type: 'text',
    question: "contrarier",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "vex vexed vexed"
  },
  'frostbite-en2fr': {
    type: 'text',
    question: 'to frostbite',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "frostbit frostbitten avoir des engelures"
  },
  'frostbite-fr2en': {
    type: 'text',
    question: "avoir des engelures",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "frostbite frostbit frostbitten"
  },
  'alight-en2fr': {
    type: 'text',
    question: 'to alight',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "alit alighted descendre"
  },
  'alight-fr2en': {
    type: 'text',
    question: "descendre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "alight alit alighted"
  },
  'slink-en2fr': {
    type: 'text',
    question: 'to slink',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "slunk slunk se faufiler"
  },
  'slink-fr2en': {
    type: 'text',
    question: "se faufiler",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "slink slunk slunk"
  },
  'wring-en2fr': {
    type: 'text',
    question: 'to wring',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "wrung wrung tordre"
  },
  'wring-fr2en': {
    type: 'text',
    question: "tordre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "wring wrung wrung"
  },
  'wend-en2fr': {
    type: 'text',
    question: 'to wend',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "went went se rendre"
  },
  'wend-fr2en': {
    type: 'text',
    question: "se rendre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "wend went went"
  },
  'overhear-en2fr': {
    type: 'text',
    question: 'to overhear',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "overheard overheard surprendre"
  },
  'overhear-fr2en': {
    type: 'text',
    question: "surprendre",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "overhear overheard overheard"
  },
  'overdraw-en2fr': {
    type: 'text',
    question: 'to overdraw',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "overdrew overdrawn mettre à découvert"
  },
  'overdraw-fr2en': {
    type: 'text',
    question: "mettre à découvert",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "overdraw overdrew overdrawn"
  },
  'handwrite-en2fr': {
    type: 'text',
    question: 'to handwrite',
    prompt: 'Passé simple | Participe passé | Traduction',
    answer: "handwrote handwritten écrire à la main"
  },
  'handwrite-fr2en': {
    type: 'text',
    question: "écrire à la main",
    prompt: 'Infinitif | Passé simple | Participe passé',
    answer: "handwrite handwrote handwritten"
  },
  
};