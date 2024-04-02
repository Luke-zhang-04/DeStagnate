import {ChildrenArrayType, bindChildren, bindProps} from "./internal/_createElementUtils"

/**
 * Creates a child element to deStagnate
 *
 * @param namespaceURI - Namespace uri
 * @param tagName - Name of HTML element
 * @param props - Element properties, such as class, innerHTML, id, style, etc
 * @param children - Children of this element. Can be nothing, number (converted to string), string
 *   (text), or another element. An array of any of these will create multiple children
 * @param childrenRest - Rest parameter of children
 * @returns Html element
 */
export const createElementNS = (
    namespaceURI:
        | keyof SVGElementTagNameMap
        | "http://www.w3.org/1999/xhtml"
        | "http://www.w3.org/2000/svg"
        | null,
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
