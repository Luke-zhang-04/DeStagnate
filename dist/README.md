# Distribution bundles

These are files which have been bundled together in one file for browser use

Files in `./cjs/*.cjs` and `./es5/*.cjs` use commonjs modules. This means you can `require()` the module with a library such as [require js](https://requirejs.org/)

Files in `./iife/*.js` and `./es5/*.js` expose the library to a single, global variable. In this case, the variable is `DeStagnate`. Once you include this file in a script tag, you can start using the library.

Files that include `.min` are minified and meant for production. Files without are meant for development, and are not minified.

## ES6
Distribution bundles in the `cjs`, `esm`, and `iife` directory do not include helper functions for ES5 compatible code. You should use them if you don't care about supporting ancient browsers such as Internet Explorer, Chrome 50 (~2016), etc. These bundles are a lot smaller.

According to Browserslist, the targeted browsers `account for 90.42% of all users globally`.

## ES5
Distribution bundles in the `es5` directory include helper functions for ES5 compatible code. You should use these if you care about supporting ancient browsers such as Internet Explorer, Chrome 50 (~2016), etc. These bundles are very large.

According to Browserslist, the targeted browsers `account for 97.55% of all users globally`

It should be noted, however, that polyfills are not included. This is because the bundle ends up being massive. It is therefore up to the user to polyfill the bundle. These bundles only work syntactically with es5.

Below is a size comparison between the ES5 compatible bundles and the ES6 compatible bundles.

<a href="https://github.com/Luke-zhang-04/DeStagnate/blob/master/dist/iife/deStagnate.min.js"><img src="https://img.shields.io/github/size/luke-zhang-04/DeStagnate/dist/iife/deStagnate.min.js?label=deStagnate.min.js&style=for-the-badge" alt="min size"></a>
<a href="https://github.com/Luke-zhang-04/DeStagnate/blob/master/dist/es5/deStagnate.min.js"><img src="https://img.shields.io/github/size/luke-zhang-04/DeStagnate/dist/es5/deStagnate.min.js?label=es5/deStagnate.min.js&style=for-the-badge" alt="min size"></a>
