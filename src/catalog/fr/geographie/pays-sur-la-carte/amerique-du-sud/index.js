import argentina from "Catalog/en/geography/countries-on-the-map/south-america/img/argentina.png";
import bolivia from "Catalog/en/geography/countries-on-the-map/south-america/img/bolivia.png";
import brazil from "Catalog/en/geography/countries-on-the-map/south-america/img/brazil.png";
import chile from "Catalog/en/geography/countries-on-the-map/south-america/img/chile.png";
import colombia from "Catalog/en/geography/countries-on-the-map/south-america/img/colombia.png";
import ecuador from "Catalog/en/geography/countries-on-the-map/south-america/img/ecuador.png";
import guyana from "Catalog/en/geography/countries-on-the-map/south-america/img/guyana.png";
import paraguay from "Catalog/en/geography/countries-on-the-map/south-america/img/paraguay.png";
import peru from "Catalog/en/geography/countries-on-the-map/south-america/img/peru.png";
import suriname from "Catalog/en/geography/countries-on-the-map/south-america/img/suriname.png";
import trinidadAndTobago from "Catalog/en/geography/countries-on-the-map/south-america/img/trinidad-and-tobago.png";
import uruguay from "Catalog/en/geography/countries-on-the-map/south-america/img/uruguay.png";
import venezuela from "Catalog/en/geography/countries-on-the-map/south-america/img/venezuela.png";



// Target language of the test
export var metaData = {

  // Quiz flag
  flag: "/static/circle-flags/fr.svg",


  // Special characters for this test
  specialCharacters: ['é', 'à', 'è', 'ê', 'ô', 'û', 'â', 'î', 'ü', 'ù', 'ë', 'œ', 'ç', 'ï', 'É', 'À', 'È', 'Ê', 'Ô', 'Û', 'Â', 'Î', 'Ü', 'Ù', 'Ë', 'Œ', 'Ç', 'Ï'],

}



export var cards = {
    "ar": {
      image: argentina,
      type: 'outer',
      prompt: "Quel est ce pays ?",
      answer: "Argentine"
    },
    "bo": {
      image: bolivia,
      type: 'outer',
      prompt: "Quel est ce pays ?",
      answer: "Bolivie"
    },
    "br": {
      image: brazil,
      type: 'outer',
      prompt: "Quel est ce pays ?",
      answer: "Brésil"
    },
    "cl": {
      image: chile,
      type: 'outer',
      prompt: "Quel est ce pays ?",
      answer: "Chili"
    },
    "co": {
      image: colombia,
      type: 'outer',
      prompt: "Quel est ce pays ?",
      answer: "Colombie"
    },
    "ec": {
      image: ecuador,
      type: 'outer',
      prompt: "Quel est ce pays ?",
      answer: "Équateur"
    },
    "gy": {
      image: guyana,
      type: 'outer',
      prompt: "Quel est ce pays ?",
      answer: "Guyana"
    },
    "py": {
      image: paraguay,
      type: 'outer',
      prompt: "Quel est ce pays ?",
      answer: "Paraguay"
    },
    "pe": {
      image: peru,
      type: 'outer',
      prompt: "Quel est ce pays ?",
      answer: "Pérou"
    },
    "sr": {
      image: suriname,
      type: 'outer',
      prompt: "Quel est ce pays ?",
      answer: "Suriname"
    },
    "tt": {
      image: trinidadAndTobago,
      type: 'outer',
      prompt: "Quel est ce pays ?",
      answer: "Trinité-et-Tobago"
    },
    "uy": {
      image: uruguay,
      type: 'outer',
      prompt: "Quel est ce pays ?",
      answer: "Uruguay"
    },
    "ve": {
      image: venezuela,
      type: 'outer',
      prompt: "Quel est ce pays ?",
      answer: "Venezuela"
    },
    
} // 13 countries

// True if the carousel is diplayed in the text
export var isCarousel = true;

