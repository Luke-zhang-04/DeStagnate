/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports createElement function for DOM manipulation
 */
// eslint-disable-next-line
/// <reference path="./jsx.ts" />

import {
    BasicProps,
    ChildrenArrayType,
    ChildrenType,
    bindChildren as _bindChildren,
    bindProps as _bindProps,
    unpackChildren as _unpackChildren
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
export function createElement<T extends keyof HTMLElementTagNameMap> (
    tagNameOrComponent: T,
    props?: BasicProps | null,
    children?: ChildrenType,
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
    Children extends ChildrenType | ChildrenArrayType,
> (
    tagNameOrComponent: (props?: Props, children?: Children)=> Returns,
    props?: Props,
    children?: ChildrenType,
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
export function createElement<
    T extends string | Record<string, unknown>,
    Returns = void,
> (
    tagNameOrComponent: T | ((
        props?: T,
        children?: ChildrenType,
    )=> Returns),
    props?: BasicProps | null | T,
    children?: ChildrenType,
    ...childrenArgs: ChildrenArrayType
): HTMLElement | Returns | Error {
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

    if (typeof(tagNameOrComponent) === "string") {
        const element = document.createElement(tagNameOrComponent)

        _bindProps(element, props as BasicProps | null)

        _bindChildren(element, _children)

        return element
    } else if (typeof(tagNameOrComponent) === "function") {
        return tagNameOrComponent(props as T, _children)
    }

    return Error("tagNameOrComponent is of invalid type.")
}

export default createElement
