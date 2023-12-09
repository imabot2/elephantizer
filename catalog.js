const fs = require('fs');
const path = require('path');

//#region Functions to get the folders
function flatten(lists) {
  return lists.reduce((a, b) => a.concat(b), []);
}

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath)
    .map(file => path.join(srcpath, file))
    .filter(path => fs.statSync(path).isDirectory());
}

function getDirectoriesRecursive(srcpath) {
  return [srcpath, ...flatten(getDirectories(srcpath).map(getDirectoriesRecursive))];
}


let folders = getDirectoriesRecursive('./src/catalog/');
folders = folders.filter((path) => { return path.split('/').length == 5 })
//#endregion Functions to get the folders


folders.forEach((path) => {
  let data = fs.readFileSync(path + '/seo.json');
  let json = JSON.parse(data);
  console.log (json);
})


console.log(folders);


const catalog = [

];

module.exports = { catalog };