/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @file DeStagnate development bundle
 */

"use strict";

module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDSComponent", function() { return createDSComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementNS", function() { return createElementNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _createDSComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _createElementNS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports DeStagnate main destagnate class
 * @file main file for destagnate
 * @preserve
 */



/**
 * Creates nested DeStagnate component
 * @param Component - DeStagnate component
 * @param props - props of component
 * @returns parent of component
 */
var createDSComponent = _createDSComponent__WEBPACK_IMPORTED_MODULE_2__["default"];
/**
 * Creates a child element to deStagnate
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @returns html element
 */
var createElement = _createElement__WEBPACK_IMPORTED_MODULE_3__["default"];
/**
 * Creates an HTML Element
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
 * @param childrenRest - rest parameter of children
 * @returns html element
 */
var createElementNS = _createElementNS__WEBPACK_IMPORTED_MODULE_4__["default"];
/**
 * Creates a reference for a nested component
 * @returns empty ref object
 */
var createRef = _createRef__WEBPACK_IMPORTED_MODULE_0__["default"];
/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
var Component = _component__WEBPACK_IMPORTED_MODULE_1__["default"];
/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
/* harmony default export */ __webpack_exports__["default"] = (_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/**
 * Creates a reference for a nested component
 * @returns empty ref object
 */
var createRef = function () {
  return {
    current: null
  };
};
/**
 * Creates a reference for a nested component
 * @returns empty ref object
 */
/* harmony default export */ __webpack_exports__["default"] = (createRef);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeStagnate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _private_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _private_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27);







function _createForOfIteratorHelper(a, b) { var c; if ("undefined" == typeof Symbol || null == a[Symbol.iterator]) { if (Array.isArray(a) || (c = _unsupportedIterableToArray(a)) || b && a && "number" == typeof a.length) { c && (a = c); var d = 0, e = function () {}; return { s: e, n: function n() { return d >= a.length ? { done: !0 } : { done: !1, value: a[d++] }; }, e: function e(a) { throw a; }, f: e }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var f, g = !0, h = !1; return { s: function s() { c = a[Symbol.iterator](); }, n: function n() { var a = c.next(); return g = a.done, a; }, e: function e(a) { h = !0, f = a; }, f: function f() { try { g || null == c["return"] || c["return"](); } finally { if (h) throw f; } } }; }

function _unsupportedIterableToArray(a, b) { if (a) { if ("string" == typeof a) return _arrayLikeToArray(a, b); var c = Object.prototype.toString.call(a).slice(8, -1); return "Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c ? Array.from(a) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? _arrayLikeToArray(a, b) : void 0; } }

function _arrayLikeToArray(a, b) { (null == b || b > a.length) && (b = a.length); for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]; return d; }

function _createSuper(a) { var b = _isNativeReflectConstruct(); return function () { var c, d = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(a); if (b) { var e = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; c = Reflect.construct(d, arguments, e); } else c = d.apply(this, arguments); return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, c); }; }

function _isNativeReflectConstruct() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0; } catch (a) { return !1; } }

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports DeStagnate main destagnate class
 * @file DeStagnate component class
 * @preserve
 */
/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
var DeStagnate = function (a) {
  /**
   * Construct class component
   * @public
   * @constructor
   * @param parent - parent of this element
   * @param props - element properties; works like React Props
   * @param shouldSkipParentCheck - warn or throw error if parent element already has children
   */
  function b(a, d) {
    var e,
        f = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2];
    return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, b), e = c.call(this), e.props = d, e._strict = !0, e._state = {}, e._didSetInitialState = !1, e._didMount = !1, e.getSnapshotBeforeUpdate = function (a, b) {
      return [a, b];
    }, e.useStrict = function () {
      e._strict = !0;
    }, e.disableStrict = function () {
      e._strict = !1;
    }, e.forceUpdate = function () {
      try {
        if (e.componentDidUpdate(), void 0 === e._parent) throw new Error("ERROR: code 3. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], "."));
        e.getSnapshotBeforeUpdate(Object.assign({}, e.props), Object.assign({}, e.state)), e._update(e._execRender());
      } catch (a) {
        return e.componentDidCatch(a), a;
      }
    }, e.setState = function (a) {
      try {
        if (e.componentWillUpdate(), void 0 === e._parent) throw new Error("ERROR: code 3. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], "."));
        e._strict && e._checkKeys(a), e.getSnapshotBeforeUpdate(Object.assign({}, e.props), Object.assign({}, e.state)), Object.assign(e._state, a);
        var b = e.shouldComponentUpdate() ? e._execRender() : void 0;

        e._update(b);
      } catch (a) {
        return e.componentDidCatch(a), a;
      }
    }, e.mountComponent = function (a) {
      try {
        if (void 0 !== a && (e.parent = a), void 0 === e._parent) throw new Error("ERROR: code 3. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], "."));
        var g = e.render();
        if (e._didSetInitialState = !0, e.componentWillMount(), null === g) throw new Error("ERROR: code 5. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], "."));

        if (e.bindEventListeners(e._parent), e._didMount = !0, e.componentDidMount(), "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(g) && g instanceof Array) {
          for (var b = g, c = function (a) {
            return e._parent.appendChild(a);
          }, d = [], f = 0; f < b.length; f++) d.push(c(b[f], f, b));

          return d;
        }

        return e._parent.appendChild(g);
      } catch (a) {
        return e.componentDidCatch(a), a;
      }
    }, e.mount = e.mountComponent, e.unmountComponent = function () {
      try {
        if (void 0 === e._parent) return void e.componentDidWarn("WARN: code 4. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], "."));
        e.componentWillUnmount(), e.unbindEventListeners(e._parent), e._removeChildren(), e._didMount = !1;
      } catch (a) {
        e.componentDidCatch(a);
      }
    }, e.unmount = e.unmountComponent, e._removeChildren = function () {
      if (void 0 === e._parent) throw new Error("ERROR: code 3. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], "."));

      for (; e._parent.firstChild;) e._parent.lastChild && e._parent.removeChild(e._parent.lastChild);
    }, e._execRender = function () {
      return e._removeChildren(), e.render();
    }, e._checkKeys = function (a) {
      for (var b, c = 0, d = Object.keys(a); c < d.length; c++) b = d[c], Object.keys(e.state).includes(b) || e.componentDidWarn("WARN: code 6. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], ". Params: ").concat(b, ", ").concat(JSON.stringify(Object.keys(e.state)), "."));
    }, e._update = function (a) {
      if ("object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(a) && a instanceof Array) {
        var b,
            c = _createForOfIteratorHelper(a);

        try {
          for (c.s(); !(b = c.n()).done;) {
            var d = b.value;

            e._parent.appendChild(d);
          }
        } catch (a) {
          c.e(a);
        } finally {
          c.f();
        }
      } else a && e._parent.appendChild(a);

      a && e.componentDidUpdate();
    }, a && 0 < a.childElementCount && !f && e._strict && e.componentDidCatch(new Error("ERROR: code 1. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], ". Params: ").concat(a.tagName.toLowerCase()))), e._parent = a, e;
  }
  /**
   * Public getState getter as this.state itself is protected
   * @public
   * @returns component state
   */
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(b, a);

  var c = _createSuper(b);

  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(b, [{
    key: "getState",
    get: function get() {
      return this.state;
    }
    /**
     * Get component state
     * @protected
     * @returns component state
     */
  }, {
    key: "state",
    get: function get() {
      return this._state;
    }
    /**
     * Sets component state
     * WARN: do not use this method to mutate the state directly
     * @protected
     * @param obj - state to set
     */
    ,
    set: function set(a) {
      this._didSetInitialState && this._strict ? (this.componentDidCatch(new Error("ERROR: code 2. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], "."))), this.componentDidWarn("ERROR: code 2. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], ".")), this.setState(a)) : (this._state = a, this._didSetInitialState = !0);
    }
    /**
     * Public getProps getter as this.props itself is protected
     * @public
     * @returns component props
     */
  }, {
    key: "getProps",
    get: function get() {
      return this.props;
    }
    /**
     * Set the parent of this component
     * @public
     * @param element - parent element
     * @returns void
     */
  }, {
    key: "parent",
    set: function set(a) {
      a && 0 < a.childElementCount && this._strict && this.componentDidCatch(new Error("ERROR: code 1. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], ". Params: ").concat(a.tagName.toLowerCase()))), this._parent = a;
    }
    /**
     * Get the parent element of this component
     * @public
     * @returns parent
     */
    ,
    get: function get() {
      return this._parent;
    }
    /**
     * Get didMount value publicly
     * @public
     * @returns if mounted
     */
  }, {
    key: "didMount",
    get: function get() {
      return this._didMount;
    }
  }]), b;
}(_private_events__WEBPACK_IMPORTED_MODULE_6__["default"]);


var Component = function (a) {
  function b() {
    return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, b), c.apply(this, arguments);
  }

  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(b, a);

  var c = _createSuper(b);

  return b;
}(DeStagnate);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(7);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(3);

var assertThisInitialized = __webpack_require__(9);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Events; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventsUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);






function _createForOfIteratorHelper(a, b) { var c; if ("undefined" == typeof Symbol || null == a[Symbol.iterator]) { if (Array.isArray(a) || (c = _unsupportedIterableToArray(a)) || b && a && "number" == typeof a.length) { c && (a = c); var d = 0, e = function () {}; return { s: e, n: function n() { return d >= a.length ? { done: !0 } : { done: !1, value: a[d++] }; }, e: function e(a) { throw a; }, f: e }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var f, g = !0, h = !1; return { s: function s() { c = a[Symbol.iterator](); }, n: function n() { var a = c.next(); return g = a.done, a; }, e: function e(a) { h = !0, f = a; }, f: function f() { try { g || null == c["return"] || c["return"](); } finally { if (h) throw f; } } }; }

function _unsupportedIterableToArray(a, b) { if (a) { if ("string" == typeof a) return _arrayLikeToArray(a, b); var c = Object.prototype.toString.call(a).slice(8, -1); return "Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c ? Array.from(a) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? _arrayLikeToArray(a, b) : void 0; } }

function _arrayLikeToArray(a, b) { (null == b || b > a.length) && (b = a.length); for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]; return d; }

function _createSuper(a) { var b = _isNativeReflectConstruct(); return function () { var c, d = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(a); if (b) { var e = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; c = Reflect.construct(d, arguments, e); } else c = d.apply(this, arguments); return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, c); }; }

function _isNativeReflectConstruct() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0; } catch (a) { return !1; } }

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports Events
 * @package
 */

var Events = function (a) {
  function b() {
    var a;
    return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, b), a = c.apply(this, arguments), a.onFocus = void 0, a.onBlur = void 0, a.onFocusIn = void 0, a.onFocusOut = void 0, a.onAnimationStart = void 0, a.onAnimationCancel = void 0, a.onAnimationEnd = void 0, a.onAnimationIteration = void 0, a.onTransitionStart = void 0, a.onTransitionCancel = void 0, a.onTransitionEnd = void 0, a.onTransitionRun = void 0, a.onAuxClick = void 0, a.onClick = void 0, a.onDblClick = void 0, a.onMouseDown = void 0, a.onMouseEnter = void 0, a.onMouseLeave = void 0, a.onMouseMove = void 0, a.onMouseOver = void 0, a.onMouseOut = void 0, a.onMouseUp = void 0, a.bindEventListeners = function (b) {
      a._eventListener(b.addEventListener);
    }, a.unbindEventListeners = function (b) {
      a._eventListener(b.removeEventListener);
    }, a._eventListener = function (b) {
      var c,
          d = _createForOfIteratorHelper(Object(_eventsUtils__WEBPACK_IMPORTED_MODULE_5__["default"])(a._events()));

      try {
        for (d.s(); !(c = d.n()).done;) {
          var e = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(c.value, 2),
              f = e[0],
              g = e[1];

          void 0 !== g && b(f, g);
        }
      } catch (a) {
        d.e(a);
      } finally {
        d.f();
      }
    }, a._events = function () {
      return {
        focus: a.onFocus,
        blur: a.onBlur,
        focusin: a.onFocusIn,
        focusout: a.onFocusOut,
        animationstart: a.onAnimationStart,
        animationcancel: a.onAnimationCancel,
        animationend: a.onAnimationEnd,
        animationiteration: a.onAnimationIteration,
        transitionstart: a.onTransitionStart,
        transitioncancel: a.onTransitionCancel,
        transitionend: a.onTransitionEnd,
        transitionrun: a.onTransitionRun,
        auxclick: a.onAuxClick,
        click: a.onClick,
        dblclick: a.onDblClick,
        mousedown: a.onMouseDown,
        mouseenter: a.onMouseEnter,
        mouseleave: a.onMouseLeave,
        mousemove: a.onMouseMove,
        mouseover: a.onMouseOver,
        mouseout: a.onMouseOut,
        mouseup: a.onMouseUp
      };
    }, a;
  }

  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(b, a);

  var c = _createSuper(b);

  return b;
}(_base__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(13);

var iterableToArrayLimit = __webpack_require__(14);

var unsupportedIterableToArray = __webpack_require__(15);

var nonIterableRest = __webpack_require__(17);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(16);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventsList", function() { return eventsList; });
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.1
 * @package
 */
/**
 * Returns array of events
 * Not a generator because Babel Regenerator Runtime causes dist files to be wayyyy to large
 * @param events - events object
 */
var eventsList = function (a) {
  for (var b, c = [], d = 0, e = Object.keys(a); d < e.length; d++) b = e[d], c.push([b, a[b]]);

  return c;
};
/* harmony default export */ __webpack_exports__["default"] = (eventsList);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Preset; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createDSComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _createElementNS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);


/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports Preset - base for a component
 * @package
 */



var Preset = function a() {
  /**
   * Creates nested DeStagnate component
   * @public
   * @instance
   * @readonly
   * @param Component - DeStagnate component
   * @param props - props of component
   * @returns parent of component
   */
  /**
   * Creates an HTML Element
   * @public
   * @instance
   * @readonly
   * @param tagName - name of HTML element
   * @param props - element properties, such as class, innerHTML, id, style, etc
   * @param children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
   * @param childrenRest - rest parameter of children
   * @returns html element
   */
  /**
   * Creates a child element to deStagnate
   * @public
   * @instance
   * @readonly
   * @param namespaceURI - namespace uri
   * @param tagName - name of HTML element
   * @param props - element properties, such as class, innerHTML, id, style, etc
   * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
   * @param childrenRest - rest parameter of children
   * @returns html element
   */
  /**
   * Creates a reference for a nested component
   * @public
   * @instance
   * @readonly
   * @returns empty ref object
   */
  /**
   * Called when component catches error. Default behaviour is console.error
   * @param error - error object with info
   * @returns void
   */
  /**
   * What to call after component mounting
   * @public
   * @instance
   * @returns void
   */
  /**
   * What to call after component update (state mutation)
   * @public
   * @instance
   * @returns void
   */
  /**
   * Called when component catches a warning. Default behaviour is console.warn
   * @param msg - warning message
   * @returns void
   */
  /**
   * What to call before component mounting
   * @public
   * @instance
   * @returns void
   */
  /**
   * What to call before component unmounting
   * @public
   * @instance
   * @returns void
   */
  /**
   * What to call before component update (state mutation)
   * @public
   * @instance
   * @returns void
   */
  /**
   * Called before component is updated
   * @returns whether or not component should update/re-render
   */
  /**
   * Rendering HTML, must be part of extended class
   * @public
   * @instance
   * @abstract
   * @returns if returns null error will be thrown
   */
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, a), this.createDSComponent = _createDSComponent__WEBPACK_IMPORTED_MODULE_1__["default"], this.createElement = _createElement__WEBPACK_IMPORTED_MODULE_2__["default"], this.createElementNS = _createElementNS__WEBPACK_IMPORTED_MODULE_3__["default"], this.createRef = _createRef__WEBPACK_IMPORTED_MODULE_4__["default"], this.componentDidCatch = function (a) {
    return console.error(a);
  }, this.componentDidMount = function () {}, this.componentDidUpdate = function () {}, this.componentDidWarn = function (a) {
    return console.warn(a);
  }, this.componentWillMount = function () {}, this.componentWillUnmount = function () {}, this.componentWillUpdate = function () {}, this.shouldComponentUpdate = function () {
    return !0;
  }, this.render = function () {
    return null;
  };
};
/**
 * Creates nested DeStagnate component
 * @public
 * @static
 * @readonly
 * @param Component - DeStagnate component
 * @param props - props of component
 * @returns parent of component
 */


/**
 * Creates an HTML Element
 * @public
 * @static
 * @readonly
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
 * @param childrenRest - rest parameter of children
 * @returns html element
 */
/**
 * Creates a child element to deStagnate
 * @public
 * @static
 * @readonly
 * @param namespaceURI - namespace uri
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param childrenRest - rest parameter of children
 * @returns html element
 */
/**
 * Creates a reference for a nested component
 * @public
 * @static
 * @readonly
 * @returns empty ref object
 */
Preset.createDSComponent = _createDSComponent__WEBPACK_IMPORTED_MODULE_1__["default"], Preset.createElement = _createElement__WEBPACK_IMPORTED_MODULE_2__["default"], Preset.createElementNS = _createElementNS__WEBPACK_IMPORTED_MODULE_3__["default"], Preset.createRef = _createRef__WEBPACK_IMPORTED_MODULE_4__["default"];

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports createDSComponent add nested component for DeStagnate components
 */
/**
 * Creates nested DeStagnate component
 * @deprecated do not use this function, since 1.6.1
 * This only exists to adhere to semver
 * @param Component - DeStagnate component
 * @param props - props of component
 * @param ref - ref object
 * @returns parent of component
 */
var createDSComponent = function (a, b, c) {
  var d = document.createElement("div");
  d.classList.add("DeStagnate-component-parent");
  var e = new a(d, b);
  return e.mount(), c && (c.current = e), d;
};

/* harmony default export */ __webpack_exports__["default"] = (createDSComponent);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _private_createElementUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);


/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports createElement function for DOM manipulation
 */
/**
 *
 * @param tagNameOrComponent - name of HTML element or function component
 * @param props - props of element or component
 * 1. If `tagNameOrComponent` is tagname, props are element properties, such as class, innerHTML, id, style, etc
 * 2. If `tagNameOrComponent` is a function, props are that functions parameters
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param childrenArgs - rest parameter for children
 * @returns element
 */
function createElement(a, b, c) {
  for (var d = c, e = arguments.length, f = Array(3 < e ? e - 3 : 0), g = 3; g < e; g++) f[g - 3] = arguments[g];

  if (c && f && (c instanceof Array ? d = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_1__["unpackChildren"])(c)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_1__["unpackChildren"])(f))) : d = [c].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_1__["unpackChildren"])(f)))), "string" == typeof a) {
    var h = document.createElement(a);
    return Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_1__["bindProps"])(h, b), Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_1__["bindChildren"])(h, d), h;
  }

  return "function" == typeof a ? a(b, d) : Error("tagNameOrComponent is of invalid type.");
}
/* harmony default export */ __webpack_exports__["default"] = (createElement);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(23);

