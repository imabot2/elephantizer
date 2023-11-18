import "Assets/css/style.css"; // Main CSS style
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS style
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons

// Boot sequence
import "Js/boot/";
import settings from "Js/settings";




document.body.addEventListener('auth-sign-in', async () => { 
  console.log ('MAIN.JS user logged in')  ;
  await settings.startListeningDB();
});



document.body.addEventListener('auth-sign-out', () => {   
  settings.stopListeningDB();
});