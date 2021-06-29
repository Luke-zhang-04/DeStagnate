/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @exports createElement function for DOM manipulation
 */
// eslint-disable-next-line
/// <reference path="./jsx.ts" />

import {
    BasicProps,
    ChildrenArrayType,
    bindChildren,
    bindProps,
} from "./private/_createElementUtils"
import type JSX from "./jsx"
/* eslint-disable prefer-arrow/prefer-arrow-functions */

/**
 * Creates an HTML Element
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param childrenArgs - rest parameter of children
 * @returns element
 */
export function createElement<T extends keyof HTMLElementTagNameMap>(
    tagNameOrComponent: T,
    props?: BasicProps | null,
    ...childrenArgs: ChildrenArrayType
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
>(
    tagNameOrComponent: (props?: Props, ...children: ChildrenArrayType) => Returns,
    props?: Props,
    ...childrenArgs: ChildrenArrayType
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
export function createElement<T extends string | Record<string, unknown>, Returns = void>(
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
