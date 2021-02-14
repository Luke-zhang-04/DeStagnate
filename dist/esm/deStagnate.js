/**
 * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 */
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
     * @param shouldComponentUpdate - if component should update after state setting
     * @returns void
     */


    this.setState = (obj, shouldComponentUpdate = true) => {
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
        const renderedContent = shouldComponentUpdate && this.shouldComponentUpdate() ? this._execRender() : undefined;

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

const Fragment = (_, ...children) => {
  const documentFragment = document.createDocumentFragment();
  bindChildren(documentFragment, children);
  return documentFragment;
};

var DeStagnate;

(function (DeStagnate) {
  DeStagnate.Component = Component;
  DeStagnate.createRef = createRef;
  DeStagnate.createElement = createElement;
  DeStagnate.createElementNS = createElementNS;
  DeStagnate.Fragment = Fragment;
})(DeStagnate || (DeStagnate = {}));

var DeStagnate$1 = DeStagnate;

export default DeStagnate$1;
export { Component, DeStagnate, Fragment, createElement, createElementNS, createRef };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVTdGFnbmF0ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3ByaXZhdGUvX3VybC5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHMuanMiLCIuLi8uLi9saWIvY3JlYXRlRWxlbWVudC5qcyIsIi4uLy4uL2xpYi9jcmVhdGVFbGVtZW50TlMuanMiLCIuLi8uLi9saWIvY3JlYXRlUmVmLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvX2Jhc2UuanMiLCIuLi8uLi9saWIvcHJpdmF0ZS9fZXZlbnRzLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvdXRpbHMuanMiLCIuLi8uLi9saWIvY29tcG9uZW50LmpzIiwiLi4vLi4vbGliL2ZyYWdtZW50LmpzIiwiLi4vLi4vbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB1cmwgPSBcImh0dHBzOi8vbHVrZS16aGFuZy0wNC5naXRodWIuaW8vRGVTdGFnbmF0ZS9lcnJvci1jb2Rlc1wiO1xuZXhwb3J0IGRlZmF1bHQgdXJsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDNWeWJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d2NtbDJZWFJsTDE5MWNtd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEhkRVFVRjNSQ3hEUVVGQk8wRkJSVE5GTEdWQlFXVXNSMEZCUnl4RFFVRkJJbjA9IiwiLyoqXG4gKiBDb21wb25lbnRcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGZpbGUgc2hhcmUgZnVuY3Rpb25zIGFuZCB0eXBlcyBmb3IgY3JlYXRlRWxlbWVudCBhbmQgaXQncyB2YXJpYW50c1xuICovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50XCI7XG5pbXBvcnQgdXJsIGZyb20gXCIuL191cmxcIjtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gcHJvcHMgLSBwcm9wcyB0byBiaW5kIHdpdGhcbiAqIEBwYXJhbSBucyAtIGlmIG5hbWVzcGFjZSBlbGVtZW50XG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kUHJvcHMgPSAoZWxlbWVudCwgcHJvcHMsIG5zID0gZmFsc2UpID0+IHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwiaW5uZXJIVE1MXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB2YWwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobnMpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBrZXksIHZhbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleS5zbGljZSgwLCAyKSA9PT0gXCJvblwiKSB7IC8vIFdvcmtzIHN1Y2ggYXMgb25DbGljaywgb25BbmltYXRpb25FbmQsIGV0Yy5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh2YWwpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCksIHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSBcInJlZlwiICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mICh2YWwpID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50XCIgaW4gdmFsKSB7XG4gICAgICAgICAgICAgICAgdmFsLmN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7dHlwZW9mIHZhbH0gaXMgbm90IGEgdmFsaWQgRGVTdGFnbmF0ZSBjaGlsZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiB0byBiaW5kIHdpdGhcbiAqIEByZXR1cm5zIHZvaWRcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRDaGlsZHJlbiA9IChlbGVtZW50LCBjaGlsZHJlbikgPT4ge1xuICAgIGlmIChjaGlsZHJlbiAhPT0gbnVsbCAmJiBjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gKGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZCkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZHJlbi50b1N0cmluZygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4gaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGlmICghY2hpbGRyZW4uZGlkTW91bnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLm1vdW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDMuIFNlZSAke3VybH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi5wYXJlbnQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wYXJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hpbGRyZW4uZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgyTnlaV0YwWlVWc1pXMWxiblJWZEdsc2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d2NtbDJZWFJsTDE5amNtVmhkR1ZGYkdWdFpXNTBWWFJwYkhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPMGRCVVVjN1FVRkZTQ3hQUVVGUExFVkJRVU1zVTBGQlV5eEZRVUZETEUxQlFVMHNZMEZCWXl4RFFVRkJPMEZCUlhSRExFOUJRVThzUjBGQlJ5eE5RVUZOTEZGQlFWRXNRMEZCUVR0QlFYbEZlRUk3T3pzN096czdSMEZQUnp0QlFVTklMRTFCUVUwc1EwRkJReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eERRVU55UWl4UFFVRm5RaXhGUVVOb1FpeExRVUY1UWl4RlFVTjZRaXhGUVVGRkxFZEJRVWNzUzBGQlN5eEZRVU5PTEVWQlFVVTdTVUZEVGl4SlFVRkpMRXRCUVVzc1JVRkJSVHRSUVVOUUxFdEJRVXNzVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUXpWRExFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzUlVGQlJUdG5Ra0ZEY0VRc1NVRkJTU3hIUVVGSExFdEJRVXNzVjBGQlZ5eEZRVUZGTzI5Q1FVTnlRaXhQUVVGUExFTkJRVU1zVTBGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRVHRwUWtGRGNrTTdjVUpCUVUwc1NVRkJTU3hGUVVGRkxFVkJRVVU3YjBKQlExZ3NUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGQk8ybENRVU53UkR0eFFrRkJUVHR2UWtGRFNDeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUVR0cFFrRkROVU03WVVGRFNqdHBRa0ZCVFN4SlFVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1JVRkJSU3hGUVVGRkxEaERRVUU0UXp0blFrRkRha1lzU1VGQlNTeFBRVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1ZVRkJWU3hGUVVGRk8yOUNRVU0xUWl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlEzQkNMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVTlFMRmRCUVZjc1JVRkJiMElzUlVGRGNFTXNSMEZCWjBJc1EwRkRia0lzUTBGQlFUdHBRa0ZEU2p0aFFVTktPMmxDUVVGTkxFbEJRMGdzUjBGQlJ5eExRVUZMTEV0QlFVczdaMEpCUTJJc1QwRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEZGQlFWRTdaMEpCUTNoQ0xGTkJRVk1zU1VGQlNTeEhRVUZITEVWQlEyeENPMmRDUVVOSExFZEJRVzlDTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJRVHRoUVVNeFF6dHBRa0ZCVFN4SlFVRkpMRWRCUVVjc1MwRkJTeXhUUVVGVExFVkJRVVU3WjBKQlF6RkNMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eFBRVUZQTEVkQlFVY3NhME5CUVd0RExFTkJRVU1zUTBGQlFUdGhRVU5vUlR0VFFVTktPMHRCUTBvN1FVRkRUQ3hEUVVGRExFTkJRVUU3UVVGRlJEczdPenM3TzBkQlRVYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3haUVVGWkxFZEJRVWNzUTBGRGVFSXNUMEZCWVN4RlFVTmlMRkZCUVhWQ0xFVkJRMjVDTEVWQlFVVTdTVUZEVGl4SlFVRkpMRkZCUVZFc1MwRkJTeXhKUVVGSkxFbEJRVWtzVVVGQlVTeExRVUZMTEZOQlFWTXNSVUZCUlR0UlFVTTNReXhKUVVGSkxGRkJRVkVzV1VGQldTeExRVUZMTEVWQlFVVTdXVUZETTBJc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEV0QlFXMUNMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRM1JETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJReTlDTEVOQlFVTXNRMEZCUVR0VFFVTk1PMkZCUVUwc1NVRkRTQ3hQUVVGUExGRkJRVkVzUzBGQlN5eFJRVUZSTzFsQlF6VkNMRTlCUVU4c1VVRkJVU3hMUVVGTExGRkJRVkVzUlVGRE9VSTdXVUZEUlN4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlFUdFRRVU53UlR0aFFVRk5MRWxCUVVrc1VVRkJVU3haUVVGWkxGTkJRVk1zUlVGQlJUdFpRVU4wUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzU1VGQlNTeFBRVUZQTEZsQlFWa3NUVUZCVFN4RFFVRkRMRmRCUVZjc1JVRkJSVHRuUWtGRE4wUXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlFUdG5Ra0ZGZGtJc1QwRkJUVHRoUVVOVU8ybENRVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMRTlCUVU4c1dVRkJXU3hOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVTdaMEpCUTJwRUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVRTdZVUZETDBNN1dVRkZSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eE5RVUZOTEV0QlFVc3NUMEZCVHl4RlFVRkZPMmRDUVVNM1FpeFJRVUZSTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJRVHRoUVVNMVFqdFpRVVZFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRVHRUUVVONlFqdGhRVUZOTzFsQlEwZ3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlFUdFRRVU5vUXp0TFFVTktPMEZCUTB3c1EwRkJReXhEUVVGQkluMD0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBmb3IgRE9NIG1hbmlwdWxhdGlvblxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2pzeC50c1wiIC8+XG5pbXBvcnQgeyBiaW5kQ2hpbGRyZW4sIGJpbmRQcm9wcyB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuLyoqXG4gKlxuICogQHBhcmFtIHRhZ05hbWVPckNvbXBvbmVudCAtIG5hbWUgb2YgSFRNTCBlbGVtZW50IG9yIGZ1bmN0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtIHByb3BzIC0gcHJvcHMgb2YgZWxlbWVudCBvciBjb21wb25lbnRcbiAqIDEuIElmIGB0YWdOYW1lT3JDb21wb25lbnRgIGlzIHRhZ25hbWUsIHByb3BzIGFyZSBlbGVtZW50IHByb3BlcnRpZXMsIHN1Y2ggYXMgY2xhc3MsIGlubmVySFRNTCwgaWQsIHN0eWxlLCBldGNcbiAqIDIuIElmIGB0YWdOYW1lT3JDb21wb25lbnRgIGlzIGEgZnVuY3Rpb24sIHByb3BzIGFyZSB0aGF0IGZ1bmN0aW9ucyBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQuIENhbiBiZSBub3RoaW5nLCBudW1iZXIgKGNvbnZlcnRlZCB0byBzdHJpbmcpLCBzdHJpbmcgKHRleHQpLCBvciBhbm90aGVyIGVsZW1lbnQuIEFuIGFycmF5IG9mIGFueSBvZiB0aGVzZSB3aWxsIGNyZWF0ZSBtdWx0aXBsZSBjaGlsZHJlblxuICogQHBhcmFtIGNoaWxkcmVuQXJncyAtIHJlc3QgcGFyYW1ldGVyIGZvciBjaGlsZHJlblxuICogQHJldHVybnMgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lT3JDb21wb25lbnQsIHByb3BzLCAuLi5jaGlsZHJlbikge1xuICAgIGlmICh0eXBlb2YgKHRhZ05hbWVPckNvbXBvbmVudCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZU9yQ29tcG9uZW50KTtcbiAgICAgICAgYmluZFByb3BzKGVsZW1lbnQsIHByb3BzKTtcbiAgICAgICAgYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiAodGFnTmFtZU9yQ29tcG9uZW50KSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiB0YWdOYW1lT3JDb21wb25lbnQocHJvcHMsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIEVycm9yKFwidGFnTmFtZU9yQ29tcG9uZW50IGlzIG9mIGludmFsaWQgdHlwZS5cIik7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxSV3hsYldWdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlqY21WaGRHVkZiR1Z0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdPenRIUVZGSE8wRkJRMGdzTWtKQlFUSkNPMEZCUXpOQ0xHbERRVUZwUXp0QlFVVnFReXhQUVVGUExFVkJSMGdzV1VGQldTeEZRVU5hTEZOQlFWTXNSVUZEV2l4TlFVRk5MQ3RDUVVFclFpeERRVUZCTzBGQmMwTjBRenM3T3pzN096czdPMGRCVTBjN1FVRkRTQ3hOUVVGTkxGVkJRVlVzWVVGQllTeERRVWw2UWl4clFrRkhXU3hGUVVOYUxFdEJRVFpDTEVWQlF6ZENMRWRCUVVjc1VVRkJNa0k3U1VGRk9VSXNTVUZCU1N4UFFVRk5MRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTMEZCU3l4UlFVRlJMRVZCUVVVN1VVRkRla01zVFVGQlRTeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkJPMUZCUlRGRUxGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCTUVJc1EwRkJReXhEUVVGQk8xRkJSVGxETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVUU3VVVGRkwwSXNUMEZCVHl4UFFVRlBMRU5CUVVFN1MwRkRha0k3VTBGQlRTeEpRVUZKTEU5QlFVMHNRMEZCUXl4clFrRkJhMElzUTBGQlF5eExRVUZMTEZWQlFWVXNSVUZCUlR0UlFVTnNSQ3hQUVVGUExHdENRVUZyUWl4RFFVRkRMRXRCUVZVc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlFUdExRVU5zUkR0SlFVVkVMRTlCUVU4c1MwRkJTeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVFN1FVRkRNVVFzUTBGQlF6dEJRVVZFTEdWQlFXVXNZVUZCWVN4RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnROUyBjcmVhdGVFbGVtZW50IGZvciBuYW1lc3BhY2VkIGVsZW1lbnRzXG4gKi9cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiwgYmluZFByb3BzIH0gZnJvbSBcIi4vcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBjaGlsZCBlbGVtZW50IHRvIGRlU3RhZ25hdGVcbiAqIEBwYXJhbSBuYW1lc3BhY2VVUkkgLSBuYW1lc3BhY2UgdXJpXG4gKiBAcGFyYW0gdGFnTmFtZSAtIG5hbWUgb2YgSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0gcHJvcHMgLSBlbGVtZW50IHByb3BlcnRpZXMsIHN1Y2ggYXMgY2xhc3MsIGlubmVySFRNTCwgaWQsIHN0eWxlLCBldGNcbiAqIEBwYXJhbSBjaGlsZHJlbiAtIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudC4gQ2FuIGJlIG5vdGhpbmcsIG51bWJlciAoY29udmVydGVkIHRvIHN0cmluZyksIHN0cmluZyAodGV4dCksIG9yIGFub3RoZXIgZWxlbWVudC4gQW4gYXJyYXkgb2YgYW55IG9mIHRoZXNlIHdpbGwgY3JlYXRlIG11bHRpcGxlIGNoaWxkcmVuXG4gKiBAcGFyYW0gY2hpbGRyZW5SZXN0IC0gcmVzdCBwYXJhbWV0ZXIgb2YgY2hpbGRyZW5cbiAqIEByZXR1cm5zIGh0bWwgZWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudE5TID0gKG5hbWVzcGFjZVVSSSwgdGFnTmFtZSwgcHJvcHMsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHRhZ05hbWUpO1xuICAgIGJpbmRQcm9wcyhlbGVtZW50LCBwcm9wcywgdHJ1ZSk7XG4gICAgYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50TlM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFJXeGxiV1Z1ZEU1VExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMk55WldGMFpVVnNaVzFsYm5ST1V5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3UjBGUlJ6dEJRVVZJTEU5QlFVOHNSVUZGU0N4WlFVRlpMRVZCUTFvc1UwRkJVeXhGUVVOYUxFMUJRVTBzSzBKQlFTdENMRU5CUVVFN1FVRkZkRU03T3pzN096czdPMGRCVVVjN1FVRkRTQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeGxRVUZsTEVkQlFVY3NRMEZETTBJc1dVRkJLMGNzUlVGREwwY3NUMEZCTUVNc1JVRkRNVU1zUzBGQmQwTXNSVUZEZUVNc1IwRkJSeXhSUVVFeVFpeEZRVU4yUWl4RlFVRkZPMGxCUTFRc1RVRkJUU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVUU3U1VGRkwwUXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVRTdTVUZGTDBJc1dVRkJXU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUVR0SlFVVXZRaXhQUVVGUExFOUJRVThzUTBGQlFUdEJRVU5zUWl4RFFVRkRMRU5CUVVFN1FVRkZSQ3hsUVVGbExHVkJRV1VzUTBGQlFTSjkiLCIvKipcbiAqIENyZWF0ZXMgYSByZWZlcmVuY2UgZm9yIGEgbmVzdGVkIGNvbXBvbmVudFxuICogQHJldHVybnMgZW1wdHkgcmVmIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmID0gKCkgPT4gKHtcbiAgICBjdXJyZW50OiBudWxsLFxufSk7XG4vKipcbiAqIENyZWF0ZXMgYSByZWZlcmVuY2UgZm9yIGEgbmVzdGVkIGNvbXBvbmVudFxuICogQHJldHVybnMgZW1wdHkgcmVmIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWY7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFVtVm1MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOeVpXRjBaVkpsWmk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRmxRVHM3TzBkQlIwYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQmQwTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRha1VzVDBGQlR5eEZRVUZGTEVsQlFVazdRMEZEYUVJc1EwRkJReXhEUVVGQk8wRkJSVVk3T3p0SFFVZEhPMEZCUTBnc1pVRkJaU3hUUVVGVExFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBQcmVzZXQgLSBiYXNlIGZvciBhIGNvbXBvbmVudFxuICogQHBhY2thZ2VcbiAqL1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBfY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVFbGVtZW50TlMgfSBmcm9tIFwiLi4vY3JlYXRlRWxlbWVudE5TXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVSZWYgfSBmcm9tIFwiLi4vY3JlYXRlUmVmXCI7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBjb21wb25lbnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmVzZXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQgPSBfY3JlYXRlRWxlbWVudDtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50TlMgPSBfY3JlYXRlRWxlbWVudE5TO1xuICAgICAgICB0aGlzLmNyZWF0ZVJlZiA9IF9jcmVhdGVSZWY7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgd2hlbiBjb21wb25lbnQgY2F0Y2hlcyBlcnJvci4gRGVmYXVsdCBiZWhhdmlvdXIgaXMgY29uc29sZS5lcnJvclxuICAgICAgICAgKiBAcGFyYW0gZXJyb3IgLSBlcnJvciBvYmplY3Qgd2l0aCBpbmZvXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2ggPSAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIGJlZm9yZSBjb21wb25lbnQgaXMgdXBkYXRlZFxuICAgICAgICAgKiBAcmV0dXJucyB3aGV0aGVyIG9yIG5vdCBjb21wb25lbnQgc2hvdWxkIHVwZGF0ZS9yZS1yZW5kZXJcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbmRlcmluZyBIVE1MLCBtdXN0IGJlIHBhcnQgb2YgZXh0ZW5kZWQgY2xhc3NcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEByZXR1cm5zIGlmIHJldHVybnMgbnVsbCBlcnJvciB3aWxsIGJlIHRocm93blxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiBudWxsO1xuICAgIH1cbn1cblByZXNldC5jcmVhdGVFbGVtZW50ID0gX2NyZWF0ZUVsZW1lbnQ7XG5QcmVzZXQuY3JlYXRlRWxlbWVudE5TID0gX2NyZWF0ZUVsZW1lbnROUztcblByZXNldC5jcmVhdGVSZWYgPSBfY3JlYXRlUmVmO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDJKaGMyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmNISnBkbUYwWlM5ZlltRnpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN08wZEJVMGM3UVVGRlNDeFBRVUZQTEVWQlFVTXNUMEZCVHl4SlFVRkpMR05CUVdNc1JVRkJReXhOUVVGTkxHdENRVUZyUWl4RFFVRkJPMEZCUXpGRUxFOUJRVThzUlVGQlF5eFBRVUZQTEVsQlFVa3NaMEpCUVdkQ0xFVkJRVU1zVFVGQlRTeHZRa0ZCYjBJc1EwRkJRVHRCUVVNNVJDeFBRVUZQTEVWQlFVTXNUMEZCVHl4SlFVRkpMRlZCUVZVc1JVRkJReXhOUVVGTkxHTkJRV01zUTBGQlFUdEJRV2xEYkVRc01FSkJRVEJDTzBGQlF6RkNPenRIUVVWSE8wRkJRMGdzVFVGQlRTeFBRVUZuUWl4TlFVRk5PMGxCUVRWQ08xRkJVVzlDTEd0Q1FVRmhMRWRCUVVjc1kwRkJZeXhEUVVGQk8xRkJSVGxDTEc5Q1FVRmxMRWRCUVVjc1owSkJRV2RDTEVOQlFVRTdVVUZGYkVNc1kwRkJVeXhIUVVGSExGVkJRVlVzUTBGQlFUdFJRVVYwUXpzN096dFhRVWxITzFGQlEwa3NjMEpCUVdsQ0xFZEJRVWNzUTBGQlF5eExRVUZaTEVWQlFWRXNSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVRTdVVUZGZGtVN096dFhRVWRITzFGQlEwa3NNRUpCUVhGQ0xFZEJRVWNzUjBGQldTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkJPMUZCUld4RU96czdPenM3VjBGTlJ6dFJRVU5oTEZkQlFVMHNSMEZCUnl4SFFVRmxMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVUU3U1VGRmJrUXNRMEZCUXpzN1FVRnNRekJDTEc5Q1FVRmhMRWRCUVVjc1kwRkJZeXhEUVVGQk8wRkJSVGxDTEhOQ1FVRmxMRWRCUVVjc1owSkJRV2RDTEVOQlFVRTdRVUZGYkVNc1owSkJRVk1zUjBGQlJ5eFZRVUZWTEVOQlFVRWlmUT09IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBleHBvcnRzIEV2ZW50c1xuICogQHBhY2thZ2VcbiAqL1xuaW1wb3J0IHsgUHJlc2V0IGFzIEJhc2VDb21wb25lbnQgfSBmcm9tIFwiLi9fYmFzZVwiO1xuY29uc3QgZXZlbnROYW1lcyA9IFtcbiAgICBcIm9uRm9jdXNcIixcbiAgICBcIm9uQmx1clwiLFxuICAgIFwib25Gb2N1c0luXCIsXG4gICAgXCJvbkZvY3VzT3V0XCIsXG4gICAgXCJvbkFuaW1hdGlvblN0YXJ0XCIsXG4gICAgXCJvbkFuaW1hdGlvbkNhbmNlbFwiLFxuICAgIFwib25BbmltYXRpb25FbmRcIixcbiAgICBcIm9uQW5pbWF0aW9uSXRlcmF0aW9uXCIsXG4gICAgXCJvblRyYW5zaXRpb25TdGFydFwiLFxuICAgIFwib25UcmFuc2l0aW9uQ2FuY2VsXCIsXG4gICAgXCJvblRyYW5zaXRpb25FbmRcIixcbiAgICBcIm9uVHJhbnNpdGlvblJ1blwiLFxuICAgIFwib25BdXhDbGlja1wiLFxuICAgIFwib25DbGlja1wiLFxuICAgIFwib25EYmxDbGlja1wiLFxuICAgIFwib25Nb3VzZURvd25cIixcbiAgICBcIm9uTW91c2VFbnRlclwiLFxuICAgIFwib25Nb3VzZUxlYXZlXCIsXG4gICAgXCJvbk1vdXNlTW92ZVwiLFxuICAgIFwib25Nb3VzZU92ZXJcIixcbiAgICBcIm9uTW91c2VPdXRcIixcbiAgICBcIm9uTW91c2VVcFwiLFxuICAgIFwib25XaGVlbFwiLFxuXSwgd2luZG93RXZlbnROYW1lcyA9IFtcbiAgICBcIm9uTG9hZFwiLFxuICAgIFwib25PbmxpbmVcIixcbiAgICBcIm9uT2ZmbGluZVwiLFxuICAgIFwib25SZXNpemVcIixcbiAgICBcIm9uU2Nyb2xsXCIsXG4gICAgXCJvbktleURvd25cIixcbiAgICBcIm9uS2V5UHJlc3NcIixcbiAgICBcIm9uS2V5VXBcIixcbl07XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50cyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQmluZHMgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICAgKiBEbyBub3QgY2FsbCBtYW51YWxseVxuICAgICAgICAgKiBAcGFjYWtnZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnMgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcihlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcih3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciwgd2luZG93RXZlbnROYW1lcyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kcyBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgICAqIERvIG5vdCBjYWxsIG1hbnVhbGx5XG4gICAgICAgICAqIEBwYWNha2dlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVuYmluZEV2ZW50TGlzdGVuZXJzID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIoZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIsIHdpbmRvd0V2ZW50TmFtZXMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gKGV2ZW50TGlzdGVuZXIsIGV2ZW50cyA9IGV2ZW50TmFtZXMpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxFdmVudE5hbWUgPSBldmVudE5hbWUuc2xpY2UoMikudG9Mb3dlckNhc2UoKSwgY2FsbGJhY2sgPSB0aGlzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBldmVudExpc3RlbmVyKGh0bWxFdmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDJWMlpXNTBjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOWxkbVZ1ZEhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenRIUVZOSE8wRkJSVWdzVDBGQlR5eEZRVUZETEUxQlFVMHNTVUZCU1N4aFFVRmhMRVZCUVVNc1RVRkJUU3hUUVVGVExFTkJRVUU3UVVGdlRDOURMRTFCUVUwc1ZVRkJWU3hIUVVGeFFqdEpRVU5xUXl4VFFVRlRPMGxCUTFRc1VVRkJVVHRKUVVOU0xGZEJRVmM3U1VGRFdDeFpRVUZaTzBsQlExb3NhMEpCUVd0Q08wbEJRMnhDTEcxQ1FVRnRRanRKUVVOdVFpeG5Ra0ZCWjBJN1NVRkRhRUlzYzBKQlFYTkNPMGxCUTNSQ0xHMUNRVUZ0UWp0SlFVTnVRaXh2UWtGQmIwSTdTVUZEY0VJc2FVSkJRV2xDTzBsQlEycENMR2xDUVVGcFFqdEpRVU5xUWl4WlFVRlpPMGxCUTFvc1UwRkJVenRKUVVOVUxGbEJRVms3U1VGRFdpeGhRVUZoTzBsQlEySXNZMEZCWXp0SlFVTmtMR05CUVdNN1NVRkRaQ3hoUVVGaE8wbEJRMklzWVVGQllUdEpRVU5pTEZsQlFWazdTVUZEV2l4WFFVRlhPMGxCUTFnc1UwRkJVenREUVVOYUxFVkJRMGNzWjBKQlFXZENMRWRCUVhGQ08wbEJRMnBETEZGQlFWRTdTVUZEVWl4VlFVRlZPMGxCUTFZc1YwRkJWenRKUVVOWUxGVkJRVlU3U1VGRFZpeFZRVUZWTzBsQlExWXNWMEZCVnp0SlFVTllMRmxCUVZrN1NVRkRXaXhUUVVGVE8wTkJRMW9zUTBGQlFUdEJRVWRNTERCQ1FVRXdRanRCUVVNeFFpeE5RVUZOTEU5QlFXZENMRTFCUVU4c1UwRkJVU3hoUVVGaE8wbEJRV3hFT3p0UlFVVkpPenM3TzFkQlNVYzdVVUZEWjBJc2RVSkJRV3RDTEVkQlFVY3NRMEZCUXl4UFFVRnZRaXhGUVVGUkxFVkJRVVU3V1VGRGJrVXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJRVHRaUVVNM1F5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eERRVUZCTzFGQlEyeEZMRU5CUVVNc1EwRkJRVHRSUVVWRU96czdPMWRCU1VjN1VVRkRaMElzZVVKQlFXOUNMRWRCUVVjc1EwRkJReXhQUVVGdlFpeEZRVUZSTEVWQlFVVTdXVUZEY2tVc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlFUdFpRVU5vUkN4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eHRRa0ZCYlVJc1JVRkJSU3huUWtGQlowSXNRMEZCUXl4RFFVRkJPMUZCUTNKRkxFTkJRVU1zUTBGQlFUdFJRVVZQTEcxQ1FVRmpMRWRCUVVjc1EwRkRja0lzWVVGQk5FSXNSVUZETlVJc1RVRkJUU3hIUVVGSExGVkJRVlVzUlVGRFppeEZRVUZGTzFsQlEwNHNTMEZCU3l4TlFVRk5MRk5CUVZNc1NVRkJTU3hOUVVGTkxFVkJRVVU3WjBKQlF6VkNMRTFCUVUwc1lVRkJZU3hIUVVGSExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRMnhFTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVUU3WjBKQlJUbENMRWxCUVVrc1VVRkJVU3hMUVVGTExGTkJRVk1zU1VGQlNTeFJRVUZSTEZsQlFWa3NVVUZCVVN4RlFVRkZPMjlDUVVONFJDeGhRVUZoTEVOQlExUXNZVUZCWVN4RlFVTmlMRkZCUVRoRExFTkJRMnBFTEVOQlFVRTdhVUpCUTBvN1lVRkRTanRSUVVOTUxFTkJRVU1zUTBGQlFUdEpRVVZNTEVOQlFVTTdRMEZCUVNKOSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBVdGlscyAtIHV0aWxpdGllcyBmb3IgRGVTdGFnbmF0ZVxuICovXG4vKipcbiAqIENoZWNrcyBpZiB2YWwxIGFuZCB2YWwyIGFyZSBlcXVhbFxuICogQHBhcmFtIHZhbDEgLSB2YWx1ZSB0byBjaGVjayBmb3IgZXF1YWxpdHlcbiAqIEBwYXJhbSB2YWwyIC0gdmFsdWUgdG8gY29tcGFyZSBhZ2FpbnN0IHZhbDFcbiAqIEBwYXJhbSBtYXhEZXB0aCAtIG1heCByZWN1cnNpb24gZGVwdGggdG8gY3Jhd2wgYW4gb2JqZWN0LiBBZnRlciBtYXggZGVwdGggaXNcbiAqIHJlYWNoZWQsIHRoZSB0d28gdmFsdWVzIGFyZSBzaW1wbHkgY29tcGFyZWQgd2l0aCBgPT09YFxuICogQHBhcmFtIG1heExlbmd0aCAtIG1heCBsZW5ndGggb2YgYXJyYXkgdG8gY3Jhd2wuIElmIG1heCBsZW50aCBpcyByZWFjaGVkLCB0d29cbiAqIGFycmF5cyB3aWxsIHNpbXBseSBiZSBjb21wYXJlZCB3aXRoIGA9PT1gXG4gKiBAcmV0dXJucyBgdmFsMSA9PT0gdmFsMmBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzRXF1YWwgPSAodmFsMSwgdmFsMiwgbWF4RGVwdGggPSAzLCBtYXhMZW5ndGggPSAxMCkgPT4ge1xuICAgIGlmIChtYXhEZXB0aCA9PT0gMCkgeyAvLyBJZiBtYXhEZXB0aCByZWFjaGVkLCBqdXN0IHJ1biA9PT1cbiAgICAgICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwxICE9PSB0eXBlb2YgdmFsMikgeyAvLyBJZiB0aGV5IGFyZW4ndCB0aGUgc2FtZSB0eXBlLCByZXR1cm4gZmFsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsMSBpbnN0YW5jZW9mIEFycmF5ICYmIHZhbDIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBpZiAodmFsMS5sZW5ndGggIT09IHZhbDIubGVuZ3RoKSB7IC8vIElmIGFycmF5cyBoYXZlIGRpZmZlcmVudCBsZW5ndGhzXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsMS5sZW5ndGggPiBtYXhMZW5ndGggfHwgdmFsMi5sZW5ndGggPiBtYXhMZW5ndGgpIHsgLy8gSWYgYXJyYXkgaXMgdG9vIGJpZ1xuICAgICAgICAgICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbDEubGVuZ3RoOyBpbmRleCsrKSB7IC8vIEdvIHRocm91Z2ggZWFjaCBpdGVtXG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsMVtpbmRleF0sIHZhbDJbaW5kZXhdLCBtYXhEZXB0aCAtIDEsIG1heExlbmd0aCkpIHsgLy8gVGVzdCBpZiB0d28gYXJyYXkgaXRlbXMgYXJlIGVxdWFsXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwxIGluc3RhbmNlb2YgT2JqZWN0ICYmIHZhbDIgaW5zdGFuY2VvZiBPYmplY3QpIHsgLy8gSWYgb2JqZWN0XG4gICAgICAgIGlmICghaXNFcXVhbChPYmplY3Qua2V5cyh2YWwxKSwgT2JqZWN0LmtleXModmFsMiksIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkgeyAvLyBJZiB0aGV5IGRvbid0IGhhdmUgaGUgc2FtZSBrZXlzXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModmFsMSkpIHsgLy8gR28gdGhyb3VnaCBhbmQgdGVzdCBlYWNoIHZhbHVlXG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsMVtrZXldLCB2YWwyW2tleV0sIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGlzRXF1YWwsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmNISnBkbUYwWlM5MWRHbHNjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN1IwRlJSenRCUVVWSU96czdPenM3T3pzN1IwRlRSenRCUVVOSUxFMUJRVTBzUTBGQlF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4RFFVTnVRaXhKUVVGaExFVkJRMklzU1VGQllTeEZRVU5pTEZGQlFWRXNSMEZCUnl4RFFVRkRMRVZCUTFvc1UwRkJVeXhIUVVGSExFVkJRVVVzUlVGRFVDeEZRVUZGTzBsQlExUXNTVUZCU1N4UlFVRlJMRXRCUVVzc1EwRkJReXhGUVVGRkxFVkJRVVVzYjBOQlFXOURPMUZCUTNSRUxFOUJRVThzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUVR0TFFVTjJRanRUUVVGTkxFbEJRVWtzVDBGQlR5eEpRVUZKTEV0QlFVc3NUMEZCVHl4SlFVRkpMRVZCUVVVc1JVRkJSU3cyUTBGQk5rTTdVVUZEYmtZc1QwRkJUeXhMUVVGTExFTkJRVUU3UzBGRFpqdEpRVVZFTEVsQlFVa3NTVUZCU1N4WlFVRlpMRXRCUVVzc1NVRkJTU3hKUVVGSkxGbEJRVmtzUzBGQlN5eEZRVUZGTzFGQlEyaEVMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUzBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc2JVTkJRVzFETzFsQlEyeEZMRTlCUVU4c1MwRkJTeXhEUVVGQk8xTkJRMlk3WVVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1UwRkJVeXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NVMEZCVXl4RlFVRkZMRVZCUVVVc2MwSkJRWE5DTzFsQlEyNUdMRTlCUVU4c1NVRkJTU3hMUVVGTExFbEJRVWtzUTBGQlFUdFRRVU4yUWp0UlFVVkVMRXRCUVVzc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEZRVUZGTEVWQlFVVXNkVUpCUVhWQ08xbEJRM1pGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hSUVVGUkxFZEJRVWNzUTBGQlF5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RlFVRkZMRVZCUVVVc2IwTkJRVzlETzJkQ1FVTnVSeXhQUVVGUExFdEJRVXNzUTBGQlFUdGhRVU5tTzFOQlEwbzdVVUZGUkN4UFFVRlBMRWxCUVVrc1EwRkJRVHRMUVVOa08xTkJRVTBzU1VGQlNTeEpRVUZKTEZsQlFWa3NUVUZCVFN4SlFVRkpMRWxCUVVrc1dVRkJXU3hOUVVGTkxFVkJRVVVzUlVGQlJTeFpRVUZaTzFGQlEzWkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRMUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkRha0lzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkRha0lzVVVGQlVTeEhRVUZITEVOQlFVTXNSVUZEV2l4VFFVRlRMRU5CUTFvc1JVRkJSU3hGUVVGRkxHdERRVUZyUXp0WlFVTnVReXhQUVVGUExFdEJRVXNzUTBGQlFUdFRRVU5tTzFGQlJVUXNTMEZCU3l4TlFVRk5MRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRVZCUVVVc2FVTkJRV2xETzFsQlIzQkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRMUFzU1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVTnFRaXhKUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlEyeENMRkZCUVZFc1IwRkJSeXhEUVVGRExFVkJRMW9zVTBGQlV5eERRVU5hTEVWQlFVVTdaMEpCUTBNc1QwRkJUeXhMUVVGTExFTkJRVUU3WVVGRFpqdFRRVU5LTzFGQlJVUXNUMEZCVHl4SlFVRkpMRU5CUVVFN1MwRkRaRHRKUVVWRUxFOUJRVThzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUVR0QlFVTjRRaXhEUVVGRExFTkJRVUU3UVVGRlJDeGxRVUZsTzBsQlExZ3NUMEZCVHp0RFFVTldMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZSBtYWluIGRlc3RhZ25hdGUgY2xhc3NcbiAqIEBmaWxlIERlU3RhZ25hdGUgY29tcG9uZW50IGNsYXNzXG4gKiBAcHJlc2VydmVcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxpbmVzICovXG5pbXBvcnQgeyBFdmVudHMgYXMgQmFzZSB9IGZyb20gXCIuL3ByaXZhdGUvX2V2ZW50c1wiO1xuaW1wb3J0IHVybCBmcm9tIFwiLi9wcml2YXRlL191cmxcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi9wcml2YXRlL3V0aWxzXCI7XG5jb25zdCB1bm1vdW50ZWRNc2cgPSBcIlJlZnVzaW5nIHRvIHVwZGF0ZSB1bm1vdW50ZWQgY29tcG9uZW50XCI7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEBjbGFzc2Rlc2MgQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY2xhc3NcbiAqIEBuYW1lc3BhY2VcbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGNsYXNzIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSBwYXJlbnQgLSBwYXJlbnQgb2YgdGhpcyBlbGVtZW50XG4gICAgICogQHBhcmFtIHByb3BzIC0gZWxlbWVudCBwcm9wZXJ0aWVzOyB3b3JrcyBsaWtlIFJlYWN0IFByb3BzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocGFyZW50LCBwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGF0ZSBvZiBjb21wb25lbnQuIFdvcmtzIHNpbWlsYXIgUmVhY3QgU3RhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3N0YXRlID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBpbml0aWFsIHN0YXRlIHdhcyBzZXQgaW4gaW5pdGlhbGl6ZXJcbiAgICAgICAgICogRG8gbm90IHRocm93IGVycm9yIHdpdGggZGlyZWN0IHN0YXRlIHNldHRpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgY29tcG9uZW50IGlzIG1vdW50ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2RpZE1vdW50ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZXMgYSBjb21wb25lbnQgdG8gdXBkYXRlXG4gICAgICAgICAqIEZvbGxvd3MgdGhlIHNhbWUgY29tcG9uZW50IHVwZGF0aW5nIHByb2NlZHVyZSBhcyBzZXRTdGF0ZSB3aXRob3V0IG1vZGlmeWluZyBzdGF0ZVxuICAgICAgICAgKiBAcmV0dXJucyByZXR1cm5zIGVycm9yIGlmIGVycm9yIGlzIHRocm93blxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZGlkTW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVubW91bnRlZE1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbCh0aGlzLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh0aGlzLl9leGVjUmVuZGVyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2tzIGlmIHRoZSBzdGF0ZSBjaGFuZ2VkIGZyb20gdGhlIHByZXZpb3VzIHN0YXRlLiBDYW4gbWUgYXR0YWNoZWQgdG9cbiAgICAgICAgICogYHNob3VsZENvbXBvbmVudFVwZGF0ZWBcbiAgICAgICAgICogQHBhcmFtIGtleXMgLSBsaXN0IG9mIGtleXMgdG8gY3Jhd2wuIElmIGxlZnQgdW5kZWZpbmVkIChkZWZhdWx0KSB0aGVuXG4gICAgICAgICAqIHVzZSBhbGwga2V5cy4gU2hvdWxkIGJlIGBrZXlvZiBTdGF0ZWAsIGJ1dCB0aGVyZSB3ZXJlIHNvbWUgVHlwZXNjcmlwdFxuICAgICAgICAgKiB0cm91Ymxlcy5cbiAgICAgICAgICogQHBhcmFtIG1heERlcHRoIC0gbWF4IHJlY3Vyc2lvbiBkZXB0aCB0byBjcmF3bCBhbiBvYmplY3QuIEFmdGVyIG1heCBkZXB0aFxuICAgICAgICAgKiBpcyByZWFjaGVkLCB0aGUgdHdvIHZhbHVlcyBhcmUgc2ltcGx5IGNvbXBhcmVkIHdpdGggYD09PWBcbiAgICAgICAgICogQHBhcmFtIG1heExlbmd0aCAtIG1heCBsZW5ndGggb2YgYXJyYXkgdG8gY3Jhd2wuIElmIG1heCBsZW50aCBpcyByZWFjaGVkLFxuICAgICAgICAgKiB0d28gYXJyYXlzIHdpbGwgc2ltcGx5IGJlIGNvbXBhcmVkIHdpdGggYD09PWBcbiAgICAgICAgICogQHJldHVybnMgYHZhbDEgPT09IHZhbDJgXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlRGlkQ2hhbmdlID0gKGtleXMsIG1heERlcHRoID0gMywgbWF4TGVuZ3RoID0gMTUpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChrZXlzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXV0aWxzLmlzRXF1YWwodGhpcy5fc3RhdGUsIHRoaXMuX3ByZXZTdGF0ZSwgbWF4RGVwdGgsIG1heExlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHt9LCBwcmV2U3RhdGUgPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gdGhpcy5fc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGVba2V5XSA9IChfYSA9IHRoaXMuX3ByZXZTdGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIXV0aWxzLmlzRXF1YWwoc3RhdGUsIHByZXZTdGF0ZSwgbWF4RGVwdGgsIG1heExlbmd0aCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHN0YXRlXG4gICAgICAgICAqIEBwYXJhbSBvYmogLSBzdGF0ZSB0byBzZXRcbiAgICAgICAgICogQHBhcmFtIHNob3VsZENvbXBvbmVudFVwZGF0ZSAtIGlmIGNvbXBvbmVudCBzaG91bGQgdXBkYXRlIGFmdGVyIHN0YXRlIHNldHRpbmdcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSA9IChvYmosIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IHRydWUpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZGlkTW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVubW91bnRlZE1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldlN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fc3RhdGUpO1xuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9zdGF0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW5kZXJlZENvbnRlbnQgPSBzaG91bGRDb21wb25lbnRVcGRhdGUgJiYgdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUoKVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2V4ZWNSZW5kZXIoKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGUocmVuZGVyZWRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZywgbWF4LWxlbiAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdGlhbCBtb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHBhcmFtIHBhcmVudCAtIHBhcmVudCBlbGVtZW50IHRvIG1vdW50IHdpdGg7IG9wdGlvbmFsXG4gICAgICAgICAqIEByZXR1cm5zIC0gcmVzdWx0IG9mIGFwcGVuZCBjaGlsZCB0byBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VudENvbXBvbmVudCA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbE1vdW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMy4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnModGhpcy5fcGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRNb3VudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5jb21wb25lbnREaWRNb3VudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuZm9yRWFjaCgoY2hpbGQpID0+IGZyYWdtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsIG1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcmV0dXJucyAtIHJlc3VsdCBvZiBhcHBlbmQgY2hpbGQgdG8gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91bnQgPSB0aGlzLm1vdW50Q29tcG9uZW50O1xuICAgICAgICAvKipcbiAgICAgICAgICogVW5tb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHJldHVybnMgLSB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVubW91bnRDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnModGhpcy5fcGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZE1vdW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVubW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEByZXR1cm5zIC0gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bm1vdW50ID0gdGhpcy51bm1vdW50Q29tcG9uZW50O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4sIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmcgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgY2hpbGRyZW4gZnJvbSB0aGlzLl9wYXJlbnRcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9wYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9wYXJlbnQubGFzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeGVjdXRlcyBuZXcgcmVuZGVyXG4gICAgICAgICAqIEByZXR1cm5zIHJlbmRlcmVkIGNvbnRlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2V4ZWNSZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbigpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGVzIHRoZSBjb21wb25lbnRcbiAgICAgICAgICogQHBhcmFtIHJlbmRlcmVkQ29udGVudCAtIHJlbmRlcmVkIGNvbnRlbnQgZnJvbSBleGVjdXRpbmcgdGhlIHJlbmRlciBmdW5jdGlvblxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl91cGRhdGUgPSAocmVuZGVyZWRDb250ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZENvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiByZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gdGhpcy5fcGFyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVuZGVyZWRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5fcGFyZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYXBwZW5kQ2hpbGQocmVuZGVyZWRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAoX2MgPSB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2hhbmRsZUVycm9yID0gKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaChlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihTdHJpbmcoZXJyKSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyZW50IGlzIG51bGwsIGV4cGVjdGVkIEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBnZXRTdGF0ZSBnZXR0ZXIgYXMgdGhpcy5zdGF0ZSBpdHNlbGYgaXMgcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMgY29tcG9uZW50IHN0YXRlXG4gICAgICovXG4gICAgZ2V0IGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGNvbXBvbmVudCBzdGF0ZVxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqIFdBUk46IGRvIG5vdCB1c2UgdGhpcyBtZXRob2QgdG8gbXV0YXRlIHRoZSBzdGF0ZSBkaXJlY3RseVxuICAgICAqIEBwYXJhbSBvYmogLSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBzZXQgc3RhdGUob2JqKSB7XG4gICAgICAgIGlmICh0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2gobmV3IEVycm9yKGBFUlJPUjogY29kZSAxLiBTZWUgJHt1cmx9LmApKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gb2JqO1xuICAgICAgICAgICAgdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgZ2V0UHJvcHMgZ2V0dGVyIGFzIHRoaXMucHJvcHMgaXRzZWxmIGlzIHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBwcm9wc1xuICAgICAqL1xuICAgIGdldCBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcGFyZW50IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBwYXJlbnQgZWxlbWVudFxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXQgcGFyZW50KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEByZXR1cm5zIHBhcmVudFxuICAgICAqL1xuICAgIGdldCBwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBkaWRNb3VudCB2YWx1ZSBwdWJsaWNseVxuICAgICAqIEByZXR1cm5zIGlmIG1vdW50ZWRcbiAgICAgKi9cbiAgICBnZXQgZGlkTW91bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaWRNb3VudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJldmlvdXMgc3RhdGUuIFVuZGVmaW5lZCBpZiBubyBwcmV2aW91cyBzdGF0ZSBleGlzdHNcbiAgICAgKiBAcmV0dXJucyBwcmV2aW91cyBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBwcmV2U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmV2U3RhdGU7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyTnZiWEJ2Ym1WdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3p0SFFWVkhPMEZCUTBnc09FSkJRVGhDTzBGQlJUbENMRTlCUVU4c1JVRkJReXhOUVVGTkxFbEJRVWtzU1VGQlNTeEZRVUZETEUxQlFVMHNiVUpCUVcxQ0xFTkJRVUU3UVVGRmFFUXNUMEZCVHl4SFFVRkhMRTFCUVUwc1owSkJRV2RDTEVOQlFVRTdRVUZEYUVNc1QwRkJUeXhMUVVGTExFMUJRVTBzYVVKQlFXbENMRU5CUVVFN1FVRkZia01zVFVGQlRTeFpRVUZaTEVkQlFVY3NkME5CUVhkRExFTkJRVUU3UVVGelFqZEVPenM3T3pzN1IwRk5SenRCUVVOSUxFMUJRVTBzVDBGQlowSXNVMEZIY0VJc1UwRkJVU3hKUVVGSk8wbEJORUpXT3pzN08wOUJTVWM3U1VGRFNDeFpRVUZ2UWl4TlFVRXlRaXhGUVVGWkxFdEJRV0U3VVVGRGNFVXNTMEZCU3l4RlFVRkZMRU5CUVVFN1VVRkVaMFFzVlVGQlN5eEhRVUZNTEV0QlFVc3NRMEZCVVR0UlFTOUNlRVU3TzFkQlJVYzdVVUZEU3l4WFFVRk5MRWRCUVZVc1JVRkJWeXhEUVVGQk8xRkJSVzVET3pzN1YwRkhSenRSUVVOTExIZENRVUZ0UWl4SFFVRkhMRXRCUVVzc1EwRkJRVHRSUVU5dVF6czdWMEZGUnp0UlFVTkxMR05CUVZNc1IwRkJSeXhMUVVGTExFTkJRVUU3VVVGblIzcENPenM3TzFkQlNVYzdVVUZEWVN4blFrRkJWeXhIUVVGSExFZEJRV2xDTEVWQlFVVTdPMWxCUXpkRExFbEJRVWs3WjBKQlEwRXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVU3YjBKQlEycENMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVRTdhVUpCUTJoRE8yZENRVVZFTEUxQlFVRXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpd3JRMEZCZGtJc1NVRkJTU3hGUVVGMVFqdG5Ra0ZGTTBJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eExRVUZMTEZOQlFWTXNSVUZCUlR0dlFrRkROVUlzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elFrRkJjMElzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUVR0cFFrRkRhRVE3WjBKQlJVUXNUVUZCUVN4SlFVRkpMRU5CUVVNc2RVSkJRWFZDTEN0RFFVRTFRaXhKUVVGSkxFVkJRMEVzYTBKQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJWU3h2UWtGRGNFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkRha0k3WjBKQlJVUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNRMEZCUVR0aFFVTnVRenRaUVVGRExFOUJRVThzUjBGQldTeEZRVUZGTERCQ1FVRXdRaXhEUVVGRE8yZENRVU01UXl4UFFVRlBMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdZVUZEYUVNN1VVRkRUQ3hEUVVGRExFTkJRVUU3VVVGRlJEczdPenM3T3pzN096czdWMEZYUnp0UlFVTmhMRzFDUVVGakxFZEJRVWNzUTBGRE4wSXNTVUZCYVVJc1JVRkRha0lzVVVGQlVTeEhRVUZITEVOQlFVTXNSVUZEV2l4VFFVRlRMRWRCUVVjc1JVRkJSU3hGUVVOUUxFVkJRVVU3TzFsQlExUXNTVUZCU1N4SlFVRkpMRXRCUVVzc1UwRkJVeXhGUVVGRk8yZENRVU53UWl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGRGFrSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkRXQ3hKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVU5tTEZGQlFWRXNSVUZEVWl4VFFVRlRMRU5CUTFvc1EwRkJRVHRoUVVOS08xbEJSVVFzVFVGQlRTeExRVUZMTEVkQlFUWkNMRVZCUVVVc1JVRkRkRU1zVTBGQlV5eEhRVUUyUWl4RlFVRkZMRU5CUVVFN1dVRkZOVU1zUzBGQlN5eE5RVUZOTEVkQlFVY3NTVUZCU1N4SlFVRkpMRVZCUVVVN1owSkJRM0JDTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFXdENMRU5CUVVNc1EwRkJRVHRuUWtGRE5VTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTERCRFFVRkhMRWRCUVd0Q0xFTkJRVU1zUTBGQlFUdGhRVU42UkR0WlFVVkVMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRVZCUVVVc1VVRkJVU3hGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZCTzFGQlEyaEZMRU5CUVVNc1EwRkJRVHRSUVVWRU96czdPenRYUVV0SE8xRkJRMkVzWVVGQlVTeEhRVUZITEVOQlEzWkNMRWRCUVcxQ0xFVkJRMjVDTEhGQ1FVRnhRaXhIUVVGSExFbEJRVWtzUlVGRGFFSXNSVUZCUlRzN1dVRkRaQ3hKUVVGSk8yZENRVU5CTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRk8yOUNRVU5xUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZCTzJsQ1FVTm9RenRuUWtGRlJDeE5RVUZCTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzSzBOQlFYaENMRWxCUVVrc1JVRkJkMEk3WjBKQlJUVkNMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUzBGQlN5eFRRVUZUTEVWQlFVVTdiMEpCUXpWQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVRTdhVUpCUTJoRU8yZENRVVZFTEVsQlFVa3NRMEZCUXl4VlFVRlZMSEZDUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUVR0blFrRkZiRU1zVFVGQlFTeEpRVUZKTEVOQlFVTXNkVUpCUVhWQ0xDdERRVUUxUWl4SlFVRkpMRVZCUTBFc2EwSkJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCVlN4dlFrRkRjRUlzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZEYWtJN1owSkJSVVFzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZCTzJkQ1FVVXZRaXhOUVVGTkxHVkJRV1VzUjBGRGFrSXNjVUpCUVhGQ0xFbEJRVWtzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhGUVVGRk8yOUNRVU5xUkN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdHZRa0ZEY0VJc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlFUdG5Ra0ZGYmtJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUVR0aFFVTm9RenRaUVVGRExFOUJRVThzUjBGQlJ5eEZRVUZGTERCQ1FVRXdRaXhEUVVGRE8yZENRVU55UXl4UFFVRlBMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdZVUZEYUVNN1VVRkRUQ3hEUVVGRExFTkJRVUU3VVVGRlJDeG5SVUZCWjBVN1VVRkRhRVU3T3pzN1YwRkpSenRSUVVOaExHMUNRVUZqTEVkQlFVY3NRMEZETjBJc1RVRkJiMElzUlVGRFVpeEZRVUZGT3p0WlFVTmtMRWxCUVVrN1owSkJRMEVzU1VGQlNTeE5RVUZOTEV0QlFVc3NVMEZCVXl4RlFVRkZPMjlDUVVOMFFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRVHRwUWtGRGRrSTdaMEpCUlVRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eExRVUZMTEZOQlFWTXNSVUZCUlR0dlFrRkROVUlzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elFrRkJjMElzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUVR0cFFrRkRhRVE3WjBKQlJVUXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZCTzJkQ1FVVXZRaXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc1NVRkJTU3hEUVVGQk8yZENRVVV2UWl4TlFVRkJMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNLME5CUVhaQ0xFbEJRVWtzUlVGQmRVSTdaMEpCUlROQ0xFbEJRVWtzVTBGQlV5eExRVUZMTEVsQlFVa3NSVUZCUlR0dlFrRkRjRUlzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elFrRkJjMElzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUVR0cFFrRkRhRVE3WjBKQlJVUXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRVHRuUWtGRmNrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVUU3WjBKQlEzSkNMRTFCUVVFc1NVRkJTU3hEUVVGRExHbENRVUZwUWl3clEwRkJkRUlzU1VGQlNTeEZRVUZ6UWp0blFrRkZNVUlzU1VGQlNTeFRRVUZUTEZsQlFWa3NTMEZCU3l4RlFVRkZPMjlDUVVNMVFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc2MwSkJRWE5DTEVWQlFVVXNRMEZCUXp0dlFrRkZiRVFzVTBGQmRVSXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhMUVVGTExFVkJRVVVzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlFUdHZRa0ZGZUVVc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRVHRwUWtGRE5VTTdaMEpCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRVHRoUVVNM1F6dFpRVUZETEU5QlFVOHNSMEZCV1N4RlFVRkZMREJDUVVFd1FpeERRVUZETzJkQ1FVTTVReXhQUVVGUExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1lVRkRhRU03VVVGRFRDeERRVUZETEVOQlFVRTdVVUZGUkRzN08xZEJSMGM3VVVGRFlTeFZRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJRVHRSUVVVelF6czdPMWRCUjBjN1VVRkRZU3h4UWtGQlowSXNSMEZCUnl4SFFVRlRMRVZCUVVVN08xbEJRekZETEVsQlFVazdaMEpCUTBFc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eExRVUZMTEZOQlFWTXNSVUZCUlR0dlFrRkROVUlzVDBGQlRUdHBRa0ZEVkR0blFrRkZSQ3hOUVVGQkxFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc0swTkJRWHBDTEVsQlFVa3NSVUZCZVVJN1owSkJSVGRDTEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVFN1owSkJSWFpETEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJRVHRuUWtGRGRFSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVUU3WVVGRGVrSTdXVUZCUXl4UFFVRlBMRWRCUVZrc1JVRkJSU3d3UWtGQk1FSXNRMEZCUXp0blFrRkRPVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRVHRoUVVONlFqdFJRVVZNTEVOQlFVTXNRMEZCUVR0UlFVVkVPenM3VjBGSFJ6dFJRVU5oTEZsQlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVRTdVVUZETDBNc0swUkJRU3RFTzFGQlJTOUVPenM3VjBGSFJ6dFJRVU5MTEc5Q1FVRmxMRWRCUVVjc1IwRkJVeXhGUVVGRk8xbEJRMnBETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1MwRkJTeXhUUVVGVExFVkJRVVU3WjBKQlF6VkNMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3WVVGRGFFUTdXVUZGUkN4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTzJkQ1FVTTFRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RlFVRkZPMjlDUVVONFFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkJPMmxDUVVOdVJEdGhRVU5LTzFGQlEwd3NRMEZCUXl4RFFVRkJPMUZCUlVRN096dFhRVWRITzFGQlEwc3NaMEpCUVZjc1IwRkJSeXhIUVVGbExFVkJRVVU3V1VGRGJrTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGQk8xbEJSWFJDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGQk8xRkJRM2hDTEVOQlFVTXNRMEZCUVR0UlFVZEVPenM3TzFkQlNVYzdVVUZEU3l4WlFVRlBMRWRCUVVjc1EwRkJReXhsUVVFMFFpeEZRVUZSTEVWQlFVVTdPMWxCUTNKRUxFbEJRVWtzWlVGQlpTeFpRVUZaTEV0QlFVc3NSVUZCUlR0blFrRkRiRU1zUzBGQlN5eE5RVUZOTEU5QlFVOHNTVUZCU1N4bFFVRmxMRVZCUVVVN2IwSkJRMjVETEUxQlFVRXNTVUZCU1N4RFFVRkRMRTlCUVU4c01FTkJRVVVzVjBGQlZ5eERRVUZETEU5QlFVOHNSVUZCUXp0cFFrRkRja003WVVGRFNqdHBRa0ZCVFN4SlFVRkpMR1ZCUVdVc1JVRkJSVHRuUWtGRGVFSXNUVUZCUVN4SlFVRkpMRU5CUVVNc1QwRkJUeXd3UTBGQlJTeFhRVUZYTEVOQlFVTXNaVUZCWlN4RlFVRkRPMkZCUXpkRE8xbEJSVVFzU1VGQlNTeGxRVUZsTEVWQlFVVTdaMEpCUTJwQ0xFMUJRVUVzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXdyUTBGQmRrSXNTVUZCU1N4RlFVRjFRanRoUVVNNVFqdFJRVU5NTEVOQlFVTXNRMEZCUVR0UlFVVlBMR2xDUVVGWkxFZEJRVWNzUTBGQlF5eEhRVUZaTEVWQlFWTXNSVUZCUlR0WlFVTXpReXhKUVVGSkxFZEJRVWNzV1VGQldTeExRVUZMTEVWQlFVVTdaMEpCUTNSQ0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlFUdG5Ra0ZGTTBJc1QwRkJUeXhIUVVGWkxFTkJRVUU3WVVGRGRFSTdXVUZGUkN4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRVHRaUVVWd1F5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVRTdXVUZGTjBJc1QwRkJUeXhMUVVGTExFTkJRVUU3VVVGRGFFSXNRMEZCUXl4RFFVRkJPMUZCZGxWSExFbEJRVWtzVFVGQlRTeExRVUZMTEVsQlFVa3NSVUZCUlR0WlFVTnFRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEcxRVFVRnRSQ3hEUVVGRExFTkJRVUU3VTBGRGRrVTdVVUZGUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlFUdEpRVU42UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwZ3NTVUZCVnl4UlFVRlJPMUZCUTJZc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZCTzBsQlEzSkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU0N4SlFVRmpMRXRCUVVzN1VVRkRaaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVRTdTVUZEZEVJc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTQ3hKUVVGakxFdEJRVXNzUTBGQlJTeEhRVUZWTzFGQlF6TkNMRWxCUVVrc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RlFVRkZPMWxCUXpGQ0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkRiRUlzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlF6RkRMRU5CUVVFN1dVRkRSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJPMU5CUTNKQ08yRkJRVTA3V1VGRFNDeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJRVHRaUVVOcVFpeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFZEJRVWNzU1VGQlNTeERRVUZCTzFOQlEyeERPMGxCUTB3c1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTklMRWxCUVZjc1VVRkJVVHRSUVVObUxFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUVR0SlFVTnlRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSUxFbEJRVmNzVFVGQlRTeERRVUZGTEU5QlFXZERPMUZCUXk5RExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkJPMGxCUXpGQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTQ3hKUVVGWExFMUJRVTA3VVVGRFlpeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVFN1NVRkRka0lzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSUxFbEJRVmNzVVVGQlVUdFJRVU5tTEU5QlFVOHNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJRVHRKUVVONlFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGdzU1VGQlZ5eFRRVUZUTzFGQlEyaENMRTlCUVU4c1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlFUdEpRVU14UWl4RFFVRkRPME5CTUZCS08wRkJSVVFzWlVGQlpTeFRRVUZUTEVOQlFVRWlmUT09IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb24gZm9yIERPTSBtYW5pcHVsYXRpb25cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9qc3gudHNcIiAvPlxuaW1wb3J0IHsgYmluZENoaWxkcmVuIH0gZnJvbSBcIi4vcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzXCI7XG5leHBvcnQgY29uc3QgRnJhZ21lbnQgPSAoXywgLi4uY2hpbGRyZW4pID0+IHtcbiAgICBjb25zdCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGJpbmRDaGlsZHJlbihkb2N1bWVudEZyYWdtZW50LCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIGRvY3VtZW50RnJhZ21lbnQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgRnJhZ21lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labkpoWjIxbGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12Wm5KaFoyMWxiblF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN08wZEJVVWM3UVVGRFNDd3lRa0ZCTWtJN1FVRkRNMElzYVVOQlFXbERPMEZCUldwRExFOUJRVThzUlVGRlNDeFpRVUZaTEVWQlEyWXNUVUZCVFN3clFrRkJLMElzUTBGQlFUdEJRVVYwUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hSUVVGUkxFZEJRVWNzUTBGRGNFSXNRMEZCVlN4RlFVTldMRWRCUVVjc1VVRkJNa0lzUlVGRFpDeEZRVUZGTzBsQlEyeENMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NVVUZCVVN4RFFVRkRMSE5DUVVGelFpeEZRVUZGTEVOQlFVRTdTVUZGTVVRc1dVRkJXU3hEUVVGRExHZENRVUZuUWl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGQk8wbEJSWGhETEU5QlFVOHNaMEpCUVdkQ0xFTkJRVUU3UVVGRE0wSXNRMEZCUXl4RFFVRkJPMEZCUlVRc1pVRkJaU3hSUVVGUkxFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBEZVN0YWduYXRlIG1haW4gZGVzdGFnbmF0ZSBjbGFzc1xuICogQGZpbGUgbWFpbiBmaWxlIGZvciBkZXN0YWduYXRlXG4gKiBAcHJlc2VydmVcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9qc3gudHNcIiAvPlxuaW1wb3J0ICogYXMgX0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIF9DcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCAqIGFzIF9DcmVhdGVFbGVtZW50TlMgZnJvbSBcIi4vY3JlYXRlRWxlbWVudE5TXCI7XG5pbXBvcnQgKiBhcyBfQ3JlYXRlUmVmIGZyb20gXCIuL2NyZWF0ZVJlZlwiO1xuaW1wb3J0ICogYXMgX0ZyYWdtZW50IGZyb20gXCIuL2ZyYWdtZW50XCI7XG5leHBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcbmV4cG9ydCB7IGNyZWF0ZVJlZiB9IGZyb20gXCIuL2NyZWF0ZVJlZlwiO1xuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnROUyB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnROU1wiO1xuZXhwb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwiLi9mcmFnbWVudFwiO1xuLyogZXNsaW50LWRpc2FibGUgKi9cbmV4cG9ydCB2YXIgRGVTdGFnbmF0ZTtcbihmdW5jdGlvbiAoRGVTdGFnbmF0ZSkge1xuICAgIERlU3RhZ25hdGUuQ29tcG9uZW50ID0gX0NvbXBvbmVudC5Db21wb25lbnQ7XG4gICAgRGVTdGFnbmF0ZS5jcmVhdGVSZWYgPSBfQ3JlYXRlUmVmLmNyZWF0ZVJlZjtcbiAgICBEZVN0YWduYXRlLmNyZWF0ZUVsZW1lbnQgPSBfQ3JlYXRlRWxlbWVudC5jcmVhdGVFbGVtZW50O1xuICAgIERlU3RhZ25hdGUuY3JlYXRlRWxlbWVudE5TID0gX0NyZWF0ZUVsZW1lbnROUy5jcmVhdGVFbGVtZW50TlM7XG4gICAgRGVTdGFnbmF0ZS5GcmFnbWVudCA9IF9GcmFnbWVudC5GcmFnbWVudDtcbn0pKERlU3RhZ25hdGUgfHwgKERlU3RhZ25hdGUgPSB7fSkpO1xuLyogZXNsaW50LWVuYWJsZSAqL1xuZXhwb3J0IGRlZmF1bHQgRGVTdGFnbmF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN096czdSMEZWUnp0QlFVTklMREpDUVVFeVFqdEJRVU16UWl4cFEwRkJhVU03UVVGRmFrTXNUMEZCVHl4TFFVRkxMRlZCUVZVc1RVRkJUU3hoUVVGaExFTkJRVUU3UVVGRGVrTXNUMEZCVHl4TFFVRkxMR05CUVdNc1RVRkJUU3hwUWtGQmFVSXNRMEZCUVR0QlFVTnFSQ3hQUVVGUExFdEJRVXNzWjBKQlFXZENMRTFCUVUwc2JVSkJRVzFDTEVOQlFVRTdRVUZEY2tRc1QwRkJUeXhMUVVGTExGVkJRVlVzVFVGQlRTeGhRVUZoTEVOQlFVRTdRVUZEZWtNc1QwRkJUeXhMUVVGTExGTkJRVk1zVFVGQlRTeFpRVUZaTEVOQlFVRTdRVUZGZGtNc1QwRkJUeXhGUVVGRExGTkJRVk1zUlVGQlF5eE5RVUZOTEdGQlFXRXNRMEZCUVR0QlFVTnlReXhQUVVGUExFVkJRVTBzVTBGQlV5eEZRVUZETEUxQlFVMHNZVUZCWVN4RFFVRkJPMEZCUXpGRExFOUJRVThzUlVGQlF5eGhRVUZoTEVWQlFVTXNUVUZCVFN4cFFrRkJhVUlzUTBGQlFUdEJRVU0zUXl4UFFVRlBMRVZCUVVNc1pVRkJaU3hGUVVGRExFMUJRVTBzYlVKQlFXMUNMRU5CUVVFN1FVRkRha1FzVDBGQlR5eEZRVUZETEZGQlFWRXNSVUZCUXl4TlFVRk5MRmxCUVZrc1EwRkJRVHRCUVVWdVF5eHZRa0ZCYjBJN1FVRkRjRUlzVFVGQlRTeExRVUZYTEZWQlFWVXNRMEZQTVVJN1FVRlFSQ3hYUVVGcFFpeFZRVUZWTzBsQlExUXNiMEpCUVZNc1IwRkJTU3hWUVVGVkxGVkJRV1FzUTBGQll6dEpRVU4yUWl4dlFrRkJVeXhIUVVGSkxGVkJRVlVzVlVGQlpDeERRVUZqTzBsQlJYWkNMSGRDUVVGaExFZEJRVWtzWTBGQll5eGpRVUZzUWl4RFFVRnJRanRKUVVNdlFpd3dRa0ZCWlN4SFFVRkpMR2RDUVVGblFpeG5Ra0ZCY0VJc1EwRkJiMEk3U1VGRGJrTXNiVUpCUVZFc1IwRkJTU3hUUVVGVExGTkJRV0lzUTBGQllUdEJRVU4yUXl4RFFVRkRMRVZCVUdkQ0xGVkJRVlVzUzBGQlZpeFZRVUZWTEZGQlR6RkNPMEZCUTBRc2JVSkJRVzFDTzBGQlJXNUNMR1ZCUVdVc1ZVRkJWU3hEUVVGQkluMD0iXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnQiLCJfY3JlYXRlRWxlbWVudE5TIiwiX2NyZWF0ZVJlZiIsIkJhc2VDb21wb25lbnQiLCJCYXNlIiwiX0NvbXBvbmVudC5Db21wb25lbnQiLCJfQ3JlYXRlUmVmLmNyZWF0ZVJlZiIsIl9DcmVhdGVFbGVtZW50LmNyZWF0ZUVsZW1lbnQiLCJfQ3JlYXRlRWxlbWVudE5TLmNyZWF0ZUVsZW1lbnROUyIsIl9GcmFnbWVudC5GcmFnbWVudCJd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
