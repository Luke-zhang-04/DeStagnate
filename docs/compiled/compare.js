(function () {
    'use strict';

    var url = "https://luke-zhang-04.github.io/DeStagnate/error-codes";

    const _bindProps=(a,b,c=!1)=>{if(b)for(const[d,e]of Object.entries(b))"string"==typeof e||"number"==typeof e?"innerHTML"===d?a.innerHTML=e.toString():c?a.setAttributeNS(null,d,e.toString()):a.setAttribute(d,e.toString()):"on"===d.slice(0,2)?"function"==typeof e&&a.addEventListener(d.slice(2).toLowerCase(),e):void 0!==e&&console.warn(`WARN: Code 7. See ${url}. Params: ${typeof e}, ${d}`);},_unpackChildren=a=>{const b=[];for(const c of a)"object"==typeof c&&c instanceof Array?b.push(..._unpackChildren(c)):b.push(c);return b},_bindChildren=(a,b)=>{if(null!==b&&b!==void 0)if(b instanceof Array)for(const c of b)_bindChildren(a,c);else "string"==typeof b||"number"==typeof b?a.innerText=b.toString():a.appendChild(b);};function createElement(a,b,c,...d){let e=c;if(c&&d&&(c instanceof Array?e=[..._unpackChildren(c),..._unpackChildren(d)]:e=[c,..._unpackChildren(d)]),"string"==typeof a){const c=document.createElement(a);return _bindProps(c,b),_bindChildren(c,e),c}return "function"==typeof a?a(b,e):Error("tagNameOrComponent is of invalid type.")}

    (()=>{var a,b;null===(b=null===(a=document.getElementById("compare"))||void 0===a?void 0:a.children[0])||void 0===b?void 0:b.appendChild(createElement("div",{class:"container bg-light text-dark py-1 br-1 my-1"},createElement("p",{class:"m-0 p-0"},"Hello World!")));})(),(()=>{var a,b;const c=document.createElement("div"),d=document.createElement("p");c.setAttribute("class","container bg-light text-dark py-1 br-1 my-1"),d.setAttribute("class","m-0 p-0"),d.innerText="Hello World!",c.appendChild(d),null===(b=null===(a=document.getElementById("compare"))||void 0===a?void 0:a.children[1])||void 0===b?void 0:b.appendChild(c);})();

}());
