/**
 * DeStagnate A simple, ReactJS inspired library to create dynamic components within static sites easier
 *
 * @license MIT
 * @author Luke Zhang luke-zhang-04.github.io
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @exports Events
 * @package
 */

export type EventListener = (
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
) => void

type EventMember<K extends keyof HTMLElementEventMap> = (
    event: HTMLElementEventMap[K],
) => unknown | undefined

type WindowEventMember<K extends keyof WindowEventMap> = (
    event: WindowEventMap[K],
) => unknown | undefined

export interface Events {
    /** Focus event */
    onFocus?: EventMember<"focus">

    /** Blur event */
    onBlur?: EventMember<"blur">

    /** Focus in event */
    onFocusIn?: EventMember<"focusin">

    /** Focus out event */
    onFocusOut?: EventMember<"focusout">

    /** Animation start event */
    onAnimationStart?: EventMember<"animationstart">

    /** Animation cancel event */
    onAnimationCancel?: EventMember<"animationcancel">

    /** Animation end event */
    onAnimationEnd?: EventMember<"animationend">

    /** Animation iteration event */
    onAnimationIteration?: EventMember<"animationiteration">

    /** Transition start event */
    onTransitionStart?: EventMember<"transitionstart">

    /** Transition cancel event */
    onTransitionCancel?: EventMember<"transitioncancel">

    /** Transition end event */
    onTransitionEnd?: EventMember<"transitionend">

    /** Transition run event */
    onTransitionRun?: EventMember<"transitionrun">

    /** Auxillary click event */
    onAuxClick?: EventMember<"auxclick">

    /** Click event */
    onClick?: EventMember<"click">

    /** Double click event */
    onDblClick?: EventMember<"dblclick">

    /** Mousedown event */
    onMouseDown?: EventMember<"mousedown">

    /** Mouse enter event */
    onMouseEnter?: EventMember<"mouseenter">

    /** Mouse leave event */
    onMouseLeave?: EventMember<"mouseleave">

    /** Mouse move event */
    onMouseMove?: EventMember<"mousemove">

    /** Mouseover event */
    onMouseOver?: EventMember<"mouseover">

    /** Mouseout event */
    onMouseOut?: EventMember<"mouseout">

    /** Mouseup event */
    onMouseUp?: EventMember<"mouseup">

    /** Wheel event */
    onWheel?: EventMember<"wheel">

    /** Window load event */
    onLoad?: WindowEventMember<"load">

    /** Window online event */
    onOnline?: WindowEventMember<"online">

    /** Window offline event */
    onOffline?: WindowEventMember<"offline">

    /** Window resize event */
    onResize?: WindowEventMember<"resize">

    /**
     * Window scroll event
     *
     * WARN: USE CONSERVATIVELY - the callback is called every time a window is scrolled even
     * slightly. This means that it can trigger a lot of DOM reflows if you're not careful
     */
    onScroll?: WindowEventMember<"scroll">

    /** Window keydown event */
    onKeyDown?: WindowEventMember<"keydown">

    /** Window keypress event */
    onKeyPress?: WindowEventMember<"keypress">

    /** Window keyup event */
    onKeyUp?: WindowEventMember<"keyup">
}

export const eventNames: (keyof Events)[] = [
    "onFocus",
    "onBlur",
    "onFocusIn",
    "onFocusOut",
    "onAnimationStart",
    "onAnimationCancel",
    "onAnimationEnd",
    "onAnimationIteration",
    "onTransitionStart",
    "onTransitionCancel",
    "onTransitionEnd",
    "onTransitionRun",
    "onAuxClick",
    "onClick",
    "onDblClick",
    "onMouseDown",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseOver",
    "onMouseOut",
    "onMouseUp",
    "onWheel",
]
export const windowEventNames: (keyof Events)[] = [
    "onLoad",
    "onOnline",
    "onOffline",
    "onResize",
    "onScroll",
    "onKeyDown",
    "onKeyPress",
    "onKeyUp",
]
