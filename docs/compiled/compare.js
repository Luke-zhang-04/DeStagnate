!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(1));var i,u;null===(u=null===(i=document.getElementById("compare"))||void 0===i?void 0:i.children[0])||void 0===u||u.appendChild(o.default("div",{class:"container bg-light text-dark py-1 br-1 my-1"},o.default("p",{class:"m-0 p-0"},"Hello World!"))),(()=>{var e,t;const n=document.createElement("div"),r=document.createElement("p");n.setAttribute("class","container bg-light text-dark py-1 br-1 my-1"),r.setAttribute("class","m-0 p-0"),r.innerText="Hello World!",n.appendChild(r),null===(t=null===(e=document.getElementById("compare"))||void 0===e?void 0:e.children[1])||void 0===t||t.appendChild(n)})()},function(e,t,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports createElement function for DOM manipulation without DeStagnate class or Refs
 */var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.createElement=void 0;const o=r(n(2)),i=e=>{const t=[];for(const n of e)"object"==typeof n&&n instanceof Array?t.push(...i(n)):t.push(n);return t},u=(e,t)=>{if(null!=t)if(t instanceof Array)for(const n of t)u(e,n);else"string"==typeof t||"number"==typeof t?e.innerText=t.toString():e.appendChild(t)};function l(e,t,n,...r){let l=n;if(n&&r&&(l=n instanceof Array?[...i(n),...i(r)]:[n,...i(r)]),"string"==typeof e){const n=document.createElement(e);return((e,t,n=!1)=>{if(t)for(const[r,i]of Object.entries(t))"string"==typeof i||"number"==typeof i?"innerHTML"===r?e.innerHTML=i.toString():n?e.setAttributeNS(null,r,i.toString()):e.setAttribute(r,i.toString()):"on"===r.slice(0,2)?"function"==typeof i&&e.addEventListener(r.slice(2).toLowerCase(),i):void 0!==i&&console.warn(`WARN: Code 7. See ${o.default}. Params: ${typeof i}, ${r}`)})(n,t),u(n,l),n}return"function"==typeof e?e(t,l):Error("tagNameOrComponent is of invalid type.")}t.createElement=l,t.default=l},function(e,t,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @file share functions and types for createElement and it's variants
 */Object.defineProperty(t,"__esModule",{value:!0}),t.url=void 0,t.url="https://luke-zhang-04.github.io/DeStagnate/error-codes",t.default=t.url}])}));