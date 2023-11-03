
import translate from "./translate.js"; // Translation for boot process
import bootloader from "Js/bootloader/index.js"; // Page loader
import auth from "Js/auth"; // Authentification module
import "Js/signup"; // For user registration
import "Js/menu"; // For burger menu


// Log first message
const versionId = bootloader.log('Elephantizer v2');
bootloader.setSuccess(versionId);

// Wait for authentification
const authId = bootloader.log(translate.authentification);
await auth.waitForAuthCompleted();
bootloader.setSuccess(authId);





setTimeout(() => {
  bootloader.hide()
}, 500)
