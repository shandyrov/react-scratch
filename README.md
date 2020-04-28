## React App Skeleton

## App Dev Dependencies:

* [Babel](https://babeljs.io)
* [Webpack](http://webpack.github.io)
* [React](https://reactjs.org)

## Project Structure
* ```package.json``` - Configure dependencies
* ```dist/*``` - Files generated by webpack, incuding index.html. These are the assets that should be HTTP served
* ```src/components``` - Home of reuseable components
* ```src/assets``` - Images, favicons ...
* ```webpack.common.config.js``` - Common configuration
* ```webpack.dev.config.js``` - Development configuration
* ```webpack.prod.config.js``` - Production configuration

## Install Dependencies

```js
npm install
```

## Development
```js
npm run dev
```

## Build
```js
npm run build
```