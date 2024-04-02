!function(){"use strict";
/**
   * DeStagnate: A lightweight wrapper around vanilla DOM methods
   *
   * @license MIT
   * @version 3.0.0
   * @copyright 2020 - 2024 Luke Zhang
   */const t=t=>"boolean"==typeof t||"number"==typeof t||"bigint"==typeof t||"string"==typeof t,e=function(e,n){let o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(n)for(const[r,i]of Object.entries(n))t(i)?o?e.setAttributeNS(null,r,i.toString()):e.setAttribute(r,i.toString()):"on"===r.slice(0,2)?"function"==typeof i&&e.addEventListener(r.slice(2).toLowerCase(),i):"ref"===r&&"object"==typeof i&&"current"in i?i.current=e:null!=i&&console.warn(`${typeof i} ${i} is not a valid DeStagnate prop`)},n=(e,o)=>{if(null!=o&&!1!==o)if(o instanceof Array)for(const t of o)n(e,t);else t(o)?e.appendChild(document.createTextNode(o.toString())):o instanceof Node&&e.appendChild(o)},o=function(t,o,r){const i=document.createElementNS(t,o);e(i,r,!0);for(var c=arguments.length,l=new Array(c>3?c-3:0),s=3;s<c;s++)l[s-3]=arguments[s];return n(i,l),i};var r;const i=250;let c=2.5,l=0;const s=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{current:t}}();setInterval((()=>{l=l+c,s.current&&s.current.setAttribute("x",l.toString()),(l<0||l>i)&&(c*=-1)}),10),null===(r=document.querySelector("#SVG"))||void 0===r||r.appendChild(o("http://www.w3.org/2000/svg","svg",{width:500,height:i,viewBox:"0 0 500 250"},o("http://www.w3.org/2000/svg","rect",{width:i,height:i,fill:c>0?"#0D6EFD":"#28A745",x:l,ref:s})))}();
