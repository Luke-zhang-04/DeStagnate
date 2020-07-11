"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.2.2
 * @exports createElement
 */

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) { return Array.from(iter); } }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { return _arrayLikeToArray(arr); } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) { o = it; } var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) { return { done: true }; } return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) { it["return"](); } } finally { if (didErr) { throw err; } } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) { return; } if (typeof o === "string") { return _arrayLikeToArray(o, minLen); } var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) { n = o.constructor.name; } if (n === "Map" || n === "Set") { return Array.from(o); } if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) { return _arrayLikeToArray(o, minLen); } }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) { len = arr.length; } for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) { break; } } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) { _i["return"](); } } finally { if (_d) { throw _e; } } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) { return arr; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Binds children to element
 * @package
 * @param {HTMLElement} element - element to bind
 * @param {undefined | Object.<string, string | number>} props - props to bind with
 * @returns {void} void
 */

var _bindProps = function _bindProps(element, props) {
  if (props) {
    for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          val = _Object$entries$_i[1];

      if (typeof val === "string") {
        if (key === "innerHTML") {
          element.innerHTML = val.toString();
        } else {
          element.setAttribute(key, val.toString());
        }
      } else if (key.slice(0, 2) === "on") {
        // Works such as onClick, onAnimationEnd, etc.
        if (typeof val === "function") {
          element.addEventListener(key.slice(2).toLowerCase(), val);
        }
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

      if (_typeof(child) === "object" && child instanceof Array) {
        newChildren.push.apply(newChildren, _toConsumableArray(unpackChildren(child)));
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
 * @param {HTMLElement} element - element to bind
 * @param {undefined | ChildrenType} children - children to bind with
 * @returns {void} void
 */


var _bindChildren = function _bindChildren(element, children) {
  if (children || children === 0) {
    if (children instanceof Array) {
      var _iterator2 = _createForOfIteratorHelper(children),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;

          if (typeof child === "string" || typeof child === "number") {
            element.innerText = child.toString();
          } else if (_typeof(child) === "object" && child instanceof Array) {
            var _a = unpackChildren(child);

            var _f = function _f(_child) {
              return _bindChildren(element, _child);
            };

            for (var _i2 = 0; _i2 < _a.length; _i2++) {
              _f(_a[_i2], _i2, _a);
            }

            undefined;
          } else {
            element.appendChild(child);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } else if (typeof children === "string" || typeof children === "number") {
      element.innerText = children.toString();
    } else {
      element.appendChild(children);
    }
  }
};
/**
 * Creates a child element to DynamComponent
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */


var createElement = function createElement(tagName, props, children) {
  var element = document.createElement(tagName);

  _bindProps(element, props);

  var _children = children;

  for (var _len = arguments.length, childrenArgs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    childrenArgs[_key - 3] = arguments[_key];
  }

  if (children && childrenArgs) {
    if (_typeof(children) === "object" && children instanceof Array) {
      _children = [].concat(_toConsumableArray(unpackChildren(children)), _toConsumableArray(unpackChildren(childrenArgs)));
    } else {
      _children = [children].concat(_toConsumableArray(unpackChildren(childrenArgs)));
    }
  }

  _bindChildren(element, _children);

  return element;
};

exports["default"] = createElement;