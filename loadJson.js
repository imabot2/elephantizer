const fs = require('fs');


// Load and return JSON data
const loadJson = (filename) => {
  const data = fs.readFileSync(filename, "utf8");
  return JSON.parse(data);
}


module.exports = { loadJson };
