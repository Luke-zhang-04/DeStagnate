import {BasicProps, ChildrenArrayType} from "./types"
import {bindChildren, bindProps} from "./internal/_createElementUtils"
/* eslint-disable prefer-arrow/prefer-arrow-functions */

export type Namespaces =
    | "http://www.w3.org/1998/Math/MathML"
    | "http://www.w3.org/1999/xhtml"
    | "http://www.w3.org/2000/svg"

/**
 * Creates a MathML Element
 *
 * @param namespaceURI - MathML namespace URI
 * @param tagName - Name of MathML element
 * @param props - Element properties, such as class, id, style, etc
 * @param children - Children of this element. Can be nothing, number, string, boolean, bigint, or
 *   more elements. An array will create multiple, flattened children.
 * @returns Element
 */
export function createElementNS<T extends keyof MathMLElementTagNameMap>(
    namespaceURI: "http://www.w3.org/1998/Math/MathML",
    tagName: T,
    props?: BasicProps | null,
    ...children: ChildrenArrayType
): MathMLElementTagNameMap[T]

/**
 * Creates an SVG Element
 *
 * @param namespaceURI - SVG namespace URI
 * @param tagName - Name of SVG element
 * @param props - Element properties, such as class, id, style, etc
 * @param children - Children of this element. Can be nothing, number, string, boolean, bigint, or
 *   more elements. An array will create multiple, flattened children.
 * @returns Element
 */
export function createElementNS<T extends keyof SVGElementTagNameMap>(
    namespaceURI: "http://www.w3.org/2000/svg",
    tagName: T,
    props?: BasicProps | null,
    ...children: ChildrenArrayType
): SVGElementTagNameMap[T]

/**
 * Creates a namespaced Element
 *
 * @param namespaceURI - W3 namespace URI
 * @param tagName - Name of element
 * @param props - Element properties, such as class, id, style, etc
 * @param children - Children of this element. Can be nothing, number, string, boolean, bigint, or
 *   more elements. An array will create multiple, flattened children.
 * @returns Element
 */
export function createElementNS(
    namespaceURI: Namespaces | string | null,
    tagName: string,
    props?: BasicProps | null,
    ...children: ChildrenArrayType
): Element {
    const element = document.createElementNS(namespaceURI, tagName)

    bindProps(element, props, true)

    bindChildren(element, children)

    return element
}

export default createElementNS
