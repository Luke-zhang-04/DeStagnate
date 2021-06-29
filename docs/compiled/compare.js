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
function t(t,n,...o){if("string"==typeof t){const r=document.createElement(t);return((e,t,n=!1)=>{if(t)for(const[o,r]of Object.entries(t))"string"==typeof r||"number"==typeof r?"innerHTML"===o?e.innerHTML=r.toString():n?e.setAttributeNS(null,o,r.toString()):e.setAttribute(o,r.toString()):"on"===o.slice(0,2)?"function"==typeof r&&e.addEventListener(o.slice(2).toLowerCase(),r):"ref"===o&&"object"==typeof r&&"current"in r?r.current=e:void 0!==r&&console.warn(typeof r+" is not a valid DeStagnate child")})(r,n),e(r,o),r}return"function"==typeof t?t(n,o):Error("tagNameOrComponent is of invalid type.")}var n,o;null===(o=null===(n=document.getElementById("compare"))||void 0===n?void 0:n.children[0])||void 0===o||o.appendChild(t("div",{class:"container bg-light text-dark py-1 br-1 my-1"},t("p",{class:"m-0 p-0"},"Hello World!"))),(()=>{var e,t;const n=document.createElement("div"),o=document.createElement("p");n.setAttribute("class","container bg-light text-dark py-1 br-1 my-1"),o.setAttribute("class","m-0 p-0"),o.appendChild(document.createTextNode("Hello World!")),n.appendChild(o),null===(t=null===(e=document.getElementById("compare"))||void 0===e?void 0:e.children[1])||void 0===t||t.appendChild(n)})()}();