var iterableToArray = __webpack_require__(24);

var unsupportedIterableToArray = __webpack_require__(15);

var nonIterableSpread = __webpack_require__(25);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(16);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindProps", function() { return bindProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpackChildren", function() { return unpackChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindChildren", function() { return bindChildren; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);




function _createForOfIteratorHelper(a, b) { var c; if ("undefined" == typeof Symbol || null == a[Symbol.iterator]) { if (Array.isArray(a) || (c = _unsupportedIterableToArray(a)) || b && a && "number" == typeof a.length) { c && (a = c); var d = 0, e = function () {}; return { s: e, n: function n() { return d >= a.length ? { done: !0 } : { done: !1, value: a[d++] }; }, e: function e(a) { throw a; }, f: e }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var f, g = !0, h = !1; return { s: function s() { c = a[Symbol.iterator](); }, n: function n() { var a = c.next(); return g = a.done, a; }, e: function e(a) { h = !0, f = a; }, f: function f() { try { g || null == c["return"] || c["return"](); } finally { if (h) throw f; } } }; }

function _unsupportedIterableToArray(a, b) { if (a) { if ("string" == typeof a) return _arrayLikeToArray(a, b); var c = Object.prototype.toString.call(a).slice(8, -1); return "Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c ? Array.from(a) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? _arrayLikeToArray(a, b) : void 0; } }

function _arrayLikeToArray(a, b) { (null == b || b > a.length) && (b = a.length); for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c]; return d; }

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @file share functions and types for createElement and it's variants
 */
/**
 * Binds children to element
 * @package
 * @param element - element to bind
 * @param props - props to bind with
 * @param ns - if namespace element
 * @returns void
 */
var bindProps = function (a, b) {
  var c = !!(2 < arguments.length && arguments[2] !== void 0) && arguments[2];
  if (b) for (var d = 0, e = Object.entries(b); d < e.length; d++) {
    var f = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(e[d], 2),
        g = f[0],
        h = f[1];

    "string" == typeof h || "number" == typeof h ? "innerHTML" === g ? a.innerHTML = h.toString() : c ? a.setAttributeNS(null, g, h.toString()) : a.setAttribute(g, h.toString()) : "on" === g.slice(0, 2) ? "function" == typeof h && a.addEventListener(g.slice(2).toLowerCase(), h) : "ref" === g && "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(h) && "current" in h ? h.current = a : void 0 !== h && console.warn("WARN: Code 7. See ".concat(_url__WEBPACK_IMPORTED_MODULE_4__["default"], ". Params: ").concat(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(h), ", ").concat(g));
  }
};
var unpackChildren = function (a) {
  var b,
      c = [],
      d = _createForOfIteratorHelper(a);

  try {
    for (d.s(); !(b = d.n()).done;) {
      var e = b.value;
      "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(e) && e instanceof Array ? c.push.apply(c, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(unpackChildren(e))) : c.push(e);
    }
  } catch (a) {
    d.e(a);
  } finally {
    d.f();
  }

  return c;
};
/**
 * Binds children to element
 * @package
 * @param element - element to bind
 * @param children - children to bind with
 * @returns void
 */
var bindChildren = function (a, b) {
  if (null !== b && b !== void 0) if (b instanceof Array) {
    var c,
        d = _createForOfIteratorHelper(b);

    try {
      for (d.s(); !(c = d.n()).done;) {
        var e = c.value;
        bindChildren(a, e);
      }
    } catch (a) {
      d.e(a);
    } finally {
      d.f();
    }
  } else if ("string" == typeof b || "number" == typeof b) a.innerText = b.toString();else if (b instanceof ___WEBPACK_IMPORTED_MODULE_3__["default"]) {
    if (!b.didMount && a instanceof window.HTMLElement) return void b.mount(a);
    if (!(a instanceof window.HTMLElement)) throw new Error("ERROR: code 8. See ".concat(_url__WEBPACK_IMPORTED_MODULE_4__["default"]));
    b.parent !== a && (b.parent = a), b.forceUpdate();
  } else a.appendChild(b);
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @file share functions and types for createElement and it's variants
 */
var url = "https://luke-zhang-04.github.io/DeStagnate/error-codes";
/* harmony default export */ __webpack_exports__["default"] = ("https://luke-zhang-04.github.io/DeStagnate/error-codes");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementNS", function() { return createElementNS; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _private_createElementUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);



/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports createElementNS createElement for namespaced elements
 */
/**
 * Creates a child element to deStagnate
 * @param namespaceURI - namespace uri
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param childrenRest - rest parameter of children
 * @returns html element
 */
var createElementNS = function (a, b, c, d) {
  var e = document.createElementNS(a, b);

  Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_2__["bindProps"])(e, c, !0);

  for (var f = d, g = arguments.length, h = Array(4 < g ? g - 4 : 0), i = 4; i < g; i++) h[i - 4] = arguments[i];

  return d && h && ("object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(d) && d instanceof Array ? f = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_2__["unpackChildren"])(d)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_2__["unpackChildren"])(h))) : f = [d].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_2__["unpackChildren"])(h)))), Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_2__["bindChildren"])(e, f), e;
};
/* harmony default export */ __webpack_exports__["default"] = (createElementNS);

/***/ })
/******/ ]);
