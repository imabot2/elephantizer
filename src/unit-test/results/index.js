import "Assets/css/style.css"; // Main CSS style
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS style
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons

import bootloader from "Js/bootloader/index.js"; // Page loader
import "Js/signup"; // For user registration
import "Js/menu"; // For burger menu

import auth from "Js/auth";
import settings from "Js/settings";
import results from "Js/results";
import series from "Js/series";
import history from "Js/history";

await auth.waitForAuthCompleted();
await settings.init();


await history.startListeningDB();

// Artificialy add data in the results model
import resultsModel from "Js/results/model.js";
//#region data
resultsModel.data = {
  "mode": "typing",
  "selection": [
    "fr/geographie/pays-sur-la-carte/afrique",
    "fr/geographie/pays-sur-la-carte/amerique-du-sud",
    "fr/geographie/pays-sur-la-carte/europe",
    "fr/langues-etrangeres/espagnol/les-couleurs"
  ],
  "questions": [
    {
      "path": "fr/geographie/pays-sur-la-carte/europe",
      "uid": "se",
      "count": 0,
      "previousScore": 0,
      "maxDistance": 0,
      "rightAnswer": "Suède",
      "finalDistance": 0,
      "finalAnswer": "Suède ",
      "typingTime": 947,
      "time": 2450,
      "wpm": 76.02956705385428,
      "maxDistanceRatio": 1,
      "finalDistanceRatio": 1,
      "timeToFirstKeyRatio": 0.9545878505957077,
      "timeToFirstKeyRatioUser": 1,
      "memorizationRatio": 0.9545878505957077,
      "memorizationRatioUser": 1,
      "newScore": 0.9545878505957077
    },
    {
      "path": "fr/geographie/pays-sur-la-carte/afrique",
      "uid": "27",
      "count": 0,
      "previousScore": 0,
      "maxDistance": 0,
      "rightAnswer": "Nigéria",
      "finalDistance": 0,
      "finalAnswer": "Nigeria ",
      "typingTime": 1416,
      "time": 4489,
      "wpm": 67.79661016949153,
      "maxDistanceRatio": 1,
      "finalDistanceRatio": 1,
      "timeToFirstKeyRatio": 0.6660781450098392,
      "timeToFirstKeyRatioUser": 0.7328583696575557,
      "memorizationRatio": 0.6660781450098392,
      "memorizationRatioUser": 0.7328583696575557,
      "newScore": 0.6660781450098392
    },
    {
      "path": "fr/geographie/pays-sur-la-carte/amerique-du-sud",
      "uid": "gy",
      "count": 0,
      "previousScore": 0,
      "maxDistance": 2,
      "rightAnswer": "Guyana",
      "finalDistance": 0,
      "finalAnswer": "Guyana ",
      "typingTime": 3713,
      "time": 6549,
      "wpm": 22.623215728521412,
      "maxDistanceRatio": 0.6666666666666667,
      "finalDistanceRatio": 1,
      "timeToFirstKeyRatio": 0.740006049937193,
      "timeToFirstKeyRatioUser": 0.8141982008517754,
      "memorizationRatio": 0.4933373666247954,
      "memorizationRatioUser": 0.5427988005678503,
      "newScore": 0.4933373666247954
    },
    {
      "path": "fr/geographie/pays-sur-la-carte/amerique-du-sud",
      "uid": "pe",
      "count": 0,
      "previousScore": 0,
      "maxDistance": 0,
      "rightAnswer": "Pérou",
      "finalDistance": 0,
      "finalAnswer": "Pérou ",
      "typingTime": 849,
      "time": 2328,
      "wpm": 84.80565371024736,
      "maxDistanceRatio": 1,
      "finalDistanceRatio": 1,
      "timeToFirstKeyRatio": 0.9561231551765238,
      "timeToFirstKeyRatioUser": 1,
      "memorizationRatio": 0.9561231551765238,
      "memorizationRatioUser": 1,
      "newScore": 0.9561231551765238
    },
    {
      "path": "fr/geographie/pays-sur-la-carte/amerique-du-sud",
      "uid": "sr",
      "count": 0,
      "previousScore": 0,
      "maxDistance": 0,
      "rightAnswer": "Suriname",
      "finalDistance": 0,
      "finalAnswer": "Suriname ",
      "typingTime": 1588,
      "time": 3995,
      "wpm": 68.01007556675063,
      "maxDistanceRatio": 1,
      "finalDistanceRatio": 1,
      "timeToFirstKeyRatio": 0.8441583936945897,
      "timeToFirstKeyRatioUser": 0.9287927381653086,
      "memorizationRatio": 0.8441583936945897,
      "memorizationRatioUser": 0.9287927381653086,
      "newScore": 0.8441583936945897
    },
    {
      "path": "fr/geographie/pays-sur-la-carte/europe",
      "uid": "fr",
      "count": 0,
      "previousScore": 0,
      "maxDistance": 0,
      "rightAnswer": "France",
      "finalDistance": 0,
      "finalAnswer": "France ",
      "typingTime": 778,
      "time": 1668,
      "wpm": 107.96915167095116,
      "maxDistanceRatio": 1,
      "finalDistanceRatio": 1,
      "timeToFirstKeyRatio": 0.981385052395275,
      "timeToFirstKeyRatioUser": 1,
      "memorizationRatio": 0.981385052395275,
      "memorizationRatioUser": 1,
      "newScore": 0.981385052395275
    },
    {
      "path": "fr/geographie/pays-sur-la-carte/europe",
      "uid": "bg",
      "count": 0,
      "previousScore": 0,
      "maxDistance": 0,
      "rightAnswer": "Bulgarie",
      "finalDistance": 0,
      "finalAnswer": "Bulgarie ",
      "typingTime": 1233,
      "time": 3059,
      "wpm": 87.5912408759124,
      "maxDistanceRatio": 1,
      "finalDistanceRatio": 1,
      "timeToFirstKeyRatio": 0.9283090376157611,
      "timeToFirstKeyRatioUser": 1,
      "memorizationRatio": 0.9283090376157611,
      "memorizationRatioUser": 1,
      "newScore": 0.9283090376157611
    },
    {
      "path": "fr/geographie/pays-sur-la-carte/europe",
      "uid": "ee",
      "count": 0,
      "previousScore": 0,
      "maxDistance": 0,
      "rightAnswer": "Estonie",
      "finalDistance": 0,
      "finalAnswer": "Estonie ",
      "typingTime": 904,
      "time": 2801,
      "wpm": 106.19469026548673,
      "maxDistanceRatio": 1,
      "finalDistanceRatio": 1,
      "timeToFirstKeyRatio": 0.9208899049509854,
      "timeToFirstKeyRatioUser": 1,
      "memorizationRatio": 0.9208899049509854,
      "memorizationRatioUser": 1,
      "newScore": 0.9208899049509854
    },
    {
      "path": "fr/geographie/pays-sur-la-carte/europe",
      "uid": "lv",
      "count": 0,
      "previousScore": 0,
      "maxDistance": 0,
      "rightAnswer": "Lettonie",
      "finalDistance": 0,
      "finalAnswer": "Lettonie ",
      "typingTime": 1014,
      "time": 2087,
      "wpm": 106.50887573964496,
      "maxDistanceRatio": 1,
      "finalDistanceRatio": 1,
      "timeToFirstKeyRatio": 0.9756482878634699,
      "timeToFirstKeyRatioUser": 1,
      "memorizationRatio": 0.9756482878634699,
      "memorizationRatioUser": 1,
      "newScore": 0.9756482878634699
    },
    {
      "path": "fr/geographie/pays-sur-la-carte/afrique",
      "uid": "15",
      "count": 0,
      "previousScore": 0,
      "maxDistance": 0,
      "rightAnswer": "Lesotho",
      "finalDistance": 0,
      "finalAnswer": "Lesotho ",
      "typingTime": 1539,
      "time": 4284,
      "wpm": 62.37816764132553,
      "maxDistanceRatio": 1,
      "finalDistanceRatio": 1,
      "timeToFirstKeyRatio": 0.7653970126407402,
      "timeToFirstKeyRatioUser": 0.8421348321169891,
      "memorizationRatio": 0.7653970126407402,
      "memorizationRatioUser": 0.8421348321169891,
      "newScore": 0.7653970126407402
    },
    {
      "path": "fr/geographie/pays-sur-la-carte/afrique",
      "uid": "18",
      "count": 0,
      "previousScore": 0,
      "maxDistance": 0,
      "rightAnswer": "Madagascar",
      "finalDistance": 0,
      "finalAnswer": "Madagascar ",
      "typingTime": 2281,
      "time": 3318,
      "wpm": 57.86935554581324,
      "maxDistanceRatio": 1,
      "finalDistanceRatio": 1,
      "timeToFirstKeyRatio": 0.976898833850099,
      "timeToFirstKeyRatioUser": 1,
      "memorizationRatio": 0.976898833850099,
      "memorizationRatioUser": 1,
      "newScore": 0.976898833850099
    },
    {
      "path": "fr/geographie/pays-sur-la-carte/europe",
      "uid": "si",
      "count": 0,
      "previousScore": 0,
      "maxDistance": 1,
      "rightAnswer": "Slovénie",
      "finalDistance": 0,
      "finalAnswer": "Slovénie ",
      "typingTime": 2462,
      "time": 4662,
      "wpm": 43.86677497969131,
      "maxDistanceRatio": 0.875,
      "finalDistanceRatio": 1,
      "timeToFirstKeyRatio": 0.8807970779778824,
      "timeToFirstKeyRatioUser": 0.9691047745703691,
      "memorizationRatio": 0.7706974432306472,
      "memorizationRatioUser": 0.847966677749073,
      "newScore": 0.7706974432306472
    },
    {
      "path": "fr/geographie/pays-sur-la-carte/europe",
      "uid": "ua",
      "count": 0,
      "previousScore": 0,
      "maxDistance": 0,
      "rightAnswer": "Ukraine",
      "finalDistance": 0,
      "finalAnswer": "Ukraine ",
      "typingTime": 727,
      "time": 2056,
      "wpm": 132.04951856946354,
      "maxDistanceRatio": 1,
      "finalDistanceRatio": 1,
      "timeToFirstKeyRatio": 0.9646511270374603,
      "timeToFirstKeyRatioUser": 1,
      "memorizationRatio": 0.9646511270374603,
      "memorizationRatioUser": 1,
      "newScore": 0.9646511270374603
    },
    {
      "path": "fr/geographie/pays-sur-la-carte/afrique",
      "uid": "11",
      "count": 0,
      "previousScore": 0,
      "maxDistance": 0,
      "rightAnswer": "République démocratique du Congo",
      "finalDistance": 0,
      "finalAnswer": "République démocratique du Congo ",
      "typingTime": 5336,
      "time": 7033,
      "wpm": 74.2128935532234,
      "maxDistanceRatio": 1,
      "finalDistanceRatio": 1,
      "timeToFirstKeyRatio": 0.9401669903894613,
      "timeToFirstKeyRatioUser": 1,
      "memorizationRatio": 0.9401669903894613,
      "memorizationRatioUser": 1,
      "newScore": 0.9401669903894613
    },
    {
      "path": "fr/geographie/pays-sur-la-carte/europe",
      "uid": "ba",
      "count": 0,
      "previousScore": 0,
      "maxDistance": 0,
      "rightAnswer": "Bosnie-Herzégovine",
      "finalDistance": 0,
      "finalAnswer": "Bosnie-Herzégovine ",
      "typingTime": 4263,
      "time": 6070,
      "wpm": 53.48346235045742,
      "maxDistanceRatio": 1,
      "finalDistanceRatio": 1,
      "timeToFirstKeyRatio": 0.9301827527072757,
      "timeToFirstKeyRatioUser": 1,
      "memorizationRatio": 0.9301827527072757,
      "memorizationRatioUser": 1,
      "newScore": 0.9301827527072757
    }
  ],
  "duration": 60001,
  "nbCharacters": 157,
  "wpm": 64.85370051635111,
  "wpmRaw": 31.399476675388744,
  "memorizationRatioUser": 0.926303427883785,
  "memorizationRatio": 0.8712340902521752,
  "finalDistance": 0,
  "finalDistanceRatio": 1,
  "maxDistance": 3,
  "maxDistanceRatio": 0.9694444444444446,
  "timeToFirstKey_sec": 1.8532666666666666,
  "timeToFirstKeyRatioUser": 0.9524725943574665,
  "rightAnswers": 15,
  "rightAnswersRaw": 13,
  "progress": 0.8712340902521752,
  "previousScore": 0,
  "newScore": 13.068511353782629,
  "score": 2735.6294495676707
};
//#endregion data

// Load series from artificial selection
for (const path of resultsModel.data.selection) {
  await series.load(path);
}


// Hide the bootloader
bootloader.hide()

// Show the results
results.process(false);
setTimeout(()=> {
  results.show();
}, 500)




