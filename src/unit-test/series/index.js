import "Assets/css/style.css"; // Main CSS style
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS style
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons


// Boot sequence
import "Js/boot/";
import series from "Js/series";

//console.log('Load a non existing deck');
//series.load('en/non-existing/europe');

async function loadAndShow(path) {
  let deck = await series.load(path)
  console.log(`${Object.keys(deck.cards).length} cards in ${path}`);
}
let deck;

console.log('Load a series of deck');
await loadAndShow('de/lander-auf-der-karte/europa');

await loadAndShow('en/countries-on-the-map/europe');
await loadAndShow('en/countries-on-the-map/africa');
await loadAndShow('en/chess/stockfish-starting-position');

await loadAndShow('fr/pays-sur-la-carte/europe');

await loadAndShow('iso/country-codes/europe');
await loadAndShow('iso/country-codes/europe');

