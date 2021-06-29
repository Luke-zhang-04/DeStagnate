/**
 * Component A simple, ReactJS inspired library to create dynamic components within static sites easier
 *
 * @license MIT
 * @author Luke Zhang luke-zhang-04.github.io
 * @file share Functions and types for createElement and it's variants
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */

import type {Component} from "../component"
import type {Ref} from "../createRef"
import url from "./_url"

/* eslint-disable one-var, @typescript-eslint/no-explicit-any */

export type ChildrenFlatArrayType = (
    | HTMLElement
    | Element
    | number
    | string
    | Component<any, any>
)[]

export type ChildrenArrayType = ChildrenFlatArrayType | ChildrenArrayType[]

/** All types the children parameter can be */
export type ChildrenType =
    | ChildrenType[]
    | string
    | number
    | ChildrenArrayType
    | Node
    | Component<any, any>

interface EventMap extends HTMLElementEventMap {
    "": Event
}

export type EventFunc<T extends keyof EventMap = ""> = (e: EventMap[T]) => void

export interface BasicProps {
    // eslint-disable-next-line
    [key: string]: string | number | Element | Ref | EventFunc<keyof EventFunc> | undefined
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
            if (typeof val === "string" || typeof val === "number") {
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
                ;(val as Ref<Element>).current = element
            } else if (val !== undefined) {
                console.warn(`${typeof val} is not a valid DeStagnate child`)
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
    if (children !== null && children !== undefined) {
        if (children instanceof Array) {
            children.forEach((child: ChildrenType) => bindChildren(element, child))
        } else if (typeof children === "string" || typeof children === "number") {
            element.appendChild(document.createTextNode(children.toString()))
        } else if (children instanceof Node) {
            element.appendChild(children)
        } else {
            if (!children.didMount && element instanceof window.HTMLElement) {
                children.mount(element)

                return
            } else if (!(element instanceof window.HTMLElement)) {
                throw new Error(`ERROR: code 3. See ${url}`)
            }

            if (children.parent !== element) {
                children.parent = element
            }

            children.forceUpdate()
        }
    }
}
