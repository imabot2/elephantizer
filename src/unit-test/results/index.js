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


await auth.waitForAuthCompleted();
await settings.init();

// Artificialy add data in the results model
import resultsModel from "Js/results/model.js";
//#region data
resultsModel.data ={
    "mode": "typing",
    "selection": [
        "fr/radiotelephonie/alphabet-phonetique-de-l-otan"
    ],
    "questions": [
        {
            "path": "fr/radiotelephonie/alphabet-phonetique-de-l-otan",
            "uid": "o",
            "count": 8,
            "previousScore": 0.9379816629886746,
            "maxDistance": 0,
            "rightAnswer": "Oscar",
            "finalDistance": 0,
            "finalAnswer": "Oscar ",
            "typingTime": 1307,
            "time": 2761,
            "wpm": 55.08798775822494,
            "maxDistanceRatio": 1,
            "finalDistanceRatio": 1,
            "timeToFirstKeyRatio": 0.9446323334726837,
            "timeToFirstKeyRatioUser": 1,
            "memorizationRatio": 0.9446323334726837,
            "memorizationRatioUser": 1,
            "newScore": 0.9387206263757868
        },
        {
            "path": "fr/radiotelephonie/alphabet-phonetique-de-l-otan",
            "uid": "m",
            "count": 5,
            "previousScore": 0.9137567498921964,
            "maxDistance": 0,
            "rightAnswer": "Mike",
            "finalDistance": 0,
            "finalAnswer": "Mike ",
            "typingTime": 737,
            "time": 1582,
            "wpm": 81.41112618724559,
            "maxDistanceRatio": 1,
            "finalDistanceRatio": 1,
            "timeToFirstKeyRatio": 0.9652430371541975,
            "timeToFirstKeyRatioUser": 1,
            "memorizationRatio": 0.9652430371541975,
            "memorizationRatioUser": 1,
            "newScore": 0.9223377977691966
        },
        {
            "path": "fr/radiotelephonie/alphabet-phonetique-de-l-otan",
            "uid": "s",
            "count": 6,
            "previousScore": 0.932336256968446,
            "maxDistance": 0,
            "rightAnswer": "Sierra",
            "finalDistance": 0,
            "finalAnswer": "Sierra ",
            "typingTime": 964,
            "time": 1801,
            "wpm": 87.13692946058092,
            "maxDistanceRatio": 1,
            "finalDistanceRatio": 1,
            "timeToFirstKeyRatio": 0.9654571120683931,
            "timeToFirstKeyRatioUser": 1,
            "memorizationRatio": 0.9654571120683931,
            "memorizationRatioUser": 1,
            "newScore": 0.9370678076970099
        },
        {
            "path": "fr/radiotelephonie/alphabet-phonetique-de-l-otan",
            "uid": "b",
            "count": 5,
            "previousScore": 0.9217516849719779,
            "maxDistance": 0,
            "rightAnswer": "Bravo",
            "finalDistance": 0,
            "finalAnswer": "Bravo ",
            "typingTime": 947,
            "time": 1851,
            "wpm": 76.02956705385428,
            "maxDistanceRatio": 1,
            "finalDistanceRatio": 1,
            "timeToFirstKeyRatio": 0.963624281805544,
            "timeToFirstKeyRatioUser": 1,
            "memorizationRatio": 0.963624281805544,
            "memorizationRatioUser": 1,
            "newScore": 0.9287304511109055
        },
        {
            "path": "fr/radiotelephonie/alphabet-phonetique-de-l-otan",
            "uid": "z",
            "count": 8,
            "previousScore": 0.9275908828304058,
            "maxDistance": 0,
            "rightAnswer": "Zulu",
            "finalDistance": 0,
            "finalAnswer": "Zulu ",
            "typingTime": 605,
            "time": 1395,
            "wpm": 99.17355371900827,
            "maxDistanceRatio": 1,
            "finalDistanceRatio": 1,
            "timeToFirstKeyRatio": 0.966689349134641,
            "timeToFirstKeyRatioUser": 1,
            "memorizationRatio": 0.966689349134641,
            "memorizationRatioUser": 1,
            "newScore": 0.9319351568642098
        },
        {
            "path": "fr/radiotelephonie/alphabet-phonetique-de-l-otan",
            "uid": "o",
            "count": 9,
            "previousScore": 0.9387206263757868,
            "maxDistance": 0,
            "rightAnswer": "Oscar",
            "finalDistance": 0,
            "finalAnswer": "Oscar ",
            "typingTime": 952,
            "time": 1789,
            "wpm": 75.63025210084034,
            "maxDistanceRatio": 1,
            "finalDistanceRatio": 1,
            "timeToFirstKeyRatio": 0.9654571120683931,
            "timeToFirstKeyRatioUser": 1,
            "memorizationRatio": 0.9654571120683931,
            "memorizationRatioUser": 1,
            "newScore": 0.9413942749450473
        },
        {
            "path": "fr/radiotelephonie/alphabet-phonetique-de-l-otan",
            "uid": "t",
            "count": 2,
            "previousScore": 0.8669222420477545,
            "maxDistance": 0,
            "rightAnswer": "Tango",
            "finalDistance": 0,
            "finalAnswer": "Tango ",
            "typingTime": 964,
            "time": 1721,
            "wpm": 74.68879668049793,
            "maxDistanceRatio": 1,
            "finalDistanceRatio": 1,
            "timeToFirstKeyRatio": 0.9675290623520637,
            "timeToFirstKeyRatioUser": 1,
            "memorizationRatio": 0.9675290623520637,
            "memorizationRatioUser": 1,
            "newScore": 0.9004578488158576
        },
        {
            "path": "fr/radiotelephonie/alphabet-phonetique-de-l-otan",
            "uid": "r",
            "count": 7,
            "previousScore": 0.9327124852336047,
            "maxDistance": 0,
            "rightAnswer": "Romeo",
            "finalDistance": 0,
            "finalAnswer": "Romeo ",
            "typingTime": 977,
            "time": 1699,
            "wpm": 73.6949846468782,
            "maxDistanceRatio": 1,
            "finalDistanceRatio": 1,
            "timeToFirstKeyRatio": 0.968397303765049,
            "timeToFirstKeyRatioUser": 1,
            "memorizationRatio": 0.968397303765049,
            "memorizationRatioUser": 1,
            "newScore": 0.9371730875500353
        },
        {
            "path": "fr/radiotelephonie/alphabet-phonetique-de-l-otan",
            "uid": "g",
            "count": 5,
            "previousScore": 0.9647776275947898,
            "maxDistance": 0,
            "rightAnswer": "Golf",
            "finalDistance": 0,
            "finalAnswer": "Golf ",
            "typingTime": 614,
            "time": 1403,
            "wpm": 97.71986970684038,
            "maxDistanceRatio": 1,
            "finalDistanceRatio": 1,
            "timeToFirstKeyRatio": 0.9667151003601329,
            "timeToFirstKeyRatioUser": 1,
            "memorizationRatio": 0.9667151003601329,
            "memorizationRatioUser": 1,
            "newScore": 0.965100539722347
        },
        {
            "path": "fr/radiotelephonie/alphabet-phonetique-de-l-otan",
            "uid": "d",
            "count": 6,
            "previousScore": 0.964261477863734,
            "maxDistance": 0,
            "rightAnswer": "Delta",
            "finalDistance": 0,
            "finalAnswer": "Delta ",
            "typingTime": 850,
            "time": 1961,
            "wpm": 84.70588235294117,
            "maxDistanceRatio": 1,
            "finalDistanceRatio": 1,
            "timeToFirstKeyRatio": 0.9573523772435377,
            "timeToFirstKeyRatioUser": 1,
            "memorizationRatio": 0.9573523772435377,
            "memorizationRatioUser": 1,
            "newScore": 0.9632744634894203
        },
        {
            "path": "fr/radiotelephonie/alphabet-phonetique-de-l-otan",
            "uid": "i",
            "count": 1,
            "previousScore": 0.9638200671190637,
            "maxDistance": 0,
            "rightAnswer": "India",
            "finalDistance": 0,
            "finalAnswer": "India ",
            "typingTime": 711,
            "time": 1640,
            "wpm": 101.26582278481013,
            "maxDistanceRatio": 1,
            "finalDistanceRatio": 1,
            "timeToFirstKeyRatio": 0.962916693785496,
            "timeToFirstKeyRatioUser": 1,
            "memorizationRatio": 0.962916693785496,
            "memorizationRatioUser": 1,
            "newScore": 0.9633683804522799
        },
        {
            "path": "fr/radiotelephonie/alphabet-phonetique-de-l-otan",
            "uid": "n",
            "count": 6,
            "previousScore": 0.9386347650302516,
            "maxDistance": 0,
            "rightAnswer": "November",
            "finalDistance": 0,
            "finalAnswer": "November ",
            "typingTime": 1256,
            "time": 2032,
            "wpm": 85.98726114649682,
            "maxDistanceRatio": 1,
            "finalDistanceRatio": 1,
            "timeToFirstKeyRatio": 0.9670481218832955,
            "timeToFirstKeyRatioUser": 1,
            "memorizationRatio": 0.9670481218832955,
            "memorizationRatioUser": 1,
            "newScore": 0.9426938160092578
        },
        {
            "path": "fr/radiotelephonie/alphabet-phonetique-de-l-otan",
            "uid": "u",
            "count": 6,
            "previousScore": 0.9594941780295354,
            "maxDistance": 0,
            "rightAnswer": "Uniform",
            "finalDistance": 0,
            "finalAnswer": "Uniform ",
            "typingTime": 1610,
            "time": 2388,
            "wpm": 59.62732919254658,
            "maxDistanceRatio": 1,
            "finalDistanceRatio": 1,
            "timeToFirstKeyRatio": 0.9669970980823155,
            "timeToFirstKeyRatioUser": 1,
            "memorizationRatio": 0.9669970980823155,
            "memorizationRatioUser": 1,
            "newScore": 0.9605660237513611
        },
        {
            "path": "fr/radiotelephonie/alphabet-phonetique-de-l-otan",
            "uid": "b",
            "count": 6,
            "previousScore": 0.9287304511109055,
            "maxDistance": 1,
            "rightAnswer": "Bravo",
            "finalDistance": 0,
            "finalAnswer": "Bravo ",
            "typingTime": 1705,
            "time": 2487,
            "wpm": 42.22873900293255,
            "maxDistanceRatio": 0.8,
            "finalDistanceRatio": 1,
            "timeToFirstKeyRatio": 0.966894821455125,
            "timeToFirstKeyRatioUser": 1,
            "memorizationRatio": 0.7735158571641,
            "memorizationRatioUser": 0.8,
            "newScore": 0.9065569376899333
        },
        {
            "path": "fr/radiotelephonie/alphabet-phonetique-de-l-otan",
            "uid": "v",
            "count": 5,
            "previousScore": 0.8506129973600591,
            "maxDistance": 0,
            "rightAnswer": "Victor",
            "finalDistance": 0,
            "finalAnswer": "Victor ",
            "typingTime": 1006,
            "time": 1764,
            "wpm": 83.49900596421472,
            "maxDistanceRatio": 1,
            "finalDistanceRatio": 1,
            "timeToFirstKeyRatio": 0.967503919688779,
            "timeToFirstKeyRatioUser": 1,
            "memorizationRatio": 0.967503919688779,
            "memorizationRatioUser": 1,
            "newScore": 0.8700948177481792
        }
    ],
    "duration": 30002,
    "wpm": 74.18612298585991,
    "memorizationRatioUser": 0.9866666666666667,
    "memorizationRatio": 0.9512719173352414,
    "finalDistanceRatio": 1,
    "maxDistanceRatio": 0.9866666666666667,
    "timeToFirstKey_sec": 0.8712666666666666,
    "timeToFirstKeyRatioUser": 1,
    "score": 7057.117545242699
};
//#endregion data


//await series.load ('fr/alphabet-grec/majuscule');
//await series.load ('fr/pays-sur-la-carte/afrique');
await series.load ('fr/pays-sur-la-carte/europe');
//await series.load ('en/country-outline/europe');
await series.load ('fr/radiotelephonie/alphabet-phonetique-de-l-otan');


// Hide the bootloader
bootloader.hide()

// Show the results
results.process();
results.show();





