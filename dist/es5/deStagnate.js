/**
 * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.1.0
 */
var DeStagnate = (function (exports) {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

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

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   * Checks if val1 and val2 are equal
   *
   * @param val1 - Value to check for equality
   * @param val2 - Value to compare against val1
   * @param maxDepth - Max recursion depth to crawl an object. After max depth is reached, the two
   *   values are simply compared with `===`
   * @param maxLength - Max length of array to crawl. If max lenth is reached, two arrays will simply
   *   be compared with `===`
   * @returns `val1 === val2`
   */
  var isEqual = function isEqual(val1, val2) {
    var maxDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    var maxLength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

    if (maxDepth === 0) {
      return val1 === val2;
    } else if (_typeof(val1) !== _typeof(val2)) {
      return false;
    }

    if (val1 instanceof Array && val2 instanceof Array) {
      if (val1.length !== val2.length) {
        return false;
      } else if (val1.length > maxLength || val2.length > maxLength) {
        return val1 === val2;
      }

      for (var index = 0; index < val1.length; index++) {
        if (!isEqual(val1[index], val2[index], maxDepth - 1, maxLength)) {
          return false;
        }
      }

      return true;
    } else if (val1 instanceof Object && val2 instanceof Object) {
      if (!isEqual(Object.keys(val1), Object.keys(val2), maxDepth - 1, maxLength)) {
        return false;
      }

      for (var _i = 0, _Object$keys = Object.keys(val1); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        if (!isEqual(val1[key], val2[key], maxDepth - 1, maxLength)) {
          return false;
        }
      }

      return true;
    }

    return val1 === val2;
  };

  var eventNames = ["onFocus", "onBlur", "onFocusIn", "onFocusOut", "onAnimationStart", "onAnimationCancel", "onAnimationEnd", "onAnimationIteration", "onTransitionStart", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onAuxClick", "onClick", "onDblClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOver", "onMouseOut", "onMouseUp", "onWheel"];
  var windowEventNames = ["onLoad", "onOnline", "onOffline", "onResize", "onScroll", "onKeyDown", "onKeyPress", "onKeyUp"];

  var url = "https://luke-zhang-04.github.io/DeStagnate/error-codes";

  /**
   * Binds children to element
   *
   * @param element - Element to bind
   * @param props - Props to bind with
   * @param ns - If namespace element
   * @returns Void
   * @package
   */

  var bindProps = function bindProps(element, props) {
    var ns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (props) {
      for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
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
        } else if (key === "ref" && _typeof(val) === "object" && "current" in val) {
          val.current = element;
        } else if (val !== undefined) {
          console.warn("".concat(_typeof(val), " is not a valid DeStagnate child"));
        }
      }
    }
  };
  /**
   * Binds children to element
   *
   * @param element - Element to bind
   * @param children - Children to bind with
   * @returns Void
   * @package
   */

  var bindChildren = function bindChildren(element, children) {
    if (children !== null && children !== undefined) {
      if (children instanceof Array) {
        children.forEach(function (child) {
          return bindChildren(element, child);
        });
      } else if (typeof children === "string" || typeof children === "number") {
        element.appendChild(document.createTextNode(children.toString()));
      } else if (children instanceof Node) {
        element.appendChild(children);
      } else {
        if (!children.didMount && element instanceof window.HTMLElement) {
          children.mount(element);
          return;
        } else if (!(element instanceof window.HTMLElement)) {
          throw new Error("ERROR: code 3. See ".concat(url));
        }

        if (children.parent !== element) {
          children.parent = element;
        }

        children.forceUpdate();
      }
    }
  };

  /**
   * @param tagNameOrComponent - Name of HTML element or function component
   * @param props - Props of element or component
   *
   *   1. If `tagNameOrComponent` is tagname, props are element properties, such as class, innerHTML, id, style, etc
   *   2. If `tagNameOrComponent` is a function, props are that functions parameters
   *
   * @param children - Children of this element. Can be nothing, number (converted to string), string
   *   (text), or another element. An array of any of these will create multiple children
   * @param childrenArgs - Rest parameter for children
   * @returns Element
   */

  function createElement(tagNameOrComponent, props) {
    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    if (typeof tagNameOrComponent === "string") {
      var element = document.createElement(tagNameOrComponent);
      bindProps(element, props);
      bindChildren(element, children);
      return element;
    } else if (typeof tagNameOrComponent === "function") {
      return tagNameOrComponent(props, children);
    }

    return Error("tagNameOrComponent is of invalid type.");
  }

  /**
   * Creates a child element to deStagnate
   *
   * @param namespaceURI - Namespace uri
   * @param tagName - Name of HTML element
   * @param props - Element properties, such as class, innerHTML, id, style, etc
   * @param children - Children of this element. Can be nothing, number (converted to string), string
   *   (text), or another element. An array of any of these will create multiple children
   * @param childrenRest - Rest parameter of children
   * @returns Html element
   */

  var createElementNS = function createElementNS(namespaceURI, tagName, props) {
    var element = document.createElementNS(namespaceURI, tagName);
    bindProps(element, props, true);

    for (var _len = arguments.length, children = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      children[_key - 3] = arguments[_key];
    }

    bindChildren(element, children);
    return element;
  };

  /**
   * Creates a reference for a nested component
   *
   * @returns Empty ref object
   */
  var createRef = function createRef() {
    return {
      current: null
    };
  };

  var unmountedMsg = "Refusing to update unmounted component";
  /**
   * DeStagnate
   *
   * @abstract
   * @namespace
   * @class
   * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
   */

  var Component = function () {
    /**
     * Construct class component
     *
     * @param parent - Parent of this element
     * @param props - Element properties; works like React Props
     */
    function Component(parent, props) {
      _classCallCheck(this, Component);

      this.props = props;
      this.createElement = createElement;
      this.createElementNS = createElementNS;
      this.createRef = createRef;
      this._state = {};
      this._didSetInitialState = false;
      this._didMount = false;
      /**
       * Initial mounting to be manually called
       *
       * @returns - Result of append child to parent element
       */

      this.mount = this.mountComponent;
      /**
       * Unmounting to be manually called
       *
       * @returns - Void
       */

      this.unmount = this.unmountComponent;

      if (parent === null) {
        throw new Error("Parent is null, expected HTMLElement | undefined.");
      }

      this._parent = parent;
    }
    /**
     * Public getState getter as this.state itself is protected
     *
     * @returns Component state
     */


    _createClass(Component, [{
      key: "getState",
      get: function get() {
        return this.state;
      }
      /**
       * Get component state
       *
       * @returns Component state
       */

    }, {
      key: "state",
      get: function get() {
        return this._state;
      }
      /**
       * Sets component state WARN: do not use this method to mutate the state directly
       *
       * @param obj - State to set
       */
      ,
      set: function set(obj) {
        if (this._didSetInitialState) {
          this.componentDidCatch(new Error("ERROR: code 1. See ".concat(url, ".")));
          this.setState(obj);
        } else {
          this._state = obj;
          this._didSetInitialState = true;
        }
      }
      /**
       * Public getProps getter as this.props itself is protected
       *
       * @returns Component props
       */

    }, {
      key: "getProps",
      get: function get() {
        return this.props;
      }
      /**
       * Set the parent of this component
       *
       * @param element - Parent element
       * @returns Void
       */

    }, {
      key: "parent",
      get:
      /**
       * Get the parent element of this component
       *
       * @returns Parent
       */
      function get() {
        return this._parent;
      }
      /**
       * Get didMount value publicly
       *
       * @returns If mounted
       */
      ,
      set: function set(element) {
        this._parent = element;
      }
    }, {
      key: "didMount",
      get: function get() {
        return this._didMount;
      }
      /**
       * Returns the previous state. Undefined if no previous state exists
       *
       * @returns Previous state
       */

    }, {
      key: "prevState",
      get: function get() {
        return this._prevState;
      }
      /**
       * Forces a component to update Follows the same component updating procedure as setState
       * without modifying state
       *
       * @returns Returns error if error is thrown
       */

    }, {
      key: "forceUpdate",
      value: function forceUpdate() {
        var _a, _b;

        try {
          if (!this._didMount) {
            throw new Error(unmountedMsg);
          }

          (_a = this.componentDidUpdate) === null || _a === void 0 ? void 0 : _a.call(this);

          if (this._parent === undefined) {
            throw new Error("ERROR: code 2. See ".concat(url, "."));
          }

          (_b = this.getSnapshotBeforeUpdate) === null || _b === void 0 ? void 0 : _b.call(this, Object.assign({}, this.props), Object.assign({}, this.state));

          this._update(this._execRender());
        } catch (err) {
          return this._handleError(err);
        }
      }
      /**
       * Checks if the state changed from the previous state. Can me attached to `shouldComponentUpdate`
       *
       * @param keys - List of keys to crawl. If left undefined (default) then use all keys. Should
       *   be `keyof State`, but there were some Typescript troubles.
       * @param maxDepth - Max recursion depth to crawl an object. After max depth is reached, the
       *   two values are simply compared with `===`
       * @param maxLength - Max length of array to crawl. If max lenth is reached, two arrays will
       *   simply be compared with `===`
       * @returns `val1 === val2`
       */

    }, {
      key: "stateDidChange",
      value: function stateDidChange(keys) {
        var maxDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
        var maxLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15;

        var _a;

        if (keys === undefined) {
          return !isEqual(this._state, this._prevState, maxDepth, maxLength);
        }

        var state = {};
        var prevState = {};

        var _iterator = _createForOfIteratorHelper(keys),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;
            state[key] = this._state[key];
            prevState[key] = (_a = this._prevState) === null || _a === void 0 ? void 0 : _a[key];
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return !isEqual(state, prevState, maxDepth, maxLength);
      }
      /**
       * Sets state
       *
       * @param obj - State to set
       * @param shouldComponentUpdate - If component should update after state setting
       * @returns Void
       */

    }, {
      key: "setState",
      value: function setState(obj) {
        var shouldComponentUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        var _a, _b;

        try {
          if (!this._didMount) {
            throw new Error(unmountedMsg);
          }

          (_a = this.componentWillUpdate) === null || _a === void 0 ? void 0 : _a.call(this);

          if (this._parent === undefined) {
            throw new Error("ERROR: code 2. See ".concat(url, "."));
          }

          this._prevState = Object.assign({}, this._state);
          (_b = this.getSnapshotBeforeUpdate) === null || _b === void 0 ? void 0 : _b.call(this, Object.assign({}, this.props), Object.assign({}, this.state));
          Object.assign(this._state, obj);
          var renderedContent = shouldComponentUpdate && this.shouldComponentUpdate() ? this._execRender() : undefined;

          this._update(renderedContent);
        } catch (err) {
          return this._handleError(err);
        }
      }
      /**
       * Initial mounting to be manually called
       *
       * @param parent - Parent element to mount with; optional
       * @returns - Result of append child to parent element
       */

    }, {
      key: "mountComponent",
      value: function mountComponent(parent) {
        var _a, _b;

        try {
          if (parent !== undefined) {
            this.parent = parent;
          }

          if (this._parent === undefined) {
            throw new Error("ERROR: code 2. See ".concat(url, "."));
          }

          var component = this.render();
          this._didSetInitialState = true;
          (_a = this.componentWillMount) === null || _a === void 0 ? void 0 : _a.call(this);

          if (component === null) {
            throw new Error("ERROR: code 3. See ".concat(url, "."));
          }

          this._bindEventListeners(this._parent);

          this._didMount = true;
          (_b = this.componentDidMount) === null || _b === void 0 ? void 0 : _b.call(this);

          if (component instanceof Array) {
            var fragment = document.createDocumentFragment();
            component.forEach(function (child) {
              return fragment.appendChild(child);
            });
            return this._parent.appendChild(fragment);
          }

          return this._parent.appendChild(component);
        } catch (err) {
          return this._handleError(err);
        }
      }
      /**
       * Unmounting to be manually called
       *
       * @returns - Void
       */

    }, {
      key: "unmountComponent",
      value: function unmountComponent() {
        var _a;

        try {
          if (this._parent === undefined) {
            return;
          }

          (_a = this.componentWillUnmount) === null || _a === void 0 ? void 0 : _a.call(this);

          this._unbindEventListeners(this._parent);

          this._removeChildren();

          this._didMount = false;
        } catch (err) {
          this._handleError(err);
        }
      }
      /**
       * Called when component catches error. Default behaviour is console.error
       *
       * @param error - Error object with info
       * @returns Void
       */

    }, {
      key: "componentDidCatch",
      value: function componentDidCatch(error) {
        console.error(error);
      }
      /**
       * Called before component is updated
       *
       * @returns Whether or not component should update/re-render
       */

    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate() {
        return true;
      }
      /**
       * Removes children from this._parent
       *
       * @returns Void
       */

    }, {
      key: "_removeChildren",
      value: function _removeChildren() {
        if (this._parent === undefined) {
          throw new Error("ERROR: code 2. See ".concat(url, "."));
        }

        while (this._parent.firstChild) {
          if (this._parent.lastChild) {
            this._parent.removeChild(this._parent.lastChild);
          }
        }
      }
      /**
       * Executes new render
       *
       * @returns Rendered content
       */

    }, {
      key: "_execRender",
      value: function _execRender() {
        this._removeChildren();

        return this.render();
      }
      /**
       * Updates the component
       *
       * @param renderedContent - Rendered content from executing the render function
       * @returns Void
       */

    }, {
      key: "_update",
      value: function _update(renderedContent) {
        var _a, _b, _c;

        if (renderedContent instanceof Array) {
          var _iterator2 = _createForOfIteratorHelper(renderedContent),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var element = _step2.value;
              (_a = this._parent) === null || _a === void 0 ? void 0 : _a.appendChild(element);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } else if (renderedContent) {
          (_b = this._parent) === null || _b === void 0 ? void 0 : _b.appendChild(renderedContent);
        }

        if (renderedContent) {
          (_c = this.componentDidUpdate) === null || _c === void 0 ? void 0 : _c.call(this);
        }
      }
    }, {
      key: "_handleError",
      value: function _handleError(err) {
        if (err instanceof Error) {
          this.componentDidCatch(err);
          return err;
        }

        var error = new Error(String(err));
        this.componentDidCatch(error);
        return error;
      }
      /**
       * Binds event listeners. Do not call manually
       *
       * @pacakge
       */

    }, {
      key: "_bindEventListeners",
      value: function _bindEventListeners(element) {
        this._eventListener(element.addEventListener);

        this._eventListener(window.addEventListener, windowEventNames);
      }
      /**
       * Binds event listeners. Do not call manually
       *
       * @pacakge
       */

    }, {
      key: "_unbindEventListeners",
      value: function _unbindEventListeners(element) {
        this._eventListener(element.removeEventListener);

        this._eventListener(window.removeEventListener, windowEventNames);
      }
    }, {
      key: "_eventListener",
      value: function _eventListener(eventListener) {
        var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : eventNames;

        var _iterator3 = _createForOfIteratorHelper(events),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var eventName = _step3.value;
            var htmlEventName = eventName.slice(2).toLowerCase();
            var callback = this[eventName];

            if (callback !== undefined && callback instanceof Function) {
              eventListener(htmlEventName, callback);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }]);

    return Component;
  }();
  Component.createElement = createElement;
  Component.createElementNS = createElementNS;
  Component.createRef = createRef;

  var Fragment = function Fragment(_) {
    var documentFragment = document.createDocumentFragment();

    for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      children[_key - 1] = arguments[_key];
    }

    bindChildren(documentFragment, children);
    return documentFragment;
  };

  var exports$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Component: Component,
    createRef: createRef,
    createElement: createElement,
    createElementNS: createElementNS,
    Fragment: Fragment
  });

  exports.Component = Component;
  exports.Fragment = Fragment;
  exports.createElement = createElement;
  exports.createElementNS = createElementNS;
  exports.createRef = createRef;
  exports.default = exports$1;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
//# sourceMappingURL=deStagnate.js.map
