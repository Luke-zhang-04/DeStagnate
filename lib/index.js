"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeStagnate = void 0;
/**
 * Dynamic Component
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.0.0
 * @exports DeStagnate
 */

var _preset_1 = __importDefault(require("./_preset"));

var createElement_1 = __importDefault(require("./createElement"));
/**
 * Dynamic Component
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 */


var DeStagnate = /*#__PURE__*/function (_preset_1$default) {
  _inherits(DeStagnate, _preset_1$default);

  var _super = _createSuper(DeStagnate);

  /**
   * Construct class component
   * @public
   * @constructor
   * @param {HTMLElement} parent - parent of this element
   * @param {undefined | Object.<string, string | number>} props - element properties
   */
  function DeStagnate(parent, props) {
    var _this;

    _classCallCheck(this, DeStagnate);

    _this = _super.call(this);
    _this.props = props;
    /**
     * State of component. Works similar React State
     * @type {Object.<string, unknown> | undefined}
     * @private
     * @instance
     */

    _this.state = {};
    /**
     * Sets state
     * @public
     * @instance
     * @param {State} obj - state to set
     * @returns {void} void
     */

    _this.setState = function (obj) {
      _this.componentWillUpdate();

      Object.assign(_this.state, obj);

      while (_this.parent.firstChild) {
        if (_this.parent.lastChild) {
          _this.parent.removeChild(_this.parent.lastChild);
        } else {
          break;
        }
      }

      _this.parent.appendChild(_this.render());

      _this.componentDidUpdate();
    };
    /* eslint-disable max-len, @typescript-eslint/member-ordering */

    /**
     * Initial mounting to be manually called
     * @public
     * @instance
     * @returns {HTMLElement | error} - result of append child to parent element
     */


    _this.mountComponent = function () {
      var component = _this.render();

      _this.componentWillMount();

      if (!component) {
        var msg = "Expected render method to be included in component class, no render method found";
        console.error(msg);
        return Error(msg);
      }

      _this.componentDidMount();

      return _this.parent.appendChild(component);
    };
    /**
     * Initial mounting to be manually called
     * @public
     * @instance
     * @returns {HTMLElement} - result of append child to parent element
     * @throws {Error} error if no render method found
     */


    _this.mount = _this.mountComponent;
    /**
     * Unmounting to be manually called
     * @public
     * @instance
     * @returns {HTMLElement} - result of append child to parent element
     * @throws {void} error if no render method found
     */

    _this.unmountComponent = function () {
      _this.componentWillUnmount();

      _this.parent.remove();
    };
    /**
     * Unmounting to be manually called
     * @public
     * @instance
     * @returns {HTMLElement} - result of append child to parent element
     * @throws {void} error if no render method found
     */


    _this.unmount = _this.unmountComponent;

    if (["body", "html"].includes(parent.tagName.toLowerCase())) {
      console.warn("WARNING! Avoid using ".concat(parent.tagName.toLowerCase(), " as element parent, as all elements within ").concat(parent.tagName.toLowerCase(), " will be removed on re-render"));
    }

    _this.parent = parent;
    return _this;
  }

  return DeStagnate;
}(_preset_1["default"]);

exports.DeStagnate = DeStagnate;
/**
 * Creates a child element to DeStagnate
 * @public
 * @static
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties
 * @param {undefined | Array.<HTMLElement> | HTMLElement} children - child of element, or array of children
 * @returns {HTMLElement} html element
 */

DeStagnate.createElement = createElement_1["default"];
exports.createElement = __importStar(require("./createElement"));