import type {AllHTMLAttributes, HTMLAttributes, SVGAttributes} from "./react"
import type {
    ElementAttributes,
    HTMLAttributeDeprecatedTagNameMap,
    HTMLAttributeTagNameMap,
} from "./dom"
import type {Ref} from "../createRef"

export type ChildType = Node | boolean | number | BigInt | string | null | undefined

/** All types the children parameter can be */
export type ChildrenType = (ChildrenType | ChildType)[]

export interface EventMap extends HTMLElementEventMap, HTMLMediaElementEventMap {
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    "": Event
}

export type EventFunc<T extends keyof EventMap = ""> = (e: EventMap[T]) => void

export type EventFuncs = {
    [name in keyof EventMap]: EventFunc<name>
}

/**
 * This has the issue where `T` cannot be generalized. E.g you can't put a ref for HTMLElement into
 * a div element (even though HTMLDivElement inherits HTMLElement). You also can't put a ref for
 * HTMLDivElement | HTMLButtonElement into a div element. The ref type must be exactly
 * HTMLDivElement and optionally, null. I tried fixing this to no avail, also @types/react has the
 * same problem, so I don't feel too bad about it.
 */
export type RefProp<T extends Node> = Ref<T | null> | Ref<T> | (Ref<T | null> | Ref<T>)[]

export interface GeneralProps<T extends Node = Node> {
    [key: string]:
        | boolean
        | number
        | BigInt
        | string
        | Element
        | EventFuncs[keyof EventFuncs]
        | RefProp<T>
        | undefined
}

export interface ExtraEvents {
    // Additional events:
    onAnimationCancel?: EventFunc<"animationcancel"> | undefined
    onCancel?: EventFunc<"cancel"> | undefined
    onClose?: EventFunc<"close"> | undefined
    onCueChange?: EventFunc<"cuechange"> | undefined
    onFocusIn?: EventFunc<"focusin"> | undefined
    onFocusOut?: EventFunc<"focusout"> | undefined
    onFormData?: EventFunc<"formdata"> | undefined
    onGotPointerCapture?: EventFunc<"gotpointercapture"> | undefined
    onLostPointerCapture?: EventFunc<"lostpointercapture"> | undefined
    onScrollEnd?: EventFunc<"scrollend"> | undefined
    onSecurityPolicyViolation?: EventFunc<"securitypolicyviolation"> | undefined
    onSelectionChange?: EventFunc<"selectionchange"> | undefined
    onSelectStart?: EventFunc<"selectstart"> | undefined
    onSlotChange?: EventFunc<"slotchange"> | undefined
    onToggle?: EventFunc<"toggle"> | undefined
    onTransitionCancel?: EventFunc<"transitioncancel"> | undefined
    onTransitionRun?: EventFunc<"transitionrun"> | undefined
    onTransitionStart?: EventFunc<"transitionstart"> | undefined
    onWebkitAnimationEnd?: EventFunc<"webkitanimationend"> | undefined
    onWebkitAnimationIteration?: EventFunc<"webkitanimationiteration"> | undefined
    onWebkitAnimationStart?: EventFunc<"webkitanimationstart"> | undefined
    onWebkitTransitionEnd?: EventFunc<"webkittransitionend"> | undefined
}

// General props

export type PropsWithRef<T extends Node, K extends {}> = {ref?: RefProp<T>} & K

export type PropsWithChildren<T> = T & {
    children?: ChildrenType | JSX.Element
}

export type DSElementProps<
    T extends Node = Node,
    K extends HTMLAttributes = AllHTMLAttributes,
> = PropsWithRef<T, GeneralProps<T> & ExtraEvents & K>

// Props for HTML, deprecated HTML, SVG, and general elements

export type HTMLElementProps<T extends keyof HTMLElementTagNameMap | string = string> =
    T extends keyof HTMLElementTagNameMap
        ? DSElementProps<HTMLElementTagNameMap[T], HTMLAttributeTagNameMap[T]>
        : DSElementProps<HTMLElement, HTMLAttributes>

export type AllHTMLElementProps = DSElementProps<HTMLElement, AllHTMLAttributes>

export type HTMLDeprecatedElementProps<T extends keyof HTMLElementDeprecatedTagNameMap> =
    DSElementProps<HTMLElementDeprecatedTagNameMap[T], HTMLAttributeDeprecatedTagNameMap[T]>

export type XHTMLElementProps<
    T extends
        | keyof HTMLElementTagNameMap
        | keyof HTMLElementDeprecatedTagNameMap
        | string = string,
> = T extends keyof HTMLElementTagNameMap
    ? DSElementProps<HTMLElement, HTMLAttributeTagNameMap[T]>
    : T extends keyof HTMLElementDeprecatedTagNameMap
      ? DSElementProps<HTMLElement, HTMLAttributeDeprecatedTagNameMap[T]>
      : DSElementProps<HTMLElement, HTMLAttributes>

export type SVGElementProps<T extends keyof SVGElementTagNameMap | string = string> =
    T extends keyof SVGElementTagNameMap
        ? DSElementProps<SVGElementTagNameMap[T], SVGAttributes>
        : DSElementProps<SVGElement, SVGAttributes>

export type ElementProps = DSElementProps<Element, ElementAttributes>
