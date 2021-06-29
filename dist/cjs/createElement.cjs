/**
 * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.1.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const url = "https://luke-zhang-04.github.io/DeStagnate/error-codes";

/**
 * Binds children to element
 *
 * @param element - Element to bind
 * @param props - Props to bind with
 * @param ns - If namespace element
 * @returns Void
 * @package
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
 *
 * @param element - Element to bind
 * @param children - Children to bind with
 * @returns Void
 * @package
 */

const bindChildren = (element, children) => {
  if (children !== null && children !== undefined) {
    if (children instanceof Array) {
      children.forEach(child => bindChildren(element, child));
    } else if (typeof children === "string" || typeof children === "number") {
      element.appendChild(document.createTextNode(children.toString()));
    } else if (children instanceof Node) {
      element.appendChild(children);
    } else {
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
    }
  }
};

const Fragment = (_, ...children) => {
  const documentFragment = document.createDocumentFragment();
  bindChildren(documentFragment, children);
  return documentFragment;
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
 *
 * @param namespaceURI - Namespace uri
 * @param tagName - Name of HTML element
 * @param props - Element properties, such as class, innerHTML, id, style, etc
 * @param children - Children of this element. Can be nothing, number (converted to string), string
 *   (text), or another element. An array of any of these will create multiple children
 * @param childrenRest - Rest parameter of children
 * @returns Html element
 */

const createElementNS = (namespaceURI, tagName, props, ...children) => {
  const element = document.createElementNS(namespaceURI, tagName);
  bindProps(element, props, true);
  bindChildren(element, children);
  return element;
};

exports.Fragment = Fragment;
exports.createElement = createElement;
exports.createElementNS = createElementNS;
exports.default = createElement;
//# sourceMappingURL=createElement.cjs.map
