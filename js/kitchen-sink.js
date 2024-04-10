!function(){"use strict";
/**
   * DeStagnate: A lightweight wrapper around vanilla DOM methods
   *
   * @license MIT
   * @version 3.1.0
   * @copyright 2020 - 2024 Luke Zhang
   */const t=function(){return{current:arguments.length>0&&void 0!==arguments[0]?arguments[0]:null}},e=t=>"boolean"==typeof t||"number"==typeof t||"bigint"==typeof t||"string"==typeof t,n=(t,e)=>{if(Array.isArray(e))for(const n of e)n.current=t;else e.current=t},l=function(t,l){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(l)for(const[i,o]of Object.entries(l))e(o)?r?t.setAttributeNS(null,i,o.toString()):t.setAttribute(i,o.toString()):i.startsWith("on")&&"function"==typeof o?t.addEventListener(i.slice(2).toLowerCase(),o):"ref"===i&&"object"==typeof o&&("current"in o||Array.isArray(o))?n(t,o):null===o?r?t.removeAttributeNS(null,i):t.removeAttribute(i):void 0!==o&&console.warn(`Invalid prop type ${typeof o} at ${i}: ${o}`)},r=(t,n)=>{if(null!=n&&!1!==n)if(Array.isArray(n))for(const e of n)r(t,e);else e(n)?t.appendChild(document.createTextNode(n.toString())):n instanceof Node?t.appendChild(n):console.warn(`Invalid child type ${typeof n}: ${n}`)},i=Object.freeze({xml:"http://www.w3.org/XML/1998/namespace",mathML:"http://www.w3.org/1998/Math/MathML",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/xmlns/"});function o(t,e){for(var n=arguments.length,o=new Array(n>2?n-2:0),s=2;s<n;s++)o[s-2]=arguments[s];if("string"==typeof t){const[n,s]=t.split(":"),u=void 0!==n,a=u&&n in i?document.createElementNS(i[n],s):document.createElement(t);return l(a,e,u),r(a,o),a}if("function"==typeof t)return t(e??null,o);throw new Error(`Invalid element type ${typeof t}: ${t}`)}const s=function(t){const e=document.createDocumentFragment();t?.ref&&n(e,t.ref);for(var l=arguments.length,i=new Array(l>1?l-1:0),o=1;o<l;o++)i[o-1]=arguments[o];return r(e,i),e};class u{ref;#t;constructor(e,n){this.#t=e,this.ref=n??t()}get value(){return this.#t}set value(t){this.update(t)}update(t){this.#t=t,null!==this.ref.current&&this.updateDOM(this.ref)}}var a,c,d,v=function(t,e,n,l){var r;e[0]=0;for(var i=1;i<e.length;i++){var o=e[i++],s=e[i]?(e[0]|=o?1:2,n[e[i++]]):e[++i];3===o?l[0]=s:4===o?l[1]=Object.assign(l[1]||{},s):5===o?(l[1]=l[1]||{})[e[++i]]=s:6===o?l[1][e[++i]]+=s+"":o?(r=t.apply(s,v(t,s,n,["",null])),l.push(r),s[0]?e[0]|=2:(e[i-2]=0,e[i]=r)):l.push(s)}return l},h=new Map;const p=250;class m extends u{constructor(){super(0)}updateDOM(t){l(t.current,{x:this.value.toString(),fill:this.value%2==0?"#0D6EFD":"#28A745"},!0)}}{const e=new m,n=t(),l=()=>o("svg:svg",{width:500,height:p,viewBox:"0 0 500 250",fill:"none"},o("svg:rect",{width:p,height:p,fill:e.value%2==0?"#0D6EFD":"#28A745",x:e.value,ref:e.ref}));null===(a=document.getElementById("my-container-1"))||void 0===a||a.appendChild(o(s,null,o("div",{class:"my-class",ref:n,onMyCustomEvent:t=>{console.log(t),e.update(e.value+25)}},o("p",null,"My paragraph",o("i",null," italic"))),o("button",{onClick:t=>{var e;return null===(e=n.current)||void 0===e?void 0:e.dispatchEvent(new CustomEvent("mycustomevent",{detail:t}))},class:"btn btn-secondary mr-3"},"Click me!"),o(l,{state:e})))}{const e=new m,n=t(),l=()=>o("svg:svg",{width:500,height:p,viewBox:"0 0 500 250",fill:"none"},o("svg:rect",{width:p,height:p,fill:e.value%2==0?"#0D6EFD":"#28A745",x:e.value,ref:e.ref}));null===(c=document.getElementById("my-container-2"))||void 0===c||c.appendChild(o(s,null,o("div",{class:"my-class",ref:n,onMyCustomEvent:t=>{console.log(t),e.update(e.value+25)}},o("p",null,"My paragraph",o("i",null," italic"))),o("button",{onClick:t=>{var e;return null===(e=n.current)||void 0===e?void 0:e.dispatchEvent(new CustomEvent("mycustomevent",{detail:t}))},class:"btn btn-secondary mr-3"},"Click me!"),o(l,{state:e})))}{const e=function(t){var e=h.get(this);return e||(e=new Map,h.set(this,e)),(e=v(this,e.get(t)||(e.set(t,e=function(t){for(var e,n,l=1,r="",i="",o=[0],s=function(t){1===l&&(t||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?o.push(0,t,r):3===l&&(t||r)?(o.push(3,t,r),l=2):2===l&&"..."===r&&t?o.push(4,t,0):2===l&&r&&!t?o.push(5,0,!0,r):l>=5&&((r||!t&&5===l)&&(o.push(l,0,r,n),l=6),t&&(o.push(l,t,0,n),l=6)),r=""},u=0;u<t.length;u++){u&&(1===l&&s(),s(u));for(var a=0;a<t[u].length;a++)e=t[u][a],1===l?"<"===e?(s(),o=[o],l=3):r+=e:4===l?"--"===r&&">"===e?(l=1,r=""):r=e+r[0]:i?e===i?i="":r+=e:'"'===e||"'"===e?i=e:">"===e?(s(),l=1):l&&("="===e?(l=5,n=r,r=""):"/"===e&&(l<5||">"===t[u][a+1])?(s(),3===l&&(o=o[0]),l=o,(o=o[0]).push(2,0,l),l=0):" "===e||"\t"===e||"\n"===e||"\r"===e?(s(),l=2):r+=e),3===l&&"!--"===r&&(l=4,o=o[0])}return s(),o}(t)),e),arguments,[])).length>1?e:e[0]}.bind(o),n=new m,l=t(),r=()=>e`<svg:svg
            width=${500}
            height=${p}
            viewBox="0 0 ${500} ${p}"
            fill="none"
        >
            <svg:rect
                width=${p}
                height=${p}
                fill=${n.value%2==0?"#0D6EFD":"#28A745"}
                x=${n.value}
                ref=${n.ref}
            />
        </svg:svg>`;null===(d=document.getElementById("my-container-3"))||void 0===d||d.appendChild(e`<${s}>
            <div
                class="my-class"
                ref=${l}
                onMyCustomEvent=${t=>{console.log(t),n.update(n.value+25)}}
            >
                <p>
                    My paragraph
                    <i> italic</i>
                </p>
            </div>
            <button
                onClick=${t=>{var e;return null===(e=l.current)||void 0===e?void 0:e.dispatchEvent(new CustomEvent("mycustomevent",{detail:t}))}}
                class="btn btn-secondary mr-3"
            >
                Click me!
            </button>
            <${r} state=${n} />
        <//>`)}{const t="http://www.w3.org/2000/svg";let e=0;const n=document.getElementById("my-container-4"),l=document.createElementNS(t,"svg");l.setAttributeNS(null,"width",500..toString()),l.setAttributeNS(null,"height",p.toString()),l.setAttributeNS(null,"viewBox","0 0 500 250"),l.setAttributeNS(null,"fill","none");const r=document.createElementNS(t,"rect");r.setAttributeNS(null,"width",p.toString()),r.setAttributeNS(null,"height",p.toString()),r.setAttributeNS(null,"fill",e%2==0?"#0D6EFD":"#28A745"),r.setAttributeNS(null,"x",e.toString()),l.appendChild(r);const i=document.createElement("div");i.classList.add("my-class"),i.addEventListener("mycustomevent",(t=>{console.log(t),e+=25,r.setAttributeNS(null,"fill",e%2==0?"#0D6EFD":"#28A745"),r.setAttributeNS(null,"x",e.toString())}));const o=document.createElement("p");o.innerText="My paragraph";const s=document.createElement("i");s.innerText=" italic",o.appendChild(s),i.appendChild(o),null==n||n.appendChild(i);const u=document.createElement("button");u.addEventListener("click",(t=>i.dispatchEvent(new CustomEvent("mycustomevent",{detail:t})))),u.innerText="Click me!",u.className="btn btn-secondary mr-3",null==n||n.appendChild(u),null==n||n.appendChild(l)}}();
