!function(){"use strict";
/**
   * DeStagnate: A lightweight wrapper around vanilla DOM methods
   *
   * @license MIT
   * @version 3.2.0
   * @copyright 2020 - 2024 Luke Zhang
   */const t=(t=null)=>({current:t}),e=t=>"boolean"==typeof t||"number"==typeof t||"bigint"==typeof t||"string"==typeof t,n=(t,e)=>{if(Array.isArray(e))for(const n of e)n.current=t;else e.current=t};function*l(t){for(const e in t)t.hasOwnProperty(e)&&(yield[e,t[e]])}const r=(t,r,o=!1)=>{if(r)for(const[i,s]of l(r))if("boolean"==typeof s)t.toggleAttribute(i,s);else if(e(s))o?t.setAttributeNS(null,i,s.toString()):t.setAttribute(i,s.toString());else if(i.startsWith("on")&&"function"==typeof s)t.addEventListener(i.slice(2).toLowerCase(),s);else if("ref"===i&&"object"==typeof s&&("current"in s||Array.isArray(s)))n(t,s);else if("style"===i&&"object"==typeof s&&t instanceof HTMLElement)for(const[e,n]of l(s))void 0!==n&&(t.style[e]=n??"");else null===s?o?t.removeAttributeNS(null,i):t.removeAttribute(i):void 0!==s&&console.warn(`Invalid prop at ${i}: ${s} for ${t}`)},o=(t,n)=>{if(null!=n&&!1!==n)if(Array.isArray(n))for(const e of n)o(t,e);else e(n)?t.appendChild(document.createTextNode(n.toString())):n instanceof Node?t.appendChild(n):console.warn(`Invalid child type ${typeof n}: ${n}`)},i=Object.freeze({xml:"http://www.w3.org/XML/1998/namespace",mathML:"http://www.w3.org/1998/Math/MathML",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/xmlns/"});function s(t,e,...n){if("string"==typeof t){const[l,s]=t.split(":"),u=void 0!==l,a=u&&l in i?document.createElementNS(i[l],s):document.createElement(t);return r(a,e,u),o(a,n),a}if("function"==typeof t)return t(e??{},n);throw new Error(`Invalid element type ${typeof t}: ${t}`)}const u=({ref:t},...e)=>{const l=document.createDocumentFragment();return t&&n(l,t),o(l,e),l};class a{ref;#t;constructor(e,n){this.#t=e,this.ref=n??t()}get value(){return this.#t}set value(t){this.update(t)}update(t){this.#t=t,null!==this.ref.current&&this.updateDOM(this.ref)}}var c,d,p,h=function(t,e,n,l){var r;e[0]=0;for(var o=1;o<e.length;o++){var i=e[o++],s=e[o]?(e[0]|=i?1:2,n[e[o++]]):e[++o];3===i?l[0]=s:4===i?l[1]=Object.assign(l[1]||{},s):5===i?(l[1]=l[1]||{})[e[++o]]=s:6===i?l[1][e[++o]]+=s+"":i?(r=t.apply(s,h(t,s,n,["",null])),l.push(r),s[0]?e[0]|=2:(e[o-2]=0,e[o]=r)):l.push(s)}return l},v=new Map;const m=250;class f extends a{constructor(){super(0)}updateDOM(t){r(t.current,{x:this.value.toString(),fill:this.value%2==0?"#0D6EFD":"#28A745"},!0)}}const g='"My paragraph" <i>Escaped</i> <script>alert("xss")<\/script>';{const e=new f,n=t(),l=({state:t})=>s("svg:svg",{width:500,height:m,viewBox:"0 0 500 250",fill:"none"},s("svg:rect",{width:m,height:m,fill:t.value%2==0?"#0D6EFD":"#28A745",x:t.value,ref:t.ref}));null===(c=document.getElementById("my-container-1"))||void 0===c||c.appendChild(s(u,null,s("div",{class:"my-class",ref:n,onMyCustomEvent:t=>{console.log(t),e.update(e.value+25)},style:{borderStyle:"solid",borderColor:"black",borderWidth:"1px",paddingTop:"1rem"}},s("p",null,g,s("i",null," italic"))),s("button",{onClick:t=>{var e;return null===(e=n.current)||void 0===e?void 0:e.dispatchEvent(new CustomEvent("mycustomevent",{detail:t}))},class:"btn btn-secondary mr-3"},"Click me!"),s(l,{state:e})))}{const e=new f,n=t(),l=({state:t})=>s("svg:svg",{width:500,height:m,viewBox:"0 0 500 250",fill:"none"},s("svg:rect",{width:m,height:m,fill:t.value%2==0?"#0D6EFD":"#28A745",x:t.value,ref:t.ref}));null===(d=document.getElementById("my-container-2"))||void 0===d||d.appendChild(s(u,null,s("div",{class:"my-class",ref:n,onMyCustomEvent:t=>{console.log(t),e.update(e.value+25)},style:{borderStyle:"solid",borderColor:"black",borderWidth:"1px",paddingTop:"1rem"}},s("p",null,g,s("i",null," italic"))),s("button",{onClick:t=>{var e;return null===(e=n.current)||void 0===e?void 0:e.dispatchEvent(new CustomEvent("mycustomevent",{detail:t}))},class:"btn btn-secondary mr-3"},"Click me!"),s(l,{state:e})))}{const e=function(t){var e=v.get(this);return e||(e=new Map,v.set(this,e)),(e=h(this,e.get(t)||(e.set(t,e=function(t){for(var e,n,l=1,r="",o="",i=[0],s=function(t){1===l&&(t||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,t,r):3===l&&(t||r)?(i.push(3,t,r),l=2):2===l&&"..."===r&&t?i.push(4,t,0):2===l&&r&&!t?i.push(5,0,!0,r):l>=5&&((r||!t&&5===l)&&(i.push(l,0,r,n),l=6),t&&(i.push(l,t,0,n),l=6)),r=""},u=0;u<t.length;u++){u&&(1===l&&s(),s(u));for(var a=0;a<t[u].length;a++)e=t[u][a],1===l?"<"===e?(s(),i=[i],l=3):r+=e:4===l?"--"===r&&">"===e?(l=1,r=""):r=e+r[0]:o?e===o?o="":r+=e:'"'===e||"'"===e?o=e:">"===e?(s(),l=1):l&&("="===e?(l=5,n=r,r=""):"/"===e&&(l<5||">"===t[u][a+1])?(s(),3===l&&(i=i[0]),l=i,(i=i[0]).push(2,0,l),l=0):" "===e||"\t"===e||"\n"===e||"\r"===e?(s(),l=2):r+=e),3===l&&"!--"===r&&(l=4,i=i[0])}return s(),i}(t)),e),arguments,[])).length>1?e:e[0]}.bind(s),n=new f,l=t(),r=({state:t})=>e`<svg:svg
            width=${500}
            height=${m}
            viewBox="0 0 ${500} ${m}"
            fill="none"
        >
            <svg:rect
                width=${m}
                height=${m}
                fill=${t.value%2==0?"#0D6EFD":"#28A745"}
                x=${t.value}
                ref=${t.ref}
            />
        </svg:svg>`;null===(p=document.getElementById("my-container-3"))||void 0===p||p.appendChild(e`<${u}>
            <div
                class="my-class"
                ref=${l}
                onMyCustomEvent=${t=>{console.log(t),n.update(n.value+25)}}
                style=${{borderStyle:"solid",borderColor:"black",borderWidth:"1px",paddingTop:"1rem"}}
            >
                <p>
                    ${g}
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
        <//>`)}{const t="http://www.w3.org/2000/svg";let e=0;const n=document.getElementById("my-container-4"),l=document.createElementNS(t,"svg");l.setAttributeNS(null,"width",500..toString()),l.setAttributeNS(null,"height",m.toString()),l.setAttributeNS(null,"viewBox","0 0 500 250"),l.setAttributeNS(null,"fill","none");const r=document.createElementNS(t,"rect");r.setAttributeNS(null,"width",m.toString()),r.setAttributeNS(null,"height",m.toString()),r.setAttributeNS(null,"fill",e%2==0?"#0D6EFD":"#28A745"),r.setAttributeNS(null,"x",e.toString()),l.appendChild(r);const o=document.createElement("div");o.classList.add("my-class"),o.addEventListener("mycustomevent",(t=>{console.log(t),e+=25,r.setAttributeNS(null,"fill",e%2==0?"#0D6EFD":"#28A745"),r.setAttributeNS(null,"x",e.toString())})),o.style.borderStyle="solid",o.style.borderColor="black",o.style.borderWidth="1px",o.style.paddingTop="1rem";const i=document.createElement("p");i.appendChild(document.createTextNode(g));const s=document.createElement("i");s.innerText=" italic",i.appendChild(s),o.appendChild(i),null==n||n.appendChild(o);const u=document.createElement("button");u.addEventListener("click",(t=>o.dispatchEvent(new CustomEvent("mycustomevent",{detail:t})))),u.innerText="Click me!",u.className="btn btn-secondary mr-3",null==n||n.appendChild(u),null==n||n.appendChild(l)}}();
