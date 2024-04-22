!function(){"use strict";
/**
   * DeStagnate: A lightweight wrapper around vanilla DOM methods
   *
   * @license MIT
   * @version 3.2.0
   * @copyright 2020 - 2024 Luke Zhang
   */const t=t=>"boolean"==typeof t||"number"==typeof t||"bigint"==typeof t||"string"==typeof t,e=(t,e)=>{if(Array.isArray(e))for(const n of e)n.current=t;else e.current=t};function*n(t){for(const e in t)t.hasOwnProperty(e)&&(yield[e,t[e]])}const r=(r,s,o=!1)=>{if(s)for(const[i,l]of n(s))if("boolean"==typeof l)r.toggleAttribute(i,l);else if(t(l))o?r.setAttributeNS(null,i,l.toString()):r.setAttribute(i,l.toString());else if(i.startsWith("on")&&"function"==typeof l)r.addEventListener(i.slice(2).toLowerCase(),l);else if("ref"===i&&"object"==typeof l&&("current"in l||Array.isArray(l)))e(r,l);else if("style"===i&&"object"==typeof l&&r instanceof HTMLElement)for(const[t,e]of n(l))void 0!==e&&(r.style[t]=e??"");else null===l?o?r.removeAttributeNS(null,i):r.removeAttribute(i):void 0!==l&&console.warn(`Invalid prop at ${i}: ${l} for ${r}`)},s=(e,n)=>{if(null!=n&&!1!==n)if(Array.isArray(n))for(const t of n)s(e,t);else t(n)?e.appendChild(document.createTextNode(n.toString())):n instanceof Node?e.appendChild(n):console.warn(`Invalid child type ${typeof n}: ${n}`)},o=Object.freeze({xml:"http://www.w3.org/XML/1998/namespace",mathML:"http://www.w3.org/1998/Math/MathML",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/xmlns/"});class i{ref;#t;constructor(t,e){this.#t=t,this.ref=e??((t=null)=>({current:t}))()}get value(){return this.#t}set value(t){this.update(t)}update(t){this.#t=t,null!==this.ref.current&&this.updateDOM(this.ref)}}var l,a=function(t,e,n,r){var s;e[0]=0;for(var o=1;o<e.length;o++){var i=e[o++],l=e[o]?(e[0]|=i?1:2,n[e[o++]]):e[++o];3===i?r[0]=l:4===i?r[1]=Object.assign(r[1]||{},l):5===i?(r[1]=r[1]||{})[e[++o]]=l:6===i?r[1][e[++o]]+=l+"":i?(s=t.apply(l,a(t,l,n,["",null])),r.push(s),l[0]?e[0]|=2:(e[o-2]=0,e[o]=s)):r.push(l)}return r},u=new Map;const p=function(t){var e=u.get(this);return e||(e=new Map,u.set(this,e)),(e=a(this,e.get(t)||(e.set(t,e=function(t){for(var e,n,r=1,s="",o="",i=[0],l=function(t){1===r&&(t||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,t,s):3===r&&(t||s)?(i.push(3,t,s),r=2):2===r&&"..."===s&&t?i.push(4,t,0):2===r&&s&&!t?i.push(5,0,!0,s):r>=5&&((s||!t&&5===r)&&(i.push(r,0,s,n),r=6),t&&(i.push(r,t,0,n),r=6)),s=""},a=0;a<t.length;a++){a&&(1===r&&l(),l(a));for(var u=0;u<t[a].length;u++)e=t[a][u],1===r?"<"===e?(l(),i=[i],r=3):s+=e:4===r?"--"===s&&">"===e?(r=1,s=""):s=e+s[0]:o?e===o?o="":s+=e:'"'===e||"'"===e?o=e:">"===e?(l(),r=1):r&&("="===e?(r=5,n=s,s=""):"/"===e&&(r<5||">"===t[a][u+1])?(l(),3===r&&(i=i[0]),r=i,(i=i[0]).push(2,0,r),r=0):" "===e||"\t"===e||"\n"===e||"\r"===e?(l(),r=2):s+=e),3===r&&"!--"===s&&(r=4,i=i[0])}return l(),i}(t)),e),arguments,[])).length>1?e:e[0]}.bind((function(t,e,...n){if("string"==typeof t){const[i,l]=t.split(":"),a=void 0!==i,u=a&&i in o?document.createElementNS(o[i],l):document.createElement(t);return r(u,e,a),s(u,n),u}if("function"==typeof t)return t(e??{},n);throw new Error(`Invalid element type ${typeof t}: ${t}`)}));const c=new class extends i{constructor(t={disabled:!0}){super(t)}updateDOM(t){r(t.current,{disabled:this.value.disabled,placeholder:this.value.disabled?"Disabled":"My Input"})}};const d=new class extends i{constructor(t=""){super(t)}updateDOM(t){t.current.innerText=this.value}};null===(l=document.getElementById("input"))||void 0===l||l.appendChild(p`<div>
        <div class="form-group">
            <input
                disabled
                type="text"
                ref=${c.ref}
                placeholder="Disabled"
                onInput=${t=>d.update(t.target.value)}
                class="w-100 form-control"
            />
        </div>
        <button
            class="btn btn-primary"
            onClick=${()=>c.update({disabled:!c.value.disabled})}
        >
            Toggle input
        </button>
        <div class="w-100 p-2 bg-tertiary">
            Value:
            <div ref=${d.ref} />
        </div>
    </div>`)}();
