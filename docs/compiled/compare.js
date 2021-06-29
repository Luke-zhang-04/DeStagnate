!function(){"use strict";const e=(t,n)=>{if(null!=n)if(n instanceof Array)n.forEach((n=>e(t,n)));else if("string"==typeof n||"number"==typeof n)t.appendChild(document.createTextNode(n.toString()));else if(n instanceof Node)t.appendChild(n);else{if(!n.didMount&&t instanceof window.HTMLElement)return void n.mount(t);if(!(t instanceof window.HTMLElement))throw new Error("ERROR: code 3. See https://luke-zhang-04.github.io/DeStagnate/error-codes");n.parent!==t&&(n.parent=t),n.forceUpdate()}};
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
function t(t,n,...o){if("string"==typeof t){const i=document.createElement(t);return((e,t,n=!1)=>{if(t)for(const[o,i]of Object.entries(t))"string"==typeof i||"number"==typeof i?"innerHTML"===o?e.innerHTML=i.toString():n?e.setAttributeNS(null,o,i.toString()):e.setAttribute(o,i.toString()):"on"===o.slice(0,2)?"function"==typeof i&&e.addEventListener(o.slice(2).toLowerCase(),i):"ref"===o&&"object"==typeof i&&"current"in i?i.current=e:void 0!==i&&console.warn(typeof i+" is not a valid DeStagnate child")})(i,n),e(i,o),i}return"function"==typeof t?t(n,o):Error("tagNameOrComponent is of invalid type.")}var n,o;null===(o=null===(n=document.getElementById("compare"))||void 0===n?void 0:n.children[0])||void 0===o||o.appendChild(t("div",{class:"container bg-light text-dark py-1 br-1 my-1"},t("p",{class:"m-0 p-0"},"Hello World!"))),(()=>{var e,t;const n=document.createElement("div"),o=document.createElement("p");n.setAttribute("class","container bg-light text-dark py-1 br-1 my-1"),o.setAttribute("class","m-0 p-0"),o.appendChild(document.createTextNode("Hello World!")),n.appendChild(o),null===(t=null===(e=document.getElementById("compare"))||void 0===e?void 0:e.children[1])||void 0===t||t.appendChild(n)})()}();
