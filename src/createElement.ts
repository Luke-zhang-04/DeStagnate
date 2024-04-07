import {
    ChildrenType,
    ElementProps,
    HTMLDeprecatedElementProps,
    HTMLElementProps,
    SVGElementProps,
    XHTMLElementProps,
} from "./types"
import {NamespaceURIMap, namespaces} from "./createElementNS"
import {bindChildren, bindProps} from "./utils"
/* eslint-disable prefer-arrow/prefer-arrow-functions */

// TODO: make children optional
export type FunctionComponent<
    Props extends {} | null | undefined,
    Children extends unknown[] = ChildrenType,
    Returns extends Node | JSX.Element = JSX.Element,
> = (props: Props, ...children: Children) => Returns

export type {FunctionComponent as FC}

/**
 * Creates an HTML element
 *
 * @param tagName - Name of HTML element
 * @param props - Element properties, such as class, id, style, etc
 * @param children - Children of this element. Can be nothing, number, string, boolean, bigint, or
 *   more elements. An array will create multiple, flattened children.
 * @returns HTML element
 * @throws {Error} - If `tagNameOrFunction` is not a string or function, an errow is thrown
 */
export function createElement<T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    props?: HTMLElementProps<T> | null,
    ...children: ChildrenType
): HTMLElementTagNameMap[T]

/**
 * Creates a deprecated HTML element
 *
 * @deprecated
 * @param tagName - Name of HTML element
 * @param props - Element properties, such as class, id, style, etc
 * @param children - Children of this element. Can be nothing, number, string, boolean, bigint, or
 *   more elements. An array will create multiple, flattened children.
 * @returns Deprecated HTML element
 * @throws {Error} - If `tagNameOrFunction` is not a string or function, an errow is thrown
 */
export function createElement<T extends keyof HTMLElementDeprecatedTagNameMap>(
    tagName: T,
    props?: HTMLDeprecatedElementProps<T> | null,
    ...children: ChildrenType
): HTMLElementDeprecatedTagNameMap[T]

/**
 * Creates an SVG element
 *
 * @param tagName - In the format of `svg:tagName`
 * @param props - Element properties, such as class, id, style, etc
 * @param children - Children of this element. Can be nothing, number, string, boolean, bigint, or
 *   more elements. An array will create multiple, flattened children.
 * @returns SVG elment
 * @throws {Error} - If `tagNameOrFunction` is not a string or function, an errow is thrown
 */
export function createElement<T extends keyof SVGElementTagNameMap>(
    tagName: `svg:${T}`,
    props?: SVGElementProps<T> | null,
    ...children: ChildrenType
): SVGElementTagNameMap[T]

/**
 * Creates an XHTML element
 *
 * @param tagName - In the format of `xhtml:tagName`
 * @param props - Element properties, such as class, id, style, etc
 * @param children - Children of this element. Can be nothing, number, string, boolean, bigint, or
 *   more elements. An array will create multiple, flattened children.
 * @returns XHTML elment
 * @throws {Error} - If `tagNameOrFunction` is not a string or function, an errow is thrown
 */
export function createElement<
    T extends keyof HTMLElementTagNameMap | keyof HTMLElementDeprecatedTagNameMap,
>(
    tagName: `xhtml:${T}`,
    props?: XHTMLElementProps<T> | null,
    ...children: ChildrenType
): HTMLElement

/**
 * Creates a mathML element
 *
 * @param tagName - In the format of `mathML:tagName`
 * @param props - Element properties, such as class, id, style, etc
 * @param children - Children of this element. Can be nothing, number, string, boolean, bigint, or
 *   more elements. An array will create multiple, flattened children.
 * @returns MathML elment
 * @throws {Error} - If `tagNameOrFunction` is not a string or function, an errow is thrown
 */
export function createElement<T extends keyof MathMLElementTagNameMap>(
    tagName: `mathML:${T}`,
    props?: ElementProps | null,
    ...children: ChildrenType
): MathMLElementTagNameMap[T]

/**
 * Creates a namespaced element
 *
 * @param tagName - In the format of `namespaceName:tagName`, where `namespaceName` is one of
 *   "xml", "xlink", or "xmlns"
 * @param props - Element properties, such as class, id, style, etc
 * @param children - Children of this element. Can be nothing, number, string, boolean, bigint, or
 *   more elements. An array will create multiple, flattened children.
 * @returns Element
 * @throws {Error} - If `tagNameOrFunction` is not a string or function, an errow is thrown
 */
export function createElement(
    tagName: `${Exclude<keyof NamespaceURIMap, "svg" | "xhtml" | "mathML">}:${string}`,
    props?: ElementProps | null,
    ...children: ChildrenType
): Element

/**
 * Creates a function component
 *
 * @param func - Function component
 * @param props - Props of function component
 * @param children - Children of this element. Can be nothing, number, string, boolean, bigint, or
 *   more elements. An array will create multiple, flattened children.
 * @returns Element
 * @throws {Error} - If `tagNameOrFunction` is not a string or function, an errow is thrown
 */
export function createElement<
    Props extends {} | null,
    Children extends unknown[],
    Returns extends Node | JSX.Element,
>(
    ...[func, props, ...children]: [
        func: FunctionComponent<Props, Children, Returns>,
        ...(Props extends null ? [props?: Props | undefined] : [props: Props]),
        ...children: Children,
    ]
): Returns

/**
 * @param tagNameOrFunction - Name of HTML element or function component
 * @param props - Props of element or component
 *
 *   1. If `tagNameOrFunction` is tagname, props are element properties, such as class, id, style, etc
 *   2. If `tagNameOrFunction` is a function, props are that functions parameters
 *
 * @param children - Children of this element. Can be nothing, number, string, boolean, bigint, or
 *   more elements. An array will create multiple, flattened children.
 * @returns Element
 * @throws {Error} - If `tagNameOrFunction` is not a string or function, an errow is thrown
 */
export function createElement<T extends string | {[key: string]: unknown} | null, Returns = void>(
    tagNameOrFunction: T | ((_props: T, ..._children: ChildrenType) => Returns),
    props?: HTMLElementProps[T extends string ? T : ""] | null | T | undefined,
    ...children: ChildrenType
): Element | Returns {
    if (typeof tagNameOrFunction === "string") {
        const [namespace, tagName] = tagNameOrFunction.split(":") as [string, string | undefined]
        const isNS = namespace !== undefined
        const element =
            isNS && namespace in namespaces
                ? document.createElementNS(
                      namespaces[namespace as keyof typeof namespaces],
                      tagName!,
                  )
                : document.createElement(tagNameOrFunction)

        // If `tagNameOrFunction` is a string, then the previous overload should've enforced that
        // the props are `HTMLElementProps` or `null`
        bindProps(element, props as ElementProps | null, isNS)
        bindChildren(element, children)

        return element
    } else if (typeof tagNameOrFunction === "function") {
        // If `tagNameOrFunction` is a function, then the previous overload should've enforced that
        // the props are set by the function (`T`)
        return tagNameOrFunction((props ?? null) as T, children)
    }

    throw new Error(`Invalid element type ${typeof tagNameOrFunction}: ${tagNameOrFunction}`)
}

export default createElement
