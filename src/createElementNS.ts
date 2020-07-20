/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.3.0
 * @exports createElementNS
 */

import {
    ChildrenArrayType,
    ChildrenType,
    _bindChildren,
    _bindProps,
    _unpackChildren
} from "./createElement"

/**
 * Creates a child element to deStagnate
 * @param {string | null} namespaceURI - namespace uri
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
export const createElementNS = <
    K extends keyof SVGElementTagNameMap | "http://www.w3.org/1999/xhtml" | "http://www.w3.org/2000/svg" | null,
    T extends keyof SVGElementEventMap,
>(
        namespaceURI: K,
        tagName: T,
        props?: {[key: string]: string | number},
        children?: ChildrenType,
        ...childrenArgs: ChildrenArrayType
    ): Element => {
    const element = document.createElementNS(namespaceURI, tagName)

    _bindProps(element, props, true)

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

export default createElementNS
