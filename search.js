const xml2js = require('xml2js');
const https = require('https');
// 'https://tienda.mercadona.es/sitemap.xml'
function searchUpdatedProducts(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        let data = '';
        res.on('data', (chunk) => { data += chunk.toString(); });
        res.on('end', () => {
          xml2js.parseString(data, (err, result) => {
            if (result) {
              resolve(result.urlset.url);
            } else {
              reject(err);
            }
          });
        });
      }
    });
  });
}

module.exports = searchUpdatedProducts;
