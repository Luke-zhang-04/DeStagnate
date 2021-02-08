/**
 * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
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
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
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

  var url = "https://luke-zhang-04.github.io/DeStagnate/error-codes";

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
          console.warn("WARN: Code 7. See ".concat(url, ". Params: ").concat(_typeof(val), ", ").concat(key));
        }
      }
    }
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
        children.forEach(function (child) {
          return bindChildren(element, child);
        });
      } else if (typeof children === "string" || typeof children === "number") {
        element.appendChild(document.createTextNode(children.toString()));
      } else if (children instanceof Component) {
        if (!children.didMount && element instanceof window.HTMLElement) {
          children.mount(element);
          return;
        } else if (!(element instanceof window.HTMLElement)) {
          throw new Error("ERROR: code 8. See ".concat(url));
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
   * @param namespaceURI - namespace uri
   * @param tagName - name of HTML element
   * @param props - element properties, such as class, innerHTML, id, style, etc
   * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
   * @param childrenRest - rest parameter of children
   * @returns html element
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
   * @returns empty ref object
   */
  var createRef = function createRef() {
    return {
      current: null
    };
  };

  var Preset = function Preset() {
    _classCallCheck(this, Preset);

    this.createElement = createElement;
    this.createElementNS = createElementNS;
    this.createRef = createRef;
    /**
     * Called when component catches error. Default behaviour is console.error
     * @param error - error object with info
     * @returns void
     */

    this.componentDidCatch = function (error) {
      return console.error(error);
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
  Preset.createElement = createElement;
  Preset.createElementNS = createElementNS;
  Preset.createRef = createRef;

  var eventNames = ["onFocus", "onBlur", "onFocusIn", "onFocusOut", "onAnimationStart", "onAnimationCancel", "onAnimationEnd", "onAnimationIteration", "onTransitionStart", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onAuxClick", "onClick", "onDblClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOver", "onMouseOut", "onMouseUp"];
  var Events = function (_BaseComponent) {
    _inherits(Events, _BaseComponent);

    var _super = _createSuper(Events);

    function Events() {
      var _this;

      _classCallCheck(this, Events);

      _this = _super.apply(this, arguments);
      /**
       * Binds event listeners event
       * Do not call manually
       * @pacakge
       */

      _this.bindEventListeners = function (element) {
        _this._eventListener(element.addEventListener);
      };
      /**
       * Binds event listeners event
       * Do not call manually
       * @pacakge
       */


      _this.unbindEventListeners = function (element) {
        _this._eventListener(element.removeEventListener);
      };

      _this._eventListener = function (eventListener) {
        var _iterator = _createForOfIteratorHelper(eventNames),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var eventName = _step.value;
            var htmlEventName = eventName.slice(2, 0).toLowerCase(),
                callback = _this[eventName];

            if (callback !== undefined && callback instanceof Function) {
              eventListener(htmlEventName, callback);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      };

      return _this;
    }

    return Events;
  }(Preset);

  /**
   * DeStagnate
   * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @class
   * @namespace
   * @abstract
   */

  var Component = function (_Base) {
    _inherits(Component, _Base);

    var _super = _createSuper(Component);

    /**
     * Construct class component
     * @param parent - parent of this element
     * @param props - element properties; works like React Props
     */
    function Component(parent, props) {
      var _this;

      _classCallCheck(this, Component);

      _this = _super.call(this);
      _this.props = props;
      /**
       * State of component. Works similar React State
       * @type {undefined | Object.<string, unknown>}
       */

      _this._state = {};
      _this._didSetInitialState = false;
      _this._didMount = false;
      /**
       * What to call before component update (state mutation)
       * @param {Props} prevProps - previous props
       * @param prevState - previous state
       * @returns void
       */

      _this.getSnapshotBeforeUpdate = function (prevProps, prevState) {
        return [prevProps, prevState];
      };
      /**
       * Forces a component to update
       * Follows the same component updating procedure as setState without modifying state
       * @returns returns error if error is thrown
       */


      _this.forceUpdate = function () {
        var _a;

        try {
          (_a = _this.componentDidUpdate) === null || _a === void 0 ? void 0 : _a.call(_assertThisInitialized(_this));

          if (_this._parent === undefined) {
            throw new Error("ERROR: code 3. See ".concat(url, "."));
          }

          _this.getSnapshotBeforeUpdate(Object.assign({}, _this.props), Object.assign({}, _this.state));

          _this._update(_this._execRender());
        } catch (err) {
          return _this._handleError(err);
        }
      };
      /**
       * Sets state
       * @param obj - state to set
       * @returns void
       */


      _this.setState = function (obj) {
        var _a;

        try {
          (_a = _this.componentWillUpdate) === null || _a === void 0 ? void 0 : _a.call(_assertThisInitialized(_this));

          if (_this._parent === undefined) {
            throw new Error("ERROR: code 3. See ".concat(url, "."));
          }

          _this.getSnapshotBeforeUpdate(Object.assign({}, _this.props), Object.assign({}, _this.state));

          Object.assign(_this._state, obj);
          var renderedContent = _this.shouldComponentUpdate() ? _this._execRender() : undefined;

          _this._update(renderedContent);
        } catch (err) {
          return _this._handleError(err);
        }
      };
      /**
       * Initial mounting to be manually called
       * @param parent - parent element to mount with; optional
       * @returns - result of append child to parent element
       */


      _this.mountComponent = function (parent) {
        var _a, _b;

        try {
          if (_this._parent === undefined) {
            throw new Error("ERROR: code 3. See ".concat(url, "."));
          }

          _this.parent = parent;

          var component = _this.render();

          _this._didSetInitialState = true;
          (_a = _this.componentWillMount) === null || _a === void 0 ? void 0 : _a.call(_assertThisInitialized(_this));

          if (component === null) {
            throw new Error("ERROR: code 5. See ".concat(url, "."));
          }

          _this.bindEventListeners(_this._parent);

          _this._didMount = true;
          (_b = _this.componentDidMount) === null || _b === void 0 ? void 0 : _b.call(_assertThisInitialized(_this));

          if (component instanceof Array) {
            var fragment = document.createDocumentFragment();
            component.forEach(fragment.appendChild);
            return _this._parent.appendChild(fragment);
          }

          return _this._parent.appendChild(component);
        } catch (err) {
          return _this._handleError(err);
        }
      };
      /**
       * Initial mounting to be manually called
       * @returns - result of append child to parent element
       */


      _this.mount = _this.mountComponent;
      /**
       * Unmounting to be manually called
       * @returns - void
       */

      _this.unmountComponent = function () {
        var _a;

        try {
          if (_this._parent === undefined) {
            return _this.componentDidWarn("WARN: code 4. See ".concat(url, "."));
          }

          (_a = _this.componentWillUnmount) === null || _a === void 0 ? void 0 : _a.call(_assertThisInitialized(_this));

          _this.unbindEventListeners(_this._parent);

          _this._removeChildren();

          _this._didMount = false;
        } catch (err) {
          _this._handleError(err);
        }
      };
      /**
       * Unmounting to be manually called
       * @returns - void
       */


      _this.unmount = _this.unmountComponent;
      /**
       * Removes children from this._parent
       * @return void
       */

      _this._removeChildren = function () {
        if (_this._parent === undefined) {
          throw new Error("ERROR: code 3. See ".concat(url, "."));
        }

        while (_this._parent.firstChild) {
          if (_this._parent.lastChild) {
            _this._parent.removeChild(_this._parent.lastChild);
          }
        }
      };
      /**
       * Executes new render
       * @returns rendered content
       */


      _this._execRender = function () {
        _this._removeChildren();

        return _this.render();
      };
      /**
       * Updates the component
       * @param renderedContent - rendered content from executing the render function
       * @returns void
       */


      _this._update = function (renderedContent) {
        var _a, _b, _c;

        if (renderedContent instanceof Array) {
          var _iterator = _createForOfIteratorHelper(renderedContent),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var element = _step.value;
              (_a = _this._parent) === null || _a === void 0 ? void 0 : _a.appendChild(element);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else if (renderedContent) {
          (_b = _this._parent) === null || _b === void 0 ? void 0 : _b.appendChild(renderedContent);
        }

        if (renderedContent) {
          (_c = _this.componentDidUpdate) === null || _c === void 0 ? void 0 : _c.call(_assertThisInitialized(_this));
        }
      };

      _this._handleError = function (err) {
        if (err instanceof Error) {
          _this.componentDidCatch(err);

          return err;
        }

        var error = new Error(String(err));

        _this.componentDidCatch(error);

        return error;
      };

      _this._parent = parent;
      return _this;
    }
    /**
     * Public getState getter as this.state itself is protected
     * @returns component state
     */


    _createClass(Component, [{
      key: "getState",
      get: function get() {
        return this.state;
      }
      /**
       * Get component state
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
       * @param obj - state to set
       */
      ,
      set: function set(obj) {
        if (this._didSetInitialState) {
          this.componentDidCatch(new Error("ERROR: code 2. See ".concat(url, ".")));
          this.setState(obj);
        } else {
          this._state = obj;
          this._didSetInitialState = true;
        }
      }
      /**
       * Public getProps getter as this.props itself is protected
       * @returns component props
       */

    }, {
      key: "getProps",
      get: function get() {
        return this.props;
      }
      /**
       * Set the parent of this component
       * @param element - parent element
       * @returns void
       */

    }, {
      key: "parent",
      get:
      /**
       * Get the parent element of this component
       * @returns parent
       */
      function get() {
        return this._parent;
      }
      /**
       * Get didMount value publicly
       * @returns if mounted
       */
      ,
      set: function set(element) {
        if (element && element.childElementCount > 0) {
          this.componentDidCatch(new Error("ERROR: code 1. See ".concat(url, ". Params: ").concat(element.tagName.toLowerCase())));
        }

        this._parent = element;
      }
    }, {
      key: "didMount",
      get: function get() {
        return this._didMount;
      }
    }]);

    return Component;
  }(Events);

  var fragment = function fragment(_) {
    var fragment = document.createDocumentFragment();

    for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      children[_key - 1] = arguments[_key];
    }

    bindChildren(fragment, children);
    return fragment;
  };

  exports.Component = Component;
  exports.createElement = createElement;
  exports.createElementNS = createElementNS;
  exports.createRef = createRef;
  exports.fragment = fragment;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVTdGFnbmF0ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3ByaXZhdGUvX3VybC5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHMuanMiLCIuLi8uLi9saWIvY3JlYXRlRWxlbWVudC5qcyIsIi4uLy4uL2xpYi9jcmVhdGVFbGVtZW50TlMuanMiLCIuLi8uLi9saWIvY3JlYXRlUmVmLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvX2Jhc2UuanMiLCIuLi8uLi9saWIvcHJpdmF0ZS9fZXZlbnRzLmpzIiwiLi4vLi4vbGliL2NvbXBvbmVudC5qcyIsIi4uLy4uL2xpYi9mcmFnbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdXJsID0gXCJodHRwczovL2x1a2UtemhhbmctMDQuZ2l0aHViLmlvL0RlU3RhZ25hdGUvZXJyb3ItY29kZXNcIjtcbmV4cG9ydCBkZWZhdWx0IHVybDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgzVnliQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOTFjbXd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExIZEVRVUYzUkN4RFFVRkJPMEZCUlRORkxHVkJRV1VzUjBGQlJ5eERRVUZCSW4wPSIsIi8qKlxuICogQ29tcG9uZW50XG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGZpbGUgc2hhcmUgZnVuY3Rpb25zIGFuZCB0eXBlcyBmb3IgY3JlYXRlRWxlbWVudCBhbmQgaXQncyB2YXJpYW50c1xuICovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50XCI7XG5pbXBvcnQgdXJsIGZyb20gXCIuL191cmxcIjtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gcHJvcHMgLSBwcm9wcyB0byBiaW5kIHdpdGhcbiAqIEBwYXJhbSBucyAtIGlmIG5hbWVzcGFjZSBlbGVtZW50XG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kUHJvcHMgPSAoZWxlbWVudCwgcHJvcHMsIG5zID0gZmFsc2UpID0+IHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAodmFsKSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgKHZhbCkgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcImlubmVySFRNTFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdmFsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5zKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlTlMobnVsbCwga2V5LCB2YWwudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkuc2xpY2UoMCwgMikgPT09IFwib25cIikgeyAvLyBXb3JrcyBzdWNoIGFzIG9uQ2xpY2ssIG9uQW5pbWF0aW9uRW5kLCBldGMuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodmFsKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihrZXkuc2xpY2UoMilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpLCB2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJyZWZcIiAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiAodmFsKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgIFwiY3VycmVudFwiIGluIHZhbCkge1xuICAgICAgICAgICAgICAgIHZhbC5jdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBXQVJOOiBDb2RlIDcuIFNlZSAke3VybH0uIFBhcmFtczogJHt0eXBlb2YgKHZhbCl9LCAke2tleX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAqIEJpbmRzIGNoaWxkcmVuIHRvIGVsZW1lbnRcbiAqIEBwYWNrYWdlXG4gKiBAcGFyYW0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZFxuICogQHBhcmFtIGNoaWxkcmVuIC0gY2hpbGRyZW4gdG8gYmluZCB3aXRoXG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kQ2hpbGRyZW4gPSAoZWxlbWVudCwgY2hpbGRyZW4pID0+IHtcbiAgICBpZiAoY2hpbGRyZW4gIT09IG51bGwgJiYgY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgdHlwZW9mIGNoaWxkcmVuID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkcmVuLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZHJlbiBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgICAgICAgaWYgKCFjaGlsZHJlbi5kaWRNb3VudCAmJiBlbGVtZW50IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ubW91bnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIShlbGVtZW50IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgOC4gU2VlICR7dXJsfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLnBhcmVudCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLnBhcmVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDJOeVpXRjBaVVZzWlcxbGJuUlZkR2xzY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3Y21sMllYUmxMMTlqY21WaGRHVkZiR1Z0Wlc1MFZYUnBiSE11ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN08wZEJVVWM3UVVGRlNDeFBRVUZQTEVWQlFVTXNVMEZCVXl4RlFVRkRMRTFCUVUwc1kwRkJZeXhEUVVGQk8wRkJSWFJETEU5QlFVOHNSMEZCUnl4TlFVRk5MRkZCUVZFc1EwRkJRVHRCUVhsRmVFSTdPenM3T3pzN1IwRlBSenRCUVVOSUxFMUJRVTBzUTBGQlF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4RFFVTnlRaXhQUVVGblFpeEZRVU5vUWl4TFFVRjVRaXhGUVVONlFpeEZRVUZGTEVkQlFVY3NTMEZCU3l4RlFVTk9MRVZCUVVVN1NVRkRUaXhKUVVGSkxFdEJRVXNzUlVGQlJUdFJRVU5RTEV0QlFVc3NUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRelZETEVsQlFVa3NUMEZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExGRkJRVkVzU1VGQlNTeFBRVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1VVRkJVU3hGUVVGRk8yZENRVU4wUkN4SlFVRkpMRWRCUVVjc1MwRkJTeXhYUVVGWExFVkJRVVU3YjBKQlEzSkNMRTlCUVU4c1EwRkJReXhUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkJPMmxDUVVOeVF6dHhRa0ZCVFN4SlFVRkpMRVZCUVVVc1JVRkJSVHR2UWtGRFdDeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVFN2FVSkJRM0JFTzNGQ1FVRk5PMjlDUVVOSUxFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZCTzJsQ1FVTTFRenRoUVVOS08ybENRVUZOTEVsQlFVa3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4RlFVRkZMRVZCUVVVc09FTkJRVGhETzJkQ1FVTnFSaXhKUVVGSkxFOUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4VlFVRlZMRVZCUVVVN2IwSkJRelZDTEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUTBGRGNFSXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03ZVVKQlExQXNWMEZCVnl4RlFVRnZRaXhGUVVOd1F5eEhRVUZuUWl4RFFVTnVRaXhEUVVGQk8ybENRVU5LTzJGQlEwbzdhVUpCUVUwc1NVRkRTQ3hIUVVGSExFdEJRVXNzUzBGQlN6dG5Ra0ZEWWl4UFFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzVVVGQlVUdG5Ra0ZEZUVJc1UwRkJVeXhKUVVGSkxFZEJRVWNzUlVGRGJFSTdaMEpCUTBjc1IwRkJiMElzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkJPMkZCUXpGRE8ybENRVUZOTEVsQlFVa3NSMEZCUnl4TFFVRkxMRk5CUVZNc1JVRkJSVHRuUWtGRE1VSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNSMEZCUnl4aFFVRmhMRTlCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkJPMkZCUXpORk8xTkJRMG83UzBGRFNqdEJRVU5NTEVOQlFVTXNRMEZCUVR0QlFVVkVPenM3T3pzN1IwRk5SenRCUVVOSUxFMUJRVTBzUTBGQlF5eE5RVUZOTEZsQlFWa3NSMEZCUnl4RFFVTjRRaXhQUVVGaExFVkJRMklzVVVGQmRVSXNSVUZEYmtJc1JVRkJSVHRKUVVOT0xFbEJRVWtzVVVGQlVTeExRVUZMTEVsQlFVa3NTVUZCU1N4UlFVRlJMRXRCUVVzc1UwRkJVeXhGUVVGRk8xRkJRemRETEVsQlFVa3NVVUZCVVN4WlFVRlpMRXRCUVVzc1JVRkJSVHRaUVVNelFpeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1MwRkJiVUlzUlVGQlJTeEZRVUZGTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZCTzFOQlF6RkZPMkZCUVUwc1NVRkRTQ3hQUVVGUExGRkJRVkVzUzBGQlN5eFJRVUZSTzFsQlF6VkNMRTlCUVU4c1VVRkJVU3hMUVVGTExGRkJRVkVzUlVGRE9VSTdXVUZEUlN4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlFUdFRRVU53UlR0aFFVRk5MRWxCUVVrc1VVRkJVU3haUVVGWkxGTkJRVk1zUlVGQlJUdFpRVU4wUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzU1VGQlNTeFBRVUZQTEZsQlFWa3NUVUZCVFN4RFFVRkRMRmRCUVZjc1JVRkJSVHRuUWtGRE4wUXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlFUdG5Ra0ZGZGtJc1QwRkJUVHRoUVVOVU8ybENRVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMRTlCUVU4c1dVRkJXU3hOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVTdaMEpCUTJwRUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVRTdZVUZETDBNN1dVRkZSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eE5RVUZOTEV0QlFVc3NUMEZCVHl4RlFVRkZPMmRDUVVNM1FpeFJRVUZSTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJRVHRoUVVNMVFqdFpRVVZFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRVHRUUVVONlFqdGhRVUZOTzFsQlEwZ3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlFUdFRRVU5vUXp0TFFVTktPMEZCUTB3c1EwRkJReXhEUVVGQkluMD0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGZvciBET00gbWFuaXB1bGF0aW9uXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vanN4LnRzXCIgLz5cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiwgYmluZFByb3BzLCB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuLyoqXG4gKlxuICogQHBhcmFtIHRhZ05hbWVPckNvbXBvbmVudCAtIG5hbWUgb2YgSFRNTCBlbGVtZW50IG9yIGZ1bmN0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtIHByb3BzIC0gcHJvcHMgb2YgZWxlbWVudCBvciBjb21wb25lbnRcbiAqIDEuIElmIGB0YWdOYW1lT3JDb21wb25lbnRgIGlzIHRhZ25hbWUsIHByb3BzIGFyZSBlbGVtZW50IHByb3BlcnRpZXMsIHN1Y2ggYXMgY2xhc3MsIGlubmVySFRNTCwgaWQsIHN0eWxlLCBldGNcbiAqIDIuIElmIGB0YWdOYW1lT3JDb21wb25lbnRgIGlzIGEgZnVuY3Rpb24sIHByb3BzIGFyZSB0aGF0IGZ1bmN0aW9ucyBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQuIENhbiBiZSBub3RoaW5nLCBudW1iZXIgKGNvbnZlcnRlZCB0byBzdHJpbmcpLCBzdHJpbmcgKHRleHQpLCBvciBhbm90aGVyIGVsZW1lbnQuIEFuIGFycmF5IG9mIGFueSBvZiB0aGVzZSB3aWxsIGNyZWF0ZSBtdWx0aXBsZSBjaGlsZHJlblxuICogQHBhcmFtIGNoaWxkcmVuQXJncyAtIHJlc3QgcGFyYW1ldGVyIGZvciBjaGlsZHJlblxuICogQHJldHVybnMgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lT3JDb21wb25lbnQsIHByb3BzLCAuLi5jaGlsZHJlbikge1xuICAgIGlmICh0eXBlb2YgKHRhZ05hbWVPckNvbXBvbmVudCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZU9yQ29tcG9uZW50KTtcbiAgICAgICAgYmluZFByb3BzKGVsZW1lbnQsIHByb3BzKTtcbiAgICAgICAgYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiAodGFnTmFtZU9yQ29tcG9uZW50KSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiB0YWdOYW1lT3JDb21wb25lbnQocHJvcHMsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIEVycm9yKFwidGFnTmFtZU9yQ29tcG9uZW50IGlzIG9mIGludmFsaWQgdHlwZS5cIik7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxSV3hsYldWdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlqY21WaGRHVkZiR1Z0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdPenRIUVZGSE8wRkJRMGdzTWtKQlFUSkNPMEZCUXpOQ0xHbERRVUZwUXp0QlFVVnFReXhQUVVGUExFVkJSMGdzV1VGQldTeEZRVU5hTEZOQlFWTXNSMEZEV2l4TlFVRk5MQ3RDUVVFclFpeERRVUZCTzBGQmJVTjBRenM3T3pzN096czdPMGRCVTBjN1FVRkRTQ3hOUVVGTkxGVkJRVlVzWVVGQllTeERRVWw2UWl4clFrRkhXU3hGUVVOYUxFdEJRVFpDTEVWQlF6ZENMRWRCUVVjc1VVRkJNa0k3U1VGRk9VSXNTVUZCU1N4UFFVRk5MRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTMEZCU3l4UlFVRlJMRVZCUVVVN1VVRkRla01zVFVGQlRTeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkJPMUZCUlRGRUxGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCTUVJc1EwRkJReXhEUVVGQk8xRkJSVGxETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVUU3VVVGRkwwSXNUMEZCVHl4UFFVRlBMRU5CUVVFN1MwRkRha0k3VTBGQlRTeEpRVUZKTEU5QlFVMHNRMEZCUXl4clFrRkJhMElzUTBGQlF5eExRVUZMTEZWQlFWVXNSVUZCUlR0UlFVTnNSQ3hQUVVGUExHdENRVUZyUWl4RFFVRkRMRXRCUVZVc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlFUdExRVU5zUkR0SlFVVkVMRTlCUVU4c1MwRkJTeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVFN1FVRkRNVVFzUTBGQlF6dEJRVVZFTEdWQlFXVXNZVUZCWVN4RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudE5TIGNyZWF0ZUVsZW1lbnQgZm9yIG5hbWVzcGFjZWQgZWxlbWVudHNcbiAqL1xuaW1wb3J0IHsgYmluZENoaWxkcmVuLCBiaW5kUHJvcHMsIH0gZnJvbSBcIi4vcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBjaGlsZCBlbGVtZW50IHRvIGRlU3RhZ25hdGVcbiAqIEBwYXJhbSBuYW1lc3BhY2VVUkkgLSBuYW1lc3BhY2UgdXJpXG4gKiBAcGFyYW0gdGFnTmFtZSAtIG5hbWUgb2YgSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0gcHJvcHMgLSBlbGVtZW50IHByb3BlcnRpZXMsIHN1Y2ggYXMgY2xhc3MsIGlubmVySFRNTCwgaWQsIHN0eWxlLCBldGNcbiAqIEBwYXJhbSBjaGlsZHJlbiAtIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudC4gQ2FuIGJlIG5vdGhpbmcsIG51bWJlciAoY29udmVydGVkIHRvIHN0cmluZyksIHN0cmluZyAodGV4dCksIG9yIGFub3RoZXIgZWxlbWVudC4gQW4gYXJyYXkgb2YgYW55IG9mIHRoZXNlIHdpbGwgY3JlYXRlIG11bHRpcGxlIGNoaWxkcmVuXG4gKiBAcGFyYW0gY2hpbGRyZW5SZXN0IC0gcmVzdCBwYXJhbWV0ZXIgb2YgY2hpbGRyZW5cbiAqIEByZXR1cm5zIGh0bWwgZWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudE5TID0gKG5hbWVzcGFjZVVSSSwgdGFnTmFtZSwgcHJvcHMsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHRhZ05hbWUpO1xuICAgIGJpbmRQcm9wcyhlbGVtZW50LCBwcm9wcywgdHJ1ZSk7XG4gICAgYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50TlM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFJXeGxiV1Z1ZEU1VExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMk55WldGMFpVVnNaVzFsYm5ST1V5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3UjBGUlJ6dEJRVVZJTEU5QlFVOHNSVUZGU0N4WlFVRlpMRVZCUTFvc1UwRkJVeXhIUVVOYUxFMUJRVTBzSzBKQlFTdENMRU5CUVVFN1FVRkZkRU03T3pzN096czdPMGRCVVVjN1FVRkRTQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeGxRVUZsTEVkQlFVY3NRMEZETTBJc1dVRkJLMGNzUlVGREwwY3NUMEZCTUVNc1JVRkRNVU1zUzBGQmQwTXNSVUZEZUVNc1IwRkJSeXhSUVVFeVFpeEZRVU4yUWl4RlFVRkZPMGxCUTFRc1RVRkJUU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVUU3U1VGRkwwUXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVRTdTVUZGTDBJc1dVRkJXU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUVR0SlFVVXZRaXhQUVVGUExFOUJRVThzUTBGQlFUdEJRVU5zUWl4RFFVRkRMRU5CUVVFN1FVRkZSQ3hsUVVGbExHVkJRV1VzUTBGQlFTSjkiLCIvKipcbiAqIENyZWF0ZXMgYSByZWZlcmVuY2UgZm9yIGEgbmVzdGVkIGNvbXBvbmVudFxuICogQHJldHVybnMgZW1wdHkgcmVmIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmID0gKCkgPT4gKHtcbiAgICBjdXJyZW50OiBudWxsLFxufSk7XG4vKipcbiAqIENyZWF0ZXMgYSByZWZlcmVuY2UgZm9yIGEgbmVzdGVkIGNvbXBvbmVudFxuICogQHJldHVybnMgZW1wdHkgcmVmIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWY7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFVtVm1MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOeVpXRjBaVkpsWmk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRmxRVHM3TzBkQlIwYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQmQwTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRha1VzVDBGQlR5eEZRVUZGTEVsQlFVazdRMEZEYUVJc1EwRkJReXhEUVVGQk8wRkJSVVk3T3p0SFFVZEhPMEZCUTBnc1pVRkJaU3hUUVVGVExFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIFByZXNldCAtIGJhc2UgZm9yIGEgY29tcG9uZW50XG4gKiBAcGFja2FnZVxuICovXG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgX2NyZWF0ZUVsZW1lbnROUyB9IGZyb20gXCIuLi9jcmVhdGVFbGVtZW50TlNcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgX2NyZWF0ZVJlZiB9IGZyb20gXCIuLi9jcmVhdGVSZWZcIjtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHNcbiAqL1xuZXhwb3J0IGNsYXNzIFByZXNldCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCA9IF9jcmVhdGVFbGVtZW50O1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnROUyA9IF9jcmVhdGVFbGVtZW50TlM7XG4gICAgICAgIHRoaXMuY3JlYXRlUmVmID0gX2NyZWF0ZVJlZjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB3aGVuIGNvbXBvbmVudCBjYXRjaGVzIGVycm9yLiBEZWZhdWx0IGJlaGF2aW91ciBpcyBjb25zb2xlLmVycm9yXG4gICAgICAgICAqIEBwYXJhbSBlcnJvciAtIGVycm9yIG9iamVjdCB3aXRoIGluZm9cbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaCA9IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgd2hlbiBjb21wb25lbnQgY2F0Y2hlcyBhIHdhcm5pbmcuIERlZmF1bHQgYmVoYXZpb3VyIGlzIGNvbnNvbGUud2FyblxuICAgICAgICAgKiBAcGFyYW0gbXNnIC0gd2FybmluZyBtZXNzYWdlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkV2FybiA9IChtc2cpID0+IGNvbnNvbGUud2Fybihtc2cpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIGJlZm9yZSBjb21wb25lbnQgaXMgdXBkYXRlZFxuICAgICAgICAgKiBAcmV0dXJucyB3aGV0aGVyIG9yIG5vdCBjb21wb25lbnQgc2hvdWxkIHVwZGF0ZS9yZS1yZW5kZXJcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbmRlcmluZyBIVE1MLCBtdXN0IGJlIHBhcnQgb2YgZXh0ZW5kZWQgY2xhc3NcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEByZXR1cm5zIGlmIHJldHVybnMgbnVsbCBlcnJvciB3aWxsIGJlIHRocm93blxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiBudWxsO1xuICAgIH1cbn1cblByZXNldC5jcmVhdGVFbGVtZW50ID0gX2NyZWF0ZUVsZW1lbnQ7XG5QcmVzZXQuY3JlYXRlRWxlbWVudE5TID0gX2NyZWF0ZUVsZW1lbnROUztcblByZXNldC5jcmVhdGVSZWYgPSBfY3JlYXRlUmVmO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDJKaGMyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmNISnBkbUYwWlM5ZlltRnpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN08wZEJVMGM3UVVGRlNDeFBRVUZQTEVWQlFVTXNUMEZCVHl4SlFVRkpMR05CUVdNc1JVRkJReXhOUVVGTkxHdENRVUZyUWl4RFFVRkJPMEZCUXpGRUxFOUJRVThzUlVGQlF5eFBRVUZQTEVsQlFVa3NaMEpCUVdkQ0xFVkJRVU1zVFVGQlRTeHZRa0ZCYjBJc1EwRkJRVHRCUVVNNVJDeFBRVUZQTEVWQlFVTXNUMEZCVHl4SlFVRkpMRlZCUVZVc1JVRkJReXhOUVVGTkxHTkJRV01zUTBGQlFUdEJRV2xEYkVRc01FSkJRVEJDTzBGQlF6RkNPenRIUVVWSE8wRkJRMGdzVFVGQlRTeFBRVUZuUWl4TlFVRk5PMGxCUVRWQ08xRkJVVzlDTEd0Q1FVRmhMRWRCUVVjc1kwRkJZeXhEUVVGQk8xRkJSVGxDTEc5Q1FVRmxMRWRCUVVjc1owSkJRV2RDTEVOQlFVRTdVVUZGYkVNc1kwRkJVeXhIUVVGSExGVkJRVlVzUTBGQlFUdFJRVVYwUXpzN096dFhRVWxITzFGQlEwa3NjMEpCUVdsQ0xFZEJRVWNzUTBGQlF5eExRVUZaTEVWQlFWRXNSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVRTdVVUZGZGtVN096czdWMEZKUnp0UlFVTkpMSEZDUVVGblFpeEhRVUZITEVOQlFVTXNSMEZCVnl4RlFVRlJMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJPMUZCUld4Rk96czdWMEZIUnp0UlFVTkpMREJDUVVGeFFpeEhRVUZITEVkQlFWa3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJRVHRSUVVWc1JEczdPenM3TzFkQlRVYzdVVUZEWVN4WFFVRk5MRWRCUVVjc1IwRkJaU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZCTzBsQlJXNUVMRU5CUVVNN08wRkJla013UWl4dlFrRkJZU3hIUVVGSExHTkJRV01zUTBGQlFUdEJRVVU1UWl4elFrRkJaU3hIUVVGSExHZENRVUZuUWl4RFFVRkJPMEZCUld4RExHZENRVUZUTEVkQlFVY3NWVUZCVlN4RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgRXZlbnRzXG4gKiBAcGFja2FnZVxuICovXG5pbXBvcnQgeyBQcmVzZXQgYXMgQmFzZUNvbXBvbmVudCB9IGZyb20gXCIuL19iYXNlXCI7XG5jb25zdCBldmVudE5hbWVzID0gW1xuICAgIFwib25Gb2N1c1wiLFxuICAgIFwib25CbHVyXCIsXG4gICAgXCJvbkZvY3VzSW5cIixcbiAgICBcIm9uRm9jdXNPdXRcIixcbiAgICBcIm9uQW5pbWF0aW9uU3RhcnRcIixcbiAgICBcIm9uQW5pbWF0aW9uQ2FuY2VsXCIsXG4gICAgXCJvbkFuaW1hdGlvbkVuZFwiLFxuICAgIFwib25BbmltYXRpb25JdGVyYXRpb25cIixcbiAgICBcIm9uVHJhbnNpdGlvblN0YXJ0XCIsXG4gICAgXCJvblRyYW5zaXRpb25DYW5jZWxcIixcbiAgICBcIm9uVHJhbnNpdGlvbkVuZFwiLFxuICAgIFwib25UcmFuc2l0aW9uUnVuXCIsXG4gICAgXCJvbkF1eENsaWNrXCIsXG4gICAgXCJvbkNsaWNrXCIsXG4gICAgXCJvbkRibENsaWNrXCIsXG4gICAgXCJvbk1vdXNlRG93blwiLFxuICAgIFwib25Nb3VzZUVudGVyXCIsXG4gICAgXCJvbk1vdXNlTGVhdmVcIixcbiAgICBcIm9uTW91c2VNb3ZlXCIsXG4gICAgXCJvbk1vdXNlT3ZlclwiLFxuICAgIFwib25Nb3VzZU91dFwiLFxuICAgIFwib25Nb3VzZVVwXCIsXG5dO1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjbGFzcyBFdmVudHMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJpbmRzIGV2ZW50IGxpc3RlbmVycyBldmVudFxuICAgICAgICAgKiBEbyBub3QgY2FsbCBtYW51YWxseVxuICAgICAgICAgKiBAcGFjYWtnZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnMgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcihlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQmluZHMgZXZlbnQgbGlzdGVuZXJzIGV2ZW50XG4gICAgICAgICAqIERvIG5vdCBjYWxsIG1hbnVhbGx5XG4gICAgICAgICAqIEBwYWNha2dlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVuYmluZEV2ZW50TGlzdGVuZXJzID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIoZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lciA9IChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaHRtbEV2ZW50TmFtZSA9IGV2ZW50TmFtZS5zbGljZSgyLCAwKS50b0xvd2VyQ2FzZSgpLCBjYWxsYmFjayA9IHRoaXNbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCAmJiBjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TGlzdGVuZXIoaHRtbEV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lYMlYyWlc1MGN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d2NtbDJZWFJsTDE5bGRtVnVkSE11ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN096dEhRVk5ITzBGQlJVZ3NUMEZCVHl4RlFVRkRMRTFCUVUwc1NVRkJTU3hoUVVGaExFVkJRVU1zVFVGQlRTeFRRVUZUTEVOQlFVRTdRVUZaTDBNc1RVRkJUU3hWUVVGVkxFZEJRWEZDTzBsQlEycERMRk5CUVZNN1NVRkRWQ3hSUVVGUk8wbEJRMUlzVjBGQlZ6dEpRVU5ZTEZsQlFWazdTVUZEV2l4clFrRkJhMEk3U1VGRGJFSXNiVUpCUVcxQ08wbEJRMjVDTEdkQ1FVRm5RanRKUVVOb1FpeHpRa0ZCYzBJN1NVRkRkRUlzYlVKQlFXMUNPMGxCUTI1Q0xHOUNRVUZ2UWp0SlFVTndRaXhwUWtGQmFVSTdTVUZEYWtJc2FVSkJRV2xDTzBsQlEycENMRmxCUVZrN1NVRkRXaXhUUVVGVE8wbEJRMVFzV1VGQldUdEpRVU5hTEdGQlFXRTdTVUZEWWl4alFVRmpPMGxCUTJRc1kwRkJZenRKUVVOa0xHRkJRV0U3U1VGRFlpeGhRVUZoTzBsQlEySXNXVUZCV1R0SlFVTmFMRmRCUVZjN1EwRkRaQ3hEUVVGQk8wRkJjVWhFTERCQ1FVRXdRanRCUVVNeFFpeE5RVUZOTEU5QlFXZENMRTFCUVU4c1UwRkJVU3hoUVVGaE8wbEJRV3hFT3p0UlFVVkpPenM3TzFkQlNVYzdVVUZEWjBJc2RVSkJRV3RDTEVkQlFVY3NRMEZCUXl4UFFVRnZRaXhGUVVGUkxFVkJRVVU3V1VGRGJrVXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJRVHRSUVVOcVJDeERRVUZETEVOQlFVRTdVVUZGUkRzN096dFhRVWxITzFGQlEyZENMSGxDUVVGdlFpeEhRVUZITEVOQlFVTXNUMEZCYjBJc1JVRkJVU3hGUVVGRk8xbEJRM0pGTEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1QwRkJUeXhEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVFN1VVRkRjRVFzUTBGQlF5eERRVUZCTzFGQlJVOHNiVUpCUVdNc1IwRkJSeXhEUVVGRExHRkJRVFJDTEVWQlFWRXNSVUZCUlR0WlFVTTFSQ3hMUVVGTExFMUJRVTBzVTBGQlV5eEpRVUZKTEZWQlFWVXNSVUZCUlR0blFrRkRhRU1zVFVGQlRTeGhRVUZoTEVkQlFVY3NVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRVZCUTNKRUxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVFN1owSkJSVGxDTEVsQlFVa3NVVUZCVVN4TFFVRkxMRk5CUVZNc1NVRkJTU3hSUVVGUkxGbEJRVmtzVVVGQlVTeEZRVUZGTzI5Q1FVTjRSQ3hoUVVGaExFTkJRVU1zWVVGQllTeEZRVUZGTEZGQlFUaERMRU5CUVVNc1EwRkJRVHRwUWtGREwwVTdZVUZEU2p0UlFVTk1MRU5CUVVNc1EwRkJRVHRKUVVWTUxFTkJRVU03UTBGQlFTSjkiLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBEZVN0YWduYXRlIG1haW4gZGVzdGFnbmF0ZSBjbGFzc1xuICogQGZpbGUgRGVTdGFnbmF0ZSBjb21wb25lbnQgY2xhc3NcbiAqIEBwcmVzZXJ2ZVxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGluZXMgKi9cbmltcG9ydCB7IEV2ZW50cyBhcyBCYXNlIH0gZnJvbSBcIi4vcHJpdmF0ZS9fZXZlbnRzXCI7XG5pbXBvcnQgdXJsIGZyb20gXCIuL3ByaXZhdGUvX3VybFwiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBAY2xhc3NkZXNjIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNsYXNzXG4gKiBAbmFtZXNwYWNlXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBjbGFzcyBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0gcGFyZW50IC0gcGFyZW50IG9mIHRoaXMgZWxlbWVudFxuICAgICAqIEBwYXJhbSBwcm9wcyAtIGVsZW1lbnQgcHJvcGVydGllczsgd29ya3MgbGlrZSBSZWFjdCBQcm9wc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgcHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICAvKipcbiAgICAgICAgICogU3RhdGUgb2YgY29tcG9uZW50LiBXb3JrcyBzaW1pbGFyIFJlYWN0IFN0YXRlXG4gICAgICAgICAqIEB0eXBlIHt1bmRlZmluZWQgfCBPYmplY3QuPHN0cmluZywgdW5rbm93bj59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgaW5pdGlhbCBzdGF0ZSB3YXMgc2V0IGluIGluaXRpYWxpemVyXG4gICAgICAgICAqIERvIG5vdCB0aHJvdyBlcnJvciB3aXRoIGRpcmVjdCBzdGF0ZSBzZXR0aW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGNvbXBvbmVudCBpcyBtb3VudGVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9kaWRNb3VudCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hhdCB0byBjYWxsIGJlZm9yZSBjb21wb25lbnQgdXBkYXRlIChzdGF0ZSBtdXRhdGlvbilcbiAgICAgICAgICogQHBhcmFtIHtQcm9wc30gcHJldlByb3BzIC0gcHJldmlvdXMgcHJvcHNcbiAgICAgICAgICogQHBhcmFtIHByZXZTdGF0ZSAtIHByZXZpb3VzIHN0YXRlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgPSAocHJldlByb3BzLCBwcmV2U3RhdGUpID0+IFtwcmV2UHJvcHMsIHByZXZTdGF0ZV07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZXMgYSBjb21wb25lbnQgdG8gdXBkYXRlXG4gICAgICAgICAqIEZvbGxvd3MgdGhlIHNhbWUgY29tcG9uZW50IHVwZGF0aW5nIHByb2NlZHVyZSBhcyBzZXRTdGF0ZSB3aXRob3V0IG1vZGlmeWluZyBzdGF0ZVxuICAgICAgICAgKiBAcmV0dXJucyByZXR1cm5zIGVycm9yIGlmIGVycm9yIGlzIHRocm93blxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnREaWRVcGRhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDMuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyksIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGUodGhpcy5fZXhlY1JlbmRlcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgc3RhdGVcbiAgICAgICAgICogQHBhcmFtIG9iaiAtIHN0YXRlIHRvIHNldFxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNldFN0YXRlID0gKG9iaikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbXBvbmVudFdpbGxVcGRhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDMuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyksIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuX3N0YXRlLCBvYmopO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkQ29udGVudCA9IHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9leGVjUmVuZGVyKClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHJlbmRlcmVkQ29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmcsIG1heC1sZW4gKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWwgbW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEBwYXJhbSBwYXJlbnQgLSBwYXJlbnQgZWxlbWVudCB0byBtb3VudCB3aXRoOyBvcHRpb25hbFxuICAgICAgICAgKiBAcmV0dXJucyAtIHJlc3VsdCBvZiBhcHBlbmQgY2hpbGQgdG8gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91bnRDb21wb25lbnQgPSAocGFyZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAzLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnRXaWxsTW91bnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSA1LiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRFdmVudExpc3RlbmVycyh0aGlzLl9wYXJlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZE1vdW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLmNvbXBvbmVudERpZE1vdW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5mb3JFYWNoKGZyYWdtZW50LmFwcGVuZENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWwgbW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEByZXR1cm5zIC0gcmVzdWx0IG9mIGFwcGVuZCBjaGlsZCB0byBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VudCA9IHRoaXMubW91bnRDb21wb25lbnQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbm1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcmV0dXJucyAtIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudW5tb3VudENvbXBvbmVudCA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudERpZFdhcm4oYFdBUk46IGNvZGUgNC4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy51bmJpbmRFdmVudExpc3RlbmVycyh0aGlzLl9wYXJlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlkTW91bnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVW5tb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHJldHVybnMgLSB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVubW91bnQgPSB0aGlzLnVubW91bnRDb21wb25lbnQ7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbWF4LWxlbiwgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZyAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyBjaGlsZHJlbiBmcm9tIHRoaXMuX3BhcmVudFxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAzLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuX3BhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX3BhcmVudC5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4ZWN1dGVzIG5ldyByZW5kZXJcbiAgICAgICAgICogQHJldHVybnMgcmVuZGVyZWQgY29udGVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZXhlY1JlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZXMgdGhlIGNvbXBvbmVudFxuICAgICAgICAgKiBAcGFyYW0gcmVuZGVyZWRDb250ZW50IC0gcmVuZGVyZWQgY29udGVudCBmcm9tIGV4ZWN1dGluZyB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3VwZGF0ZSA9IChyZW5kZXJlZENvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgaWYgKHJlbmRlcmVkQ29udGVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHJlbmRlcmVkQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLl9wYXJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLl9wYXJlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hcHBlbmRDaGlsZChyZW5kZXJlZENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlbmRlcmVkQ29udGVudCkge1xuICAgICAgICAgICAgICAgIChfYyA9IHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFN0cmluZyhlcnIpKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBnZXRTdGF0ZSBnZXR0ZXIgYXMgdGhpcy5zdGF0ZSBpdHNlbGYgaXMgcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMgY29tcG9uZW50IHN0YXRlXG4gICAgICovXG4gICAgZ2V0IGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGNvbXBvbmVudCBzdGF0ZVxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqIFdBUk46IGRvIG5vdCB1c2UgdGhpcyBtZXRob2QgdG8gbXV0YXRlIHRoZSBzdGF0ZSBkaXJlY3RseVxuICAgICAqIEBwYXJhbSBvYmogLSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBzZXQgc3RhdGUob2JqKSB7XG4gICAgICAgIGlmICh0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2gobmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gb2JqO1xuICAgICAgICAgICAgdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgZ2V0UHJvcHMgZ2V0dGVyIGFzIHRoaXMucHJvcHMgaXRzZWxmIGlzIHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBwcm9wc1xuICAgICAqL1xuICAgIGdldCBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcGFyZW50IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBwYXJlbnQgZWxlbWVudFxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXQgcGFyZW50KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2gobmV3IEVycm9yKGBFUlJPUjogY29kZSAxLiBTZWUgJHt1cmx9LiBQYXJhbXM6ICR7ZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCl9YCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcGFyZW50IGVsZW1lbnQgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAcmV0dXJucyBwYXJlbnRcbiAgICAgKi9cbiAgICBnZXQgcGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgZGlkTW91bnQgdmFsdWUgcHVibGljbHlcbiAgICAgKiBAcmV0dXJucyBpZiBtb3VudGVkXG4gICAgICovXG4gICAgZ2V0IGRpZE1vdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlkTW91bnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyTnZiWEJ2Ym1WdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3p0SFFWVkhPMEZCUTBnc09FSkJRVGhDTzBGQlJUbENMRTlCUVU4c1JVRkJReXhOUVVGTkxFbEJRVWtzU1VGQlNTeEZRVUZETEUxQlFVMHNiVUpCUVcxQ0xFTkJRVUU3UVVGRGFFUXNUMEZCVHl4SFFVRkhMRTFCUVUwc1owSkJRV2RDTEVOQlFVRTdRVUZKYUVNN096czdPenRIUVUxSE8wRkJRMGdzVFVGQlRTeFBRVUZuUWl4VFFVVnNRaXhUUVVGUkxFbEJRVWs3U1VGM1FsbzdPenM3VDBGSlJ6dEpRVU5JTEZsQlFXOUNMRTFCUVc5Q0xFVkJRVmtzUzBGQllUdFJRVU0zUkN4TFFVRkxMRVZCUVVVc1EwRkJRVHRSUVVSNVF5eFZRVUZMTEVkQlFVd3NTMEZCU3l4RFFVRlJPMUZCTTBKcVJUczdPMWRCUjBjN1VVRkRTeXhYUVVGTkxFZEJRVlVzUlVGQlZ5eERRVUZCTzFGQlJXNURPenM3VjBGSFJ6dFJRVU5MTEhkQ1FVRnRRaXhIUVVGSExFdEJRVXNzUTBGQlFUdFJRVTl1UXpzN1YwRkZSenRSUVVOTExHTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVRTdVVUZoZWtJN096czdPMWRCUzBjN1VVRkRTU3cwUWtGQmRVSXNSMEZCUnl4RFFVTTNRaXhUUVVGblFpeEZRVU5vUWl4VFFVRm5RaXhGUVVOR0xFVkJRVVVzUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRVHRSUVhkRk0wTTdPenM3VjBGSlJ6dFJRVU5oTEdkQ1FVRlhMRWRCUVVjc1IwRkJhVUlzUlVGQlJUczdXVUZETjBNc1NVRkJTVHRuUWtGRFFTeE5RVUZCTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzSzBOQlFYWkNMRWxCUVVrc1JVRkJkVUk3WjBKQlJUTkNMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUzBGQlN5eFRRVUZUTEVWQlFVVTdiMEpCUXpWQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVRTdhVUpCUTJoRU8yZENRVVZFTEVsQlFVa3NRMEZCUXl4MVFrRkJkVUlzUTBGRGVFSXNhMEpCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlZTeHZRa0ZEY0VJc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGRGFrSXNRMEZCUVR0blFrRkZSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhEUVVGQk8yRkJRMjVETzFsQlFVTXNUMEZCVHl4SFFVRlpMRVZCUVVVc01FSkJRVEJDTEVOQlFVTTdaMEpCUXpsRExFOUJRVThzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRVHRoUVVOb1F6dFJRVU5NTEVOQlFVTXNRMEZCUVR0UlFVVkVPenM3TzFkQlNVYzdVVUZEWVN4aFFVRlJMRWRCUVVjc1EwRkJReXhIUVVGdFFpeEZRVUZuUWl4RlFVRkZPenRaUVVNM1JDeEpRVUZKTzJkQ1FVTkJMRTFCUVVFc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl3clEwRkJlRUlzU1VGQlNTeEZRVUYzUWp0blFrRkZOVUlzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4TFFVRkxMRk5CUVZNc1JVRkJSVHR2UWtGRE5VSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh6UWtGQmMwSXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRVHRwUWtGRGFFUTdaMEpCUlVRc1NVRkJTU3hEUVVGRExIVkNRVUYxUWl4RFFVTjRRaXhyUWtGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRlZMRzlDUVVOd1FpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVTnFRaXhEUVVGQk8yZENRVVZFTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUVR0blFrRkZMMElzVFVGQlRTeGxRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeEZRVUZGTzI5Q1FVTm9SQ3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0dlFrRkRjRUlzUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUVR0blFrRkZaaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkJPMkZCUTJoRE8xbEJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVXNNRUpCUVRCQ0xFTkJRVU03WjBKQlEzSkRMRTlCUVU4c1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUVR0aFFVTm9RenRSUVVOTUxFTkJRVU1zUTBGQlFUdFJRVVZFTEdkRlFVRm5SVHRSUVVOb1JUczdPenRYUVVsSE8xRkJRMkVzYlVKQlFXTXNSMEZCUnl4RFFVTTNRaXhOUVVGdlFpeEZRVU5TTEVWQlFVVTdPMWxCUTJRc1NVRkJTVHRuUWtGRFFTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRXRCUVVzc1UwRkJVeXhGUVVGRk8yOUNRVU0xUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGQk8ybENRVU5vUkR0blFrRkZSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUVR0blFrRkZjRUlzVFVGQlRTeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGQk8yZENRVVV2UWl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVkQlFVY3NTVUZCU1N4RFFVRkJPMmRDUVVVdlFpeE5RVUZCTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzSzBOQlFYWkNMRWxCUVVrc1JVRkJkVUk3WjBKQlJUTkNMRWxCUVVrc1UwRkJVeXhMUVVGTExFbEJRVWtzUlVGQlJUdHZRa0ZEY0VJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHpRa0ZCYzBJc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlFUdHBRa0ZEYUVRN1owSkJSVVFzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUVR0blFrRkZja01zU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVFN1owSkJRM0pDTEUxQlFVRXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpd3JRMEZCZEVJc1NVRkJTU3hGUVVGelFqdG5Ra0ZGTVVJc1NVRkJTU3hUUVVGVExGbEJRVmtzUzBGQlN5eEZRVUZGTzI5Q1FVTTFRaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNjMEpCUVhOQ0xFVkJRVVVzUTBGQlF6dHZRa0ZGYkVRc1UwRkJkVUlzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGQk8yOUNRVVYwUkN4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkJPMmxDUVVNMVF6dG5Ra0ZGUkN4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkJPMkZCUXpkRE8xbEJRVU1zVDBGQlR5eEhRVUZaTEVWQlFVVXNNRUpCUVRCQ0xFTkJRVU03WjBKQlF6bERMRTlCUVU4c1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUVR0aFFVTm9RenRSUVVOTUxFTkJRVU1zUTBGQlFUdFJRVVZFT3pzN1YwRkhSenRSUVVOaExGVkJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkJPMUZCUlRORE96czdWMEZIUnp0UlFVTmhMSEZDUVVGblFpeEhRVUZITEVkQlFWTXNSVUZCUlRzN1dVRkRNVU1zU1VGQlNUdG5Ra0ZEUVN4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFdEJRVXNzVTBGQlV5eEZRVUZGTzI5Q1FVTTFRaXhQUVVGUExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXh4UWtGQmNVSXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRVHRwUWtGRE5VUTdaMEpCUlVRc1RVRkJRU3hKUVVGSkxFTkJRVU1zYjBKQlFXOUNMQ3REUVVGNlFpeEpRVUZKTEVWQlFYbENPMmRDUVVVM1FpeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkJPMmRDUVVWMlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVFN1owSkJRM1JDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGQk8yRkJRM3BDTzFsQlFVTXNUMEZCVHl4SFFVRlpMRVZCUVVVc01FSkJRVEJDTEVOQlFVTTdaMEpCUXpsRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1lVRkRla0k3VVVGRlRDeERRVUZETEVOQlFVRTdVVUZGUkRzN08xZEJSMGM3VVVGRFlTeFpRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZCTzFGQlF5OURMQ3RFUVVFclJEdFJRVVV2UkRzN08xZEJSMGM3VVVGRFN5eHZRa0ZCWlN4SFFVRkhMRWRCUVZNc1JVRkJSVHRaUVVOcVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRXRCUVVzc1UwRkJVeXhGUVVGRk8yZENRVU0xUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGQk8yRkJRMmhFTzFsQlJVUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJUdG5Ra0ZETlVJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlR0dlFrRkRlRUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUVR0cFFrRkRia1E3WVVGRFNqdFJRVU5NTEVOQlFVTXNRMEZCUVR0UlFVVkVPenM3VjBGSFJ6dFJRVU5MTEdkQ1FVRlhMRWRCUVVjc1IwRkJaU3hGUVVGRk8xbEJRMjVETEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJRVHRaUVVWMFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRVHRSUVVONFFpeERRVUZETEVOQlFVRTdVVUZIUkRzN096dFhRVWxITzFGQlEwc3NXVUZCVHl4SFFVRkhMRU5CUVVNc1pVRkJORUlzUlVGQlVTeEZRVUZGT3p0WlFVTnlSQ3hKUVVGSkxHVkJRV1VzV1VGQldTeExRVUZMTEVWQlFVVTdaMEpCUTJ4RExFdEJRVXNzVFVGQlRTeFBRVUZQTEVsQlFVa3NaVUZCWlN4RlFVRkZPMjlDUVVOdVF5eE5RVUZCTEVsQlFVa3NRMEZCUXl4UFFVRlBMREJEUVVGRkxGZEJRVmNzUTBGQlF5eFBRVUZQTEVWQlFVTTdhVUpCUTNKRE8yRkJRMG83YVVKQlFVMHNTVUZCU1N4bFFVRmxMRVZCUVVVN1owSkJRM2hDTEUxQlFVRXNTVUZCU1N4RFFVRkRMRTlCUVU4c01FTkJRVVVzVjBGQlZ5eERRVUZETEdWQlFXVXNSVUZCUXp0aFFVTTNRenRaUVVWRUxFbEJRVWtzWlVGQlpTeEZRVUZGTzJkQ1FVTnFRaXhOUVVGQkxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc0swTkJRWFpDTEVsQlFVa3NSVUZCZFVJN1lVRkRPVUk3VVVGRFRDeERRVUZETEVOQlFVRTdVVUZGVHl4cFFrRkJXU3hIUVVGSExFTkJRVU1zUjBGQldTeEZRVUZUTEVWQlFVVTdXVUZETTBNc1NVRkJTU3hIUVVGSExGbEJRVmtzUzBGQlN5eEZRVUZGTzJkQ1FVTjBRaXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVUU3WjBKQlJUTkNMRTlCUVU4c1IwRkJXU3hEUVVGQk8yRkJRM1JDTzFsQlJVUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVFN1dVRkZjRU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZCTzFsQlJUZENMRTlCUVU4c1MwRkJTeXhEUVVGQk8xRkJRMmhDTEVOQlFVTXNRMEZCUVR0UlFYQlNSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUVR0SlFVTjZRaXhEUVVGRE8wbEJZVVE3T3p0UFFVZEhPMGxCUTBnc1NVRkJWeXhSUVVGUk8xRkJRMllzVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkJPMGxCUTNKQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTQ3hKUVVGakxFdEJRVXM3VVVGRFppeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVFN1NVRkRkRUlzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNDeEpRVUZqTEV0QlFVc3NRMEZCUlN4SFFVRlZPMUZCUXpOQ0xFbEJRVWtzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhGUVVGRk8xbEJRekZDTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGRGJFSXNTVUZCU1N4TFFVRkxMRU5CUVVNc2MwSkJRWE5DTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUXpGRExFTkJRVUU3V1VGRFJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGQk8xTkJRM0pDTzJGQlFVMDdXVUZEU0N4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlFUdFpRVU5xUWl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVkQlFVY3NTVUZCU1N4RFFVRkJPMU5CUTJ4RE8wbEJRMHdzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSUxFbEJRVmNzVVVGQlVUdFJRVU5tTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRVHRKUVVOeVFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5JTEVsQlFWY3NUVUZCVFN4RFFVRkZMRTlCUVdkRE8xRkJReTlETEVsQlFVa3NUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhwUWtGQmFVSXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRNVU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEhOQ1FVRnpRaXhIUVVGSExHRkJRV0VzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlFUdFRRVU16Unp0UlFVVkVMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZCTzBsQlF6RkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU0N4SlFVRlhMRTFCUVUwN1VVRkRZaXhQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVRTdTVUZEZGtJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTklMRWxCUVZjc1VVRkJVVHRSUVVObUxFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUVR0SlFVTjZRaXhEUVVGRE8wTkJiMDFLTzBGQlJVUXNaVUZCWlN4VFFVRlRMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGZvciBET00gbWFuaXB1bGF0aW9uXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vanN4LnRzXCIgLz5cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiwgfSBmcm9tIFwiLi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHNcIjtcbmV4cG9ydCBjb25zdCBmcmFnbWVudCA9IChfLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGJpbmRDaGlsZHJlbihmcmFnbWVudCwgY2hpbGRyZW4pO1xuICAgIHJldHVybiBmcmFnbWVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBmcmFnbWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpuSmhaMjFsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZabkpoWjIxbGJuUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3TzBkQlVVYzdRVUZEU0N3eVFrRkJNa0k3UVVGRE0wSXNhVU5CUVdsRE8wRkJSV3BETEU5QlFVOHNSVUZGU0N4WlFVRlpMRWRCUTJZc1RVRkJUU3dyUWtGQkswSXNRMEZCUVR0QlFVVjBReXhOUVVGTkxFTkJRVU1zVFVGQlRTeFJRVUZSTEVkQlFVY3NRMEZEY0VJc1EwRkJWU3hGUVVOV0xFZEJRVWNzVVVGQk1rSXNSVUZEWkN4RlFVRkZPMGxCUTJ4Q0xFMUJRVTBzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4elFrRkJjMElzUlVGQlJTeERRVUZCTzBsQlJXeEVMRmxCUVZrc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVRTdTVUZGYUVNc1QwRkJUeXhSUVVGUkxFTkJRVUU3UVVGRGJrSXNRMEZCUXl4RFFVRkJPMEZCUlVRc1pVRkJaU3hSUVVGUkxFTkJRVUVpZlE9PSJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudCIsIl9jcmVhdGVFbGVtZW50TlMiLCJfY3JlYXRlUmVmIiwiQmFzZUNvbXBvbmVudCIsIkJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
