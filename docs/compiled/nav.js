(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createElementOnly_1 = __importDefault(__webpack_require__(1));
const pages_1 = __importDefault(__webpack_require__(2));
const DeStagnate = {
    createElement: // Need this for JSX pragma
    createElementOnly_1.default,
};
(() => {
    var _a;
    /**
     * Create nav item
     * @param {string} file - file to link to
     * @param {string} content - content of item
     * @returns {HTMLElement} nav item
     */
    const createNavItem = (file, content) => (DeStagnate.createElement("li", null,
        DeStagnate.createElement("a", { class: "text-dark", href: file }, content)));
    /**
     * Append to elements to nav
     */
    (_a = document.getElementById("nav")) === null || _a === void 0 ? void 0 : _a.appendChild(DeStagnate.createElement("div", { class: "p-4 bg-light" },
        DeStagnate.createElement("div", { class: "row" },
            DeStagnate.createElement("div", { class: "col-12 col-sm-6" },
                DeStagnate.createElement("a", { href: "https://github.com/Luke-zhang-04/DeStagnate/blob/master/dist/deStagnate.bundle.min.js", target: "_blank", rel: "noopener noreferrer", class: "pl-4" },
                    DeStagnate.createElement("img", { src: "https://img.shields.io/github/size/luke-zhang-04/DeStagnate/dist/deStagnate.bundle.min.js?label=deStagnate.bundle.min.js&style=for-the-badge", alt: "bundle min size", class: "mb-3" })),
                DeStagnate.createElement("ul", null, pages_1.default.map((val) => createNavItem(val[0], val[1])))),
            DeStagnate.createElement("div", { class: "col-12 col-sm-6 col-lg-4" },
                DeStagnate.createElement("a", { href: "/" },
                    DeStagnate.createElement("img", { src: "./logo.svg", class: "w-100" }))))));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbmF2LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlGQUE0RDtBQUM1RCxvREFBMkI7QUFFM0IsTUFBTSxVQUFVLEdBQUc7SUFDZixhQUFhLEVBREksMkJBQTJCO0lBQzVDLDJCQUFhO0NBQ2hCLENBQUM7QUFFRixDQUFDLEdBQUcsRUFBRTs7SUFDRjs7Ozs7T0FLRztJQUNILE1BQU0sYUFBYSxHQUFHLENBQUMsSUFBWSxFQUFFLE9BQWUsRUFBZSxFQUFFLENBQUMsQ0FDOUQ7UUFDSSxnQ0FBRyxLQUFLLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBRSxJQUFJLElBQUcsT0FBTyxDQUFLLENBQzdDLENBQ1IsQ0FBQTtJQUVMOztPQUVHO0lBQ0gsTUFBQSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQywwQ0FBRSxXQUFXLENBQ3ZDLGtDQUFLLEtBQUssRUFBQyxjQUFjO1FBQ3JCLGtDQUFLLEtBQUssRUFBQyxLQUFLO1lBQ1osa0NBQUssS0FBSyxFQUFDLGlCQUFpQjtnQkFDeEIsZ0NBQ0ksSUFBSSxFQUFDLHVGQUF1RixFQUM1RixNQUFNLEVBQUMsUUFBUSxFQUNmLEdBQUcsRUFBQyxxQkFBcUIsRUFDekIsS0FBSyxFQUFDLE1BQU07b0JBRVosa0NBQ0ksR0FBRyxFQUFDLDhJQUE4SSxFQUNsSixHQUFHLEVBQUMsaUJBQWlCLEVBQ3JCLEtBQUssRUFBQyxNQUFNLEdBQ2QsQ0FDRjtnQkFDSixxQ0FDSyxlQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2pELENBQ0g7WUFDTixrQ0FBSyxLQUFLLEVBQUMsMEJBQTBCO2dCQUNqQyxnQ0FBRyxJQUFJLEVBQUMsR0FBRztvQkFDUCxrQ0FBSyxHQUFHLEVBQUMsWUFBWSxFQUFDLEtBQUssRUFBQyxPQUFPLEdBQUUsQ0FDckMsQ0FDRixDQUNKLENBQ0osRUFDVDtBQUNMLENBQUMsQ0FBQyxFQUFFLENBQUEifQ==

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.0
 * @exports createElement function for DOM manipulation without DeStagnate class or Refs
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports._bindChildren = exports._unpackChildren = exports._bindProps = void 0;
/**
 * Binds children to element
 * @package
 * @param element - element to bind
 * @param props - props to bind with
 * @param ns - if namespace element
 * @returns void
 */
exports._bindProps = (element, props, ns = false) => {
    if (props) {
        for (const [key, val] of Object.entries(props)) {
            if (typeof (val) === "string" || typeof (val) === "number") {
                if (key === "innerHTML") {
                    element.innerHTML = val.toString();
                }
                else if (ns) {
                    element.setAttributeNS(null, key, val.toString());
                }
                else {
                    element.setAttribute(key, val.toString());
                }
            }
            else if (key.slice(0, 2) === "on") { // Works such as onClick, onAnimationEnd, etc.
                if (typeof (val) === "function") {
                    element.addEventListener(key.slice(2)
                        .toLowerCase(), val);
                }
            }
            else {
                console.warn(`WARN: Invalid prop type "${typeof (val)}" for key "${key}". Skipping prop.`);
            }
        }
    }
};
exports._unpackChildren = (children) => {
    const newChildren = [];
    for (const child of children) {
        if (typeof (child) === "object" && child instanceof Array) {
            newChildren.push(...exports._unpackChildren(child));
        }
        else {
            newChildren.push(child);
        }
    }
    return newChildren;
};
/**
 * Binds children to element
 * @package
 * @param element - element to bind
 * @param children - children to bind with
 * @returns void
 */
exports._bindChildren = (element, children) => {
    if (children !== null && children !== undefined) {
        if (children instanceof Array) {
            for (const child of children) {
                exports._bindChildren(element, child);
            }
        }
        else if (typeof (children) === "string" ||
            typeof (children) === "number") {
            element.innerText = children.toString();
        }
        else {
            element.appendChild(children);
        }
    }
};
/**
 * Creates an HTML Element
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param childrenArgs - rest parameter of children
 * @returns element
 */
const createElement = (tagName, props, children, ...childrenArgs) => {
    const element = document.createElement(tagName);
    exports._bindProps(element, props);
    let _children = children;
    if (children && childrenArgs) {
        if (children instanceof Array) {
            _children = [
                ...exports._unpackChildren(children),
                ...exports._unpackChildren(childrenArgs),
            ];
        }
        else {
            _children = [children, ...exports._unpackChildren(childrenArgs)];
        }
    }
    exports._bindChildren(element, _children);
    return element;
};
exports.default = createElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRWxlbWVudE9ubHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3JlYXRlRWxlbWVudE9ubHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7OztHQVFHOzs7QUF3Qkg7Ozs7Ozs7R0FPRztBQUNVLFFBQUEsVUFBVSxHQUFHLENBQ3RCLE9BQWdCLEVBQ2hCLEtBQXFFLEVBQ3JFLEVBQUUsR0FBRyxLQUFLLEVBQ04sRUFBRTtJQUNOLElBQUksS0FBSyxFQUFFO1FBQ1AsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxPQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQ3RELElBQUksR0FBRyxLQUFLLFdBQVcsRUFBRTtvQkFDckIsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUE7aUJBQ3JDO3FCQUFNLElBQUksRUFBRSxFQUFFO29CQUNYLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtpQkFDcEQ7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7aUJBQzVDO2FBQ0o7aUJBQU0sSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRSw4Q0FBOEM7Z0JBQ2pGLElBQUksT0FBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFVBQVUsRUFBRTtvQkFDNUIsT0FBTyxDQUFDLGdCQUFnQixDQUNwQixHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt5QkFDUCxXQUFXLEVBQStCLEVB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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = [
    ["index.html", "Home"],
    ["state.html", "State example"],
    ["props.html", "Props example"],
    ["eventListener.html", "Event listener example"],
    ["ref.html", "Ref example"],
    ["calculator.html", "Calculator Example"],
    ["namespace.html", "Namespaced element (SVG) example"],
    ["ticTacToe.html", "TicTacToe example"],
    ["ticTacToe.html", "Nested component example"],
    ["using-jsx.html", "Using JSX"],
    ["docs/", "Documentation"]
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNiLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQztJQUN0QixDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7SUFDL0IsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO0lBQy9CLENBQUMsb0JBQW9CLEVBQUUsd0JBQXdCLENBQUM7SUFDaEQsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDO0lBQzNCLENBQUMsaUJBQWlCLEVBQUUsb0JBQW9CLENBQUM7SUFDekMsQ0FBQyxnQkFBZ0IsRUFBRSxrQ0FBa0MsQ0FBQztJQUN0RCxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO0lBQ3ZDLENBQUMsZ0JBQWdCLEVBQUUsMEJBQTBCLENBQUM7SUFDOUMsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUM7SUFDL0IsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO0NBQzdCLENBQUEifQ==

/***/ })
/******/ ]);
});
