!function(){"use strict";
/**
   * DeStagnate: A lightweight wrapper around vanilla DOM methods
   *
   * @license MIT
   * @version 3.0.0
   * @copyright 2020 - 2024 Luke Zhang
   */const t=t=>"boolean"==typeof t||"number"==typeof t||"bigint"==typeof t||"string"==typeof t,e=(t,e)=>{if(Array.isArray(e))for(const r of e)r.current=t;else e.current=t},r=function(r,n){let o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(n)for(const[i,l]of Object.entries(n))t(l)?o?r.setAttributeNS(null,i,l.toString()):r.setAttribute(i,l.toString()):i.startsWith("on")&&"function"==typeof l?r.addEventListener(i.slice(2).toLowerCase(),l):"ref"===i&&"object"==typeof l&&("current"in l||Array.isArray(l))?e(r,l):null===l?o?r.removeAttributeNS(null,i):r.removeAttribute(i):void 0!==l&&console.warn(`Invalid prop type ${typeof l} at ${i}: ${l}`)},n=(e,r)=>{if(null!=r&&!1!==r)if(Array.isArray(r))for(const t of r)n(e,t);else t(r)?e.appendChild(document.createTextNode(r.toString())):r instanceof Node?e.appendChild(r):console.warn(`Invalid child type ${typeof r}: ${r}`)};function o(t,e,o){const i=document.createElementNS(t,e);r(i,o,!0);for(var l=arguments.length,u=new Array(l>3?l-3:0),s=3;s<l;s++)u[s-3]=arguments[s];return n(i,u),i}class i{ref;#t;constructor(t,e){this.#t=t,this.ref=e??function(){return{current:arguments.length>0&&void 0!==arguments[0]?arguments[0]:null}}()}get value(){return this.#t}set value(t){this.update(t)}update(t){this.#t=t,null!==this.ref.current&&this.updateDOM(this.ref)}}var l;const u="http://www.w3.org/2000/svg",s=250;let a=2.5;const c=new class extends i{constructor(){super(0)}updateDOM(t){r(t.current,{x:this.value.toString(),fill:a>0?"#0D6EFD":"#28A745"},!0)}};setInterval((()=>{c.value+=a,(c.value<0||c.value>s)&&(a*=-1)}),10),null===(l=document.querySelector("#SVG"))||void 0===l||l.appendChild(o(u,"svg",{width:500,height:s,viewBox:"0 0 500 250"},o(u,"rect",{width:s,height:s,fill:a>0?"#0D6EFD":"#28A745",x:c.value,ref:c.ref})))}();
