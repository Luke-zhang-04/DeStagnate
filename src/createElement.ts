/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.0
 * @exports createElement function for DOM manipulation
 */
// Commented this out to make tsc happy
// eslint-disable-next-line
// <reference types="../jsx" />

import {
    ChildrenArrayType,
    ChildrenType,
    EventFunc,
    bindChildren as _bindChildren,
    bindProps as _bindProps,
    unpackChildren as _unpackChildren
} from "./_createElementTools"
import type {Ref} from "./createRef"

/**
 * Creates an HTML Element
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param childrenArgs - rest parameter of children
 * @returns element
 */
export const createElement = <T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    props?: {[key: string]: string | number | Element | Ref | EventFunc} | null,
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
