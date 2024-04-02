// eslint-disable-next-line
/// <reference path="./jsx.ts" />

import {
    BasicProps,
    ChildrenArrayType,
    bindChildren,
    bindProps,
} from "./internal/_createElementUtils"
import type JSX from "./jsx"
/* eslint-disable prefer-arrow/prefer-arrow-functions */

/**
 * Creates an HTML Element
 *
 * @param tagName - Name of HTML element
 * @param props - Element properties, such as class, innerHTML, id, style, etc
 * @param children - Children of this element. Can be nothing, number (converted to string), string
 *   (text), or another element. An array of any of these will create multiple children
 * @param childrenArgs - Rest parameter of children
 * @returns Element
 */
export function createElement<T extends keyof HTMLElementTagNameMap>(
    tagNameOrComponent: T,
    props?: BasicProps | null,
    ...childrenArgs: ChildrenArrayType
): HTMLElementTagNameMap[T]

/**
 * Creates an HTML Element
 *
 * @param component - Function component
 * @param props - Props of function component
 * @param children - Children of this element. Can be nothing, number (converted to string), string
 *   (text), or another element. An array of any of these will create multiple children
 * @param childrenArgs - Rest parameter of children
 * @returns Element
 */
export function createElement<
    Props extends {[key: string]: unknown},
    Returns extends HTMLElement | JSX.Element,
>(
    tagNameOrComponent: (props?: Props, ...children: ChildrenArrayType) => Returns,
    props?: Props,
    ...childrenArgs: ChildrenArrayType
): Returns

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
export function createElement<T extends string | {[key: string]: unknown}, Returns = void>(
    tagNameOrComponent: T | ((_props?: T, ..._children: ChildrenArrayType) => Returns),
    props?: BasicProps | null | T,
    ...children: ChildrenArrayType
): HTMLElement | Returns | Error {
    if (typeof tagNameOrComponent === "string") {
        const element = document.createElement(tagNameOrComponent)

        bindProps(element, props as BasicProps | null)

        bindChildren(element, children)

        return element
    } else if (typeof tagNameOrComponent === "function") {
        return tagNameOrComponent(props as T, children)
    }

    return Error("tagNameOrComponent is of invalid type.")
}

export default createElement
