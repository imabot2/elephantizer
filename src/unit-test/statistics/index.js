import "Assets/css/style.css"; // Main CSS style
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS style
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons

import bootloader from "Js/bootloader/index.js"; // Page loader
import auth from "Js/auth"; // Authentification module
import "Js/signup"; // For user registration
import "Js/menu"; // For burger menu
import settings from "Js/settings";
import selection from "Js/selection";
import statistics from "Js/statistics";



await auth.waitForAuthCompleted();
await settings.init();
await statistics.init();
await selection.add('en/countries-on-the-map/europe');


if (!auth.isLogged())
  notifications.warning('Error', "You are not logged in", 10000);
else {
  statistics.get('en/countries-on-the-map/europe', 'gb');
  statistics.get('en/countries-on-the-map/europe', 'a8'); 

  await statistics.save();  
  console.log ('done');
  
}


setTimeout(() => {
  bootloader.hide()
}, 500)
