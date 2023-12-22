const { series } = require("./series.js");
const { loadJson } = require("./loadJson.js");




let meta = [];


for (const path of series) {
  let { json } = require(`./src/catalog/${path}/meta.js`);
  json.path = path;
  meta.push (json);  
}


console.log (meta)

module.exports = { meta };