import "Assets/css/style.css"; // Main CSS style
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS style
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons

import bootloader from "Js/bootloader/index.js"; // Page loader
import "Js/signup"; // For user registration
import "Js/menu"; // For burger menu

import auth from "Js/auth";
import settings from "Js/settings";
import sideCards from "Js/sideCards";



await auth.waitForAuthCompleted();
await settings.init();



// Hide the bootloader
bootloader.hide()