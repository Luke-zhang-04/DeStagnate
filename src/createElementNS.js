"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.3.2
 * @exports createElementNS
 */

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) { return; } if (typeof o === "string") { return _arrayLikeToArray(o, minLen); } var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) { n = o.constructor.name; } if (n === "Map" || n === "Set") { return Array.from(o); } if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) { return _arrayLikeToArray(o, minLen); } }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) { return Array.from(iter); } }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { return _arrayLikeToArray(arr); } }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) { len = arr.length; } for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.createElementNS = void 0;

var createElement_1 = require("./createElement");

exports.createElementNS = function (namespaceURI, tagName, props, children) {
  var element = document.createElementNS(namespaceURI, tagName);

  createElement_1._bindProps(element, props, !0);

  for (var _children = children, _len = arguments.length, childrenArgs = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    childrenArgs[_key - 4] = arguments[_key];
  }

  if (children && childrenArgs) {
    if (_typeof(children) === "object" && children instanceof Array) {
      _children = [].concat(_toConsumableArray(createElement_1._unpackChildren(children)), _toConsumableArray(createElement_1._unpackChildren(childrenArgs)));
    } else {
      _children = [children].concat(_toConsumableArray(createElement_1._unpackChildren(childrenArgs)));
    }
  }

  createElement_1._bindChildren(element, _children);

  return element;
};

exports["default"] = exports.createElementNS;