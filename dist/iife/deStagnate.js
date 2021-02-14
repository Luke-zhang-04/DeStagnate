/**
 * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 */
var DeStagnate = (function (exports) {
    'use strict';

    const url = "https://luke-zhang-04.github.io/DeStagnate/error-codes";

    /**
     * Binds children to element
     * @package
     * @param element - element to bind
     * @param props - props to bind with
     * @param ns - if namespace element
     * @returns void
     */

    const bindProps = (element, props, ns = false) => {
      if (props) {
        for (const [key, val] of Object.entries(props)) {
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
          } else if (key === "ref" && typeof val === "object" && "current" in val) {
            val.current = element;
          } else if (val !== undefined) {
            console.warn(`${typeof val} is not a valid DeStagnate child`);
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

    const bindChildren = (element, children) => {
      if (children !== null && children !== undefined) {
        if (children instanceof Array) {
          children.forEach(child => bindChildren(element, child));
        } else if (typeof children === "string" || typeof children === "number") {
          element.appendChild(document.createTextNode(children.toString()));
        } else if (children instanceof Component) {
          if (!children.didMount && element instanceof window.HTMLElement) {
            children.mount(element);
            return;
          } else if (!(element instanceof window.HTMLElement)) {
            throw new Error(`ERROR: code 3. See ${url}`);
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

    function createElement(tagNameOrComponent, props, ...children) {
      if (typeof tagNameOrComponent === "string") {
        const element = document.createElement(tagNameOrComponent);
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

    const createElementNS = (namespaceURI, tagName, props, ...children) => {
      const element = document.createElementNS(namespaceURI, tagName);
      bindProps(element, props, true);
      bindChildren(element, children);
      return element;
    };

    /**
     * Creates a reference for a nested component
     * @returns empty ref object
     */
    const createRef = () => ({
      current: null
    });

    class Preset {
      constructor() {
        this.createElement = createElement;
        this.createElementNS = createElementNS;
        this.createRef = createRef;
        /**
         * Called when component catches error. Default behaviour is console.error
         * @param error - error object with info
         * @returns void
         */

        this.componentDidCatch = error => console.error(error);
        /**
         * Called before component is updated
         * @returns whether or not component should update/re-render
         */


        this.shouldComponentUpdate = () => true;
        /**
         * Rendering HTML, must be part of extended class
         * @public
         * @instance
         * @abstract
         * @returns if returns null error will be thrown
         */


        this.render = () => null;
      }

    }
    Preset.createElement = createElement;
    Preset.createElementNS = createElementNS;
    Preset.createRef = createRef;

    const eventNames = ["onFocus", "onBlur", "onFocusIn", "onFocusOut", "onAnimationStart", "onAnimationCancel", "onAnimationEnd", "onAnimationIteration", "onTransitionStart", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onAuxClick", "onClick", "onDblClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOver", "onMouseOut", "onMouseUp", "onWheel"],
          windowEventNames = ["onLoad", "onOnline", "onOffline", "onResize", "onScroll", "onKeyDown", "onKeyPress", "onKeyUp"];
    class Events extends Preset {
      constructor() {
        super(...arguments);
        /**
         * Binds event listeners.
         * Do not call manually
         * @pacakge
         */

        this.bindEventListeners = element => {
          this._eventListener(element.addEventListener);

          this._eventListener(window.addEventListener, windowEventNames);
        };
        /**
         * Binds event listeners.
         * Do not call manually
         * @pacakge
         */


        this.unbindEventListeners = element => {
          this._eventListener(element.removeEventListener);

          this._eventListener(window.removeEventListener, windowEventNames);
        };

        this._eventListener = (eventListener, events = eventNames) => {
          for (const eventName of events) {
            const htmlEventName = eventName.slice(2).toLowerCase(),
                  callback = this[eventName];

            if (callback !== undefined && callback instanceof Function) {
              eventListener(htmlEventName, callback);
            }
          }
        };
      }

    }

    /**
     * Checks if val1 and val2 are equal
     * @param val1 - value to check for equality
     * @param val2 - value to compare against val1
     * @param maxDepth - max recursion depth to crawl an object. After max depth is
     * reached, the two values are simply compared with `===`
     * @param maxLength - max length of array to crawl. If max lenth is reached, two
     * arrays will simply be compared with `===`
     * @returns `val1 === val2`
     */
    const isEqual = (val1, val2, maxDepth = 3, maxLength = 10) => {
      if (maxDepth === 0) {
        return val1 === val2;
      } else if (typeof val1 !== typeof val2) {
        return false;
      }

      if (val1 instanceof Array && val2 instanceof Array) {
        if (val1.length !== val2.length) {
          return false;
        } else if (val1.length > maxLength || val2.length > maxLength) {
          return val1 === val2;
        }

        for (let index = 0; index < val1.length; index++) {
          if (!isEqual(val1[index], val2[index], maxDepth - 1, maxLength)) {
            return false;
          }
        }

        return true;
      } else if (val1 instanceof Object && val2 instanceof Object) {
        if (!isEqual(Object.keys(val1), Object.keys(val2), maxDepth - 1, maxLength)) {
          return false;
        }

        for (const key of Object.keys(val1)) {
          if (!isEqual(val1[key], val2[key], maxDepth - 1, maxLength)) {
            return false;
          }
        }

        return true;
      }

      return val1 === val2;
    };
    var utils = {
      isEqual
    };

    const unmountedMsg = "Refusing to update unmounted component";
    /**
     * DeStagnate
     * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
     * @class
     * @namespace
     * @abstract
     */

    class Component extends Events {
      /**
       * Construct class component
       * @param parent - parent of this element
       * @param props - element properties; works like React Props
       */
      constructor(parent, props) {
        super();
        this.props = props;
        this._state = {};
        this._didSetInitialState = false;
        this._didMount = false;
        /**
         * Forces a component to update
         * Follows the same component updating procedure as setState without modifying state
         * @returns returns error if error is thrown
         */

        this.forceUpdate = () => {
          var _a, _b;

          try {
            if (!this._didMount) {
              throw new Error(unmountedMsg);
            }

            (_a = this.componentDidUpdate) === null || _a === void 0 ? void 0 : _a.call(this);

            if (this._parent === undefined) {
              throw new Error(`ERROR: code 2. See ${url}.`);
            }

            (_b = this.getSnapshotBeforeUpdate) === null || _b === void 0 ? void 0 : _b.call(this, Object.assign({}, this.props), Object.assign({}, this.state));

            this._update(this._execRender());
          } catch (err) {
            return this._handleError(err);
          }
        };
        /**
         * Checks if the state changed from the previous state. Can me attached to
         * `shouldComponentUpdate`
         * @param keys - list of keys to crawl. If left undefined (default) then
         * use all keys. Should be `keyof State`, but there were some Typescript
         * troubles.
         * @param maxDepth - max recursion depth to crawl an object. After max depth
         * is reached, the two values are simply compared with `===`
         * @param maxLength - max length of array to crawl. If max lenth is reached,
         * two arrays will simply be compared with `===`
         * @returns `val1 === val2`
         */


        this.stateDidChange = (keys, maxDepth = 3, maxLength = 15) => {
          var _a;

          if (keys === undefined) {
            return !utils.isEqual(this._state, this._prevState, maxDepth, maxLength);
          }

          const state = {},
                prevState = {};

          for (const key of keys) {
            state[key] = this._state[key];
            prevState[key] = (_a = this._prevState) === null || _a === void 0 ? void 0 : _a[key];
          }

          return !utils.isEqual(state, prevState, maxDepth, maxLength);
        };
        /**
         * Sets state
         * @param obj - state to set
         * @returns void
         */


        this.setState = obj => {
          var _a, _b;

          try {
            if (!this._didMount) {
              throw new Error(unmountedMsg);
            }

            (_a = this.componentWillUpdate) === null || _a === void 0 ? void 0 : _a.call(this);

            if (this._parent === undefined) {
              throw new Error(`ERROR: code 2. See ${url}.`);
            }

            this._prevState = Object.assign({}, this._state);
            (_b = this.getSnapshotBeforeUpdate) === null || _b === void 0 ? void 0 : _b.call(this, Object.assign({}, this.props), Object.assign({}, this.state));
            Object.assign(this._state, obj);
            const renderedContent = this.shouldComponentUpdate() ? this._execRender() : undefined;

            this._update(renderedContent);
          } catch (err) {
            return this._handleError(err);
          }
        };
        /**
         * Initial mounting to be manually called
         * @param parent - parent element to mount with; optional
         * @returns - result of append child to parent element
         */


        this.mountComponent = parent => {
          var _a, _b;

          try {
            if (parent !== undefined) {
              this.parent = parent;
            }

            if (this._parent === undefined) {
              throw new Error(`ERROR: code 2. See ${url}.`);
            }

            const component = this.render();
            this._didSetInitialState = true;
            (_a = this.componentWillMount) === null || _a === void 0 ? void 0 : _a.call(this);

            if (component === null) {
              throw new Error(`ERROR: code 3. See ${url}.`);
            }

            this.bindEventListeners(this._parent);
            this._didMount = true;
            (_b = this.componentDidMount) === null || _b === void 0 ? void 0 : _b.call(this);

            if (component instanceof Array) {
              const fragment = document.createDocumentFragment();
              component.forEach(child => fragment.appendChild(child));
              return this._parent.appendChild(fragment);
            }

            return this._parent.appendChild(component);
          } catch (err) {
            return this._handleError(err);
          }
        };
        /**
         * Initial mounting to be manually called
         * @returns - result of append child to parent element
         */


        this.mount = this.mountComponent;
        /**
         * Unmounting to be manually called
         * @returns - void
         */

        this.unmountComponent = () => {
          var _a;

          try {
            if (this._parent === undefined) {
              return;
            }

            (_a = this.componentWillUnmount) === null || _a === void 0 ? void 0 : _a.call(this);
            this.unbindEventListeners(this._parent);

            this._removeChildren();

            this._didMount = false;
          } catch (err) {
            this._handleError(err);
          }
        };
        /**
         * Unmounting to be manually called
         * @returns - void
         */


        this.unmount = this.unmountComponent;
        /**
         * Removes children from this._parent
         * @return void
         */

        this._removeChildren = () => {
          if (this._parent === undefined) {
            throw new Error(`ERROR: code 2. See ${url}.`);
          }

          while (this._parent.firstChild) {
            if (this._parent.lastChild) {
              this._parent.removeChild(this._parent.lastChild);
            }
          }
        };
        /**
         * Executes new render
         * @returns rendered content
         */


        this._execRender = () => {
          this._removeChildren();

          return this.render();
        };
        /**
         * Updates the component
         * @param renderedContent - rendered content from executing the render function
         * @returns void
         */


        this._update = renderedContent => {
          var _a, _b, _c;

          if (renderedContent instanceof Array) {
            for (const element of renderedContent) {
              (_a = this._parent) === null || _a === void 0 ? void 0 : _a.appendChild(element);
            }
          } else if (renderedContent) {
            (_b = this._parent) === null || _b === void 0 ? void 0 : _b.appendChild(renderedContent);
          }

          if (renderedContent) {
            (_c = this.componentDidUpdate) === null || _c === void 0 ? void 0 : _c.call(this);
          }
        };

        this._handleError = err => {
          if (err instanceof Error) {
            this.componentDidCatch(err);
            return err;
          }

          const error = new Error(String(err));
          this.componentDidCatch(error);
          return error;
        };

        if (parent === null) {
          throw new Error("Parent is null, expected HTMLElement | undefined.");
        }

        this._parent = parent;
      }
      /**
       * Public getState getter as this.state itself is protected
       * @returns component state
       */


      get getState() {
        return this.state;
      }
      /**
       * Get component state
       * @returns component state
       */


      get state() {
        return this._state;
      }
      /**
       * Sets component state
       * WARN: do not use this method to mutate the state directly
       * @param obj - state to set
       */


      set state(obj) {
        if (this._didSetInitialState) {
          this.componentDidCatch(new Error(`ERROR: code 1. See ${url}.`));
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


      get getProps() {
        return this.props;
      }
      /**
       * Set the parent of this component
       * @param element - parent element
       * @returns void
       */


      set parent(element) {
        this._parent = element;
      }
      /**
       * Get the parent element of this component
       * @returns parent
       */


      get parent() {
        return this._parent;
      }
      /**
       * Get didMount value publicly
       * @returns if mounted
       */


      get didMount() {
        return this._didMount;
      }
      /**
       * Returns the previous state. Undefined if no previous state exists
       * @returns previous state
       */


      get prevState() {
        return this._prevState;
      }

    }

    const fragment = (_, ...children) => {
      const documentFragment = document.createDocumentFragment();
      bindChildren(documentFragment, children);
      return documentFragment;
    };

    (function (DeStagnate) {
      DeStagnate.Component = Component;
      DeStagnate.createRef = createRef;
      DeStagnate.createElement = createElement;
      DeStagnate.createElementNS = createElementNS;
      DeStagnate.fragment = fragment;
    })(exports.DeStagnate || (exports.DeStagnate = {}));

    var DeStagnate = exports.DeStagnate;

    exports.Component = Component;
    exports.createElement = createElement;
    exports.createElementNS = createElementNS;
    exports.createRef = createRef;
    exports.default = DeStagnate;
    exports.fragment = fragment;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVTdGFnbmF0ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3ByaXZhdGUvX3VybC5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHMuanMiLCIuLi8uLi9saWIvY3JlYXRlRWxlbWVudC5qcyIsIi4uLy4uL2xpYi9jcmVhdGVFbGVtZW50TlMuanMiLCIuLi8uLi9saWIvY3JlYXRlUmVmLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvX2Jhc2UuanMiLCIuLi8uLi9saWIvcHJpdmF0ZS9fZXZlbnRzLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvdXRpbHMuanMiLCIuLi8uLi9saWIvY29tcG9uZW50LmpzIiwiLi4vLi4vbGliL2ZyYWdtZW50LmpzIiwiLi4vLi4vbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB1cmwgPSBcImh0dHBzOi8vbHVrZS16aGFuZy0wNC5naXRodWIuaW8vRGVTdGFnbmF0ZS9lcnJvci1jb2Rlc1wiO1xuZXhwb3J0IGRlZmF1bHQgdXJsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDNWeWJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d2NtbDJZWFJsTDE5MWNtd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEhkRVFVRjNSQ3hEUVVGQk8wRkJSVE5GTEdWQlFXVXNSMEZCUnl4RFFVRkJJbjA9IiwiLyoqXG4gKiBDb21wb25lbnRcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGZpbGUgc2hhcmUgZnVuY3Rpb25zIGFuZCB0eXBlcyBmb3IgY3JlYXRlRWxlbWVudCBhbmQgaXQncyB2YXJpYW50c1xuICovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50XCI7XG5pbXBvcnQgdXJsIGZyb20gXCIuL191cmxcIjtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gcHJvcHMgLSBwcm9wcyB0byBiaW5kIHdpdGhcbiAqIEBwYXJhbSBucyAtIGlmIG5hbWVzcGFjZSBlbGVtZW50XG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kUHJvcHMgPSAoZWxlbWVudCwgcHJvcHMsIG5zID0gZmFsc2UpID0+IHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwiaW5uZXJIVE1MXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB2YWwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobnMpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBrZXksIHZhbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleS5zbGljZSgwLCAyKSA9PT0gXCJvblwiKSB7IC8vIFdvcmtzIHN1Y2ggYXMgb25DbGljaywgb25BbmltYXRpb25FbmQsIGV0Yy5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh2YWwpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCksIHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSBcInJlZlwiICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mICh2YWwpID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50XCIgaW4gdmFsKSB7XG4gICAgICAgICAgICAgICAgdmFsLmN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7dHlwZW9mIHZhbH0gaXMgbm90IGEgdmFsaWQgRGVTdGFnbmF0ZSBjaGlsZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiB0byBiaW5kIHdpdGhcbiAqIEByZXR1cm5zIHZvaWRcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRDaGlsZHJlbiA9IChlbGVtZW50LCBjaGlsZHJlbikgPT4ge1xuICAgIGlmIChjaGlsZHJlbiAhPT0gbnVsbCAmJiBjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gKGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZCkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZHJlbi50b1N0cmluZygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4gaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGlmICghY2hpbGRyZW4uZGlkTW91bnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLm1vdW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDMuIFNlZSAke3VybH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi5wYXJlbnQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wYXJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hpbGRyZW4uZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgyTnlaV0YwWlVWc1pXMWxiblJWZEdsc2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d2NtbDJZWFJsTDE5amNtVmhkR1ZGYkdWdFpXNTBWWFJwYkhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPMGRCVVVjN1FVRkZTQ3hQUVVGUExFVkJRVU1zVTBGQlV5eEZRVUZETEUxQlFVMHNZMEZCWXl4RFFVRkJPMEZCUlhSRExFOUJRVThzUjBGQlJ5eE5RVUZOTEZGQlFWRXNRMEZCUVR0QlFYbEZlRUk3T3pzN096czdSMEZQUnp0QlFVTklMRTFCUVUwc1EwRkJReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eERRVU55UWl4UFFVRm5RaXhGUVVOb1FpeExRVUY1UWl4RlFVTjZRaXhGUVVGRkxFZEJRVWNzUzBGQlN5eEZRVU5PTEVWQlFVVTdTVUZEVGl4SlFVRkpMRXRCUVVzc1JVRkJSVHRSUVVOUUxFdEJRVXNzVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUXpWRExFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzUlVGQlJUdG5Ra0ZEY0VRc1NVRkJTU3hIUVVGSExFdEJRVXNzVjBGQlZ5eEZRVUZGTzI5Q1FVTnlRaXhQUVVGUExFTkJRVU1zVTBGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRVHRwUWtGRGNrTTdjVUpCUVUwc1NVRkJTU3hGUVVGRkxFVkJRVVU3YjBKQlExZ3NUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGQk8ybENRVU53UkR0eFFrRkJUVHR2UWtGRFNDeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUVR0cFFrRkROVU03WVVGRFNqdHBRa0ZCVFN4SlFVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1JVRkJSU3hGUVVGRkxEaERRVUU0UXp0blFrRkRha1lzU1VGQlNTeFBRVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1ZVRkJWU3hGUVVGRk8yOUNRVU0xUWl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlEzQkNMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVTlFMRmRCUVZjc1JVRkJiMElzUlVGRGNFTXNSMEZCWjBJc1EwRkRia0lzUTBGQlFUdHBRa0ZEU2p0aFFVTktPMmxDUVVGTkxFbEJRMGdzUjBGQlJ5eExRVUZMTEV0QlFVczdaMEpCUTJJc1QwRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEZGQlFWRTdaMEpCUTNoQ0xGTkJRVk1zU1VGQlNTeEhRVUZITEVWQlEyeENPMmRDUVVOSExFZEJRVzlDTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJRVHRoUVVNeFF6dHBRa0ZCVFN4SlFVRkpMRWRCUVVjc1MwRkJTeXhUUVVGVExFVkJRVVU3WjBKQlF6RkNMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eFBRVUZQTEVkQlFVY3NhME5CUVd0RExFTkJRVU1zUTBGQlFUdGhRVU5vUlR0VFFVTktPMHRCUTBvN1FVRkRUQ3hEUVVGRExFTkJRVUU3UVVGRlJEczdPenM3TzBkQlRVYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3haUVVGWkxFZEJRVWNzUTBGRGVFSXNUMEZCWVN4RlFVTmlMRkZCUVhWQ0xFVkJRMjVDTEVWQlFVVTdTVUZEVGl4SlFVRkpMRkZCUVZFc1MwRkJTeXhKUVVGSkxFbEJRVWtzVVVGQlVTeExRVUZMTEZOQlFWTXNSVUZCUlR0UlFVTTNReXhKUVVGSkxGRkJRVkVzV1VGQldTeExRVUZMTEVWQlFVVTdXVUZETTBJc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEV0QlFXMUNMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRM1JETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJReTlDTEVOQlFVTXNRMEZCUVR0VFFVTk1PMkZCUVUwc1NVRkRTQ3hQUVVGUExGRkJRVkVzUzBGQlN5eFJRVUZSTzFsQlF6VkNMRTlCUVU4c1VVRkJVU3hMUVVGTExGRkJRVkVzUlVGRE9VSTdXVUZEUlN4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlFUdFRRVU53UlR0aFFVRk5MRWxCUVVrc1VVRkJVU3haUVVGWkxGTkJRVk1zUlVGQlJUdFpRVU4wUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzU1VGQlNTeFBRVUZQTEZsQlFWa3NUVUZCVFN4RFFVRkRMRmRCUVZjc1JVRkJSVHRuUWtGRE4wUXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlFUdG5Ra0ZGZGtJc1QwRkJUVHRoUVVOVU8ybENRVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMRTlCUVU4c1dVRkJXU3hOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVTdaMEpCUTJwRUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVRTdZVUZETDBNN1dVRkZSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eE5RVUZOTEV0QlFVc3NUMEZCVHl4RlFVRkZPMmRDUVVNM1FpeFJRVUZSTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJRVHRoUVVNMVFqdFpRVVZFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRVHRUUVVONlFqdGhRVUZOTzFsQlEwZ3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlFUdFRRVU5vUXp0TFFVTktPMEZCUTB3c1EwRkJReXhEUVVGQkluMD0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBmb3IgRE9NIG1hbmlwdWxhdGlvblxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2pzeC50c1wiIC8+XG5pbXBvcnQgeyBiaW5kQ2hpbGRyZW4sIGJpbmRQcm9wcyB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuLyoqXG4gKlxuICogQHBhcmFtIHRhZ05hbWVPckNvbXBvbmVudCAtIG5hbWUgb2YgSFRNTCBlbGVtZW50IG9yIGZ1bmN0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtIHByb3BzIC0gcHJvcHMgb2YgZWxlbWVudCBvciBjb21wb25lbnRcbiAqIDEuIElmIGB0YWdOYW1lT3JDb21wb25lbnRgIGlzIHRhZ25hbWUsIHByb3BzIGFyZSBlbGVtZW50IHByb3BlcnRpZXMsIHN1Y2ggYXMgY2xhc3MsIGlubmVySFRNTCwgaWQsIHN0eWxlLCBldGNcbiAqIDIuIElmIGB0YWdOYW1lT3JDb21wb25lbnRgIGlzIGEgZnVuY3Rpb24sIHByb3BzIGFyZSB0aGF0IGZ1bmN0aW9ucyBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQuIENhbiBiZSBub3RoaW5nLCBudW1iZXIgKGNvbnZlcnRlZCB0byBzdHJpbmcpLCBzdHJpbmcgKHRleHQpLCBvciBhbm90aGVyIGVsZW1lbnQuIEFuIGFycmF5IG9mIGFueSBvZiB0aGVzZSB3aWxsIGNyZWF0ZSBtdWx0aXBsZSBjaGlsZHJlblxuICogQHBhcmFtIGNoaWxkcmVuQXJncyAtIHJlc3QgcGFyYW1ldGVyIGZvciBjaGlsZHJlblxuICogQHJldHVybnMgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lT3JDb21wb25lbnQsIHByb3BzLCAuLi5jaGlsZHJlbikge1xuICAgIGlmICh0eXBlb2YgKHRhZ05hbWVPckNvbXBvbmVudCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZU9yQ29tcG9uZW50KTtcbiAgICAgICAgYmluZFByb3BzKGVsZW1lbnQsIHByb3BzKTtcbiAgICAgICAgYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiAodGFnTmFtZU9yQ29tcG9uZW50KSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiB0YWdOYW1lT3JDb21wb25lbnQocHJvcHMsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIEVycm9yKFwidGFnTmFtZU9yQ29tcG9uZW50IGlzIG9mIGludmFsaWQgdHlwZS5cIik7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxSV3hsYldWdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlqY21WaGRHVkZiR1Z0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdPenRIUVZGSE8wRkJRMGdzTWtKQlFUSkNPMEZCUXpOQ0xHbERRVUZwUXp0QlFVVnFReXhQUVVGUExFVkJSMGdzV1VGQldTeEZRVU5hTEZOQlFWTXNSVUZEV2l4TlFVRk5MQ3RDUVVFclFpeERRVUZCTzBGQmMwTjBRenM3T3pzN096czdPMGRCVTBjN1FVRkRTQ3hOUVVGTkxGVkJRVlVzWVVGQllTeERRVWw2UWl4clFrRkhXU3hGUVVOYUxFdEJRVFpDTEVWQlF6ZENMRWRCUVVjc1VVRkJNa0k3U1VGRk9VSXNTVUZCU1N4UFFVRk5MRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTMEZCU3l4UlFVRlJMRVZCUVVVN1VVRkRla01zVFVGQlRTeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkJPMUZCUlRGRUxGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCTUVJc1EwRkJReXhEUVVGQk8xRkJSVGxETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVUU3VVVGRkwwSXNUMEZCVHl4UFFVRlBMRU5CUVVFN1MwRkRha0k3VTBGQlRTeEpRVUZKTEU5QlFVMHNRMEZCUXl4clFrRkJhMElzUTBGQlF5eExRVUZMTEZWQlFWVXNSVUZCUlR0UlFVTnNSQ3hQUVVGUExHdENRVUZyUWl4RFFVRkRMRXRCUVZVc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlFUdExRVU5zUkR0SlFVVkVMRTlCUVU4c1MwRkJTeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVFN1FVRkRNVVFzUTBGQlF6dEJRVVZFTEdWQlFXVXNZVUZCWVN4RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnROUyBjcmVhdGVFbGVtZW50IGZvciBuYW1lc3BhY2VkIGVsZW1lbnRzXG4gKi9cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiwgYmluZFByb3BzIH0gZnJvbSBcIi4vcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBjaGlsZCBlbGVtZW50IHRvIGRlU3RhZ25hdGVcbiAqIEBwYXJhbSBuYW1lc3BhY2VVUkkgLSBuYW1lc3BhY2UgdXJpXG4gKiBAcGFyYW0gdGFnTmFtZSAtIG5hbWUgb2YgSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0gcHJvcHMgLSBlbGVtZW50IHByb3BlcnRpZXMsIHN1Y2ggYXMgY2xhc3MsIGlubmVySFRNTCwgaWQsIHN0eWxlLCBldGNcbiAqIEBwYXJhbSBjaGlsZHJlbiAtIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudC4gQ2FuIGJlIG5vdGhpbmcsIG51bWJlciAoY29udmVydGVkIHRvIHN0cmluZyksIHN0cmluZyAodGV4dCksIG9yIGFub3RoZXIgZWxlbWVudC4gQW4gYXJyYXkgb2YgYW55IG9mIHRoZXNlIHdpbGwgY3JlYXRlIG11bHRpcGxlIGNoaWxkcmVuXG4gKiBAcGFyYW0gY2hpbGRyZW5SZXN0IC0gcmVzdCBwYXJhbWV0ZXIgb2YgY2hpbGRyZW5cbiAqIEByZXR1cm5zIGh0bWwgZWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudE5TID0gKG5hbWVzcGFjZVVSSSwgdGFnTmFtZSwgcHJvcHMsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHRhZ05hbWUpO1xuICAgIGJpbmRQcm9wcyhlbGVtZW50LCBwcm9wcywgdHJ1ZSk7XG4gICAgYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50TlM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFJXeGxiV1Z1ZEU1VExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMk55WldGMFpVVnNaVzFsYm5ST1V5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3UjBGUlJ6dEJRVVZJTEU5QlFVOHNSVUZGU0N4WlFVRlpMRVZCUTFvc1UwRkJVeXhGUVVOYUxFMUJRVTBzSzBKQlFTdENMRU5CUVVFN1FVRkZkRU03T3pzN096czdPMGRCVVVjN1FVRkRTQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeGxRVUZsTEVkQlFVY3NRMEZETTBJc1dVRkJLMGNzUlVGREwwY3NUMEZCTUVNc1JVRkRNVU1zUzBGQmQwTXNSVUZEZUVNc1IwRkJSeXhSUVVFeVFpeEZRVU4yUWl4RlFVRkZPMGxCUTFRc1RVRkJUU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVUU3U1VGRkwwUXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVRTdTVUZGTDBJc1dVRkJXU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUVR0SlFVVXZRaXhQUVVGUExFOUJRVThzUTBGQlFUdEJRVU5zUWl4RFFVRkRMRU5CUVVFN1FVRkZSQ3hsUVVGbExHVkJRV1VzUTBGQlFTSjkiLCIvKipcbiAqIENyZWF0ZXMgYSByZWZlcmVuY2UgZm9yIGEgbmVzdGVkIGNvbXBvbmVudFxuICogQHJldHVybnMgZW1wdHkgcmVmIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmID0gKCkgPT4gKHtcbiAgICBjdXJyZW50OiBudWxsLFxufSk7XG4vKipcbiAqIENyZWF0ZXMgYSByZWZlcmVuY2UgZm9yIGEgbmVzdGVkIGNvbXBvbmVudFxuICogQHJldHVybnMgZW1wdHkgcmVmIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWY7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFVtVm1MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOeVpXRjBaVkpsWmk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRmxRVHM3TzBkQlIwYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQmQwTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRha1VzVDBGQlR5eEZRVUZGTEVsQlFVazdRMEZEYUVJc1EwRkJReXhEUVVGQk8wRkJSVVk3T3p0SFFVZEhPMEZCUTBnc1pVRkJaU3hUUVVGVExFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBQcmVzZXQgLSBiYXNlIGZvciBhIGNvbXBvbmVudFxuICogQHBhY2thZ2VcbiAqL1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBfY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVFbGVtZW50TlMgfSBmcm9tIFwiLi4vY3JlYXRlRWxlbWVudE5TXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVSZWYgfSBmcm9tIFwiLi4vY3JlYXRlUmVmXCI7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBjb21wb25lbnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmVzZXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQgPSBfY3JlYXRlRWxlbWVudDtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50TlMgPSBfY3JlYXRlRWxlbWVudE5TO1xuICAgICAgICB0aGlzLmNyZWF0ZVJlZiA9IF9jcmVhdGVSZWY7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgd2hlbiBjb21wb25lbnQgY2F0Y2hlcyBlcnJvci4gRGVmYXVsdCBiZWhhdmlvdXIgaXMgY29uc29sZS5lcnJvclxuICAgICAgICAgKiBAcGFyYW0gZXJyb3IgLSBlcnJvciBvYmplY3Qgd2l0aCBpbmZvXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2ggPSAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIGJlZm9yZSBjb21wb25lbnQgaXMgdXBkYXRlZFxuICAgICAgICAgKiBAcmV0dXJucyB3aGV0aGVyIG9yIG5vdCBjb21wb25lbnQgc2hvdWxkIHVwZGF0ZS9yZS1yZW5kZXJcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbmRlcmluZyBIVE1MLCBtdXN0IGJlIHBhcnQgb2YgZXh0ZW5kZWQgY2xhc3NcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEByZXR1cm5zIGlmIHJldHVybnMgbnVsbCBlcnJvciB3aWxsIGJlIHRocm93blxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiBudWxsO1xuICAgIH1cbn1cblByZXNldC5jcmVhdGVFbGVtZW50ID0gX2NyZWF0ZUVsZW1lbnQ7XG5QcmVzZXQuY3JlYXRlRWxlbWVudE5TID0gX2NyZWF0ZUVsZW1lbnROUztcblByZXNldC5jcmVhdGVSZWYgPSBfY3JlYXRlUmVmO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDJKaGMyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmNISnBkbUYwWlM5ZlltRnpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN08wZEJVMGM3UVVGRlNDeFBRVUZQTEVWQlFVTXNUMEZCVHl4SlFVRkpMR05CUVdNc1JVRkJReXhOUVVGTkxHdENRVUZyUWl4RFFVRkJPMEZCUXpGRUxFOUJRVThzUlVGQlF5eFBRVUZQTEVsQlFVa3NaMEpCUVdkQ0xFVkJRVU1zVFVGQlRTeHZRa0ZCYjBJc1EwRkJRVHRCUVVNNVJDeFBRVUZQTEVWQlFVTXNUMEZCVHl4SlFVRkpMRlZCUVZVc1JVRkJReXhOUVVGTkxHTkJRV01zUTBGQlFUdEJRV2xEYkVRc01FSkJRVEJDTzBGQlF6RkNPenRIUVVWSE8wRkJRMGdzVFVGQlRTeFBRVUZuUWl4TlFVRk5PMGxCUVRWQ08xRkJVVzlDTEd0Q1FVRmhMRWRCUVVjc1kwRkJZeXhEUVVGQk8xRkJSVGxDTEc5Q1FVRmxMRWRCUVVjc1owSkJRV2RDTEVOQlFVRTdVVUZGYkVNc1kwRkJVeXhIUVVGSExGVkJRVlVzUTBGQlFUdFJRVVYwUXpzN096dFhRVWxITzFGQlEwa3NjMEpCUVdsQ0xFZEJRVWNzUTBGQlF5eExRVUZaTEVWQlFWRXNSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVRTdVVUZGZGtVN096dFhRVWRITzFGQlEwa3NNRUpCUVhGQ0xFZEJRVWNzUjBGQldTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkJPMUZCUld4RU96czdPenM3VjBGTlJ6dFJRVU5oTEZkQlFVMHNSMEZCUnl4SFFVRmxMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVUU3U1VGRmJrUXNRMEZCUXpzN1FVRnNRekJDTEc5Q1FVRmhMRWRCUVVjc1kwRkJZeXhEUVVGQk8wRkJSVGxDTEhOQ1FVRmxMRWRCUVVjc1owSkJRV2RDTEVOQlFVRTdRVUZGYkVNc1owSkJRVk1zUjBGQlJ5eFZRVUZWTEVOQlFVRWlmUT09IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBleHBvcnRzIEV2ZW50c1xuICogQHBhY2thZ2VcbiAqL1xuaW1wb3J0IHsgUHJlc2V0IGFzIEJhc2VDb21wb25lbnQgfSBmcm9tIFwiLi9fYmFzZVwiO1xuY29uc3QgZXZlbnROYW1lcyA9IFtcbiAgICBcIm9uRm9jdXNcIixcbiAgICBcIm9uQmx1clwiLFxuICAgIFwib25Gb2N1c0luXCIsXG4gICAgXCJvbkZvY3VzT3V0XCIsXG4gICAgXCJvbkFuaW1hdGlvblN0YXJ0XCIsXG4gICAgXCJvbkFuaW1hdGlvbkNhbmNlbFwiLFxuICAgIFwib25BbmltYXRpb25FbmRcIixcbiAgICBcIm9uQW5pbWF0aW9uSXRlcmF0aW9uXCIsXG4gICAgXCJvblRyYW5zaXRpb25TdGFydFwiLFxuICAgIFwib25UcmFuc2l0aW9uQ2FuY2VsXCIsXG4gICAgXCJvblRyYW5zaXRpb25FbmRcIixcbiAgICBcIm9uVHJhbnNpdGlvblJ1blwiLFxuICAgIFwib25BdXhDbGlja1wiLFxuICAgIFwib25DbGlja1wiLFxuICAgIFwib25EYmxDbGlja1wiLFxuICAgIFwib25Nb3VzZURvd25cIixcbiAgICBcIm9uTW91c2VFbnRlclwiLFxuICAgIFwib25Nb3VzZUxlYXZlXCIsXG4gICAgXCJvbk1vdXNlTW92ZVwiLFxuICAgIFwib25Nb3VzZU92ZXJcIixcbiAgICBcIm9uTW91c2VPdXRcIixcbiAgICBcIm9uTW91c2VVcFwiLFxuICAgIFwib25XaGVlbFwiLFxuXSwgd2luZG93RXZlbnROYW1lcyA9IFtcbiAgICBcIm9uTG9hZFwiLFxuICAgIFwib25PbmxpbmVcIixcbiAgICBcIm9uT2ZmbGluZVwiLFxuICAgIFwib25SZXNpemVcIixcbiAgICBcIm9uU2Nyb2xsXCIsXG4gICAgXCJvbktleURvd25cIixcbiAgICBcIm9uS2V5UHJlc3NcIixcbiAgICBcIm9uS2V5VXBcIixcbl07XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50cyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQmluZHMgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICAgKiBEbyBub3QgY2FsbCBtYW51YWxseVxuICAgICAgICAgKiBAcGFjYWtnZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnMgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcihlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcih3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciwgd2luZG93RXZlbnROYW1lcyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kcyBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgICAqIERvIG5vdCBjYWxsIG1hbnVhbGx5XG4gICAgICAgICAqIEBwYWNha2dlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVuYmluZEV2ZW50TGlzdGVuZXJzID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIoZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIsIHdpbmRvd0V2ZW50TmFtZXMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gKGV2ZW50TGlzdGVuZXIsIGV2ZW50cyA9IGV2ZW50TmFtZXMpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxFdmVudE5hbWUgPSBldmVudE5hbWUuc2xpY2UoMikudG9Mb3dlckNhc2UoKSwgY2FsbGJhY2sgPSB0aGlzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBldmVudExpc3RlbmVyKGh0bWxFdmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDJWMlpXNTBjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOWxkbVZ1ZEhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenRIUVZOSE8wRkJSVWdzVDBGQlR5eEZRVUZETEUxQlFVMHNTVUZCU1N4aFFVRmhMRVZCUVVNc1RVRkJUU3hUUVVGVExFTkJRVUU3UVVGdlRDOURMRTFCUVUwc1ZVRkJWU3hIUVVGeFFqdEpRVU5xUXl4VFFVRlRPMGxCUTFRc1VVRkJVVHRKUVVOU0xGZEJRVmM3U1VGRFdDeFpRVUZaTzBsQlExb3NhMEpCUVd0Q08wbEJRMnhDTEcxQ1FVRnRRanRKUVVOdVFpeG5Ra0ZCWjBJN1NVRkRhRUlzYzBKQlFYTkNPMGxCUTNSQ0xHMUNRVUZ0UWp0SlFVTnVRaXh2UWtGQmIwSTdTVUZEY0VJc2FVSkJRV2xDTzBsQlEycENMR2xDUVVGcFFqdEpRVU5xUWl4WlFVRlpPMGxCUTFvc1UwRkJVenRKUVVOVUxGbEJRVms3U1VGRFdpeGhRVUZoTzBsQlEySXNZMEZCWXp0SlFVTmtMR05CUVdNN1NVRkRaQ3hoUVVGaE8wbEJRMklzWVVGQllUdEpRVU5pTEZsQlFWazdTVUZEV2l4WFFVRlhPMGxCUTFnc1UwRkJVenREUVVOYUxFVkJRMGNzWjBKQlFXZENMRWRCUVhGQ08wbEJRMnBETEZGQlFWRTdTVUZEVWl4VlFVRlZPMGxCUTFZc1YwRkJWenRKUVVOWUxGVkJRVlU3U1VGRFZpeFZRVUZWTzBsQlExWXNWMEZCVnp0SlFVTllMRmxCUVZrN1NVRkRXaXhUUVVGVE8wTkJRMW9zUTBGQlFUdEJRVWRNTERCQ1FVRXdRanRCUVVNeFFpeE5RVUZOTEU5QlFXZENMRTFCUVU4c1UwRkJVU3hoUVVGaE8wbEJRV3hFT3p0UlFVVkpPenM3TzFkQlNVYzdVVUZEWjBJc2RVSkJRV3RDTEVkQlFVY3NRMEZCUXl4UFFVRnZRaXhGUVVGUkxFVkJRVVU3V1VGRGJrVXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJRVHRaUVVNM1F5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eERRVUZCTzFGQlEyeEZMRU5CUVVNc1EwRkJRVHRSUVVWRU96czdPMWRCU1VjN1VVRkRaMElzZVVKQlFXOUNMRWRCUVVjc1EwRkJReXhQUVVGdlFpeEZRVUZSTEVWQlFVVTdXVUZEY2tVc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlFUdFpRVU5vUkN4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eHRRa0ZCYlVJc1JVRkJSU3huUWtGQlowSXNRMEZCUXl4RFFVRkJPMUZCUTNKRkxFTkJRVU1zUTBGQlFUdFJRVVZQTEcxQ1FVRmpMRWRCUVVjc1EwRkRja0lzWVVGQk5FSXNSVUZETlVJc1RVRkJUU3hIUVVGSExGVkJRVlVzUlVGRFppeEZRVUZGTzFsQlEwNHNTMEZCU3l4TlFVRk5MRk5CUVZNc1NVRkJTU3hOUVVGTkxFVkJRVVU3WjBKQlF6VkNMRTFCUVUwc1lVRkJZU3hIUVVGSExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRMnhFTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVUU3WjBKQlJUbENMRWxCUVVrc1VVRkJVU3hMUVVGTExGTkJRVk1zU1VGQlNTeFJRVUZSTEZsQlFWa3NVVUZCVVN4RlFVRkZPMjlDUVVONFJDeGhRVUZoTEVOQlExUXNZVUZCWVN4RlFVTmlMRkZCUVRoRExFTkJRMnBFTEVOQlFVRTdhVUpCUTBvN1lVRkRTanRSUVVOTUxFTkJRVU1zUTBGQlFUdEpRVVZNTEVOQlFVTTdRMEZCUVNKOSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBVdGlscyAtIHV0aWxpdGllcyBmb3IgRGVTdGFnbmF0ZVxuICovXG4vKipcbiAqIENoZWNrcyBpZiB2YWwxIGFuZCB2YWwyIGFyZSBlcXVhbFxuICogQHBhcmFtIHZhbDEgLSB2YWx1ZSB0byBjaGVjayBmb3IgZXF1YWxpdHlcbiAqIEBwYXJhbSB2YWwyIC0gdmFsdWUgdG8gY29tcGFyZSBhZ2FpbnN0IHZhbDFcbiAqIEBwYXJhbSBtYXhEZXB0aCAtIG1heCByZWN1cnNpb24gZGVwdGggdG8gY3Jhd2wgYW4gb2JqZWN0LiBBZnRlciBtYXggZGVwdGggaXNcbiAqIHJlYWNoZWQsIHRoZSB0d28gdmFsdWVzIGFyZSBzaW1wbHkgY29tcGFyZWQgd2l0aCBgPT09YFxuICogQHBhcmFtIG1heExlbmd0aCAtIG1heCBsZW5ndGggb2YgYXJyYXkgdG8gY3Jhd2wuIElmIG1heCBsZW50aCBpcyByZWFjaGVkLCB0d29cbiAqIGFycmF5cyB3aWxsIHNpbXBseSBiZSBjb21wYXJlZCB3aXRoIGA9PT1gXG4gKiBAcmV0dXJucyBgdmFsMSA9PT0gdmFsMmBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzRXF1YWwgPSAodmFsMSwgdmFsMiwgbWF4RGVwdGggPSAzLCBtYXhMZW5ndGggPSAxMCkgPT4ge1xuICAgIGlmIChtYXhEZXB0aCA9PT0gMCkgeyAvLyBJZiBtYXhEZXB0aCByZWFjaGVkLCBqdXN0IHJ1biA9PT1cbiAgICAgICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwxICE9PSB0eXBlb2YgdmFsMikgeyAvLyBJZiB0aGV5IGFyZW4ndCB0aGUgc2FtZSB0eXBlLCByZXR1cm4gZmFsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsMSBpbnN0YW5jZW9mIEFycmF5ICYmIHZhbDIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBpZiAodmFsMS5sZW5ndGggIT09IHZhbDIubGVuZ3RoKSB7IC8vIElmIGFycmF5cyBoYXZlIGRpZmZlcmVudCBsZW5ndGhzXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsMS5sZW5ndGggPiBtYXhMZW5ndGggfHwgdmFsMi5sZW5ndGggPiBtYXhMZW5ndGgpIHsgLy8gSWYgYXJyYXkgaXMgdG9vIGJpZ1xuICAgICAgICAgICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbDEubGVuZ3RoOyBpbmRleCsrKSB7IC8vIEdvIHRocm91Z2ggZWFjaCBpdGVtXG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsMVtpbmRleF0sIHZhbDJbaW5kZXhdLCBtYXhEZXB0aCAtIDEsIG1heExlbmd0aCkpIHsgLy8gVGVzdCBpZiB0d28gYXJyYXkgaXRlbXMgYXJlIGVxdWFsXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwxIGluc3RhbmNlb2YgT2JqZWN0ICYmIHZhbDIgaW5zdGFuY2VvZiBPYmplY3QpIHsgLy8gSWYgb2JqZWN0XG4gICAgICAgIGlmICghaXNFcXVhbChPYmplY3Qua2V5cyh2YWwxKSwgT2JqZWN0LmtleXModmFsMiksIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkgeyAvLyBJZiB0aGV5IGRvbid0IGhhdmUgaGUgc2FtZSBrZXlzXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModmFsMSkpIHsgLy8gR28gdGhyb3VnaCBhbmQgdGVzdCBlYWNoIHZhbHVlXG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsMVtrZXldLCB2YWwyW2tleV0sIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGlzRXF1YWwsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmNISnBkbUYwWlM5MWRHbHNjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN1IwRlJSenRCUVVWSU96czdPenM3T3pzN1IwRlRSenRCUVVOSUxFMUJRVTBzUTBGQlF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4RFFVTnVRaXhKUVVGaExFVkJRMklzU1VGQllTeEZRVU5pTEZGQlFWRXNSMEZCUnl4RFFVRkRMRVZCUTFvc1UwRkJVeXhIUVVGSExFVkJRVVVzUlVGRFVDeEZRVUZGTzBsQlExUXNTVUZCU1N4UlFVRlJMRXRCUVVzc1EwRkJReXhGUVVGRkxFVkJRVVVzYjBOQlFXOURPMUZCUTNSRUxFOUJRVThzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUVR0TFFVTjJRanRUUVVGTkxFbEJRVWtzVDBGQlR5eEpRVUZKTEV0QlFVc3NUMEZCVHl4SlFVRkpMRVZCUVVVc1JVRkJSU3cyUTBGQk5rTTdVVUZEYmtZc1QwRkJUeXhMUVVGTExFTkJRVUU3UzBGRFpqdEpRVVZFTEVsQlFVa3NTVUZCU1N4WlFVRlpMRXRCUVVzc1NVRkJTU3hKUVVGSkxGbEJRVmtzUzBGQlN5eEZRVUZGTzFGQlEyaEVMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUzBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc2JVTkJRVzFETzFsQlEyeEZMRTlCUVU4c1MwRkJTeXhEUVVGQk8xTkJRMlk3WVVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1UwRkJVeXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NVMEZCVXl4RlFVRkZMRVZCUVVVc2MwSkJRWE5DTzFsQlEyNUdMRTlCUVU4c1NVRkJTU3hMUVVGTExFbEJRVWtzUTBGQlFUdFRRVU4yUWp0UlFVVkVMRXRCUVVzc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEZRVUZGTEVWQlFVVXNkVUpCUVhWQ08xbEJRM1pGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hSUVVGUkxFZEJRVWNzUTBGQlF5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RlFVRkZMRVZCUVVVc2IwTkJRVzlETzJkQ1FVTnVSeXhQUVVGUExFdEJRVXNzUTBGQlFUdGhRVU5tTzFOQlEwbzdVVUZGUkN4UFFVRlBMRWxCUVVrc1EwRkJRVHRMUVVOa08xTkJRVTBzU1VGQlNTeEpRVUZKTEZsQlFWa3NUVUZCVFN4SlFVRkpMRWxCUVVrc1dVRkJXU3hOUVVGTkxFVkJRVVVzUlVGQlJTeFpRVUZaTzFGQlEzWkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRMUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkRha0lzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkRha0lzVVVGQlVTeEhRVUZITEVOQlFVTXNSVUZEV2l4VFFVRlRMRU5CUTFvc1JVRkJSU3hGUVVGRkxHdERRVUZyUXp0WlFVTnVReXhQUVVGUExFdEJRVXNzUTBGQlFUdFRRVU5tTzFGQlJVUXNTMEZCU3l4TlFVRk5MRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRVZCUVVVc2FVTkJRV2xETzFsQlIzQkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRMUFzU1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVTnFRaXhKUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlEyeENMRkZCUVZFc1IwRkJSeXhEUVVGRExFVkJRMW9zVTBGQlV5eERRVU5hTEVWQlFVVTdaMEpCUTBNc1QwRkJUeXhMUVVGTExFTkJRVUU3WVVGRFpqdFRRVU5LTzFGQlJVUXNUMEZCVHl4SlFVRkpMRU5CUVVFN1MwRkRaRHRKUVVWRUxFOUJRVThzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUVR0QlFVTjRRaXhEUVVGRExFTkJRVUU3UVVGRlJDeGxRVUZsTzBsQlExZ3NUMEZCVHp0RFFVTldMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZSBtYWluIGRlc3RhZ25hdGUgY2xhc3NcbiAqIEBmaWxlIERlU3RhZ25hdGUgY29tcG9uZW50IGNsYXNzXG4gKiBAcHJlc2VydmVcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxpbmVzICovXG5pbXBvcnQgeyBFdmVudHMgYXMgQmFzZSB9IGZyb20gXCIuL3ByaXZhdGUvX2V2ZW50c1wiO1xuaW1wb3J0IHVybCBmcm9tIFwiLi9wcml2YXRlL191cmxcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi9wcml2YXRlL3V0aWxzXCI7XG5jb25zdCB1bm1vdW50ZWRNc2cgPSBcIlJlZnVzaW5nIHRvIHVwZGF0ZSB1bm1vdW50ZWQgY29tcG9uZW50XCI7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEBjbGFzc2Rlc2MgQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY2xhc3NcbiAqIEBuYW1lc3BhY2VcbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGNsYXNzIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSBwYXJlbnQgLSBwYXJlbnQgb2YgdGhpcyBlbGVtZW50XG4gICAgICogQHBhcmFtIHByb3BzIC0gZWxlbWVudCBwcm9wZXJ0aWVzOyB3b3JrcyBsaWtlIFJlYWN0IFByb3BzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocGFyZW50LCBwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGF0ZSBvZiBjb21wb25lbnQuIFdvcmtzIHNpbWlsYXIgUmVhY3QgU3RhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3N0YXRlID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBpbml0aWFsIHN0YXRlIHdhcyBzZXQgaW4gaW5pdGlhbGl6ZXJcbiAgICAgICAgICogRG8gbm90IHRocm93IGVycm9yIHdpdGggZGlyZWN0IHN0YXRlIHNldHRpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgY29tcG9uZW50IGlzIG1vdW50ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2RpZE1vdW50ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZXMgYSBjb21wb25lbnQgdG8gdXBkYXRlXG4gICAgICAgICAqIEZvbGxvd3MgdGhlIHNhbWUgY29tcG9uZW50IHVwZGF0aW5nIHByb2NlZHVyZSBhcyBzZXRTdGF0ZSB3aXRob3V0IG1vZGlmeWluZyBzdGF0ZVxuICAgICAgICAgKiBAcmV0dXJucyByZXR1cm5zIGVycm9yIGlmIGVycm9yIGlzIHRocm93blxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZGlkTW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVubW91bnRlZE1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbCh0aGlzLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh0aGlzLl9leGVjUmVuZGVyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2tzIGlmIHRoZSBzdGF0ZSBjaGFuZ2VkIGZyb20gdGhlIHByZXZpb3VzIHN0YXRlLiBDYW4gbWUgYXR0YWNoZWQgdG9cbiAgICAgICAgICogYHNob3VsZENvbXBvbmVudFVwZGF0ZWBcbiAgICAgICAgICogQHBhcmFtIGtleXMgLSBsaXN0IG9mIGtleXMgdG8gY3Jhd2wuIElmIGxlZnQgdW5kZWZpbmVkIChkZWZhdWx0KSB0aGVuXG4gICAgICAgICAqIHVzZSBhbGwga2V5cy4gU2hvdWxkIGJlIGBrZXlvZiBTdGF0ZWAsIGJ1dCB0aGVyZSB3ZXJlIHNvbWUgVHlwZXNjcmlwdFxuICAgICAgICAgKiB0cm91Ymxlcy5cbiAgICAgICAgICogQHBhcmFtIG1heERlcHRoIC0gbWF4IHJlY3Vyc2lvbiBkZXB0aCB0byBjcmF3bCBhbiBvYmplY3QuIEFmdGVyIG1heCBkZXB0aFxuICAgICAgICAgKiBpcyByZWFjaGVkLCB0aGUgdHdvIHZhbHVlcyBhcmUgc2ltcGx5IGNvbXBhcmVkIHdpdGggYD09PWBcbiAgICAgICAgICogQHBhcmFtIG1heExlbmd0aCAtIG1heCBsZW5ndGggb2YgYXJyYXkgdG8gY3Jhd2wuIElmIG1heCBsZW50aCBpcyByZWFjaGVkLFxuICAgICAgICAgKiB0d28gYXJyYXlzIHdpbGwgc2ltcGx5IGJlIGNvbXBhcmVkIHdpdGggYD09PWBcbiAgICAgICAgICogQHJldHVybnMgYHZhbDEgPT09IHZhbDJgXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlRGlkQ2hhbmdlID0gKGtleXMsIG1heERlcHRoID0gMywgbWF4TGVuZ3RoID0gMTUpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChrZXlzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXV0aWxzLmlzRXF1YWwodGhpcy5fc3RhdGUsIHRoaXMuX3ByZXZTdGF0ZSwgbWF4RGVwdGgsIG1heExlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHt9LCBwcmV2U3RhdGUgPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gdGhpcy5fc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGVba2V5XSA9IChfYSA9IHRoaXMuX3ByZXZTdGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIXV0aWxzLmlzRXF1YWwoc3RhdGUsIHByZXZTdGF0ZSwgbWF4RGVwdGgsIG1heExlbmd0aCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHN0YXRlXG4gICAgICAgICAqIEBwYXJhbSBvYmogLSBzdGF0ZSB0byBzZXRcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSA9IChvYmopID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZGlkTW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVubW91bnRlZE1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldlN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fc3RhdGUpO1xuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9zdGF0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW5kZXJlZENvbnRlbnQgPSB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZXhlY1JlbmRlcigpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZShyZW5kZXJlZENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nLCBtYXgtbGVuICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsIG1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcGFyYW0gcGFyZW50IC0gcGFyZW50IGVsZW1lbnQgdG8gbW91bnQgd2l0aDsgb3B0aW9uYWxcbiAgICAgICAgICogQHJldHVybnMgLSByZXN1bHQgb2YgYXBwZW5kIGNoaWxkIHRvIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdW50Q29tcG9uZW50ID0gKHBhcmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnRXaWxsTW91bnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAzLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRFdmVudExpc3RlbmVycyh0aGlzLl9wYXJlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZE1vdW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLmNvbXBvbmVudERpZE1vdW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5mb3JFYWNoKChjaGlsZCkgPT4gZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWwgbW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEByZXR1cm5zIC0gcmVzdWx0IG9mIGFwcGVuZCBjaGlsZCB0byBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VudCA9IHRoaXMubW91bnRDb21wb25lbnQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbm1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcmV0dXJucyAtIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudW5tb3VudENvbXBvbmVudCA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy51bmJpbmRFdmVudExpc3RlbmVycyh0aGlzLl9wYXJlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlkTW91bnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVW5tb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHJldHVybnMgLSB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVubW91bnQgPSB0aGlzLnVubW91bnRDb21wb25lbnQ7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbWF4LWxlbiwgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZyAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyBjaGlsZHJlbiBmcm9tIHRoaXMuX3BhcmVudFxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuX3BhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX3BhcmVudC5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4ZWN1dGVzIG5ldyByZW5kZXJcbiAgICAgICAgICogQHJldHVybnMgcmVuZGVyZWQgY29udGVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZXhlY1JlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZXMgdGhlIGNvbXBvbmVudFxuICAgICAgICAgKiBAcGFyYW0gcmVuZGVyZWRDb250ZW50IC0gcmVuZGVyZWQgY29udGVudCBmcm9tIGV4ZWN1dGluZyB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3VwZGF0ZSA9IChyZW5kZXJlZENvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgaWYgKHJlbmRlcmVkQ29udGVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHJlbmRlcmVkQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLl9wYXJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLl9wYXJlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hcHBlbmRDaGlsZChyZW5kZXJlZENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlbmRlcmVkQ29udGVudCkge1xuICAgICAgICAgICAgICAgIChfYyA9IHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFN0cmluZyhlcnIpKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9O1xuICAgICAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJlbnQgaXMgbnVsbCwgZXhwZWN0ZWQgSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVibGljIGdldFN0YXRlIGdldHRlciBhcyB0aGlzLnN0YXRlIGl0c2VsZiBpcyBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyBjb21wb25lbnQgc3RhdGVcbiAgICAgKi9cbiAgICBnZXQgZ2V0U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgY29tcG9uZW50IHN0YXRlXG4gICAgICogQHJldHVybnMgY29tcG9uZW50IHN0YXRlXG4gICAgICovXG4gICAgZ2V0IHN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgY29tcG9uZW50IHN0YXRlXG4gICAgICogV0FSTjogZG8gbm90IHVzZSB0aGlzIG1ldGhvZCB0byBtdXRhdGUgdGhlIHN0YXRlIGRpcmVjdGx5XG4gICAgICogQHBhcmFtIG9iaiAtIHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHNldCBzdGF0ZShvYmopIHtcbiAgICAgICAgaWYgKHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaChuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDEuIFNlZSAke3VybH0uYCkpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShvYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBvYmo7XG4gICAgICAgICAgICB0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBnZXRQcm9wcyBnZXR0ZXIgYXMgdGhpcy5wcm9wcyBpdHNlbGYgaXMgcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMgY29tcG9uZW50IHByb3BzXG4gICAgICovXG4gICAgZ2V0IGdldFByb3BzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBwYXJlbnQgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIHBhcmVudCBlbGVtZW50XG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldCBwYXJlbnQoZWxlbWVudCkge1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHBhcmVudCBlbGVtZW50IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQHJldHVybnMgcGFyZW50XG4gICAgICovXG4gICAgZ2V0IHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGRpZE1vdW50IHZhbHVlIHB1YmxpY2x5XG4gICAgICogQHJldHVybnMgaWYgbW91bnRlZFxuICAgICAqL1xuICAgIGdldCBkaWRNb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpZE1vdW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcmV2aW91cyBzdGF0ZS4gVW5kZWZpbmVkIGlmIG5vIHByZXZpb3VzIHN0YXRlIGV4aXN0c1xuICAgICAqIEByZXR1cm5zIHByZXZpb3VzIHN0YXRlXG4gICAgICovXG4gICAgZ2V0IHByZXZTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZXZTdGF0ZTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOdmJYQnZibVZ1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPenRIUVZWSE8wRkJRMGdzT0VKQlFUaENPMEZCUlRsQ0xFOUJRVThzUlVGQlF5eE5RVUZOTEVsQlFVa3NTVUZCU1N4RlFVRkRMRTFCUVUwc2JVSkJRVzFDTEVOQlFVRTdRVUZGYUVRc1QwRkJUeXhIUVVGSExFMUJRVTBzWjBKQlFXZENMRU5CUVVFN1FVRkRhRU1zVDBGQlR5eExRVUZMTEUxQlFVMHNhVUpCUVdsQ0xFTkJRVUU3UVVGRmJrTXNUVUZCVFN4WlFVRlpMRWRCUVVjc2QwTkJRWGRETEVOQlFVRTdRVUZ6UWpkRU96czdPenM3UjBGTlJ6dEJRVU5JTEUxQlFVMHNUMEZCWjBJc1UwRkhjRUlzVTBGQlVTeEpRVUZKTzBsQk5FSldPenM3TzA5QlNVYzdTVUZEU0N4WlFVRnZRaXhOUVVFeVFpeEZRVUZaTEV0QlFXRTdVVUZEY0VVc1MwRkJTeXhGUVVGRkxFTkJRVUU3VVVGRVowUXNWVUZCU3l4SFFVRk1MRXRCUVVzc1EwRkJVVHRSUVM5Q2VFVTdPMWRCUlVjN1VVRkRTeXhYUVVGTkxFZEJRVlVzUlVGQlZ5eERRVUZCTzFGQlJXNURPenM3VjBGSFJ6dFJRVU5MTEhkQ1FVRnRRaXhIUVVGSExFdEJRVXNzUTBGQlFUdFJRVTl1UXpzN1YwRkZSenRSUVVOTExHTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVRTdVVUZuUjNwQ096czdPMWRCU1VjN1VVRkRZU3huUWtGQlZ5eEhRVUZITEVkQlFXbENMRVZCUVVVN08xbEJRemRETEVsQlFVazdaMEpCUTBFc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVTdiMEpCUTJwQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVFN2FVSkJRMmhETzJkQ1FVVkVMRTFCUVVFc1NVRkJTU3hEUVVGRExHdENRVUZyUWl3clEwRkJka0lzU1VGQlNTeEZRVUYxUWp0blFrRkZNMElzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4TFFVRkxMRk5CUVZNc1JVRkJSVHR2UWtGRE5VSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh6UWtGQmMwSXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRVHRwUWtGRGFFUTdaMEpCUlVRc1RVRkJRU3hKUVVGSkxFTkJRVU1zZFVKQlFYVkNMQ3REUVVFMVFpeEpRVUZKTEVWQlEwRXNhMEpCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlZTeHZRa0ZEY0VJc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGRGFrSTdaMEpCUlVRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1EwRkJRVHRoUVVOdVF6dFpRVUZETEU5QlFVOHNSMEZCV1N4RlFVRkZMREJDUVVFd1FpeERRVUZETzJkQ1FVTTVReXhQUVVGUExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1lVRkRhRU03VVVGRFRDeERRVUZETEVOQlFVRTdVVUZGUkRzN096czdPenM3T3pzN1YwRlhSenRSUVVOaExHMUNRVUZqTEVkQlFVY3NRMEZETjBJc1NVRkJhVUlzUlVGRGFrSXNVVUZCVVN4SFFVRkhMRU5CUVVNc1JVRkRXaXhUUVVGVExFZEJRVWNzUlVGQlJTeEZRVU5RTEVWQlFVVTdPMWxCUTFRc1NVRkJTU3hKUVVGSkxFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTndRaXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZEYWtJc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGRFdDeEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVTm1MRkZCUVZFc1JVRkRVaXhUUVVGVExFTkJRMW9zUTBGQlFUdGhRVU5LTzFsQlJVUXNUVUZCVFN4TFFVRkxMRWRCUVRaQ0xFVkJRVVVzUlVGRGRFTXNVMEZCVXl4SFFVRTJRaXhGUVVGRkxFTkJRVUU3V1VGRk5VTXNTMEZCU3l4TlFVRk5MRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVU3WjBKQlEzQkNMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVd0Q0xFTkJRVU1zUTBGQlFUdG5Ra0ZETlVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMREJEUVVGSExFZEJRV3RDTEVOQlFVTXNRMEZCUVR0aFFVTjZSRHRaUVVWRUxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFVkJRVVVzVVVGQlVTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkJPMUZCUTJoRkxFTkJRVU1zUTBGQlFUdFJRVVZFT3pzN08xZEJTVWM3VVVGRFlTeGhRVUZSTEVkQlFVY3NRMEZCUXl4SFFVRnRRaXhGUVVGblFpeEZRVUZGT3p0WlFVTTNSQ3hKUVVGSk8yZENRVU5CTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRk8yOUNRVU5xUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZCTzJsQ1FVTm9RenRuUWtGRlJDeE5RVUZCTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzSzBOQlFYaENMRWxCUVVrc1JVRkJkMEk3WjBKQlJUVkNMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUzBGQlN5eFRRVUZUTEVWQlFVVTdiMEpCUXpWQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVRTdhVUpCUTJoRU8yZENRVVZFTEVsQlFVa3NRMEZCUXl4VlFVRlZMSEZDUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUVR0blFrRkZiRU1zVFVGQlFTeEpRVUZKTEVOQlFVTXNkVUpCUVhWQ0xDdERRVUUxUWl4SlFVRkpMRVZCUTBFc2EwSkJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCVlN4dlFrRkRjRUlzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZEYWtJN1owSkJSVVFzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZCTzJkQ1FVVXZRaXhOUVVGTkxHVkJRV1VzUjBGQlJ5eEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFVkJRVVU3YjBKQlEyaEVMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzI5Q1FVTndRaXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZCTzJkQ1FVVm1MRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVRTdZVUZEYUVNN1dVRkJReXhQUVVGUExFZEJRVWNzUlVGQlJTd3dRa0ZCTUVJc1EwRkJRenRuUWtGRGNrTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTzJGQlEyaERPMUZCUTB3c1EwRkJReXhEUVVGQk8xRkJSVVFzWjBWQlFXZEZPMUZCUTJoRk96czdPMWRCU1VjN1VVRkRZU3h0UWtGQll5eEhRVUZITEVOQlF6ZENMRTFCUVc5Q0xFVkJRMUlzUlVGQlJUczdXVUZEWkN4SlFVRkpPMmRDUVVOQkxFbEJRVWtzVFVGQlRTeExRVUZMTEZOQlFWTXNSVUZCUlR0dlFrRkRkRUlzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVFN2FVSkJRM1pDTzJkQ1FVVkVMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUzBGQlN5eFRRVUZUTEVWQlFVVTdiMEpCUXpWQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVRTdhVUpCUTJoRU8yZENRVVZFTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlFUdG5Ra0ZGTDBJc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SFFVRkhMRWxCUVVrc1EwRkJRVHRuUWtGRkwwSXNUVUZCUVN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEN0RFFVRjJRaXhKUVVGSkxFVkJRWFZDTzJkQ1FVVXpRaXhKUVVGSkxGTkJRVk1zUzBGQlN5eEpRVUZKTEVWQlFVVTdiMEpCUTNCQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVRTdhVUpCUTJoRU8yZENRVVZFTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVFN1owSkJSWEpETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGQk8yZENRVU55UWl4TlFVRkJMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNLME5CUVhSQ0xFbEJRVWtzUlVGQmMwSTdaMEpCUlRGQ0xFbEJRVWtzVTBGQlV5eFpRVUZaTEV0QlFVc3NSVUZCUlR0dlFrRkROVUlzVFVGQlRTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMSE5DUVVGelFpeEZRVUZGTEVOQlFVTTdiMEpCUld4RUxGTkJRWFZDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVUU3YjBKQlJYaEZMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVFN2FVSkJRelZETzJkQ1FVVkVMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVFN1lVRkROME03V1VGQlF5eFBRVUZQTEVkQlFWa3NSVUZCUlN3d1FrRkJNRUlzUTBGQlF6dG5Ra0ZET1VNc1QwRkJUeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJPMkZCUTJoRE8xRkJRMHdzUTBGQlF5eERRVUZCTzFGQlJVUTdPenRYUVVkSE8xRkJRMkVzVlVGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVFN1VVRkZNME03T3p0WFFVZEhPMUZCUTJFc2NVSkJRV2RDTEVkQlFVY3NSMEZCVXl4RlFVRkZPenRaUVVNeFF5eEpRVUZKTzJkQ1FVTkJMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUzBGQlN5eFRRVUZUTEVWQlFVVTdiMEpCUXpWQ0xFOUJRVTA3YVVKQlExUTdaMEpCUlVRc1RVRkJRU3hKUVVGSkxFTkJRVU1zYjBKQlFXOUNMQ3REUVVGNlFpeEpRVUZKTEVWQlFYbENPMmRDUVVVM1FpeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkJPMmRDUVVWMlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVFN1owSkJRM1JDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGQk8yRkJRM3BDTzFsQlFVTXNUMEZCVHl4SFFVRlpMRVZCUVVVc01FSkJRVEJDTEVOQlFVTTdaMEpCUXpsRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1lVRkRla0k3VVVGRlRDeERRVUZETEVOQlFVRTdVVUZGUkRzN08xZEJSMGM3VVVGRFlTeFpRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZCTzFGQlF5OURMQ3RFUVVFclJEdFJRVVV2UkRzN08xZEJSMGM3VVVGRFN5eHZRa0ZCWlN4SFFVRkhMRWRCUVZNc1JVRkJSVHRaUVVOcVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRXRCUVVzc1UwRkJVeXhGUVVGRk8yZENRVU0xUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGQk8yRkJRMmhFTzFsQlJVUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJUdG5Ra0ZETlVJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlR0dlFrRkRlRUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUVR0cFFrRkRia1E3WVVGRFNqdFJRVU5NTEVOQlFVTXNRMEZCUVR0UlFVVkVPenM3VjBGSFJ6dFJRVU5MTEdkQ1FVRlhMRWRCUVVjc1IwRkJaU3hGUVVGRk8xbEJRMjVETEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJRVHRaUVVWMFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRVHRSUVVONFFpeERRVUZETEVOQlFVRTdVVUZIUkRzN096dFhRVWxITzFGQlEwc3NXVUZCVHl4SFFVRkhMRU5CUVVNc1pVRkJORUlzUlVGQlVTeEZRVUZGT3p0WlFVTnlSQ3hKUVVGSkxHVkJRV1VzV1VGQldTeExRVUZMTEVWQlFVVTdaMEpCUTJ4RExFdEJRVXNzVFVGQlRTeFBRVUZQTEVsQlFVa3NaVUZCWlN4RlFVRkZPMjlDUVVOdVF5eE5RVUZCTEVsQlFVa3NRMEZCUXl4UFFVRlBMREJEUVVGRkxGZEJRVmNzUTBGQlF5eFBRVUZQTEVWQlFVTTdhVUpCUTNKRE8yRkJRMG83YVVKQlFVMHNTVUZCU1N4bFFVRmxMRVZCUVVVN1owSkJRM2hDTEUxQlFVRXNTVUZCU1N4RFFVRkRMRTlCUVU4c01FTkJRVVVzVjBGQlZ5eERRVUZETEdWQlFXVXNSVUZCUXp0aFFVTTNRenRaUVVWRUxFbEJRVWtzWlVGQlpTeEZRVUZGTzJkQ1FVTnFRaXhOUVVGQkxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc0swTkJRWFpDTEVsQlFVa3NSVUZCZFVJN1lVRkRPVUk3VVVGRFRDeERRVUZETEVOQlFVRTdVVUZGVHl4cFFrRkJXU3hIUVVGSExFTkJRVU1zUjBGQldTeEZRVUZUTEVWQlFVVTdXVUZETTBNc1NVRkJTU3hIUVVGSExGbEJRVmtzUzBGQlN5eEZRVUZGTzJkQ1FVTjBRaXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVUU3WjBKQlJUTkNMRTlCUVU4c1IwRkJXU3hEUVVGQk8yRkJRM1JDTzFsQlJVUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVFN1dVRkZjRU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZCTzFsQlJUZENMRTlCUVU4c1MwRkJTeXhEUVVGQk8xRkJRMmhDTEVOQlFVTXNRMEZCUVR0UlFXeFZSeXhKUVVGSkxFMUJRVTBzUzBGQlN5eEpRVUZKTEVWQlFVVTdXVUZEYWtJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHRSRUZCYlVRc1EwRkJReXhEUVVGQk8xTkJRM1pGTzFGQlJVUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVUU3U1VGRGVrSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5JTEVsQlFWY3NVVUZCVVR0UlFVTm1MRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlFUdEpRVU55UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwZ3NTVUZCWXl4TFFVRkxPMUZCUTJZc1QwRkJUeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZCTzBsQlEzUkNMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBnc1NVRkJZeXhMUVVGTExFTkJRVVVzUjBGQlZUdFJRVU16UWl4SlFVRkpMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNSVUZCUlR0WlFVTXhRaXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUTJ4Q0xFbEJRVWtzUzBGQlN5eERRVUZETEhOQ1FVRnpRaXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVU14UXl4RFFVRkJPMWxCUTBRc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUVR0VFFVTnlRanRoUVVGTk8xbEJRMGdzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVFN1dVRkRha0lzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhIUVVGSExFbEJRVWtzUTBGQlFUdFRRVU5zUXp0SlFVTk1MRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU0N4SlFVRlhMRkZCUVZFN1VVRkRaaXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVRTdTVUZEY2tJc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTQ3hKUVVGWExFMUJRVTBzUTBGQlJTeFBRVUZuUXp0UlFVTXZReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUVR0SlFVTXhRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBnc1NVRkJWeXhOUVVGTk8xRkJRMklzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkJPMGxCUTNaQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTQ3hKUVVGWExGRkJRVkU3VVVGRFppeFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVFN1NVRkRla0lzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSUxFbEJRVmNzVTBGQlV6dFJRVU5vUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVUU3U1VGRE1VSXNRMEZCUXp0RFFYRlFTanRCUVVWRUxHVkJRV1VzVTBGQlV5eERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGZvciBET00gbWFuaXB1bGF0aW9uXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vanN4LnRzXCIgLz5cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuZXhwb3J0IGNvbnN0IGZyYWdtZW50ID0gKF8sIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgY29uc3QgZG9jdW1lbnRGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBiaW5kQ2hpbGRyZW4oZG9jdW1lbnRGcmFnbWVudCwgY2hpbGRyZW4pO1xuICAgIHJldHVybiBkb2N1bWVudEZyYWdtZW50O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZyYWdtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm5KaFoyMWxiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdlpuSmhaMjFsYm5RdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPMGRCVVVjN1FVRkRTQ3d5UWtGQk1rSTdRVUZETTBJc2FVTkJRV2xETzBGQlJXcERMRTlCUVU4c1JVRkZTQ3haUVVGWkxFVkJRMllzVFVGQlRTd3JRa0ZCSzBJc1EwRkJRVHRCUVVWMFF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1EwRkRjRUlzUTBGQlZTeEZRVU5XTEVkQlFVY3NVVUZCTWtJc1JVRkRaQ3hGUVVGRk8wbEJRMnhDTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzVVVGQlVTeERRVUZETEhOQ1FVRnpRaXhGUVVGRkxFTkJRVUU3U1VGRk1VUXNXVUZCV1N4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkJPMGxCUlhoRExFOUJRVThzWjBKQlFXZENMRU5CUVVFN1FVRkRNMElzUTBGQlF5eERRVUZCTzBGQlJVUXNaVUZCWlN4UlFVRlJMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZSBtYWluIGRlc3RhZ25hdGUgY2xhc3NcbiAqIEBmaWxlIG1haW4gZmlsZSBmb3IgZGVzdGFnbmF0ZVxuICogQHByZXNlcnZlXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vanN4LnRzXCIgLz5cbmltcG9ydCAqIGFzIF9Db21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBfQ3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgKiBhcyBfQ3JlYXRlRWxlbWVudE5TIGZyb20gXCIuL2NyZWF0ZUVsZW1lbnROU1wiO1xuaW1wb3J0ICogYXMgX0NyZWF0ZVJlZiBmcm9tIFwiLi9jcmVhdGVSZWZcIjtcbmltcG9ydCAqIGFzIF9GcmFnbWVudCBmcm9tIFwiLi9mcmFnbWVudFwiO1xuZXhwb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XG5leHBvcnQgeyBjcmVhdGVSZWYgfSBmcm9tIFwiLi9jcmVhdGVSZWZcIjtcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50TlMgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50TlNcIjtcbmV4cG9ydCB7IGZyYWdtZW50IH0gZnJvbSBcIi4vZnJhZ21lbnRcIjtcbi8qIGVzbGludC1kaXNhYmxlICovXG5leHBvcnQgdmFyIERlU3RhZ25hdGU7XG4oZnVuY3Rpb24gKERlU3RhZ25hdGUpIHtcbiAgICBEZVN0YWduYXRlLkNvbXBvbmVudCA9IF9Db21wb25lbnQuQ29tcG9uZW50O1xuICAgIERlU3RhZ25hdGUuY3JlYXRlUmVmID0gX0NyZWF0ZVJlZi5jcmVhdGVSZWY7XG4gICAgRGVTdGFnbmF0ZS5jcmVhdGVFbGVtZW50ID0gX0NyZWF0ZUVsZW1lbnQuY3JlYXRlRWxlbWVudDtcbiAgICBEZVN0YWduYXRlLmNyZWF0ZUVsZW1lbnROUyA9IF9DcmVhdGVFbGVtZW50TlMuY3JlYXRlRWxlbWVudE5TO1xuICAgIERlU3RhZ25hdGUuZnJhZ21lbnQgPSBfRnJhZ21lbnQuZnJhZ21lbnQ7XG59KShEZVN0YWduYXRlIHx8IChEZVN0YWduYXRlID0ge30pKTtcbi8qIGVzbGludC1lbmFibGUgKi9cbmV4cG9ydCBkZWZhdWx0IERlU3RhZ25hdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenM3UjBGVlJ6dEJRVU5JTERKQ1FVRXlRanRCUVVNelFpeHBRMEZCYVVNN1FVRkZha01zVDBGQlR5eExRVUZMTEZWQlFWVXNUVUZCVFN4aFFVRmhMRU5CUVVFN1FVRkRla01zVDBGQlR5eExRVUZMTEdOQlFXTXNUVUZCVFN4cFFrRkJhVUlzUTBGQlFUdEJRVU5xUkN4UFFVRlBMRXRCUVVzc1owSkJRV2RDTEUxQlFVMHNiVUpCUVcxQ0xFTkJRVUU3UVVGRGNrUXNUMEZCVHl4TFFVRkxMRlZCUVZVc1RVRkJUU3hoUVVGaExFTkJRVUU3UVVGRGVrTXNUMEZCVHl4TFFVRkxMRk5CUVZNc1RVRkJUU3haUVVGWkxFTkJRVUU3UVVGRmRrTXNUMEZCVHl4RlFVRkRMRk5CUVZNc1JVRkJReXhOUVVGTkxHRkJRV0VzUTBGQlFUdEJRVU55UXl4UFFVRlBMRVZCUVUwc1UwRkJVeXhGUVVGRExFMUJRVTBzWVVGQllTeERRVUZCTzBGQlF6RkRMRTlCUVU4c1JVRkJReXhoUVVGaExFVkJRVU1zVFVGQlRTeHBRa0ZCYVVJc1EwRkJRVHRCUVVNM1F5eFBRVUZQTEVWQlFVTXNaVUZCWlN4RlFVRkRMRTFCUVUwc2JVSkJRVzFDTEVOQlFVRTdRVUZEYWtRc1QwRkJUeXhGUVVGRExGRkJRVkVzUlVGQlF5eE5RVUZOTEZsQlFWa3NRMEZCUVR0QlFVVnVReXh2UWtGQmIwSTdRVUZEY0VJc1RVRkJUU3hMUVVGWExGVkJRVlVzUTBGUE1VSTdRVUZRUkN4WFFVRnBRaXhWUVVGVk8wbEJRMVFzYjBKQlFWTXNSMEZCU1N4VlFVRlZMRlZCUVdRc1EwRkJZenRKUVVOMlFpeHZRa0ZCVXl4SFFVRkpMRlZCUVZVc1ZVRkJaQ3hEUVVGak8wbEJSWFpDTEhkQ1FVRmhMRWRCUVVrc1kwRkJZeXhqUVVGc1FpeERRVUZyUWp0SlFVTXZRaXd3UWtGQlpTeEhRVUZKTEdkQ1FVRm5RaXhuUWtGQmNFSXNRMEZCYjBJN1NVRkRia01zYlVKQlFWRXNSMEZCU1N4VFFVRlRMRk5CUVdJc1EwRkJZVHRCUVVOMlF5eERRVUZETEVWQlVHZENMRlZCUVZVc1MwRkJWaXhWUVVGVkxGRkJUekZDTzBGQlEwUXNiVUpCUVcxQ08wRkJSVzVDTEdWQlFXVXNWVUZCVlN4RFFVRkJJbjA9Il0sIm5hbWVzIjpbIl9jcmVhdGVFbGVtZW50IiwiX2NyZWF0ZUVsZW1lbnROUyIsIl9jcmVhdGVSZWYiLCJCYXNlQ29tcG9uZW50IiwiQmFzZSIsIl9Db21wb25lbnQuQ29tcG9uZW50IiwiX0NyZWF0ZVJlZi5jcmVhdGVSZWYiLCJfQ3JlYXRlRWxlbWVudC5jcmVhdGVFbGVtZW50IiwiX0NyZWF0ZUVsZW1lbnROUy5jcmVhdGVFbGVtZW50TlMiLCJfRnJhZ21lbnQuZnJhZ21lbnQiLCJEZVN0YWduYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFPLE1BQU0sR0FBRyxHQUFHLHdEQUFaOztJQ3FGUDs7Ozs7OztJQU9HOztJQUNJLE1BQU0sU0FBUyxHQUFHLENBQ3JCLE9BRHFCLEVBRXJCLEtBRnFCLEVBR3JCLEVBQUUsR0FBRyxLQUhnQixLQUlmO0lBQ04sTUFBSSxLQUFKLEVBQVc7SUFDUCxTQUFLLE1BQU0sQ0FBQyxHQUFE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
