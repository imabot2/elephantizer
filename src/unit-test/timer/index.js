import "Assets/css/style.css"
import "Assets/css/style.css"; // Main CSS style
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS style
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons


import Timer from "Js/timer";
import bootloader from "Js/bootloader/index.js";
bootloader.hide(250);

const div1 = document.createElement('div');
document.body.append(div1);

let timer1 = new Timer();
timer1.init(5, "down");
timer1.start();
timer1.onUpdate(() => {
  div1.innerHTML = `Timer 1: ${timer1.getTime().raw}ms`;
  console.log(timer1.getTime());
})
timer1.onTimerOver(() => {
  div1.innerHTML = "Timer 1 Over";
})