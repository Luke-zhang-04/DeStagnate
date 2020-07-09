/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.1.0
 * @exports createElement
 */

/* eslint-disable one-var */

type ChildrenFlatArrayType = HTMLElement[]
    | string[]
    | number[]
    | (HTMLElement | string)[]
    | (HTMLElement | number)[]
    | (string | number)[]
    | (HTMLElement | string | number)[]

type ChildrenArrayType = ChildrenFlatArrayType
    | ChildrenArrayType[]

/**
 * All types the children parameter can be
 */
type ChildrenType = HTMLElement
    | string 
    | number 
    | ChildrenArrayType

/**
 * Binds children to element
 * @package
 * @param {HTMLElement} element - element to bind
 * @param {undefined | Object.<string, string | number>} props - props to bind with
 * @returns {void} void
 */
const _bindProps = (
    element: HTMLElement,
    props?: {[key: string]: unknown},
): void => {
    if (props) {
        for (const [key, val] of Object.entries(props)) {
            if (typeof(val) === "string") {
                if (key === "innerHTML") {
                    element.innerHTML = val.toString()
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
            } 
        }
    }
}

const unpackChildren = (children: ChildrenArrayType): ChildrenFlatArrayType => {
    const newChildren = []

    for (const child of children) {
        if (typeof(child) === "object" && child instanceof Array) {
            newChildren.push(...unpackChildren(child))
        } else {
            newChildren.push(child)
        }
    }

    return newChildren as ChildrenFlatArrayType
}

/**
 * Binds children to element
 * @package
 * @param {HTMLElement} element - element to bind
 * @param {undefined | ChildrenType} children - children to bind with
 * @returns {void} void
 */
const _bindChildren = (element: HTMLElement, children?: ChildrenType): void => {
    if (children || children === 0) {
        if (children instanceof Array) {
            for (const child of children) {
                if (
                    typeof(child) === "string" || 
                    typeof(child) === "number"
                ) {
                    element.innerText = child.toString()
                } else if (
                    typeof (child) === "object" &&
                    child instanceof Array
                ) {
                    unpackChildren(child)
                        .forEach((_child) => _bindChildren(element, _child))
                } else {
                    element.appendChild(child)
                }
            }
        } else if (
            typeof(children) === "string" ||
            typeof(children) === "number"
        ) {
            element.innerText = children.toString()
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
): HTMLElement => {
    const element = document.createElement(tagName)

    console.log(children, childrenArgs)

    _bindProps(element, props)

    let _children: ChildrenType | undefined = children

    if (children && childrenArgs) {
        if (typeof(children) === "object" && children instanceof Array) {
            _children = [
                ...unpackChildren(children),
                ...unpackChildren(childrenArgs),
            ]
        } else {
            _children = [children, ...unpackChildren(childrenArgs)]
        }
    }

    _bindChildren(element, _children)

    return element
}

export default createElement
