(function () {
    'use strict';

    var url = "https://luke-zhang-04.github.io/DeStagnate/error-codes";

    const _bindProps=(a,b,c=!1)=>{if(b)for(const[d,e]of Object.entries(b))"string"==typeof e||"number"==typeof e?"innerHTML"===d?a.innerHTML=e.toString():c?a.setAttributeNS(null,d,e.toString()):a.setAttribute(d,e.toString()):"on"===d.slice(0,2)?"function"==typeof e&&a.addEventListener(d.slice(2).toLowerCase(),e):void 0!==e&&console.warn(`WARN: Code 7. See ${url}. Params: ${typeof e}, ${d}`);},_unpackChildren=a=>{const b=[];for(const c of a)"object"==typeof c&&c instanceof Array?b.push(..._unpackChildren(c)):b.push(c);return b},_bindChildren=(a,b)=>{if(null!==b&&b!==void 0)if(b instanceof Array)for(const c of b)_bindChildren(a,c);else "string"==typeof b||"number"==typeof b?a.innerText=b.toString():a.appendChild(b);};function createElement(a,b,c,...d){let e=c;if(c&&d&&(c instanceof Array?e=[..._unpackChildren(c),..._unpackChildren(d)]:e=[c,..._unpackChildren(d)]),"string"==typeof a){const c=document.createElement(a);return _bindProps(c,b),_bindChildren(c,e),c}return "function"==typeof a?a(b,e):Error("tagNameOrComponent is of invalid type.")}

    var pages = [["index.html", "Home"], ["state.html", "State example"], ["props.html", "Props example"], ["eventListener.html", "Event listener example"], ["ref.html", "Ref example"], ["calculator.html", "Calculator Example"], ["namespace.html", "Namespaced element (SVG) example"], ["ticTacToe.html", "TicTacToe example"], ["ticTacToe.html", "Nested component example"], ["using-jsx.html", "Using JSX"], ["docs/", "Documentation"], ["error-codes.html", "Errors Reference"]];

    (() => {
      const footer = document.querySelector("footer"),
            createFooterLink = (href, content) => createElement("li", null, createElement("a", {
        class: "text-light",
        href,
        rel: "noopener noreferrer"
      }, content));

      footer === null || footer === void 0 ? void 0 : footer.setAttribute("class", "page-footer font-small light pt-4 bg-tomorrow");
      footer === null || footer === void 0 ? void 0 : footer.appendChild(createElement("div", {
        class: "container-fluid text-center text-md-left"
      }, createElement("div", {
        class: "row"
      }, createElement("div", {
        class: "col-md-6 mt-md-0 mt-3"
      }, createElement("h5", {
        class: "test-uppercase"
      }, "DeStagnate"), createElement("img", {
        class: "w-100 w-md-50",
        src: "logo.svg"
      })), createElement("div", {
        class: "col-md-3 mb-md-0 mb-3"
      }, createElement("h5", {
        class: "text-uppercase"
      }, "Examples"), createElement("ul", {
        class: "list-unstyled"
      }, createElement("ul", {
        class: "list-unstyled"
      }, pages.map(val => createFooterLink(val[0], val[1]))))), createElement("div", {
        class: "col-md-3 mb-md-0 mb-3"
      }, createElement("h5", {
        class: "text-uppercase"
      }, "Links"), createElement("ul", {
        class: "list-unstyled"
      }, createElement("ul", {
        class: "list-unstyled"
      }, createFooterLink("https://github.com/Luke-zhang-04/DeStagnate", "GitHub"), createFooterLink("https://www.npmjs.com/package/destagnate", "NPM")))))));
      footer === null || footer === void 0 ? void 0 : footer.appendChild(createElement("div", {
        class: "footer-copyright text-center py-3"
      }, "Copyright © 2020 ", createElement("a", {
        href: "luke-zhang-04.github.io/"
      }, "Luke Zhang")));
    })();

}());
