/**
 * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVTdGFnbmF0ZS5janMiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9wcml2YXRlL191cmwuanMiLCIuLi8uLi9saWIvcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzLmpzIiwiLi4vLi4vbGliL2NyZWF0ZUVsZW1lbnQuanMiLCIuLi8uLi9saWIvY3JlYXRlRWxlbWVudE5TLmpzIiwiLi4vLi4vbGliL2NyZWF0ZVJlZi5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL19iYXNlLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvX2V2ZW50cy5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL3V0aWxzLmpzIiwiLi4vLi4vbGliL2NvbXBvbmVudC5qcyIsIi4uLy4uL2xpYi9mcmFnbWVudC5qcyIsIi4uLy4uL2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdXJsID0gXCJodHRwczovL2x1a2UtemhhbmctMDQuZ2l0aHViLmlvL0RlU3RhZ25hdGUvZXJyb3ItY29kZXNcIjtcbmV4cG9ydCBkZWZhdWx0IHVybDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgzVnliQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOTFjbXd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExIZEVRVUYzUkN4RFFVRkJPMEZCUlRORkxHVkJRV1VzUjBGQlJ5eERRVUZCSW4wPSIsIi8qKlxuICogQ29tcG9uZW50XG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGZpbGUgc2hhcmUgZnVuY3Rpb25zIGFuZCB0eXBlcyBmb3IgY3JlYXRlRWxlbWVudCBhbmQgaXQncyB2YXJpYW50c1xuICovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50XCI7XG5pbXBvcnQgdXJsIGZyb20gXCIuL191cmxcIjtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gcHJvcHMgLSBwcm9wcyB0byBiaW5kIHdpdGhcbiAqIEBwYXJhbSBucyAtIGlmIG5hbWVzcGFjZSBlbGVtZW50XG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kUHJvcHMgPSAoZWxlbWVudCwgcHJvcHMsIG5zID0gZmFsc2UpID0+IHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwiaW5uZXJIVE1MXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB2YWwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobnMpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBrZXksIHZhbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleS5zbGljZSgwLCAyKSA9PT0gXCJvblwiKSB7IC8vIFdvcmtzIHN1Y2ggYXMgb25DbGljaywgb25BbmltYXRpb25FbmQsIGV0Yy5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh2YWwpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCksIHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSBcInJlZlwiICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mICh2YWwpID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50XCIgaW4gdmFsKSB7XG4gICAgICAgICAgICAgICAgdmFsLmN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7dHlwZW9mIHZhbH0gaXMgbm90IGEgdmFsaWQgRGVTdGFnbmF0ZSBjaGlsZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiB0byBiaW5kIHdpdGhcbiAqIEByZXR1cm5zIHZvaWRcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRDaGlsZHJlbiA9IChlbGVtZW50LCBjaGlsZHJlbikgPT4ge1xuICAgIGlmIChjaGlsZHJlbiAhPT0gbnVsbCAmJiBjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkcmVuID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICB0eXBlb2YgY2hpbGRyZW4gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGRyZW4udG9TdHJpbmcoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuIGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuLmRpZE1vdW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5tb3VudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAzLiBTZWUgJHt1cmx9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4ucGFyZW50ICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucGFyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkcmVuLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lYMk55WldGMFpVVnNaVzFsYm5SVmRHbHNjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOWpjbVZoZEdWRmJHVnRaVzUwVlhScGJITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3TzBkQlVVYzdRVUZGU0N4UFFVRlBMRVZCUVVNc1UwRkJVeXhGUVVGRExFMUJRVTBzWTBGQll5eERRVUZCTzBGQlJYUkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxGRkJRVkVzUTBGQlFUdEJRWGxGZUVJN096czdPenM3UjBGUFJ6dEJRVU5JTEUxQlFVMHNRMEZCUXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhEUVVOeVFpeFBRVUZuUWl4RlFVTm9RaXhMUVVGNVFpeEZRVU42UWl4RlFVRkZMRWRCUVVjc1MwRkJTeXhGUVVOT0xFVkJRVVU3U1VGRFRpeEpRVUZKTEV0QlFVc3NSVUZCUlR0UlFVTlFMRXRCUVVzc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlF6VkRMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1JVRkJSVHRuUWtGRGNFUXNTVUZCU1N4SFFVRkhMRXRCUVVzc1YwRkJWeXhGUVVGRk8yOUNRVU55UWl4UFFVRlBMRU5CUVVNc1UwRkJVeXhIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUVR0cFFrRkRja003Y1VKQlFVMHNTVUZCU1N4RlFVRkZMRVZCUVVVN2IwSkJRMWdzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkJPMmxDUVVOd1JEdHhRa0ZCVFR0dlFrRkRTQ3hQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlFUdHBRa0ZETlVNN1lVRkRTanRwUWtGQlRTeEpRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NSVUZCUlN4RlFVRkZMRGhEUVVFNFF6dG5Ra0ZEYWtZc1NVRkJTU3hQUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NWVUZCVlN4RlFVRkZPMjlDUVVNMVFpeFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRM0JDTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8zbENRVU5RTEZkQlFWY3NSVUZCYjBJc1JVRkRjRU1zUjBGQlowSXNRMEZEYmtJc1EwRkJRVHRwUWtGRFNqdGhRVU5LTzJsQ1FVRk5MRWxCUTBnc1IwRkJSeXhMUVVGTExFdEJRVXM3WjBKQlEySXNUMEZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExGRkJRVkU3WjBKQlEzaENMRk5CUVZNc1NVRkJTU3hIUVVGSExFVkJRMnhDTzJkQ1FVTkhMRWRCUVc5Q0xFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUVR0aFFVTXhRenRwUWtGQlRTeEpRVUZKTEVkQlFVY3NTMEZCU3l4VFFVRlRMRVZCUVVVN1owSkJRekZDTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhQUVVGUExFZEJRVWNzYTBOQlFXdERMRU5CUVVNc1EwRkJRVHRoUVVOb1JUdFRRVU5LTzB0QlEwbzdRVUZEVEN4RFFVRkRMRU5CUVVFN1FVRkZSRHM3T3pzN08wZEJUVWM3UVVGRFNDeE5RVUZOTEVOQlFVTXNUVUZCVFN4WlFVRlpMRWRCUVVjc1EwRkRlRUlzVDBGQllTeEZRVU5pTEZGQlFYVkNMRVZCUTI1Q0xFVkJRVVU3U1VGRFRpeEpRVUZKTEZGQlFWRXNTMEZCU3l4SlFVRkpMRWxCUVVrc1VVRkJVU3hMUVVGTExGTkJRVk1zUlVGQlJUdFJRVU0zUXl4SlFVRkpMRkZCUVZFc1dVRkJXU3hMUVVGTExFVkJRVVU3V1VGRE0wSXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVzFDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUVR0VFFVTXhSVHRoUVVGTkxFbEJRMGdzVDBGQlR5eFJRVUZSTEV0QlFVc3NVVUZCVVR0WlFVTTFRaXhQUVVGUExGRkJRVkVzUzBGQlN5eFJRVUZSTEVWQlF6bENPMWxCUTBVc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVRTdVMEZEY0VVN1lVRkJUU3hKUVVGSkxGRkJRVkVzV1VGQldTeFRRVUZUTEVWQlFVVTdXVUZEZEVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVsQlFVa3NUMEZCVHl4WlFVRlpMRTFCUVUwc1EwRkJReXhYUVVGWExFVkJRVVU3WjBKQlF6ZEVMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVRTdaMEpCUlhaQ0xFOUJRVTA3WVVGRFZEdHBRa0ZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhQUVVGUExGbEJRVmtzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZPMmRDUVVOcVJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkJPMkZCUXk5RE8xbEJSVVFzU1VGQlNTeFJRVUZSTEVOQlFVTXNUVUZCVFN4TFFVRkxMRTlCUVU4c1JVRkJSVHRuUWtGRE4wSXNVVUZCVVN4RFFVRkRMRTFCUVUwc1IwRkJSeXhQUVVGUExFTkJRVUU3WVVGRE5VSTdXVUZGUkN4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVUU3VTBGRGVrSTdZVUZCVFR0WlFVTklMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVRTdVMEZEYUVNN1MwRkRTanRCUVVOTUxFTkJRVU1zUTBGQlFTSjkiLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGZvciBET00gbWFuaXB1bGF0aW9uXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vanN4LnRzXCIgLz5cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiwgYmluZFByb3BzLCB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuLyoqXG4gKlxuICogQHBhcmFtIHRhZ05hbWVPckNvbXBvbmVudCAtIG5hbWUgb2YgSFRNTCBlbGVtZW50IG9yIGZ1bmN0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtIHByb3BzIC0gcHJvcHMgb2YgZWxlbWVudCBvciBjb21wb25lbnRcbiAqIDEuIElmIGB0YWdOYW1lT3JDb21wb25lbnRgIGlzIHRhZ25hbWUsIHByb3BzIGFyZSBlbGVtZW50IHByb3BlcnRpZXMsIHN1Y2ggYXMgY2xhc3MsIGlubmVySFRNTCwgaWQsIHN0eWxlLCBldGNcbiAqIDIuIElmIGB0YWdOYW1lT3JDb21wb25lbnRgIGlzIGEgZnVuY3Rpb24sIHByb3BzIGFyZSB0aGF0IGZ1bmN0aW9ucyBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQuIENhbiBiZSBub3RoaW5nLCBudW1iZXIgKGNvbnZlcnRlZCB0byBzdHJpbmcpLCBzdHJpbmcgKHRleHQpLCBvciBhbm90aGVyIGVsZW1lbnQuIEFuIGFycmF5IG9mIGFueSBvZiB0aGVzZSB3aWxsIGNyZWF0ZSBtdWx0aXBsZSBjaGlsZHJlblxuICogQHBhcmFtIGNoaWxkcmVuQXJncyAtIHJlc3QgcGFyYW1ldGVyIGZvciBjaGlsZHJlblxuICogQHJldHVybnMgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lT3JDb21wb25lbnQsIHByb3BzLCAuLi5jaGlsZHJlbikge1xuICAgIGlmICh0eXBlb2YgKHRhZ05hbWVPckNvbXBvbmVudCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZU9yQ29tcG9uZW50KTtcbiAgICAgICAgYmluZFByb3BzKGVsZW1lbnQsIHByb3BzKTtcbiAgICAgICAgYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiAodGFnTmFtZU9yQ29tcG9uZW50KSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiB0YWdOYW1lT3JDb21wb25lbnQocHJvcHMsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIEVycm9yKFwidGFnTmFtZU9yQ29tcG9uZW50IGlzIG9mIGludmFsaWQgdHlwZS5cIik7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxSV3hsYldWdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlqY21WaGRHVkZiR1Z0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdPenRIUVZGSE8wRkJRMGdzTWtKQlFUSkNPMEZCUXpOQ0xHbERRVUZwUXp0QlFVVnFReXhQUVVGUExFVkJSMGdzV1VGQldTeEZRVU5hTEZOQlFWTXNSMEZEV2l4TlFVRk5MQ3RDUVVFclFpeERRVUZCTzBGQmJVTjBRenM3T3pzN096czdPMGRCVTBjN1FVRkRTQ3hOUVVGTkxGVkJRVlVzWVVGQllTeERRVWw2UWl4clFrRkhXU3hGUVVOYUxFdEJRVFpDTEVWQlF6ZENMRWRCUVVjc1VVRkJNa0k3U1VGRk9VSXNTVUZCU1N4UFFVRk5MRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTMEZCU3l4UlFVRlJMRVZCUVVVN1VVRkRla01zVFVGQlRTeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkJPMUZCUlRGRUxGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCTUVJc1EwRkJReXhEUVVGQk8xRkJSVGxETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVUU3VVVGRkwwSXNUMEZCVHl4UFFVRlBMRU5CUVVFN1MwRkRha0k3VTBGQlRTeEpRVUZKTEU5QlFVMHNRMEZCUXl4clFrRkJhMElzUTBGQlF5eExRVUZMTEZWQlFWVXNSVUZCUlR0UlFVTnNSQ3hQUVVGUExHdENRVUZyUWl4RFFVRkRMRXRCUVZVc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlFUdExRVU5zUkR0SlFVVkVMRTlCUVU4c1MwRkJTeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVFN1FVRkRNVVFzUTBGQlF6dEJRVVZFTEdWQlFXVXNZVUZCWVN4RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudE5TIGNyZWF0ZUVsZW1lbnQgZm9yIG5hbWVzcGFjZWQgZWxlbWVudHNcbiAqL1xuaW1wb3J0IHsgYmluZENoaWxkcmVuLCBiaW5kUHJvcHMsIH0gZnJvbSBcIi4vcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBjaGlsZCBlbGVtZW50IHRvIGRlU3RhZ25hdGVcbiAqIEBwYXJhbSBuYW1lc3BhY2VVUkkgLSBuYW1lc3BhY2UgdXJpXG4gKiBAcGFyYW0gdGFnTmFtZSAtIG5hbWUgb2YgSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0gcHJvcHMgLSBlbGVtZW50IHByb3BlcnRpZXMsIHN1Y2ggYXMgY2xhc3MsIGlubmVySFRNTCwgaWQsIHN0eWxlLCBldGNcbiAqIEBwYXJhbSBjaGlsZHJlbiAtIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudC4gQ2FuIGJlIG5vdGhpbmcsIG51bWJlciAoY29udmVydGVkIHRvIHN0cmluZyksIHN0cmluZyAodGV4dCksIG9yIGFub3RoZXIgZWxlbWVudC4gQW4gYXJyYXkgb2YgYW55IG9mIHRoZXNlIHdpbGwgY3JlYXRlIG11bHRpcGxlIGNoaWxkcmVuXG4gKiBAcGFyYW0gY2hpbGRyZW5SZXN0IC0gcmVzdCBwYXJhbWV0ZXIgb2YgY2hpbGRyZW5cbiAqIEByZXR1cm5zIGh0bWwgZWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudE5TID0gKG5hbWVzcGFjZVVSSSwgdGFnTmFtZSwgcHJvcHMsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHRhZ05hbWUpO1xuICAgIGJpbmRQcm9wcyhlbGVtZW50LCBwcm9wcywgdHJ1ZSk7XG4gICAgYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50TlM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFJXeGxiV1Z1ZEU1VExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMk55WldGMFpVVnNaVzFsYm5ST1V5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3UjBGUlJ6dEJRVVZJTEU5QlFVOHNSVUZGU0N4WlFVRlpMRVZCUTFvc1UwRkJVeXhIUVVOYUxFMUJRVTBzSzBKQlFTdENMRU5CUVVFN1FVRkZkRU03T3pzN096czdPMGRCVVVjN1FVRkRTQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeGxRVUZsTEVkQlFVY3NRMEZETTBJc1dVRkJLMGNzUlVGREwwY3NUMEZCTUVNc1JVRkRNVU1zUzBGQmQwTXNSVUZEZUVNc1IwRkJSeXhSUVVFeVFpeEZRVU4yUWl4RlFVRkZPMGxCUTFRc1RVRkJUU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVUU3U1VGRkwwUXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVRTdTVUZGTDBJc1dVRkJXU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUVR0SlFVVXZRaXhQUVVGUExFOUJRVThzUTBGQlFUdEJRVU5zUWl4RFFVRkRMRU5CUVVFN1FVRkZSQ3hsUVVGbExHVkJRV1VzUTBGQlFTSjkiLCIvKipcbiAqIENyZWF0ZXMgYSByZWZlcmVuY2UgZm9yIGEgbmVzdGVkIGNvbXBvbmVudFxuICogQHJldHVybnMgZW1wdHkgcmVmIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmID0gKCkgPT4gKHtcbiAgICBjdXJyZW50OiBudWxsLFxufSk7XG4vKipcbiAqIENyZWF0ZXMgYSByZWZlcmVuY2UgZm9yIGEgbmVzdGVkIGNvbXBvbmVudFxuICogQHJldHVybnMgZW1wdHkgcmVmIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWY7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFVtVm1MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOeVpXRjBaVkpsWmk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRmxRVHM3TzBkQlIwYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQmQwTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRha1VzVDBGQlR5eEZRVUZGTEVsQlFVazdRMEZEYUVJc1EwRkJReXhEUVVGQk8wRkJSVVk3T3p0SFFVZEhPMEZCUTBnc1pVRkJaU3hUUVVGVExFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIFByZXNldCAtIGJhc2UgZm9yIGEgY29tcG9uZW50XG4gKiBAcGFja2FnZVxuICovXG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgX2NyZWF0ZUVsZW1lbnROUyB9IGZyb20gXCIuLi9jcmVhdGVFbGVtZW50TlNcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgX2NyZWF0ZVJlZiB9IGZyb20gXCIuLi9jcmVhdGVSZWZcIjtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHNcbiAqL1xuZXhwb3J0IGNsYXNzIFByZXNldCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCA9IF9jcmVhdGVFbGVtZW50O1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnROUyA9IF9jcmVhdGVFbGVtZW50TlM7XG4gICAgICAgIHRoaXMuY3JlYXRlUmVmID0gX2NyZWF0ZVJlZjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB3aGVuIGNvbXBvbmVudCBjYXRjaGVzIGVycm9yLiBEZWZhdWx0IGJlaGF2aW91ciBpcyBjb25zb2xlLmVycm9yXG4gICAgICAgICAqIEBwYXJhbSBlcnJvciAtIGVycm9yIG9iamVjdCB3aXRoIGluZm9cbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaCA9IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgYmVmb3JlIGNvbXBvbmVudCBpcyB1cGRhdGVkXG4gICAgICAgICAqIEByZXR1cm5zIHdoZXRoZXIgb3Igbm90IGNvbXBvbmVudCBzaG91bGQgdXBkYXRlL3JlLXJlbmRlclxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSAoKSA9PiB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVuZGVyaW5nIEhUTUwsIG11c3QgYmUgcGFydCBvZiBleHRlbmRlZCBjbGFzc1xuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICogQHJldHVybnMgaWYgcmV0dXJucyBudWxsIGVycm9yIHdpbGwgYmUgdGhyb3duXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlbmRlciA9ICgpID0+IG51bGw7XG4gICAgfVxufVxuUHJlc2V0LmNyZWF0ZUVsZW1lbnQgPSBfY3JlYXRlRWxlbWVudDtcblByZXNldC5jcmVhdGVFbGVtZW50TlMgPSBfY3JlYXRlRWxlbWVudE5TO1xuUHJlc2V0LmNyZWF0ZVJlZiA9IF9jcmVhdGVSZWY7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lYMkpoYzJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Y0hKcGRtRjBaUzlmWW1GelpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3TzBkQlUwYzdRVUZGU0N4UFFVRlBMRVZCUVVNc1QwRkJUeXhKUVVGSkxHTkJRV01zUlVGQlF5eE5RVUZOTEd0Q1FVRnJRaXhEUVVGQk8wRkJRekZFTEU5QlFVOHNSVUZCUXl4UFFVRlBMRWxCUVVrc1owSkJRV2RDTEVWQlFVTXNUVUZCVFN4dlFrRkJiMElzUTBGQlFUdEJRVU01UkN4UFFVRlBMRVZCUVVNc1QwRkJUeXhKUVVGSkxGVkJRVlVzUlVGQlF5eE5RVUZOTEdOQlFXTXNRMEZCUVR0QlFXbERiRVFzTUVKQlFUQkNPMEZCUXpGQ096dEhRVVZITzBGQlEwZ3NUVUZCVFN4UFFVRm5RaXhOUVVGTk8wbEJRVFZDTzFGQlVXOUNMR3RDUVVGaExFZEJRVWNzWTBGQll5eERRVUZCTzFGQlJUbENMRzlDUVVGbExFZEJRVWNzWjBKQlFXZENMRU5CUVVFN1VVRkZiRU1zWTBGQlV5eEhRVUZITEZWQlFWVXNRMEZCUVR0UlFVVjBRenM3T3p0WFFVbEhPMUZCUTBrc2MwSkJRV2xDTEVkQlFVY3NRMEZCUXl4TFFVRlpMRVZCUVZFc1JVRkJSU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVFN1VVRkZka1U3T3p0WFFVZEhPMUZCUTBrc01FSkJRWEZDTEVkQlFVY3NSMEZCV1N4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGQk8xRkJSV3hFT3pzN096czdWMEZOUnp0UlFVTmhMRmRCUVUwc1IwRkJSeXhIUVVGbExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVRTdTVUZGYmtRc1EwRkJRenM3UVVGc1F6QkNMRzlDUVVGaExFZEJRVWNzWTBGQll5eERRVUZCTzBGQlJUbENMSE5DUVVGbExFZEJRVWNzWjBKQlFXZENMRU5CUVVFN1FVRkZiRU1zWjBKQlFWTXNSMEZCUnl4VlFVRlZMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBFdmVudHNcbiAqIEBwYWNrYWdlXG4gKi9cbmltcG9ydCB7IFByZXNldCBhcyBCYXNlQ29tcG9uZW50IH0gZnJvbSBcIi4vX2Jhc2VcIjtcbmNvbnN0IGV2ZW50TmFtZXMgPSBbXG4gICAgXCJvbkZvY3VzXCIsXG4gICAgXCJvbkJsdXJcIixcbiAgICBcIm9uRm9jdXNJblwiLFxuICAgIFwib25Gb2N1c091dFwiLFxuICAgIFwib25BbmltYXRpb25TdGFydFwiLFxuICAgIFwib25BbmltYXRpb25DYW5jZWxcIixcbiAgICBcIm9uQW5pbWF0aW9uRW5kXCIsXG4gICAgXCJvbkFuaW1hdGlvbkl0ZXJhdGlvblwiLFxuICAgIFwib25UcmFuc2l0aW9uU3RhcnRcIixcbiAgICBcIm9uVHJhbnNpdGlvbkNhbmNlbFwiLFxuICAgIFwib25UcmFuc2l0aW9uRW5kXCIsXG4gICAgXCJvblRyYW5zaXRpb25SdW5cIixcbiAgICBcIm9uQXV4Q2xpY2tcIixcbiAgICBcIm9uQ2xpY2tcIixcbiAgICBcIm9uRGJsQ2xpY2tcIixcbiAgICBcIm9uTW91c2VEb3duXCIsXG4gICAgXCJvbk1vdXNlRW50ZXJcIixcbiAgICBcIm9uTW91c2VMZWF2ZVwiLFxuICAgIFwib25Nb3VzZU1vdmVcIixcbiAgICBcIm9uTW91c2VPdmVyXCIsXG4gICAgXCJvbk1vdXNlT3V0XCIsXG4gICAgXCJvbk1vdXNlVXBcIixcbl07XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50cyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQmluZHMgZXZlbnQgbGlzdGVuZXJzIGV2ZW50XG4gICAgICAgICAqIERvIG5vdCBjYWxsIG1hbnVhbGx5XG4gICAgICAgICAqIEBwYWNha2dlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJpbmRFdmVudExpc3RlbmVycyA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kcyBldmVudCBsaXN0ZW5lcnMgZXZlbnRcbiAgICAgICAgICogRG8gbm90IGNhbGwgbWFudWFsbHlcbiAgICAgICAgICogQHBhY2FrZ2VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnMgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcihlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sRXZlbnROYW1lID0gZXZlbnROYW1lLnNsaWNlKDIpLnRvTG93ZXJDYXNlKCksIGNhbGxiYWNrID0gdGhpc1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRMaXN0ZW5lcihodG1sRXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgyVjJaVzUwY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3Y21sMllYUmxMMTlsZG1WdWRITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3p0SFFWTkhPMEZCUlVnc1QwRkJUeXhGUVVGRExFMUJRVTBzU1VGQlNTeGhRVUZoTEVWQlFVTXNUVUZCVFN4VFFVRlRMRU5CUVVFN1FVRlpMME1zVFVGQlRTeFZRVUZWTEVkQlFYRkNPMGxCUTJwRExGTkJRVk03U1VGRFZDeFJRVUZSTzBsQlExSXNWMEZCVnp0SlFVTllMRmxCUVZrN1NVRkRXaXhyUWtGQmEwSTdTVUZEYkVJc2JVSkJRVzFDTzBsQlEyNUNMR2RDUVVGblFqdEpRVU5vUWl4elFrRkJjMEk3U1VGRGRFSXNiVUpCUVcxQ08wbEJRMjVDTEc5Q1FVRnZRanRKUVVOd1FpeHBRa0ZCYVVJN1NVRkRha0lzYVVKQlFXbENPMGxCUTJwQ0xGbEJRVms3U1VGRFdpeFRRVUZUTzBsQlExUXNXVUZCV1R0SlFVTmFMR0ZCUVdFN1NVRkRZaXhqUVVGak8wbEJRMlFzWTBGQll6dEpRVU5rTEdGQlFXRTdTVUZEWWl4aFFVRmhPMGxCUTJJc1dVRkJXVHRKUVVOYUxGZEJRVmM3UTBGRFpDeERRVUZCTzBGQmNVaEVMREJDUVVFd1FqdEJRVU14UWl4TlFVRk5MRTlCUVdkQ0xFMUJRVThzVTBGQlVTeGhRVUZoTzBsQlFXeEVPenRSUVVWSk96czdPMWRCU1VjN1VVRkRaMElzZFVKQlFXdENMRWRCUVVjc1EwRkJReXhQUVVGdlFpeEZRVUZSTEVWQlFVVTdXVUZEYmtVc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlFUdFJRVU5xUkN4RFFVRkRMRU5CUVVFN1VVRkZSRHM3T3p0WFFVbEhPMUZCUTJkQ0xIbENRVUZ2UWl4SFFVRkhMRU5CUVVNc1QwRkJiMElzUlVGQlVTeEZRVUZGTzFsQlEzSkZMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zVDBGQlR5eERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVUU3VVVGRGNFUXNRMEZCUXl4RFFVRkJPMUZCUlU4c2JVSkJRV01zUjBGQlJ5eERRVUZETEdGQlFUUkNMRVZCUVZFc1JVRkJSVHRaUVVNMVJDeExRVUZMTEUxQlFVMHNVMEZCVXl4SlFVRkpMRlZCUVZVc1JVRkJSVHRuUWtGRGFFTXNUVUZCVFN4aFFVRmhMRWRCUVVjc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkRiRVFzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRVHRuUWtGRk9VSXNTVUZCU1N4UlFVRlJMRXRCUVVzc1UwRkJVeXhKUVVGSkxGRkJRVkVzV1VGQldTeFJRVUZSTEVWQlFVVTdiMEpCUTNoRUxHRkJRV0VzUTBGQlF5eGhRVUZoTEVWQlFVVXNVVUZCT0VNc1EwRkJReXhEUVVGQk8ybENRVU12UlR0aFFVTktPMUZCUTB3c1EwRkJReXhEUVVGQk8wbEJSVXdzUTBGQlF6dERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIFV0aWxzIC0gdXRpbGl0aWVzIGZvciBEZVN0YWduYXRlXG4gKi9cbi8qKlxuICogQ2hlY2tzIGlmIHZhbDEgYW5kIHZhbDIgYXJlIGVxdWFsXG4gKiBAcGFyYW0gdmFsMSAtIHZhbHVlIHRvIGNoZWNrIGZvciBlcXVhbGl0eVxuICogQHBhcmFtIHZhbDIgLSB2YWx1ZSB0byBjb21wYXJlIGFnYWluc3QgdmFsMVxuICogQHBhcmFtIG1heERlcHRoIC0gbWF4IHJlY3Vyc2lvbiBkZXB0aCB0byBjcmF3bCBhbiBvYmplY3QuIEFmdGVyIG1heCBkZXB0aCBpc1xuICogcmVhY2hlZCwgdGhlIHR3byB2YWx1ZXMgYXJlIHNpbXBseSBjb21wYXJlZCB3aXRoIGA9PT1gXG4gKiBAcGFyYW0gbWF4TGVuZ3RoIC0gbWF4IGxlbmd0aCBvZiBhcnJheSB0byBjcmF3bC4gSWYgbWF4IGxlbnRoIGlzIHJlYWNoZWQsIHR3b1xuICogYXJyYXlzIHdpbGwgc2ltcGx5IGJlIGNvbXBhcmVkIHdpdGggYD09PWBcbiAqIEByZXR1cm5zIGB2YWwxID09PSB2YWwyYFxuICovXG5leHBvcnQgY29uc3QgaXNFcXVhbCA9ICh2YWwxLCB2YWwyLCBtYXhEZXB0aCA9IDMsIG1heExlbmd0aCA9IDEwKSA9PiB7XG4gICAgaWYgKG1heERlcHRoID09PSAwKSB7IC8vIElmIG1heERlcHRoIHJlYWNoZWQsIGp1c3QgcnVuID09PVxuICAgICAgICByZXR1cm4gdmFsMSA9PT0gdmFsMjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbDEgIT09IHR5cGVvZiB2YWwyKSB7IC8vIElmIHRoZXkgYXJlbid0IHRoZSBzYW1lIHR5cGUsIHJldHVybiBmYWxzZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh2YWwxIGluc3RhbmNlb2YgQXJyYXkgJiYgdmFsMiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGlmICh2YWwxLmxlbmd0aCAhPT0gdmFsMi5sZW5ndGgpIHsgLy8gSWYgYXJyYXlzIGhhdmUgZGlmZmVyZW50IGxlbmd0aHNcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsMS5sZW5ndGggPiBtYXhMZW5ndGggfHwgdmFsMi5sZW5ndGggPiBtYXhMZW5ndGgpIHsgLy8gSWYgYXJyYXkgaXMgdG9vIGJpZ1xuICAgICAgICAgICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbDEubGVuZ3RoOyBpbmRleCsrKSB7IC8vIEdvIHRocm91Z2ggZWFjaCBpdGVtXG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsMVtpbmRleF0sIHZhbDJbaW5kZXhdLCBtYXhEZXB0aCAtIDEsIG1heExlbmd0aCkpIHsgLy8gVGVzdCBpZiB0d28gYXJyYXkgaXRlbXMgYXJlIGVxdWFsXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwxIGluc3RhbmNlb2YgT2JqZWN0ICYmIHZhbDIgaW5zdGFuY2VvZiBPYmplY3QpIHsgLy8gSWYgb2JqZWN0XG4gICAgICAgIGlmICghaXNFcXVhbChPYmplY3Qua2V5cyh2YWwxKSwgT2JqZWN0LmtleXModmFsMiksIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkgeyAvLyBJZiB0aGV5IGRvbid0IGhhdmUgaGUgc2FtZSBrZXlzXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModmFsMSkpIHsgLy8gR28gdGhyb3VnaCBhbmQgdGVzdCBlYWNoIHZhbHVlXG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsMVtrZXldLCB2YWwyW2tleV0sIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGlzRXF1YWwsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmNISnBkbUYwWlM5MWRHbHNjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN1IwRlJSenRCUVVWSU96czdPenM3T3pzN1IwRlRSenRCUVVOSUxFMUJRVTBzUTBGQlF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4RFFVTnVRaXhKUVVGaExFVkJRMklzU1VGQllTeEZRVU5pTEZGQlFWRXNSMEZCUnl4RFFVRkRMRVZCUTFvc1UwRkJVeXhIUVVGSExFVkJRVVVzUlVGRFVDeEZRVUZGTzBsQlExUXNTVUZCU1N4UlFVRlJMRXRCUVVzc1EwRkJReXhGUVVGRkxFVkJRVVVzYjBOQlFXOURPMUZCUTNSRUxFOUJRVThzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUVR0TFFVTjJRanRUUVVGTkxFbEJRVWtzVDBGQlR5eEpRVUZKTEV0QlFVc3NUMEZCVHl4SlFVRkpMRVZCUVVVc1JVRkJSU3cyUTBGQk5rTTdVVUZEYmtZc1QwRkJUeXhMUVVGTExFTkJRVUU3UzBGRFpqdEpRVVZFTEVsQlFVa3NTVUZCU1N4WlFVRlpMRXRCUVVzc1NVRkJTU3hKUVVGSkxGbEJRVmtzUzBGQlN5eEZRVUZGTzFGQlEyaEVMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUzBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc2JVTkJRVzFETzFsQlEyeEZMRTlCUVU4c1MwRkJTeXhEUVVGQk8xTkJRMlk3VVVGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1UwRkJVeXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NVMEZCVXl4RlFVRkZMRVZCUVVVc2MwSkJRWE5DTzFsQlF6bEZMRTlCUVU4c1NVRkJTU3hMUVVGTExFbEJRVWtzUTBGQlFUdFRRVU4yUWp0UlFVVkVMRXRCUVVzc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEZRVUZGTEVWQlFVVXNkVUpCUVhWQ08xbEJRM1pGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hSUVVGUkxFZEJRVWNzUTBGQlF5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RlFVRkZMRVZCUVVVc2IwTkJRVzlETzJkQ1FVTnVSeXhQUVVGUExFdEJRVXNzUTBGQlFUdGhRVU5tTzFOQlEwbzdVVUZGUkN4UFFVRlBMRWxCUVVrc1EwRkJRVHRMUVVOa08xTkJRVTBzU1VGQlNTeEpRVUZKTEZsQlFWa3NUVUZCVFN4SlFVRkpMRWxCUVVrc1dVRkJXU3hOUVVGTkxFVkJRVVVzUlVGQlJTeFpRVUZaTzFGQlEzWkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRMUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkRha0lzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkRha0lzVVVGQlVTeEhRVUZITEVOQlFVTXNSVUZEV2l4VFFVRlRMRU5CUTFvc1JVRkJSU3hGUVVGRkxHdERRVUZyUXp0WlFVTnVReXhQUVVGUExFdEJRVXNzUTBGQlFUdFRRVU5tTzFGQlJVUXNTMEZCU3l4TlFVRk5MRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRVZCUVVVc2FVTkJRV2xETzFsQlIzQkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRMUFzU1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVTnFRaXhKUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlEyeENMRkZCUVZFc1IwRkJSeXhEUVVGRExFVkJRMW9zVTBGQlV5eERRVU5hTEVWQlFVVTdaMEpCUTBNc1QwRkJUeXhMUVVGTExFTkJRVUU3WVVGRFpqdFRRVU5LTzFGQlJVUXNUMEZCVHl4SlFVRkpMRU5CUVVFN1MwRkRaRHRKUVVWRUxFOUJRVThzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUVR0QlFVTjRRaXhEUVVGRExFTkJRVUU3UVVGRlJDeGxRVUZsTzBsQlExZ3NUMEZCVHp0RFFVTldMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBEZVN0YWduYXRlIG1haW4gZGVzdGFnbmF0ZSBjbGFzc1xuICogQGZpbGUgRGVTdGFnbmF0ZSBjb21wb25lbnQgY2xhc3NcbiAqIEBwcmVzZXJ2ZVxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGluZXMgKi9cbmltcG9ydCB7IEV2ZW50cyBhcyBCYXNlIH0gZnJvbSBcIi4vcHJpdmF0ZS9fZXZlbnRzXCI7XG5pbXBvcnQgdXJsIGZyb20gXCIuL3ByaXZhdGUvX3VybFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3ByaXZhdGUvdXRpbHNcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQGNsYXNzZGVzYyBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjbGFzc1xuICogQG5hbWVzcGFjZVxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgY2xhc3MgY29tcG9uZW50XG4gICAgICogQHBhcmFtIHBhcmVudCAtIHBhcmVudCBvZiB0aGlzIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSBlbGVtZW50IHByb3BlcnRpZXM7IHdvcmtzIGxpa2UgUmVhY3QgUHJvcHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXRlIG9mIGNvbXBvbmVudC4gV29ya3Mgc2ltaWxhciBSZWFjdCBTdGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7fTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGluaXRpYWwgc3RhdGUgd2FzIHNldCBpbiBpbml0aWFsaXplclxuICAgICAgICAgKiBEbyBub3QgdGhyb3cgZXJyb3Igd2l0aCBkaXJlY3Qgc3RhdGUgc2V0dGluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBjb21wb25lbnQgaXMgbW91bnRlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZGlkTW91bnQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmNlcyBhIGNvbXBvbmVudCB0byB1cGRhdGVcbiAgICAgICAgICogRm9sbG93cyB0aGUgc2FtZSBjb21wb25lbnQgdXBkYXRpbmcgcHJvY2VkdXJlIGFzIHNldFN0YXRlIHdpdGhvdXQgbW9kaWZ5aW5nIHN0YXRlXG4gICAgICAgICAqIEByZXR1cm5zIHJldHVybnMgZXJyb3IgaWYgZXJyb3IgaXMgdGhyb3duXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh0aGlzLl9leGVjUmVuZGVyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2tzIGlmIHRoZSBzdGF0ZSBjaGFuZ2VkIGZyb20gdGhlIHByZXZpb3VzIHN0YXRlLiBDYW4gbWUgYXR0YWNoZWQgdG9cbiAgICAgICAgICogYHNob3VsZENvbXBvbmVudFVwZGF0ZWBcbiAgICAgICAgICogQHBhcmFtIGtleXMgLSBsaXN0IG9mIGtleXMgdG8gY3Jhd2wuIElmIGxlZnQgdW5kZWZpbmVkIChkZWZhdWx0KSB0aGVuXG4gICAgICAgICAqIHVzZSBhbGwga2V5cy4gU2hvdWxkIGJlIGBrZXlvZiBTdGF0ZWAsIGJ1dCB0aGVyZSB3ZXJlIHNvbWUgVHlwZXNjcmlwdFxuICAgICAgICAgKiB0cm91Ymxlcy5cbiAgICAgICAgICogQHBhcmFtIG1heERlcHRoIC0gbWF4IHJlY3Vyc2lvbiBkZXB0aCB0byBjcmF3bCBhbiBvYmplY3QuIEFmdGVyIG1heCBkZXB0aFxuICAgICAgICAgKiBpcyByZWFjaGVkLCB0aGUgdHdvIHZhbHVlcyBhcmUgc2ltcGx5IGNvbXBhcmVkIHdpdGggYD09PWBcbiAgICAgICAgICogQHBhcmFtIG1heExlbmd0aCAtIG1heCBsZW5ndGggb2YgYXJyYXkgdG8gY3Jhd2wuIElmIG1heCBsZW50aCBpcyByZWFjaGVkLFxuICAgICAgICAgKiB0d28gYXJyYXlzIHdpbGwgc2ltcGx5IGJlIGNvbXBhcmVkIHdpdGggYD09PWBcbiAgICAgICAgICogQHJldHVybnMgYHZhbDEgPT09IHZhbDJgXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlRGlkQ2hhbmdlID0gKGtleXMsIG1heERlcHRoID0gMywgbWF4TGVuZ3RoID0gMTUpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChrZXlzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXV0aWxzLmlzRXF1YWwodGhpcy5fc3RhdGUsIHRoaXMuX3ByZXZTdGF0ZSwgbWF4RGVwdGgsIG1heExlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHt9LCBwcmV2U3RhdGUgPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gdGhpcy5fc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGVba2V5XSA9IChfYSA9IHRoaXMuX3ByZXZTdGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIXV0aWxzLmlzRXF1YWwoc3RhdGUsIHByZXZTdGF0ZSwgbWF4RGVwdGgsIG1heExlbmd0aCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHN0YXRlXG4gICAgICAgICAqIEBwYXJhbSBvYmogLSBzdGF0ZSB0byBzZXRcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSA9IChvYmopID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9zdGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSkpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fc3RhdGUsIG9iaik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVuZGVyZWRDb250ZW50ID0gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUoKVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2V4ZWNSZW5kZXIoKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGUocmVuZGVyZWRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZywgbWF4LWxlbiAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdGlhbCBtb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHBhcmFtIHBhcmVudCAtIHBhcmVudCBlbGVtZW50IHRvIG1vdW50IHdpdGg7IG9wdGlvbmFsXG4gICAgICAgICAqIEByZXR1cm5zIC0gcmVzdWx0IG9mIGFwcGVuZCBjaGlsZCB0byBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VudENvbXBvbmVudCA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbE1vdW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMy4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnModGhpcy5fcGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRNb3VudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5jb21wb25lbnREaWRNb3VudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuZm9yRWFjaCgoY2hpbGQpID0+IGZyYWdtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsIG1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcmV0dXJucyAtIHJlc3VsdCBvZiBhcHBlbmQgY2hpbGQgdG8gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91bnQgPSB0aGlzLm1vdW50Q29tcG9uZW50O1xuICAgICAgICAvKipcbiAgICAgICAgICogVW5tb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHJldHVybnMgLSB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVubW91bnRDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnModGhpcy5fcGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZE1vdW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVubW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEByZXR1cm5zIC0gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bm1vdW50ID0gdGhpcy51bm1vdW50Q29tcG9uZW50O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4sIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmcgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgY2hpbGRyZW4gZnJvbSB0aGlzLl9wYXJlbnRcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9wYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9wYXJlbnQubGFzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeGVjdXRlcyBuZXcgcmVuZGVyXG4gICAgICAgICAqIEByZXR1cm5zIHJlbmRlcmVkIGNvbnRlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2V4ZWNSZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbigpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGVzIHRoZSBjb21wb25lbnRcbiAgICAgICAgICogQHBhcmFtIHJlbmRlcmVkQ29udGVudCAtIHJlbmRlcmVkIGNvbnRlbnQgZnJvbSBleGVjdXRpbmcgdGhlIHJlbmRlciBmdW5jdGlvblxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl91cGRhdGUgPSAocmVuZGVyZWRDb250ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZENvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiByZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gdGhpcy5fcGFyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVuZGVyZWRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5fcGFyZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYXBwZW5kQ2hpbGQocmVuZGVyZWRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAoX2MgPSB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2hhbmRsZUVycm9yID0gKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaChlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihTdHJpbmcoZXJyKSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyZW50IGlzIG51bGwsIGV4cGVjdGVkIEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBnZXRTdGF0ZSBnZXR0ZXIgYXMgdGhpcy5zdGF0ZSBpdHNlbGYgaXMgcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMgY29tcG9uZW50IHN0YXRlXG4gICAgICovXG4gICAgZ2V0IGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGNvbXBvbmVudCBzdGF0ZVxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqIFdBUk46IGRvIG5vdCB1c2UgdGhpcyBtZXRob2QgdG8gbXV0YXRlIHRoZSBzdGF0ZSBkaXJlY3RseVxuICAgICAqIEBwYXJhbSBvYmogLSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBzZXQgc3RhdGUob2JqKSB7XG4gICAgICAgIGlmICh0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2gobmV3IEVycm9yKGBFUlJPUjogY29kZSAxLiBTZWUgJHt1cmx9LmApKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gb2JqO1xuICAgICAgICAgICAgdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgZ2V0UHJvcHMgZ2V0dGVyIGFzIHRoaXMucHJvcHMgaXRzZWxmIGlzIHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBwcm9wc1xuICAgICAqL1xuICAgIGdldCBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcGFyZW50IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBwYXJlbnQgZWxlbWVudFxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXQgcGFyZW50KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEByZXR1cm5zIHBhcmVudFxuICAgICAqL1xuICAgIGdldCBwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBkaWRNb3VudCB2YWx1ZSBwdWJsaWNseVxuICAgICAqIEByZXR1cm5zIGlmIG1vdW50ZWRcbiAgICAgKi9cbiAgICBnZXQgZGlkTW91bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaWRNb3VudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJldmlvdXMgc3RhdGUuIFVuZGVmaW5lZCBpZiBubyBwcmV2aW91cyBzdGF0ZSBleGlzdHNcbiAgICAgKiBAcmV0dXJucyBwcmV2aW91cyBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBwcmV2U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmV2U3RhdGU7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyTnZiWEJ2Ym1WdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3p0SFFWVkhPMEZCUTBnc09FSkJRVGhDTzBGQlJUbENMRTlCUVU4c1JVRkJReXhOUVVGTkxFbEJRVWtzU1VGQlNTeEZRVUZETEUxQlFVMHNiVUpCUVcxQ0xFTkJRVUU3UVVGRmFFUXNUMEZCVHl4SFFVRkhMRTFCUVUwc1owSkJRV2RDTEVOQlFVRTdRVUZEYUVNc1QwRkJUeXhMUVVGTExFMUJRVTBzYVVKQlFXbENMRU5CUVVFN1FVRnRRbTVET3pzN096czdSMEZOUnp0QlFVTklMRTFCUVUwc1QwRkJaMElzVTBGSGNFSXNVMEZCVVN4SlFVRkpPMGxCTkVKV096czdPMDlCU1VjN1NVRkRTQ3haUVVGdlFpeE5RVUV5UWl4RlFVRlpMRXRCUVdFN1VVRkRjRVVzUzBGQlN5eEZRVUZGTEVOQlFVRTdVVUZFWjBRc1ZVRkJTeXhIUVVGTUxFdEJRVXNzUTBGQlVUdFJRUzlDZUVVN08xZEJSVWM3VVVGRFN5eFhRVUZOTEVkQlFWVXNSVUZCVnl4RFFVRkJPMUZCUlc1RE96czdWMEZIUnp0UlFVTkxMSGRDUVVGdFFpeEhRVUZITEV0QlFVc3NRMEZCUVR0UlFVOXVRenM3VjBGRlJ6dFJRVU5MTEdOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVFN1VVRm5SM3BDT3pzN08xZEJTVWM3VVVGRFlTeG5Ra0ZCVnl4SFFVRkhMRWRCUVdsQ0xFVkJRVVU3TzFsQlF6ZERMRWxCUVVrN1owSkJRMEVzVFVGQlFTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xDdERRVUYyUWl4SlFVRkpMRVZCUVhWQ08yZENRVVV6UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFdEJRVXNzVTBGQlV5eEZRVUZGTzI5Q1FVTTFRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhOQ1FVRnpRaXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZCTzJsQ1FVTm9SRHRuUWtGRlJDeEpRVUZKTEVOQlFVTXNkVUpCUVhWQ0xFTkJRM2hDTEd0Q1FVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVlVzYjBKQlEzQkNMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRMnBDTEVOQlFVRTdaMEpCUlVRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1EwRkJRVHRoUVVOdVF6dFpRVUZETEU5QlFVOHNSMEZCV1N4RlFVRkZMREJDUVVFd1FpeERRVUZETzJkQ1FVTTVReXhQUVVGUExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1lVRkRhRU03VVVGRFRDeERRVUZETEVOQlFVRTdVVUZGUkRzN096czdPenM3T3pzN1YwRlhSenRSUVVOaExHMUNRVUZqTEVkQlFVY3NRMEZETjBJc1NVRkJhVUlzUlVGRGFrSXNVVUZCVVN4SFFVRkhMRU5CUVVNc1JVRkRXaXhUUVVGVExFZEJRVWNzUlVGQlJTeEZRVU5RTEVWQlFVVTdPMWxCUTFRc1NVRkJTU3hKUVVGSkxFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTndRaXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZEYWtJc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGRFdDeEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVTm1MRkZCUVZFc1JVRkRVaXhUUVVGVExFTkJRMW9zUTBGQlFUdGhRVU5LTzFsQlJVUXNUVUZCVFN4TFFVRkxMRWRCUVRaQ0xFVkJRVVVzUlVGRGRFTXNVMEZCVXl4SFFVRTJRaXhGUVVGRkxFTkJRVUU3V1VGRk5VTXNTMEZCU3l4TlFVRk5MRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVU3WjBKQlEzQkNMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlNTeEpRVUZKTEVOQlFVTXNUVUZCYlVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlFUdG5Ra0ZETTBRc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eFRRVU5VTEVsQlFVa3NRMEZCUXl4VlFVRnRSQ3d3UTBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUVR0aFFVTjJSVHRaUVVWRUxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFVkJRVVVzVVVGQlVTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkJPMUZCUTJoRkxFTkJRVU1zUTBGQlFUdFJRVVZFT3pzN08xZEJTVWM3VVVGRFlTeGhRVUZSTEVkQlFVY3NRMEZCUXl4SFFVRnRRaXhGUVVGblFpeEZRVUZGT3p0WlFVTTNSQ3hKUVVGSk8yZENRVU5CTEUxQlFVRXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpd3JRMEZCZUVJc1NVRkJTU3hGUVVGM1FqdG5Ra0ZGTlVJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eExRVUZMTEZOQlFWTXNSVUZCUlR0dlFrRkROVUlzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elFrRkJjMElzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUVR0cFFrRkRhRVE3WjBKQlJVUXNTVUZCU1N4RFFVRkRMRlZCUVZVc2NVSkJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkJPMmRDUVVWc1F5eEpRVUZKTEVOQlFVTXNkVUpCUVhWQ0xFTkJRM2hDTEd0Q1FVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVlVzYjBKQlEzQkNMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRMnBDTEVOQlFVRTdaMEpCUlVRc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGQk8yZENRVVV2UWl4TlFVRk5MR1ZCUVdVc1IwRkJSeXhKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRVZCUVVVN2IwSkJRMmhFTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRk8yOUNRVU53UWl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGQk8yZENRVVZtTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVUU3WVVGRGFFTTdXVUZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSU3d3UWtGQk1FSXNRMEZCUXp0blFrRkRja01zVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGQk8yRkJRMmhETzFGQlEwd3NRMEZCUXl4RFFVRkJPMUZCUlVRc1owVkJRV2RGTzFGQlEyaEZPenM3TzFkQlNVYzdVVUZEWVN4dFFrRkJZeXhIUVVGSExFTkJRemRDTEUxQlFXOUNMRVZCUTFJc1JVRkJSVHM3V1VGRFpDeEpRVUZKTzJkQ1FVTkJMRWxCUVVrc1RVRkJUU3hMUVVGTExGTkJRVk1zUlVGQlJUdHZRa0ZEZEVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVRTdhVUpCUTNaQ08yZENRVVZFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1MwRkJTeXhUUVVGVExFVkJRVVU3YjBKQlF6VkNMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3YVVKQlEyaEVPMmRDUVVWRUxFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRVHRuUWtGRkwwSXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEVsQlFVa3NRMEZCUVR0blFrRkZMMElzVFVGQlFTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xDdERRVUYyUWl4SlFVRkpMRVZCUVhWQ08yZENRVVV6UWl4SlFVRkpMRk5CUVZNc1MwRkJTeXhKUVVGSkxFVkJRVVU3YjBKQlEzQkNMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3YVVKQlEyaEVPMmRDUVVWRUxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVRTdaMEpCUlhKRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkJPMmRDUVVOeVFpeE5RVUZCTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzSzBOQlFYUkNMRWxCUVVrc1JVRkJjMEk3WjBKQlJURkNMRWxCUVVrc1UwRkJVeXhaUVVGWkxFdEJRVXNzUlVGQlJUdHZRa0ZETlVJc1RVRkJUU3hSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEhOQ1FVRnpRaXhGUVVGRkxFTkJRVU03YjBKQlJXeEVMRk5CUVhWQ0xFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVFN2IwSkJSWGhGTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVRTdhVUpCUXpWRE8yZENRVVZFTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVRTdZVUZETjBNN1dVRkJReXhQUVVGUExFZEJRVmtzUlVGQlJTd3dRa0ZCTUVJc1EwRkJRenRuUWtGRE9VTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTzJGQlEyaERPMUZCUTB3c1EwRkJReXhEUVVGQk8xRkJSVVE3T3p0WFFVZEhPMUZCUTJFc1ZVRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVRTdVVUZGTTBNN096dFhRVWRITzFGQlEyRXNjVUpCUVdkQ0xFZEJRVWNzUjBGQlV5eEZRVUZGT3p0WlFVTXhReXhKUVVGSk8yZENRVU5CTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1MwRkJTeXhUUVVGVExFVkJRVVU3YjBKQlF6VkNMRTlCUVUwN2FVSkJRMVE3WjBKQlJVUXNUVUZCUVN4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEN0RFFVRjZRaXhKUVVGSkxFVkJRWGxDTzJkQ1FVVTNRaXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZCTzJkQ1FVVjJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVRTdaMEpCUTNSQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkJPMkZCUTNwQ08xbEJRVU1zVDBGQlR5eEhRVUZaTEVWQlFVVXNNRUpCUVRCQ0xFTkJRVU03WjBKQlF6bERMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdZVUZEZWtJN1VVRkZUQ3hEUVVGRExFTkJRVUU3VVVGRlJEczdPMWRCUjBjN1VVRkRZU3haUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGQk8xRkJReTlETEN0RVFVRXJSRHRSUVVVdlJEczdPMWRCUjBjN1VVRkRTeXh2UWtGQlpTeEhRVUZITEVkQlFWTXNSVUZCUlR0WlFVTnFReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVNMVFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkJPMkZCUTJoRU8xbEJSVVFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSVHRuUWtGRE5VSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJUdHZRa0ZEZUVJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlFUdHBRa0ZEYmtRN1lVRkRTanRSUVVOTUxFTkJRVU1zUTBGQlFUdFJRVVZFT3pzN1YwRkhSenRSUVVOTExHZENRVUZYTEVkQlFVY3NSMEZCWlN4RlFVRkZPMWxCUTI1RExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVXNRMEZCUVR0WlFVVjBRaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUVR0UlFVTjRRaXhEUVVGRExFTkJRVUU3VVVGSFJEczdPenRYUVVsSE8xRkJRMHNzV1VGQlR5eEhRVUZITEVOQlFVTXNaVUZCTkVJc1JVRkJVU3hGUVVGRk96dFpRVU55UkN4SlFVRkpMR1ZCUVdVc1dVRkJXU3hMUVVGTExFVkJRVVU3WjBKQlEyeERMRXRCUVVzc1RVRkJUU3hQUVVGUExFbEJRVWtzWlVGQlpTeEZRVUZGTzI5Q1FVTnVReXhOUVVGQkxFbEJRVWtzUTBGQlF5eFBRVUZQTERCRFFVRkZMRmRCUVZjc1EwRkJReXhQUVVGUExFVkJRVU03YVVKQlEzSkRPMkZCUTBvN2FVSkJRVTBzU1VGQlNTeGxRVUZsTEVWQlFVVTdaMEpCUTNoQ0xFMUJRVUVzU1VGQlNTeERRVUZETEU5QlFVOHNNRU5CUVVVc1YwRkJWeXhEUVVGRExHVkJRV1VzUlVGQlF6dGhRVU0zUXp0WlFVVkVMRWxCUVVrc1pVRkJaU3hGUVVGRk8yZENRVU5xUWl4TlFVRkJMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNLME5CUVhaQ0xFbEJRVWtzUlVGQmRVSTdZVUZET1VJN1VVRkRUQ3hEUVVGRExFTkJRVUU3VVVGRlR5eHBRa0ZCV1N4SFFVRkhMRU5CUVVNc1IwRkJXU3hGUVVGVExFVkJRVVU3V1VGRE0wTXNTVUZCU1N4SFFVRkhMRmxCUVZrc1MwRkJTeXhGUVVGRk8yZENRVU4wUWl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1owSkJSVE5DTEU5QlFVOHNSMEZCV1N4RFFVRkJPMkZCUTNSQ08xbEJSVVFzVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVRTdXVUZGY0VNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGQk8xbEJSVGRDTEU5QlFVOHNTMEZCU3l4RFFVRkJPMUZCUTJoQ0xFTkJRVU1zUTBGQlFUdFJRVE5VUnl4SlFVRkpMRTFCUVUwc1MwRkJTeXhKUVVGSkxFVkJRVVU3V1VGRGFrSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh0UkVGQmJVUXNRMEZCUXl4RFFVRkJPMU5CUTNaRk8xRkJSVVFzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVFN1NVRkRla0lzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSUxFbEJRVmNzVVVGQlVUdFJRVU5tTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRVHRKUVVOeVFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGdzU1VGQll5eExRVUZMTzFGQlEyWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGQk8wbEJRM1JDTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwZ3NTVUZCWXl4TFFVRkxMRU5CUVVVc1IwRkJWVHRSUVVNelFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUlVGQlJUdFpRVU14UWl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlEyeENMRWxCUVVrc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVNeFF5eERRVUZCTzFsQlEwUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlFUdFRRVU55UWp0aFFVRk5PMWxCUTBnc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVRTdXVUZEYWtJc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SFFVRkhMRWxCUVVrc1EwRkJRVHRUUVVOc1F6dEpRVU5NTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNDeEpRVUZYTEZGQlFWRTdVVUZEWml4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVUU3U1VGRGNrSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU0N4SlFVRlhMRTFCUVUwc1EwRkJSU3hQUVVGblF6dFJRVU12UXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlFUdEpRVU14UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwZ3NTVUZCVnl4TlFVRk5PMUZCUTJJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZCTzBsQlEzWkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU0N4SlFVRlhMRkZCUVZFN1VVRkRaaXhQUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVRTdTVUZEZWtJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTklMRWxCUVZjc1UwRkJVenRSUVVOb1FpeFBRVUZQTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVFN1NVRkRNVUlzUTBGQlF6dERRVGhQU2p0QlFVVkVMR1ZCUVdVc1UwRkJVeXhEUVVGQkluMD0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGZvciBET00gbWFuaXB1bGF0aW9uXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vanN4LnRzXCIgLz5cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiwgfSBmcm9tIFwiLi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHNcIjtcbmV4cG9ydCBjb25zdCBmcmFnbWVudCA9IChfLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGJpbmRDaGlsZHJlbihmcmFnbWVudCwgY2hpbGRyZW4pO1xuICAgIHJldHVybiBmcmFnbWVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBmcmFnbWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpuSmhaMjFsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZabkpoWjIxbGJuUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3TzBkQlVVYzdRVUZEU0N3eVFrRkJNa0k3UVVGRE0wSXNhVU5CUVdsRE8wRkJSV3BETEU5QlFVOHNSVUZGU0N4WlFVRlpMRWRCUTJZc1RVRkJUU3dyUWtGQkswSXNRMEZCUVR0QlFVVjBReXhOUVVGTkxFTkJRVU1zVFVGQlRTeFJRVUZSTEVkQlFVY3NRMEZEY0VJc1EwRkJWU3hGUVVOV0xFZEJRVWNzVVVGQk1rSXNSVUZEWkN4RlFVRkZPMGxCUTJ4Q0xFMUJRVTBzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4elFrRkJjMElzUlVGQlJTeERRVUZCTzBsQlJXeEVMRmxCUVZrc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVRTdTVUZGYUVNc1QwRkJUeXhSUVVGUkxFTkJRVUU3UVVGRGJrSXNRMEZCUXl4RFFVRkJPMEZCUlVRc1pVRkJaU3hSUVVGUkxFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIERlU3RhZ25hdGUgbWFpbiBkZXN0YWduYXRlIGNsYXNzXG4gKiBAZmlsZSBtYWluIGZpbGUgZm9yIGRlc3RhZ25hdGVcbiAqIEBwcmVzZXJ2ZVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2pzeC50c1wiIC8+XG5pbXBvcnQgKiBhcyBfQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgX0NyZWF0ZVJlZiBmcm9tIFwiLi9jcmVhdGVSZWZcIjtcbmltcG9ydCAqIGFzIF9DcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCAqIGFzIF9DcmVhdGVFbGVtZW50TlMgZnJvbSBcIi4vY3JlYXRlRWxlbWVudE5TXCI7XG5pbXBvcnQgKiBhcyBfRnJhZ21lbnQgZnJvbSBcIi4vZnJhZ21lbnRcIjtcbmV4cG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuZXhwb3J0IHsgY3JlYXRlUmVmIH0gZnJvbSBcIi4vY3JlYXRlUmVmXCI7XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuZXhwb3J0IHsgY3JlYXRlRWxlbWVudE5TIH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudE5TXCI7XG5leHBvcnQgeyBmcmFnbWVudCB9IGZyb20gXCIuL2ZyYWdtZW50XCI7XG5leHBvcnQgdmFyIERlU3RhZ25hdGU7XG4oZnVuY3Rpb24gKERlU3RhZ25hdGUpIHtcbiAgICBEZVN0YWduYXRlLkNvbXBvbmVudCA9IF9Db21wb25lbnQuQ29tcG9uZW50O1xuICAgIERlU3RhZ25hdGUuY3JlYXRlUmVmID0gX0NyZWF0ZVJlZi5jcmVhdGVSZWY7XG4gICAgRGVTdGFnbmF0ZS5jcmVhdGVFbGVtZW50ID0gX0NyZWF0ZUVsZW1lbnQuY3JlYXRlRWxlbWVudDtcbiAgICBEZVN0YWduYXRlLmNyZWF0ZUVsZW1lbnROUyA9IF9DcmVhdGVFbGVtZW50TlMuY3JlYXRlRWxlbWVudE5TO1xuICAgIERlU3RhZ25hdGUuZnJhZ21lbnQgPSBfRnJhZ21lbnQuZnJhZ21lbnQ7XG59KShEZVN0YWduYXRlIHx8IChEZVN0YWduYXRlID0ge30pKTtcbmV4cG9ydCBkZWZhdWx0IERlU3RhZ25hdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenM3UjBGVlJ6dEJRVU5JTERKQ1FVRXlRanRCUVVNelFpeHBRMEZCYVVNN1FVRkZha01zVDBGQlR5eExRVUZMTEZWQlFWVXNUVUZCVFN4aFFVRmhMRU5CUVVFN1FVRkRla01zVDBGQlR5eExRVUZMTEZWQlFWVXNUVUZCVFN4aFFVRmhMRU5CUVVFN1FVRkRla01zVDBGQlR5eExRVUZMTEdOQlFXTXNUVUZCVFN4cFFrRkJhVUlzUTBGQlFUdEJRVU5xUkN4UFFVRlBMRXRCUVVzc1owSkJRV2RDTEUxQlFVMHNiVUpCUVcxQ0xFTkJRVUU3UVVGRGNrUXNUMEZCVHl4TFFVRkxMRk5CUVZNc1RVRkJUU3haUVVGWkxFTkJRVUU3UVVGRmRrTXNUMEZCVHl4RlFVRkRMRk5CUVZNc1JVRkJReXhOUVVGTkxHRkJRV0VzUTBGQlFUdEJRVU55UXl4UFFVRlBMRVZCUVUwc1UwRkJVeXhGUVVGRExFMUJRVTBzWVVGQllTeERRVUZCTzBGQlF6RkRMRTlCUVU4c1JVRkJReXhoUVVGaExFVkJRVU1zVFVGQlRTeHBRa0ZCYVVJc1EwRkJRVHRCUVVNM1F5eFBRVUZQTEVWQlFVTXNaVUZCWlN4RlFVRkRMRTFCUVUwc2JVSkJRVzFDTEVOQlFVRTdRVUZEYWtRc1QwRkJUeXhGUVVGRExGRkJRVkVzUlVGQlF5eE5RVUZOTEZsQlFWa3NRMEZCUVR0QlFVVnVReXhOUVVGTkxFdEJRVmNzVlVGQlZTeERRVTh4UWp0QlFWQkVMRmRCUVdsQ0xGVkJRVlU3U1VGRFZDeHZRa0ZCVXl4SFFVRkpMRlZCUVZVc1ZVRkJaQ3hEUVVGak8wbEJRM1pDTEc5Q1FVRlRMRWRCUVVrc1ZVRkJWU3hWUVVGa0xFTkJRV003U1VGRmRrSXNkMEpCUVdFc1IwRkJTU3hqUVVGakxHTkJRV3hDTEVOQlFXdENPMGxCUXk5Q0xEQkNRVUZsTEVkQlFVa3NaMEpCUVdkQ0xHZENRVUZ3UWl4RFFVRnZRanRKUVVOdVF5eHRRa0ZCVVN4SFFVRkpMRk5CUVZNc1UwRkJZaXhEUVVGaE8wRkJRM1pETEVOQlFVTXNSVUZRWjBJc1ZVRkJWU3hMUVVGV0xGVkJRVlVzVVVGUE1VSTdRVUZGUkN4bFFVRmxMRlZCUVZVc1EwRkJRU0o5Il0sIm5hbWVzIjpbIl9jcmVhdGVFbGVtZW50IiwiX2NyZWF0ZUVsZW1lbnROUyIsIl9jcmVhdGVSZWYiLCJCYXNlQ29tcG9uZW50IiwiQmFzZSIsIl9Db21wb25lbnQuQ29tcG9uZW50IiwiX0NyZWF0ZVJlZi5jcmVhdGVSZWYiLCJfQ3JlYXRlRWxlbWVudC5jcmVhdGVFbGVtZW50IiwiX0NyZWF0ZUVsZW1lbnROUy5jcmVhdGVFbGVtZW50TlMiLCJfRnJhZ21lbnQuZnJhZ21lbnQiLCJEZVN0YWduYXRlIl0s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
