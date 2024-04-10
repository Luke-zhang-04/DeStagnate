import {ChildrenType, ElementProps, SVGElementProps, XHTMLElementProps} from "./types"
import {bindChildren, bindProps} from "./utils"
/* eslint-disable prefer-arrow/prefer-arrow-functions */

/**
 * All HTML namespaces
 *
 * @see {@link https://www.w3.org/TR/2011/WD-html5-20110405/namespaces.html}
 */
export const namespaces = Object.freeze({
    xml: "http://www.w3.org/XML/1998/namespace",
    mathML: "http://www.w3.org/1998/Math/MathML",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    svg: "http://www.w3.org/2000/svg",
    xmlns: "http://www.w3.org/2000/xmlns/",
})

export type NamespaceURIMap = typeof namespaces

export type MathMLURI = NamespaceURIMap["mathML"]
export type XHTMLURI = NamespaceURIMap["xhtml"]
export type SVGURI = NamespaceURIMap["svg"]

export type NamespaceURIs = NamespaceURIMap[keyof NamespaceURIMap]

// Letter to my future self: Yes I wrote these. The reason is because I was just overloading before,
// but you can't exclude strings in TS, and TS kept taking the most general overload signature when
// inputting namespace URIs. So this will still give type info for props and tag names while
// allowing an arbitrary namespace string to be used.
type KeyFromNamespace<T extends NamespaceURIs | (string & {}) | null> = T extends SVGURI
    ? keyof SVGElementTagNameMap
    : T extends XHTMLURI
      ? keyof HTMLElementTagNameMap | keyof HTMLElementDeprecatedTagNameMap
      : T extends MathMLURI
        ? keyof MathMLElementTagNameMap
        : string

type CreateElementNSReturnType<
    T extends NamespaceURIs | (string & {}) | null,
    K extends KeyFromNamespace<T>,
> = T extends SVGURI
    ? K extends keyof SVGElementTagNameMap
        ? SVGElementTagNameMap[K]
        : never
    : T extends XHTMLURI
      ? T extends keyof HTMLElementTagNameMap | keyof HTMLElementDeprecatedTagNameMap
          ? HTMLElement
          : never
      : T extends MathMLURI
        ? K extends keyof MathMLElementTagNameMap
            ? MathMLElementTagNameMap[K]
            : never
        : Element

/**
 * Creates an SVG Element
 *
 * @deprecated Use `createElement("svg:tagname")` instead
 * @param namespaceURI - W3 SVG namespace URI
 * @param tagName - Name of element
 * @param props - Element properties, such as class, id, style, etc
 * @param children - Children of this element. Can be nothing, number, string, boolean, bigint, or
 *   more elements. An array will create multiple, flattened children.
 * @returns SVG element
 */
export function createElementNS<T extends keyof SVGElementTagNameMap>(
    namespaceURI: SVGURI,
    tagName: T,
    props?: SVGElementProps<T> | null,
    ...children: ChildrenType
): SVGElementTagNameMap[T]

/**
 * Creates an XHTML element
 *
 * @deprecated Use `createElement("xhtml:tagname")` instead
 * @param namespaceURI - W3 XHTML namespace URI
 * @param tagName - Name of element
 * @param props - Element properties, such as class, id, style, etc
 * @param children - Children of this element. Can be nothing, number, string, boolean, bigint, or
 *   more elements. An array will create multiple, flattened children.
 * @returns XHTML element
 */
export function createElementNS<
    T extends keyof HTMLElementTagNameMap | keyof HTMLElementDeprecatedTagNameMap,
>(
    namespaceURI: XHTMLURI,
    tagName: T,
    props?: XHTMLElementProps<T> | null,
    ...children: ChildrenType
): HTMLElement

/**
 * Creates an MathML element
 *
 * @deprecated Use `createElement("mathML:tagname")` instead
 * @param namespaceURI - W3 MathML namespace URI
 * @param tagName - Name of element
 * @param props - Element properties, such as class, id, style, etc
 * @param children - Children of this element. Can be nothing, number, string, boolean, bigint, or
 *   more elements. An array will create multiple, flattened children.
 * @returns MathML element
 */
export function createElementNS<T extends keyof MathMLElementTagNameMap>(
    namespaceURI: MathMLURI,
    tagName: T,
    props?: ElementProps | null,
    ...children: ChildrenType
): MathMLElementTagNameMap[T]

/**
 * Creates a namespaced Element. This is the most general overload that allows for any arbitrary
 * string to be passed in to the `namespaceURI` param.
 *
 * @deprecated Use `createElement("xml|xlink|xmlns:tagname")` instead
 * @param namespaceURI - W3 namespace URI
 * @param tagName - Name of element
 * @param props - Element properties, such as class, id, style, etc
 * @param children - Children of this element. Can be nothing, number, string, boolean, bigint, or
 *   more elements. An array will create multiple, flattened children.
 * @returns Element
 */
export function createElementNS(
    namespaceURI: Exclude<NamespaceURIs, MathMLURI | XHTMLURI | SVGURI>,
    tagName: string,
    props?: ElementProps | null,
    ...children: ChildrenType
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
export function createElementNS(
    namespaceURI: null,
    tagName: string,
    props?: ElementProps | null,
    ...children: ChildrenType
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
    T extends NamespaceURIs | (string & {}) | null,
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
    ...children: ChildrenType
): CreateElementNSReturnType<T, K>

export function createElementNS(
    namespaceURI: NamespaceURIs | (string & {}) | null,
    tagName: string,
    props?: ElementProps | null,
    ...children: ChildrenType
): Element {
    const element = document.createElementNS(namespaceURI, tagName)

    bindProps(element, props, true)

    bindChildren(element, children)

    return element
}

export default createElementNS
