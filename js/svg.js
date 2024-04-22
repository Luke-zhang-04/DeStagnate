!function(){"use strict";
/**
   * DeStagnate: A lightweight wrapper around vanilla DOM methods
   *
   * @license MIT
   * @version 3.2.0
   * @copyright 2020 - 2024 Luke Zhang
   */const e=e=>"boolean"==typeof e||"number"==typeof e||"bigint"==typeof e||"string"==typeof e,t=(e,t)=>{if(Array.isArray(t))for(const n of t)n.current=e;else t.current=e};function*n(e){for(const t in e)e.hasOwnProperty(t)&&(yield[t,e[t]])}const r=(r,o,i=!1)=>{if(o)for(const[l,s]of n(o))if("boolean"==typeof s)r.toggleAttribute(l,s);else if(e(s))i?r.setAttributeNS(null,l,s.toString()):r.setAttribute(l,s.toString());else if(l.startsWith("on")&&"function"==typeof s)r.addEventListener(l.slice(2).toLowerCase(),s);else if("ref"===l&&"object"==typeof s&&("current"in s||Array.isArray(s)))t(r,s);else if("style"===l&&"object"==typeof s&&r instanceof HTMLElement)for(const[e,t]of n(s))void 0!==t&&(r.style[e]=t??"");else null===s?i?r.removeAttributeNS(null,l):r.removeAttribute(l):void 0!==s&&console.warn(`Invalid prop at ${l}: ${s} for ${r}`)},o=(t,n)=>{if(null!=n&&!1!==n)if(Array.isArray(n))for(const e of n)o(t,e);else e(n)?t.appendChild(document.createTextNode(n.toString())):n instanceof Node?t.appendChild(n):console.warn(`Invalid child type ${typeof n}: ${n}`)},i=Object.freeze({xml:"http://www.w3.org/XML/1998/namespace",mathML:"http://www.w3.org/1998/Math/MathML",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/xmlns/"});function l(e,t,n,...i){const l=document.createElementNS(e,t);return r(l,n,!0),o(l,i),l}function s(e,t,...n){if("string"==typeof e){const[l,s]=e.split(":"),u=void 0!==l,a=u&&l in i?document.createElementNS(i[l],s):document.createElement(e);return r(a,t,u),o(a,n),a}if("function"==typeof e)return e(t??{},n);throw new Error(`Invalid element type ${typeof e}: ${e}`)}class u{ref;#e;constructor(e,t){this.#e=e,this.ref=t??((e=null)=>({current:e}))()}get value(){return this.#e}set value(e){this.update(e)}update(e){this.#e=e,null!==this.ref.current&&this.updateDOM(this.ref)}}var a,c;const f=250;let w=2.5;class h extends u{constructor(){super(0)}updateDOM(e){r(e.current,{x:this.value.toString(),fill:w>0?"#0D6EFD":"#28A745"},!0)}}const p=new h;setInterval((()=>{p.value+=w,(p.value<0||p.value>f)&&(w*=-1)}),10),null===(a=document.querySelector("#svg-1"))||void 0===a||a.appendChild(s("svg:svg",{width:500,height:f,viewBox:"0 0 500 250",fill:"none"},s("svg:rect",{width:f,height:f,fill:w>0?"#0D6EFD":"#28A745",x:p.value,ref:p.ref})));const v="http://www.w3.org/2000/svg",d=new h;setInterval((()=>{d.value+=w}),10),null===(c=document.querySelector("#svg-2"))||void 0===c||c.appendChild(l(v,"svg",{width:500,height:f,viewBox:"0 0 500 250"},l(v,"rect",{width:f,height:f,fill:w>0?"#0D6EFD":"#28A745",x:d.value,ref:d.ref})))}();