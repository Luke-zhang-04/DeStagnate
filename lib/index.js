"use strict";
/**
 * Dynamic Component
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.0.0
 * @exports DynamicComponent
 * @namespace
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createChild = void 0;
/**
 * Applies attributes from props
 * @param {HTMLElement} element - HTML element
 * @param {Object.<string, string | number>} props - element properties
 * @returns {void} void
 * @package
 */

var applyAttributes = function applyAttributes(element, props) {
  for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    switch (key) {
      case "accept":
        if (!(element instanceof HTMLInputElement)) {
          throw new Error("Prop ".concat(key, " is not valid in HTML element ").concat(value));
        }

        element.accept = value.toString();
        break;

      default:
        throw Error("Unknow error");
    }
  }
};
/**
 * Creates a child element to DynamComponent
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties
 * @param {undefined | Array.<HTMLElement> | HTMLElement} children - child of element, or array of children
 * @returns {HTMLElement} html element
 */


exports.createChild = function (tagName, props, children) {
  var element = document.createElement(tagName);

  if (props) {
    applyAttributes(element, props);
  }

  if (children) {
    if (children instanceof Array) {
      var _iterator = _createForOfIteratorHelper(children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          element.appendChild(child);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      element.appendChild(children);
    }
  }

  return element;
};
/**
 * Dynamic Component
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 */


var DynamComponent = function DynamComponent(element) {
  _classCallCheck(this, DynamComponent);
};

exports["default"] = DynamComponent;
/**
 * Creates a child element to DynamComponent
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties
 * @param {undefined | Array.<HTMLElement> | HTMLElement} children - child of element, or array of children
 * @returns {HTMLElement} html element
 */

DynamComponent.createChild = exports.createChild;