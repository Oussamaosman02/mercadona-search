const searchUpdatedProducts = require('./search');

const url = 'https://tienda.mercadona.es/sitemap.xml';
searchUpdatedProducts(url).then((res) => console.log(res));
