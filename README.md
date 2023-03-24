# Mercadona Product Search

This is an example of how you can perform a search for a Mercadona product.

## Try it

To try this, you should download or open a CodeSpace on this repo.

Then, when you are in the folder, you have to install the packages:

~~~bash
pnpm i
~~~

or with npm

~~~bash
npm i
~~~

or with yarn

~~~bash
yarn
~~~

Then, you can run `{*pnpm/npm/yarn*} start`, this will show you the products that match the query 'patatas fritas'(fries).

If you go to `index.js` file, you can change this query in the `queryArray` constant, just change the content and introduce what you want to search.

## Dependencies

- **xml2js** -> To transform xml to json, used in `transform.js` file.

### DevDependencies

All the devDependencies are the linter config.The linter used is Airbnb
