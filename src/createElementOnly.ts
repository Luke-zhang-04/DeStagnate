/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.0
 * @exports createElement function for DOM manipulation without DeStagnate class or Refs
 */

/* eslint-disable one-var, @typescript-eslint/no-explicit-any */

type ChildrenFlatArrayType = (HTMLElement
    | Element
    | number
    | string
)[]

type ChildrenArrayType = ChildrenFlatArrayType
    | ChildrenArrayType[]

/**
 * All types the children parameter can be
 */
type ChildrenType = HTMLElement
    | string 
    | number 
    | ChildrenArrayType
    | Element

type EventFunc = (e: Event)=> void

/**
 * Binds children to element
 * @package
 * @param element - element to bind
 * @param props - props to bind with
 * @param ns - if namespace element
 * @returns void
 */
export const _bindProps = (
    element: Element,
    props?: {[key: string]: string | number | Element | EventFunc} | null,
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
                        val
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
 * @param element - element to bind
 * @param children - children to bind with
 * @returns void
 */
export const _bindChildren = (
    element: Element,
    children?: ChildrenType,
): void => {
    if (children !== null && children !== undefined) {
        if (children instanceof Array) {
            for (const child of children) {
                _bindChildren(element, child)
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
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param childrenArgs - rest parameter of children
 * @returns element
 */
const createElement = <T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    props?: {[key: string]: string | number | Element | EventFunc} | null,
    children?: ChildrenType,
    ...childrenArgs: ChildrenArrayType
): HTMLElementTagNameMap[T] => {
    const element = document.createElement(tagName)

    _bindProps(element, props)

    let _children: ChildrenType | undefined = children

    if (children && childrenArgs) {
        if (children instanceof Array) {
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
