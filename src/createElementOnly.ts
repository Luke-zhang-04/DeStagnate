/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports createElement function for DOM manipulation without DeStagnate class or Refs
 */
// eslint-disable-next-line
/// <reference path="./jsx.ts" />

/* eslint-disable prefer-arrow/prefer-arrow-functions */

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

interface EventMap extends HTMLElementEventMap {
    "": Event,
}

type EventFunc<T extends keyof EventMap = ""> = (
    e: EventMap[T]
)=> void

interface BasicProps {
    // eslint-disable-next-line
    [key: string]: string | number | Element | EventFunc<keyof EventFunc> | undefined,
    class?: string,
    id?: string,
    src?: string,
    href?: string,
    width?: number,
    height?: number,
    alt?: string,
    style?: string,
    title?: string,

    onFocus?: EventFunc<"focus">,
    onBlur?: EventFunc<"blur">,
    onFocusIn?: EventFunc<"focusin">,
    onFocusOut?: EventFunc<"focusout">,

    onAnimationStart?: EventFunc<"animationstart">,
    onAnimationCancel?: EventFunc<"animationcancel">,
    onAnimationEnd?: EventFunc<"animationend">,
    onAnimationIteration?: EventFunc<"animationiteration">,

    onTransitionStart?: EventFunc<"transitionstart">,
    onTransitionCancel?: EventFunc<"transitioncancel">,
    onTransitionEnd?: EventFunc<"transitionend">,
    onTransitionRun?: EventFunc<"transitionrun">,

    onAuxClick?: EventFunc<"auxclick">,
    onClick?: EventFunc<"click">,
    onDblClick?: EventFunc<"dblclick">,
    onMouseDown?: EventFunc<"mousedown">,
    onMouseEnter?: EventFunc<"mouseenter">,
    onMouseLeave?: EventFunc<"mouseleave">,
    onMouseMove?: EventFunc<"mousemove">,
    onMouseOver?: EventFunc<"mouseover">,
    onMouseOut?: EventFunc<"mouseout">,
    onMouseUp?: EventFunc<"mouseup">,
}

/**
 * Binds children to element
 * @package
 * @param element - element to bind
 * @param props - props to bind with
 * @param ns - if namespace element
 * @returns void
 */
const bindProps = (
    element: Element,
    props?: BasicProps | null,
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
                            .toLowerCase() as keyof EventMap,
                        val as EventFunc
                    )
                }
            } else if (val !== undefined) {
                console.warn(`${typeof val} is not a valid DeStagnate child`)
            }
        }
    }
}

/**
 * Binds children to element
 * @package
 * @param element - element to bind
 * @param children - children to bind with
 * @returns void
 */
const bindChildren = (
    element: Element,
    children?: ChildrenType,
): void => {
    if (children !== null && children !== undefined) {
        if (children instanceof Array) {
            for (const child of children) {
                bindChildren(element, child)
            }
        } else if (
            typeof children === "string" ||
            typeof children === "number"
        ) {
            element.appendChild(document.createTextNode(children.toString()))
        } else {
            element.appendChild(children)
        }
    }
}

/**
 * Creates an HTML Element
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param childrenArgs - rest parameter of children
 * @returns element
 */
export function createElement<T extends keyof HTMLElementTagNameMap> (
    tagNameOrComponent: T,
    props?: BasicProps | null,
    ...children: ChildrenArrayType
): HTMLElementTagNameMap[T]

/**
 * Creates an HTML Element
 * @param component - function component
 * @param props - props of function component
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param childrenArgs - rest parameter of children
 * @returns element
 */
export function createElement<
    Props extends Record<string, unknown>,
    Returns extends HTMLElement | JSX.Element,
    Children extends ChildrenType | ChildrenArrayType,
> (
    tagNameOrComponent: (props?: Props, children?: Children)=> Returns,
    props?: Props,
    ...children: ChildrenArrayType
): Returns

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
export function createElement<
    T extends string | Record<string, unknown>,
    Returns = void,
> (
    tagNameOrComponent: T | ((
        props?: T,
        ...children: ChildrenArrayType
    )=> Returns),
    props?: BasicProps | null | T,
    ...children: ChildrenArrayType
): HTMLElement | Returns | Error {
    if (typeof(tagNameOrComponent) === "string") {
        const element = document.createElement(tagNameOrComponent)

        bindProps(element, props as BasicProps | null)

        bindChildren(element, children)

        return element
    } else if (typeof(tagNameOrComponent) === "function") {
        return tagNameOrComponent(props as T, children)
    }

    return Error("tagNameOrComponent is of invalid type.")
}

export default createElement

