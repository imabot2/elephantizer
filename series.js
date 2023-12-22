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
//#endregion Functions to get the folders


// Prepare the series path
let series = [''];
for (const folder of folders) {

  const splited = folder.split('/');
  let path = '';
  if (splited.length == 3) path = `${splited[2]}`;
  if (splited.length == 6) path = `${splited[2]}/${splited[3]}/${splited[4]}/${splited[5]}`;

  if (path!=='') series.push(path);
}


module.exports = { series };