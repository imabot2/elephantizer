// Load global style with CSS variables
import "Assets/css/style.css";

// Load language for redirections
import languages from "Js/languages/index.js";
import bootloader from "Js/bootloader/index.js";

bootloader.newMessage('Message loading 1');
let id1 = bootloader.newMessage('Message OK');
let id2 = bootloader.newMessage('Message pas OK');

bootloader.setSuccess(id1)
bootloader.setError(id2)