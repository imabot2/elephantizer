import "Assets/css/style.css"; // Main CSS style
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS style
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons


// Boot sequence
import "Js/boot/";

import auth from "Js/auth"
import settings from "Js/settings";
import notifications from "Js/notifications"
import menu from "Js/menu";



console.debug('Open the menu at startup');
menu.open();
menu.navigate('settings');

if (auth.isLogged()) {

}
else {
  notifications.error('Error', "You are not logged in", 10000);
}




    