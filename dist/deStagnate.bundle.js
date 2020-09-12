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

var DeStagnate =
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
var createRef = function createRef() {
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







function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
var DeStagnate = function (_Base) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(DeStagnate, _Base);

  var _super = _createSuper(DeStagnate);

  /**
   * Construct class component
   * @public
   * @constructor
   * @param parent - parent of this element
   * @param props - element properties; works like React Props
   * @param shouldSkipParentCheck - warn or throw error if parent element already has children
   */
  function DeStagnate(parent, props) {
    var _this;

    var shouldSkipParentCheck = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DeStagnate);

    _this = _super.call(this);
    _this.props = props;
    /**
     * If strict mode should be used. True by default
     * @private
     * @instance
     */
    _this._strict = true;
    /**
     * State of component. Works similar React State
     * @type {undefined | Object.<string, unknown>}
     * @private
     * @instance
     */
    _this._state = {};
    /**
     * If initial state was set in initializer
     * Do not throw error with direct state setting
     * @private
     * @instance
     */
    _this._didSetInitialState = false;
    /**
     * If component is mounted
     * @private
     * @instance
     */
    _this._didMount = false;
    /**
     * What to call before component update (state mutation)
     * @public
     * @instance
     * @param {Props} prevProps - previous props
     * @param prevState - previous state
     * @returns void
     */
    _this.getSnapshotBeforeUpdate = function (prevProps, prevState) {
      return [prevProps, prevState];
    };
    /**
     * Turn on strict mode
     * @public
     * @instance
     * @returns void
     */
    _this.useStrict = function () {
      _this._strict = true;
    };
    /**
     * Turn off strict mode
     * @public
     * @instance
     * @returns void
     */
    _this.disableStrict = function () {
      _this._strict = false;
    };
    /**
     * Forces a component to update
     * Follows the same component updating procedure as setState without modifying state
     * @public
     * @instance
     * @readonly
     * @returns returns error if error is thrown
     */
    _this.forceUpdate = function () {
      try {
        _this.componentDidUpdate();

        if (_this._parent === undefined) {
          throw new Error("ERROR: code 3. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], "."));
        }

        _this.getSnapshotBeforeUpdate(Object.assign({}, _this.props), Object.assign({}, _this.state));

        _this._update(_this._execRender());
      } catch (err) {
        _this.componentDidCatch(err);

        return err;
      }
    };
    /**
     * Sets state
     * @public
     * @instance
     * @readonly
     * @param obj - state to set
     * @returns void
     */
    _this.setState = function (obj) {
      try {
        _this.componentWillUpdate();

        if (_this._parent === undefined) {
          throw new Error("ERROR: code 3. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], "."));
        }

        if (_this._strict) {
          _this._checkKeys(obj);
        }

        _this.getSnapshotBeforeUpdate(Object.assign({}, _this.props), Object.assign({}, _this.state));

        Object.assign(_this._state, obj);
        var renderedContent = _this.shouldComponentUpdate() ? _this._execRender() : undefined;

        _this._update(renderedContent);
      } catch (err) {
        _this.componentDidCatch(err);

        return err;
      }
    };
    /**
     * Initial mounting to be manually called
     * @public
     * @instance
     * @readonly
     * @param parent - parent element to mount with; optional
     * @returns - result of append child to parent element
     */
    _this.mountComponent = function (parent) {
      try {
        if (parent !== undefined) {
          _this.parent = parent;
        }

        if (_this._parent === undefined) {
          throw new Error("ERROR: code 3. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], "."));
        }

        var component = _this.render();

        _this._didSetInitialState = true;

        _this.componentWillMount();

        if (component === null) {
          throw new Error("ERROR: code 5. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], "."));
        }

        _this.bindEventListeners(_this._parent);

        _this._didMount = true;

        _this.componentDidMount();

        if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(component) === "object" && component instanceof Array) {
          return component.map(function (element) {
            return _this._parent.appendChild(element);
          });
        }

        return _this._parent.appendChild(component);
      } catch (err) {
        _this.componentDidCatch(err);

        return err;
      }
    };
    /**
     * Initial mounting to be manually called
     * @public
     * @instance
     * @readonly
     * @returns - result of append child to parent element
     */
    _this.mount = _this.mountComponent;
    /**
     * Unmounting to be manually called
     * @public
     * @instance
     * @readonly
     * @returns - void
     */
    _this.unmountComponent = function () {
      try {
        if (_this._parent === undefined) {
          _this.componentDidWarn("WARN: code 4. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], "."));

          return;
        }

        _this.componentWillUnmount();

        _this.unbindEventListeners(_this._parent);

        _this._removeChildren();

        _this._didMount = false;
      } catch (err) {
        _this.componentDidCatch(err);
      }
    };
    /**
     * Unmounting to be manually called
     * @public
     * @instance
     * @readonly
     * @returns - void
     */
    _this.unmount = _this.unmountComponent;
    /**
     * Removes children from this._parent
     * @private
     * @instance
     * @return void
     */
    _this._removeChildren = function () {
      if (_this._parent === undefined) {
        throw new Error("ERROR: code 3. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], "."));
      }

      while (_this._parent.firstChild) {
        if (_this._parent.lastChild) {
          _this._parent.removeChild(_this._parent.lastChild);
        }
      }
    };
    /**
     * Executes new render
     * @private
     * @instance
     * @returns rendered content
     */
    _this._execRender = function () {
      _this._removeChildren();

      return _this.render();
    };
    /**
     * Checks new state assignment to make sure no new keys are assigned
     * @private
     * @instance
     * @param obj - new state
     * @returns void
     */
    _this._checkKeys = function (obj) {
      for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        if (!Object.keys(_this.state).includes(key)) {
          _this.componentDidWarn("WARN: code 6. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], ". Params: ").concat(key, ", ").concat(JSON.stringify(Object.keys(_this.state)), "."));
        }
      }
    };
    /**
     * Updates the component
     * @private
     * @instance
     * @param renderedContent - rendered content from executing the render function
     * @returns void
     */
    _this._update = function (renderedContent) {
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(renderedContent) === "object" && renderedContent instanceof Array) {
        var _iterator = _createForOfIteratorHelper(renderedContent),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var element = _step.value;

            _this._parent.appendChild(element);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else if (renderedContent) {
        _this._parent.appendChild(renderedContent);
      }

      if (renderedContent) {
        _this.componentDidUpdate();
      }
    };

    if (parent && parent.childElementCount > 0 && !shouldSkipParentCheck && _this._strict) {
      _this.componentDidCatch(new Error("ERROR: code 1. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], ". Params: ").concat(parent.tagName.toLowerCase())));
    }

    _this._parent = parent;
    return _this;
  }
  /**
   * Public getState getter as this.state itself is protected
   * @public
   * @returns component state
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DeStagnate, [{
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
    set: function set(obj) {
      if (this._didSetInitialState && this._strict) {
        this.componentDidCatch(new Error("ERROR: code 2. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], ".")));
        this.componentDidWarn("ERROR: code 2. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], "."));
        this.setState(obj);
      } else {
        this._state = obj;
        this._didSetInitialState = true;
      }
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
    set: function set(element) {
      if (element && element.childElementCount > 0 && this._strict) {
        this.componentDidCatch(new Error("ERROR: code 1. See ".concat(_private_url__WEBPACK_IMPORTED_MODULE_7__["default"], ". Params: ").concat(element.tagName.toLowerCase())));
      }

      this._parent = element;
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
  }]);

  return DeStagnate;
}(_private_events__WEBPACK_IMPORTED_MODULE_6__["default"]);


var Component = function (_DeStagnate) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Component, _DeStagnate);

  var _super2 = _createSuper(Component);

  function Component() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Component);

    return _super2.apply(this, arguments);
  }

  return Component;
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






function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

var Events = function (_BaseComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Events, _BaseComponent);

  var _super = _createSuper(Events);

  function Events() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Events);

    _this = _super.apply(this, arguments);
    /**
     * Focus event
     * @protected
     * @instance
     * @returns
     */
    _this.onFocus = undefined;
    /**
     * Blur event
     * @protected
     * @instance
     * @returns
     */
    _this.onBlur = undefined;
    /**
     * Focus in event
     * @protected
     * @instance
     * @returns
     */
    _this.onFocusIn = undefined;
    /**
     * Focus out event
     * @protected
     * @instance
     * @returns
     */
    _this.onFocusOut = undefined;
    /**
     * Animation start event
     * @protected
     * @instance
     * @returns
     */
    _this.onAnimationStart = undefined;
    /**
     * Animation cancel event
     * @protected
     * @instance
     * @returns
     */
    _this.onAnimationCancel = undefined;
    /**
     * Animation end event
     * @protected
     * @instance
     * @returns
     */
    _this.onAnimationEnd = undefined;
    /**
     * Animation iteration event
     * @protected
     * @instance
     * @returns
     */
    _this.onAnimationIteration = undefined;
    /**
     * Transition start event
     * @protected
     * @instance
     * @returns
     */
    _this.onTransitionStart = undefined;
    /**
     * Transition cancel event
     * @protected
     * @instance
     * @returns
     */
    _this.onTransitionCancel = undefined;
    /**
     * Transition end event
     * @protected
     * @instance
     * @returns
     */
    _this.onTransitionEnd = undefined;
    /**
     * Transition run event
     * @protected
     * @instance
     * @returns
     */
    _this.onTransitionRun = undefined;
    /**
     * Auxillary click event
     * @protected
     * @instance
     * @returns
     */
    _this.onAuxClick = undefined;
    /**
     * Click event
     * @protected
     * @instance
     * @returns
     */
    _this.onClick = undefined;
    /**
     * Double click event
     * @protected
     * @instance
     * @returns
     */
    _this.onDblClick = undefined;
    /**
     * Mousedown event
     * @protected
     * @instance
     * @returns
     */
    _this.onMouseDown = undefined;
    /**
     * Mouse enter event
     * @protected
     * @instance
     * @returns
     */
    _this.onMouseEnter = undefined;
    /**
     * Mouse leave event
     * @protected
     * @instance
     * @returns
     */
    _this.onMouseLeave = undefined;
    /**
     * Mouse move event
     * @protected
     * @instance
     * @returns
     */
    _this.onMouseMove = undefined;
    /**
     * Mouseover event
     * @protected
     * @instance
     * @returns
     */
    _this.onMouseOver = undefined;
    /**
     * Mouseout event
     * @protected
     * @instance
     * @returns
     */
    _this.onMouseOut = undefined;
    /**
     * Mouseup event
     * @protected
     * @instance
     * @returns
     */
    _this.onMouseUp = undefined;
    /**
     * Binds event listeners event
     * Do not call manually
     * @protected
     * @instance
     * @pacakge
     * @param element - element to bind listeners to
     * @returns void
     */
    _this.bindEventListeners = function (element) {
      _this._eventListener(element.addEventListener);
    };
    /**
     * Binds event listeners event
     * Do not call manually
     * @protected
     * @instance
     * @pacakge
     * @param element - element to bind listeners to
     * @returns void
     */
    _this.unbindEventListeners = function (element) {
      _this._eventListener(element.removeEventListener);
    };

    _this._eventListener = function (eventListener) {
      var _iterator = _createForOfIteratorHelper(Object(_eventsUtils__WEBPACK_IMPORTED_MODULE_5__["default"])(_this._events())),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step.value, 2),
              event = _step$value[0],
              callback = _step$value[1];

          if (callback !== undefined) {
            eventListener(event, callback);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    _this._events = function () {
      return {
        focus: _this.onFocus,
        blur: _this.onBlur,
        focusin: _this.onFocusIn,
        focusout: _this.onFocusOut,
        animationstart: _this.onAnimationStart,
        animationcancel: _this.onAnimationCancel,
        animationend: _this.onAnimationEnd,
        animationiteration: _this.onAnimationIteration,
        transitionstart: _this.onTransitionStart,
        transitioncancel: _this.onTransitionCancel,
        transitionend: _this.onTransitionEnd,
        transitionrun: _this.onTransitionRun,
        auxclick: _this.onAuxClick,
        click: _this.onClick,
        dblclick: _this.onDblClick,
        mousedown: _this.onMouseDown,
        mouseenter: _this.onMouseEnter,
        mouseleave: _this.onMouseLeave,
        mousemove: _this.onMouseMove,
        mouseover: _this.onMouseOver,
        mouseout: _this.onMouseOut,
        mouseup: _this.onMouseUp
      };
    };

    return _this;
  }

  return Events;
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
 * @version 1.8.0
 * @package
 */
var eventsList = function eventsList(events) {
  var res = [];

  for (var _i = 0, _Object$keys = Object.keys(events); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    res.push([key, events[key]]);
  }

  return res;
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



var Preset = function Preset() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Preset);

  /**
   * Creates nested DeStagnate component
   * @public
   * @instance
   * @readonly
   * @param Component - DeStagnate component
   * @param props - props of component
   * @returns parent of component
   */
  this.createDSComponent = _createDSComponent__WEBPACK_IMPORTED_MODULE_1__["default"];
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
  this.createElement = _createElement__WEBPACK_IMPORTED_MODULE_2__["default"];
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
  this.createElementNS = _createElementNS__WEBPACK_IMPORTED_MODULE_3__["default"];
  /**
   * Creates a reference for a nested component
   * @public
   * @instance
   * @readonly
   * @returns empty ref object
   */
  this.createRef = _createRef__WEBPACK_IMPORTED_MODULE_4__["default"];
  /**
   * Called when component catches error. Default behaviour is console.error
   * @param error - error object with info
   * @returns void
   */
  this.componentDidCatch = function (error) {
    return console.error(error);
  };
  /**
   * What to call after component mounting
   * @public
   * @instance
   * @returns void
   */
  this.componentDidMount = function () {
    return undefined;
  };
  /**
   * What to call after component update (state mutation)
   * @public
   * @instance
   * @returns void
   */
  this.componentDidUpdate = function () {
    return undefined;
  };
  /**
   * Called when component catches a warning. Default behaviour is console.warn
   * @param msg - warning message
   * @returns void
   */
  this.componentDidWarn = function (msg) {
    return console.warn(msg);
  };
  /**
   * What to call before component mounting
   * @public
   * @instance
   * @returns void
   */
  this.componentWillMount = function () {
    return undefined;
  };
  /**
   * What to call before component unmounting
   * @public
   * @instance
   * @returns void
   */
  this.componentWillUnmount = function () {
    return undefined;
  };
  /**
   * What to call before component update (state mutation)
   * @public
   * @instance
   * @returns void
   */
  this.componentWillUpdate = function () {
    return undefined;
  };
  /**
   * Called before component is updated
   * @returns whether or not component should update/re-render
   */
  this.shouldComponentUpdate = function () {
    return true;
  };
  /**
   * Rendering HTML, must be part of extended class
   * @public
   * @instance
   * @abstract
   * @returns if returns null error will be thrown
   */
  this.render = function () {
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

Preset.createDSComponent = _createDSComponent__WEBPACK_IMPORTED_MODULE_1__["default"];
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
Preset.createElement = _createElement__WEBPACK_IMPORTED_MODULE_2__["default"];
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
Preset.createElementNS = _createElementNS__WEBPACK_IMPORTED_MODULE_3__["default"];
/**
 * Creates a reference for a nested component
 * @public
 * @static
 * @readonly
 * @returns empty ref object
 */
Preset.createRef = _createRef__WEBPACK_IMPORTED_MODULE_4__["default"];

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
var createDSComponent = function createDSComponent(Component, props, ref) {
  var element = document.createElement("div");
  element.classList.add("DeStagnate-component-parent");

  var _component = new Component(element, props);

  _component.mount();

  if (ref) {
    ref.current = _component;
  }

  return element;
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
function createElement(tagNameOrComponent, props, children) {
  var _children = children;

  for (var _len = arguments.length, childrenArgs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    childrenArgs[_key - 3] = arguments[_key];
  }

  if (children && childrenArgs) {
    if (children instanceof Array) {
      _children = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_1__["unpackChildren"])(children)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_1__["unpackChildren"])(childrenArgs)));
    } else {
      _children = [children].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_1__["unpackChildren"])(childrenArgs)));
    }
  }

  if (typeof tagNameOrComponent === "string") {
    var element = document.createElement(tagNameOrComponent);

    Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_1__["bindProps"])(element, props);

    Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_1__["bindChildren"])(element, _children);

    return element;
  } else if (typeof tagNameOrComponent === "function") {
    return tagNameOrComponent(props, _children);
  }

  return Error("tagNameOrComponent is of invalid type.");
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




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
var bindProps = function bindProps(element, props) {
  var ns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (props) {
    for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          val = _Object$entries$_i[1];

      if (typeof val === "string" || typeof val === "number") {
        if (key === "innerHTML") {
          element.innerHTML = val.toString();
        } else if (ns) {
          element.setAttributeNS(null, key, val.toString());
        } else {
          element.setAttribute(key, val.toString());
        }
      } else if (key.slice(0, 2) === "on") {
        if (typeof val === "function") {
          element.addEventListener(key.slice(2).toLowerCase(), val);
        }
      } else if (key === "ref" && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(val) === "object" && "current" in val) {
        val.current = element;
      } else {
        console.warn("WARN: Code 7. See ".concat(_url__WEBPACK_IMPORTED_MODULE_4__["default"], ". Params: ").concat(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(val), ", ").concat(key));
      }
    }
  }
};
var unpackChildren = function unpackChildren(children) {
  var newChildren = [];

  var _iterator = _createForOfIteratorHelper(children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(child) === "object" && child instanceof Array) {
        newChildren.push.apply(newChildren, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(unpackChildren(child)));
      } else {
        newChildren.push(child);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
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
var bindChildren = function bindChildren(element, children) {
  if (children !== null && children !== undefined) {
    if (children instanceof Array) {
      var _iterator2 = _createForOfIteratorHelper(children),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;
          bindChildren(element, child);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } else if (typeof children === "string" || typeof children === "number") {
      element.innerText = children.toString();
    } else if (children instanceof ___WEBPACK_IMPORTED_MODULE_3__["default"]) {
      if (!children.didMount && element instanceof window.HTMLElement) {
        children.mount(element);
        return;
      } else if (!(element instanceof window.HTMLElement)) {
        throw new Error("ERROR: code 8. See ".concat(_url__WEBPACK_IMPORTED_MODULE_4__["default"]));
      }

      if (children.parent !== element) {
        children.parent = element;
      }

      children.forceUpdate();
    } else {
      element.appendChild(children);
    }
  }
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
/* harmony default export */ __webpack_exports__["default"] = (url);

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
var createElementNS = function createElementNS(namespaceURI, tagName, props, children) {
  var element = document.createElementNS(namespaceURI, tagName);

  Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_2__["bindProps"])(element, props, true);

  var _children = children;

  for (var _len = arguments.length, childrenRest = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    childrenRest[_key - 4] = arguments[_key];
  }

  if (children && childrenRest) {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(children) === "object" && children instanceof Array) {
      _children = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_2__["unpackChildren"])(children)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_2__["unpackChildren"])(childrenRest)));
    } else {
      _children = [children].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_2__["unpackChildren"])(childrenRest)));
    }
  }

  Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_2__["bindChildren"])(element, _children);

  return element;
};
/* harmony default export */ __webpack_exports__["default"] = (createElementNS);

/***/ })
/******/ ]);
