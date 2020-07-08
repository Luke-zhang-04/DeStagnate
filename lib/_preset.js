"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.1.0
 * @exports Preset
 * @package
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Lifecycle member functions
 */

var Preset = function Preset() {
  _classCallCheck(this, Preset);

  /**
   * Called when component catches error. Default behaviour is console.error
   * @param {Error} error - error object with info
   * @returns {void} void
   */
  this.componentDidCatch = function (error) {
    return console.error(error);
  };
  /**
   * What to call after component mounting
   * @public
   * @instance
   * @returns {void} void
   */


  this.componentDidMount = function () {
    return undefined;
  };
  /**
   * What to call after component update (state mutation)
   * @public
   * @instance
   * @returns {void} void
   */


  this.componentDidUpdate = function () {
    return undefined;
  };
  /**
   * What to call before component mounting
   * @public
   * @instance
   * @returns {void} void
   */


  this.componentWillMount = function () {
    return undefined;
  };
  /**
   * What to call before component unmounting
   * @public
   * @instance
   * @returns {void} void
   */


  this.componentWillUnmount = function () {
    return undefined;
  };
  /**
   * What to call before component update (state mutation)
   * @public
   * @instance
   * @returns {void} void
   */


  this.componentWillUpdate = function () {
    return undefined;
  };
  /**
   * Rendering HTML, must be part of extended class
   * @public
   * @instance
   * @abstract
   * @returns {null | HTMLElement | Array.<HTMLElement>} if returns null error will be thrown
   */


  this.render = function () {
    return null;
  };
};

exports["default"] = Preset;