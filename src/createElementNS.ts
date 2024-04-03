import {ChildrenArrayType, ElementProps, SVGElementProps} from "./types"
import {bindChildren, bindProps} from "./utils"
/* eslint-disable prefer-arrow/prefer-arrow-functions */

type MathMLURI = "http://www.w3.org/1998/Math/MathML"
type XHTMLURI = "http://www.w3.org/1999/xhtml"
type SVGURI = "http://www.w3.org/2000/svg"

export type Namespaces = MathMLURI | XHTMLURI | SVGURI

// Letter to my future self: Yes I wrote these. The reason is because I was just overloading before,
// but you can't exclude strings in TS, and TS kept taking the most general overload signature.
// So this will still give type info for props and tag names while allowing an arbitrary namespace
// string to be used.
type KeyFromNamespace<T extends Namespaces | string | null> = T extends SVGURI
    ? keyof SVGElementTagNameMap
    : T extends MathMLURI
      ? keyof MathMLElementTagNameMap
      : string

type CreateElementNSReturnType<
    T extends Namespaces | string | null,
    K extends KeyFromNamespace<T>,
> = T extends SVGURI
    ? K extends keyof SVGElementTagNameMap
        ? SVGElementTagNameMap[K]
        : Element
    : T extends MathMLURI
      ? K extends keyof MathMLElementTagNameMap
          ? MathMLElementTagNameMap[K]
          : Element
      : Element

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
    props?: SVGElementProps<T> | null,
    ...children: ChildrenArrayType
): SVGElementTagNameMap[T]

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
    props?: ElementProps | null,
    ...children: ChildrenArrayType
): MathMLElementTagNameMap[T]

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
    namespaceURI: null,
    tagName: string,
    props?: ElementProps | null,
    ...children: ChildrenArrayType
): Element

/**
 * Creates a namespaced Element. This is the most general overload that allows for any arbitrary
 * string to be passed in to the `namespaceURI` param.
 *
 * @param namespaceURI - W3 namespace URI
 * @param tagName - Name of element
 * @param props - Element properties, such as class, id, style, etc
 * @param children - Children of this element. Can be nothing, number, string, boolean, bigint, or
 *   more elements. An array will create multiple, flattened children.
 * @returns Element
 */
export function createElementNS<
    T extends Namespaces | string | null,
    K extends KeyFromNamespace<T>,
>(
    namespaceURI: T,
    tagName: K,
    props?:
        | (T extends SVGURI
              ? K extends keyof SVGElementTagNameMap
                  ? SVGElementProps<K>
                  : ElementProps
              : ElementProps)
        | null,
    ...children: ChildrenArrayType
): CreateElementNSReturnType<T, K>

export function createElementNS(
    namespaceURI: Namespaces | string | null,
    tagName: string,
    props?: ElementProps | null,
    ...children: ChildrenArrayType
): Element {
    const element = document.createElementNS(namespaceURI, tagName)

    bindProps(element, props, true)

    bindChildren(element, children)

    return element
}

export default createElementNS
