const { series } = require("./series.js");


// Prepare the sitemap items for each selection
let sitemap = {};
sitemap.date = new Date().toISOString();
sitemap.selection = "\n";

// For each serie
for (const path of series) {

  // For each language
  //for (const lang of translations) {

    sitemap.selection +=
      `<url>\n` +
      `\t<loc>https://elephantizer.com/${path}\n` +
      `\t<lastmod>${sitemap.date}</lastmod>\n` +
      `\t<priority>0.80</priority>\n` +
      `\t<changefreq>weekly</changefreq>\n` +
      `</url>\n`;
  //}
}

module.exports = { sitemap };