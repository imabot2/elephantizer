
import translate from "./translate.js"; // Translation for boot process
import bootloader from "Js/bootloader/index.js"; // Page loader
import auth from "Js/auth"; // Authentification module
import "Js/signup"; // For user registration
import "Js/menu"; // For burger menu
import settings from "Js/settings";
import selection from "Js/selection";
import statistics from "Js/statistics";
import cardTyping from "Js/cardTyping";

// Log first message
const versionId = bootloader.log('Elephantizer v2');
bootloader.setSuccess(versionId);

// Wait for authentification
const authId = bootloader.log(translate.authentification);
await auth.waitForAuthCompleted();
bootloader.setSuccess(authId);

// Wait for settings
const settingsId = bootloader.log(translate.settings);
await settings.init();
bootloader.setSuccess(settingsId);


console.log ("Load default deck");
await selection.add('en/countries-on-the-map/europe');
await selection.add('en/countries-on-the-map/africa');

/*
// Wait for statistics
const statisticsId = bootloader.log(translate.statistics);
await statistics.init();


statistics.get ('en/countries-on-the-map/africa', 'za');
bootloader.setSuccess(statisticsId);
statistics.save();



*/




setTimeout(() => {
  bootloader.hide()
}, 500)


