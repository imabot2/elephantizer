import "Assets/css/style.css"
import "Assets/css/style.css"; // Main CSS style
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS style
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons

import notifications from "Js/notifications/index.js";
import bootloader from "Js/bootloader/index.js";

bootloader.hide(250);


notifications.error("Error", "This an error toast", 3000);
notifications.warning("Warning", "This a warning toast", 3500);
notifications.success("Success", "This a success toast", 4000);
notifications.info("Info", "This an info toast", 4500);
notifications.message("Message", "This a message toast", 5000);