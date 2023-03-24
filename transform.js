const searchUpdatedProducts = require('./search');

const updatedProducts = searchUpdatedProducts('https://tienda.mercadona.es/sitemap.xml').then((url) => {
  const data = url.map((dato) => {
    const id = dato.loc[0].split('/')[4];
    const productSlug = dato.loc[0].split('/')[5];
    const query = productSlug?.split('-');
    const product = `https://tienda.mercadona.es/api/products/${id}`;
    return { id, product, query };
  });
  return data;
})
  .catch((err) => err);

module.exports = updatedProducts;
// product node originally look like this
/*
{
  loc: [
    'https://tienda.mercadona.es/product/65140/chicle-sandia-lamina-hacendado-paquete'
  ],
  priority: [ '0.9' ],
  lastmod: [ '2023-03-24' ],
  changefreq: [ 'daily' ]
},
*/
