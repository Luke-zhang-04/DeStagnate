!function(){"use strict";
/**
   * DeStagnate: A lightweight wrapper around vanilla DOM methods
   *
   * @license MIT
   * @version 3.0.0
   * @copyright 2020 - 2024 Luke Zhang
   */const t=t=>"boolean"==typeof t||"number"==typeof t||"bigint"==typeof t||"string"==typeof t,e=(t,e)=>{if(Array.isArray(e))for(const n of e)n.current=t;else e.current=t},n=(e,r)=>{if(null!=r&&!1!==r)if(Array.isArray(r))for(const t of r)n(e,t);else t(r)?e.appendChild(document.createTextNode(r.toString())):r instanceof Node?e.appendChild(r):console.warn(`Invalid child type ${typeof r}: ${r}`)};var r;const o=["primary","secondary","success","info","warning","danger","light","dark"];let i=o[0];const l=function(){return{current:arguments.length>0&&void 0!==arguments[0]?arguments[0]:null}}();null===(r=document.querySelector("#elistener"))||void 0===r||r.appendChild(function(r,o){for(var i=arguments.length,l=new Array(i>2?i-2:0),c=2;c<i;c++)l[c-2]=arguments[c];if("string"==typeof r){const i=document.createElement(r);return function(n,r){let o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(r)for(const[i,l]of Object.entries(r))t(l)?o?n.setAttributeNS(null,i,l.toString()):n.setAttribute(i,l.toString()):i.startsWith("on")&&"function"==typeof l?n.addEventListener(i.slice(2).toLowerCase(),l):"ref"===i&&"object"==typeof l&&("current"in l||Array.isArray(l))?e(n,l):null===l?o?n.removeAttributeNS(null,i):n.removeAttribute(i):void 0!==l&&console.warn(`Invalid prop type ${typeof l} at ${i}: ${l}`)}(i,o),n(i,l),i}if("function"==typeof r)return r(o,l);throw new Error(`Invalid element type ${typeof r}: ${r}`)}("button",{class:`btn btn-${i}`,ref:l,onClick:()=>((t=Math.floor(Math.random()*o.length))=>{i=o[t],l.current&&(l.current.className=`btn btn-${i}`)})()},"Click Me!"))}();
