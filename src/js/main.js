import "Assets/css/style.css"; // Main CSS style
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS style
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons

// Boot sequence
import "Js/boot/";
import settings from "Js/settings";
import statistics from "Js/statistics";
import selection from "Js/selection";
import core from "Js/core";
import menu from "Js/menu";
import loader from "Js/loader";
import results from "Js/results";
import auth from "Js/auth";
import answerBar from "./answerBar";
import overlay from "./overlay";


// On sign in, load statistics
document.body.addEventListener('auth-sign-in', async () => {
  await settings.startListeningDB();
  await statistics.startListeningDB();  
  core.reset();
});


// On sign out, stop listening DB
document.body.addEventListener('auth-sign-out', async () => {
  settings.stopListeningDB();
  statistics.stopListeningDB();
  await selection.loadDefaultSelection();
  core.reset();
});


// Reset the memory test when the menu is hidden
menu.onHide(async () => {

  // If there is series currently loading, show the loader
  if (selection.numberSeriesLoading()) {
    loader.show();
    await selection.onAllSeriesLoaded();
    console.log ('loader.hide')
  }  
  core.reset();
})

// When the menu modal is closed, set the focus to the overlay or answer bar
// Needed because Bootstrap modals set focus to the body when closed
menu.onHidden(() => {
  if (auth.isLogged()) overlay.focus(); else answerBar.focus();
})


// When the results are closed, restart a new typing test
results.onHide(() => {
  core.reset();
})

// When the results modal is closed,  set the focus to the overlay or answer bar
// Needed because Bootstrap modals set focus to the body when closed
results.onHidden(() => {
  if (auth.isLogged()) overlay.focus(); else answerBar.focus();
})




