import "Catalog/catalog.css";


// Target language of the test
export var metaData = {

  // Quiz flag
  flag: "/static/circle-flags/fr.svg",

  // Special characters for this test
  specialCharacters: ['é', 'à', 'è', 'ê', 'ô', 'û', 'â', 'î', 'ü', 'ù', 'ë', 'œ', 'ç', 'ï', 'É', 'À', 'È', 'Ê', 'Ô', 'Û', 'Â', 'Î', 'Ü', 'Ù', 'Ë', 'Œ', 'Ç', 'Ï'],
}



export var cards = {


  "oxymore1": {
    type: 'text',
    question: "<div class='text-sm'>L'obscure clarté</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "oxymore"
  },
  "oxymore2": {
    type: 'text',
    question: "<div class='text-sm'>Un jeune viellard</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "oxymore"
  },
  "oxymore3": {
    type: 'text',
    question: "<div class='text-sm'>Une petite grande bouchée</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "oxymore"
  },
  "oxymore4": {
    type: 'text',
    question: "<div class='text-sm'>Une douce violence</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "oxymore"
  },
  "oxymore4": {
    type: 'text',
    question: "<div class='text-sm'>Le merveilleux malheur</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "oxymore"
  },


  "metaphore1": {
    type: 'text',
    question: "<div class='text-md'>L'homme est un <em>loup</em> pour l’homme.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "métaphore"
  },
  "metaphore2": {
    type: 'text',
    question: "<div class='text-md'>Il a pété un câble.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "métaphore"
  },
  "metaphore3": {
    type: 'text',
    question: "<div class='text-md'>Grand-père est un puit de sagesse.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "métaphore"
  },
  "metaphore4": {
    type: 'text',
    question: "<div class='text-md'>Le temps, c'est de l'argent.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "métaphore"
  },
  "metaphore5": {
    type: 'text',
    question: "<div class='text-md'>Nous allons passer entre les gouttes.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "métaphore"
  },


  "comparaison1": {
    type: 'text',
    question: "<div class='text-md'>Cette bougie brille comme une étoile.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "comparaison"
  },
  "comparaison2": {
    type: 'text',
    question: "<div class='text-md'>La terre est rouge comme le feu.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "comparaison"
  },
  "comparaison3": {
    type: 'text',
    question: "<div class='text-md'>Ses yeux brillaient comme un ciel étoilé.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "comparaison"
  },
  "comparaison4": {
    type: 'text',
    question: "<div class='text-md'>Sa voix était plus douce que le murmure du vent.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "comparaison"
  },
  "comparaison5": {
    type: 'text',
    question: "<div class='text-md'>Il est rapide comme une gazelle.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "comparaison"
  },

  "personnification1": {
    type: 'text',
    question: "<div class='text-md'>J'ai demandé à la lune.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "personnification"
  },
  "personnification2": {
    type: 'text',
    question: "<div class='text-md'>La mer rugissait de colère.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "personnification"
  },
  "personnification3": {
    type: 'text',
    question: "<div class='text-md'>La fleur souriait au soleil du matin.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "personnification"
  }, 
  "personnification4": {
    type: 'text',
    question: "<div class='text-md'>La peur rampait silencieusement.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "personnification"
  }, 
  "personnification5": {
    type: 'text',
    question: "<div class='text-md'>La pluie caressait doucement le sol.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "personnification"
  },


  "accumulation1": {
    type: 'text',
    question: "<div class='text-md'>Elle centre, elle aligne, elle justifie, elle paragraphe, elle tabule, elle mémorise...</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "accumulation"
  },
  "accumulation2": {
    type: 'text',
    question: "<div class='text-md'>Il courut, sauta, tournoya, et finalement s'effondra.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "accumulation"
  },
  "accumulation3": {
    type: 'text',
    question: "<div class='text-md'>La chose la plus étonnante, surprenante, merveilleuse, miraculeuse, étourdissante.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "accumulation"
  },
  "accumulation4": {
    type: 'text',
    question: "<div class='text-md'>Le palais était orné de colonnes, de fresques, de scultures et de fontaines.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "accumulation"
  },
  "accumulation5": {
    type: 'text',
    question: "<div class='text-md'>Un vieux flacon désolé, décrépit, poudreux, sale, abject, visqueux et fêlé.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "accumulation"
  },

  "hyperbole1": {
    type: 'text',
    question: "<div class='text-sm'>Je meurs de faim.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "hyperbole"
  },
  "hyperbole2": {
    type: 'text',
    question: "<div class='text-sm'>C'est un géant.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "hyperbole"
  },
  "hyperbole3": {
    type: 'text',
    question: "<div class='text-sm'>Mourir de rire.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "hyperbole"
  },
  "hyperbole4": {
    type: 'text',
    question: "<div class='text-sm'>Se creuser la cervelle.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "hyperbole"
  },
  "hyperbole5": {
    type: 'text',
    question: "<div class='text-sm'>Avoir dix tonnes de boulot</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "hyperbole"
  },


  "periphrase1": {
    type: 'text',
    question: "<div class='text-sm'>Le pays du fromage</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "périphrase"
  },
  "periphrase2": {
    type: 'text',
    question: "<div class='text-sm'>Le pays du soleil levant</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "périphrase"
  },
  "periphrase3": {
    type: 'text',
    question: "<div class='text-sm'>Les forces de l'ordre</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "périphrase"
  },
  "periphrase4": {
    type: 'text',
    question: "<div class='text-sm'>Le billet vert</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "périphrase"
  },
  "periphrase5": {
    type: 'text',
    question: "<div class='text-sm'>Les combattants du feu</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "périphrase"
  },

  "litote1": {
    type: 'text',
    question: "<div class='text-sm'>C'est pas faux!</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "litote"
  },
  "litote2": {
    type: 'text',
    question: "<div class='text-sm'>Ce n'est pas mal du tout!</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "litote"
  },
  "litote3": {
    type: 'text',
    question: "<div class='text-sm'>Il ne fait pas chaud.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "litote"
  },
  "litote4": {
    type: 'text',
    question: "<div class='text-sm'>Elle n'est pas vilaine.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "litote"
  },
  "litote5": {
    type: 'text',
    question: "<div class='text-sm'>Il n'est plus tout jeune.</div>",
    prompt: "Quelle est cette figure de style?",
    answer: "litote"
  },
};