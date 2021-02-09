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
            console.warn(`WARN: Code 7. See ${url}. Params: ${typeof val}, ${key}`);
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
            throw new Error(`ERROR: code 4. See ${url}`);
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
         * Called when component catches a warning. Default behaviour is console.warn
         * @param msg - warning message
         * @returns void
         */


        this.componentDidWarn = msg => console.warn(msg);
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
        /**
         * State of component. Works similar React State
         * @type {undefined | Object.<string, unknown>}
         */

        this._state = {};
        this._didSetInitialState = false;
        this._didMount = false;
        /**
         * What to call before component update (state mutation)
         * @param {Props} prevProps - previous props
         * @param prevState - previous state
         * @returns void
         */

        this.getSnapshotBeforeUpdate = (prevProps, prevState) => [prevProps, prevState];
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
              return this.componentDidWarn(`WARN: code 4. See ${url}.`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVTdGFnbmF0ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3ByaXZhdGUvX3VybC5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHMuanMiLCIuLi8uLi9saWIvY3JlYXRlRWxlbWVudC5qcyIsIi4uLy4uL2xpYi9jcmVhdGVFbGVtZW50TlMuanMiLCIuLi8uLi9saWIvY3JlYXRlUmVmLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvX2Jhc2UuanMiLCIuLi8uLi9saWIvcHJpdmF0ZS9fZXZlbnRzLmpzIiwiLi4vLi4vbGliL3V0aWxzLmpzIiwiLi4vLi4vbGliL2NvbXBvbmVudC5qcyIsIi4uLy4uL2xpYi9mcmFnbWVudC5qcyIsIi4uLy4uL2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdXJsID0gXCJodHRwczovL2x1a2UtemhhbmctMDQuZ2l0aHViLmlvL0RlU3RhZ25hdGUvZXJyb3ItY29kZXNcIjtcbmV4cG9ydCBkZWZhdWx0IHVybDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgzVnliQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOTFjbXd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExIZEVRVUYzUkN4RFFVRkJPMEZCUlRORkxHVkJRV1VzUjBGQlJ5eERRVUZCSW4wPSIsIi8qKlxuICogQ29tcG9uZW50XG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGZpbGUgc2hhcmUgZnVuY3Rpb25zIGFuZCB0eXBlcyBmb3IgY3JlYXRlRWxlbWVudCBhbmQgaXQncyB2YXJpYW50c1xuICovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50XCI7XG5pbXBvcnQgdXJsIGZyb20gXCIuL191cmxcIjtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gcHJvcHMgLSBwcm9wcyB0byBiaW5kIHdpdGhcbiAqIEBwYXJhbSBucyAtIGlmIG5hbWVzcGFjZSBlbGVtZW50XG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kUHJvcHMgPSAoZWxlbWVudCwgcHJvcHMsIG5zID0gZmFsc2UpID0+IHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwiaW5uZXJIVE1MXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB2YWwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobnMpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBrZXksIHZhbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleS5zbGljZSgwLCAyKSA9PT0gXCJvblwiKSB7IC8vIFdvcmtzIHN1Y2ggYXMgb25DbGljaywgb25BbmltYXRpb25FbmQsIGV0Yy5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh2YWwpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCksIHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSBcInJlZlwiICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mICh2YWwpID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50XCIgaW4gdmFsKSB7XG4gICAgICAgICAgICAgICAgdmFsLmN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFdBUk46IENvZGUgNy4gU2VlICR7dXJsfS4gUGFyYW1zOiAke3R5cGVvZiAodmFsKX0sICR7a2V5fWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiB0byBiaW5kIHdpdGhcbiAqIEByZXR1cm5zIHZvaWRcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRDaGlsZHJlbiA9IChlbGVtZW50LCBjaGlsZHJlbikgPT4ge1xuICAgIGlmIChjaGlsZHJlbiAhPT0gbnVsbCAmJiBjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkcmVuID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICB0eXBlb2YgY2hpbGRyZW4gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGRyZW4udG9TdHJpbmcoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuIGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuLmRpZE1vdW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5tb3VudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSA0LiBTZWUgJHt1cmx9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4ucGFyZW50ICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucGFyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkcmVuLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lYMk55WldGMFpVVnNaVzFsYm5SVmRHbHNjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOWpjbVZoZEdWRmJHVnRaVzUwVlhScGJITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3TzBkQlVVYzdRVUZGU0N4UFFVRlBMRVZCUVVNc1UwRkJVeXhGUVVGRExFMUJRVTBzWTBGQll5eERRVUZCTzBGQlJYUkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxGRkJRVkVzUTBGQlFUdEJRWGxGZUVJN096czdPenM3UjBGUFJ6dEJRVU5JTEUxQlFVMHNRMEZCUXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhEUVVOeVFpeFBRVUZuUWl4RlFVTm9RaXhMUVVGNVFpeEZRVU42UWl4RlFVRkZMRWRCUVVjc1MwRkJTeXhGUVVOT0xFVkJRVVU3U1VGRFRpeEpRVUZKTEV0QlFVc3NSVUZCUlR0UlFVTlFMRXRCUVVzc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlF6VkRMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1JVRkJSVHRuUWtGRGNFUXNTVUZCU1N4SFFVRkhMRXRCUVVzc1YwRkJWeXhGUVVGRk8yOUNRVU55UWl4UFFVRlBMRU5CUVVNc1UwRkJVeXhIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUVR0cFFrRkRja003Y1VKQlFVMHNTVUZCU1N4RlFVRkZMRVZCUVVVN2IwSkJRMWdzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkJPMmxDUVVOd1JEdHhRa0ZCVFR0dlFrRkRTQ3hQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlFUdHBRa0ZETlVNN1lVRkRTanRwUWtGQlRTeEpRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NSVUZCUlN4RlFVRkZMRGhEUVVFNFF6dG5Ra0ZEYWtZc1NVRkJTU3hQUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NWVUZCVlN4RlFVRkZPMjlDUVVNMVFpeFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRM0JDTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8zbENRVU5RTEZkQlFWY3NSVUZCYjBJc1JVRkRjRU1zUjBGQlowSXNRMEZEYmtJc1EwRkJRVHRwUWtGRFNqdGhRVU5LTzJsQ1FVRk5MRWxCUTBnc1IwRkJSeXhMUVVGTExFdEJRVXM3WjBKQlEySXNUMEZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExGRkJRVkU3WjBKQlEzaENMRk5CUVZNc1NVRkJTU3hIUVVGSExFVkJRMnhDTzJkQ1FVTkhMRWRCUVc5Q0xFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUVR0aFFVTXhRenRwUWtGQlRTeEpRVUZKTEVkQlFVY3NTMEZCU3l4VFFVRlRMRVZCUVVVN1owSkJRekZDTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVkQlFVY3NZVUZCWVN4UFFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUVR0aFFVTXpSVHRUUVVOS08wdEJRMG83UVVGRFRDeERRVUZETEVOQlFVRTdRVUZGUkRzN096czdPMGRCVFVjN1FVRkRTQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeFpRVUZaTEVkQlFVY3NRMEZEZUVJc1QwRkJZU3hGUVVOaUxGRkJRWFZDTEVWQlEyNUNMRVZCUVVVN1NVRkRUaXhKUVVGSkxGRkJRVkVzUzBGQlN5eEpRVUZKTEVsQlFVa3NVVUZCVVN4TFFVRkxMRk5CUVZNc1JVRkJSVHRSUVVNM1F5eEpRVUZKTEZGQlFWRXNXVUZCV1N4TFFVRkxMRVZCUVVVN1dVRkRNMElzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVcxQ0xFVkJRVVVzUlVGQlJTeERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlFUdFRRVU14UlR0aFFVRk5MRWxCUTBnc1QwRkJUeXhSUVVGUkxFdEJRVXNzVVVGQlVUdFpRVU0xUWl4UFFVRlBMRkZCUVZFc1MwRkJTeXhSUVVGUkxFVkJRemxDTzFsQlEwVXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zWTBGQll5eERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVUU3VTBGRGNFVTdZVUZCVFN4SlFVRkpMRkZCUVZFc1dVRkJXU3hUUVVGVExFVkJRVVU3V1VGRGRFTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFbEJRVWtzVDBGQlR5eFpRVUZaTEUxQlFVMHNRMEZCUXl4WFFVRlhMRVZCUVVVN1owSkJRemRFTEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVUU3WjBKQlJYWkNMRTlCUVUwN1lVRkRWRHRwUWtGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXl4UFFVRlBMRmxCUVZrc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTzJkQ1FVTnFSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhOQ1FVRnpRaXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZCTzJGQlF5OURPMWxCUlVRc1NVRkJTU3hSUVVGUkxFTkJRVU1zVFVGQlRTeExRVUZMTEU5QlFVOHNSVUZCUlR0blFrRkROMElzVVVGQlVTeERRVUZETEUxQlFVMHNSMEZCUnl4UFFVRlBMRU5CUVVFN1lVRkROVUk3V1VGRlJDeFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVFN1UwRkRla0k3WVVGQlRUdFpRVU5JTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVUU3VTBGRGFFTTdTMEZEU2p0QlFVTk1MRU5CUVVNc1EwRkJRU0o5IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBmb3IgRE9NIG1hbmlwdWxhdGlvblxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2pzeC50c1wiIC8+XG5pbXBvcnQgeyBiaW5kQ2hpbGRyZW4sIGJpbmRQcm9wcywgfSBmcm9tIFwiLi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHNcIjtcbi8qKlxuICpcbiAqIEBwYXJhbSB0YWdOYW1lT3JDb21wb25lbnQgLSBuYW1lIG9mIEhUTUwgZWxlbWVudCBvciBmdW5jdGlvbiBjb21wb25lbnRcbiAqIEBwYXJhbSBwcm9wcyAtIHByb3BzIG9mIGVsZW1lbnQgb3IgY29tcG9uZW50XG4gKiAxLiBJZiBgdGFnTmFtZU9yQ29tcG9uZW50YCBpcyB0YWduYW1lLCBwcm9wcyBhcmUgZWxlbWVudCBwcm9wZXJ0aWVzLCBzdWNoIGFzIGNsYXNzLCBpbm5lckhUTUwsIGlkLCBzdHlsZSwgZXRjXG4gKiAyLiBJZiBgdGFnTmFtZU9yQ29tcG9uZW50YCBpcyBhIGZ1bmN0aW9uLCBwcm9wcyBhcmUgdGhhdCBmdW5jdGlvbnMgcGFyYW1ldGVyc1xuICogQHBhcmFtIGNoaWxkcmVuIC0gY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50LiBDYW4gYmUgbm90aGluZywgbnVtYmVyIChjb252ZXJ0ZWQgdG8gc3RyaW5nKSwgc3RyaW5nICh0ZXh0KSwgb3IgYW5vdGhlciBlbGVtZW50LiBBbiBhcnJheSBvZiBhbnkgb2YgdGhlc2Ugd2lsbCBjcmVhdGUgbXVsdGlwbGUgY2hpbGRyZW5cbiAqIEBwYXJhbSBjaGlsZHJlbkFyZ3MgLSByZXN0IHBhcmFtZXRlciBmb3IgY2hpbGRyZW5cbiAqIEByZXR1cm5zIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZU9yQ29tcG9uZW50LCBwcm9wcywgLi4uY2hpbGRyZW4pIHtcbiAgICBpZiAodHlwZW9mICh0YWdOYW1lT3JDb21wb25lbnQpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWVPckNvbXBvbmVudCk7XG4gICAgICAgIGJpbmRQcm9wcyhlbGVtZW50LCBwcm9wcyk7XG4gICAgICAgIGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbik7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgKHRhZ05hbWVPckNvbXBvbmVudCkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gdGFnTmFtZU9yQ29tcG9uZW50KHByb3BzLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBFcnJvcihcInRhZ05hbWVPckNvbXBvbmVudCBpcyBvZiBpbnZhbGlkIHR5cGUuXCIpO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzSmxZWFJsUld4bGJXVnVkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5amNtVmhkR1ZGYkdWdFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96czdPenM3T3p0SFFWRkhPMEZCUTBnc01rSkJRVEpDTzBGQlF6TkNMR2xEUVVGcFF6dEJRVVZxUXl4UFFVRlBMRVZCUjBnc1dVRkJXU3hGUVVOYUxGTkJRVk1zUjBGRFdpeE5RVUZOTEN0Q1FVRXJRaXhEUVVGQk8wRkJiVU4wUXpzN096czdPenM3TzBkQlUwYzdRVUZEU0N4TlFVRk5MRlZCUVZVc1lVRkJZU3hEUVVsNlFpeHJRa0ZIV1N4RlFVTmFMRXRCUVRaQ0xFVkJRemRDTEVkQlFVY3NVVUZCTWtJN1NVRkZPVUlzU1VGQlNTeFBRVUZOTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUzBGQlN5eFJRVUZSTEVWQlFVVTdVVUZEZWtNc1RVRkJUU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZCTzFGQlJURkVMRk5CUVZNc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQk1FSXNRMEZCUXl4RFFVRkJPMUZCUlRsRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVFN1VVRkZMMElzVDBGQlR5eFBRVUZQTEVOQlFVRTdTMEZEYWtJN1UwRkJUU3hKUVVGSkxFOUJRVTBzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhMUVVGTExGVkJRVlVzUlVGQlJUdFJRVU5zUkN4UFFVRlBMR3RDUVVGclFpeERRVUZETEV0QlFWVXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRVHRMUVVOc1JEdEpRVVZFTEU5QlFVOHNTMEZCU3l4RFFVRkRMSGREUVVGM1F5eERRVUZETEVOQlFVRTdRVUZETVVRc1EwRkJRenRCUVVWRUxHVkJRV1VzWVVGQllTeERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnROUyBjcmVhdGVFbGVtZW50IGZvciBuYW1lc3BhY2VkIGVsZW1lbnRzXG4gKi9cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiwgYmluZFByb3BzLCB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuLyoqXG4gKiBDcmVhdGVzIGEgY2hpbGQgZWxlbWVudCB0byBkZVN0YWduYXRlXG4gKiBAcGFyYW0gbmFtZXNwYWNlVVJJIC0gbmFtZXNwYWNlIHVyaVxuICogQHBhcmFtIHRhZ05hbWUgLSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuICogQHBhcmFtIHByb3BzIC0gZWxlbWVudCBwcm9wZXJ0aWVzLCBzdWNoIGFzIGNsYXNzLCBpbm5lckhUTUwsIGlkLCBzdHlsZSwgZXRjXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQuIENhbiBiZSBub3RoaW5nLCBudW1iZXIgKGNvbnZlcnRlZCB0byBzdHJpbmcpLCBzdHJpbmcgKHRleHQpLCBvciBhbm90aGVyIGVsZW1lbnQuIEFuIGFycmF5IG9mIGFueSBvZiB0aGVzZSB3aWxsIGNyZWF0ZSBtdWx0aXBsZSBjaGlsZHJlblxuICogQHBhcmFtIGNoaWxkcmVuUmVzdCAtIHJlc3QgcGFyYW1ldGVyIG9mIGNoaWxkcmVuXG4gKiBAcmV0dXJucyBodG1sIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnROUyA9IChuYW1lc3BhY2VVUkksIHRhZ05hbWUsIHByb3BzLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCB0YWdOYW1lKTtcbiAgICBiaW5kUHJvcHMoZWxlbWVudCwgcHJvcHMsIHRydWUpO1xuICAgIGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudE5TO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxSV3hsYldWdWRFNVRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOeVpXRjBaVVZzWlcxbGJuUk9VeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN1IwRlJSenRCUVVWSUxFOUJRVThzUlVGRlNDeFpRVUZaTEVWQlExb3NVMEZCVXl4SFFVTmFMRTFCUVUwc0swSkJRU3RDTEVOQlFVRTdRVUZGZEVNN096czdPenM3TzBkQlVVYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hsUVVGbExFZEJRVWNzUTBGRE0wSXNXVUZCSzBjc1JVRkRMMGNzVDBGQk1FTXNSVUZETVVNc1MwRkJkME1zUlVGRGVFTXNSMEZCUnl4UlFVRXlRaXhGUVVOMlFpeEZRVUZGTzBsQlExUXNUVUZCVFN4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eFpRVUZaTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVFN1NVRkZMMFFzVTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVUU3U1VGRkwwSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlFUdEpRVVV2UWl4UFFVRlBMRTlCUVU4c1EwRkJRVHRCUVVOc1FpeERRVUZETEVOQlFVRTdRVUZGUkN4bFFVRmxMR1ZCUVdVc1EwRkJRU0o5IiwiLyoqXG4gKiBDcmVhdGVzIGEgcmVmZXJlbmNlIGZvciBhIG5lc3RlZCBjb21wb25lbnRcbiAqIEByZXR1cm5zIGVtcHR5IHJlZiBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlZiA9ICgpID0+ICh7XG4gICAgY3VycmVudDogbnVsbCxcbn0pO1xuLyoqXG4gKiBDcmVhdGVzIGEgcmVmZXJlbmNlIGZvciBhIG5lc3RlZCBjb21wb25lbnRcbiAqIEByZXR1cm5zIGVtcHR5IHJlZiBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVmO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxVbVZtTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyTnlaV0YwWlZKbFppNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZsUVRzN08wZEJSMGM3UVVGRFNDeE5RVUZOTEVOQlFVTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1IwRkJkME1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEYWtVc1QwRkJUeXhGUVVGRkxFbEJRVWs3UTBGRGFFSXNRMEZCUXl4RFFVRkJPMEZCUlVZN096dEhRVWRITzBGQlEwZ3NaVUZCWlN4VFFVRlRMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBQcmVzZXQgLSBiYXNlIGZvciBhIGNvbXBvbmVudFxuICogQHBhY2thZ2VcbiAqL1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBfY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVFbGVtZW50TlMgfSBmcm9tIFwiLi4vY3JlYXRlRWxlbWVudE5TXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVSZWYgfSBmcm9tIFwiLi4vY3JlYXRlUmVmXCI7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBjb21wb25lbnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmVzZXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQgPSBfY3JlYXRlRWxlbWVudDtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50TlMgPSBfY3JlYXRlRWxlbWVudE5TO1xuICAgICAgICB0aGlzLmNyZWF0ZVJlZiA9IF9jcmVhdGVSZWY7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgd2hlbiBjb21wb25lbnQgY2F0Y2hlcyBlcnJvci4gRGVmYXVsdCBiZWhhdmlvdXIgaXMgY29uc29sZS5lcnJvclxuICAgICAgICAgKiBAcGFyYW0gZXJyb3IgLSBlcnJvciBvYmplY3Qgd2l0aCBpbmZvXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2ggPSAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gY29tcG9uZW50IGNhdGNoZXMgYSB3YXJuaW5nLiBEZWZhdWx0IGJlaGF2aW91ciBpcyBjb25zb2xlLndhcm5cbiAgICAgICAgICogQHBhcmFtIG1zZyAtIHdhcm5pbmcgbWVzc2FnZVxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbXBvbmVudERpZFdhcm4gPSAobXNnKSA9PiBjb25zb2xlLndhcm4obXNnKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCBiZWZvcmUgY29tcG9uZW50IGlzIHVwZGF0ZWRcbiAgICAgICAgICogQHJldHVybnMgd2hldGhlciBvciBub3QgY29tcG9uZW50IHNob3VsZCB1cGRhdGUvcmUtcmVuZGVyXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9ICgpID0+IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW5kZXJpbmcgSFRNTCwgbXVzdCBiZSBwYXJ0IG9mIGV4dGVuZGVkIGNsYXNzXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcmV0dXJucyBpZiByZXR1cm5zIG51bGwgZXJyb3Igd2lsbCBiZSB0aHJvd25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVuZGVyID0gKCkgPT4gbnVsbDtcbiAgICB9XG59XG5QcmVzZXQuY3JlYXRlRWxlbWVudCA9IF9jcmVhdGVFbGVtZW50O1xuUHJlc2V0LmNyZWF0ZUVsZW1lbnROUyA9IF9jcmVhdGVFbGVtZW50TlM7XG5QcmVzZXQuY3JlYXRlUmVmID0gX2NyZWF0ZVJlZjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgySmhjMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjSEpwZG1GMFpTOWZZbUZ6WlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPMGRCVTBjN1FVRkZTQ3hQUVVGUExFVkJRVU1zVDBGQlR5eEpRVUZKTEdOQlFXTXNSVUZCUXl4TlFVRk5MR3RDUVVGclFpeERRVUZCTzBGQlF6RkVMRTlCUVU4c1JVRkJReXhQUVVGUExFbEJRVWtzWjBKQlFXZENMRVZCUVVNc1RVRkJUU3h2UWtGQmIwSXNRMEZCUVR0QlFVTTVSQ3hQUVVGUExFVkJRVU1zVDBGQlR5eEpRVUZKTEZWQlFWVXNSVUZCUXl4TlFVRk5MR05CUVdNc1EwRkJRVHRCUVdsRGJFUXNNRUpCUVRCQ08wRkJRekZDT3p0SFFVVkhPMEZCUTBnc1RVRkJUU3hQUVVGblFpeE5RVUZOTzBsQlFUVkNPMUZCVVc5Q0xHdENRVUZoTEVkQlFVY3NZMEZCWXl4RFFVRkJPMUZCUlRsQ0xHOUNRVUZsTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVUU3VVVGRmJFTXNZMEZCVXl4SFFVRkhMRlZCUVZVc1EwRkJRVHRSUVVWMFF6czdPenRYUVVsSE8xRkJRMGtzYzBKQlFXbENMRWRCUVVjc1EwRkJReXhMUVVGWkxFVkJRVkVzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVUU3VVVGRmRrVTdPenM3VjBGSlJ6dFJRVU5KTEhGQ1FVRm5RaXhIUVVGSExFTkJRVU1zUjBGQlZ5eEZRVUZSTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTzFGQlJXeEZPenM3VjBGSFJ6dFJRVU5KTERCQ1FVRnhRaXhIUVVGSExFZEJRVmtzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUVR0UlFVVnNSRHM3T3pzN08xZEJUVWM3VVVGRFlTeFhRVUZOTEVkQlFVY3NSMEZCWlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGQk8wbEJSVzVFTEVOQlFVTTdPMEZCZWtNd1FpeHZRa0ZCWVN4SFFVRkhMR05CUVdNc1EwRkJRVHRCUVVVNVFpeHpRa0ZCWlN4SFFVRkhMR2RDUVVGblFpeERRVUZCTzBGQlJXeERMR2RDUVVGVExFZEJRVWNzVlVGQlZTeERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIEV2ZW50c1xuICogQHBhY2thZ2VcbiAqL1xuaW1wb3J0IHsgUHJlc2V0IGFzIEJhc2VDb21wb25lbnQgfSBmcm9tIFwiLi9fYmFzZVwiO1xuY29uc3QgZXZlbnROYW1lcyA9IFtcbiAgICBcIm9uRm9jdXNcIixcbiAgICBcIm9uQmx1clwiLFxuICAgIFwib25Gb2N1c0luXCIsXG4gICAgXCJvbkZvY3VzT3V0XCIsXG4gICAgXCJvbkFuaW1hdGlvblN0YXJ0XCIsXG4gICAgXCJvbkFuaW1hdGlvbkNhbmNlbFwiLFxuICAgIFwib25BbmltYXRpb25FbmRcIixcbiAgICBcIm9uQW5pbWF0aW9uSXRlcmF0aW9uXCIsXG4gICAgXCJvblRyYW5zaXRpb25TdGFydFwiLFxuICAgIFwib25UcmFuc2l0aW9uQ2FuY2VsXCIsXG4gICAgXCJvblRyYW5zaXRpb25FbmRcIixcbiAgICBcIm9uVHJhbnNpdGlvblJ1blwiLFxuICAgIFwib25BdXhDbGlja1wiLFxuICAgIFwib25DbGlja1wiLFxuICAgIFwib25EYmxDbGlja1wiLFxuICAgIFwib25Nb3VzZURvd25cIixcbiAgICBcIm9uTW91c2VFbnRlclwiLFxuICAgIFwib25Nb3VzZUxlYXZlXCIsXG4gICAgXCJvbk1vdXNlTW92ZVwiLFxuICAgIFwib25Nb3VzZU92ZXJcIixcbiAgICBcIm9uTW91c2VPdXRcIixcbiAgICBcIm9uTW91c2VVcFwiLFxuXTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgY2xhc3MgRXZlbnRzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kcyBldmVudCBsaXN0ZW5lcnMgZXZlbnRcbiAgICAgICAgICogRG8gbm90IGNhbGwgbWFudWFsbHlcbiAgICAgICAgICogQHBhY2FrZ2VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYmluZEV2ZW50TGlzdGVuZXJzID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJpbmRzIGV2ZW50IGxpc3RlbmVycyBldmVudFxuICAgICAgICAgKiBEbyBub3QgY2FsbCBtYW51YWxseVxuICAgICAgICAgKiBAcGFjYWtnZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bmJpbmRFdmVudExpc3RlbmVycyA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIgPSAoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgb2YgZXZlbnROYW1lcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxFdmVudE5hbWUgPSBldmVudE5hbWUuc2xpY2UoMikudG9Mb3dlckNhc2UoKSwgY2FsbGJhY2sgPSB0aGlzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBldmVudExpc3RlbmVyKGh0bWxFdmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDJWMlpXNTBjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOWxkbVZ1ZEhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenRIUVZOSE8wRkJSVWdzVDBGQlR5eEZRVUZETEUxQlFVMHNTVUZCU1N4aFFVRmhMRVZCUVVNc1RVRkJUU3hUUVVGVExFTkJRVUU3UVVGWkwwTXNUVUZCVFN4VlFVRlZMRWRCUVhGQ08wbEJRMnBETEZOQlFWTTdTVUZEVkN4UlFVRlJPMGxCUTFJc1YwRkJWenRKUVVOWUxGbEJRVms3U1VGRFdpeHJRa0ZCYTBJN1NVRkRiRUlzYlVKQlFXMUNPMGxCUTI1Q0xHZENRVUZuUWp0SlFVTm9RaXh6UWtGQmMwSTdTVUZEZEVJc2JVSkJRVzFDTzBsQlEyNUNMRzlDUVVGdlFqdEpRVU53UWl4cFFrRkJhVUk3U1VGRGFrSXNhVUpCUVdsQ08wbEJRMnBDTEZsQlFWazdTVUZEV2l4VFFVRlRPMGxCUTFRc1dVRkJXVHRKUVVOYUxHRkJRV0U3U1VGRFlpeGpRVUZqTzBsQlEyUXNZMEZCWXp0SlFVTmtMR0ZCUVdFN1NVRkRZaXhoUVVGaE8wbEJRMklzV1VGQldUdEpRVU5hTEZkQlFWYzdRMEZEWkN4RFFVRkJPMEZCY1VoRUxEQkNRVUV3UWp0QlFVTXhRaXhOUVVGTkxFOUJRV2RDTEUxQlFVOHNVMEZCVVN4aFFVRmhPMGxCUVd4RU96dFJRVVZKT3pzN08xZEJTVWM3VVVGRFowSXNkVUpCUVd0Q0xFZEJRVWNzUTBGQlF5eFBRVUZ2UWl4RlFVRlJMRVZCUVVVN1dVRkRia1VzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUVR0UlFVTnFSQ3hEUVVGRExFTkJRVUU3VVVGRlJEczdPenRYUVVsSE8xRkJRMmRDTEhsQ1FVRnZRaXhIUVVGSExFTkJRVU1zVDBGQmIwSXNSVUZCVVN4RlFVRkZPMWxCUTNKRkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNUMEZCVHl4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVOQlFVRTdVVUZEY0VRc1EwRkJReXhEUVVGQk8xRkJSVThzYlVKQlFXTXNSMEZCUnl4RFFVRkRMR0ZCUVRSQ0xFVkJRVkVzUlVGQlJUdFpRVU0xUkN4TFFVRkxMRTFCUVUwc1UwRkJVeXhKUVVGSkxGVkJRVlVzUlVGQlJUdG5Ra0ZEYUVNc1RVRkJUU3hoUVVGaExFZEJRVWNzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRVVVzUlVGRGJFUXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlFUdG5Ra0ZGT1VJc1NVRkJTU3hSUVVGUkxFdEJRVXNzVTBGQlV5eEpRVUZKTEZGQlFWRXNXVUZCV1N4UlFVRlJMRVZCUVVVN2IwSkJRM2hFTEdGQlFXRXNRMEZCUXl4aFFVRmhMRVZCUVVVc1VVRkJPRU1zUTBGQlF5eERRVUZCTzJsQ1FVTXZSVHRoUVVOS08xRkJRMHdzUTBGQlF5eERRVUZCTzBsQlJVd3NRMEZCUXp0RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgVXRpbHMgLSB1dGlsaXRpZXMgZm9yIERlU3RhZ25hdGVcbiAqL1xuLyoqXG4gKiBDaGVja3MgaWYgdmFsMSBhbmQgdmFsMiBhcmUgZXF1YWxcbiAqIEBwYXJhbSB2YWwxIC0gdmFsdWUgdG8gY2hlY2sgZm9yIGVxdWFsaXR5XG4gKiBAcGFyYW0gdmFsMiAtIHZhbHVlIHRvIGNvbXBhcmUgYWdhaW5zdCB2YWwxXG4gKiBAcGFyYW0gbWF4RGVwdGggLSBtYXggcmVjdXJzaW9uIGRlcHRoIHRvIGNyYXdsIGFuIG9iamVjdC4gQWZ0ZXIgbWF4IGRlcHRoIGlzXG4gKiByZWFjaGVkLCB0aGUgdHdvIHZhbHVlcyBhcmUgc2ltcGx5IGNvbXBhcmVkIHdpdGggYD09PWBcbiAqIEBwYXJhbSBtYXhMZW5ndGggLSBtYXggbGVuZ3RoIG9mIGFycmF5IHRvIGNyYXdsLiBJZiBtYXggbGVudGggaXMgcmVhY2hlZCwgdHdvXG4gKiBhcnJheXMgd2lsbCBzaW1wbHkgYmUgY29tcGFyZWQgd2l0aCBgPT09YFxuICogQHJldHVybnMgYHZhbDEgPT09IHZhbDJgXG4gKi9cbmV4cG9ydCBjb25zdCBpc0VxdWFsID0gKHZhbDEsIHZhbDIsIG1heERlcHRoID0gMywgbWF4TGVuZ3RoID0gMTApID0+IHtcbiAgICBpZiAobWF4RGVwdGggPT09IDApIHsgLy8gSWYgbWF4RGVwdGggcmVhY2hlZCwganVzdCBydW4gPT09XG4gICAgICAgIHJldHVybiB2YWwxID09PSB2YWwyO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsMSAhPT0gdHlwZW9mIHZhbDIpIHsgLy8gSWYgdGhleSBhcmVuJ3QgdGhlIHNhbWUgdHlwZSwgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHZhbDEgaW5zdGFuY2VvZiBBcnJheSAmJiB2YWwyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgaWYgKHZhbDEubGVuZ3RoICE9PSB2YWwyLmxlbmd0aCkgeyAvLyBJZiBhcnJheXMgaGF2ZSBkaWZmZXJlbnQgbGVuZ3Roc1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwxLmxlbmd0aCA+IG1heExlbmd0aCB8fCB2YWwyLmxlbmd0aCA+IG1heExlbmd0aCkgeyAvLyBJZiBhcnJheSBpcyB0b28gYmlnXG4gICAgICAgICAgICByZXR1cm4gdmFsMSA9PT0gdmFsMjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsMS5sZW5ndGg7IGluZGV4KyspIHsgLy8gR28gdGhyb3VnaCBlYWNoIGl0ZW1cbiAgICAgICAgICAgIGlmICghaXNFcXVhbCh2YWwxW2luZGV4XSwgdmFsMltpbmRleF0sIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkgeyAvLyBUZXN0IGlmIHR3byBhcnJheSBpdGVtcyBhcmUgZXF1YWxcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbDEgaW5zdGFuY2VvZiBPYmplY3QgJiYgdmFsMiBpbnN0YW5jZW9mIE9iamVjdCkgeyAvLyBJZiBvYmplY3RcbiAgICAgICAgaWYgKCFpc0VxdWFsKE9iamVjdC5rZXlzKHZhbDEpLCBPYmplY3Qua2V5cyh2YWwyKSwgbWF4RGVwdGggLSAxLCBtYXhMZW5ndGgpKSB7IC8vIElmIHRoZXkgZG9uJ3QgaGF2ZSBoZSBzYW1lIGtleXNcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh2YWwxKSkgeyAvLyBHbyB0aHJvdWdoIGFuZCB0ZXN0IGVhY2ggdmFsdWVcbiAgICAgICAgICAgIGlmICghaXNFcXVhbCh2YWwxW2tleV0sIHZhbDJba2V5XSwgbWF4RGVwdGggLSAxLCBtYXhMZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsMSA9PT0gdmFsMjtcbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaXNFcXVhbCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWFJwYkhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZkWFJwYkhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPMGRCVVVjN1FVRkZTRHM3T3pzN096czdPMGRCVTBjN1FVRkRTQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeFBRVUZQTEVkQlFVY3NRMEZEYmtJc1NVRkJZU3hGUVVOaUxFbEJRV0VzUlVGRFlpeFJRVUZSTEVkQlFVY3NRMEZCUXl4RlFVTmFMRk5CUVZNc1IwRkJSeXhGUVVGRkxFVkJRMUFzUlVGQlJUdEpRVU5VTEVsQlFVa3NVVUZCVVN4TFFVRkxMRU5CUVVNc1JVRkJSU3hGUVVGRkxHOURRVUZ2UXp0UlFVTjBSQ3hQUVVGUExFbEJRVWtzUzBGQlN5eEpRVUZKTEVOQlFVRTdTMEZEZGtJN1UwRkJUU3hKUVVGSkxFOUJRVThzU1VGQlNTeExRVUZMTEU5QlFVOHNTVUZCU1N4RlFVRkZMRVZCUVVVc05rTkJRVFpETzFGQlEyNUdMRTlCUVU4c1MwRkJTeXhEUVVGQk8wdEJRMlk3U1VGRlJDeEpRVUZKTEVsQlFVa3NXVUZCV1N4TFFVRkxMRWxCUVVrc1NVRkJTU3haUVVGWkxFdEJRVXNzUlVGQlJUdFJRVU5vUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFdEJRVXNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZMRzFEUVVGdFF6dFpRVU5zUlN4UFFVRlBMRXRCUVVzc1EwRkJRVHRUUVVObU8xRkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRk5CUVZNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEZOQlFWTXNSVUZCUlN4RlFVRkZMSE5DUVVGelFqdFpRVU01UlN4UFFVRlBMRWxCUVVrc1MwRkJTeXhKUVVGSkxFTkJRVUU3VTBGRGRrSTdVVUZGUkN4TFFVRkxMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFVkJRVVVzUlVGQlJTeEZRVUZGTEhWQ1FVRjFRanRaUVVOMlJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1VVRkJVU3hIUVVGSExFTkJRVU1zUlVGQlJTeFRRVUZUTEVOQlFVTXNSVUZCUlN4RlFVRkZMRzlEUVVGdlF6dG5Ra0ZEYmtjc1QwRkJUeXhMUVVGTExFTkJRVUU3WVVGRFpqdFRRVU5LTzFGQlJVUXNUMEZCVHl4SlFVRkpMRU5CUVVFN1MwRkRaRHRUUVVGTkxFbEJRVWtzU1VGQlNTeFpRVUZaTEUxQlFVMHNTVUZCU1N4SlFVRkpMRmxCUVZrc1RVRkJUU3hGUVVGRkxFVkJRVVVzV1VGQldUdFJRVU4yUlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVOU0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUTJwQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUTJwQ0xGRkJRVkVzUjBGQlJ5eERRVUZETEVWQlExb3NVMEZCVXl4RFFVTmFMRVZCUVVVc1JVRkJSU3hyUTBGQmEwTTdXVUZEYmtNc1QwRkJUeXhMUVVGTExFTkJRVUU3VTBGRFpqdFJRVVZFTEV0QlFVc3NUVUZCVFN4SFFVRkhMRWxCUVVrc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RlFVRkZMR2xEUVVGcFF6dFpRVWR3UlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVOUUxFbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZEYWtJc1NVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVU5zUWl4UlFVRlJMRWRCUVVjc1EwRkJReXhGUVVOYUxGTkJRVk1zUTBGRFdpeEZRVUZGTzJkQ1FVTkRMRTlCUVU4c1MwRkJTeXhEUVVGQk8yRkJRMlk3VTBGRFNqdFJRVVZFTEU5QlFVOHNTVUZCU1N4RFFVRkJPMHRCUTJRN1NVRkZSQ3hQUVVGUExFbEJRVWtzUzBGQlN5eEpRVUZKTEVOQlFVRTdRVUZEZUVJc1EwRkJReXhEUVVGQk8wRkJSVVFzWlVGQlpUdEpRVU5ZTEU5QlFVODdRMEZEVml4RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZSBtYWluIGRlc3RhZ25hdGUgY2xhc3NcbiAqIEBmaWxlIERlU3RhZ25hdGUgY29tcG9uZW50IGNsYXNzXG4gKiBAcHJlc2VydmVcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxpbmVzICovXG5pbXBvcnQgeyBFdmVudHMgYXMgQmFzZSB9IGZyb20gXCIuL3ByaXZhdGUvX2V2ZW50c1wiO1xuaW1wb3J0IHVybCBmcm9tIFwiLi9wcml2YXRlL191cmxcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi91dGlsc1wiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBAY2xhc3NkZXNjIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNsYXNzXG4gKiBAbmFtZXNwYWNlXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBjbGFzcyBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0gcGFyZW50IC0gcGFyZW50IG9mIHRoaXMgZWxlbWVudFxuICAgICAqIEBwYXJhbSBwcm9wcyAtIGVsZW1lbnQgcHJvcGVydGllczsgd29ya3MgbGlrZSBSZWFjdCBQcm9wc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgcHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICAvKipcbiAgICAgICAgICogU3RhdGUgb2YgY29tcG9uZW50LiBXb3JrcyBzaW1pbGFyIFJlYWN0IFN0YXRlXG4gICAgICAgICAqIEB0eXBlIHt1bmRlZmluZWQgfCBPYmplY3QuPHN0cmluZywgdW5rbm93bj59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgaW5pdGlhbCBzdGF0ZSB3YXMgc2V0IGluIGluaXRpYWxpemVyXG4gICAgICAgICAqIERvIG5vdCB0aHJvdyBlcnJvciB3aXRoIGRpcmVjdCBzdGF0ZSBzZXR0aW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGNvbXBvbmVudCBpcyBtb3VudGVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9kaWRNb3VudCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hhdCB0byBjYWxsIGJlZm9yZSBjb21wb25lbnQgdXBkYXRlIChzdGF0ZSBtdXRhdGlvbilcbiAgICAgICAgICogQHBhcmFtIHtQcm9wc30gcHJldlByb3BzIC0gcHJldmlvdXMgcHJvcHNcbiAgICAgICAgICogQHBhcmFtIHByZXZTdGF0ZSAtIHByZXZpb3VzIHN0YXRlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgPSAocHJldlByb3BzLCBwcmV2U3RhdGUpID0+IFtwcmV2UHJvcHMsIHByZXZTdGF0ZV07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZXMgYSBjb21wb25lbnQgdG8gdXBkYXRlXG4gICAgICAgICAqIEZvbGxvd3MgdGhlIHNhbWUgY29tcG9uZW50IHVwZGF0aW5nIHByb2NlZHVyZSBhcyBzZXRTdGF0ZSB3aXRob3V0IG1vZGlmeWluZyBzdGF0ZVxuICAgICAgICAgKiBAcmV0dXJucyByZXR1cm5zIGVycm9yIGlmIGVycm9yIGlzIHRocm93blxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnREaWRVcGRhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDIuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyksIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGUodGhpcy5fZXhlY1JlbmRlcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyBpZiB0aGUgc3RhdGUgY2hhbmdlZCBmcm9tIHRoZSBwcmV2aW91cyBzdGF0ZS4gQ2FuIG1lIGF0dGFjaGVkIHRvXG4gICAgICAgICAqIGBzaG91bGRDb21wb25lbnRVcGRhdGVgXG4gICAgICAgICAqIEBwYXJhbSBrZXlzIC0gbGlzdCBvZiBrZXlzIHRvIGNyYXdsLiBJZiBsZWZ0IHVuZGVmaW5lZCAoZGVmYXVsdCkgdGhlblxuICAgICAgICAgKiB1c2UgYWxsIGtleXMuIFNob3VsZCBiZSBga2V5b2YgU3RhdGVgLCBidXQgdGhlcmUgd2VyZSBzb21lIFR5cGVzY3JpcHRcbiAgICAgICAgICogdHJvdWJsZXMuXG4gICAgICAgICAqIEBwYXJhbSBtYXhEZXB0aCAtIG1heCByZWN1cnNpb24gZGVwdGggdG8gY3Jhd2wgYW4gb2JqZWN0LiBBZnRlciBtYXggZGVwdGhcbiAgICAgICAgICogaXMgcmVhY2hlZCwgdGhlIHR3byB2YWx1ZXMgYXJlIHNpbXBseSBjb21wYXJlZCB3aXRoIGA9PT1gXG4gICAgICAgICAqIEBwYXJhbSBtYXhMZW5ndGggLSBtYXggbGVuZ3RoIG9mIGFycmF5IHRvIGNyYXdsLiBJZiBtYXggbGVudGggaXMgcmVhY2hlZCxcbiAgICAgICAgICogdHdvIGFycmF5cyB3aWxsIHNpbXBseSBiZSBjb21wYXJlZCB3aXRoIGA9PT1gXG4gICAgICAgICAqIEByZXR1cm5zIGB2YWwxID09PSB2YWwyYFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGF0ZURpZENoYW5nZSA9IChrZXlzLCBtYXhEZXB0aCA9IDMsIG1heExlbmd0aCA9IDE1KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoa2V5cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF1dGlscy5pc0VxdWFsKHRoaXMuX3N0YXRlLCB0aGlzLl9wcmV2U3RhdGUsIG1heERlcHRoLCBtYXhMZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB7fSwgcHJldlN0YXRlID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IHRoaXMuX3N0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgcHJldlN0YXRlW2tleV0gPSAoX2EgPSB0aGlzLl9wcmV2U3RhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICF1dGlscy5pc0VxdWFsKHN0YXRlLCBwcmV2U3RhdGUsIG1heERlcHRoLCBtYXhMZW5ndGgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBzdGF0ZVxuICAgICAgICAgKiBAcGFyYW0gb2JqIC0gc3RhdGUgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2V0U3RhdGUgPSAob2JqKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldlN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fc3RhdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyksIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuX3N0YXRlLCBvYmopO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkQ29udGVudCA9IHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9leGVjUmVuZGVyKClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHJlbmRlcmVkQ29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmcsIG1heC1sZW4gKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWwgbW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEBwYXJhbSBwYXJlbnQgLSBwYXJlbnQgZWxlbWVudCB0byBtb3VudCB3aXRoOyBvcHRpb25hbFxuICAgICAgICAgKiBAcmV0dXJucyAtIHJlc3VsdCBvZiBhcHBlbmQgY2hpbGQgdG8gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91bnRDb21wb25lbnQgPSAocGFyZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDIuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbXBvbmVudFdpbGxNb3VudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDMuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50TGlzdGVuZXJzKHRoaXMuX3BhcmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlkTW91bnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMuY29tcG9uZW50RGlkTW91bnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmZvckVhY2goKGNoaWxkKSA9PiBmcmFnbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdGlhbCBtb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHJldHVybnMgLSByZXN1bHQgb2YgYXBwZW5kIGNoaWxkIHRvIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdW50ID0gdGhpcy5tb3VudENvbXBvbmVudDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVubW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEByZXR1cm5zIC0gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bm1vdW50Q29tcG9uZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RGlkV2FybihgV0FSTjogY29kZSA0LiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVuYmluZEV2ZW50TGlzdGVuZXJzKHRoaXMuX3BhcmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRNb3VudCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbm1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcmV0dXJucyAtIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudW5tb3VudCA9IHRoaXMudW5tb3VudENvbXBvbmVudDtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuLCBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIGNoaWxkcmVuIGZyb20gdGhpcy5fcGFyZW50XG4gICAgICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fcmVtb3ZlQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDIuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5fcGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5fcGFyZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogRXhlY3V0ZXMgbmV3IHJlbmRlclxuICAgICAgICAgKiBAcmV0dXJucyByZW5kZXJlZCBjb250ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9leGVjUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlcyB0aGUgY29tcG9uZW50XG4gICAgICAgICAqIEBwYXJhbSByZW5kZXJlZENvbnRlbnQgLSByZW5kZXJlZCBjb250ZW50IGZyb20gZXhlY3V0aW5nIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fdXBkYXRlID0gKHJlbmRlcmVkQ29udGVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICBpZiAocmVuZGVyZWRDb250ZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcmVuZGVyZWRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuX3BhcmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlbmRlcmVkQ29udGVudCkge1xuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMuX3BhcmVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFwcGVuZENoaWxkKHJlbmRlcmVkQ29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVuZGVyZWRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgKF9jID0gdGhpcy5jb21wb25lbnREaWRVcGRhdGUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9oYW5kbGVFcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2goZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoU3RyaW5nKGVycikpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaChlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmVudCBpcyBudWxsLCBleHBlY3RlZCBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgZ2V0U3RhdGUgZ2V0dGVyIGFzIHRoaXMuc3RhdGUgaXRzZWxmIGlzIHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBnZXRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBjb21wb25lbnQgc3RhdGVcbiAgICAgKiBAcmV0dXJucyBjb21wb25lbnQgc3RhdGVcbiAgICAgKi9cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBjb21wb25lbnQgc3RhdGVcbiAgICAgKiBXQVJOOiBkbyBub3QgdXNlIHRoaXMgbWV0aG9kIHRvIG11dGF0ZSB0aGUgc3RhdGUgZGlyZWN0bHlcbiAgICAgKiBAcGFyYW0gb2JqIC0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgc2V0IHN0YXRlKG9iaikge1xuICAgICAgICBpZiAodGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMS4gU2VlICR7dXJsfS5gKSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IG9iajtcbiAgICAgICAgICAgIHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVibGljIGdldFByb3BzIGdldHRlciBhcyB0aGlzLnByb3BzIGl0c2VsZiBpcyBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyBjb21wb25lbnQgcHJvcHNcbiAgICAgKi9cbiAgICBnZXQgZ2V0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHBhcmVudCBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gcGFyZW50IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0IHBhcmVudChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcGFyZW50IGVsZW1lbnQgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAcmV0dXJucyBwYXJlbnRcbiAgICAgKi9cbiAgICBnZXQgcGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgZGlkTW91bnQgdmFsdWUgcHVibGljbHlcbiAgICAgKiBAcmV0dXJucyBpZiBtb3VudGVkXG4gICAgICovXG4gICAgZ2V0IGRpZE1vdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlkTW91bnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByZXZpb3VzIHN0YXRlLiBVbmRlZmluZWQgaWYgbm8gcHJldmlvdXMgc3RhdGUgZXhpc3RzXG4gICAgICogQHJldHVybnMgcHJldmlvdXMgc3RhdGVcbiAgICAgKi9cbiAgICBnZXQgcHJldlN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJldlN0YXRlO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXRjRzl1Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMk52YlhCdmJtVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN096dEhRVlZITzBGQlEwZ3NPRUpCUVRoQ08wRkJSVGxDTEU5QlFVOHNSVUZCUXl4TlFVRk5MRWxCUVVrc1NVRkJTU3hGUVVGRExFMUJRVTBzYlVKQlFXMUNMRU5CUVVFN1FVRkZhRVFzVDBGQlR5eEhRVUZITEUxQlFVMHNaMEpCUVdkQ0xFTkJRVUU3UVVGRGFFTXNUMEZCVHl4TFFVRkxMRTFCUVUwc1UwRkJVeXhEUVVGQk8wRkJSVE5DT3pzN096czdSMEZOUnp0QlFVTklMRTFCUVUwc1QwRkJaMElzVTBGSGNFSXNVMEZCVVN4SlFVRkpPMGxCTmtKV096czdPMDlCU1VjN1NVRkRTQ3haUVVGdlFpeE5RVUV5UWl4RlFVRlpMRXRCUVdFN1VVRkRjRVVzUzBGQlN5eEZRVUZGTEVOQlFVRTdVVUZFWjBRc1ZVRkJTeXhIUVVGTUxFdEJRVXNzUTBGQlVUdFJRV2hEZUVVN096dFhRVWRITzFGQlEwc3NWMEZCVFN4SFFVRlZMRVZCUVZjc1EwRkJRVHRSUVVWdVF6czdPMWRCUjBjN1VVRkRTeXgzUWtGQmJVSXNSMEZCUnl4TFFVRkxMRU5CUVVFN1VVRlBia003TzFkQlJVYzdVVUZEU3l4alFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGQk8xRkJjMEo2UWpzN096czdWMEZMUnp0UlFVTkpMRFJDUVVGMVFpeEhRVUZITEVOQlF6ZENMRk5CUVdkQ0xFVkJRMmhDTEZOQlFXZENMRVZCUTBZc1JVRkJSU3hEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkJPMUZCTkVVelF6czdPenRYUVVsSE8xRkJRMkVzWjBKQlFWY3NSMEZCUnl4SFFVRnBRaXhGUVVGRk96dFpRVU0zUXl4SlFVRkpPMmRDUVVOQkxFMUJRVUVzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXdyUTBGQmRrSXNTVUZCU1N4RlFVRjFRanRuUWtGRk0wSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhMUVVGTExGTkJRVk1zUlVGQlJUdHZRa0ZETlVJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHpRa0ZCYzBJc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlFUdHBRa0ZEYUVRN1owSkJSVVFzU1VGQlNTeERRVUZETEhWQ1FVRjFRaXhEUVVONFFpeHJRa0ZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGVkxHOUNRVU53UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVOcVFpeERRVUZCTzJkQ1FVVkVMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVFN1lVRkRia003V1VGQlF5eFBRVUZQTEVkQlFWa3NSVUZCUlN3d1FrRkJNRUlzUTBGQlF6dG5Ra0ZET1VNc1QwRkJUeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJPMkZCUTJoRE8xRkJRMHdzUTBGQlF5eERRVUZCTzFGQlJVUTdPenM3T3pzN096czdPMWRCVjBjN1VVRkRZU3h0UWtGQll5eEhRVUZITEVOQlF6ZENMRWxCUVdsQ0xFVkJRMnBDTEZGQlFWRXNSMEZCUnl4RFFVRkRMRVZCUTFvc1UwRkJVeXhIUVVGSExFVkJRVVVzUlVGRFVDeEZRVUZGT3p0WlFVTlVMRWxCUVVrc1NVRkJTU3hMUVVGTExGTkJRVk1zUlVGQlJUdG5Ra0ZEY0VJc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlEycENMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRMWdzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZEWml4UlFVRlJMRVZCUTFJc1UwRkJVeXhEUVVOYUxFTkJRVUU3WVVGRFNqdFpRVVZFTEUxQlFVMHNTMEZCU3l4SFFVRTJRaXhGUVVGRkxFVkJRM1JETEZOQlFWTXNSMEZCTmtJc1JVRkJSU3hEUVVGQk8xbEJSVFZETEV0QlFVc3NUVUZCVFN4SFFVRkhMRWxCUVVrc1NVRkJTU3hGUVVGRk8yZENRVU53UWl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWtzU1VGQlNTeERRVUZETEUxQlFXMURMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVUU3WjBKQlF6TkVMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGRFZDeEpRVUZKTEVOQlFVTXNWVUZCYlVRc01FTkJRVWNzUjBGQlJ5eERRVUZETEVOQlFVRTdZVUZEZGtVN1dVRkZSQ3hQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhGUVVGRkxGRkJRVkVzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUVR0UlFVTm9SU3hEUVVGRExFTkJRVUU3VVVGRlJEczdPenRYUVVsSE8xRkJRMkVzWVVGQlVTeEhRVUZITEVOQlFVTXNSMEZCYlVJc1JVRkJaMElzUlVGQlJUczdXVUZETjBRc1NVRkJTVHRuUWtGRFFTeE5RVUZCTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzSzBOQlFYaENMRWxCUVVrc1JVRkJkMEk3WjBKQlJUVkNMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUzBGQlN5eFRRVUZUTEVWQlFVVTdiMEpCUXpWQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVRTdhVUpCUTJoRU8yZENRVVZFTEVsQlFVa3NRMEZCUXl4VlFVRlZMSEZDUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUVR0blFrRkZiRU1zU1VGQlNTeERRVUZETEhWQ1FVRjFRaXhEUVVONFFpeHJRa0ZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGVkxHOUNRVU53UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVOcVFpeERRVUZCTzJkQ1FVVkVMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRVHRuUWtGRkwwSXNUVUZCVFN4bFFVRmxMRWRCUVVjc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4RlFVRkZPMjlDUVVOb1JDeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHR2UWtGRGNFSXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRVHRuUWtGRlppeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGQk8yRkJRMmhETzFsQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVc01FSkJRVEJDTEVOQlFVTTdaMEpCUTNKRExFOUJRVThzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRVHRoUVVOb1F6dFJRVU5NTEVOQlFVTXNRMEZCUVR0UlFVVkVMR2RGUVVGblJUdFJRVU5vUlRzN096dFhRVWxITzFGQlEyRXNiVUpCUVdNc1IwRkJSeXhEUVVNM1FpeE5RVUZ2UWl4RlFVTlNMRVZCUVVVN08xbEJRMlFzU1VGQlNUdG5Ra0ZEUVN4SlFVRkpMRTFCUVUwc1MwRkJTeXhUUVVGVExFVkJRVVU3YjBKQlEzUkNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZCTzJsQ1FVTjJRanRuUWtGRlJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRXRCUVVzc1UwRkJVeXhGUVVGRk8yOUNRVU0xUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGQk8ybENRVU5vUkR0blFrRkZSQ3hOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVFN1owSkJSUzlDTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUjBGQlJ5eEpRVUZKTEVOQlFVRTdaMEpCUlM5Q0xFMUJRVUVzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXdyUTBGQmRrSXNTVUZCU1N4RlFVRjFRanRuUWtGRk0wSXNTVUZCU1N4VFFVRlRMRXRCUVVzc1NVRkJTU3hGUVVGRk8yOUNRVU53UWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGQk8ybENRVU5vUkR0blFrRkZSQ3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZCTzJkQ1FVVnlReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUVR0blFrRkRja0lzVFVGQlFTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xDdERRVUYwUWl4SlFVRkpMRVZCUVhOQ08yZENRVVV4UWl4SlFVRkpMRk5CUVZNc1dVRkJXU3hMUVVGTExFVkJRVVU3YjBKQlF6VkNMRTFCUVUwc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eHpRa0ZCYzBJc1JVRkJSU3hEUVVGRE8yOUNRVVZzUkN4VFFVRjFRaXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkJPMjlDUVVWNFJTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZCTzJsQ1FVTTFRenRuUWtGRlJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZCTzJGQlF6ZERPMWxCUVVNc1QwRkJUeXhIUVVGWkxFVkJRVVVzTUVKQlFUQkNMRU5CUVVNN1owSkJRemxETEU5QlFVOHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlFUdGhRVU5vUXp0UlFVTk1MRU5CUVVNc1EwRkJRVHRSUVVWRU96czdWMEZIUnp0UlFVTmhMRlZCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZCTzFGQlJUTkRPenM3VjBGSFJ6dFJRVU5oTEhGQ1FVRm5RaXhIUVVGSExFZEJRVk1zUlVGQlJUczdXVUZETVVNc1NVRkJTVHRuUWtGRFFTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRXRCUVVzc1UwRkJVeXhGUVVGRk8yOUNRVU0xUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4eFFrRkJjVUlzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUVR0cFFrRkROVVE3WjBKQlJVUXNUVUZCUVN4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEN0RFFVRjZRaXhKUVVGSkxFVkJRWGxDTzJkQ1FVVTNRaXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZCTzJkQ1FVVjJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVRTdaMEpCUTNSQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkJPMkZCUTNwQ08xbEJRVU1zVDBGQlR5eEhRVUZaTEVWQlFVVXNNRUpCUVRCQ0xFTkJRVU03WjBKQlF6bERMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdZVUZEZWtJN1VVRkZUQ3hEUVVGRExFTkJRVUU3VVVGRlJEczdPMWRCUjBjN1VVRkRZU3haUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGQk8xRkJReTlETEN0RVFVRXJSRHRSUVVVdlJEczdPMWRCUjBjN1VVRkRTeXh2UWtGQlpTeEhRVUZITEVkQlFWTXNSVUZCUlR0WlFVTnFReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVNMVFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkJPMkZCUTJoRU8xbEJSVVFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSVHRuUWtGRE5VSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJUdHZRa0ZEZUVJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlFUdHBRa0ZEYmtRN1lVRkRTanRSUVVOTUxFTkJRVU1zUTBGQlFUdFJRVVZFT3pzN1YwRkhSenRSUVVOTExHZENRVUZYTEVkQlFVY3NSMEZCWlN4RlFVRkZPMWxCUTI1RExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVXNRMEZCUVR0WlFVVjBRaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUVR0UlFVTjRRaXhEUVVGRExFTkJRVUU3VVVGSFJEczdPenRYUVVsSE8xRkJRMHNzV1VGQlR5eEhRVUZITEVOQlFVTXNaVUZCTkVJc1JVRkJVU3hGUVVGRk96dFpRVU55UkN4SlFVRkpMR1ZCUVdVc1dVRkJXU3hMUVVGTExFVkJRVVU3WjBKQlEyeERMRXRCUVVzc1RVRkJUU3hQUVVGUExFbEJRVWtzWlVGQlpTeEZRVUZGTzI5Q1FVTnVReXhOUVVGQkxFbEJRVWtzUTBGQlF5eFBRVUZQTERCRFFVRkZMRmRCUVZjc1EwRkJReXhQUVVGUExFVkJRVU03YVVKQlEzSkRPMkZCUTBvN2FVSkJRVTBzU1VGQlNTeGxRVUZsTEVWQlFVVTdaMEpCUTNoQ0xFMUJRVUVzU1VGQlNTeERRVUZETEU5QlFVOHNNRU5CUVVVc1YwRkJWeXhEUVVGRExHVkJRV1VzUlVGQlF6dGhRVU0zUXp0WlFVVkVMRWxCUVVrc1pVRkJaU3hGUVVGRk8yZENRVU5xUWl4TlFVRkJMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNLME5CUVhaQ0xFbEJRVWtzUlVGQmRVSTdZVUZET1VJN1VVRkRUQ3hEUVVGRExFTkJRVUU3VVVGRlR5eHBRa0ZCV1N4SFFVRkhMRU5CUVVNc1IwRkJXU3hGUVVGVExFVkJRVVU3V1VGRE0wTXNTVUZCU1N4SFFVRkhMRmxCUVZrc1MwRkJTeXhGUVVGRk8yZENRVU4wUWl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1owSkJSVE5DTEU5QlFVOHNSMEZCV1N4RFFVRkJPMkZCUTNSQ08xbEJSVVFzVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVRTdXVUZGY0VNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGQk8xbEJSVGRDTEU5QlFVOHNTMEZCU3l4RFFVRkJPMUZCUTJoQ0xFTkJRVU1zUTBGQlFUdFJRWFJWUnl4SlFVRkpMRTFCUVUwc1MwRkJTeXhKUVVGSkxFVkJRVVU3V1VGRGFrSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh0UkVGQmJVUXNRMEZCUXl4RFFVRkJPMU5CUTNaRk8xRkJSVVFzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVFN1NVRkRla0lzUTBGQlF6dEpRV0ZFT3pzN1QwRkhSenRKUVVOSUxFbEJRVmNzVVVGQlVUdFJRVU5tTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRVHRKUVVOeVFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGdzU1VGQll5eExRVUZMTzFGQlEyWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGQk8wbEJRM1JDTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwZ3NTVUZCWXl4TFFVRkxMRU5CUVVVc1IwRkJWVHRSUVVNelFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUlVGQlJUdFpRVU14UWl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlEyeENMRWxCUVVrc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVNeFF5eERRVUZCTzFsQlEwUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlFUdFRRVU55UWp0aFFVRk5PMWxCUTBnc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVRTdXVUZEYWtJc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SFFVRkhMRWxCUVVrc1EwRkJRVHRUUVVOc1F6dEpRVU5NTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNDeEpRVUZYTEZGQlFWRTdVVUZEWml4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVUU3U1VGRGNrSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU0N4SlFVRlhMRTFCUVUwc1EwRkJSU3hQUVVGblF6dFJRVU12UXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlFUdEpRVU14UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwZ3NTVUZCVnl4TlFVRk5PMUZCUTJJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZCTzBsQlEzWkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU0N4SlFVRlhMRkZCUVZFN1VVRkRaaXhQUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVRTdTVUZEZWtJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTklMRWxCUVZjc1UwRkJVenRSUVVOb1FpeFBRVUZQTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVFN1NVRkRNVUlzUTBGQlF6dERRVGhQU2p0QlFVVkVMR1ZCUVdVc1UwRkJVeXhEUVVGQkluMD0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGZvciBET00gbWFuaXB1bGF0aW9uXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vanN4LnRzXCIgLz5cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiwgfSBmcm9tIFwiLi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHNcIjtcbmV4cG9ydCBjb25zdCBmcmFnbWVudCA9IChfLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGJpbmRDaGlsZHJlbihmcmFnbWVudCwgY2hpbGRyZW4pO1xuICAgIHJldHVybiBmcmFnbWVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBmcmFnbWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpuSmhaMjFsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZabkpoWjIxbGJuUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3TzBkQlVVYzdRVUZEU0N3eVFrRkJNa0k3UVVGRE0wSXNhVU5CUVdsRE8wRkJSV3BETEU5QlFVOHNSVUZGU0N4WlFVRlpMRWRCUTJZc1RVRkJUU3dyUWtGQkswSXNRMEZCUVR0QlFVVjBReXhOUVVGTkxFTkJRVU1zVFVGQlRTeFJRVUZSTEVkQlFVY3NRMEZEY0VJc1EwRkJWU3hGUVVOV0xFZEJRVWNzVVVGQk1rSXNSVUZEWkN4RlFVRkZPMGxCUTJ4Q0xFMUJRVTBzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4elFrRkJjMElzUlVGQlJTeERRVUZCTzBsQlJXeEVMRmxCUVZrc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVRTdTVUZGYUVNc1QwRkJUeXhSUVVGUkxFTkJRVUU3UVVGRGJrSXNRMEZCUXl4RFFVRkJPMEZCUlVRc1pVRkJaU3hSUVVGUkxFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIERlU3RhZ25hdGUgbWFpbiBkZXN0YWduYXRlIGNsYXNzXG4gKiBAZmlsZSBtYWluIGZpbGUgZm9yIGRlc3RhZ25hdGVcbiAqIEBwcmVzZXJ2ZVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2pzeC50c1wiIC8+XG5pbXBvcnQgKiBhcyBfQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgX0NyZWF0ZVJlZiBmcm9tIFwiLi9jcmVhdGVSZWZcIjtcbmltcG9ydCAqIGFzIF9DcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCAqIGFzIF9DcmVhdGVFbGVtZW50TlMgZnJvbSBcIi4vY3JlYXRlRWxlbWVudE5TXCI7XG5pbXBvcnQgKiBhcyBfRnJhZ21lbnQgZnJvbSBcIi4vZnJhZ21lbnRcIjtcbmV4cG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuZXhwb3J0IHsgY3JlYXRlUmVmIH0gZnJvbSBcIi4vY3JlYXRlUmVmXCI7XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuZXhwb3J0IHsgY3JlYXRlRWxlbWVudE5TIH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudE5TXCI7XG5leHBvcnQgeyBmcmFnbWVudCB9IGZyb20gXCIuL2ZyYWdtZW50XCI7XG5leHBvcnQgdmFyIERlU3RhZ25hdGU7XG4oZnVuY3Rpb24gKERlU3RhZ25hdGUpIHtcbiAgICBEZVN0YWduYXRlLkNvbXBvbmVudCA9IF9Db21wb25lbnQuQ29tcG9uZW50O1xuICAgIERlU3RhZ25hdGUuY3JlYXRlUmVmID0gX0NyZWF0ZVJlZi5jcmVhdGVSZWY7XG4gICAgRGVTdGFnbmF0ZS5jcmVhdGVFbGVtZW50ID0gX0NyZWF0ZUVsZW1lbnQuY3JlYXRlRWxlbWVudDtcbiAgICBEZVN0YWduYXRlLmNyZWF0ZUVsZW1lbnROUyA9IF9DcmVhdGVFbGVtZW50TlMuY3JlYXRlRWxlbWVudE5TO1xuICAgIERlU3RhZ25hdGUuZnJhZ21lbnQgPSBfRnJhZ21lbnQuZnJhZ21lbnQ7XG59KShEZVN0YWduYXRlIHx8IChEZVN0YWduYXRlID0ge30pKTtcbmV4cG9ydCBkZWZhdWx0IERlU3RhZ25hdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenM3UjBGVlJ6dEJRVU5JTERKQ1FVRXlRanRCUVVNelFpeHBRMEZCYVVNN1FVRkZha01zVDBGQlR5eExRVUZMTEZWQlFWVXNUVUZCVFN4aFFVRmhMRU5CUVVFN1FVRkRla01zVDBGQlR5eExRVUZMTEZWQlFWVXNUVUZCVFN4aFFVRmhMRU5CUVVFN1FVRkRla01zVDBGQlR5eExRVUZMTEdOQlFXTXNUVUZCVFN4cFFrRkJhVUlzUTBGQlFUdEJRVU5xUkN4UFFVRlBMRXRCUVVzc1owSkJRV2RDTEUxQlFVMHNiVUpCUVcxQ0xFTkJRVUU3UVVGRGNrUXNUMEZCVHl4TFFVRkxMRk5CUVZNc1RVRkJUU3haUVVGWkxFTkJRVUU3UVVGRmRrTXNUMEZCVHl4RlFVRkRMRk5CUVZNc1JVRkJReXhOUVVGTkxHRkJRV0VzUTBGQlFUdEJRVU55UXl4UFFVRlBMRVZCUVUwc1UwRkJVeXhGUVVGRExFMUJRVTBzWVVGQllTeERRVUZCTzBGQlF6RkRMRTlCUVU4c1JVRkJReXhoUVVGaExFVkJRVU1zVFVGQlRTeHBRa0ZCYVVJc1EwRkJRVHRCUVVNM1F5eFBRVUZQTEVWQlFVTXNaVUZCWlN4RlFVRkRMRTFCUVUwc2JVSkJRVzFDTEVOQlFVRTdRVUZEYWtRc1QwRkJUeXhGUVVGRExGRkJRVkVzUlVGQlF5eE5RVUZOTEZsQlFWa3NRMEZCUVR0QlFVVnVReXhOUVVGTkxFdEJRVmNzVlVGQlZTeERRVTh4UWp0QlFWQkVMRmRCUVdsQ0xGVkJRVlU3U1VGRFZDeHZRa0ZCVXl4SFFVRkpMRlZCUVZVc1ZVRkJaQ3hEUVVGak8wbEJRM1pDTEc5Q1FVRlRMRWRCUVVrc1ZVRkJWU3hWUVVGa0xFTkJRV003U1VGRmRrSXNkMEpCUVdFc1IwRkJTU3hqUVVGakxHTkJRV3hDTEVOQlFXdENPMGxCUXk5Q0xEQkNRVUZsTEVkQlFVa3NaMEpCUVdkQ0xHZENRVUZ3UWl4RFFVRnZRanRKUVVOdVF5eHRRa0ZCVVN4SFFVRkpMRk5CUVZNc1UwRkJZaXhEUVVGaE8wRkJRM1pETEVOQlFVTXNSVUZRWjBJc1ZVRkJWU3hMUVVGV0xGVkJRVlVzVVVGUE1VSTdRVUZGUkN4bFFVRmxMRlZCUVZVc1EwRkJRU0o5Il0sIm5hbWVzIjpbIl9jcmVhdGVFbGVtZW50IiwiX2NyZWF0ZUVsZW1lbnROUyIsIl9jcmVhdGVSZWYiLCJCYXNlQ29tcG9uZW50IiwiQmFzZSIsIl9Db21wb25lbnQuQ29tcG9uZW50IiwiX0NyZWF0ZVJlZi5jcmVhdGVSZWYiLCJfQ3JlYXRlRWxlbWVudC5jcmVhdGVFbGVtZW50IiwiX0NyZWF0ZUVsZW1lbnROUy5jcmVhdGVFbGVtZW50TlMiLCJfRnJhZ21lbnQuZnJhZ21lbnQiLCJEZVN0YWduYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFPLE1BQU0sR0FBRyxHQUFHLHdEQUFaOztJQ3FGUDs7Ozs7OztJQU9HOztJQUNJLE1BQU0sU0FBUyxHQUFHLENBQ3JCLE9BRHFCLEVBRXJCLEtBRnFCLEVBR3JCLEVBQUUsR0FBRyxLQUhnQixLQUlmO0lBQ04sTUFBSSxLQUFKLEVBQVc7SUFDUCxTQUFLLE1BQU0sQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFYLElBQXlCLE1BQU0sQ0FBQyxPQUFQLENBQWUsS0FBZixDQUF6QixFQUFnRDtJQUM1QyxVQUFJLE9BQU8sR0FBUCxLQUFlLFFBQWYsSUFBMkIsT0FBTyxHQUFQLEtBQWUsUUFBOUMsRUFBd0Q7SUFDcEQsWUFBSSxHQUFHLEtBQUssV0FBWixFQUF5QjtJQUNyQixVQUFBLE9BQU8sQ0FBQyxTQUFSLEdBQW9CLEdBQUcsQ0FBQyxRQUFKLEVBQXBCO0lBQ0gsU0FGRCxNQUVPLElBQUksRUFBSixFQUFRO0lBQ1gsVUFBQSxPQUFPLENBQUMsY0FBUixDQUF1QixJQUF2QixFQUE2QixHQUE3QixFQUFrQyxHQUFHLENBQUMsUUFBSixFQUFsQztJQUNILFNBRk0sTUFFQTtJQUNILFVBQUEsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsR0FBckIsRUFBMEIsR0FBRyxDQUFDLFFBQUosRUFBMUI7SUFDSDtJQUNKLE9BUkQsTUFRTyxJQUFJLEdBQUcsQ0FBQyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsTUFBb0IsSUFBeEIsRUFBOEI7SUFDakMsWUFBSSxPQUFPLEdBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7SUFDNUIsVUFBQSxPQUFPLENBQUMsZ0JBQVIsQ0FDSSxHQUFHLENBQUMsS0FBSixDQUFVLENBQVYsRUFDSyxXQURMLEVBREosRUFHSSxHQUhKO0lBS0g7SUFDSixPQVJNLE1BUUEsSUFDSCxHQUFH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
