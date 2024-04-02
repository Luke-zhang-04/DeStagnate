import type {Ref} from "../createRef"

/* eslint-disable @typescript-eslint/no-explicit-any */

export type ChildrenFlatArrayType = (
    | boolean
    | number
    | BigInt
    | string
    | Node
    | null
    | undefined
)[]

export type ChildrenArrayType = ChildrenFlatArrayType | ChildrenArrayType[]

/** All types the children parameter can be */
export type ChildrenType =
    | ChildrenType[]
    | boolean
    | number
    | BigInt
    | string
    | ChildrenArrayType
    | Node
    | null
    | undefined

interface EventMap extends HTMLElementEventMap {
    "": Event
}

export type EventFunc<T extends keyof EventMap = ""> = (e: EventMap[T]) => void

export interface BasicProps {
    // eslint-disable-next-line
    [key: string]:
        | boolean
        | number
        | BigInt
        | string
        | Element
        | Ref
        | EventFunc<keyof EventFunc>
        | undefined
    class?: string
    ref?: Ref
    id?: string
    src?: string
    href?: string
    width?: number
    height?: number
    alt?: string
    style?: string
    title?: string

    onFocus?: EventFunc<"focus">
    onBlur?: EventFunc<"blur">
    onFocusIn?: EventFunc<"focusin">
    onFocusOut?: EventFunc<"focusout">

    onAnimationStart?: EventFunc<"animationstart">
    onAnimationCancel?: EventFunc<"animationcancel">
    onAnimationEnd?: EventFunc<"animationend">
    onAnimationIteration?: EventFunc<"animationiteration">

    onTransitionStart?: EventFunc<"transitionstart">
    onTransitionCancel?: EventFunc<"transitioncancel">
    onTransitionEnd?: EventFunc<"transitionend">
    onTransitionRun?: EventFunc<"transitionrun">

    onAuxClick?: EventFunc<"auxclick">
    onClick?: EventFunc<"click">
    onDblClick?: EventFunc<"dblclick">
    onMouseDown?: EventFunc<"mousedown">
    onMouseEnter?: EventFunc<"mouseenter">
    onMouseLeave?: EventFunc<"mouseleave">
    onMouseMove?: EventFunc<"mousemove">
    onMouseOver?: EventFunc<"mouseover">
    onMouseOut?: EventFunc<"mouseout">
    onMouseUp?: EventFunc<"mouseup">
}

/**
 * Binds children to element
 *
 * @param element - Element to bind
 * @param props - Props to bind with
 * @param ns - If namespace element
 * @returns Void
 * @package
 */
export const bindProps = (element: Element, props?: BasicProps | null, ns = false): void => {
    if (props) {
        for (const [key, val] of Object.entries(props)) {
            if (
                typeof val === "boolean" ||
                typeof val === "number" ||
                typeof val === "bigint" ||
                typeof val === "string"
            ) {
                if (key === "innerHTML") {
                    element.innerHTML = val.toString()
                } else if (ns) {
                    element.setAttributeNS(null, key, val.toString())
                } else {
                    element.setAttribute(key, val.toString())
                }
            } else if (key.slice(0, 2) === "on") {
                // Works such as onClick, onAnimationEnd, etc.
                if (typeof val === "function") {
                    element.addEventListener(
                        key.slice(2).toLowerCase() as keyof EventMap,
                        val as EventFunc,
                    )
                }
            } else if (key === "ref" && typeof val === "object" && "current" in val) {
                val.current = element
            } else if (val !== undefined && val !== null) {
                console.warn(`${typeof val} ${val} is not a valid DeStagnate prop`)
            }
        }
    }
}

/**
 * Binds children to element
 *
 * @param element - Element to bind
 * @param children - Children to bind with
 * @returns Void
 * @package
 */
export const bindChildren = (element: Node, children?: ChildrenType): void => {
    if (children !== null && children !== undefined && children !== false) {
        if (children instanceof Array) {
            for (const child of children) {
                bindChildren(element, child)
            }
        } else if (
            typeof children === "boolean" ||
            typeof children === "number" ||
            typeof children === "bigint" ||
            typeof children === "string"
        ) {
            element.appendChild(document.createTextNode(children.toString()))
        } else if (children instanceof Node) {
            element.appendChild(children)
        }
    }
}
