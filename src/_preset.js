"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.3.1
 * @exports Preset
 * @package
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var Preset = function Preset() {
  _classCallCheck(this, Preset);

  this.componentDidCatch = function (error) {
    return console.error(error);
  };

  this.componentDidMount = function () {
    return undefined;
  };

  this.componentDidUpdate = function () {
    return undefined;
  };

  this.componentWillMount = function () {
    return undefined;
  };

  this.componentWillUnmount = function () {
    return undefined;
  };

  this.componentWillUpdate = function () {
    return undefined;
  };

  this.render = function () {
    return null;
  };
};

exports["default"] = Preset;