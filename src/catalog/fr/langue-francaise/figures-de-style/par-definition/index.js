import "Catalog/catalog.css";

// Target language of the test
export var metaData = {

  // Quiz flag
  flag: "/static/circle-flags/fr.svg",

  // Special characters for this test
  specialCharacters: ['é', 'à', 'è', 'ê', 'ô', 'û', 'â', 'î', 'ü', 'ù', 'ë', 'œ', 'ç', 'ï', 'É', 'À', 'È', 'Ê', 'Ô', 'Û', 'Â', 'Î', 'Ü', 'Ù', 'Ë', 'Œ', 'Ç', 'Ï'],
}



export var cards = {
  "oxymore": {
    type: 'text',
    question: '<div class="text-md">Association de deux mots de sens contradictoire.</div>',
    prompt: "Quelle est cette figure de style?",
    answer: "oxymore"
  },
  "metaphore": {
    type: 'text',
    question: "<div class='text-md'>Remplacer un mot par un autre d'un champ lexical différent.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "métaphore"
  },
  "comparaison": {
    type: 'text',
    question: "<div class='text-md'>Cette bougie brille comme une étoile.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "comparaison"
  },
  "parabole": {
    type: 'text',
    question: "<div class='text-md'>Histoire courte ponctuée d'une morale.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "parabole"
  },
  "personnification": {
    type: 'text',
    question: "<div class='text-md'>Attribuer des caractéristiques humaines à un objet.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "personnification"
  },
  "accumulation": {
    type: 'text',
    question: "<div class='text-md'>Enumération de mots de même nature.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "accumulation"
  },
  "hyperbole": {
    type: 'text',
    question: "<div class='text-md'>Exagération d'une caractéristique, d'une idée ou d'un sentiment.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "hyperbole"
  },
  "periphrase": {
    type: 'text',
    question: "<div class='text-md'>Remplacer un mot par sa définition ou par une expression plus longue équivalente.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "périphrase"
  },

  // Enumération
};