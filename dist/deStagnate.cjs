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
        throw new Error(`ERROR: code 8. See ${url}`);
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
        const htmlEventName = eventName.slice(2, 0).toLowerCase(),
              callback = this[eventName];

        if (callback !== undefined && callback instanceof Function) {
          eventListener(htmlEventName, callback);
        }
      }
    };
  }

}

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
          throw new Error(`ERROR: code 3. See ${url}.`);
        }

        this.getSnapshotBeforeUpdate(Object.assign({}, this.props), Object.assign({}, this.state));

        this._update(this._execRender());
      } catch (err) {
        return this._handleError(err);
      }
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
          throw new Error(`ERROR: code 3. See ${url}.`);
        }

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
        if (this._parent === undefined) {
          throw new Error(`ERROR: code 3. See ${url}.`);
        }

        this.parent = parent;
        const component = this.render();
        this._didSetInitialState = true;
        (_a = this.componentWillMount) === null || _a === void 0 ? void 0 : _a.call(this);

        if (component === null) {
          throw new Error(`ERROR: code 5. See ${url}.`);
        }

        this.bindEventListeners(this._parent);
        this._didMount = true;
        (_b = this.componentDidMount) === null || _b === void 0 ? void 0 : _b.call(this);

        if (component instanceof Array) {
          const fragment = document.createDocumentFragment();
          component.forEach(fragment.appendChild);
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
        throw new Error(`ERROR: code 3. See ${url}.`);
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
      this.componentDidCatch(new Error(`ERROR: code 2. See ${url}.`));
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
    if (element && element.childElementCount > 0) {
      this.componentDidCatch(new Error(`ERROR: code 1. See ${url}. Params: ${element.tagName.toLowerCase()}`));
    }

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

}

const fragment = (_, ...children) => {
  const fragment = document.createDocumentFragment();
  bindChildren(fragment, children);
  return fragment;
};

