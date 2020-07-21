/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.4.0
 * @exports createElement
 */

/* eslint-disable one-var */

export type ChildrenFlatArrayType = HTMLElement[]
    | string[]
    | number[]
    | Element[]
    | ((HTMLElement | Element) | string)[]
    | ((HTMLElement | Element) | number)[]
    | (string | number)[]
    | ((HTMLElement | Element) | string | number)[]
    | (HTMLElement | Element)[]

export type ChildrenArrayType = ChildrenFlatArrayType
    | ChildrenArrayType[]

/**
 * All types the children parameter can be
 */
export type ChildrenType = HTMLElement
    | string 
    | number 
    | ChildrenArrayType
    | Element

/**
 * Binds children to element
 * @package
 * @param {Element} element - element to bind
 * @param {undefined | Object.<string, string | number>} props - props to bind with
 * @param {boolean} ns - if namespace element
 * @returns {void} void
 */
export const _bindProps = (
    element: Element,
    props?: {[key: string]: unknown},
    ns = false,
): void => {
    if (props) {
        for (const [key, val] of Object.entries(props)) {
            if (typeof(val) === "string" || typeof(val) === "number") {
                if (key === "innerHTML") {
                    element.innerHTML = val.toString()
                } else if (ns) {
                    element.setAttributeNS(null, key, val.toString())
                } else {
                    element.setAttribute(key, val.toString())
                }
            } else if (key.slice(0, 2) === "on") { // Works such as onClick, onAnimationEnd, etc.
                if (typeof(val) === "function") {
                    element.addEventListener(
                        key.slice(2)
                            .toLowerCase() as keyof HTMLElementEventMap,
                        val as ()=> void
                    )
                }
            } else {
                console.warn(`WARN: Invalid prop type "${typeof(val)}" for key "${key}". Skipping prop.`)
            }
        }
    }
}

export const _unpackChildren = (
    children: ChildrenArrayType,
): ChildrenFlatArrayType => {
    const newChildren = []

    for (const child of children) {
        if (typeof(child) === "object" && child instanceof Array) {
            newChildren.push(..._unpackChildren(child))
        } else {
            newChildren.push(child)
        }
    }

    return newChildren as ChildrenFlatArrayType
}

/**
 * Binds children to element
 * @package
 * @param {Element} element - element to bind
 * @param {undefined | ChildrenType} children - children to bind with
 * @returns {void} void
 */
export const _bindChildren = (
    element: Element,
    children?: ChildrenType,
): void => {
    if (children || children === 0) {
        if (children instanceof Array) {
            for (const child of children) {
                if (
                    typeof(child) === "string" || 
                    typeof(child) === "number"
                ) {
                    (element as HTMLElement).innerText = child.toString()
                } else if (
                    typeof (child) === "object" &&
                    child instanceof Array
                ) {
                    _unpackChildren(child)
                        .forEach((_child) => _bindChildren(element, _child))
                } else {
                    element.appendChild(child)
                }
            }
        } else if (
            typeof(children) === "string" ||
            typeof(children) === "number"
        ) {
            (element as HTMLElement).innerText = children.toString()
        } else {
            element.appendChild(children)
        }
    }
}

/**
 * Creates a child element to DynamComponent
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
const createElement = <T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    props?: {[key: string]: string | number},
    children?: ChildrenType,
    ...childrenArgs: ChildrenArrayType
): HTMLElementTagNameMap[T] => {
    const element = document.createElement(tagName)

    _bindProps(element, props)

    let _children: ChildrenType | undefined = children

    if (children && childrenArgs) {
        if (typeof(children) === "object" && children instanceof Array) {
            _children = [
                ..._unpackChildren(children),
                ..._unpackChildren(childrenArgs),
            ]
        } else {
            _children = [children, ..._unpackChildren(childrenArgs)]
        }
    }

    _bindChildren(element, _children)

    return element
}

export default createElement
