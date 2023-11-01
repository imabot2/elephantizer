import "Assets/css/style.css"
import bootloader from "Js/bootloader/index.js";

for (let i = 0; i < 30; i++) {

  setTimeout(() => {
    let id = bootloader.newMessage(`Message #${i}: Si velut placidiora consilio.`);

    setTimeout(function () {
      if (id % 2)
        bootloader.setSuccess(id);
      else
        bootloader.setError(id);
    }.bind(id), i * 75)


  }, i * 50)
}



setTimeout(() => {
  bootloader.onLastMessageResolved().then(() => {
    bootloader.clearConsole();
    setTimeout(()=> {
      bootloader.hide(1000);
    })
  })
}, 500)