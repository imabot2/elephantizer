// Load global style with CSS variables
import "Assets/css/style.css";

// Load language for redirections
import languages from "Js/languages/index.js";
import bootloader from "Js/bootloader/index.js";


let id1 = bootloader.newMessage('mesa 1');
let id2 = bootloader.newMessage('mesa 2');

bootloader.setSuccess(id1)
bootloader.setError(id2)