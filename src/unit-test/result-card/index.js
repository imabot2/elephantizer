import "Assets/css/style.css"; // Main CSS style
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS style
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons

import bootloader from "Js/bootloader/index.js"; // Page loader
import "Js/signup"; // For user registration
import "Js/menu"; // For burger menu

import auth from "Js/auth";
import settings from "Js/settings";
import series from "Js/series";



await auth.waitForAuthCompleted();
await settings.init();



let qOuter = {
    "path": "fr/pays-sur-la-carte/europe",
    "uid": "ru",
    "count": 0,
    "previousScore": 0,
    "maxDistance": 0,
    "rightAnswer": "Ghana",
    "finalDistance": 0,
    "finalAnswer": "Ghana ",
    "typingTime": 698,
    "time": 3065,
    "wpm": 103.15186246418338,
    "maxDistanceRatio": 1,
    "finalDistanceRatio": 1,
    "timeToFirstKeyRatio": 0.8915236704633315,
    "timeToFirstKeyRatioUser": 0.9723848673743556,
    "memorizationRatio": 0.8915236704633315,
    "memorizationRatioUser": 0.9723848673743556,
    "newScore": 0.8915236704633315
};

let qInner = {
    "path": "en/country-outline/europe",
    "uid": "be",
    "count": 3,
    "previousScore": 0.7586938079282821,
    "maxDistance": 1,
    "rightAnswer": "Belgium",
    "finalDistance": 0,
    "finalAnswer": "Belgium ",
    "typingTime": 3110,
    "time": 4930,
    "wpm": 30.868167202572348,
    "maxDistanceRatio": 0.8571428571428572,
    "finalDistanceRatio": 1,
    "timeToFirstKeyRatio": 0.9271693937650729,
    "timeToFirstKeyRatioUser": 1,
    "memorizationRatio": 0.7947166232272054,
    "memorizationRatioUser": 0.8571428571428572,
    "newScore": 0.692699511753013
};

let qText = {
    "path": "fr/alphabet-grec/majuscule",
    "uid": "Zeta",
    "count": 2,
    "previousScore": 0.4813724566865325,
    "maxDistance": 0,
    "rightAnswer": "Zêta",
    "finalDistance": 2,
    "finalAnswer": "Zêta ",
    "typingTime": 1341,
    "time": 2391,
    "wpm": 44.742729306487696,
    "maxDistanceRatio": 1,
    "finalDistanceRatio": 1,
    "timeToFirstKeyRatio": 0.9593009464285335,
    "timeToFirstKeyRatioUser": 1,
    "memorizationRatio": 0.9593009464285335,
    "memorizationRatioUser": 1,
    "newScore": 0.6406819532671996
};


// Hide the bootloader
bootloader.hide()


let container = document.createElement('div');
container.classList.add('row');
container.classList.add('row-cols-1');
container.classList.add('row-cols-lg-2');
container.classList.add('row-cols-xl-4');
container.classList.add('g-4');
container.classList.add('m-5');
container.classList.add('p-5');
//container.classList.add('bg-secondary');
document.body.append(container);

await series.load ('fr/alphabet-grec/majuscule');
await series.load ('fr/pays-sur-la-carte/afrique');
await series.load ('fr/pays-sur-la-carte/europe');
await series.load ('en/country-outline/europe');


import ResultCard from "Js/resultCard";

let cardText = new ResultCard();
cardText.populate(qText);
cardText.appendTo(container);

let cardOuter = new ResultCard();
cardOuter.populate(qOuter);
cardOuter.appendTo(container);

let cardInner = new ResultCard();
cardInner.populate(qInner);
cardInner.appendTo(container);