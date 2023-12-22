const { series } = require("./series.js");


// Prepare the sitemap items for each selection
let sitemap = {};
sitemap.date = new Date().toISOString();
sitemap.selection = "\n";

// For each serie
for (let path of series) {

  // For each language
    if (path.length) path = `/${path.replace(/^\/|\/$/g, '')}/`
    sitemap.selection +=
      `<url>\n` +
      `\t<loc>https://elephantizer.com${path}</loc>\n` +
      `\t<lastmod>${sitemap.date}</lastmod>\n` +
      `\t<priority>0.80</priority>\n` +
      `\t<changefreq>weekly</changefreq>\n` +
      `</url>\n`;
  //}
}

module.exports = { sitemap };