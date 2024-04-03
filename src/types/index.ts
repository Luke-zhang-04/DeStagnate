/* eslint-disable @typescript-eslint/no-explicit-any */

import type {Ref} from "../createRef"
import type {AllHTMLAttributes} from "./react"

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

export interface EventMap extends HTMLElementEventMap, HTMLMediaElementEventMap {
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    "": Event
}

export type EventFunc<T extends keyof EventMap = ""> = (e: EventMap[T]) => void

export type EventFuncs = {
    [name in keyof EventMap]: EventFunc<name>
}

export type RefProp<T extends Node> = Ref<T | null> | Ref<T | null>[] | Ref<T> | Ref<T>[]

export interface BasicProps<T extends Node = Node> extends AllHTMLAttributes {
    // eslint-disable-next-line
    [key: string]:
        | boolean
        | number
        | BigInt
        | string
        | Element
        | RefProp<T>
        | EventFuncs[keyof EventFuncs]
        | undefined
    ref?: RefProp<T>

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
