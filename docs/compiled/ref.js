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

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __importStar(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../lib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
class RefExample extends lib_1.default {
    constructor() {
        super(...arguments);
        this._formRef = lib_1.createRef();
        this._getInputValues = () => {
            var _a;
            const val = (_a = this._formRef.current) === null || _a === void 0 ? void 0 : _a.value;
            alert(`INPUT VALUE: "${val}"`);
        };
        this.render = () => [
            lib_1.default.createElement("div", { class: "input-group" },
                lib_1.default.createElement(RefExample._inputGroupPrepend, null),
                lib_1.default.createElement("input", { type: "text", class: "form-control mb-3", placeholder: "Insert text here", ref: this._formRef })),
            lib_1.default.createElement("button", { class: "btn btn-light mb-3", onClick: this._getInputValues }, "See Input Value")
        ];
    }
}
RefExample._inputGroupPrepend = () => lib_1.default.createElement("div", { class: "input-group-prepend" },
    lib_1.default.createElement("span", { class: "input-group-text" }, "Input"));
const refParent = document.getElementById("ref");
if (refParent) {
    const refComponent = new RefExample(refParent);
    refComponent.mount();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlZi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQStDO0FBRS9DLE1BQU0sVUFBVyxTQUFRLGFBQVU7SUFBbkM7O1FBUVksYUFBUSxHQUFHLGVBQVMsRUFBb0IsQ0FBQTtRQUV4QyxvQkFBZSxHQUFHLEdBQUcsRUFBRTs7WUFDM0IsTUFBTSxHQUFHLFNBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLDBDQUFFLEtBQUssQ0FBQTtZQUV4QyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLENBQUE7UUFDbEMsQ0FBQyxDQUFBO1FBRU0sV0FBTSxHQUFHLEdBQWtCLEVBQUUsQ0FBQztZQUNqQyxxQ0FBSyxLQUFLLEVBQUMsYUFBYTtnQkFDcEIsNEJBQUMsVUFBVSxDQUFDLGtCQUFrQixPQUFFO2dCQUNoQyx1Q0FDSSxJQUFJLEVBQUMsTUFBTSxFQUNYLEtBQUssRUFBQyxtQkFBbUIsRUFDekIsV0FBVyxFQUFDLGtCQUFrQixFQUM5QixHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FDYixDQUNQO1lBQ04sd0NBQ0ksS0FBSyxFQUFDLG9CQUFvQixFQUMxQixPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsc0JBQ1I7U0FDNUIsQ0FBQTtJQUVMLENBQUM7O0FBOUJrQiw2QkFBa0IsR0FBRyxHQUFnQixFQUFFLENBQUMscUNBQUssS0FBSyxFQUFDLHFCQUFxQjtJQUNuRixzQ0FBTSxLQUFLLEVBQUMsa0JBQWtCLFlBRXZCLENBQ0wsQ0FBQTtBQTRCVixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBRWhELElBQUksU0FBUyxFQUFFO0lBQ1gsTUFBTSxZQUFZLEdBQUcsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7SUFFOUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBO0NBQ3ZCIn0=

/***/ })
/******/ ]);
});