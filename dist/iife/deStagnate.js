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

    const eventNames = ["onFocus", "onBlur", "onFocusIn", "onFocusOut", "onAnimationStart", "onAnimationCancel", "onAnimationEnd", "onAnimationIteration", "onTransitionStart", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onAuxClick", "onClick", "onDblClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOver", "onMouseOut", "onMouseUp"];
    class Events extends Preset {
      constructor() {
        super(...arguments);
        /**
         * Binds event listeners event
         * Do not call manually
         * @pacakge
         */

        this.bindEventListeners = element => {
          this._eventListener(element.addEventListener);
        };
        /**
         * Binds event listeners event
         * Do not call manually
         * @pacakge
         */


        this.unbindEventListeners = element => {
          this._eventListener(element.removeEventListener);
        };

        this._eventListener = eventListener => {
          for (const eventName of eventNames) {
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
        }

        if (val1.length > maxLength || val2.length > maxLength) {
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
          var _a;

          try {
            (_a = this.componentDidUpdate) === null || _a === void 0 ? void 0 : _a.call(this);

            if (this._parent === undefined) {
              throw new Error(`ERROR: code 2. See ${url}.`);
            }

            this.getSnapshotBeforeUpdate(Object.assign({}, this.props), Object.assign({}, this.state));

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
          var _a;

          try {
            (_a = this.componentWillUpdate) === null || _a === void 0 ? void 0 : _a.call(this);

            if (this._parent === undefined) {
              throw new Error(`ERROR: code 2. See ${url}.`);
            }

            this._prevState = Object.assign({}, this._state);
            this.getSnapshotBeforeUpdate(Object.assign({}, this.props), Object.assign({}, this.state));
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
      const fragment = document.createDocumentFragment();
      bindChildren(fragment, children);
      return fragment;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVTdGFnbmF0ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3ByaXZhdGUvX3VybC5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHMuanMiLCIuLi8uLi9saWIvY3JlYXRlRWxlbWVudC5qcyIsIi4uLy4uL2xpYi9jcmVhdGVFbGVtZW50TlMuanMiLCIuLi8uLi9saWIvY3JlYXRlUmVmLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvX2Jhc2UuanMiLCIuLi8uLi9saWIvcHJpdmF0ZS9fZXZlbnRzLmpzIiwiLi4vLi4vbGliL3V0aWxzLmpzIiwiLi4vLi4vbGliL2NvbXBvbmVudC5qcyIsIi4uLy4uL2xpYi9mcmFnbWVudC5qcyIsIi4uLy4uL2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdXJsID0gXCJodHRwczovL2x1a2UtemhhbmctMDQuZ2l0aHViLmlvL0RlU3RhZ25hdGUvZXJyb3ItY29kZXNcIjtcbmV4cG9ydCBkZWZhdWx0IHVybDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgzVnliQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOTFjbXd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExIZEVRVUYzUkN4RFFVRkJPMEZCUlRORkxHVkJRV1VzUjBGQlJ5eERRVUZCSW4wPSIsIi8qKlxuICogQ29tcG9uZW50XG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGZpbGUgc2hhcmUgZnVuY3Rpb25zIGFuZCB0eXBlcyBmb3IgY3JlYXRlRWxlbWVudCBhbmQgaXQncyB2YXJpYW50c1xuICovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50XCI7XG5pbXBvcnQgdXJsIGZyb20gXCIuL191cmxcIjtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gcHJvcHMgLSBwcm9wcyB0byBiaW5kIHdpdGhcbiAqIEBwYXJhbSBucyAtIGlmIG5hbWVzcGFjZSBlbGVtZW50XG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kUHJvcHMgPSAoZWxlbWVudCwgcHJvcHMsIG5zID0gZmFsc2UpID0+IHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwiaW5uZXJIVE1MXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB2YWwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobnMpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBrZXksIHZhbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleS5zbGljZSgwLCAyKSA9PT0gXCJvblwiKSB7IC8vIFdvcmtzIHN1Y2ggYXMgb25DbGljaywgb25BbmltYXRpb25FbmQsIGV0Yy5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh2YWwpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCksIHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSBcInJlZlwiICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mICh2YWwpID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50XCIgaW4gdmFsKSB7XG4gICAgICAgICAgICAgICAgdmFsLmN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7dHlwZW9mIHZhbH0gaXMgbm90IGEgdmFsaWQgRGVTdGFnbmF0ZSBjaGlsZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiB0byBiaW5kIHdpdGhcbiAqIEByZXR1cm5zIHZvaWRcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRDaGlsZHJlbiA9IChlbGVtZW50LCBjaGlsZHJlbikgPT4ge1xuICAgIGlmIChjaGlsZHJlbiAhPT0gbnVsbCAmJiBjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkcmVuID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICB0eXBlb2YgY2hpbGRyZW4gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGRyZW4udG9TdHJpbmcoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuIGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuLmRpZE1vdW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5tb3VudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAzLiBTZWUgJHt1cmx9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4ucGFyZW50ICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucGFyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkcmVuLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lYMk55WldGMFpVVnNaVzFsYm5SVmRHbHNjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOWpjbVZoZEdWRmJHVnRaVzUwVlhScGJITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3TzBkQlVVYzdRVUZGU0N4UFFVRlBMRVZCUVVNc1UwRkJVeXhGUVVGRExFMUJRVTBzWTBGQll5eERRVUZCTzBGQlJYUkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxGRkJRVkVzUTBGQlFUdEJRWGxGZUVJN096czdPenM3UjBGUFJ6dEJRVU5JTEUxQlFVMHNRMEZCUXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhEUVVOeVFpeFBRVUZuUWl4RlFVTm9RaXhMUVVGNVFpeEZRVU42UWl4RlFVRkZMRWRCUVVjc1MwRkJTeXhGUVVOT0xFVkJRVVU3U1VGRFRpeEpRVUZKTEV0QlFVc3NSVUZCUlR0UlFVTlFMRXRCUVVzc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlF6VkRMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1JVRkJSVHRuUWtGRGNFUXNTVUZCU1N4SFFVRkhMRXRCUVVzc1YwRkJWeXhGUVVGRk8yOUNRVU55UWl4UFFVRlBMRU5CUVVNc1UwRkJVeXhIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUVR0cFFrRkRja003Y1VKQlFVMHNTVUZCU1N4RlFVRkZMRVZCUVVVN2IwSkJRMWdzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkJPMmxDUVVOd1JEdHhRa0ZCVFR0dlFrRkRTQ3hQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlFUdHBRa0ZETlVNN1lVRkRTanRwUWtGQlRTeEpRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NSVUZCUlN4RlFVRkZMRGhEUVVFNFF6dG5Ra0ZEYWtZc1NVRkJTU3hQUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NWVUZCVlN4RlFVRkZPMjlDUVVNMVFpeFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRM0JDTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8zbENRVU5RTEZkQlFWY3NSVUZCYjBJc1JVRkRjRU1zUjBGQlowSXNRMEZEYmtJc1EwRkJRVHRwUWtGRFNqdGhRVU5LTzJsQ1FVRk5MRWxCUTBnc1IwRkJSeXhMUVVGTExFdEJRVXM3WjBKQlEySXNUMEZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExGRkJRVkU3WjBKQlEzaENMRk5CUVZNc1NVRkJTU3hIUVVGSExFVkJRMnhDTzJkQ1FVTkhMRWRCUVc5Q0xFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUVR0aFFVTXhRenRwUWtGQlRTeEpRVUZKTEVkQlFVY3NTMEZCU3l4VFFVRlRMRVZCUVVVN1owSkJRekZDTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhQUVVGUExFZEJRVWNzYTBOQlFXdERMRU5CUVVNc1EwRkJRVHRoUVVOb1JUdFRRVU5LTzB0QlEwbzdRVUZEVEN4RFFVRkRMRU5CUVVFN1FVRkZSRHM3T3pzN08wZEJUVWM3UVVGRFNDeE5RVUZOTEVOQlFVTXNUVUZCVFN4WlFVRlpMRWRCUVVjc1EwRkRlRUlzVDBGQllTeEZRVU5pTEZGQlFYVkNMRVZCUTI1Q0xFVkJRVVU3U1VGRFRpeEpRVUZKTEZGQlFWRXNTMEZCU3l4SlFVRkpMRWxCUVVrc1VVRkJVU3hMUVVGTExGTkJRVk1zUlVGQlJUdFJRVU0zUXl4SlFVRkpMRkZCUVZFc1dVRkJXU3hMUVVGTExFVkJRVVU3V1VGRE0wSXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVzFDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUVR0VFFVTXhSVHRoUVVGTkxFbEJRMGdzVDBGQlR5eFJRVUZSTEV0QlFVc3NVVUZCVVR0WlFVTTFRaXhQUVVGUExGRkJRVkVzUzBGQlN5eFJRVUZSTEVWQlF6bENPMWxCUTBVc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVRTdVMEZEY0VVN1lVRkJUU3hKUVVGSkxGRkJRVkVzV1VGQldTeFRRVUZUTEVWQlFVVTdXVUZEZEVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVsQlFVa3NUMEZCVHl4WlFVRlpMRTFCUVUwc1EwRkJReXhYUVVGWExFVkJRVVU3WjBKQlF6ZEVMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVRTdaMEpCUlhaQ0xFOUJRVTA3WVVGRFZEdHBRa0ZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhQUVVGUExGbEJRVmtzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZPMmRDUVVOcVJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkJPMkZCUXk5RE8xbEJSVVFzU1VGQlNTeFJRVUZSTEVOQlFVTXNUVUZCVFN4TFFVRkxMRTlCUVU4c1JVRkJSVHRuUWtGRE4wSXNVVUZCVVN4RFFVRkRMRTFCUVUwc1IwRkJSeXhQUVVGUExFTkJRVUU3WVVGRE5VSTdXVUZGUkN4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVUU3VTBGRGVrSTdZVUZCVFR0WlFVTklMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVRTdVMEZEYUVNN1MwRkRTanRCUVVOTUxFTkJRVU1zUTBGQlFTSjkiLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGZvciBET00gbWFuaXB1bGF0aW9uXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vanN4LnRzXCIgLz5cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiwgYmluZFByb3BzLCB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuLyoqXG4gKlxuICogQHBhcmFtIHRhZ05hbWVPckNvbXBvbmVudCAtIG5hbWUgb2YgSFRNTCBlbGVtZW50IG9yIGZ1bmN0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtIHByb3BzIC0gcHJvcHMgb2YgZWxlbWVudCBvciBjb21wb25lbnRcbiAqIDEuIElmIGB0YWdOYW1lT3JDb21wb25lbnRgIGlzIHRhZ25hbWUsIHByb3BzIGFyZSBlbGVtZW50IHByb3BlcnRpZXMsIHN1Y2ggYXMgY2xhc3MsIGlubmVySFRNTCwgaWQsIHN0eWxlLCBldGNcbiAqIDIuIElmIGB0YWdOYW1lT3JDb21wb25lbnRgIGlzIGEgZnVuY3Rpb24sIHByb3BzIGFyZSB0aGF0IGZ1bmN0aW9ucyBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQuIENhbiBiZSBub3RoaW5nLCBudW1iZXIgKGNvbnZlcnRlZCB0byBzdHJpbmcpLCBzdHJpbmcgKHRleHQpLCBvciBhbm90aGVyIGVsZW1lbnQuIEFuIGFycmF5IG9mIGFueSBvZiB0aGVzZSB3aWxsIGNyZWF0ZSBtdWx0aXBsZSBjaGlsZHJlblxuICogQHBhcmFtIGNoaWxkcmVuQXJncyAtIHJlc3QgcGFyYW1ldGVyIGZvciBjaGlsZHJlblxuICogQHJldHVybnMgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lT3JDb21wb25lbnQsIHByb3BzLCAuLi5jaGlsZHJlbikge1xuICAgIGlmICh0eXBlb2YgKHRhZ05hbWVPckNvbXBvbmVudCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZU9yQ29tcG9uZW50KTtcbiAgICAgICAgYmluZFByb3BzKGVsZW1lbnQsIHByb3BzKTtcbiAgICAgICAgYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiAodGFnTmFtZU9yQ29tcG9uZW50KSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiB0YWdOYW1lT3JDb21wb25lbnQocHJvcHMsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIEVycm9yKFwidGFnTmFtZU9yQ29tcG9uZW50IGlzIG9mIGludmFsaWQgdHlwZS5cIik7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxSV3hsYldWdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlqY21WaGRHVkZiR1Z0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdPenRIUVZGSE8wRkJRMGdzTWtKQlFUSkNPMEZCUXpOQ0xHbERRVUZwUXp0QlFVVnFReXhQUVVGUExFVkJSMGdzV1VGQldTeEZRVU5hTEZOQlFWTXNSMEZEV2l4TlFVRk5MQ3RDUVVFclFpeERRVUZCTzBGQmJVTjBRenM3T3pzN096czdPMGRCVTBjN1FVRkRTQ3hOUVVGTkxGVkJRVlVzWVVGQllTeERRVWw2UWl4clFrRkhXU3hGUVVOYUxFdEJRVFpDTEVWQlF6ZENMRWRCUVVjc1VVRkJNa0k3U1VGRk9VSXNTVUZCU1N4UFFVRk5MRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTMEZCU3l4UlFVRlJMRVZCUVVVN1VVRkRla01zVFVGQlRTeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkJPMUZCUlRGRUxGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCTUVJc1EwRkJReXhEUVVGQk8xRkJSVGxETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVUU3VVVGRkwwSXNUMEZCVHl4UFFVRlBMRU5CUVVFN1MwRkRha0k3VTBGQlRTeEpRVUZKTEU5QlFVMHNRMEZCUXl4clFrRkJhMElzUTBGQlF5eExRVUZMTEZWQlFWVXNSVUZCUlR0UlFVTnNSQ3hQUVVGUExHdENRVUZyUWl4RFFVRkRMRXRCUVZVc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlFUdExRVU5zUkR0SlFVVkVMRTlCUVU4c1MwRkJTeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVFN1FVRkRNVVFzUTBGQlF6dEJRVVZFTEdWQlFXVXNZVUZCWVN4RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudE5TIGNyZWF0ZUVsZW1lbnQgZm9yIG5hbWVzcGFjZWQgZWxlbWVudHNcbiAqL1xuaW1wb3J0IHsgYmluZENoaWxkcmVuLCBiaW5kUHJvcHMsIH0gZnJvbSBcIi4vcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBjaGlsZCBlbGVtZW50IHRvIGRlU3RhZ25hdGVcbiAqIEBwYXJhbSBuYW1lc3BhY2VVUkkgLSBuYW1lc3BhY2UgdXJpXG4gKiBAcGFyYW0gdGFnTmFtZSAtIG5hbWUgb2YgSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0gcHJvcHMgLSBlbGVtZW50IHByb3BlcnRpZXMsIHN1Y2ggYXMgY2xhc3MsIGlubmVySFRNTCwgaWQsIHN0eWxlLCBldGNcbiAqIEBwYXJhbSBjaGlsZHJlbiAtIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudC4gQ2FuIGJlIG5vdGhpbmcsIG51bWJlciAoY29udmVydGVkIHRvIHN0cmluZyksIHN0cmluZyAodGV4dCksIG9yIGFub3RoZXIgZWxlbWVudC4gQW4gYXJyYXkgb2YgYW55IG9mIHRoZXNlIHdpbGwgY3JlYXRlIG11bHRpcGxlIGNoaWxkcmVuXG4gKiBAcGFyYW0gY2hpbGRyZW5SZXN0IC0gcmVzdCBwYXJhbWV0ZXIgb2YgY2hpbGRyZW5cbiAqIEByZXR1cm5zIGh0bWwgZWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudE5TID0gKG5hbWVzcGFjZVVSSSwgdGFnTmFtZSwgcHJvcHMsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHRhZ05hbWUpO1xuICAgIGJpbmRQcm9wcyhlbGVtZW50LCBwcm9wcywgdHJ1ZSk7XG4gICAgYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50TlM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFJXeGxiV1Z1ZEU1VExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMk55WldGMFpVVnNaVzFsYm5ST1V5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3UjBGUlJ6dEJRVVZJTEU5QlFVOHNSVUZGU0N4WlFVRlpMRVZCUTFvc1UwRkJVeXhIUVVOYUxFMUJRVTBzSzBKQlFTdENMRU5CUVVFN1FVRkZkRU03T3pzN096czdPMGRCVVVjN1FVRkRTQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeGxRVUZsTEVkQlFVY3NRMEZETTBJc1dVRkJLMGNzUlVGREwwY3NUMEZCTUVNc1JVRkRNVU1zUzBGQmQwTXNSVUZEZUVNc1IwRkJSeXhSUVVFeVFpeEZRVU4yUWl4RlFVRkZPMGxCUTFRc1RVRkJUU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVUU3U1VGRkwwUXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVRTdTVUZGTDBJc1dVRkJXU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUVR0SlFVVXZRaXhQUVVGUExFOUJRVThzUTBGQlFUdEJRVU5zUWl4RFFVRkRMRU5CUVVFN1FVRkZSQ3hsUVVGbExHVkJRV1VzUTBGQlFTSjkiLCIvKipcbiAqIENyZWF0ZXMgYSByZWZlcmVuY2UgZm9yIGEgbmVzdGVkIGNvbXBvbmVudFxuICogQHJldHVybnMgZW1wdHkgcmVmIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmID0gKCkgPT4gKHtcbiAgICBjdXJyZW50OiBudWxsLFxufSk7XG4vKipcbiAqIENyZWF0ZXMgYSByZWZlcmVuY2UgZm9yIGEgbmVzdGVkIGNvbXBvbmVudFxuICogQHJldHVybnMgZW1wdHkgcmVmIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWY7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFVtVm1MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOeVpXRjBaVkpsWmk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRmxRVHM3TzBkQlIwYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQmQwTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRha1VzVDBGQlR5eEZRVUZGTEVsQlFVazdRMEZEYUVJc1EwRkJReXhEUVVGQk8wRkJSVVk3T3p0SFFVZEhPMEZCUTBnc1pVRkJaU3hUUVVGVExFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIFByZXNldCAtIGJhc2UgZm9yIGEgY29tcG9uZW50XG4gKiBAcGFja2FnZVxuICovXG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgX2NyZWF0ZUVsZW1lbnROUyB9IGZyb20gXCIuLi9jcmVhdGVFbGVtZW50TlNcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgX2NyZWF0ZVJlZiB9IGZyb20gXCIuLi9jcmVhdGVSZWZcIjtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHNcbiAqL1xuZXhwb3J0IGNsYXNzIFByZXNldCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCA9IF9jcmVhdGVFbGVtZW50O1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnROUyA9IF9jcmVhdGVFbGVtZW50TlM7XG4gICAgICAgIHRoaXMuY3JlYXRlUmVmID0gX2NyZWF0ZVJlZjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB3aGVuIGNvbXBvbmVudCBjYXRjaGVzIGVycm9yLiBEZWZhdWx0IGJlaGF2aW91ciBpcyBjb25zb2xlLmVycm9yXG4gICAgICAgICAqIEBwYXJhbSBlcnJvciAtIGVycm9yIG9iamVjdCB3aXRoIGluZm9cbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaCA9IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgYmVmb3JlIGNvbXBvbmVudCBpcyB1cGRhdGVkXG4gICAgICAgICAqIEByZXR1cm5zIHdoZXRoZXIgb3Igbm90IGNvbXBvbmVudCBzaG91bGQgdXBkYXRlL3JlLXJlbmRlclxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSAoKSA9PiB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVuZGVyaW5nIEhUTUwsIG11c3QgYmUgcGFydCBvZiBleHRlbmRlZCBjbGFzc1xuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICogQHJldHVybnMgaWYgcmV0dXJucyBudWxsIGVycm9yIHdpbGwgYmUgdGhyb3duXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlbmRlciA9ICgpID0+IG51bGw7XG4gICAgfVxufVxuUHJlc2V0LmNyZWF0ZUVsZW1lbnQgPSBfY3JlYXRlRWxlbWVudDtcblByZXNldC5jcmVhdGVFbGVtZW50TlMgPSBfY3JlYXRlRWxlbWVudE5TO1xuUHJlc2V0LmNyZWF0ZVJlZiA9IF9jcmVhdGVSZWY7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lYMkpoYzJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Y0hKcGRtRjBaUzlmWW1GelpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3TzBkQlUwYzdRVUZGU0N4UFFVRlBMRVZCUVVNc1QwRkJUeXhKUVVGSkxHTkJRV01zUlVGQlF5eE5RVUZOTEd0Q1FVRnJRaXhEUVVGQk8wRkJRekZFTEU5QlFVOHNSVUZCUXl4UFFVRlBMRWxCUVVrc1owSkJRV2RDTEVWQlFVTXNUVUZCVFN4dlFrRkJiMElzUTBGQlFUdEJRVU01UkN4UFFVRlBMRVZCUVVNc1QwRkJUeXhKUVVGSkxGVkJRVlVzUlVGQlF5eE5RVUZOTEdOQlFXTXNRMEZCUVR0QlFXbERiRVFzTUVKQlFUQkNPMEZCUXpGQ096dEhRVVZITzBGQlEwZ3NUVUZCVFN4UFFVRm5RaXhOUVVGTk8wbEJRVFZDTzFGQlVXOUNMR3RDUVVGaExFZEJRVWNzWTBGQll5eERRVUZCTzFGQlJUbENMRzlDUVVGbExFZEJRVWNzWjBKQlFXZENMRU5CUVVFN1VVRkZiRU1zWTBGQlV5eEhRVUZITEZWQlFWVXNRMEZCUVR0UlFVVjBRenM3T3p0WFFVbEhPMUZCUTBrc2MwSkJRV2xDTEVkQlFVY3NRMEZCUXl4TFFVRlpMRVZCUVZFc1JVRkJSU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVFN1VVRkZka1U3T3p0WFFVZEhPMUZCUTBrc01FSkJRWEZDTEVkQlFVY3NSMEZCV1N4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGQk8xRkJSV3hFT3pzN096czdWMEZOUnp0UlFVTmhMRmRCUVUwc1IwRkJSeXhIUVVGbExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVRTdTVUZGYmtRc1EwRkJRenM3UVVGc1F6QkNMRzlDUVVGaExFZEJRVWNzWTBGQll5eERRVUZCTzBGQlJUbENMSE5DUVVGbExFZEJRVWNzWjBKQlFXZENMRU5CUVVFN1FVRkZiRU1zWjBKQlFWTXNSMEZCUnl4VlFVRlZMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBFdmVudHNcbiAqIEBwYWNrYWdlXG4gKi9cbmltcG9ydCB7IFByZXNldCBhcyBCYXNlQ29tcG9uZW50IH0gZnJvbSBcIi4vX2Jhc2VcIjtcbmNvbnN0IGV2ZW50TmFtZXMgPSBbXG4gICAgXCJvbkZvY3VzXCIsXG4gICAgXCJvbkJsdXJcIixcbiAgICBcIm9uRm9jdXNJblwiLFxuICAgIFwib25Gb2N1c091dFwiLFxuICAgIFwib25BbmltYXRpb25TdGFydFwiLFxuICAgIFwib25BbmltYXRpb25DYW5jZWxcIixcbiAgICBcIm9uQW5pbWF0aW9uRW5kXCIsXG4gICAgXCJvbkFuaW1hdGlvbkl0ZXJhdGlvblwiLFxuICAgIFwib25UcmFuc2l0aW9uU3RhcnRcIixcbiAgICBcIm9uVHJhbnNpdGlvbkNhbmNlbFwiLFxuICAgIFwib25UcmFuc2l0aW9uRW5kXCIsXG4gICAgXCJvblRyYW5zaXRpb25SdW5cIixcbiAgICBcIm9uQXV4Q2xpY2tcIixcbiAgICBcIm9uQ2xpY2tcIixcbiAgICBcIm9uRGJsQ2xpY2tcIixcbiAgICBcIm9uTW91c2VEb3duXCIsXG4gICAgXCJvbk1vdXNlRW50ZXJcIixcbiAgICBcIm9uTW91c2VMZWF2ZVwiLFxuICAgIFwib25Nb3VzZU1vdmVcIixcbiAgICBcIm9uTW91c2VPdmVyXCIsXG4gICAgXCJvbk1vdXNlT3V0XCIsXG4gICAgXCJvbk1vdXNlVXBcIixcbl07XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50cyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQmluZHMgZXZlbnQgbGlzdGVuZXJzIGV2ZW50XG4gICAgICAgICAqIERvIG5vdCBjYWxsIG1hbnVhbGx5XG4gICAgICAgICAqIEBwYWNha2dlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJpbmRFdmVudExpc3RlbmVycyA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kcyBldmVudCBsaXN0ZW5lcnMgZXZlbnRcbiAgICAgICAgICogRG8gbm90IGNhbGwgbWFudWFsbHlcbiAgICAgICAgICogQHBhY2FrZ2VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnMgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcihlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sRXZlbnROYW1lID0gZXZlbnROYW1lLnNsaWNlKDIpLnRvTG93ZXJDYXNlKCksIGNhbGxiYWNrID0gdGhpc1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRMaXN0ZW5lcihodG1sRXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgyVjJaVzUwY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3Y21sMllYUmxMMTlsZG1WdWRITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3p0SFFWTkhPMEZCUlVnc1QwRkJUeXhGUVVGRExFMUJRVTBzU1VGQlNTeGhRVUZoTEVWQlFVTXNUVUZCVFN4VFFVRlRMRU5CUVVFN1FVRlpMME1zVFVGQlRTeFZRVUZWTEVkQlFYRkNPMGxCUTJwRExGTkJRVk03U1VGRFZDeFJRVUZSTzBsQlExSXNWMEZCVnp0SlFVTllMRmxCUVZrN1NVRkRXaXhyUWtGQmEwSTdTVUZEYkVJc2JVSkJRVzFDTzBsQlEyNUNMR2RDUVVGblFqdEpRVU5vUWl4elFrRkJjMEk3U1VGRGRFSXNiVUpCUVcxQ08wbEJRMjVDTEc5Q1FVRnZRanRKUVVOd1FpeHBRa0ZCYVVJN1NVRkRha0lzYVVKQlFXbENPMGxCUTJwQ0xGbEJRVms3U1VGRFdpeFRRVUZUTzBsQlExUXNXVUZCV1R0SlFVTmFMR0ZCUVdFN1NVRkRZaXhqUVVGak8wbEJRMlFzWTBGQll6dEpRVU5rTEdGQlFXRTdTVUZEWWl4aFFVRmhPMGxCUTJJc1dVRkJXVHRKUVVOYUxGZEJRVmM3UTBGRFpDeERRVUZCTzBGQmNVaEVMREJDUVVFd1FqdEJRVU14UWl4TlFVRk5MRTlCUVdkQ0xFMUJRVThzVTBGQlVTeGhRVUZoTzBsQlFXeEVPenRSUVVWSk96czdPMWRCU1VjN1VVRkRaMElzZFVKQlFXdENMRWRCUVVjc1EwRkJReXhQUVVGdlFpeEZRVUZSTEVWQlFVVTdXVUZEYmtVc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlFUdFJRVU5xUkN4RFFVRkRMRU5CUVVFN1VVRkZSRHM3T3p0WFFVbEhPMUZCUTJkQ0xIbENRVUZ2UWl4SFFVRkhMRU5CUVVNc1QwRkJiMElzUlVGQlVTeEZRVUZGTzFsQlEzSkZMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zVDBGQlR5eERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVUU3VVVGRGNFUXNRMEZCUXl4RFFVRkJPMUZCUlU4c2JVSkJRV01zUjBGQlJ5eERRVUZETEdGQlFUUkNMRVZCUVZFc1JVRkJSVHRaUVVNMVJDeExRVUZMTEUxQlFVMHNVMEZCVXl4SlFVRkpMRlZCUVZVc1JVRkJSVHRuUWtGRGFFTXNUVUZCVFN4aFFVRmhMRWRCUVVjc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkRiRVFzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRVHRuUWtGRk9VSXNTVUZCU1N4UlFVRlJMRXRCUVVzc1UwRkJVeXhKUVVGSkxGRkJRVkVzV1VGQldTeFJRVUZSTEVWQlFVVTdiMEpCUTNoRUxHRkJRV0VzUTBGQlF5eGhRVUZoTEVWQlFVVXNVVUZCT0VNc1EwRkJReXhEUVVGQk8ybENRVU12UlR0aFFVTktPMUZCUTB3c1EwRkJReXhEUVVGQk8wbEJSVXdzUTBGQlF6dERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIFV0aWxzIC0gdXRpbGl0aWVzIGZvciBEZVN0YWduYXRlXG4gKi9cbi8qKlxuICogQ2hlY2tzIGlmIHZhbDEgYW5kIHZhbDIgYXJlIGVxdWFsXG4gKiBAcGFyYW0gdmFsMSAtIHZhbHVlIHRvIGNoZWNrIGZvciBlcXVhbGl0eVxuICogQHBhcmFtIHZhbDIgLSB2YWx1ZSB0byBjb21wYXJlIGFnYWluc3QgdmFsMVxuICogQHBhcmFtIG1heERlcHRoIC0gbWF4IHJlY3Vyc2lvbiBkZXB0aCB0byBjcmF3bCBhbiBvYmplY3QuIEFmdGVyIG1heCBkZXB0aCBpc1xuICogcmVhY2hlZCwgdGhlIHR3byB2YWx1ZXMgYXJlIHNpbXBseSBjb21wYXJlZCB3aXRoIGA9PT1gXG4gKiBAcGFyYW0gbWF4TGVuZ3RoIC0gbWF4IGxlbmd0aCBvZiBhcnJheSB0byBjcmF3bC4gSWYgbWF4IGxlbnRoIGlzIHJlYWNoZWQsIHR3b1xuICogYXJyYXlzIHdpbGwgc2ltcGx5IGJlIGNvbXBhcmVkIHdpdGggYD09PWBcbiAqIEByZXR1cm5zIGB2YWwxID09PSB2YWwyYFxuICovXG5leHBvcnQgY29uc3QgaXNFcXVhbCA9ICh2YWwxLCB2YWwyLCBtYXhEZXB0aCA9IDMsIG1heExlbmd0aCA9IDEwKSA9PiB7XG4gICAgaWYgKG1heERlcHRoID09PSAwKSB7IC8vIElmIG1heERlcHRoIHJlYWNoZWQsIGp1c3QgcnVuID09PVxuICAgICAgICByZXR1cm4gdmFsMSA9PT0gdmFsMjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbDEgIT09IHR5cGVvZiB2YWwyKSB7IC8vIElmIHRoZXkgYXJlbid0IHRoZSBzYW1lIHR5cGUsIHJldHVybiBmYWxzZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh2YWwxIGluc3RhbmNlb2YgQXJyYXkgJiYgdmFsMiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGlmICh2YWwxLmxlbmd0aCAhPT0gdmFsMi5sZW5ndGgpIHsgLy8gSWYgYXJyYXlzIGhhdmUgZGlmZmVyZW50IGxlbmd0aHNcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsMS5sZW5ndGggPiBtYXhMZW5ndGggfHwgdmFsMi5sZW5ndGggPiBtYXhMZW5ndGgpIHsgLy8gSWYgYXJyYXkgaXMgdG9vIGJpZ1xuICAgICAgICAgICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbDEubGVuZ3RoOyBpbmRleCsrKSB7IC8vIEdvIHRocm91Z2ggZWFjaCBpdGVtXG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsMVtpbmRleF0sIHZhbDJbaW5kZXhdLCBtYXhEZXB0aCAtIDEsIG1heExlbmd0aCkpIHsgLy8gVGVzdCBpZiB0d28gYXJyYXkgaXRlbXMgYXJlIGVxdWFsXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwxIGluc3RhbmNlb2YgT2JqZWN0ICYmIHZhbDIgaW5zdGFuY2VvZiBPYmplY3QpIHsgLy8gSWYgb2JqZWN0XG4gICAgICAgIGlmICghaXNFcXVhbChPYmplY3Qua2V5cyh2YWwxKSwgT2JqZWN0LmtleXModmFsMiksIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkgeyAvLyBJZiB0aGV5IGRvbid0IGhhdmUgaGUgc2FtZSBrZXlzXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModmFsMSkpIHsgLy8gR28gdGhyb3VnaCBhbmQgdGVzdCBlYWNoIHZhbHVlXG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsMVtrZXldLCB2YWwyW2tleV0sIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGlzRXF1YWwsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12ZFhScGJITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3TzBkQlVVYzdRVUZGU0RzN096czdPenM3TzBkQlUwYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hQUVVGUExFZEJRVWNzUTBGRGJrSXNTVUZCWVN4RlFVTmlMRWxCUVdFc1JVRkRZaXhSUVVGUkxFZEJRVWNzUTBGQlF5eEZRVU5hTEZOQlFWTXNSMEZCUnl4RlFVRkZMRVZCUTFBc1JVRkJSVHRKUVVOVUxFbEJRVWtzVVVGQlVTeExRVUZMTEVOQlFVTXNSVUZCUlN4RlFVRkZMRzlEUVVGdlF6dFJRVU4wUkN4UFFVRlBMRWxCUVVrc1MwRkJTeXhKUVVGSkxFTkJRVUU3UzBGRGRrSTdVMEZCVFN4SlFVRkpMRTlCUVU4c1NVRkJTU3hMUVVGTExFOUJRVThzU1VGQlNTeEZRVUZGTEVWQlFVVXNOa05CUVRaRE8xRkJRMjVHTEU5QlFVOHNTMEZCU3l4RFFVRkJPMHRCUTJZN1NVRkZSQ3hKUVVGSkxFbEJRVWtzV1VGQldTeExRVUZMTEVsQlFVa3NTVUZCU1N4WlFVRlpMRXRCUVVzc1JVRkJSVHRSUVVOb1JDeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEcxRFFVRnRRenRaUVVOc1JTeFBRVUZQTEV0QlFVc3NRMEZCUVR0VFFVTm1PMUZCUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEZOQlFWTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExGTkJRVk1zUlVGQlJTeEZRVUZGTEhOQ1FVRnpRanRaUVVNNVJTeFBRVUZQTEVsQlFVa3NTMEZCU3l4SlFVRkpMRU5CUVVFN1UwRkRka0k3VVVGRlJDeExRVUZMTEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1JVRkJSU3hGUVVGRkxIVkNRVUYxUWp0WlFVTjJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVXNVVUZCVVN4SFFVRkhMRU5CUVVNc1JVRkJSU3hUUVVGVExFTkJRVU1zUlVGQlJTeEZRVUZGTEc5RFFVRnZRenRuUWtGRGJrY3NUMEZCVHl4TFFVRkxMRU5CUVVFN1lVRkRaanRUUVVOS08xRkJSVVFzVDBGQlR5eEpRVUZKTEVOQlFVRTdTMEZEWkR0VFFVRk5MRWxCUVVrc1NVRkJTU3haUVVGWkxFMUJRVTBzU1VGQlNTeEpRVUZKTEZsQlFWa3NUVUZCVFN4RlFVRkZMRVZCUVVVc1dVRkJXVHRSUVVOMlJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVTlNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlEycENMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlEycENMRkZCUVZFc1IwRkJSeXhEUVVGRExFVkJRMW9zVTBGQlV5eERRVU5hTEVWQlFVVXNSVUZCUlN4clEwRkJhME03V1VGRGJrTXNUMEZCVHl4TFFVRkxMRU5CUVVFN1UwRkRaanRSUVVWRUxFdEJRVXNzVFVGQlRTeEhRVUZITEVsQlFVa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEdsRFFVRnBRenRaUVVkd1JTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVTlFMRWxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGRGFrSXNTVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVOc1FpeFJRVUZSTEVkQlFVY3NRMEZCUXl4RlFVTmFMRk5CUVZNc1EwRkRXaXhGUVVGRk8yZENRVU5ETEU5QlFVOHNTMEZCU3l4RFFVRkJPMkZCUTJZN1UwRkRTanRSUVVWRUxFOUJRVThzU1VGQlNTeERRVUZCTzB0QlEyUTdTVUZGUkN4UFFVRlBMRWxCUVVrc1MwRkJTeXhKUVVGSkxFTkJRVUU3UVVGRGVFSXNRMEZCUXl4RFFVRkJPMEZCUlVRc1pVRkJaVHRKUVVOWUxFOUJRVTg3UTBGRFZpeERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIERlU3RhZ25hdGUgbWFpbiBkZXN0YWduYXRlIGNsYXNzXG4gKiBAZmlsZSBEZVN0YWduYXRlIGNvbXBvbmVudCBjbGFzc1xuICogQHByZXNlcnZlXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1saW5lcyAqL1xuaW1wb3J0IHsgRXZlbnRzIGFzIEJhc2UgfSBmcm9tIFwiLi9wcml2YXRlL19ldmVudHNcIjtcbmltcG9ydCB1cmwgZnJvbSBcIi4vcHJpdmF0ZS9fdXJsXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQGNsYXNzZGVzYyBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjbGFzc1xuICogQG5hbWVzcGFjZVxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgY2xhc3MgY29tcG9uZW50XG4gICAgICogQHBhcmFtIHBhcmVudCAtIHBhcmVudCBvZiB0aGlzIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSBlbGVtZW50IHByb3BlcnRpZXM7IHdvcmtzIGxpa2UgUmVhY3QgUHJvcHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXRlIG9mIGNvbXBvbmVudC4gV29ya3Mgc2ltaWxhciBSZWFjdCBTdGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7fTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGluaXRpYWwgc3RhdGUgd2FzIHNldCBpbiBpbml0aWFsaXplclxuICAgICAgICAgKiBEbyBub3QgdGhyb3cgZXJyb3Igd2l0aCBkaXJlY3Qgc3RhdGUgc2V0dGluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBjb21wb25lbnQgaXMgbW91bnRlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZGlkTW91bnQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmNlcyBhIGNvbXBvbmVudCB0byB1cGRhdGVcbiAgICAgICAgICogRm9sbG93cyB0aGUgc2FtZSBjb21wb25lbnQgdXBkYXRpbmcgcHJvY2VkdXJlIGFzIHNldFN0YXRlIHdpdGhvdXQgbW9kaWZ5aW5nIHN0YXRlXG4gICAgICAgICAqIEByZXR1cm5zIHJldHVybnMgZXJyb3IgaWYgZXJyb3IgaXMgdGhyb3duXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh0aGlzLl9leGVjUmVuZGVyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2tzIGlmIHRoZSBzdGF0ZSBjaGFuZ2VkIGZyb20gdGhlIHByZXZpb3VzIHN0YXRlLiBDYW4gbWUgYXR0YWNoZWQgdG9cbiAgICAgICAgICogYHNob3VsZENvbXBvbmVudFVwZGF0ZWBcbiAgICAgICAgICogQHBhcmFtIGtleXMgLSBsaXN0IG9mIGtleXMgdG8gY3Jhd2wuIElmIGxlZnQgdW5kZWZpbmVkIChkZWZhdWx0KSB0aGVuXG4gICAgICAgICAqIHVzZSBhbGwga2V5cy4gU2hvdWxkIGJlIGBrZXlvZiBTdGF0ZWAsIGJ1dCB0aGVyZSB3ZXJlIHNvbWUgVHlwZXNjcmlwdFxuICAgICAgICAgKiB0cm91Ymxlcy5cbiAgICAgICAgICogQHBhcmFtIG1heERlcHRoIC0gbWF4IHJlY3Vyc2lvbiBkZXB0aCB0byBjcmF3bCBhbiBvYmplY3QuIEFmdGVyIG1heCBkZXB0aFxuICAgICAgICAgKiBpcyByZWFjaGVkLCB0aGUgdHdvIHZhbHVlcyBhcmUgc2ltcGx5IGNvbXBhcmVkIHdpdGggYD09PWBcbiAgICAgICAgICogQHBhcmFtIG1heExlbmd0aCAtIG1heCBsZW5ndGggb2YgYXJyYXkgdG8gY3Jhd2wuIElmIG1heCBsZW50aCBpcyByZWFjaGVkLFxuICAgICAgICAgKiB0d28gYXJyYXlzIHdpbGwgc2ltcGx5IGJlIGNvbXBhcmVkIHdpdGggYD09PWBcbiAgICAgICAgICogQHJldHVybnMgYHZhbDEgPT09IHZhbDJgXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlRGlkQ2hhbmdlID0gKGtleXMsIG1heERlcHRoID0gMywgbWF4TGVuZ3RoID0gMTUpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChrZXlzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXV0aWxzLmlzRXF1YWwodGhpcy5fc3RhdGUsIHRoaXMuX3ByZXZTdGF0ZSwgbWF4RGVwdGgsIG1heExlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHt9LCBwcmV2U3RhdGUgPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gdGhpcy5fc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGVba2V5XSA9IChfYSA9IHRoaXMuX3ByZXZTdGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIXV0aWxzLmlzRXF1YWwoc3RhdGUsIHByZXZTdGF0ZSwgbWF4RGVwdGgsIG1heExlbmd0aCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHN0YXRlXG4gICAgICAgICAqIEBwYXJhbSBvYmogLSBzdGF0ZSB0byBzZXRcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSA9IChvYmopID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9zdGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSkpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fc3RhdGUsIG9iaik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVuZGVyZWRDb250ZW50ID0gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUoKVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2V4ZWNSZW5kZXIoKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGUocmVuZGVyZWRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZywgbWF4LWxlbiAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdGlhbCBtb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHBhcmFtIHBhcmVudCAtIHBhcmVudCBlbGVtZW50IHRvIG1vdW50IHdpdGg7IG9wdGlvbmFsXG4gICAgICAgICAqIEByZXR1cm5zIC0gcmVzdWx0IG9mIGFwcGVuZCBjaGlsZCB0byBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VudENvbXBvbmVudCA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbE1vdW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMy4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnModGhpcy5fcGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRNb3VudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5jb21wb25lbnREaWRNb3VudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuZm9yRWFjaCgoY2hpbGQpID0+IGZyYWdtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsIG1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcmV0dXJucyAtIHJlc3VsdCBvZiBhcHBlbmQgY2hpbGQgdG8gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91bnQgPSB0aGlzLm1vdW50Q29tcG9uZW50O1xuICAgICAgICAvKipcbiAgICAgICAgICogVW5tb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHJldHVybnMgLSB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVubW91bnRDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnModGhpcy5fcGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZE1vdW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVubW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEByZXR1cm5zIC0gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bm1vdW50ID0gdGhpcy51bm1vdW50Q29tcG9uZW50O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4sIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmcgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgY2hpbGRyZW4gZnJvbSB0aGlzLl9wYXJlbnRcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9wYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9wYXJlbnQubGFzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeGVjdXRlcyBuZXcgcmVuZGVyXG4gICAgICAgICAqIEByZXR1cm5zIHJlbmRlcmVkIGNvbnRlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2V4ZWNSZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbigpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGVzIHRoZSBjb21wb25lbnRcbiAgICAgICAgICogQHBhcmFtIHJlbmRlcmVkQ29udGVudCAtIHJlbmRlcmVkIGNvbnRlbnQgZnJvbSBleGVjdXRpbmcgdGhlIHJlbmRlciBmdW5jdGlvblxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl91cGRhdGUgPSAocmVuZGVyZWRDb250ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZENvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiByZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gdGhpcy5fcGFyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVuZGVyZWRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5fcGFyZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYXBwZW5kQ2hpbGQocmVuZGVyZWRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAoX2MgPSB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2hhbmRsZUVycm9yID0gKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaChlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihTdHJpbmcoZXJyKSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyZW50IGlzIG51bGwsIGV4cGVjdGVkIEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBnZXRTdGF0ZSBnZXR0ZXIgYXMgdGhpcy5zdGF0ZSBpdHNlbGYgaXMgcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMgY29tcG9uZW50IHN0YXRlXG4gICAgICovXG4gICAgZ2V0IGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGNvbXBvbmVudCBzdGF0ZVxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqIFdBUk46IGRvIG5vdCB1c2UgdGhpcyBtZXRob2QgdG8gbXV0YXRlIHRoZSBzdGF0ZSBkaXJlY3RseVxuICAgICAqIEBwYXJhbSBvYmogLSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBzZXQgc3RhdGUob2JqKSB7XG4gICAgICAgIGlmICh0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2gobmV3IEVycm9yKGBFUlJPUjogY29kZSAxLiBTZWUgJHt1cmx9LmApKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gb2JqO1xuICAgICAgICAgICAgdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgZ2V0UHJvcHMgZ2V0dGVyIGFzIHRoaXMucHJvcHMgaXRzZWxmIGlzIHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBwcm9wc1xuICAgICAqL1xuICAgIGdldCBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcGFyZW50IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBwYXJlbnQgZWxlbWVudFxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXQgcGFyZW50KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEByZXR1cm5zIHBhcmVudFxuICAgICAqL1xuICAgIGdldCBwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBkaWRNb3VudCB2YWx1ZSBwdWJsaWNseVxuICAgICAqIEByZXR1cm5zIGlmIG1vdW50ZWRcbiAgICAgKi9cbiAgICBnZXQgZGlkTW91bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaWRNb3VudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJldmlvdXMgc3RhdGUuIFVuZGVmaW5lZCBpZiBubyBwcmV2aW91cyBzdGF0ZSBleGlzdHNcbiAgICAgKiBAcmV0dXJucyBwcmV2aW91cyBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBwcmV2U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmV2U3RhdGU7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyTnZiWEJ2Ym1WdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3p0SFFWVkhPMEZCUTBnc09FSkJRVGhDTzBGQlJUbENMRTlCUVU4c1JVRkJReXhOUVVGTkxFbEJRVWtzU1VGQlNTeEZRVUZETEUxQlFVMHNiVUpCUVcxQ0xFTkJRVUU3UVVGRmFFUXNUMEZCVHl4SFFVRkhMRTFCUVUwc1owSkJRV2RDTEVOQlFVRTdRVUZEYUVNc1QwRkJUeXhMUVVGTExFMUJRVTBzVTBGQlV5eERRVUZCTzBGQmJVSXpRanM3T3pzN08wZEJUVWM3UVVGRFNDeE5RVUZOTEU5QlFXZENMRk5CUjNCQ0xGTkJRVkVzU1VGQlNUdEpRVFJDVmpzN096dFBRVWxITzBsQlEwZ3NXVUZCYjBJc1RVRkJNa0lzUlVGQldTeExRVUZoTzFGQlEzQkZMRXRCUVVzc1JVRkJSU3hEUVVGQk8xRkJSR2RFTEZWQlFVc3NSMEZCVEN4TFFVRkxMRU5CUVZFN1VVRXZRbmhGT3p0WFFVVkhPMUZCUTBzc1YwRkJUU3hIUVVGVkxFVkJRVmNzUTBGQlFUdFJRVVZ1UXpzN08xZEJSMGM3VVVGRFN5eDNRa0ZCYlVJc1IwRkJSeXhMUVVGTExFTkJRVUU3VVVGUGJrTTdPMWRCUlVjN1VVRkRTeXhqUVVGVExFZEJRVWNzUzBGQlN5eERRVUZCTzFGQlowZDZRanM3T3p0WFFVbEhPMUZCUTJFc1owSkJRVmNzUjBGQlJ5eEhRVUZwUWl4RlFVRkZPenRaUVVNM1F5eEpRVUZKTzJkQ1FVTkJMRTFCUVVFc1NVRkJTU3hEUVVGRExHdENRVUZyUWl3clEwRkJka0lzU1VGQlNTeEZRVUYxUWp0blFrRkZNMElzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4TFFVRkxMRk5CUVZNc1JVRkJSVHR2UWtGRE5VSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh6UWtGQmMwSXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRVHRwUWtGRGFFUTdaMEpCUlVRc1NVRkJTU3hEUVVGRExIVkNRVUYxUWl4RFFVTjRRaXhyUWtGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRlZMRzlDUVVOd1FpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVTnFRaXhEUVVGQk8yZENRVVZFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVRTdZVUZEYmtNN1dVRkJReXhQUVVGUExFZEJRVmtzUlVGQlJTd3dRa0ZCTUVJc1EwRkJRenRuUWtGRE9VTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTzJGQlEyaERPMUZCUTB3c1EwRkJReXhEUVVGQk8xRkJSVVE3T3pzN096czdPenM3TzFkQlYwYzdVVUZEWVN4dFFrRkJZeXhIUVVGSExFTkJRemRDTEVsQlFXbENMRVZCUTJwQ0xGRkJRVkVzUjBGQlJ5eERRVUZETEVWQlExb3NVMEZCVXl4SFFVRkhMRVZCUVVVc1JVRkRVQ3hGUVVGRk96dFpRVU5VTEVsQlFVa3NTVUZCU1N4TFFVRkxMRk5CUVZNc1JVRkJSVHRuUWtGRGNFSXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRMnBDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUTFnc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGRFppeFJRVUZSTEVWQlExSXNVMEZCVXl4RFFVTmFMRU5CUVVFN1lVRkRTanRaUVVWRUxFMUJRVTBzUzBGQlN5eEhRVUUyUWl4RlFVRkZMRVZCUTNSRExGTkJRVk1zUjBGQk5rSXNSVUZCUlN4RFFVRkJPMWxCUlRWRExFdEJRVXNzVFVGQlRTeEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZPMmRDUVVOd1FpeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVrc1NVRkJTU3hEUVVGRExFMUJRVzFETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1owSkJRek5FTEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkRWQ3hKUVVGSkxFTkJRVU1zVlVGQmJVUXNNRU5CUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3WVVGRGRrVTdXVUZGUkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RlFVRkZMRkZCUVZFc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlFUdFJRVU5vUlN4RFFVRkRMRU5CUVVFN1VVRkZSRHM3T3p0WFFVbEhPMUZCUTJFc1lVRkJVU3hIUVVGSExFTkJRVU1zUjBGQmJVSXNSVUZCWjBJc1JVRkJSVHM3V1VGRE4wUXNTVUZCU1R0blFrRkRRU3hOUVVGQkxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc0swTkJRWGhDTEVsQlFVa3NSVUZCZDBJN1owSkJSVFZDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1MwRkJTeXhUUVVGVExFVkJRVVU3YjBKQlF6VkNMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3YVVKQlEyaEVPMmRDUVVWRUxFbEJRVWtzUTBGQlF5eFZRVUZWTEhGQ1FVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlFUdG5Ra0ZGYkVNc1NVRkJTU3hEUVVGRExIVkNRVUYxUWl4RFFVTjRRaXhyUWtGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRlZMRzlDUVVOd1FpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVTnFRaXhEUVVGQk8yZENRVVZFTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUVR0blFrRkZMMElzVFVGQlRTeGxRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeEZRVUZGTzI5Q1FVTm9SQ3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0dlFrRkRjRUlzUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUVR0blFrRkZaaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkJPMkZCUTJoRE8xbEJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVXNNRUpCUVRCQ0xFTkJRVU03WjBKQlEzSkRMRTlCUVU4c1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUVR0aFFVTm9RenRSUVVOTUxFTkJRVU1zUTBGQlFUdFJRVVZFTEdkRlFVRm5SVHRSUVVOb1JUczdPenRYUVVsSE8xRkJRMkVzYlVKQlFXTXNSMEZCUnl4RFFVTTNRaXhOUVVGdlFpeEZRVU5TTEVWQlFVVTdPMWxCUTJRc1NVRkJTVHRuUWtGRFFTeEpRVUZKTEUxQlFVMHNTMEZCU3l4VFFVRlRMRVZCUVVVN2IwSkJRM1JDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGQk8ybENRVU4yUWp0blFrRkZSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEV0QlFVc3NVMEZCVXl4RlFVRkZPMjlDUVVNMVFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkJPMmxDUVVOb1JEdG5Ra0ZGUkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVRTdaMEpCUlM5Q0xFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1IwRkJSeXhKUVVGSkxFTkJRVUU3WjBKQlJTOUNMRTFCUVVFc1NVRkJTU3hEUVVGRExHdENRVUZyUWl3clEwRkJka0lzU1VGQlNTeEZRVUYxUWp0blFrRkZNMElzU1VGQlNTeFRRVUZUTEV0QlFVc3NTVUZCU1N4RlFVRkZPMjlDUVVOd1FpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkJPMmxDUVVOb1JEdG5Ra0ZGUkN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGQk8yZENRVVZ5UXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlFUdG5Ra0ZEY2tJc1RVRkJRU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMQ3REUVVGMFFpeEpRVUZKTEVWQlFYTkNPMmRDUVVVeFFpeEpRVUZKTEZOQlFWTXNXVUZCV1N4TFFVRkxMRVZCUVVVN2IwSkJRelZDTEUxQlFVMHNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXh6UWtGQmMwSXNSVUZCUlN4RFFVRkRPMjlDUVVWc1JDeFRRVUYxUWl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZCTzI5Q1FVVjRSU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGQk8ybENRVU0xUXp0blFrRkZSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGQk8yRkJRemRETzFsQlFVTXNUMEZCVHl4SFFVRlpMRVZCUVVVc01FSkJRVEJDTEVOQlFVTTdaMEpCUXpsRExFOUJRVThzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRVHRoUVVOb1F6dFJRVU5NTEVOQlFVTXNRMEZCUVR0UlFVVkVPenM3VjBGSFJ6dFJRVU5oTEZWQlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGQk8xRkJSVE5ET3pzN1YwRkhSenRSUVVOaExIRkNRVUZuUWl4SFFVRkhMRWRCUVZNc1JVRkJSVHM3V1VGRE1VTXNTVUZCU1R0blFrRkRRU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEV0QlFVc3NVMEZCVXl4RlFVRkZPMjlDUVVNMVFpeFBRVUZOTzJsQ1FVTlVPMmRDUVVWRUxFMUJRVUVzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXdyUTBGQmVrSXNTVUZCU1N4RlFVRjVRanRuUWtGRk4wSXNTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRVHRuUWtGRmRrTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGQk8yZENRVU4wUWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlFUdGhRVU42UWp0WlFVRkRMRTlCUVU4c1IwRkJXU3hGUVVGRkxEQkNRVUV3UWl4RFFVRkRPMmRDUVVNNVF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGQk8yRkJRM3BDTzFGQlJVd3NRMEZCUXl4RFFVRkJPMUZCUlVRN096dFhRVWRITzFGQlEyRXNXVUZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUVR0UlFVTXZReXdyUkVGQkswUTdVVUZGTDBRN096dFhRVWRITzFGQlEwc3NiMEpCUVdVc1IwRkJSeXhIUVVGVExFVkJRVVU3V1VGRGFrTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhMUVVGTExGTkJRVk1zUlVGQlJUdG5Ra0ZETlVJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHpRa0ZCYzBJc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlFUdGhRVU5vUkR0WlFVVkVMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVTdaMEpCUXpWQ0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRVZCUVVVN2IwSkJRM2hDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVFN2FVSkJRMjVFTzJGQlEwbzdVVUZEVEN4RFFVRkRMRU5CUVVFN1VVRkZSRHM3TzFkQlIwYzdVVUZEU3l4blFrRkJWeXhIUVVGSExFZEJRV1VzUlVGQlJUdFpRVU51UXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFTkJRVUU3V1VGRmRFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVUU3VVVGRGVFSXNRMEZCUXl4RFFVRkJPMUZCUjBRN096czdWMEZKUnp0UlFVTkxMRmxCUVU4c1IwRkJSeXhEUVVGRExHVkJRVFJDTEVWQlFWRXNSVUZCUlRzN1dVRkRja1FzU1VGQlNTeGxRVUZsTEZsQlFWa3NTMEZCU3l4RlFVRkZPMmRDUVVOc1F5eExRVUZMTEUxQlFVMHNUMEZCVHl4SlFVRkpMR1ZCUVdVc1JVRkJSVHR2UWtGRGJrTXNUVUZCUVN4SlFVRkpMRU5CUVVNc1QwRkJUeXd3UTBGQlJTeFhRVUZYTEVOQlFVTXNUMEZCVHl4RlFVRkRPMmxDUVVOeVF6dGhRVU5LTzJsQ1FVRk5MRWxCUVVrc1pVRkJaU3hGUVVGRk8yZENRVU40UWl4TlFVRkJMRWxCUVVrc1EwRkJReXhQUVVGUExEQkRRVUZGTEZkQlFWY3NRMEZCUXl4bFFVRmxMRVZCUVVNN1lVRkROME03V1VGRlJDeEpRVUZKTEdWQlFXVXNSVUZCUlR0blFrRkRha0lzVFVGQlFTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xDdERRVUYyUWl4SlFVRkpMRVZCUVhWQ08yRkJRemxDTzFGQlEwd3NRMEZCUXl4RFFVRkJPMUZCUlU4c2FVSkJRVmtzUjBGQlJ5eERRVUZETEVkQlFWa3NSVUZCVXl4RlFVRkZPMWxCUXpORExFbEJRVWtzUjBGQlJ5eFpRVUZaTEV0QlFVc3NSVUZCUlR0blFrRkRkRUlzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTzJkQ1FVVXpRaXhQUVVGUExFZEJRVmtzUTBGQlFUdGhRVU4wUWp0WlFVVkVMRTFCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGQk8xbEJSWEJETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUVR0WlFVVTNRaXhQUVVGUExFdEJRVXNzUTBGQlFUdFJRVU5vUWl4RFFVRkRMRU5CUVVFN1VVRXpWRWNzU1VGQlNTeE5RVUZOTEV0QlFVc3NTVUZCU1N4RlFVRkZPMWxCUTJwQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNiVVJCUVcxRUxFTkJRVU1zUTBGQlFUdFRRVU4yUlR0UlFVVkVMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZCTzBsQlEzcENMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU0N4SlFVRlhMRkZCUVZFN1VVRkRaaXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVRTdTVUZEY2tJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTklMRWxCUVdNc1MwRkJTenRSUVVObUxFOUJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUVR0SlFVTjBRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSUxFbEJRV01zUzBGQlN5eERRVUZGTEVkQlFWVTdVVUZETTBJc1NVRkJTU3hKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRVZCUVVVN1dVRkRNVUlzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVOc1FpeEpRVUZKTEV0QlFVc3NRMEZCUXl4elFrRkJjMElzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZETVVNc1EwRkJRVHRaUVVORUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1UwRkRja0k3WVVGQlRUdFpRVU5JTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGQk8xbEJRMnBDTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUjBGQlJ5eEpRVUZKTEVOQlFVRTdVMEZEYkVNN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBnc1NVRkJWeXhSUVVGUk8xRkJRMllzVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkJPMGxCUTNKQ0xFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGdzU1VGQlZ5eE5RVUZOTEVOQlFVVXNUMEZCWjBNN1VVRkRMME1zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVFN1NVRkRNVUlzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSUxFbEJRVmNzVFVGQlRUdFJRVU5pTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRVHRKUVVOMlFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGdzU1VGQlZ5eFJRVUZSTzFGQlEyWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGQk8wbEJRM3BDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNDeEpRVUZYTEZOQlFWTTdVVUZEYUVJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZCTzBsQlF6RkNMRU5CUVVNN1EwRTRUMG83UVVGRlJDeGxRVUZsTEZOQlFWTXNRMEZCUVNKOSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb24gZm9yIERPTSBtYW5pcHVsYXRpb25cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9qc3gudHNcIiAvPlxuaW1wb3J0IHsgYmluZENoaWxkcmVuLCB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuZXhwb3J0IGNvbnN0IGZyYWdtZW50ID0gKF8sIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgYmluZENoaWxkcmVuKGZyYWdtZW50LCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIGZyYWdtZW50O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZyYWdtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm5KaFoyMWxiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdlpuSmhaMjFsYm5RdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPMGRCVVVjN1FVRkRTQ3d5UWtGQk1rSTdRVUZETTBJc2FVTkJRV2xETzBGQlJXcERMRTlCUVU4c1JVRkZTQ3haUVVGWkxFZEJRMllzVFVGQlRTd3JRa0ZCSzBJc1EwRkJRVHRCUVVWMFF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1EwRkRjRUlzUTBGQlZTeEZRVU5XTEVkQlFVY3NVVUZCTWtJc1JVRkRaQ3hGUVVGRk8wbEJRMnhDTEUxQlFVMHNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXh6UWtGQmMwSXNSVUZCUlN4RFFVRkJPMGxCUld4RUxGbEJRVmtzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVFN1NVRkZhRU1zVDBGQlR5eFJRVUZSTEVOQlFVRTdRVUZEYmtJc1EwRkJReXhEUVVGQk8wRkJSVVFzWlVGQlpTeFJRVUZSTEVOQlFVRWlmUT09IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZSBtYWluIGRlc3RhZ25hdGUgY2xhc3NcbiAqIEBmaWxlIG1haW4gZmlsZSBmb3IgZGVzdGFnbmF0ZVxuICogQHByZXNlcnZlXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vanN4LnRzXCIgLz5cbmltcG9ydCAqIGFzIF9Db21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBfQ3JlYXRlUmVmIGZyb20gXCIuL2NyZWF0ZVJlZlwiO1xuaW1wb3J0ICogYXMgX0NyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0ICogYXMgX0NyZWF0ZUVsZW1lbnROUyBmcm9tIFwiLi9jcmVhdGVFbGVtZW50TlNcIjtcbmltcG9ydCAqIGFzIF9GcmFnbWVudCBmcm9tIFwiLi9mcmFnbWVudFwiO1xuZXhwb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XG5leHBvcnQgeyBjcmVhdGVSZWYgfSBmcm9tIFwiLi9jcmVhdGVSZWZcIjtcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50TlMgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50TlNcIjtcbmV4cG9ydCB7IGZyYWdtZW50IH0gZnJvbSBcIi4vZnJhZ21lbnRcIjtcbmV4cG9ydCB2YXIgRGVTdGFnbmF0ZTtcbihmdW5jdGlvbiAoRGVTdGFnbmF0ZSkge1xuICAgIERlU3RhZ25hdGUuQ29tcG9uZW50ID0gX0NvbXBvbmVudC5Db21wb25lbnQ7XG4gICAgRGVTdGFnbmF0ZS5jcmVhdGVSZWYgPSBfQ3JlYXRlUmVmLmNyZWF0ZVJlZjtcbiAgICBEZVN0YWduYXRlLmNyZWF0ZUVsZW1lbnQgPSBfQ3JlYXRlRWxlbWVudC5jcmVhdGVFbGVtZW50O1xuICAgIERlU3RhZ25hdGUuY3JlYXRlRWxlbWVudE5TID0gX0NyZWF0ZUVsZW1lbnROUy5jcmVhdGVFbGVtZW50TlM7XG4gICAgRGVTdGFnbmF0ZS5mcmFnbWVudCA9IF9GcmFnbWVudC5mcmFnbWVudDtcbn0pKERlU3RhZ25hdGUgfHwgKERlU3RhZ25hdGUgPSB7fSkpO1xuZXhwb3J0IGRlZmF1bHQgRGVTdGFnbmF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN096czdSMEZWUnp0QlFVTklMREpDUVVFeVFqdEJRVU16UWl4cFEwRkJhVU03UVVGRmFrTXNUMEZCVHl4TFFVRkxMRlZCUVZVc1RVRkJUU3hoUVVGaExFTkJRVUU3UVVGRGVrTXNUMEZCVHl4TFFVRkxMRlZCUVZVc1RVRkJUU3hoUVVGaExFTkJRVUU3UVVGRGVrTXNUMEZCVHl4TFFVRkxMR05CUVdNc1RVRkJUU3hwUWtGQmFVSXNRMEZCUVR0QlFVTnFSQ3hQUVVGUExFdEJRVXNzWjBKQlFXZENMRTFCUVUwc2JVSkJRVzFDTEVOQlFVRTdRVUZEY2tRc1QwRkJUeXhMUVVGTExGTkJRVk1zVFVGQlRTeFpRVUZaTEVOQlFVRTdRVUZGZGtNc1QwRkJUeXhGUVVGRExGTkJRVk1zUlVGQlF5eE5RVUZOTEdGQlFXRXNRMEZCUVR0QlFVTnlReXhQUVVGUExFVkJRVTBzVTBGQlV5eEZRVUZETEUxQlFVMHNZVUZCWVN4RFFVRkJPMEZCUXpGRExFOUJRVThzUlVGQlF5eGhRVUZoTEVWQlFVTXNUVUZCVFN4cFFrRkJhVUlzUTBGQlFUdEJRVU0zUXl4UFFVRlBMRVZCUVVNc1pVRkJaU3hGUVVGRExFMUJRVTBzYlVKQlFXMUNMRU5CUVVFN1FVRkRha1FzVDBGQlR5eEZRVUZETEZGQlFWRXNSVUZCUXl4TlFVRk5MRmxCUVZrc1EwRkJRVHRCUVVWdVF5eE5RVUZOTEV0QlFWY3NWVUZCVlN4RFFVOHhRanRCUVZCRUxGZEJRV2xDTEZWQlFWVTdTVUZEVkN4dlFrRkJVeXhIUVVGSkxGVkJRVlVzVlVGQlpDeERRVUZqTzBsQlEzWkNMRzlDUVVGVExFZEJRVWtzVlVGQlZTeFZRVUZrTEVOQlFXTTdTVUZGZGtJc2QwSkJRV0VzUjBGQlNTeGpRVUZqTEdOQlFXeENMRU5CUVd0Q08wbEJReTlDTERCQ1FVRmxMRWRCUVVrc1owSkJRV2RDTEdkQ1FVRndRaXhEUVVGdlFqdEpRVU51UXl4dFFrRkJVU3hIUVVGSkxGTkJRVk1zVTBGQllpeERRVUZoTzBGQlEzWkRMRU5CUVVNc1JVRlFaMElzVlVGQlZTeExRVUZXTEZWQlFWVXNVVUZQTVVJN1FVRkZSQ3hsUVVGbExGVkJRVlVzUTBGQlFTSjkiXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnQiLCJfY3JlYXRlRWxlbWVudE5TIiwiX2NyZWF0ZVJlZiIsIkJhc2VDb21wb25lbnQiLCJCYXNlIiwiX0NvbXBvbmVudC5Db21wb25lbnQiLCJfQ3JlYXRlUmVmLmNyZWF0ZVJlZiIsIl9DcmVhdGVFbGVtZW50LmNyZWF0ZUVsZW1lbnQiLCJfQ3JlYXRlRWxlbWVudE5TLmNyZWF0ZUVsZW1lbnROUyIsIl9GcmFnbWVudC5mcmFnbWVudCIsIkRlU3RhZ25hdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQU8sTUFBTSxHQUFHLEdBQUcsd0RBQVo7O0lDcUZQOzs7Ozs7O0lBT0c7O0lBQ0ksTUFBTSxTQUFTLEdBQUcsQ0FDckIsT0FEcUIsRUFFckIsS0FGcUIsRUFHckIsRUFBRSxHQUFHLEtBSGdCLEtBSWY7SUFDTixNQUFJLEtBQUosRUFBVztJQUNQLFNBQUssTUFBTSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQVgsSUFBeUIsTUFBTSxDQUFDLE9BQVAsQ0FBZSxLQUFmLENBQXpCLEVBQWdEO0lBQzVDLFVBQUksT0FBTyxHQUFQLEtBQWUsUUFBZixJQUEyQixPQUFPLEdBQVAsS0FBZSxRQUE5QyxFQUF3RDtJQUNwRCxZQUFJLEdBQUcsS0FBSyxXQUFaLEVBQXlCO0lBQ3JCLFVBQUEsT0FBTyxDQUFDLFNBQVIsR0FBb0IsR0FBRyxDQUFDLFFBQUosRUFBcEI7SUFDSCxTQUZELE1BRU8sSUFBSSxFQUFKLEVBQVE7SUFDWCxVQUFBLE9BQU8sQ0FBQyxjQUFSLENBQXVCLElBQXZCLEVBQTZCLEdBQTdCLEVBQWtDLEdBQUcsQ0FBQyxRQUFKLEVBQWxDO0lBQ0gsU0FGTSxNQUVBO0lBQ0gsVUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixHQUFyQixFQUEwQixHQUFHLENBQUMsUUFBSixFQUExQjtJQUNIO0lBQ0osT0FSRCxNQVFPLElBQUksR0FBRyxDQUFDLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixNQUFvQixJQUF4QixFQUE4QjtJQUNqQyxZQUFJLE9BQU8sR0FBUCxLQUFnQixVQUFwQixFQUFnQztJQUM1QixVQUFBLE9BQU8sQ0FBQyxnQkFBUixDQUNJLEdBQUcsQ0FBQyxLQUFKLENBQVUsQ0FBVixFQUNLLFdBREwsRUFESixFQUdJLEdBSEo7SUFLSDtJQUNKLE9BUk0sTUFRQSxJQUNILEdBQUcsS0FBSyxLQUFSLElBQ0EsT0FBTyxHQUFQLEtBQWdCLFFBRGhCLElBRUEsYUFBYSxHQUhWLEVBSUw7SUFDRyxRQUFBLEdBQW9CLENBQUMsT0FBckIsR0FBK0IsT0FBL0I7SUFDSixPQU5NLE1BTUEsSUFBSSxHQUFHLEtBQUssU0FBWixFQUF1QjtJQUMxQixRQUFBLE9BQU8sQ0FBQyxJQUFSLENBQWEsR0FBRyxPQUFPLEdBQUcsa0NBQTFCO0lBQ0g7SUFDSjtJQUNKO0lBQ0osQ0FsQ007SUFvQ1A7Ozs7OztJQU1HOztJQUNJLE1BQU0sWUFBWSxHQUFHLENBQ3hCLE9BRHdCLEVBRXhCLFFBRndCLEtBR2xCO0lBQ04sTUFBSSxRQUFRLEtBQUssSUFBYixJQUFxQixRQUFRLEtBQUssU0FBdEMsRUFBaUQ7SUFDN0MsUUFBSSxRQUFRLFlBQVksS0FBeEIsRUFBK0I7SUFDM0IsTUFBQSxRQUFRLENBQUMsT0FBVCxDQUFrQixLQUFELElBQXlCLFlBQVksQ0FBQyxPQUFELEVBQVUsS0FBVixDQUF0RDtJQUNILEtBRkQsTUFFTyxJQUNILE9BQU8sUUFBUCxLQUFvQixRQUFwQixJQUNBLE9BQU8sUUFBUCxLQUFvQixRQUZqQixFQUdMO0lBQ0UsTUFBQSxPQUFPLENBQUMsV0FBUixDQUFvQixRQUFRLENBQUMsY0FBVCxDQUF3QixRQUFRLENBQUMsUUFBVCxFQUF4QixDQUFwQjtJQUNILEtBTE0sTUFLQSxJQUFJLFFBQVEsWUFBWSxTQUF4QixFQUFtQztJQUN0QyxVQUFJLENBQUMsUUFBUSxDQUFDLFFBQVYsSUFBc0IsT0FBTyxZQUFZLE1BQU0sQ0FBQyxXQUFwRCxFQUFpRTtJQUM3RCxRQUFBLFFBQVEsQ0FBQyxLQUFULENBQWUsT0FBZjtJQUVBO0lBQ0gsT0FKRCxNQUlPLElBQUksRUFBRSxPQUFPLFlBQVksTUFBTSxDQUFDLFdBQTVCLENBQUosRUFBOEM7SUFDakQsY0FBTSxJQUFJLEtBQUosQ0FBVSxzQkFBc0IsR0FBRyxFQUFuQyxDQUFOO0lBQ0g7O0lBRUQsVUFBSSxRQUFRLENBQUMsTUFBVCxLQUFvQixPQUF4QixFQUFpQztJQUM3QixRQUFBLFFBQVEsQ0FBQyxNQUFULEdBQWtCLE9BQWxCO0lBQ0g7O0lBRUQsTUFBQSxRQUFRLENBQUMsV0FBVDtJQUNILEtBZE0sTUFjQTtJQUNILE1BQUEsT0FBTyxDQUFDLFdBQVIsQ0FBb0IsUUFBcEI7SUFDSDtJQUNKO0lBQ0osQ0E5Qk07O0lDcEZQOzs7Ozs7Ozs7SUFTRzs7SUFDRyxTQUFVLGFBQVYsQ0FJRixrQkFKRSxFQVFGLEtBUkUsRUFTRixHQUFHLFFBVEQsRUFTNEI7SUFFOUIsTUFBSSxPQUFPLGtCQUFQLEtBQStCLFFBQW5DLEVBQTZDO0lBQ3pDLFVBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGtCQUF2QixDQUFoQjtJQUVBLElBQUEsU0FBUyxDQUFDLE9BQUQsRUFBVSxLQUFWLENBQVQ7SUFFQSxJQUFBLFlBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUFaO0lBRUEsV0FBTyxPQUFQO0lBQ0gsR0FSRCxNQVFPLElBQUksT0FBTyxrQkFBUCxLQUErQixVQUFuQyxFQUErQztJQUNsRCxXQUFPLGtCQUFrQixDQUFDLEtBQUQsRUFBYSxRQUFiLENBQXpCO0lBQ0g7O0lBRUQsU0FBTyxLQUFLLENBQUMsd0NBQUQsQ0FBWjtJQUNIOztJQ3RFRDs7Ozs7Ozs7SUFRRzs7VUFDVSxlQUFlLEdBQUcsQ0FDM0IsWUFEMkIsRUFFM0IsT0FGMkIsRUFHM0IsS0FIMkIsRUFJM0IsR0FBRyxRQUp3QixLQUtsQjtJQUNULFFBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxlQUFULENBQXlCLFlBQXpCLEVBQXVDLE9BQXZDLENBQWhCO0lBRUEsRUFBQSxTQUFTLENBQUMsT0FBRCxFQUFVLEtBQVYsRUFBaUIsSUFBakIsQ0FBVDtJQUVBLEVBQUEsWUFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBQVo7SUFFQSxTQUFPLE9BQVA7SUFDSDs7SUN2QkQ7OztJQUdHO1VBQ1UsU0FBUyxHQUFHLE9BQTRDO0lBQ2pFLEVBQUEsT0FBTyxFQUFFO0lBRHdELENBQTVDOztJQytCbkIsTUFBZ0IsTUFBaEIsQ0FBc0I7SUFBNUIsRUFBQSxXQUFBLEdBQUE7SUFRb0IsU0FBQSxhQUFBLEdBQWdCQSxhQUFoQjtJQUVBLFNBQUEsZUFBQSxHQUFrQkMsZUFBbEI7SUFFQSxTQUFBLFNBQUEsR0FBWUMsU0FBWjtJQUVoQjs7OztJQUlHOztJQUNJLFNBQUEsaUJBQUEsR0FBcUIsS0FBRCxJQUF3QixPQUFPLENBQUMsS0FBUixDQUFjLEtBQWQsQ0FBNUM7SUFFUDs7O0lBR0c7OztJQUNJLFNBQUEscUJBQUEsR0FBd0IsTUFBZSxJQUF2QztJQUVQOzs7Ozs7SUFNRzs7O0lBQ2EsU0FBQSxNQUFBLEdBQVMsTUFBa0IsSUFBM0I7SUFFbkI7O0lBcEMyQjtJQUVELE1BQUEsQ0FBQSxhQUFBLEdBQWdCRixhQUFoQjtJQUVBLE1BQUEsQ0FBQSxlQUFBLEdBQWtCQyxlQUFsQjtJQUVBLE1BQUEsQ0FBQSxTQUFBLEdBQVlDLFNBQVo7O0lDakMzQixNQUFNLFVBQVUsR0FBcUIsQ0FDakMsU0FEaUMsRUFFakMsUUFGaUMsRUFHakMsV0FIaUMsRUFJakMsWUFKaUMsRUFLakMsa0JBTGlDLEVBTWpDLG1CQU5pQyxFQU9qQyxnQkFQaUMsRUFRakMsc0JBUmlDLEVBU2pDLG1CQVRpQyxFQVVqQyxvQkFWaUMsRUFXakMsaUJBWGlDLEVBWWpDLGlCQVppQyxFQWFqQyxZQWJpQyxFQWNqQyxTQWRpQyxFQWVqQyxZQWZpQyxFQWdCakMsYUFoQmlDLEVBaUJqQyxjQWpCaUMsRUFrQmpDLGNBbEJpQyxFQW1CakMsYUFuQmlDLEVBb0JqQyxhQXBCaUMsRUFxQmpDLFlBckJpQyxFQXNCakMsV0F0QmlDLENBQXJDO0lBNklNLE1BQWdCLE1BQWhCLFNBQStCQyxNQUEvQixDQUE0QztJQUFsRCxFQUFBLFdBQUEsR0FBQTs7SUFFSTs7OztJQUlHOztJQUNnQixTQUFBLGtCQUFBLEdBQXNCLE9BQUQsSUFBK0I7SUFDbkUsV0FBSyxjQUFMLENBQW9CLE9BQU8sQ0FBQyxnQkFBNUI7SUFDSCxLQUZrQjtJQUluQjs7OztJQUlHOzs7SUFDZ0IsU0FBQSxvQkFBQSxHQUF3QixPQUFELElBQStCO0lBQ3JFLFdBQUssY0FBTCxDQUFvQixPQUFPLENBQUMsbUJBQTVCO0lBQ0gsS0FGa0I7O0lBSVgsU0FBQSxjQUFBLEdBQWtCLGFBQUQsSUFBdUM7SUFDNUQsV0FBSyxNQUFNLFNBQVgsSUFBd0IsVUFBeEIsRUFBb0M7SUFDaEMsY0FBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsV0FBbkIsRUFBdEI7SUFBQSxjQUNJLFFBQVEsR0FBRyxLQUFLLFNBQUwsQ0FEZjs7SUFHQSxZQUFJLFFBQVEsS0FBSyxTQUFiLElBQTBCLFFBQVEsWUFBWSxRQUFsRCxFQUE0RDtJQUN4RCxVQUFBLGFBQWEsQ0FBQyxhQUFELEVBQWdCLFFBQWhCLENBQWI7SUFDSDtJQUNKO0lBQ0osS0FUTztJQVdYOztJQS9CaUQ7O0lDMUpsRDs7Ozs7Ozs7O0lBU0c7SUFDSSxNQUFNLE9BQU8sR0FBRyxDQUNuQixJQURtQixFQUVuQixJQUZtQixFQUduQixRQUFRLEdBQUcsQ0FIUSxFQUluQixTQUFTLEdBQUcsRUFKTyxLQUtWO0lBQ1QsTUFBSSxRQUFRLEtBQUssQ0FBakIsRUFBb0I7SUFDaEIsV0FBTyxJQUFJLEtBQUssSUFBaEI7SUFDSCxHQUZELE1BRU8sSUFBSSxPQUFPLElBQVAsS0FBZ0IsT0FBTyxJQUEzQixFQUFpQztJQUNwQyxXQUFPLEtBQVA7SUFDSDs7SUFFRCxNQUFJLElBQUksWUFBWSxLQUFoQixJQUF5QixJQUFJLFlBQVksS0FBN0MsRUFBb0Q7SUFDaEQsUUFBSSxJQUFJLENBQUMsTUFBTCxLQUFnQixJQUFJLENBQUMsTUFBekIsRUFBaUM7SUFDN0IsYUFBTyxLQUFQO0lBQ0g7O0lBQUMsUUFBSSxJQUFJLENBQUMsTUFBTCxHQUFjLFNBQWQsSUFBMkIsSUFBSSxDQUFDLE1BQUwsR0FBYyxTQUE3QyxFQUF3RDtJQUN0RCxhQUFPLElBQUksS0FBSyxJQUFoQjtJQUNIOztJQUVELFNBQUssSUFBSSxLQUFLLEdBQUcsQ0FBakIsRUFBb0IsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFqQyxFQUF5QyxLQUFLLEVBQTlDLEVBQWtEO0lBQzlDLFVBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUQsQ0FBTCxFQUFjLElBQUksQ0FBQyxLQUFELENBQWxCLEVBQTJCLFFBQVEsR0FBRyxDQUF0QyxFQUF5QyxTQUF6QyxDQUFaLEVBQWlFO0lBQzdELGVBQU8sS0FBUDtJQUNIO0lBQ0o7O0lBRUQsV0FBTyxJQUFQO0lBQ0gsR0FkRCxNQWNPLElBQUksSUFBSSxZQUFZLE1BQWhCLElBQTBCLElBQUksWUFBWSxNQUE5QyxFQUFzRDtJQUN6RCxRQUFJLENBQUMsT0FBTyxDQUNSLE1BQU0sQ0FBQyxJQUFQLENBQVksSUFBWixDQURRLEVBRVIsTUFBTSxDQUFDLElBQVAsQ0FBWSxJQUFaLENBRlEsRUFHUixRQUFRLEdBQUcsQ0FISCxFQUlSLFNBSlEsQ0FBWixFQUtHO0lBQ0MsYUFBTyxLQUFQO0lBQ0g7O0lBRUQsU0FBSyxNQUFNLEdBQVgsSUFBa0IsTUFBTSxDQUFDLElBQVAsQ0FBWSxJQUFaLENBQWxCLEVBQXFDO0lBR2pDLFVBQUksQ0FBQyxPQUFPLENBQ1AsSUFBWSxDQUFDLEdBQUQsQ0FETCxFQUVQLElBQVksQ0FBQyxHQUFELENBRkwsRUFHUixRQUFRLEdBQUcsQ0FISCxFQUlSLFNBSlEsQ0FBWixFQUtHO0lBQ0MsZUFBTyxLQUFQO0lBQ0g7SUFDSjs7SUFFRCxXQUFPLElBQVA7SUFDSDs7SUFFRCxTQUFPLElBQUksS0FBSyxJQUFoQjtJQUNILENBckRNO0FBdURQLGdCQUFlO0lBQ1gsRUFBQTtJQURXLENBQWY7O0lDeENBOzs7Ozs7SUFNRzs7SUFDRyxNQUFnQixTQUFoQixTQUdJQyxNQUhKLENBR1E7SUE0QlY7Ozs7SUFJRztJQUNILEVBQUEsV0FBQSxDQUFvQixNQUFwQixFQUEyRCxLQUEzRCxFQUF3RTtJQUNwRTtJQUR1RCxTQUFBLEtBQUEsR0FBQSxLQUFBO0lBNUJuRCxTQUFBLE1BQUEsR0FBZ0IsRUFBaEI7SUFNQSxTQUFBLG1CQUFBLEdBQXNCLEtBQXRCO0lBVUEsU0FBQSxTQUFBLEdBQVksS0FBWjtJQWdHUjs7OztJQUlHOztJQUNhLFNBQUEsV0FBQSxHQUFjLE1BQW1COzs7SUFDN0MsVUFBSTtJQUNBLFNBQUEsRUFBQSxHQUFBLEtBQUssa0JBQUwsTUFBdUIsSUFBdkIsSUFBdUIsRUFBQSxLQUFBLEtBQUEsQ0FBdkIsR0FBdUIsS0FBQSxDQUF2QixHQUF1QixFQUFBLENBQUEsSUFBQSxDQUF2QixJQUF1QixDQUF2Qjs7SUFFQSxZQUFJLEtBQUssT0FBTCxLQUFpQixTQUFyQixFQUFnQztJQUM1QixnQkFBTSxJQUFJLEtBQUosQ0FBVSxzQkFBc0IsR0FBRyxHQUFuQyxDQUFOO0lBQ0g7O0lBRUQsYUFBSyx1QkFBTCxDQUNJLE1BQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxFQUFJLEtBQUssS0FBVCxDQURKLEVBQzRCLE1BQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxFQUNwQixLQUFLLEtBRGUsQ0FENUI7O0lBS0EsYUFBSyxPQUFMLENBQWEsS0FBSyxXQUFMLEVBQWI7SUFDSCxPQWJELENBYUUsT0FBTyxHQUFQLEVBQWdEO0lBQzlDLGVBQU8sS0FBSyxZQUFMLENBQWtCLEdBQWxCLENBQVA7SUFDSDtJQUNKLEtBakJlO0lBbUJoQjs7Ozs7Ozs7Ozs7SUFXRzs7O0lBQ2EsU0FBQSxjQUFBLEdBQWlCLENBQzdCLElBRDZCLEVBRTdCLFFBQVEsR0FBRyxDQUZrQixFQUc3QixTQUFTLEdBQUcsRUFIaUIsS0FJcEI7OztJQUNULFVBQUksSUFBSSxLQUFLLFNBQWIsRUFBd0I7SUFDcEIsZUFBTyxDQUFDLEtBQUssQ0FBQyxPQUFOLENBQ0osS0FBSyxNQURELEVBRUosS0FBSyxVQUZELEVBR0osUUFISSxFQUlKLFNBSkksQ0FBUjtJQU1IOztJQUVELFlBQU0sS0FBSyxHQUE2QixFQUF4QztJQUFBLFlBQ0ksU0FBUyxHQUE2QixFQUQxQzs7SUFHQSxXQUFLLE1BQU0sR0FBWCxJQUFrQixJQUFsQixFQUF3QjtJQUNwQixRQUFBLEtBQUssQ0FBQyxHQUFELENBQUwsR0FBYyxLQUFLLE1BQUwsQ0FBeUMsR0FBekMsQ0FBZDtJQUNBLFFBQUEsU0FBUyxDQUFDLEdBQUQsQ0FBVCxHQUFjLENBQUEsRUFBQSxHQUNULEtBQUssVUFESSxNQUMrQyxJQUQvQyxJQUMrQyxFQUFBLEtBQUEsS0FBQSxDQUQvQyxHQUMrQyxLQUFBLENBRC9DLEdBQytDLEVBQUEsQ0FBRyxHQUFILENBRDdEO0lBRUg7O0lBRUQsYUFBTyxDQUFDLEtBQUssQ0FBQyxPQUFOLENBQWMsS0FBZCxFQUFxQixTQUFyQixFQUFnQyxRQUFoQyxFQUEwQyxTQUExQyxDQUFSO0lBQ0gsS0F4QmU7SUEwQmhCOzs7O0lBSUc7OztJQUNhLFNBQUEsUUFBQSxHQUFZLEdBQUQsSUFBc0M7OztJQUM3RCxVQUFJO0lBQ0EsU0FBQSxFQUFBLEdBQUEsS0FBSyxtQkFBTCxNQUF3QixJQUF4QixJQUF3QixFQUFBLEtBQUEsS0FBQSxDQUF4QixHQUF3QixLQUFBLENBQXhCLEdBQXdCLEVBQUEsQ0FBQSxJQUFBLENBQXhCLElBQXdCLENBQXhCOztJQUVBLFlBQUksS0FBSyxPQUFMLEtBQWlCLFNBQXJCLEVBQWdDO0lBQzVCLGdCQUFNLElBQUksS0FBSixDQUFVLHNCQUFzQixHQUFHLEdBQW5DLENBQU47SUFDSDs7SUFFRCxhQUFLLFVBQUwsR0FBZSxNQUFBLENBQUEsTUFBQSxDQUFBLEVBQUEsRUFBTyxLQUFLLE1BQVosQ0FBZjtJQUVBLGFBQUssdUJBQUwsQ0FDSSxNQUFBLENBQUEsTUFBQSxDQUFBLEVBQUEsRUFBSSxLQUFLLEtBQVQsQ0FESixFQUM0QixNQUFBLENBQUEsTUFBQSxDQUFBLEVBQUEsRUFDcEIsS0FBSyxLQURlLENBRDVCO0lBS0EsUUFBQSxNQUFNLENBQUMsTUFBUCxDQUFjLEtBQUssTUFBbkIsRUFBMkIsR0FBM0I7SUFFQSxjQUFNLGVBQWUsR0FBRyxLQUFLLHFCQUFMLEtBQ2xCLEtBQUssV0FBTCxFQURrQixHQUVsQixTQUZOOztJQUlBLGFBQUssT0FBTCxDQUFhLGVBQWI7SUFDSCxPQXJCRCxDQXFCRSxPQUFPLEdBQVAsRUFBdUM7SUFDckMsZUFBTyxLQUFLLFlBQUwsQ0FBa0IsR0FBbEIsQ0FBUDtJQUNIO0lBQ0osS0F6QmU7SUE0QmhCOzs7O0lBSUc7OztJQUNhLFNBQUEsY0FBQSxHQUNaLE1BRDZCLElBRWY7OztJQUNkLFVBQUk7SUFDQSxZQUFJLE1BQU0sS0FBSyxTQUFmLEVBQTBCO0lBQ3RCLGVBQUssTUFBTCxHQUFjLE1BQWQ7SUFDSDs7SUFFRCxZQUFJLEtBQUssT0FBTCxLQUFpQixTQUFyQixFQUFnQztJQUM1QixnQkFBTSxJQUFJLEtBQUosQ0FBVSxzQkFBc0IsR0FBRyxHQUFuQyxDQUFOO0lBQ0g7O0lBRUQsY0FBTSxTQUFTLEdBQUcsS0FBSyxNQUFMLEVBQWxCO0lBRUEsYUFBSyxtQkFBTCxHQUEyQixJQUEzQjtJQUVBLFNBQUEsRUFBQSxHQUFBLEtBQUssa0JBQUwsTUFBdUIsSUFBdkIsSUFBdUIsRUFBQSxLQUFBLEtBQUEsQ0FBdkIsR0FBdUIsS0FBQSxDQUF2QixHQUF1QixFQUFBLENBQUEsSUFBQSxDQUF2QixJQUF1QixDQUF2Qjs7SUFFQSxZQUFJLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtJQUNwQixnQkFBTSxJQUFJLEtBQUosQ0FBVSxzQkFBc0IsR0FBRyxHQUFuQyxDQUFOO0lBQ0g7O0lBRUQsYUFBSyxrQkFBTCxDQUF3QixLQUFLLE9BQTdCO0lBRUEsYUFBSyxTQUFMLEdBQWlCLElBQWpCO0lBQ0EsU0FBQSxFQUFBLEdBQUEsS0FBSyxpQkFBTCxNQUFzQixJQUF0QixJQUFzQixFQUFBLEtBQUEsS0FBQSxDQUF0QixHQUFzQixLQUFBLENBQXRCLEdBQXNCLEVBQUEsQ0FBQSxJQUFBLENBQXRCLElBQXNCLENBQXRCOztJQUVBLFlBQUksU0FBUyxZQUFZLEtBQXpCLEVBQWdDO0lBQzVCLGdCQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsc0JBQVQsRUFBakI7SUFFQyxVQUFBLFNBQXVCLENBQUMsT0FBeEIsQ0FBaUMsS0FBRCxJQUFXLFFBQVEsQ0FBQyxXQUFULENBQXFCLEtBQXJCLENBQTNDO0lBRUQsaUJBQU8sS0FBSyxPQUFMLENBQWEsV0FBYixDQUF5QixRQUF6QixDQUFQO0lBQ0g7O0lBRUQsZUFBTyxLQUFLLE9BQUwsQ0FBYSxXQUFiLENBQXlCLFNBQXpCLENBQVA7SUFDSCxPQWpDRCxDQWlDRSxPQUFPLEdBQVAsRUFBZ0Q7SUFDOUMsZUFBTyxLQUFLLFlBQUwsQ0FBa0IsR0FBbEIsQ0FBUDtJQUNIO0lBQ0osS0F2Q2U7SUF5Q2hCOzs7SUFHRzs7O0lBQ2EsU0FBQSxLQUFBLEdBQVEsS0FBSyxjQUFiO0lBRWhCOzs7SUFHRzs7SUFDYSxTQUFBLGdCQUFBLEdBQW1CLE1BQVc7OztJQUMxQyxVQUFJO0lBQ0EsWUFBSSxLQUFLLE9BQUwsS0FBaUIsU0FBckIsRUFBZ0M7SUFDNUI7SUFDSDs7SUFFRCxTQUFBLEVBQUEsR0FBQSxLQUFLLG9CQUFMLE1BQXlCLElBQXpCLElBQXlCLEVBQUEsS0FBQSxLQUFBLENBQXpCLEdBQXlCLEtBQUEsQ0FBekIsR0FBeUIsRUFBQSxDQUFBLElBQUEsQ0FBekIsSUFBeUIsQ0FBekI7SUFFQSxhQUFLLG9CQUFMLENBQTBCLEtBQUssT0FBL0I7O0lBRUEsYUFBSyxlQUFMOztJQUNBLGFBQUssU0FBTCxHQUFpQixLQUFqQjtJQUNILE9BWEQsQ0FXRSxPQUFPLEdBQVAsRUFBZ0Q7SUFDOUMsYUFBSyxZQUFMLENBQWtCLEdBQWxCO0lBQ0g7SUFFSixLQWhCZTtJQWtCaEI7OztJQUdHOzs7SUFDYSxTQUFBLE9BQUEsR0FBVSxLQUFLLGdCQUFmO0lBR2hCOzs7SUFHRzs7SUFDSyxTQUFBLGVBQUEsR0FBa0IsTUFBVztJQUNqQyxVQUFJLEtBQUssT0FBTCxLQUFpQixTQUFyQixFQUFnQztJQUM1QixjQUFNLElBQUksS0FBSixDQUFVLHNCQUFzQixHQUFHLEdBQW5DLENBQU47SUFDSDs7SUFFRCxhQUFPLEtBQUssT0FBTCxDQUFhLFVBQXBCLEVBQWdDO0lBQzVCLFlBQUksS0FBSyxPQUFMLENBQWEsU0FBakIsRUFBNEI7SUFDeEIsZUFBSyxPQUFMLENBQWEsV0FBYixDQUF5QixLQUFLLE9BQUwsQ0FBYSxTQUF0QztJQUNIO0lBQ0o7SUFDSixLQVZPO0lBWVI7OztJQUdHOzs7SUFDSyxTQUFBLFdBQUEsR0FBYyxNQUFpQjtJQUNuQyxXQUFLLGVBQUw7O0lBRUEsYUFBTyxLQUFLLE1BQUwsRUFBUDtJQUNILEtBSk87SUFPUjs7OztJQUlHOzs7SUFDSyxTQUFBLE9BQUEsR0FBVyxlQUFELElBQXVDOzs7SUFDckQsVUFBSSxlQUFlLFlBQVksS0FBL0IsRUFBc0M7SUFDbEMsYUFBSyxNQUFNLE9BQVgsSUFBc0IsZUFBdEIsRUFBdUM7SUFDbkMsV0FBQSxFQUFBLEdBQUEsS0FBSyxPQUFMLE1BQVksSUFBWixJQUFZLEVBQUEsS0FBQSxLQUFBLENBQVosR0FBWSxLQUFBLENBQVosR0FBWSxFQUFBLENBQUUsV0FBRixDQUFjLE9BQWQsQ0FBWjtJQUNIO0lBQ0osT0FKRCxNQUlPLElBQUksZUFBSixFQUFxQjtJQUN4QixTQUFBLEVBQUEsR0FBQSxLQUFLLE9BQUwsTUFBWSxJQUFaLElBQVksRUFBQSxLQUFBLEtBQUEsQ0FBWixHQUFZLEtBQUEsQ0FBWixHQUFZLEVBQUEsQ0FBRSxXQUFGLENBQWMsZUFBZCxDQUFaO0lBQ0g7O0lBRUQsVUFBSSxlQUFKLEVBQXFCO0lBQ2pCLFNBQUEsRUFBQSxHQUFBLEtBQUssa0JBQUwsTUFBdUIsSUFBdkIsSUFBdUIsRUFBQSxLQUFBLEtBQUEsQ0FBdkIsR0FBdUIsS0FBQSxDQUF2QixHQUF1QixFQUFBLENBQUEsSUFBQSxDQUF2QixJQUF1QixDQUF2QjtJQUNIO0lBQ0osS0FaTzs7SUFjQSxTQUFBLFlBQUEsR0FBZ0IsR0FBRCxJQUF3QjtJQUMzQyxVQUFJLEdBQUcsWUFBWSxLQUFuQixFQUEwQjtJQUN0QixhQUFLLGlCQUFMLENBQXVCLEdBQXZCO0lBRUEsZUFBTyxHQUFQO0lBQ0g7O0lBRUQsWUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFKLENBQVUsTUFBTSxDQUFDLEdBQUQsQ0FBaEIsQ0FBZDtJQUVBLFdBQUssaUJBQUwsQ0FBdUIsS0FBdkI7SUFFQSxhQUFPLEtBQVA7SUFDSCxLQVpPOztJQS9TSixRQUFJLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0lBQ2pCLFlBQU0sSUFBSSxLQUFKLENBQVUsbURBQVYsQ0FBTjtJQUNIOztJQUVELFNBQUssT0FBTCxHQUFlLE1BQWY7SUFDSDtJQUVEOzs7SUFHRzs7O0lBQ2dCLE1BQVIsUUFBUSxHQUFBO0lBQ2YsV0FBTyxLQUFLLEtBQVo7SUFDSDtJQUVEOzs7SUFHRzs7O0lBQ2dCLE1BQUwsS0FBSyxHQUFBO0lBQ2YsV0FBTyxLQUFLLE1BQVo7SUFDSDtJQUVEOzs7O0lBSUc7OztJQUNnQixNQUFMLEtBQUssQ0FBRSxHQUFGLEVBQVk7SUFDM0IsUUFBSSxLQUFLLG1CQUFULEVBQThCO0lBQzFCLFdBQUssaUJBQUwsQ0FDSSxJQUFJLEtBQUosQ0FBVSxzQkFBc0IsR0FBRyxHQUFuQyxDQURKO0lBR0EsV0FBSyxRQUFMLENBQWMsR0FBZDtJQUNILEtBTEQsTUFLTztJQUNILFdBQUssTUFBTCxHQUFjLEdBQWQ7SUFDQSxXQUFLLG1CQUFMLEdBQTJCLElBQTNCO0lBQ0g7SUFDSjtJQUVEOzs7SUFHRzs7O0lBQ2dCLE1BQVIsUUFBUSxHQUFBO0lBQ2YsV0FBTyxLQUFLLEtBQVo7SUFDSDtJQUVEOzs7O0lBSUc7OztJQUNjLE1BQU4sTUFBTSxDQUFFLE9BQUYsRUFBa0M7SUFDL0MsU0FBSyxPQUFMLEdBQWUsT0FBZjtJQUNIO0lBRUQ7OztJQUdHOzs7SUFDYyxNQUFOLE1BQU0sR0FBQTtJQUNiLFdBQU8sS0FBSyxPQUFaO0lBQ0g7SUFFRDs7O0lBR0c7OztJQUNnQixNQUFSLFFBQVEsR0FBQTtJQUNmLFdBQU8sS0FBSyxTQUFaO0lBQ0g7SUFFRDs7O0lBR0c7OztJQUNpQixNQUFULFNBQVMsR0FBQTtJQUNoQixXQUFPLEtBQUssVUFBWjtJQUNIOztJQW5IUzs7VUM1QkQsUUFBUSxHQUFHLENBQ3BCLENBRG9CLEVBRXBCLEdBQUcsUUFGaUIsS0FHRjtJQUNsQixRQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsc0JBQVQsRUFBakI7SUFFQSxFQUFBLFlBQVksQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUFaO0lBRUEsU0FBTyxRQUFQO0lBQ0g7O0lDQUQsQ0FBQSxVQUFpQixVQUFqQixFQUEyQjtJQUNULEVBQUEsVUFBQSxDQUFBLFNBQUEsR0FBYUMsU0FBYjtJQUNBLEVBQUEsVUFBQSxDQUFBLFNBQUEsR0FBYUMsU0FBYjtJQUVBLEVBQUEsVUFBQSxDQUFBLGFBQUEsR0FBaUJDLGFBQWpCO0lBQ0EsRUFBQSxVQUFBLENBQUEsZUFBQSxHQUFtQkMsZUFBbkI7SUFDQSxFQUFBLFVBQUEsQ0FBQSxRQUFBLEdBQVlDLFFBQVo7SUFDakIsQ0FQRCxFQUFpQkMsa0JBQVUsS0FBVkEsa0JBQVUsR0FBQSxFQUFBLENBQTNCOztBQVNBLHFCQUFlQSxrQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
