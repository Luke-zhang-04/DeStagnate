!function(){"use strict";const e=(t,n)=>{null!=n&&(n instanceof Array?n.forEach((n=>e(t,n))):"string"==typeof n||"number"==typeof n?t.appendChild(document.createTextNode(n.toString())):n instanceof Node?t.appendChild(n):((e,t)=>{if(!(e instanceof HTMLElement))throw new Error("ERROR: code 3. See https://luke-zhang-04.github.io/DeStagnate/error-codes");t.didMount?(t.parent!==e&&(t.parent=e),t.forceUpdate()):t.mount(e)})(t,n))};
/**
     * Component A simple, ReactJS inspired library to create dynamic components within static sites easier
     *
     * @license MIT
     * @author Luke Zhang luke-zhang-04.github.io
     * @file share Functions and types for createElement and it's variants
     * @copyright Copyright (C) 2020 - 2021 Luke Zhang
     */
/**
     * DeStagnate A simple, ReactJS inspired library to create dynamic components within static sites easier
     *
     * @license MIT
     * @author Luke Zhang luke-zhang-04.github.io
     * @copyright Copyright (C) 2020 - 2021 Luke Zhang
     * @exports createElement function for DOM manipulation
     */
function t(t,n,...a){if("string"==typeof t){const o=document.createElement(t);return((e,t,n=!1)=>{if(t)for(const[a,o]of Object.entries(t))"string"==typeof o||"number"==typeof o?"innerHTML"===a?e.innerHTML=o.toString():n?e.setAttributeNS(null,a,o.toString()):e.setAttribute(a,o.toString()):"on"===a.slice(0,2)?"function"==typeof o&&e.addEventListener(a.slice(2).toLowerCase(),o):"ref"===a&&"object"==typeof o&&"current"in o?o.current=e:void 0!==o&&console.warn(typeof o+" is not a valid DeStagnate child")})(o,n),e(o,a),o}return"function"==typeof t?t(n,a):Error("tagNameOrComponent is of invalid type.")}var n,a=[["index.html","Home"],["state.html","State example"],["props.html","Props example"],["state-change.html","State Change"],["eventListener.html","Event listener example"],["ref.html","Ref example"],["calculator.html","Calculator Example"],["namespace.html","Namespaced element (SVG) example"],["ticTacToe.html","TicTacToe example"],["ticTacToe.html","Nested component example"],["using-jsx.html","Using JSX"],["docs/","Documentation"],["error-codes.html","Errors Reference"]];null===(n=document.getElementById("nav"))||void 0===n||n.appendChild(t("div",{class:"p-4 bg-light"},t("div",{class:"row"},t("div",{class:"col-12 col-sm-6"},t("a",{href:"https://github.com/Luke-zhang-04/DeStagnate/blob/master/dist/iife/deStagnate.min.js",target:"_blank",rel:"noopener noreferrer",class:"pl-4"},t("img",{src:"https://img.badgesize.io/https:/raw.githubusercontent.com/Luke-zhang-04/DeStagnate/master/dist/iife/deStagnate.min.js?label=iife/deStagnate.min.js%20gzip&compression=gzip&style=for-the-badge&bg=blue",alt:"bundle min size",class:"mb-3"})),t("ul",null,a.map((e=>{return n=e[0],a=e[1],t("li",null,t("a",{class:"text-dark",href:n},a));var n,a})))),t("div",{class:"col-12 col-sm-6 col-lg-4"},t("a",{href:"/"},t("img",{src:"./logo.svg",class:"w-100"}))))))}();
