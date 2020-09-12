!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(1)),l=r(n(3)),a={createElement:o.default};var i;null===(i=document.getElementById("nav"))||void 0===i||i.appendChild(a.createElement("div",{class:"p-4 bg-light"},a.createElement("div",{class:"row"},a.createElement("div",{class:"col-12 col-sm-6"},a.createElement("a",{href:"https://github.com/Luke-zhang-04/DeStagnate/blob/master/dist/es6/deStagnate.bundle.min.js",target:"_blank",rel:"noopener noreferrer",class:"pl-4"},a.createElement("img",{src:"https://img.shields.io/github/size/luke-zhang-04/DeStagnate/dist/es6/deStagnate.bundle.min.js?label=es6/deStagnate.bundle.min.js&style=for-the-badge",alt:"bundle min size",class:"mb-3"})),a.createElement("ul",null,l.default.map(e=>{return t=e[0],n=e[1],a.createElement("li",null,a.createElement("a",{class:"text-dark",href:t},n));var t,n}))),a.createElement("div",{class:"col-12 col-sm-6 col-lg-4"},a.createElement("a",{href:"/"},a.createElement("img",{src:"./logo.svg",class:"w-100"}))))))},function(e,t,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports createElement function for DOM manipulation without DeStagnate class or Refs
 */var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.createElement=void 0;const o=r(n(2)),l=e=>{const t=[];for(const n of e)"object"==typeof n&&n instanceof Array?t.push(...l(n)):t.push(n);return t},a=(e,t)=>{if(null!=t)if(t instanceof Array)for(const n of t)a(e,n);else"string"==typeof t||"number"==typeof t?e.innerText=t.toString():e.appendChild(t)};function i(e,t,n,...r){let i=n;if(n&&r&&(i=n instanceof Array?[...l(n),...l(r)]:[n,...l(r)]),"string"==typeof e){const n=document.createElement(e);return((e,t,n=!1)=>{if(t)for(const[r,l]of Object.entries(t))"string"==typeof l||"number"==typeof l?"innerHTML"===r?e.innerHTML=l.toString():n?e.setAttributeNS(null,r,l.toString()):e.setAttribute(r,l.toString()):"on"===r.slice(0,2)?"function"==typeof l&&e.addEventListener(r.slice(2).toLowerCase(),l):console.warn(`WARN: Code 7. See ${o.default}. Params: ${typeof l}, ${r}`)})(n,t),a(n,i),n}return"function"==typeof e?e(t,i):Error("tagNameOrComponent is of invalid type.")}t.createElement=i,t.default=i},function(e,t,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @file share functions and types for createElement and it's variants
 */Object.defineProperty(t,"__esModule",{value:!0}),t.url=void 0,t.url="https://luke-zhang-04.github.io/DeStagnate/error-codes",t.default=t.url},function(e,t,n){"use strict";e.exports=[["index.html","Home"],["state.html","State example"],["props.html","Props example"],["eventListener.html","Event listener example"],["ref.html","Ref example"],["calculator.html","Calculator Example"],["namespace.html","Namespaced element (SVG) example"],["ticTacToe.html","TicTacToe example"],["ticTacToe.html","Nested component example"],["using-jsx.html","Using JSX"],["docs/","Documentation"],["error-codes.html","Errors Reference"]]}])}));
