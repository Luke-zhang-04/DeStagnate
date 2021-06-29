!function(){"use strict";
/**
     * DeStagnate A simple, ReactJS inspired library to create dynamic components within static sites easier
     *
     * @license MIT
     * @author Luke Zhang luke-zhang-04.github.io
     * @copyright Copyright (C) 2020 - 2021 Luke Zhang
     * @exports createElement function for DOM manipulation without DeStagnate class or Refs
     */const e=(t,l)=>{if(null!=l)if(l instanceof Array)for(const n of l)e(t,n);else"string"==typeof l||"number"==typeof l?t.appendChild(document.createTextNode(l.toString())):t.appendChild(l)};function t(t,l,...n){if("string"==typeof t){const s=document.createElement(t);return((e,t,l=!1)=>{if(t)for(const[n,s]of Object.entries(t))"string"==typeof s||"number"==typeof s?"innerHTML"===n?e.innerHTML=s.toString():l?e.setAttributeNS(null,n,s.toString()):e.setAttribute(n,s.toString()):"on"===n.slice(0,2)?"function"==typeof s&&e.addEventListener(n.slice(2).toLowerCase(),s):void 0!==s&&console.warn(typeof s+" is not a valid DeStagnate child")})(s,l),e(s,n),s}return"function"==typeof t?t(l,n):Error("tagNameOrComponent is of invalid type.")}var l=[["index.html","Home"],["state.html","State example"],["props.html","Props example"],["state-change.html","State Change"],["eventListener.html","Event listener example"],["ref.html","Ref example"],["calculator.html","Calculator Example"],["namespace.html","Namespaced element (SVG) example"],["ticTacToe.html","TicTacToe example"],["ticTacToe.html","Nested component example"],["using-jsx.html","Using JSX"],["docs/","Documentation"],["error-codes.html","Errors Reference"]];(()=>{const e=document.querySelector("footer"),n=(e,l)=>t("li",null,t("a",{class:"text-light",href:e,rel:"noopener noreferrer"},l));null==e||e.setAttribute("class","page-footer font-small light pt-4 bg-tomorrow"),null==e||e.appendChild(t("div",{class:"container-fluid text-center text-md-left"},t("div",{class:"row"},t("div",{class:"col-md-6 mt-md-0 mt-3"},t("h5",{class:"text-uppercase"},"DeStagnate"),t("img",{src:"logo.svg",class:"w-100 w-md-50"})),t("div",{class:"col-md-3 mb-md-0 mb-3"},t("h5",{class:"text-uppercase"},"Examples"),t("ul",{class:"list-unstyled"},t("ul",{class:"list-unstyled"},l.map((e=>n(e[0],e[1])))))),t("div",{class:"col-md-3 mb-md-0 mb-3"},t("h1",{class:"text-uppercase"},"Links"),t("ul",{class:"list-unstyled"},t("ul",{class:"list-unstyled"},n("https://github.com/Luke-zhang-04/DeStagnate","GitHub"),n("https://www.npmjs.com/package/destagnate","NPM"))))))),null==e||e.appendChild(t("div",{class:"footer-copyright text-center py-3"},"Copyright © 2020, ",t("a",{href:"luke-zhang-04.github.io/"},"Luke Zhang")))})()}();
