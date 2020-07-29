/* Destagnate v1.5.1 | Copyright (C) 2020 Luke Zhang https://luke-zhang-04.github.io | MIT License */

"use strict";


function _typeof (obj) {
    "@babel/helpers - typeof"

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof (obj) {
            return typeof obj 
        } 
    } else {
        _typeof = function _typeof (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj 
        } 
    } 

    return _typeof(obj) 
}

var DeStagnate = (function (modules) {
    var installedModules = {}

    function __webpack_require__ (moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports
        }

        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        }

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
        module.l = true
        
        return module.exports
    }

    __webpack_require__.m = modules
    __webpack_require__.c = installedModules

    __webpack_require__.d = function (exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            })
        }
    }

    __webpack_require__.r = function (exports) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            })
        }

        Object.defineProperty(exports, "__esModule", {
            value: true
        })
    }

    __webpack_require__.t = function (value, mode) {
        if (mode & 1) {
            value = __webpack_require__(value) 
        }
        if (mode & 8) {
            return value 
        }
        if (mode & 4 && _typeof(value) === "object" && value && value.__esModule) {
            return value 
        }
        var ns = Object.create(null)

        __webpack_require__.r(ns)

        Object.defineProperty(ns, "default", {
            enumerable: true,
            value
        })
        if (mode & 2 && typeof value !== "string") {
            for (var key in value) {
                __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key))
            } 
        }
        
        return ns
    }

    __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ? function getDefault () {
            return module.default
        } : function getModuleExports () {
            return module
        }

        __webpack_require__.d(getter, "a", getter)

        return getter
    }

    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    }

    __webpack_require__.p = ""
    
    return __webpack_require__(__webpack_require__.s = 0)
}([
    function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.5.1
         * @exports DeStagnate main destagnate class
         * @file main file for destagnate
         */
        var __extends = this && this.__extends || (function () {
                var _extendStatics = function extendStatics (d, b) {
                    _extendStatics = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (d, b) {
                        d.__proto__ = b
                    } || function (d, b) {
                        for (var p in b) {
                            if (b.hasOwnProperty(p)) {
                                d[p] = b[p] 
                            }
                        }
                    }

                    return _extendStatics(d, b)
                }

                return function (d, b) {
                    _extendStatics(d, b)

                    function __ () {
                        this.constructor = d
                    }

                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __())
                }
            }()),

            __values = this && this.__values || function (o) {
                var s = typeof Symbol === "function" && Symbol.iterator,
                    m = s && o[s],
                    i = 0

                if (m) {
                    return m.call(o) 
                }
                if (o && typeof o.length === "number") {
                    return {
                        next: function next () {
                            if (o && i >= o.length) {
                                o = void 0 
                            }
                            
                            return {
                                value: o && o[i++],
                                done: !o
                            }
                        }
                    } 
                }
                throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },

            __importDefault = this && this.__importDefault || function (mod) {
                return mod && mod.__esModule ? mod : {
                    default: mod
                }
            }

        Object.defineProperty(exports, "__esModule", {
            value: true
        })
        exports.createRef = exports.createElementNS = exports.createElement = exports.createDSComponent = void 0

        var _preset_1 = __importDefault(__webpack_require__(1)),

            createDSComponent_1 = __importDefault(__webpack_require__(3)),

            createElement_1 = __importDefault(__webpack_require__(4)),

            createElementNS_1 = __importDefault(__webpack_require__(5)),

            createRef_1 = __importDefault(__webpack_require__(6)),

            /**
             * DeStagnate
             * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
             * @class
             * @namespace
             * @abstract
             */
            DeStagnate =

  /** @class */
  (function (_super) {
      __extends(DeStagnate, _super)

      /**
       * Construct class component
       * @public
       * @constructor
       * @param {HTMLElement} parent - parent of this element
       * @param {undefined | Object.<string, string | number>} props - element properties; works like React Props
       */
      function DeStagnate (parent, props) {
          var _this = _super.call(this) || this

          _this.props = props

          /**
           * Creates nested DeStagnate component
           * @public
           * @instance
           * @readonly
           * @param {DeStagnateConstructor} Component - DeStagnate component
           * @param {Object<string, unknown>} props - props of component
           * @returns {HTMLDivElement} parent of component
           */
          _this.createDSComponent = DeStagnate.createDSComponent

          /**
           * Creates a child element to DynamComponent
           * @public
           * @instance
           * @readonly
           * @param {string} tagName - name of HTML element
           * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
           * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
           * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
           * @returns {HTMLElement} html element
           */
          _this.createElement = DeStagnate.createElement

          /**
           * Creates a child element to deStagnate
           * @public
           * @instance
           * @readonly
           * @param {string | null} namespaceURI - namespace uri
           * @param {string} tagName - name of HTML element
           * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
           * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
           * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
           * @returns {HTMLElement} html element
           */
          _this.createElementNS = DeStagnate.createElementNS

          /**
           * Creates a reference for a nested component
           * @public
           * @instance
           * @readonly
           * @returns {Object<string, null>} empty ref object
           */
          _this.createRef = DeStagnate.createRef

          /**
           * State of component. Works similar React State
           * @type {undefined | Object.<string, unknown>}
           * @private
           * @instance
           */
          _this._state = {}

          /**
           * If initial state was set in initializer
           * Do not throw error with direct state setting
           * @type {boolean}
           * @private
           */
          _this._didSetInitialState = false

          /**
           * What to call before component update (state mutation)
           * @public
           * @instance
           * @param {Props} prevProps - previous props
           * @param {State} prevState - previous state
           * @returns {void} void
           */
          _this.getSnapshotBeforeUpdate = function (prevProps, prevState) {
              return [prevProps, prevState]
          }

          /**
           * Sets state
           * @public
           * @instance
           * @readonly
           * @param {Partial<State>} obj - state to set
           * @returns {void | Error} void
           */
          _this.setState = function (obj) {
              var e_1, _a, e_2, _b

              try {
                  _this.componentWillUpdate()

                  try {
                      for (var _c = __values(Object.keys(obj)), _d = _c.next(); !_d.done; _d = _c.next()) {
                          var key = _d.value

                          if (!Object.keys(_this.state).includes(key)) {
                              console.warn(`WARN: New key (${key}) should not be set with setState, which has keys ${JSON.stringify(Object.keys(_this.state))}. Declare all state variables in constructor as a best practice.`)
                          }
                      }
                  } catch (e_1_1) {
                      e_1 = {
                          error: e_1_1
                      }
                  } finally {
                      try {
                          if (_d && !_d.done && (_a = _c.return)) {
                              _a.call(_c) 
                          }
                      } finally {
                          if (e_1) {
                              throw e_1.error 
                          }
                      }
                  }

                  _this.getSnapshotBeforeUpdate(_this.props, _this.state)

                  Object.assign(_this._state, obj)

                  var renderedContent = _this._execRender()

                  if (_typeof(renderedContent) === "object" && renderedContent instanceof Array) {
                      try {
                          for (var renderedContent_1 = __values(renderedContent), renderedContent_1_1 = renderedContent_1.next(); !renderedContent_1_1.done; renderedContent_1_1 = renderedContent_1.next()) {
                              var element = renderedContent_1_1.value

                              _this._parent.appendChild(element)
                          }
                      } catch (e_2_1) {
                          e_2 = {
                              error: e_2_1
                          }
                      } finally {
                          try {
                              if (renderedContent_1_1 && !renderedContent_1_1.done && (_b = renderedContent_1.return)) {
                                  _b.call(renderedContent_1) 
                              }
                          } finally {
                              if (e_2) {
                                  throw e_2.error 
                              }
                          }
                      }
                  } else if (renderedContent) {
                      _this._parent.appendChild(renderedContent)
                  }

                  _this.componentDidUpdate()
              } catch (err) {
                  _this.componentDidCatch(err)

                  return err
              }
          }

          /**
           * Initial mounting to be manually called
           * @public
           * @instance
           * @readonly
           * @returns {HTMLElement | Array.<HTMLElement> | error} - result of append child to parent element
           */
          _this.mountComponent = function () {
              try {
                  var component = _this.render()

                  _this._didSetInitialState = true

                  _this.componentWillMount()

                  if (component === null) {
                      var msg = "Expected render method to be included in component class, no render method found, or render returned an empty array"

                      throw new Error(msg)
                  }

                  _this.bindEventListeners(_this._parent)

                  _this.componentDidMount()

                  if (_typeof(component) === "object" && component instanceof Array) {
                      return component.map((element) => _this._parent.appendChild(element))
                  }

                  return _this._parent.appendChild(component)
              } catch (err) {
                  _this.componentDidCatch(err)

                  return err
              }
          }

          /**
           * Initial mounting to be manually called
           * @public
           * @instance
           * @readonly
           * @returns {HTMLElement} - result of append child to parent element
           */
          _this.mount = _this.mountComponent

          /**
           * Unmounting to be manually called
           * @public
           * @instance
           * @readonly
           * @returns {void} - void
           */
          _this.unmountComponent = function () {
              try {
                  _this.componentWillUnmount()

                  _this.unbindEventListeners(_this._parent)

                  _this._removeChildren()
              } catch (err) {
                  _this.componentDidCatch(err)
              }
          }

          /**
           * Unmounting to be manually called
           * @public
           * @instance
           * @readonly
           * @returns {void} - void
           */
          _this.unmount = _this.unmountComponent

          /**
           * Removes children from this._parent
           * @private
           * @instance
           * @return {void} void
           */
          _this._removeChildren = function () {
              while (_this._parent.firstChild) {
                  if (_this._parent.lastChild) {
                      _this._parent.removeChild(_this._parent.lastChild)
                  } else {
                      break
                  }
              }
          }

          /**
           * Executes new render
           * @returns {HTMLElement | Array.<HTMLElement> | null} rendered content
           */
          _this._execRender = function () {
              _this._removeChildren()

              return _this.render()
          }

          if (["body", "html"].includes(parent.tagName.toLowerCase())) {
              console.warn(`WARNING! Avoid using ${parent.tagName.toLowerCase()} as element parent, as all elements within ${parent.tagName.toLowerCase()} will be removed on re-render`)
          }

          _this._parent = parent
          
          return _this
      }

      Object.defineProperty(DeStagnate.prototype, "getState", {

          /**
           * Public getState getter as this.state itself is protected
           * @public
           * @instance
           * @returns {State} component state
           */
          get: function get () {
              return this.state
          },
          enumerable: false,
          configurable: true
      })
      Object.defineProperty(DeStagnate.prototype, "state", {

          /**
           * Get component state
           * @protected
           * @instance
           * @returns {State} component state
           */
          get: function get () {
              return this._state
          },

          /**
           * Sets component state
           * WARN: do not use this method to mutate the state directly
           * @protected
           * @instance
           * @param {State} obj - state to set
           */
          set: function set (obj) {
              if (this._didSetInitialState) {
                  this.componentDidCatch(new Error("Do not mutate state directly. Use setState instead."))
                  console.warn("DeStagnate protects you from mutating the entire state object. Avoid mutating state directly")
                  this.setState(obj)
              } else {
                  this._state = obj
                  this._didSetInitialState = true
              }
          },
          enumerable: false,
          configurable: true
      })
      Object.defineProperty(DeStagnate.prototype, "getProps", {

          /**
           * Public getProps getter as this.props itself is protected
           * @public
           * @instance
           * @returns {Props | undefined} component state
           */
          get: function get () {
              return this.props
          },
          enumerable: false,
          configurable: true
      })

      /**
       * Creates nested DeStagnate component
       * @public
       * @static
       * @readonly
       * @param {DeStagnateConstructor} Component - DeStagnate component
       * @param {Object<string, unknown>} props - props of component
       * @returns {HTMLDivElement} parent of component
       */
      DeStagnate.createDSComponent = createDSComponent_1.default

      /**
       * Creates a child element to DynamComponent
       * @public
       * @static
       * @readonly
       * @param {string} tagName - name of HTML element
       * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
       * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
       * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
       * @returns {HTMLElement} html element
       */
      DeStagnate.createElement = createElement_1.default

      /**
       * Creates a child element to deStagnate
       * @public
       * @static
       * @readonly
       * @param {string | null} namespaceURI - namespace uri
       * @param {string} tagName - name of HTML element
       * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
       * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
       * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
       * @returns {HTMLElement} html element
       */
      DeStagnate.createElementNS = createElementNS_1.default

      /**
       * Creates a reference for a nested component
       * @public
       * @static
       * @readonly
       * @returns {Object<string, null>} empty ref object
       */
      DeStagnate.createRef = createRef_1.default
      
      return DeStagnate
  }(_preset_1.default))

        exports.default = DeStagnate

        /**
         * Creates nested DeStagnate component
         * @param {DeStagnateConstructor} Component - DeStagnate component
         * @param {Object<string, unknown>} props - props of component
         * @returns {HTMLDivElement} parent of component
         */
        exports.createDSComponent = createDSComponent_1.default

        /**
         * Creates a child element to deStagnate
         * @param {string} tagName - name of HTML element
         * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
         * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
         * @returns {HTMLElement} html element
         */
        exports.createElement = createElement_1.default

        /**
         * Creates a child element to DynamComponent
         * @param {string} tagName - name of HTML element
         * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
         * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
         * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
         * @returns {HTMLElement} html element
         */
        exports.createElementNS = createElementNS_1.default

        /**
         * Creates a reference for a nested component
         * @returns {Object<string, undefined>} empty ref object
         */
        exports.createRef = createRef_1.default
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.5.1
         * @exports Preset
         * @package
         */
        var __extends = this && this.__extends || (function () {
                var _extendStatics2 = function extendStatics (d, b) {
                    _extendStatics2 = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function (d, b) {
                        d.__proto__ = b
                    } || function (d, b) {
                        for (var p in b) {
                            if (b.hasOwnProperty(p)) {
                                d[p] = b[p] 
                            }
                        }
                    }

                    return _extendStatics2(d, b)
                }

                return function (d, b) {
                    _extendStatics2(d, b)

                    function __ () {
                        this.constructor = d
                    }

                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __())
                }
            }()),

            __importDefault = this && this.__importDefault || function (mod) {
                return mod && mod.__esModule ? mod : {
                    default: mod
                }
            }

        Object.defineProperty(exports, "__esModule", {
            value: true
        })

        var _events_1 = __importDefault(__webpack_require__(2)),

            Preset =

  /** @class */
  (function (_super) {
      __extends(Preset, _super)

      function Preset () {
          var _this = _super !== null && _super.apply(this, arguments) || this

          /**
           * Called when component catches error. Default behaviour is console.error
           * @param {Error} error - error object with info
           * @returns {void} void
           */
          _this.componentDidCatch = function (error) {
              return console.error(error)
          }

          /**
           * What to call after component mounting
           * @public
           * @instance
           * @returns {void} void
           */
          _this.componentDidMount = function () {
              return undefined
          }

          /**
           * What to call after component update (state mutation)
           * @public
           * @instance
           * @returns {void} void
           */
          _this.componentDidUpdate = function () {
              return undefined
          }

          /**
           * What to call before component mounting
           * @public
           * @instance
           * @returns {void} void
           */
          _this.componentWillMount = function () {
              return undefined
          }

          /**
           * What to call before component unmounting
           * @public
           * @instance
           * @returns {void} void
           */
          _this.componentWillUnmount = function () {
              return undefined
          }

          /**
           * What to call before component update (state mutation)
           * @public
           * @instance
           * @returns {void} void
           */
          _this.componentWillUpdate = function () {
              return undefined
          }

          /**
           * Rendering HTML, must be part of extended class
           * @public
           * @instance
           * @abstract
           * @returns {null | HTMLElement | Array.<HTMLElement> | Element | Array.<Element>} if returns null error will be thrown
           */
          _this.render = function () {
              return null
          }

          return _this
      }

      return Preset
  }(_events_1.default))

        exports.default = Preset
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.5.0
         * @exports Events
         * @package
         */
        var __values = this && this.__values || function (o) {
                var s = typeof Symbol === "function" && Symbol.iterator,
                    m = s && o[s],
                    i = 0

                if (m) {
                    return m.call(o) 
                }
                if (o && typeof o.length === "number") {
                    return {
                        next: function next () {
                            if (o && i >= o.length) {
                                o = void 0 
                            }
                            
                            return {
                                value: o && o[i++],
                                done: !o
                            }
                        }
                    } 
                }
                throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },

            __read = this && this.__read || function (o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator]

                if (!m) {
                    return o 
                }
                var i = m.call(o),
                    r,
                    ar = [],
                    e

                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
                        ar.push(r.value)
                    }
                } catch (error) {
                    e = {
                        error
                    }
                } finally {
                    try {
                        if (r && !r.done && (m = i.return)) {
                            m.call(i) 
                        }
                    } finally {
                        if (e) {
                            throw e.error 
                        }
                    }
                }

                return ar
            }

        Object.defineProperty(exports, "__esModule", {
            value: true
        })

        var Events =

  /** @class */
  (function () {
      function Events () {
          var _this = this

          /**
           * Binds event listeners event
           * Do not call manually
           * @protected
           * @instance
           * @pacakge
           * @param {HTMLElement} element - element to bind listeners to
           * @returns {void} void;
           */
          this.bindEventListeners = function (element) {
              _this._eventListener(element.addEventListener)
          }

          /**
           * Binds event listeners event
           * Do not call manually
           * @protected
           * @instance
           * @pacakge
           * @param {HTMLElement} element - element to bind listeners to
           * @returns {void} void;
           */
          this.unbindEventListeners = function (element) {
              _this._eventListener(element.removeEventListener)
          }

          /**
           * Focus event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onFocus = function () {
              return undefined
          }

          /**
           * Blur event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onBlur = function () {
              return undefined
          }

          /**
           * Focus in event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onFocusIn = function () {
              return undefined
          }

          /**
           * Focus out event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onFocusOut = function () {
              return undefined
          }

          /**
           * Animation start event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onAnimationStart = function () {
              return undefined
          }

          /**
           * Animation cancel event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onAnimationCancel = function () {
              return undefined
          }

          /**
           * Animation end event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onAnimationEnd = function () {
              return undefined
          }

          /**
           * Animation iteration event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onAnimationIteration = function () {
              return undefined
          }

          /**
           * Transition start event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onTransitionStart = function () {
              return undefined
          }

          /**
           * Transition cancel event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onTransitionCancel = function () {
              return undefined
          }

          /**
           * Transition end event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onTransitionEnd = function () {
              return undefined
          }

          /**
           * Transition run event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onTransitionRun = function () {
              return undefined
          }

          /**
           * Auxillary click event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onAuxClick = function () {
              return undefined
          }

          /**
           * Click event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onClick = function () {
              return undefined
          }

          /**
           * Double click event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onDblClick = function () {
              return undefined
          }

          /**
           * Mousedown event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onMouseDown = function () {
              return undefined
          }

          /**
           * Mouse enter event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onMouseEnter = function () {
              return undefined
          }

          /**
           * Mouse leave event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onMouseLeave = function () {
              return undefined
          }

          /**
           * Mouse move event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onMouseMove = function () {
              return undefined
          }

          /**
           * Mouseover event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onMouseOver = function () {
              return undefined
          }

          /**
           * Mouseout event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onMouseOut = function () {
              return undefined
          }

          /**
           * Mouseup event
           * @protected
           * @instance
           * @returns {void}
           */
          this.onMouseUp = function () {
              return undefined
          }

          this._eventListener = function (el) {
              var e_1, _a

              try {
                  for (var _b = __values(Object.entries(_this._events())), _c = _b.next(); !_c.done; _c = _b.next()) {
                      var _d = __read(_c.value, 2),
                          event_1 = _d[0],
                          callback = _d[1]

                      el(event_1, callback)
                  }
              } catch (e_1_1) {
                  e_1 = {
                      error: e_1_1
                  }
              } finally {
                  try {
                      if (_c && !_c.done && (_a = _b.return)) {
                          _a.call(_b) 
                      }
                  } finally {
                      if (e_1) {
                          throw e_1.error 
                      }
                  }
              }
          }

          this._events = function () {
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
              }
          }
      }

      return Events
  }())

        exports.default = Events
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.5.1
         * @exports createDSComponent add nested component for DeStagnate components
         */
        Object.defineProperty(exports, "__esModule", {
            value: true
        })

        /**
         * Creates nested DeStagnate component
         * @param {DeStagnateConstructor} Component - DeStagnate component
         * @param {Object<string, unknown>} props - props of component
         * @param {Object<string, undefined | DeStagnate>} ref - ref object
         * @returns {HTMLDivElement} parent of component
         */
        var createDSComponent = function createDSComponent (Component, props, ref) {
            var element = document.createElement("div")

            element.classList.add("DeStagnate-component-parent")

            var _component = new Component(element, props)

            _component.mount()

            if (ref) {
                ref.current = _component
            }

            return element
        }

        exports.default = createDSComponent
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.5.1
         * @exports createElement function for DOM manipulation
         */
        var __values = this && this.__values || function (o) {
                var s = typeof Symbol === "function" && Symbol.iterator,
                    m = s && o[s],
                    i = 0

                if (m) {
                    return m.call(o) 
                }
                if (o && typeof o.length === "number") {
                    return {
                        next: function next () {
                            if (o && i >= o.length) {
                                o = void 0 
                            }
                            
                            return {
                                value: o && o[i++],
                                done: !o
                            }
                        }
                    } 
                }
                throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },

            __read = this && this.__read || function (o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator]

                if (!m) {
                    return o 
                }
                var i = m.call(o),
                    r,
                    ar = [],
                    e

                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
                        ar.push(r.value)
                    }
                } catch (error) {
                    e = {
                        error
                    }
                } finally {
                    try {
                        if (r && !r.done && (m = i.return)) {
                            m.call(i) 
                        }
                    } finally {
                        if (e) {
                            throw e.error 
                        }
                    }
                }

                return ar
            },

            __spread = this && this.__spread || function () {
                for (var ar = [], i = 0; i < arguments.length; i++) {
                    ar = ar.concat(__read(arguments[i]))
                }

                return ar
            }

        Object.defineProperty(exports, "__esModule", {
            value: true
        })
        exports._bindChildren = exports._unpackChildren = exports._bindProps = void 0

        /**
         * Binds children to element
         * @package
         * @param {Element} element - element to bind
         * @param {undefined | Object.<string, string | number>} props - props to bind with
         * @param {boolean} ns - if namespace element
         * @returns {void} void
         */
        exports._bindProps = function (element, props, ns) {
            var e_1, _a

            if (ns === void 0) {
                ns = false
            }

            if (props) {
                try {
                    for (var _b = __values(Object.entries(props)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = __read(_c.value, 2),
                            key = _d[0],
                            val = _d[1]

                        if (typeof val === "string" || typeof val === "number") {
                            if (key === "innerHTML") {
                                element.innerHTML = val.toString()
                            } else if (ns) {
                                element.setAttributeNS(null, key, val.toString())
                            } else {
                                element.setAttribute(key, val.toString())
                            }
                        } else if (key.slice(0, 2) === "on") {
                            if (typeof val === "function") {
                                element.addEventListener(key.slice(2).toLowerCase(), val)
                            }
                        } else if (key === "ref" && _typeof(val) === "object" && "current" in val) {
                            val.current = element
                        } else {
                            console.warn(`WARN: Invalid prop type "${_typeof(val)}" for key "${key}". Skipping prop.`)
                        }
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    }
                } finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) {
                            _a.call(_b) 
                        }
                    } finally {
                        if (e_1) {
                            throw e_1.error 
                        }
                    }
                }
            }
        }

        exports._unpackChildren = function (children) {
            var e_2, _a,

                newChildren = []

            try {
                for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                    var child = children_1_1.value

                    if (_typeof(child) === "object" && child instanceof Array) {
                        newChildren.push.apply(newChildren, __spread(exports._unpackChildren(child)))
                    } else {
                        newChildren.push(child)
                    }
                }
            } catch (e_2_1) {
                e_2 = {
                    error: e_2_1
                }
            } finally {
                try {
                    if (children_1_1 && !children_1_1.done && (_a = children_1.return)) {
                        _a.call(children_1) 
                    }
                } finally {
                    if (e_2) {
                        throw e_2.error 
                    }
                }
            }

            return newChildren
        }

        /**
         * Binds children to element
         * @package
         * @param {Element} element - element to bind
         * @param {undefined | ChildrenType} children - children to bind with
         * @returns {void} void
         */
        exports._bindChildren = function (element, children) {
            var e_3, _a

            if (children || children === 0) {
                if (children instanceof Array) {
                    try {
                        for (var children_2 = __values(children), children_2_1 = children_2.next(); !children_2_1.done; children_2_1 = children_2.next()) {
                            var child = children_2_1.value

                            if (typeof child === "string" || typeof child === "number") {
                                element.innerText = child.toString()
                            } else if (_typeof(child) === "object" && child instanceof Array) {
                                exports._unpackChildren(child).forEach((_child) => exports._bindChildren(element, _child))
                            } else {
                                element.appendChild(child)
                            }
                        }
                    } catch (e_3_1) {
                        e_3 = {
                            error: e_3_1
                        }
                    } finally {
                        try {
                            if (children_2_1 && !children_2_1.done && (_a = children_2.return)) {
                                _a.call(children_2) 
                            }
                        } finally {
                            if (e_3) {
                                throw e_3.error 
                            }
                        }
                    }
                } else if (typeof children === "string" || typeof children === "number") {
                    element.innerText = children.toString()
                } else {
                    element.appendChild(children)
                }
            }
        }

        /**
         * Creates a child element to DynamComponent
         * @param {string} tagName - name of HTML element
         * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
         * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
         * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
         * @returns {HTMLElement} html element
         */
        var createElement = function createElement (tagName, props, children) {
            var childrenArgs = []

            for (var _i = 3; _i < arguments.length; _i++) {
                childrenArgs[_i - 3] = arguments[_i]
            }

            var element = document.createElement(tagName)

            exports._bindProps(element, props)

            var _children = children

            if (children && childrenArgs) {
                if (_typeof(children) === "object" && children instanceof Array) {
                    _children = __spread(exports._unpackChildren(children), exports._unpackChildren(childrenArgs))
                } else {
                    _children = __spread([children], exports._unpackChildren(childrenArgs))
                }
            }

            exports._bindChildren(element, _children)

            return element
        }

        exports.default = createElement
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.5.1
         * @exports createElementNS createElement for namespaced elements
         */
        var __read = this && this.__read || function (o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator]

                if (!m) {
                    return o 
                }
                var i = m.call(o),
                    r,
                    ar = [],
                    e

                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
                        ar.push(r.value)
                    }
                } catch (error) {
                    e = {
                        error
                    }
                } finally {
                    try {
                        if (r && !r.done && (m = i.return)) {
                            m.call(i) 
                        }
                    } finally {
                        if (e) {
                            throw e.error 
                        }
                    }
                }

                return ar
            },

            __spread = this && this.__spread || function () {
                for (var ar = [], i = 0; i < arguments.length; i++) {
                    ar = ar.concat(__read(arguments[i]))
                }

                return ar
            }

        Object.defineProperty(exports, "__esModule", {
            value: true
        })
        exports.createElementNS = void 0

        var createElement_1 = __webpack_require__(4)

        /**
         * Creates a child element to deStagnate
         * @param {string | null} namespaceURI - namespace uri
         * @param {string} tagName - name of HTML element
         * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
         * @param {undefined | Element | string | number | Array.<Element> | Array.<string> | Array.<number>} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
         * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
         * @returns {HTMLElement} html element
         */
        exports.createElementNS = function (namespaceURI, tagName, props, children) {
            var childrenArgs = []

            for (var _i = 4; _i < arguments.length; _i++) {
                childrenArgs[_i - 4] = arguments[_i]
            }

            var element = document.createElementNS(namespaceURI, tagName)

            createElement_1._bindProps(element, props, true)

            var _children = children

            if (children && childrenArgs) {
                if (_typeof(children) === "object" && children instanceof Array) {
                    _children = __spread(createElement_1._unpackChildren(children), createElement_1._unpackChildren(childrenArgs))
                } else {
                    _children = __spread([children], createElement_1._unpackChildren(childrenArgs))
                }
            }

            createElement_1._bindChildren(element, _children)

            return element
        }

        exports.default = exports.createElementNS
    }, function (module, exports, __webpack_require__) {
        

        Object.defineProperty(exports, "__esModule", {
            value: true
        })

        /**
         * Creates a reference for a nested component
         * @returns {Object<string, null>} empty ref object
         */
        var createRef = function createRef () {
            return {
                current: null
            }
        }

        /**
         * Creates a reference for a nested component
         * @returns {Object<string, null>} empty ref object
         */
        exports.default = createRef
    }
]))

// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVSZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQW1CTSxXQUFZLG1CQUFaLENBQXlELFFBQXpELEVBQXlEO0FBSS9ELFFBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTs7OztBQUlBLFFBQUEsTUFBZSxHQUFBLGdCQUFTLENBQUEsUUFBQSxDQUFULEdBQVM7aUJBQUE7Y0FBQTs7QUFBQSxLQUF4QiIsImZpbGUiOiJkZVN0YWduYXRlLmJ1bmRsZS5qcyJ9
