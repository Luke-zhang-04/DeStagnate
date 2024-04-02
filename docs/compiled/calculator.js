(function(){"use strict";
/**
   * DeStagnate: A lightweight wrapper around vanilla DOM methods
   *
   * @license MIT
   * @version 3.0.0
   * @copyright 2020 - 2024 Luke Zhang
   */const createRef=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{current:e}},isStringable=e=>"boolean"==typeof e||"number"==typeof e||"bigint"==typeof e||"string"==typeof e,bindProps=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t)for(const[r,c]of Object.entries(t))if(isStringable(c))n?e.setAttributeNS(null,r,c.toString()):e.setAttribute(r,c.toString());else if("on"===r.slice(0,2))"function"==typeof c&&e.addEventListener(r.slice(2).toLowerCase(),c);else if("ref"===r&&"object"==typeof c&&("current"in c||Array.isArray(c)))if(Array.isArray(c))for(const t of c)t.current=e;else c.current=e;else null!=c&&console.warn(`${typeof c} ${c} is not a valid DeStagnate prop`)},bindChildren=(e,t)=>{if(null!=t&&!1!==t)if(t instanceof Array)for(const n of t)bindChildren(e,n);else isStringable(t)?e.appendChild(document.createTextNode(t.toString())):t instanceof Node&&e.appendChild(t)};function createElement(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),c=2;c<n;c++)r[c-2]=arguments[c];if("string"==typeof e){const n=document.createElement(e);return bindProps(n,t),bindChildren(n,r),n}return"function"==typeof e?e(t,r):Error(`Invalid type: ${typeof e} ${e}`)}const createElementNS=function(e,t,n){const r=document.createElementNS(e,t);bindProps(r,n,!0);for(var c=arguments.length,l=new Array(c>3?c-3:0),a=3;a<c;a++)l[a-3]=arguments[a];return bindChildren(r,l),r},Fragment=function(e){const t=document.createDocumentFragment();e?.ref&&(e.ref.current=t);for(var n=arguments.length,r=new Array(n>1?n-1:0),c=1;c<n;c++)r[c-1]=arguments[c];return bindChildren(t,r),t},clearChildren=e=>{for(;e.firstChild;)e.removeChild(e.lastChild)};var exports$1=Object.freeze({__proto__:null,createRef:createRef,createElement:createElement,ce:createElement,createElementNS:createElementNS,ceNS:createElementNS,Fragment:Fragment,clearChildren:clearChildren}),_a;let calculation="";const calcDisplay=exports$1.createRef(),updateCalculation=e=>{calculation=e,calcDisplay.current&&(exports$1.clearChildren(calcDisplay.current),calcDisplay.current.appendChild(document.createTextNode(calculation)))},CalcButton=({text:e,append:t})=>exports$1.createElement("div",{class:"col-3 calc-btn",onClick:()=>updateCalculation(calculation+(null!=t?t:e))},e);null===(_a=document.querySelector("#calculator"))||void 0===_a||_a.appendChild(exports$1.createElement("div",null,exports$1.createElement("div",{class:"calc-display",ref:calcDisplay}),exports$1.createElement("div",{class:"calc-btns row"},exports$1.createElement("div",{class:"col-3 calc-btn clear",onClick:()=>updateCalculation("")},"C"),exports$1.createElement("div",{class:"col-3 calc-btn",onClick:()=>updateCalculation(calculation.slice(0,calculation.length-1))},"←"),exports$1.createElement(CalcButton,{text:"%"}),exports$1.createElement(CalcButton,{text:"÷",append:"/"})),exports$1.createElement("div",{class:"calc-btns row"},["7","8","9",["x","*"]].map((e=>exports$1.createElement(CalcButton,{text:e instanceof Array?e[0]:e,append:e instanceof Array?e[1]:e})))),exports$1.createElement("div",{class:"calc-btns row"},["4","5","6","-"].map((e=>exports$1.createElement(CalcButton,{text:e})))),exports$1.createElement("div",{class:"calc-btns row"},["1","2","3","+"].map((e=>exports$1.createElement(CalcButton,{text:e})))),exports$1.createElement("div",{class:"calc-btns row"},exports$1.createElement(CalcButton,{text:"0"}),exports$1.createElement(CalcButton,{text:"."}),exports$1.createElement("div",{class:"col-6 calc-btn equals",onClick:()=>{calculation=eval(calculation).toString(),calcDisplay.current&&(calcDisplay.current.innerText=calculation)}},"="))))})();
