!function(){"use strict";
/**
   * DeStagnate: A lightweight wrapper around vanilla DOM methods
   *
   * @license MIT
   * @version 3.0.0
   * @copyright 2020 - 2024 Luke Zhang
   */const t=(e,n)=>{if(null!=n&&!1!==n)if(n instanceof Array)for(const o of n)t(e,o);else"boolean"==typeof n||"number"==typeof n||"bigint"==typeof n||"string"==typeof n?e.appendChild(document.createTextNode(n.toString())):n instanceof Node&&e.appendChild(n)},e=(e,n,o,...r)=>{const i=document.createElementNS(e,n);return((t,e,n=!1)=>{if(e)for(const[o,r]of Object.entries(e))"boolean"==typeof r||"number"==typeof r||"bigint"==typeof r||"string"==typeof r?"innerHTML"===o?t.innerHTML=r.toString():n?t.setAttributeNS(null,o,r.toString()):t.setAttribute(o,r.toString()):"on"===o.slice(0,2)?"function"==typeof r&&t.addEventListener(o.slice(2).toLowerCase(),r):"ref"===o&&"object"==typeof r&&"current"in r?r.current=t:null!=r&&console.warn(`${typeof r} ${r} is not a valid DeStagnate prop`)})(i,o,!0),t(i,r),i};var n;const o=250;let r=2.5,i=0;const c=((t=null)=>({current:t}))();setInterval((()=>{i=i+r,c.current&&c.current.setAttribute("x",i.toString()),(i<0||i>o)&&(r*=-1)}),10),null===(n=document.querySelector("#SVG"))||void 0===n||n.appendChild(e("http://www.w3.org/2000/svg","svg",{width:500,height:o,viewBox:"0 0 500 250"},e("http://www.w3.org/2000/svg","rect",{width:o,height:o,fill:r>0?"#0D6EFD":"#28A745",x:i,ref:c})))}();
