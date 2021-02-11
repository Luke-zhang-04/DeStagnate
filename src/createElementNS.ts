/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports createElementNS createElement for namespaced elements
 */

import {
    ChildrenArrayType,
    bindChildren,
    bindProps
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
    ...children: ChildrenArrayType
): Element => {
    const element = document.createElementNS(namespaceURI, tagName)

    bindProps(element, props, true)

    bindChildren(element, children)

    return element
}

export default createElementNS
