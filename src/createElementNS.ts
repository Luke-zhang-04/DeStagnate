/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.0
 * @exports createElementNS createElement for namespaced elements
 */

import {
    ChildrenArrayType,
    ChildrenType,
    bindChildren as _bindChildren,
    bindProps as _bindProps,
    unpackChildren as _unpackChildren
} from "./private/_createElementUtils"

/**
 * Creates a child element to deStagnate
 * @param namespaceURI - namespace uri
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param childrenRest - rest parameter of children
 * @returns html element
 */
export const createElementNS = (
    namespaceURI: keyof SVGElementTagNameMap | "http://www.w3.org/1999/xhtml" | "http://www.w3.org/2000/svg" | null,
    tagName: keyof SVGElementEventMap | string,
    props?: {[key: string]: string | number},
    children?: ChildrenType,
    ...childrenRest: ChildrenArrayType
): Element => {
    const element = document.createElementNS(namespaceURI, tagName)

    _bindProps(element, props, true)

    let _children: ChildrenType | undefined = children

    if (children && childrenRest) {
        if (typeof(children) === "object" && children instanceof Array) {
            _children = [
                ..._unpackChildren(children),
                ..._unpackChildren(childrenRest),
            ]
        } else {
            _children = [children, ..._unpackChildren(childrenRest)]
        }
    }

    _bindChildren(element, _children)

    return element
}

export default createElementNS
