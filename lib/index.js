"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
exports.DynamComponent = void 0;
/**
 * Dynamic Component
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.0.0
 * @exports DynamComponent
 * @namespace
 */

var createChild_1 = __importDefault(require("./createChild"));
/**
 * Dynamic Component
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 */


var DynamComponent =
/**
 * Construct class component
 * @public
 * @constructor
 * @param {HTMLElement} parent - parent of this element
 * @param {undefined | Object.<string, string | number>} props - element properties
 */
function DynamComponent(parent, props) {
  var _this = this;

  _classCallCheck(this, DynamComponent);

  this.props = props;
  /**
   * What to call on component mounting
   * @returns {void} void
   */

  this.componentDidMount = function () {
    return undefined;
  };
  /**
   * Rendering HTML, must be part of extended class
   * @returns {null | HTMLElement} if returns null error will be thrown
   */


  this.render = function () {
    return null;
  };
  /* eslint-disable max-len */

  /**
   * Initial render to be called by user
   * @protected
   * @instance
   * @returns {HTMLElement} - result of append child to parent element
   * @throws {Error} error if no render method found
   */


  this.initRender = function () {
    if (!_this.render()) {
      throw new Error("Expected render method to be included in component class, no render method found");
    }

    _this.componentDidMount();

    return _this.parent.appendChild(_this.render());
  };

  this.parent = parent;
};

exports.DynamComponent = DynamComponent;
/**
 * Creates a child element to DynamComponent
 * @public
 * @static
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties
 * @param {undefined | Array.<HTMLElement> | HTMLElement} children - child of element, or array of children
 * @returns {HTMLElement} html element
 */

DynamComponent.createChild = createChild_1["default"];
exports.createChild = __importStar(require("./createChild"));