!function(){"use strict";const e=(t,n)=>{if(null!=n)if(n instanceof Array)for(const o of n)e(t,o);else"string"==typeof n||"number"==typeof n?t.appendChild(document.createTextNode(n.toString())):t.appendChild(n)};
/**
     * DeStagnate
     * A simple, ReactJS inspired library to create dynamic components within static sites easier
     * @copyright Copyright (C) 2020 Luke Zhang
     * @author Luke Zhang luke-zhang-04.github.io
     * @license MIT
     * @version 1.8.0
     * @exports createElement function for DOM manipulation without DeStagnate class or Refs
     */function t(t,n,...o){if("string"==typeof t){const a=document.createElement(t);return((e,t,n=!1)=>{if(t)for(const[o,a]of Object.entries(t))"string"==typeof a||"number"==typeof a?"innerHTML"===o?e.innerHTML=a.toString():n?e.setAttributeNS(null,o,a.toString()):e.setAttribute(o,a.toString()):"on"===o.slice(0,2)?"function"==typeof a&&e.addEventListener(o.slice(2).toLowerCase(),a):void 0!==a&&console.warn(`WARN: Code 7. See https://luke-zhang-04.github.io/DeStagnate/error-codes. Params: ${typeof a}, ${o}`)})(a,n),e(a,o),a}return"function"==typeof t?t(n,o):Error("tagNameOrComponent is of invalid type.")}var n,o=[["index.html","Home"],["state.html","State example"],["props.html","Props example"],["eventListener.html","Event listener example"],["ref.html","Ref example"],["calculator.html","Calculator Example"],["namespace.html","Namespaced element (SVG) example"],["ticTacToe.html","TicTacToe example"],["ticTacToe.html","Nested component example"],["using-jsx.html","Using JSX"],["docs/","Documentation"],["error-codes.html","Errors Reference"]];null===(n=document.getElementById("nav"))||void 0===n||n.appendChild(t("div",{class:"p-4 bg-light"},t("div",{class:"row"},t("div",{class:"col-12 col-sm-6"},t("a",{href:"https://github.com/Luke-zhang-04/DeStagnate/blob/master/dist/deStagnate.min.mjs",target:"_blank",rel:"noopener noreferrer",class:"pl-4"},t("img",{src:"https://img.badgesize.io/https:/raw.githubusercontent.com/Luke-zhang-04/DeStagnate/master/dist/deStagnate.min.mjs?label=deStagnate.min.mjs%20gzip&compression=gzip&style=for-the-badge&bg=blue",alt:"bundle min size",class:"mb-3"})),t("ul",null,o.map((e=>{return n=e[0],o=e[1],t("li",null,t("a",{class:"text-dark",href:n},o));var n,o})))),t("div",{class:"col-12 col-sm-6 col-lg-4"},t("a",{href:"/"},t("img",{src:"./logo.svg",class:"w-100"}))))))}();
