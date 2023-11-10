import "Assets/css/style.css"; // Main CSS style
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS style
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons


// Boot sequence
import "Js/boot/";

import auth from "Js/auth"
import settings from "Js/settings";
import notifications from "Js/notifications"
import series from "Js/series";



console.log('Load a deck');
series.load('en/countries-on-the-map/europe');