exports.Component = Component;
exports.createElement = createElement;
exports.createElementNS = createElementNS;
exports.createRef = createRef;
exports.fragment = fragment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVTdGFnbmF0ZS5janMiLCJzb3VyY2VzIjpbIi4uL2xpYi9wcml2YXRlL191cmwuanMiLCIuLi9saWIvcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzLmpzIiwiLi4vbGliL2NyZWF0ZUVsZW1lbnQuanMiLCIuLi9saWIvY3JlYXRlRWxlbWVudE5TLmpzIiwiLi4vbGliL2NyZWF0ZVJlZi5qcyIsIi4uL2xpYi9wcml2YXRlL19iYXNlLmpzIiwiLi4vbGliL3ByaXZhdGUvX2V2ZW50cy5qcyIsIi4uL2xpYi9jb21wb25lbnQuanMiLCIuLi9saWIvZnJhZ21lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9sdWtlLXpoYW5nLTA0LmdpdGh1Yi5pby9EZVN0YWduYXRlL2Vycm9yLWNvZGVzXCI7XG5leHBvcnQgZGVmYXVsdCB1cmw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lYM1Z5YkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3Y21sMllYUmxMMTkxY213dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMSGRFUVVGM1JDeERRVUZCTzBGQlJUTkZMR1ZCUVdVc1IwRkJSeXhEUVVGQkluMD0iLCIvKipcbiAqIENvbXBvbmVudFxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBmaWxlIHNoYXJlIGZ1bmN0aW9ucyBhbmQgdHlwZXMgZm9yIGNyZWF0ZUVsZW1lbnQgYW5kIGl0J3MgdmFyaWFudHNcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudFwiO1xuaW1wb3J0IHVybCBmcm9tIFwiLi9fdXJsXCI7XG4vKipcbiAqIEJpbmRzIGNoaWxkcmVuIHRvIGVsZW1lbnRcbiAqIEBwYWNrYWdlXG4gKiBAcGFyYW0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZFxuICogQHBhcmFtIHByb3BzIC0gcHJvcHMgdG8gYmluZCB3aXRoXG4gKiBAcGFyYW0gbnMgLSBpZiBuYW1lc3BhY2UgZWxlbWVudFxuICogQHJldHVybnMgdm9pZFxuICovXG5leHBvcnQgY29uc3QgYmluZFByb3BzID0gKGVsZW1lbnQsIHByb3BzLCBucyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHZhbCkgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mICh2YWwpID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJpbm5lckhUTUxcIikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHZhbC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChucykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZU5TKG51bGwsIGtleSwgdmFsLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWwudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5LnNsaWNlKDAsIDIpID09PSBcIm9uXCIpIHsgLy8gV29ya3Mgc3VjaCBhcyBvbkNsaWNrLCBvbkFuaW1hdGlvbkVuZCwgZXRjLlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHZhbCkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoa2V5LnNsaWNlKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKSwgdmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09IFwicmVmXCIgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgKHZhbCkgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgICBcImN1cnJlbnRcIiBpbiB2YWwpIHtcbiAgICAgICAgICAgICAgICB2YWwuY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgV0FSTjogQ29kZSA3LiBTZWUgJHt1cmx9LiBQYXJhbXM6ICR7dHlwZW9mICh2YWwpfSwgJHtrZXl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gKiBCaW5kcyBjaGlsZHJlbiB0byBlbGVtZW50XG4gKiBAcGFja2FnZVxuICogQHBhcmFtIGVsZW1lbnQgLSBlbGVtZW50IHRvIGJpbmRcbiAqIEBwYXJhbSBjaGlsZHJlbiAtIGNoaWxkcmVuIHRvIGJpbmQgd2l0aFxuICogQHJldHVybnMgdm9pZFxuICovXG5leHBvcnQgY29uc3QgYmluZENoaWxkcmVuID0gKGVsZW1lbnQsIGNoaWxkcmVuKSA9PiB7XG4gICAgaWYgKGNoaWxkcmVuICE9PSBudWxsICYmIGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBiaW5kQ2hpbGRyZW4oZWxlbWVudCwgY2hpbGQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZHJlbi50b1N0cmluZygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4gaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGlmICghY2hpbGRyZW4uZGlkTW91bnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLm1vdW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDguIFNlZSAke3VybH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi5wYXJlbnQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wYXJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hpbGRyZW4uZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgyTnlaV0YwWlVWc1pXMWxiblJWZEdsc2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d2NtbDJZWFJsTDE5amNtVmhkR1ZGYkdWdFpXNTBWWFJwYkhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPMGRCVVVjN1FVRkZTQ3hQUVVGUExFVkJRVU1zVTBGQlV5eEZRVUZETEUxQlFVMHNZMEZCWXl4RFFVRkJPMEZCUlhSRExFOUJRVThzUjBGQlJ5eE5RVUZOTEZGQlFWRXNRMEZCUVR0QlFYbEZlRUk3T3pzN096czdSMEZQUnp0QlFVTklMRTFCUVUwc1EwRkJReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eERRVU55UWl4UFFVRm5RaXhGUVVOb1FpeExRVUY1UWl4RlFVTjZRaXhGUVVGRkxFZEJRVWNzUzBGQlN5eEZRVU5PTEVWQlFVVTdTVUZEVGl4SlFVRkpMRXRCUVVzc1JVRkJSVHRSUVVOUUxFdEJRVXNzVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUXpWRExFbEJRVWtzVDBGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRkZCUVZFc1NVRkJTU3hQUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NVVUZCVVN4RlFVRkZPMmRDUVVOMFJDeEpRVUZKTEVkQlFVY3NTMEZCU3l4WFFVRlhMRVZCUVVVN2IwSkJRM0pDTEU5QlFVOHNRMEZCUXl4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZCTzJsQ1FVTnlRenR4UWtGQlRTeEpRVUZKTEVWQlFVVXNSVUZCUlR0dlFrRkRXQ3hQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVRTdhVUpCUTNCRU8zRkNRVUZOTzI5Q1FVTklMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGQk8ybENRVU0xUXp0aFFVTktPMmxDUVVGTkxFbEJRVWtzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeEZRVUZGTEVWQlFVVXNPRU5CUVRoRE8yZENRVU5xUml4SlFVRkpMRTlCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eFZRVUZWTEVWQlFVVTdiMEpCUXpWQ0xFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJc1EwRkRjRUlzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN2VVSkJRMUFzVjBGQlZ5eEZRVUZ2UWl4RlFVTndReXhIUVVGblFpeERRVU51UWl4RFFVRkJPMmxDUVVOS08yRkJRMG83YVVKQlFVMHNTVUZEU0N4SFFVRkhMRXRCUVVzc1MwRkJTenRuUWtGRFlpeFBRVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1VVRkJVVHRuUWtGRGVFSXNVMEZCVXl4SlFVRkpMRWRCUVVjc1JVRkRiRUk3WjBKQlEwY3NSMEZCYjBJc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZCTzJGQlF6RkRPMmxDUVVGTkxFbEJRVWtzUjBGQlJ5eExRVUZMTEZOQlFWTXNSVUZCUlR0blFrRkRNVUlzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUjBGQlJ5eGhRVUZoTEU5QlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZCTzJGQlF6TkZPMU5CUTBvN1MwRkRTanRCUVVOTUxFTkJRVU1zUTBGQlFUdEJRVVZFT3pzN096czdSMEZOUnp0QlFVTklMRTFCUVUwc1EwRkJReXhOUVVGTkxGbEJRVmtzUjBGQlJ5eERRVU40UWl4UFFVRmhMRVZCUTJJc1VVRkJkVUlzUlVGRGJrSXNSVUZCUlR0SlFVTk9MRWxCUVVrc1VVRkJVU3hMUVVGTExFbEJRVWtzU1VGQlNTeFJRVUZSTEV0QlFVc3NVMEZCVXl4RlFVRkZPMUZCUXpkRExFbEJRVWtzVVVGQlVTeFpRVUZaTEV0QlFVc3NSVUZCUlR0WlFVTXpRaXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNTMEZCYlVJc1JVRkJSU3hGUVVGRkxFTkJRVU1zV1VGQldTeERRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGQk8xTkJRekZGTzJGQlFVMHNTVUZEU0N4UFFVRlBMRkZCUVZFc1MwRkJTeXhSUVVGUk8xbEJRelZDTEU5QlFVOHNVVUZCVVN4TFFVRkxMRkZCUVZFc1JVRkRPVUk3V1VGRFJTeFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRVHRUUVVOd1JUdGhRVUZOTEVsQlFVa3NVVUZCVVN4WlFVRlpMRk5CUVZNc1JVRkJSVHRaUVVOMFF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1NVRkJTU3hQUVVGUExGbEJRVmtzVFVGQlRTeERRVUZETEZkQlFWY3NSVUZCUlR0blFrRkROMFFzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRVHRuUWtGRmRrSXNUMEZCVFR0aFFVTlVPMmxDUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETEU5QlFVOHNXVUZCV1N4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVU3WjBKQlEycEVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVUU3WVVGREwwTTdXVUZGUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhOUVVGTkxFdEJRVXNzVDBGQlR5eEZRVUZGTzJkQ1FVTTNRaXhSUVVGUkxFTkJRVU1zVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUVR0aFFVTTFRanRaUVVWRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUVR0VFFVTjZRanRoUVVGTk8xbEJRMGdzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRVHRUUVVOb1F6dExRVU5LTzBGQlEwd3NRMEZCUXl4RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBmb3IgRE9NIG1hbmlwdWxhdGlvblxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2pzeC50c1wiIC8+XG5pbXBvcnQgeyBiaW5kQ2hpbGRyZW4sIGJpbmRQcm9wcywgfSBmcm9tIFwiLi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHNcIjtcbi8qKlxuICpcbiAqIEBwYXJhbSB0YWdOYW1lT3JDb21wb25lbnQgLSBuYW1lIG9mIEhUTUwgZWxlbWVudCBvciBmdW5jdGlvbiBjb21wb25lbnRcbiAqIEBwYXJhbSBwcm9wcyAtIHByb3BzIG9mIGVsZW1lbnQgb3IgY29tcG9uZW50XG4gKiAxLiBJZiBgdGFnTmFtZU9yQ29tcG9uZW50YCBpcyB0YWduYW1lLCBwcm9wcyBhcmUgZWxlbWVudCBwcm9wZXJ0aWVzLCBzdWNoIGFzIGNsYXNzLCBpbm5lckhUTUwsIGlkLCBzdHlsZSwgZXRjXG4gKiAyLiBJZiBgdGFnTmFtZU9yQ29tcG9uZW50YCBpcyBhIGZ1bmN0aW9uLCBwcm9wcyBhcmUgdGhhdCBmdW5jdGlvbnMgcGFyYW1ldGVyc1xuICogQHBhcmFtIGNoaWxkcmVuIC0gY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50LiBDYW4gYmUgbm90aGluZywgbnVtYmVyIChjb252ZXJ0ZWQgdG8gc3RyaW5nKSwgc3RyaW5nICh0ZXh0KSwgb3IgYW5vdGhlciBlbGVtZW50LiBBbiBhcnJheSBvZiBhbnkgb2YgdGhlc2Ugd2lsbCBjcmVhdGUgbXVsdGlwbGUgY2hpbGRyZW5cbiAqIEBwYXJhbSBjaGlsZHJlbkFyZ3MgLSByZXN0IHBhcmFtZXRlciBmb3IgY2hpbGRyZW5cbiAqIEByZXR1cm5zIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZU9yQ29tcG9uZW50LCBwcm9wcywgLi4uY2hpbGRyZW4pIHtcbiAgICBpZiAodHlwZW9mICh0YWdOYW1lT3JDb21wb25lbnQpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWVPckNvbXBvbmVudCk7XG4gICAgICAgIGJpbmRQcm9wcyhlbGVtZW50LCBwcm9wcyk7XG4gICAgICAgIGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbik7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgKHRhZ05hbWVPckNvbXBvbmVudCkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gdGFnTmFtZU9yQ29tcG9uZW50KHByb3BzLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBFcnJvcihcInRhZ05hbWVPckNvbXBvbmVudCBpcyBvZiBpbnZhbGlkIHR5cGUuXCIpO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzSmxZWFJsUld4bGJXVnVkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5amNtVmhkR1ZGYkdWdFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96czdPenM3T3p0SFFWRkhPMEZCUTBnc01rSkJRVEpDTzBGQlF6TkNMR2xEUVVGcFF6dEJRVVZxUXl4UFFVRlBMRVZCUjBnc1dVRkJXU3hGUVVOYUxGTkJRVk1zUjBGRFdpeE5RVUZOTEN0Q1FVRXJRaXhEUVVGQk8wRkJiVU4wUXpzN096czdPenM3TzBkQlUwYzdRVUZEU0N4TlFVRk5MRlZCUVZVc1lVRkJZU3hEUVVsNlFpeHJRa0ZIV1N4RlFVTmFMRXRCUVRaQ0xFVkJRemRDTEVkQlFVY3NVVUZCTWtJN1NVRkZPVUlzU1VGQlNTeFBRVUZOTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUzBGQlN5eFJRVUZSTEVWQlFVVTdVVUZEZWtNc1RVRkJUU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZCTzFGQlJURkVMRk5CUVZNc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQk1FSXNRMEZCUXl4RFFVRkJPMUZCUlRsRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVFN1VVRkZMMElzVDBGQlR5eFBRVUZQTEVOQlFVRTdTMEZEYWtJN1UwRkJUU3hKUVVGSkxFOUJRVTBzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhMUVVGTExGVkJRVlVzUlVGQlJUdFJRVU5zUkN4UFFVRlBMR3RDUVVGclFpeERRVUZETEV0QlFWVXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRVHRMUVVOc1JEdEpRVVZFTEU5QlFVOHNTMEZCU3l4RFFVRkRMSGREUVVGM1F5eERRVUZETEVOQlFVRTdRVUZETVVRc1EwRkJRenRCUVVWRUxHVkJRV1VzWVVGQllTeERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnROUyBjcmVhdGVFbGVtZW50IGZvciBuYW1lc3BhY2VkIGVsZW1lbnRzXG4gKi9cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiwgYmluZFByb3BzLCB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuLyoqXG4gKiBDcmVhdGVzIGEgY2hpbGQgZWxlbWVudCB0byBkZVN0YWduYXRlXG4gKiBAcGFyYW0gbmFtZXNwYWNlVVJJIC0gbmFtZXNwYWNlIHVyaVxuICogQHBhcmFtIHRhZ05hbWUgLSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuICogQHBhcmFtIHByb3BzIC0gZWxlbWVudCBwcm9wZXJ0aWVzLCBzdWNoIGFzIGNsYXNzLCBpbm5lckhUTUwsIGlkLCBzdHlsZSwgZXRjXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQuIENhbiBiZSBub3RoaW5nLCBudW1iZXIgKGNvbnZlcnRlZCB0byBzdHJpbmcpLCBzdHJpbmcgKHRleHQpLCBvciBhbm90aGVyIGVsZW1lbnQuIEFuIGFycmF5IG9mIGFueSBvZiB0aGVzZSB3aWxsIGNyZWF0ZSBtdWx0aXBsZSBjaGlsZHJlblxuICogQHBhcmFtIGNoaWxkcmVuUmVzdCAtIHJlc3QgcGFyYW1ldGVyIG9mIGNoaWxkcmVuXG4gKiBAcmV0dXJucyBodG1sIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnROUyA9IChuYW1lc3BhY2VVUkksIHRhZ05hbWUsIHByb3BzLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCB0YWdOYW1lKTtcbiAgICBiaW5kUHJvcHMoZWxlbWVudCwgcHJvcHMsIHRydWUpO1xuICAgIGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudE5TO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxSV3hsYldWdWRFNVRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOeVpXRjBaVVZzWlcxbGJuUk9VeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN1IwRlJSenRCUVVWSUxFOUJRVThzUlVGRlNDeFpRVUZaTEVWQlExb3NVMEZCVXl4SFFVTmFMRTFCUVUwc0swSkJRU3RDTEVOQlFVRTdRVUZGZEVNN096czdPenM3TzBkQlVVYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hsUVVGbExFZEJRVWNzUTBGRE0wSXNXVUZCSzBjc1JVRkRMMGNzVDBGQk1FTXNSVUZETVVNc1MwRkJkME1zUlVGRGVFTXNSMEZCUnl4UlFVRXlRaXhGUVVOMlFpeEZRVUZGTzBsQlExUXNUVUZCVFN4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eFpRVUZaTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVFN1NVRkZMMFFzVTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVUU3U1VGRkwwSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlFUdEpRVVV2UWl4UFFVRlBMRTlCUVU4c1EwRkJRVHRCUVVOc1FpeERRVUZETEVOQlFVRTdRVUZGUkN4bFFVRmxMR1ZCUVdVc1EwRkJRU0o5IiwiLyoqXG4gKiBDcmVhdGVzIGEgcmVmZXJlbmNlIGZvciBhIG5lc3RlZCBjb21wb25lbnRcbiAqIEByZXR1cm5zIGVtcHR5IHJlZiBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlZiA9ICgpID0+ICh7XG4gICAgY3VycmVudDogbnVsbCxcbn0pO1xuLyoqXG4gKiBDcmVhdGVzIGEgcmVmZXJlbmNlIGZvciBhIG5lc3RlZCBjb21wb25lbnRcbiAqIEByZXR1cm5zIGVtcHR5IHJlZiBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVmO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxVbVZtTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyTnlaV0YwWlZKbFppNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZsUVRzN08wZEJSMGM3UVVGRFNDeE5RVUZOTEVOQlFVTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1IwRkJkME1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEYWtVc1QwRkJUeXhGUVVGRkxFbEJRVWs3UTBGRGFFSXNRMEZCUXl4RFFVRkJPMEZCUlVZN096dEhRVWRITzBGQlEwZ3NaVUZCWlN4VFFVRlRMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBQcmVzZXQgLSBiYXNlIGZvciBhIGNvbXBvbmVudFxuICogQHBhY2thZ2VcbiAqL1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBfY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVFbGVtZW50TlMgfSBmcm9tIFwiLi4vY3JlYXRlRWxlbWVudE5TXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVSZWYgfSBmcm9tIFwiLi4vY3JlYXRlUmVmXCI7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBjb21wb25lbnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmVzZXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQgPSBfY3JlYXRlRWxlbWVudDtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50TlMgPSBfY3JlYXRlRWxlbWVudE5TO1xuICAgICAgICB0aGlzLmNyZWF0ZVJlZiA9IF9jcmVhdGVSZWY7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgd2hlbiBjb21wb25lbnQgY2F0Y2hlcyBlcnJvci4gRGVmYXVsdCBiZWhhdmlvdXIgaXMgY29uc29sZS5lcnJvclxuICAgICAgICAgKiBAcGFyYW0gZXJyb3IgLSBlcnJvciBvYmplY3Qgd2l0aCBpbmZvXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2ggPSAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gY29tcG9uZW50IGNhdGNoZXMgYSB3YXJuaW5nLiBEZWZhdWx0IGJlaGF2aW91ciBpcyBjb25zb2xlLndhcm5cbiAgICAgICAgICogQHBhcmFtIG1zZyAtIHdhcm5pbmcgbWVzc2FnZVxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbXBvbmVudERpZFdhcm4gPSAobXNnKSA9PiBjb25zb2xlLndhcm4obXNnKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCBiZWZvcmUgY29tcG9uZW50IGlzIHVwZGF0ZWRcbiAgICAgICAgICogQHJldHVybnMgd2hldGhlciBvciBub3QgY29tcG9uZW50IHNob3VsZCB1cGRhdGUvcmUtcmVuZGVyXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9ICgpID0+IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW5kZXJpbmcgSFRNTCwgbXVzdCBiZSBwYXJ0IG9mIGV4dGVuZGVkIGNsYXNzXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcmV0dXJucyBpZiByZXR1cm5zIG51bGwgZXJyb3Igd2lsbCBiZSB0aHJvd25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVuZGVyID0gKCkgPT4gbnVsbDtcbiAgICB9XG59XG5QcmVzZXQuY3JlYXRlRWxlbWVudCA9IF9jcmVhdGVFbGVtZW50O1xuUHJlc2V0LmNyZWF0ZUVsZW1lbnROUyA9IF9jcmVhdGVFbGVtZW50TlM7XG5QcmVzZXQuY3JlYXRlUmVmID0gX2NyZWF0ZVJlZjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgySmhjMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjSEpwZG1GMFpTOWZZbUZ6WlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPMGRCVTBjN1FVRkZTQ3hQUVVGUExFVkJRVU1zVDBGQlR5eEpRVUZKTEdOQlFXTXNSVUZCUXl4TlFVRk5MR3RDUVVGclFpeERRVUZCTzBGQlF6RkVMRTlCUVU4c1JVRkJReXhQUVVGUExFbEJRVWtzWjBKQlFXZENMRVZCUVVNc1RVRkJUU3h2UWtGQmIwSXNRMEZCUVR0QlFVTTVSQ3hQUVVGUExFVkJRVU1zVDBGQlR5eEpRVUZKTEZWQlFWVXNSVUZCUXl4TlFVRk5MR05CUVdNc1EwRkJRVHRCUVdsRGJFUXNNRUpCUVRCQ08wRkJRekZDT3p0SFFVVkhPMEZCUTBnc1RVRkJUU3hQUVVGblFpeE5RVUZOTzBsQlFUVkNPMUZCVVc5Q0xHdENRVUZoTEVkQlFVY3NZMEZCWXl4RFFVRkJPMUZCUlRsQ0xHOUNRVUZsTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVUU3VVVGRmJFTXNZMEZCVXl4SFFVRkhMRlZCUVZVc1EwRkJRVHRSUVVWMFF6czdPenRYUVVsSE8xRkJRMGtzYzBKQlFXbENMRWRCUVVjc1EwRkJReXhMUVVGWkxFVkJRVkVzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVUU3VVVGRmRrVTdPenM3VjBGSlJ6dFJRVU5KTEhGQ1FVRm5RaXhIUVVGSExFTkJRVU1zUjBGQlZ5eEZRVUZSTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTzFGQlJXeEZPenM3VjBGSFJ6dFJRVU5KTERCQ1FVRnhRaXhIUVVGSExFZEJRVmtzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUVR0UlFVVnNSRHM3T3pzN08xZEJUVWM3VVVGRFlTeFhRVUZOTEVkQlFVY3NSMEZCWlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGQk8wbEJSVzVFTEVOQlFVTTdPMEZCZWtNd1FpeHZRa0ZCWVN4SFFVRkhMR05CUVdNc1EwRkJRVHRCUVVVNVFpeHpRa0ZCWlN4SFFVRkhMR2RDUVVGblFpeERRVUZCTzBGQlJXeERMR2RDUVVGVExFZEJRVWNzVlVGQlZTeERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIEV2ZW50c1xuICogQHBhY2thZ2VcbiAqL1xuaW1wb3J0IHsgUHJlc2V0IGFzIEJhc2VDb21wb25lbnQgfSBmcm9tIFwiLi9fYmFzZVwiO1xuY29uc3QgZXZlbnROYW1lcyA9IFtcbiAgICBcIm9uRm9jdXNcIixcbiAgICBcIm9uQmx1clwiLFxuICAgIFwib25Gb2N1c0luXCIsXG4gICAgXCJvbkZvY3VzT3V0XCIsXG4gICAgXCJvbkFuaW1hdGlvblN0YXJ0XCIsXG4gICAgXCJvbkFuaW1hdGlvbkNhbmNlbFwiLFxuICAgIFwib25BbmltYXRpb25FbmRcIixcbiAgICBcIm9uQW5pbWF0aW9uSXRlcmF0aW9uXCIsXG4gICAgXCJvblRyYW5zaXRpb25TdGFydFwiLFxuICAgIFwib25UcmFuc2l0aW9uQ2FuY2VsXCIsXG4gICAgXCJvblRyYW5zaXRpb25FbmRcIixcbiAgICBcIm9uVHJhbnNpdGlvblJ1blwiLFxuICAgIFwib25BdXhDbGlja1wiLFxuICAgIFwib25DbGlja1wiLFxuICAgIFwib25EYmxDbGlja1wiLFxuICAgIFwib25Nb3VzZURvd25cIixcbiAgICBcIm9uTW91c2VFbnRlclwiLFxuICAgIFwib25Nb3VzZUxlYXZlXCIsXG4gICAgXCJvbk1vdXNlTW92ZVwiLFxuICAgIFwib25Nb3VzZU92ZXJcIixcbiAgICBcIm9uTW91c2VPdXRcIixcbiAgICBcIm9uTW91c2VVcFwiLFxuXTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgY2xhc3MgRXZlbnRzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kcyBldmVudCBsaXN0ZW5lcnMgZXZlbnRcbiAgICAgICAgICogRG8gbm90IGNhbGwgbWFudWFsbHlcbiAgICAgICAgICogQHBhY2FrZ2VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYmluZEV2ZW50TGlzdGVuZXJzID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJpbmRzIGV2ZW50IGxpc3RlbmVycyBldmVudFxuICAgICAgICAgKiBEbyBub3QgY2FsbCBtYW51YWxseVxuICAgICAgICAgKiBAcGFjYWtnZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bmJpbmRFdmVudExpc3RlbmVycyA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIgPSAoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgb2YgZXZlbnROYW1lcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxFdmVudE5hbWUgPSBldmVudE5hbWUuc2xpY2UoMiwgMCkudG9Mb3dlckNhc2UoKSwgY2FsbGJhY2sgPSB0aGlzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBldmVudExpc3RlbmVyKGh0bWxFdmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDJWMlpXNTBjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOWxkbVZ1ZEhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenRIUVZOSE8wRkJSVWdzVDBGQlR5eEZRVUZETEUxQlFVMHNTVUZCU1N4aFFVRmhMRVZCUVVNc1RVRkJUU3hUUVVGVExFTkJRVUU3UVVGWkwwTXNUVUZCVFN4VlFVRlZMRWRCUVhGQ08wbEJRMnBETEZOQlFWTTdTVUZEVkN4UlFVRlJPMGxCUTFJc1YwRkJWenRKUVVOWUxGbEJRVms3U1VGRFdpeHJRa0ZCYTBJN1NVRkRiRUlzYlVKQlFXMUNPMGxCUTI1Q0xHZENRVUZuUWp0SlFVTm9RaXh6UWtGQmMwSTdTVUZEZEVJc2JVSkJRVzFDTzBsQlEyNUNMRzlDUVVGdlFqdEpRVU53UWl4cFFrRkJhVUk3U1VGRGFrSXNhVUpCUVdsQ08wbEJRMnBDTEZsQlFWazdTVUZEV2l4VFFVRlRPMGxCUTFRc1dVRkJXVHRKUVVOYUxHRkJRV0U3U1VGRFlpeGpRVUZqTzBsQlEyUXNZMEZCWXp0SlFVTmtMR0ZCUVdFN1NVRkRZaXhoUVVGaE8wbEJRMklzV1VGQldUdEpRVU5hTEZkQlFWYzdRMEZEWkN4RFFVRkJPMEZCY1VoRUxEQkNRVUV3UWp0QlFVTXhRaXhOUVVGTkxFOUJRV2RDTEUxQlFVOHNVMEZCVVN4aFFVRmhPMGxCUVd4RU96dFJRVVZKT3pzN08xZEJTVWM3VVVGRFowSXNkVUpCUVd0Q0xFZEJRVWNzUTBGQlF5eFBRVUZ2UWl4RlFVRlJMRVZCUVVVN1dVRkRia1VzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUVR0UlFVTnFSQ3hEUVVGRExFTkJRVUU3VVVGRlJEczdPenRYUVVsSE8xRkJRMmRDTEhsQ1FVRnZRaXhIUVVGSExFTkJRVU1zVDBGQmIwSXNSVUZCVVN4RlFVRkZPMWxCUTNKRkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNUMEZCVHl4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVOQlFVRTdVVUZEY0VRc1EwRkJReXhEUVVGQk8xRkJSVThzYlVKQlFXTXNSMEZCUnl4RFFVRkRMR0ZCUVRSQ0xFVkJRVkVzUlVGQlJUdFpRVU0xUkN4TFFVRkxMRTFCUVUwc1UwRkJVeXhKUVVGSkxGVkJRVlVzUlVGQlJUdG5Ra0ZEYUVNc1RVRkJUU3hoUVVGaExFZEJRVWNzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVWQlEzSkVMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVRTdaMEpCUlRsQ0xFbEJRVWtzVVVGQlVTeExRVUZMTEZOQlFWTXNTVUZCU1N4UlFVRlJMRmxCUVZrc1VVRkJVU3hGUVVGRk8yOUNRVU40UkN4aFFVRmhMRU5CUVVNc1lVRkJZU3hGUVVGRkxGRkJRVGhETEVOQlFVTXNRMEZCUVR0cFFrRkRMMFU3WVVGRFNqdFJRVU5NTEVOQlFVTXNRMEZCUVR0SlFVVk1MRU5CUVVNN1EwRkJRU0o5IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZSBtYWluIGRlc3RhZ25hdGUgY2xhc3NcbiAqIEBmaWxlIERlU3RhZ25hdGUgY29tcG9uZW50IGNsYXNzXG4gKiBAcHJlc2VydmVcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxpbmVzICovXG5pbXBvcnQgeyBFdmVudHMgYXMgQmFzZSB9IGZyb20gXCIuL3ByaXZhdGUvX2V2ZW50c1wiO1xuaW1wb3J0IHVybCBmcm9tIFwiLi9wcml2YXRlL191cmxcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQGNsYXNzZGVzYyBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjbGFzc1xuICogQG5hbWVzcGFjZVxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgY2xhc3MgY29tcG9uZW50XG4gICAgICogQHBhcmFtIHBhcmVudCAtIHBhcmVudCBvZiB0aGlzIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSBlbGVtZW50IHByb3BlcnRpZXM7IHdvcmtzIGxpa2UgUmVhY3QgUHJvcHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXRlIG9mIGNvbXBvbmVudC4gV29ya3Mgc2ltaWxhciBSZWFjdCBTdGF0ZVxuICAgICAgICAgKiBAdHlwZSB7dW5kZWZpbmVkIHwgT2JqZWN0LjxzdHJpbmcsIHVua25vd24+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7fTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGluaXRpYWwgc3RhdGUgd2FzIHNldCBpbiBpbml0aWFsaXplclxuICAgICAgICAgKiBEbyBub3QgdGhyb3cgZXJyb3Igd2l0aCBkaXJlY3Qgc3RhdGUgc2V0dGluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBjb21wb25lbnQgaXMgbW91bnRlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZGlkTW91bnQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoYXQgdG8gY2FsbCBiZWZvcmUgY29tcG9uZW50IHVwZGF0ZSAoc3RhdGUgbXV0YXRpb24pXG4gICAgICAgICAqIEBwYXJhbSB7UHJvcHN9IHByZXZQcm9wcyAtIHByZXZpb3VzIHByb3BzXG4gICAgICAgICAqIEBwYXJhbSBwcmV2U3RhdGUgLSBwcmV2aW91cyBzdGF0ZVxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlID0gKHByZXZQcm9wcywgcHJldlN0YXRlKSA9PiBbcHJldlByb3BzLCBwcmV2U3RhdGVdO1xuICAgICAgICAvKipcbiAgICAgICAgICogRm9yY2VzIGEgY29tcG9uZW50IHRvIHVwZGF0ZVxuICAgICAgICAgKiBGb2xsb3dzIHRoZSBzYW1lIGNvbXBvbmVudCB1cGRhdGluZyBwcm9jZWR1cmUgYXMgc2V0U3RhdGUgd2l0aG91dCBtb2RpZnlpbmcgc3RhdGVcbiAgICAgICAgICogQHJldHVybnMgcmV0dXJucyBlcnJvciBpZiBlcnJvciBpcyB0aHJvd25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAzLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHRoaXMuX2V4ZWNSZW5kZXIoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHN0YXRlXG4gICAgICAgICAqIEBwYXJhbSBvYmogLSBzdGF0ZSB0byBzZXRcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSA9IChvYmopID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAzLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9zdGF0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW5kZXJlZENvbnRlbnQgPSB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZXhlY1JlbmRlcigpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZShyZW5kZXJlZENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nLCBtYXgtbGVuICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsIG1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcGFyYW0gcGFyZW50IC0gcGFyZW50IGVsZW1lbnQgdG8gbW91bnQgd2l0aDsgb3B0aW9uYWxcbiAgICAgICAgICogQHJldHVybnMgLSByZXN1bHQgb2YgYXBwZW5kIGNoaWxkIHRvIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdW50Q29tcG9uZW50ID0gKHBhcmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMy4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbE1vdW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgNS4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnModGhpcy5fcGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRNb3VudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5jb21wb25lbnREaWRNb3VudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuZm9yRWFjaChmcmFnbWVudC5hcHBlbmRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsIG1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcmV0dXJucyAtIHJlc3VsdCBvZiBhcHBlbmQgY2hpbGQgdG8gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91bnQgPSB0aGlzLm1vdW50Q29tcG9uZW50O1xuICAgICAgICAvKipcbiAgICAgICAgICogVW5tb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHJldHVybnMgLSB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVubW91bnRDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnREaWRXYXJuKGBXQVJOOiBjb2RlIDQuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnModGhpcy5fcGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZE1vdW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVubW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEByZXR1cm5zIC0gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bm1vdW50ID0gdGhpcy51bm1vdW50Q29tcG9uZW50O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4sIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmcgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgY2hpbGRyZW4gZnJvbSB0aGlzLl9wYXJlbnRcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMy4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9wYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9wYXJlbnQubGFzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeGVjdXRlcyBuZXcgcmVuZGVyXG4gICAgICAgICAqIEByZXR1cm5zIHJlbmRlcmVkIGNvbnRlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2V4ZWNSZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbigpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGVzIHRoZSBjb21wb25lbnRcbiAgICAgICAgICogQHBhcmFtIHJlbmRlcmVkQ29udGVudCAtIHJlbmRlcmVkIGNvbnRlbnQgZnJvbSBleGVjdXRpbmcgdGhlIHJlbmRlciBmdW5jdGlvblxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl91cGRhdGUgPSAocmVuZGVyZWRDb250ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZENvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiByZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gdGhpcy5fcGFyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVuZGVyZWRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5fcGFyZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYXBwZW5kQ2hpbGQocmVuZGVyZWRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAoX2MgPSB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2hhbmRsZUVycm9yID0gKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaChlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihTdHJpbmcoZXJyKSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgZ2V0U3RhdGUgZ2V0dGVyIGFzIHRoaXMuc3RhdGUgaXRzZWxmIGlzIHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBnZXRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBjb21wb25lbnQgc3RhdGVcbiAgICAgKiBAcmV0dXJucyBjb21wb25lbnQgc3RhdGVcbiAgICAgKi9cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBjb21wb25lbnQgc3RhdGVcbiAgICAgKiBXQVJOOiBkbyBub3QgdXNlIHRoaXMgbWV0aG9kIHRvIG11dGF0ZSB0aGUgc3RhdGUgZGlyZWN0bHlcbiAgICAgKiBAcGFyYW0gb2JqIC0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgc2V0IHN0YXRlKG9iaikge1xuICAgICAgICBpZiAodGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IG9iajtcbiAgICAgICAgICAgIHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVibGljIGdldFByb3BzIGdldHRlciBhcyB0aGlzLnByb3BzIGl0c2VsZiBpcyBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyBjb21wb25lbnQgcHJvcHNcbiAgICAgKi9cbiAgICBnZXQgZ2V0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHBhcmVudCBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gcGFyZW50IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0IHBhcmVudChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMS4gU2VlICR7dXJsfS4gUGFyYW1zOiAke2VsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpfWApKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHBhcmVudCBlbGVtZW50IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQHJldHVybnMgcGFyZW50XG4gICAgICovXG4gICAgZ2V0IHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGRpZE1vdW50IHZhbHVlIHB1YmxpY2x5XG4gICAgICogQHJldHVybnMgaWYgbW91bnRlZFxuICAgICAqL1xuICAgIGdldCBkaWRNb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpZE1vdW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXRjRzl1Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMk52YlhCdmJtVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN096dEhRVlZITzBGQlEwZ3NPRUpCUVRoQ08wRkJSVGxDTEU5QlFVOHNSVUZCUXl4TlFVRk5MRWxCUVVrc1NVRkJTU3hGUVVGRExFMUJRVTBzYlVKQlFXMUNMRU5CUVVFN1FVRkRhRVFzVDBGQlR5eEhRVUZITEUxQlFVMHNaMEpCUVdkQ0xFTkJRVUU3UVVGSmFFTTdPenM3T3p0SFFVMUhPMEZCUTBnc1RVRkJUU3hQUVVGblFpeFRRVVZzUWl4VFFVRlJMRWxCUVVrN1NVRjNRbG83T3pzN1QwRkpSenRKUVVOSUxGbEJRVzlDTEUxQlFXOUNMRVZCUVZrc1MwRkJZVHRSUVVNM1JDeExRVUZMTEVWQlFVVXNRMEZCUVR0UlFVUjVReXhWUVVGTExFZEJRVXdzUzBGQlN5eERRVUZSTzFGQk0wSnFSVHM3TzFkQlIwYzdVVUZEU3l4WFFVRk5MRWRCUVZVc1JVRkJWeXhEUVVGQk8xRkJSVzVET3pzN1YwRkhSenRSUVVOTExIZENRVUZ0UWl4SFFVRkhMRXRCUVVzc1EwRkJRVHRSUVU5dVF6czdWMEZGUnp0UlFVTkxMR05CUVZNc1IwRkJSeXhMUVVGTExFTkJRVUU3VVVGaGVrSTdPenM3TzFkQlMwYzdVVUZEU1N3MFFrRkJkVUlzUjBGQlJ5eERRVU0zUWl4VFFVRm5RaXhGUVVOb1FpeFRRVUZuUWl4RlFVTkdMRVZCUVVVc1EwRkJReXhEUVVGRExGTkJRVk1zUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUVR0UlFYZEZNME03T3pzN1YwRkpSenRSUVVOaExHZENRVUZYTEVkQlFVY3NSMEZCYVVJc1JVRkJSVHM3V1VGRE4wTXNTVUZCU1R0blFrRkRRU3hOUVVGQkxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc0swTkJRWFpDTEVsQlFVa3NSVUZCZFVJN1owSkJSVE5DTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1MwRkJTeXhUUVVGVExFVkJRVVU3YjBKQlF6VkNMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3YVVKQlEyaEVPMmRDUVVWRUxFbEJRVWtzUTBGQlF5eDFRa0ZCZFVJc1EwRkRlRUlzYTBKQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJWU3h2UWtGRGNFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkRha0lzUTBGQlFUdG5Ra0ZGUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4RFFVRkJPMkZCUTI1RE8xbEJRVU1zVDBGQlR5eEhRVUZaTEVWQlFVVXNNRUpCUVRCQ0xFTkJRVU03WjBKQlF6bERMRTlCUVU4c1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUVR0aFFVTm9RenRSUVVOTUxFTkJRVU1zUTBGQlFUdFJRVVZFT3pzN08xZEJTVWM3VVVGRFlTeGhRVUZSTEVkQlFVY3NRMEZCUXl4SFFVRnRRaXhGUVVGblFpeEZRVUZGT3p0WlFVTTNSQ3hKUVVGSk8yZENRVU5CTEUxQlFVRXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpd3JRMEZCZUVJc1NVRkJTU3hGUVVGM1FqdG5Ra0ZGTlVJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eExRVUZMTEZOQlFWTXNSVUZCUlR0dlFrRkROVUlzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elFrRkJjMElzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUVR0cFFrRkRhRVE3WjBKQlJVUXNTVUZCU1N4RFFVRkRMSFZDUVVGMVFpeERRVU40UWl4clFrRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZWTEc5Q1FVTndRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVU5xUWl4RFFVRkJPMmRDUVVWRUxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlFUdG5Ra0ZGTDBJc1RVRkJUU3hsUVVGbExFZEJRVWNzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhGUVVGRk8yOUNRVU5vUkN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdHZRa0ZEY0VJc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlFUdG5Ra0ZGWml4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZCTzJGQlEyaERPMWxCUVVNc1QwRkJUeXhIUVVGSExFVkJRVVVzTUVKQlFUQkNMRU5CUVVNN1owSkJRM0pETEU5QlFVOHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlFUdGhRVU5vUXp0UlFVTk1MRU5CUVVNc1EwRkJRVHRSUVVWRUxHZEZRVUZuUlR0UlFVTm9SVHM3T3p0WFFVbEhPMUZCUTJFc2JVSkJRV01zUjBGQlJ5eERRVU0zUWl4TlFVRnZRaXhGUVVOU0xFVkJRVVU3TzFsQlEyUXNTVUZCU1R0blFrRkRRU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEV0QlFVc3NVMEZCVXl4RlFVRkZPMjlDUVVNMVFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkJPMmxDUVVOb1JEdG5Ra0ZGUkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlFUdG5Ra0ZGY0VJc1RVRkJUU3hUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkJPMmRDUVVVdlFpeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFZEJRVWNzU1VGQlNTeERRVUZCTzJkQ1FVVXZRaXhOUVVGQkxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc0swTkJRWFpDTEVsQlFVa3NSVUZCZFVJN1owSkJSVE5DTEVsQlFVa3NVMEZCVXl4TFFVRkxMRWxCUVVrc1JVRkJSVHR2UWtGRGNFSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh6UWtGQmMwSXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRVHRwUWtGRGFFUTdaMEpCUlVRc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlFUdG5Ra0ZGY2tNc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVRTdaMEpCUTNKQ0xFMUJRVUVzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXdyUTBGQmRFSXNTVUZCU1N4RlFVRnpRanRuUWtGRk1VSXNTVUZCU1N4VFFVRlRMRmxCUVZrc1MwRkJTeXhGUVVGRk8yOUNRVU0xUWl4TlFVRk5MRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zYzBKQlFYTkNMRVZCUVVVc1EwRkJRenR2UWtGRmJFUXNVMEZCZFVJc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkJPMjlDUVVWMFJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZCTzJsQ1FVTTFRenRuUWtGRlJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZCTzJGQlF6ZERPMWxCUVVNc1QwRkJUeXhIUVVGWkxFVkJRVVVzTUVKQlFUQkNMRU5CUVVNN1owSkJRemxETEU5QlFVOHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlFUdGhRVU5vUXp0UlFVTk1MRU5CUVVNc1EwRkJRVHRSUVVWRU96czdWMEZIUnp0UlFVTmhMRlZCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZCTzFGQlJUTkRPenM3VjBGSFJ6dFJRVU5oTEhGQ1FVRm5RaXhIUVVGSExFZEJRVk1zUlVGQlJUczdXVUZETVVNc1NVRkJTVHRuUWtGRFFTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRXRCUVVzc1UwRkJVeXhGUVVGRk8yOUNRVU0xUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4eFFrRkJjVUlzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUVR0cFFrRkROVVE3WjBKQlJVUXNUVUZCUVN4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEN0RFFVRjZRaXhKUVVGSkxFVkJRWGxDTzJkQ1FVVTNRaXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZCTzJkQ1FVVjJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVRTdaMEpCUTNSQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkJPMkZCUTNwQ08xbEJRVU1zVDBGQlR5eEhRVUZaTEVWQlFVVXNNRUpCUVRCQ0xFTkJRVU03WjBKQlF6bERMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdZVUZEZWtJN1VVRkZUQ3hEUVVGRExFTkJRVUU3VVVGRlJEczdPMWRCUjBjN1VVRkRZU3haUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGQk8xRkJReTlETEN0RVFVRXJSRHRSUVVVdlJEczdPMWRCUjBjN1VVRkRTeXh2UWtGQlpTeEhRVUZITEVkQlFWTXNSVUZCUlR0WlFVTnFReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVNMVFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkJPMkZCUTJoRU8xbEJSVVFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSVHRuUWtGRE5VSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJUdHZRa0ZEZUVJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlFUdHBRa0ZEYmtRN1lVRkRTanRSUVVOTUxFTkJRVU1zUTBGQlFUdFJRVVZFT3pzN1YwRkhSenRSUVVOTExHZENRVUZYTEVkQlFVY3NSMEZCWlN4RlFVRkZPMWxCUTI1RExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVXNRMEZCUVR0WlFVVjBRaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUVR0UlFVTjRRaXhEUVVGRExFTkJRVUU3VVVGSFJEczdPenRYUVVsSE8xRkJRMHNzV1VGQlR5eEhRVUZITEVOQlFVTXNaVUZCTkVJc1JVRkJVU3hGUVVGRk96dFpRVU55UkN4SlFVRkpMR1ZCUVdVc1dVRkJXU3hMUVVGTExFVkJRVVU3WjBKQlEyeERMRXRCUVVzc1RVRkJUU3hQUVVGUExFbEJRVWtzWlVGQlpTeEZRVUZGTzI5Q1FVTnVReXhOUVVGQkxFbEJRVWtzUTBGQlF5eFBRVUZQTERCRFFVRkZMRmRCUVZjc1EwRkJReXhQUVVGUExFVkJRVU03YVVKQlEzSkRPMkZCUTBvN2FVSkJRVTBzU1VGQlNTeGxRVUZsTEVWQlFVVTdaMEpCUTNoQ0xFMUJRVUVzU1VGQlNTeERRVUZETEU5QlFVOHNNRU5CUVVVc1YwRkJWeXhEUVVGRExHVkJRV1VzUlVGQlF6dGhRVU0zUXp0WlFVVkVMRWxCUVVrc1pVRkJaU3hGUVVGRk8yZENRVU5xUWl4TlFVRkJMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNLME5CUVhaQ0xFbEJRVWtzUlVGQmRVSTdZVUZET1VJN1VVRkRUQ3hEUVVGRExFTkJRVUU3VVVGRlR5eHBRa0ZCV1N4SFFVRkhMRU5CUVVNc1IwRkJXU3hGUVVGVExFVkJRVVU3V1VGRE0wTXNTVUZCU1N4SFFVRkhMRmxCUVZrc1MwRkJTeXhGUVVGRk8yZENRVU4wUWl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1owSkJSVE5DTEU5QlFVOHNSMEZCV1N4RFFVRkJPMkZCUTNSQ08xbEJSVVFzVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVRTdXVUZGY0VNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGQk8xbEJSVGRDTEU5QlFVOHNTMEZCU3l4RFFVRkJPMUZCUTJoQ0xFTkJRVU1zUTBGQlFUdFJRWEJTUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlFUdEpRVU42UWl4RFFVRkRPMGxCWVVRN096dFBRVWRITzBsQlEwZ3NTVUZCVnl4UlFVRlJPMUZCUTJZc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZCTzBsQlEzSkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU0N4SlFVRmpMRXRCUVVzN1VVRkRaaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVRTdTVUZEZEVJc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTQ3hKUVVGakxFdEJRVXNzUTBGQlJTeEhRVUZWTzFGQlF6TkNMRWxCUVVrc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RlFVRkZPMWxCUXpGQ0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkRiRUlzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlF6RkRMRU5CUVVFN1dVRkRSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJPMU5CUTNKQ08yRkJRVTA3V1VGRFNDeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJRVHRaUVVOcVFpeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFZEJRVWNzU1VGQlNTeERRVUZCTzFOQlEyeERPMGxCUTB3c1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTklMRWxCUVZjc1VVRkJVVHRSUVVObUxFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUVR0SlFVTnlRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSUxFbEJRVmNzVFVGQlRTeERRVUZGTEU5QlFXZERPMUZCUXk5RExFbEJRVWtzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4cFFrRkJhVUlzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZETVVNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4SFFVRkhMR0ZCUVdFc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRVHRUUVVNelJ6dFJRVVZFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGQk8wbEJRekZDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNDeEpRVUZYTEUxQlFVMDdVVUZEWWl4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVUU3U1VGRGRrSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5JTEVsQlFWY3NVVUZCVVR0UlFVTm1MRTlCUVU4c1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlFUdEpRVU42UWl4RFFVRkRPME5CYjAxS08wRkJSVVFzWlVGQlpTeFRRVUZUTEVOQlFVRWlmUT09IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBmb3IgRE9NIG1hbmlwdWxhdGlvblxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2pzeC50c1wiIC8+XG5pbXBvcnQgeyBiaW5kQ2hpbGRyZW4sIH0gZnJvbSBcIi4vcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzXCI7XG5leHBvcnQgY29uc3QgZnJhZ21lbnQgPSAoXywgLi4uY2hpbGRyZW4pID0+IHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBiaW5kQ2hpbGRyZW4oZnJhZ21lbnQsIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gZnJhZ21lbnQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnJhZ21lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labkpoWjIxbGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12Wm5KaFoyMWxiblF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN08wZEJVVWM3UVVGRFNDd3lRa0ZCTWtJN1FVRkRNMElzYVVOQlFXbERPMEZCUldwRExFOUJRVThzUlVGRlNDeFpRVUZaTEVkQlEyWXNUVUZCVFN3clFrRkJLMElzUTBGQlFUdEJRVVYwUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hSUVVGUkxFZEJRVWNzUTBGRGNFSXNRMEZCVlN4RlFVTldMRWRCUVVjc1VVRkJNa0lzUlVGRFpDeEZRVUZGTzBsQlEyeENMRTFCUVUwc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eHpRa0ZCYzBJc1JVRkJSU3hEUVVGQk8wbEJSV3hFTEZsQlFWa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVUU3U1VGRmFFTXNUMEZCVHl4UlFVRlJMRU5CUVVFN1FVRkRia0lzUTBGQlF5eERRVUZCTzBGQlJVUXNaVUZCWlN4UlFVRlJMRU5CUVVFaWZRPT0iXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnQiLCJfY3JlYXRlRWxlbWVudE5TIiwiX2NyZWF0ZVJlZiIsIkJhc2VDb21wb25lbnQiLCJCYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTSxHQUFHLEdBQUcsd0RBQVo7O0FDcUZQOzs7Ozs7O0FBT0c7O0FBQ0ksTUFBTSxTQUFTLEdBQUcsQ0FDckIsT0FEcUIsRUFFckIsS0FGcUIsRUFHckIsRUFBRSxHQUFHLEtBSGdCLEtBSWY7QUFDTixNQUFJLEtBQUosRUFBVztBQUNQLFNBQUssTUFBTSxDQUFDLEdBQUQsRUFB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
