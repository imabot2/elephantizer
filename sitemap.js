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
folders = folders.filter((path) => { return path.split('/').length == 6 })
//#endregion Functions to get the folders

const { translations } = require("./translations.js");

// Prepare the series path
let series = [];
for (const folder of folders) {

  const splited = folder.split('/');
  const path = `${splited[2]}/${splited[3]}/${splited[4]}/${splited[5]}`;
  series.push(path);
}

// Prepare the sitemap items for each selection
let sitemap = {};
sitemap.date = new Date().toISOString();
sitemap.selection = "\n";

// For each serie
for (const path of series) {

  // For each language
  for (const lang of translations) {

    sitemap.selection +=
      `<url>\n` +
      `\t<loc>https://elephantizer.com/${lang.path}?selection=${path}</loc>\n` +
      `\t<lastmod>${sitemap.date}</lastmod>\n` +
      `\t<priority>0.80</priority>\n` +
      `\t<changefreq>weekly</changefreq>\n` +
      `</url>\n`;
  }
}

module.exports = { sitemap };