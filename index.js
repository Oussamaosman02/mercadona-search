const updatedProducts = require('./transform');

const queryArray = ['patatas', 'fritas'];

function comparar(arrayOfQueries, products) {
  const arr = arrayOfQueries.map((element) => {
    const filterProducts = products.filter((obj) => obj.query?.includes(element));
    return filterProducts;
  });
  const match = arr.reduce((acu, act) => acu.filter((elem) => act.includes(elem)));
  console.log(match.length > 1 ? match : "There isn't any product that match the query");
}
updatedProducts.then((res) => {
  comparar(queryArray, res);
});
