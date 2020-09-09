/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.0
 * @file share functions and types for createElement and it's variants
 */

import DeStagnate from "."
import type {Ref} from "./createRef"

/* eslint-disable one-var, @typescript-eslint/no-explicit-any */

export type ChildrenFlatArrayType = (HTMLElement
    | Element
    | number
    | string
    | DeStagnate<any, any>
)[]

export type ChildrenArrayType = ChildrenFlatArrayType
    | ChildrenArrayType[]

/**
 * All types the children parameter can be
 */
export type ChildrenType = HTMLElement
    | string 
    | number 
    | ChildrenArrayType
    | Element
    | DeStagnate<any, any>

export type EventFunc = (e: Event)=> void

/**
 * Binds children to element
 * @package
 * @param element - element to bind
 * @param props - props to bind with
 * @param ns - if namespace element
 * @returns void
 */
export const bindProps = (
    element: Element,
    props?: {[key: string]: string | number | Element | Ref | EventFunc} | null,
    ns = false,
): void => {
    if (props) {
        for (const [key, val] of Object.entries(props)) {
            if (typeof(val) === "string" || typeof(val) === "number") {
                if (key === "innerHTML") {
                    element.innerHTML = val.toString()
                } else if (ns) {
                    element.setAttributeNS(null, key, val.toString())
                } else {
                    element.setAttribute(key, val.toString())
                }
            } else if (key.slice(0, 2) === "on") { // Works such as onClick, onAnimationEnd, etc.
                if (typeof(val) === "function") {
                    element.addEventListener(
                        key.slice(2)
                            .toLowerCase() as keyof HTMLElementEventMap,
                        val
                    )
                }
            } else if (
                key === "ref" &&
                typeof(val) === "object" &&
                "current" in val
            ) {
                (val as Ref<Element>).current = element
            } else {
                console.warn(`WARN: Invalid prop type "${typeof(val)}" for key "${key}". Skipping prop.`)
            }
        }
    }
}

export const unpackChildren = (
    children: ChildrenArrayType,
): ChildrenFlatArrayType => {
    const newChildren = []
    
    for (const child of children) {
        if (typeof(child) === "object" && child instanceof Array) {
            newChildren.push(...unpackChildren(child))
        } else {
            newChildren.push(child)
        }
    }

    return newChildren as ChildrenFlatArrayType
}

/**
 * Binds children to element
 * @package
 * @param element - element to bind
 * @param children - children to bind with
 * @returns void
 */
export const bindChildren = (
    element: Element,
    children?: ChildrenType,
): void => {
    if (children !== null && children !== undefined) {
        if (children instanceof Array) {
            for (const child of children) {
                bindChildren(element, child)
            }
        } else if (
            typeof(children) === "string" ||
            typeof(children) === "number"
        ) {
            (element as HTMLElement).innerText = children.toString()
        } else if (children instanceof DeStagnate) {
            if (!children.didMount && element instanceof window.HTMLElement) {
                children.mount(element)
                
                return
            } else if (!(element instanceof window.HTMLElement)) {
                throw new Error("Cannot use non-HTMLElement as component parent")
            }

            if (children.parent !== element) {
                children.parent = element
            }

            children.forceUpdate()
        } else {
            element.appendChild(children)
        }
    }
}
