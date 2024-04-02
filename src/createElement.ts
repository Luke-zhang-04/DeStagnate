import {
    BasicProps,
    ChildrenArrayType,
    bindChildren,
    bindProps,
} from "./internal/_createElementUtils"
/* eslint-disable prefer-arrow/prefer-arrow-functions */

/**
 * Creates an HTML Element
 *
 * @param tagName - Name of HTML element
 * @param props - Element properties, such as class, id, style, etc
 * @param children - Children of this element. Can be nothing, number (converted to string), string
 *   (text), or another element. An array of any of these will create multiple children
 * @returns Element
 */
export function createElement<T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    props?: BasicProps | null,
    ...children: ChildrenArrayType
): HTMLElementTagNameMap[T]

/**
 * Creates an HTML Element
 *
 * @param func - Function component
 * @param props - Props of function component
 * @param children - Children of this element. Can be nothing, number (converted to string), string
 *   (text), or another element. An array of any of these will create multiple children
 * @returns Element
 */
export function createElement<
    Props extends {[key: string]: unknown} | null | undefined,
    Returns extends HTMLElement | JSX.Element,
>(
    func: (props: Props, ...children: ChildrenArrayType) => Returns,
    props?: Props | null,
    ...children: ChildrenArrayType
): Returns

/**
 * @param tagNameOrFunction - Name of HTML element or function component
 * @param props - Props of element or component
 *
 *   1. If `tagNameOrFunction` is tagname, props are element properties, such as class, id, style, etc
 *   2. If `tagNameOrFunction` is a function, props are that functions parameters
 *
 * @param children - Children of this element. Can be nothing, number (converted to string), string
 *   (text), or another element. An array of any of these will create multiple children
 * @returns Element
 */
export function createElement<
    T extends string | {[key: string]: unknown} | null | undefined,
    Returns = void,
>(
    tagNameOrFunction: T | ((_props: T, ..._children: ChildrenArrayType) => Returns),
    props?: BasicProps | null | T,
    ...children: ChildrenArrayType
): HTMLElement | Returns | Error {
    if (typeof tagNameOrFunction === "string") {
        const element = document.createElement(tagNameOrFunction)

        bindProps(element, props as BasicProps | null)
        bindChildren(element, children)

        return element
    } else if (typeof tagNameOrFunction === "function") {
        return tagNameOrFunction(props as T, children)
    }

    return Error(`Invalid type: ${typeof tagNameOrFunction} ${tagNameOrFunction}`)
}

export default createElement
