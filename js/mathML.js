!function(){"use strict";
/**
   * DeStagnate: A lightweight wrapper around vanilla DOM methods
   *
   * @license MIT
   * @version 3.2.0
   * @copyright 2020 - 2024 Luke Zhang
   */const l=l=>"boolean"==typeof l||"number"==typeof l||"bigint"==typeof l||"string"==typeof l,m=(l,m)=>{if(Array.isArray(m))for(const t of m)t.current=l;else m.current=l};function*t(l){for(const m in l)l.hasOwnProperty(m)&&(yield[m,l[m]])}const n=(m,t)=>{if(null!=t&&!1!==t)if(Array.isArray(t))for(const l of t)n(m,l);else l(t)?m.appendChild(document.createTextNode(t.toString())):t instanceof Node?m.appendChild(t):console.warn(`Invalid child type ${typeof t}: ${t}`)},a=Object.freeze({xml:"http://www.w3.org/XML/1998/namespace",mathML:"http://www.w3.org/1998/Math/MathML",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/xmlns/"});function u(u,h,...L){if("string"==typeof u){const[M,o]=u.split(":"),r=void 0!==M,e=r&&M in a?document.createElementNS(a[M],o):document.createElement(u);return((n,a,u=!1)=>{if(a)for(const[h,L]of t(a))if("boolean"==typeof L)n.toggleAttribute(h,L);else if(l(L))u?n.setAttributeNS(null,h,L.toString()):n.setAttribute(h,L.toString());else if(h.startsWith("on")&&"function"==typeof L)n.addEventListener(h.slice(2).toLowerCase(),L);else if("ref"===h&&"object"==typeof L&&("current"in L||Array.isArray(L)))m(n,L);else if("style"===h&&"object"==typeof L&&n instanceof HTMLElement)for(const[l,m]of t(L))void 0!==m&&(n.style[l]=m??"");else null===L?u?n.removeAttributeNS(null,h):n.removeAttribute(h):void 0!==L&&console.warn(`Invalid prop at ${h}: ${L} for ${n}`)})(e,h,r),n(e,L),e}if("function"==typeof u)return u(h??{},L);throw new Error(`Invalid element type ${typeof u}: ${u}`)}var h;null===(h=document.getElementById("mathML"))||void 0===h||h.appendChild(u("div",{class:"bg-tertiary p-3 d-flex justify-content-center"},u("mathML:math",null,u("mathML:mtable",null,u("mathML:mtr",null,u("mathML:mtd",null,u("mathML:mrow",null,u("mathML:mrow",null,u("mathML:mrow",null,u("mathML:mrow",null,u("mathML:mi",null,"a"),u("mathML:mo",null,"⁢"),u("mathML:msup",null,u("mathML:mi",null,"x"),u("mathML:mn",null,"2"))),u("mathML:mo",null,"+"),u("mathML:mi",null,"b"),u("mathML:mo",null,"⁢"),u("mathML:mi",null,"x")),u("mathML:mo",null,"+"),u("mathML:mi",null,"c")))),u("mathML:mtd",null,u("mathML:mo",null,"=")),u("mathML:mtd",null,u("mathML:mn",null,"0"))),u("mathML:mtr",null,u("mathML:mtd",null,u("mathML:mrow",null,u("mathML:mrow",null,u("mathML:mi",null,"a"),u("mathML:mo",null,"⁢"),u("mathML:msup",null,u("mathML:mi",null,"x"),u("mathML:mn",null,"2"))),u("mathML:mo",null,"+"),u("mathML:mi",null,"b"),u("mathML:mo",null,"⁢"),u("mathML:mi",null,"x"))),u("mathML:mtd",null,u("mathML:mo",null,"=")),u("mathML:mtd",null,u("mathML:mo",null,"−"),u("mathML:mi",null,"c"))),u("mathML:mtr",null,u("mathML:mtd",null,u("mathML:mrow",null,u("mathML:mrow",null,u("mathML:msup",null,u("mathML:mi",null,"x"),u("mathML:mn",null,"2"))),u("mathML:mo",null,"+"),u("mathML:mfrac",null,u("mathML:mi",null,"b"),u("mathML:mi",null,"a")),u("mathML:mo",null,"⁤"),u("mathML:mi",null,"x"))),u("mathML:mtd",null,u("mathML:mo",null,"=")),u("mathML:mtd",null,u("mathML:mfrac",null,u("mathML:mrow",null,u("mathML:mo",null,"−"),u("mathML:mi",null,"c")),u("mathML:mi",null,"a"))),u("mathML:mtd",null,u("mathML:mrow",null,u("mathML:mtext",{style:"color: red; font-size: 10pt;"},"Divide out leading coefficient.")))),u("mathML:mtr",null,u("mathML:mtd",null,u("mathML:mrow",null,u("mathML:mrow",null,u("mathML:mrow",null,u("mathML:msup",null,u("mathML:mi",null,"x"),u("mathML:mn",null,"2"))),u("mathML:mo",null,"+"),u("mathML:mfrac",null,u("mathML:mrow",null,u("mathML:mi",null,"b")),u("mathML:mi",null,"a")),u("mathML:mo",null,"⁤"),u("mathML:mi",null,"x"),u("mathML:mo",null,"+"),u("mathML:msup",null,u("mathML:mrow",null,u("mathML:mo",null,"("),u("mathML:mfrac",null,u("mathML:mrow",null,u("mathML:mi",null,"b")),u("mathML:mrow",null,u("mathML:mn",null,"2"),u("mathML:mi",null,"a"))),u("mathML:mo",null,")")),u("mathML:mn",null,"2"))))),u("mathML:mtd",null,u("mathML:mo",null,"=")),u("mathML:mtd",null,u("mathML:mrow",null,u("mathML:mfrac",null,u("mathML:mrow",null,u("mathML:mo",null,"−"),u("mathML:mi",null,"c"),u("mathML:mo",null,"("),u("mathML:mn",null,"4"),u("mathML:mi",null,"a"),u("mathML:mo",null,")")),u("mathML:mrow",null,u("mathML:mi",null,"a"),u("mathML:mo",null,"("),u("mathML:mn",null,"4"),u("mathML:mi",null,"a"),u("mathML:mo",null,")"))),u("mathML:mo",null,"+"),u("mathML:mfrac",null,u("mathML:mrow",null,u("mathML:msup",null,u("mathML:mi",null,"b"),u("mathML:mn",null,"2"))),u("mathML:mrow",null,u("mathML:mn",null,"4"),u("mathML:msup",null,u("mathML:mi",null,"a"),u("mathML:mn",null,"2")))))),u("mathML:mtd",null,u("mathML:mrow",null,u("mathML:mtext",{style:"color: red; font-size: 10pt;"},"Complete the square.")))),u("mathML:mtr",null,u("mathML:mtd",null,u("mathML:mrow",null,u("mathML:mrow",null,u("mathML:mo",null,"("),u("mathML:mi",null,"x"),u("mathML:mo",null,"+"),u("mathML:mfrac",null,u("mathML:mrow",null,u("mathML:mi",null,"b")),u("mathML:mrow",null,u("mathML:mn",null,"2"),u("mathML:mi",null,"a"))),u("mathML:mo",null,")"),u("mathML:mo",null,"("),u("mathML:mi",null,"x"),u("mathML:mo",null,"+"),u("mathML:mfrac",null,u("mathML:mrow",null,u("mathML:mi",null,"b")),u("mathML:mrow",null,u("mathML:mn",null,"2"),u("mathML:mi",null,"a"))),u("mathML:mo",null,")")))),u("mathML:mtd",null,u("mathML:mo",null,"=")),u("mathML:mtd",null,u("mathML:mfrac",null,u("mathML:mrow",null,u("mathML:msup",null,u("mathML:mi",null,"b"),u("mathML:mn",null,"2")),u("mathML:mo",null,"−"),u("mathML:mn",null,"4"),u("mathML:mi",null,"a"),u("mathML:mi",null,"c")),u("mathML:mrow",null,u("mathML:mn",null,"4"),u("mathML:msup",null,u("mathML:mi",null,"a"),u("mathML:mn",null,"2"))))),u("mathML:mtd",null,u("mathML:mrow",null,u("mathML:mtext",{style:"color: red; font-size: 10pt;"},"Discriminant revealed.")))),u("mathML:mtr",null,u("mathML:mtd",null,u("mathML:mrow",null,u("mathML:mrow",null,u("mathML:msup",null,u("mathML:mrow",null,u("mathML:mo",null,"("),u("mathML:mi",null,"x"),u("mathML:mo",null,"+"),u("mathML:mfrac",null,u("mathML:mrow",null,u("mathML:mi",null,"b")),u("mathML:mrow",null,u("mathML:mn",null,"2"),u("mathML:mi",null,"a"))),u("mathML:mo",null,")")),u("mathML:mn",null,"2"))))),u("mathML:mtd",null,u("mathML:mo",null,"=")),u("mathML:mtd",null,u("mathML:mfrac",null,u("mathML:mrow",null,u("mathML:msup",null,u("mathML:mi",null,"b"),u("mathML:mn",null,"2")),u("mathML:mo",null,"−"),u("mathML:mn",null,"4"),u("mathML:mi",null,"a"),u("mathML:mi",null,"c")),u("mathML:mrow",null,u("mathML:mn",null,"4"),u("mathML:msup",null,u("mathML:mi",null,"a"),u("mathML:mn",null,"2"))))),u("mathML:mtd",null,u("mathML:mrow",null,u("mathML:mtext",{style:"color: red; font-size: 10pt;"})))),u("mathML:mtr",null,u("mathML:mtd",null,u("mathML:mrow",null,u("mathML:mrow",null,u("mathML:mrow",null,u("mathML:mi",null,"x"),u("mathML:mo",null,"+"),u("mathML:mfrac",null,u("mathML:mrow",null,u("mathML:mi",null,"b")),u("mathML:mrow",null,u("mathML:mn",null,"2"),u("mathML:mi",null,"a"))))))),u("mathML:mtd",null,u("mathML:mo",null,"=")),u("mathML:mtd",null,u("mathML:msqrt",null,u("mathML:mfrac",null,u("mathML:mrow",null,u("mathML:msup",null,u("mathML:mi",null,"b"),u("mathML:mn",null,"2")),u("mathML:mo",null,"−"),u("mathML:mn",null,"4"),u("mathML:mi",null,"a"),u("mathML:mi",null,"c")),u("mathML:mrow",null,u("mathML:mn",null,"4"),u("mathML:msup",null,u("mathML:mi",null,"a"),u("mathML:mn",null,"2")))))),u("mathML:mtd",null,u("mathML:mrow",null,u("mathML:mtext",{style:"color: red; font-size: 10pt;"})))),u("mathML:mtr",null,u("mathML:mtd",null,u("mathML:mi",null,"x")),u("mathML:mtd",null,u("mathML:mo",null,"=")),u("mathML:mtd",null,u("mathML:mfrac",null,u("mathML:mrow",null,u("mathML:mo",null,"−"),u("mathML:mi",null,"b")),u("mathML:mrow",null,u("mathML:mn",null,"2"),u("mathML:mi",null,"a"))),u("mathML:mo",null,"±"),u("mathML:mrow",null,u("mathML:mo",null,"{"),u("mathML:mi",null,"C"),u("mathML:mo",null,"}")),u("mathML:msqrt",null,u("mathML:mfrac",null,u("mathML:mrow",null,u("mathML:msup",null,u("mathML:mi",null,"b"),u("mathML:mn",null,"2")),u("mathML:mo",null,"−"),u("mathML:mn",null,"4"),u("mathML:mi",null,"a"),u("mathML:mi",null,"c")),u("mathML:mrow",null,u("mathML:mn",null,"4"),u("mathML:msup",null,u("mathML:mi",null,"a"),u("mathML:mn",null,"2")))))),u("mathML:mtd",null,u("mathML:mrow",null,u("mathML:mtext",{style:"color: red; font-size: 10pt;"},"There's the vertex formula.")))),u("mathML:mtr",null,u("mathML:mtd",null,u("mathML:mi",null,"x")),u("mathML:mtd",null,u("mathML:mo",null,"=")),u("mathML:mtd",null,u("mathML:mfrac",null,u("mathML:mrow",null,u("mathML:mo",null,"−"),u("mathML:mi",null,"b"),u("mathML:mo",null,"±"),u("mathML:mrow",null,u("mathML:mo",null,"{"),u("mathML:mi",null,"C"),u("mathML:mo",null,"}")),u("mathML:msqrt",null,u("mathML:msup",null,u("mathML:mi",null,"b"),u("mathML:mn",null,"2")),u("mathML:mo",null,"−"),u("mathML:mn",null,"4"),u("mathML:mi",null,"a"),u("mathML:mi",null,"c"))),u("mathML:mrow",null,u("mathML:mn",null,"2"),u("mathML:mi",null,"a")))),u("mathML:mtd",null,u("mathML:mrow",null,u("mathML:mtext",{style:"color: red; font-size: 10pt;"}))))))))}();