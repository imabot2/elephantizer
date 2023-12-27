import "Assets/css/style.css"; // Main CSS style
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS style
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons


// Boot sequence
import "Js/boot/";
import mistyped from "Js/mistyped";


console.log (mistyped.sanitize('Exemple'));
console.log (mistyped.sanitize('Multiple     spaces'));
console.log (mistyped.sanitize('     Spaces at the end and beginning      '));
console.log (mistyped.sanitize('Space   -    around    -   hypens'));

mistyped.setAnswer('Same answer');
mistyped.update('Same answer');
console.log ('0 => ', mistyped.count());

mistyped.setAnswer('First');
mistyped.update('Birst');
console.log ('1 => ', mistyped.count());

mistyped.setAnswer('UPPER');
mistyped.update('upper');
console.log ('5 => ', mistyped.count());

mistyped.setAnswer('hyp-hen');
mistyped.update('hyp hen');
console.log ('0 => ', mistyped.count());

mistyped.setAnswer('àéïôù');
mistyped.update('aeiou');
console.log ('0 => ', mistyped.count());

mistyped.setAnswer('Second');
mistyped.update('Sacond');
console.log ('1 => ', mistyped.count());

mistyped.setAnswer('Shorter');
mistyped.update('Longer answer');
console.log ('13 => ', mistyped.count());

mistyped.setAnswer('Longer expected answer');
mistyped.update('Shorter');
console.log ('22 => ', mistyped.count());

mistyped.setAnswer('Same');
mistyped.update('Same longer and longer');
console.log ('18 => ', mistyped.count());

mistyped.setAnswer('abcdef');
mistyped.update('xbcdef');
mistyped.update('axcdef');
mistyped.update('abcdxf');
console.log ('3 => ', mistyped.count());

mistyped.setAnswer('abc');
mistyped.update('a');
mistyped.update('ab');
mistyped.update('abd');
mistyped.update('ab');
mistyped.update('abc');
console.log ('1 => ', mistyped.count());


mistyped.setAnswer('abc');
mistyped.update('abcde');
mistyped.update('abc');
console.log ('2 => ', mistyped.count());