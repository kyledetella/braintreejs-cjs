braintree.js CommonJS integration
=================================

This is a baseline demonstration of how to incorporate [braintree.js](https://developers.braintreepayments.com/javascript+ruby/sdk/client/setup) into your CommonJS based application. This example uses [browserify](http://browserify.org/), but different module loaders should work as well.

### Install

```
npm i
```

### Build

```
npm run build
```

### Run

```
npm run server
```

- - -

It is worth noting that in its current form, the `braintree.js` package on [npm](https://www.npmjs.org/package/braintree-web) ships only a minified file. This build is bundled with a [UMD](https://github.com/forbeslindesay/umd) transport which allows the file to be consumed via CommonJS.
