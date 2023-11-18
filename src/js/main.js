import "Assets/css/style.css"; // Main CSS style
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS style
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons

// Boot sequence
import "Js/boot/";
import settings from "Js/settings";
import statistics from "Js/statistics";
import selection from "Js/selection";



document.body.addEventListener('auth-sign-in', async () => { 
  
  await settings.startListeningDB();
  await statistics.startListeningDB();
  
});



document.body.addEventListener('auth-sign-out', async () => {   
  settings.stopListeningDB();
  statistics.stopListeningDB();
  await selection.loadDefaultSelection();
});