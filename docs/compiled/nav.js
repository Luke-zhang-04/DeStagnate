(function () {
    'use strict';

    var url = "https://luke-zhang-04.github.io/DeStagnate/error-codes";

    const _bindProps=(a,b,c=!1)=>{if(b)for(const[d,e]of Object.entries(b))"string"==typeof e||"number"==typeof e?"innerHTML"===d?a.innerHTML=e.toString():c?a.setAttributeNS(null,d,e.toString()):a.setAttribute(d,e.toString()):"on"===d.slice(0,2)?"function"==typeof e&&a.addEventListener(d.slice(2).toLowerCase(),e):void 0!==e&&console.warn(`WARN: Code 7. See ${url}. Params: ${typeof e}, ${d}`);},_unpackChildren=a=>{const b=[];for(const c of a)"object"==typeof c&&c instanceof Array?b.push(..._unpackChildren(c)):b.push(c);return b},_bindChildren=(a,b)=>{if(null!==b&&b!==void 0)if(b instanceof Array)for(const c of b)_bindChildren(a,c);else "string"==typeof b||"number"==typeof b?a.innerText=b.toString():a.appendChild(b);};function createElement(a,b,c,...d){let e=c;if(c&&d&&(c instanceof Array?e=[..._unpackChildren(c),..._unpackChildren(d)]:e=[c,..._unpackChildren(d)]),"string"==typeof a){const c=document.createElement(a);return _bindProps(c,b),_bindChildren(c,e),c}return "function"==typeof a?a(b,e):Error("tagNameOrComponent is of invalid type.")}

    var pages = [["index.html", "Home"], ["state.html", "State example"], ["props.html", "Props example"], ["eventListener.html", "Event listener example"], ["ref.html", "Ref example"], ["calculator.html", "Calculator Example"], ["namespace.html", "Namespaced element (SVG) example"], ["ticTacToe.html", "TicTacToe example"], ["ticTacToe.html", "Nested component example"], ["using-jsx.html", "Using JSX"], ["docs/", "Documentation"], ["error-codes.html", "Errors Reference"]];

    (() => {
      var _a;
      /**
       * Create nav item
       * @param {string} file - file to link to
       * @param {string} content - content of item
       * @returns {HTMLElement} nav item
       */


      const createNavItem = (file, content) => createElement("li", null, createElement("a", {
        class: "text-dark",
        href: file
      }, content));
      /**
       * Append to elements to nav
       */


      (_a = document.getElementById("nav")) === null || _a === void 0 ? void 0 : _a.appendChild(createElement("div", {
        class: "p-4 bg-light"
      }, createElement("div", {
        class: "row"
      }, createElement("div", {
        class: "col-12 col-sm-6"
      }, createElement("a", {
        href: "https://github.com/Luke-zhang-04/DeStagnate/blob/master/dist/es6/deStagnate.bundle.min.js",
        target: "_blank",
        rel: "noopener noreferrer",
        class: "pl-4"
      }, createElement("img", {
        src: "https://img.shields.io/github/size/luke-zhang-04/DeStagnate/dist/es6/deStagnate.bundle.min.js?label=es6/deStagnate.bundle.min.js&style=for-the-badge",
        alt: "bundle min size",
        class: "mb-3"
      })), createElement("ul", null, pages.map(val => createNavItem(val[0], val[1])))), createElement("div", {
        class: "col-12 col-sm-6 col-lg-4"
      }, createElement("a", {
        href: "/"
      }, createElement("img", {
        src: "./logo.svg",
        class: "w-100"
      }))))));
    })();

}());
