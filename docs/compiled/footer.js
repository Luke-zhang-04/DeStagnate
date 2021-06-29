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
function t(t,n,...o){if("string"==typeof t){const l=document.createElement(t);return((e,t,n=!1)=>{if(t)for(const[o,l]of Object.entries(t))"string"==typeof l||"number"==typeof l?"innerHTML"===o?e.innerHTML=l.toString():n?e.setAttributeNS(null,o,l.toString()):e.setAttribute(o,l.toString()):"on"===o.slice(0,2)?"function"==typeof l&&e.addEventListener(o.slice(2).toLowerCase(),l):"ref"===o&&"object"==typeof l&&"current"in l?l.current=e:void 0!==l&&console.warn(typeof l+" is not a valid DeStagnate child")})(l,n),e(l,o),l}return"function"==typeof t?t(n,o):Error("tagNameOrComponent is of invalid type.")}var n=[["index.html","Home"],["state.html","State example"],["props.html","Props example"],["state-change.html","State Change"],["eventListener.html","Event listener example"],["ref.html","Ref example"],["calculator.html","Calculator Example"],["namespace.html","Namespaced element (SVG) example"],["ticTacToe.html","TicTacToe example"],["ticTacToe.html","Nested component example"],["using-jsx.html","Using JSX"],["docs/","Documentation"],["error-codes.html","Errors Reference"]];(()=>{const e=document.querySelector("footer"),o=(e,n)=>t("li",null,t("a",{class:"text-light",href:e,rel:"noopener noreferrer"},n));null==e||e.setAttribute("class","page-footer font-small light pt-4 bg-tomorrow"),null==e||e.appendChild(t("div",{class:"container-fluid text-center text-md-left"},t("div",{class:"row"},t("div",{class:"col-md-6 mt-md-0 mt-3"},t("h5",{class:"text-uppercase"},"DeStagnate"),t("img",{src:"logo.svg",class:"w-100 w-md-50"})),t("div",{class:"col-md-3 mb-md-0 mb-3"},t("h5",{class:"text-uppercase"},"Examples"),t("ul",{class:"list-unstyled"},t("ul",{class:"list-unstyled"},n.map((e=>o(e[0],e[1])))))),t("div",{class:"col-md-3 mb-md-0 mb-3"},t("h1",{class:"text-uppercase"},"Links"),t("ul",{class:"list-unstyled"},t("ul",{class:"list-unstyled"},o("https://github.com/Luke-zhang-04/DeStagnate","GitHub"),o("https://www.npmjs.com/package/destagnate","NPM"))))))),null==e||e.appendChild(t("div",{class:"footer-copyright text-center py-3"},"Copyright © 2020, ",t("a",{href:"luke-zhang-04.github.io/"},"Luke Zhang")))})()}();
