import "Assets/css/style.css"; // Main CSS style
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS style
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons

import bootloader from "Js/bootloader/index.js"; // Page loader
import "Js/signup"; // For user registration
import "Js/menu"; // For burger menu
import results from "Js/results";


// Artificialy add data in the results model
import resultsModel from "Js/results/model.js";
resultsModel.data = {
  "mode": "typing",
  "selection": [
      "fr/pays-sur-la-carte/europe"
  ],
  "questions": [
      {
          "path": "fr/pays-sur-la-carte/europe",
          "uid": "pt",
          "count": 0,
          "maxDistance": 1,
          "rightAnswer": "Portugal",
          "finalDistance": 0,
          "finalAnswer": "Portugal ",
          "typingTime": 2313,
          "time": 3694,
          "wpm": 46.69260700389105,
          "maxDistanceRatio": 0.875,
          "finalDistanceRatio": 1,
          "timeToFirstKeyRatio": 1,
          "memorizationRatio": 0.875
      },
      {
          "path": "fr/pays-sur-la-carte/europe",
          "uid": "ee",
          "count": 0,
          "maxDistance": 1,
          "rightAnswer": "Estonie",
          "finalDistance": 0,
          "finalAnswer": "Estonie ",
          "typingTime": 1883,
          "time": 4360,
          "wpm": 50.982474774296335,
          "maxDistanceRatio": 0.8571428571428572,
          "finalDistanceRatio": 1,
          "timeToFirstKeyRatio": 0.9840750843233825,
          "memorizationRatio": 0.8434929294200423
      },
      {
          "path": "fr/pays-sur-la-carte/europe",
          "uid": "va",
          "count": 0,
          "maxDistance": 0,
          "rightAnswer": "Vatican",
          "finalDistance": 0,
          "finalAnswer": "Vatican ",
          "typingTime": 1055,
          "time": 4718,
          "wpm": 90.99526066350711,
          "maxDistanceRatio": 1,
          "finalDistanceRatio": 1,
          "timeToFirstKeyRatio": 0.8508852033585244,
          "memorizationRatio": 0.8508852033585244
      },
      {
          "path": "fr/pays-sur-la-carte/europe",
          "uid": "de",
          "count": 0,
          "maxDistance": 0,
          "rightAnswer": "Allemagne",
          "finalDistance": 0,
          "finalAnswer": "Allemagne ",
          "typingTime": 1485,
          "time": 2638,
          "wpm": 80.8080808080808,
          "maxDistanceRatio": 1,
          "finalDistanceRatio": 1,
          "timeToFirstKeyRatio": 1,
          "memorizationRatio": 1
      },
      {
          "path": "fr/pays-sur-la-carte/europe",
          "uid": "sm",
          "count": 0,
          "maxDistance": 0,
          "rightAnswer": "Saint-Marin",
          "finalDistance": 0,
          "finalAnswer": "Saint-Marin ",
          "typingTime": 1802,
          "time": 3644,
          "wpm": 79.91120976692564,
          "maxDistanceRatio": 1,
          "finalDistanceRatio": 1,
          "timeToFirstKeyRatio": 1,
          "memorizationRatio": 1
      },
      {
          "path": "fr/pays-sur-la-carte/europe",
          "uid": "hu",
          "count": 0,
          "maxDistance": 0,
          "rightAnswer": "Hongrie",
          "finalDistance": 0,
          "finalAnswer": "Hongrie ",
          "typingTime": 1085,
          "time": 10763,
          "wpm": 88.47926267281106,
          "maxDistanceRatio": 1,
          "finalDistanceRatio": 1,
          "timeToFirstKeyRatio": 0.21008051445131193,
          "memorizationRatio": 0.21008051445131193
      }
  ],
  "duration": 30000,
  "wpm": 68.58568014132807,
  "memorizationRatio": 0.7965764412049797
};


// Hide the bootloader
bootloader.hide()

// Show the results
results.show();





