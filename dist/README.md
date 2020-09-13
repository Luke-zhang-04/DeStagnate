# Distribution bundles

These are files which have been bundled together in one file for browser use

Files with the `.cjs` extension use commonjs modules. This means you can `require()` the module with a library such as [require js](https://requirejs.org/)

Files with the `.js` extension expose the library to a single, global variable. In this case, the variable is `DeStagnate`. Once you include this file in your scripts, you can start using functions, such as `DeStagnate.Component`, and `DeStagnate.createElement`.

Files that include `.min` are minified and meant for production. Files without are meant for development.

## ES6
Distribution bundles in the es6 directory do not include helper functions for ES5 compatible code. You should use them if you don't care about supporting ancient browsers such as Internet Explorer, Chrome 50 (~2016), etc. These bundles are a lot smaller.

Below is a size comparison between the ES5 compatible bundles and the ES6 compatible bundles.

<a href="https://github.com/Luke-zhang-04/DeStagnate/blob/master/dist/es6/deStagnate.bundle.min.js"><img src="https://img.shields.io/github/size/luke-zhang-04/DeStagnate/dist/es6/deStagnate.bundle.min.js?label=es6/deStagnate.bundle.min.js&style=for-the-badge" alt="bundle min size"></a>
<a href="https://github.com/Luke-zhang-04/DeStagnate/blob/master/dist/deStagnate.bundle.min.js"><img src="https://img.shields.io/github/size/luke-zhang-04/DeStagnate/dist/deStagnate.bundle.min.js?label=deStagnate.bundle.min.js&style=for-the-badge" alt="bundle min size"></a>
