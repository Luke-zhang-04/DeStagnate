/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports Events
 * @package
 */

import {Preset as BaseComponent} from "./_base"

type EventListener = (
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
)=> void

type EventMember<
    K extends keyof HTMLElementEventMap,
> = (event: HTMLElementEventMap[K]) => unknown | undefined

const eventNames: (keyof Events)[] = [
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
]

export interface Events {

    /**
     * Focus event
     */
    onFocus?: EventMember<"focus">

    /**
     * Blur event
     */
    onBlur?: EventMember<"blur">

    /**
     * Focus in event
     */
    onFocusIn?: EventMember<"focusin">

    /**
     * Focus out event
     */
    onFocusOut?: EventMember<"focusout">

    /**
     * Animation start event
     */
    onAnimationStart?: EventMember<"animationstart">

    /**
     * Animation cancel event
     */
    onAnimationCancel?: EventMember<"animationcancel">

    /**
     * Animation end event
     */
    onAnimationEnd?: EventMember<"animationend">

    /**
     * Animation iteration event
     */
    onAnimationIteration?: EventMember<"animationiteration">


    /**
     * Transition start event
     */
    onTransitionStart?: EventMember<"transitionstart">

    /**
     * Transition cancel event
     */
    onTransitionCancel?: EventMember<"transitioncancel">

    /**
     * Transition end event
     */
    onTransitionEnd?: EventMember<"transitionend">

    /**
     * Transition run event
     */
    onTransitionRun?: EventMember<"transitionrun">


    /**
     * Auxillary click event
     */
    onAuxClick?: EventMember<"auxclick">

    /**
     * Click event
     */
    onClick?: EventMember<"click">

    /**
     * Double click event
     */
    onDblClick?: EventMember<"dblclick">

    /**
     * Mousedown event
     */
    onMouseDown?: EventMember<"mousedown">

    /**
     * Mouse enter event
     */
    onMouseEnter?: EventMember<"mouseenter">

    /**
     * Mouse leave event
     */
    onMouseLeave?: EventMember<"mouseleave">

    /**
     * Mouse move event
     */
    onMouseMove?: EventMember<"mousemove">

    /**
     * Mouseover event
     */
    onMouseOver?: EventMember<"mouseover">

    /**
     * Mouseout event
     */
    onMouseOut?: EventMember<"mouseout">

    /**
     * Mouseup event
     */
    onMouseUp?: EventMember<"mouseup">
}

/* istanbul ignore next */
export abstract class Events extends BaseComponent {

    /**
     * Binds event listeners event
     * Do not call manually
     * @pacakge
     */
    protected readonly bindEventListeners = (element: HTMLElement): void => {
        this._eventListener(element.addEventListener)
    }

    /**
     * Binds event listeners event
     * Do not call manually
     * @pacakge
     */
    protected readonly unbindEventListeners = (element: HTMLElement): void => {
        this._eventListener(element.removeEventListener)
    }

    private _eventListener = (eventListener: EventListener): void => {
        for (const eventName of eventNames) {
            const htmlEventName = eventName.slice(2, 0).toLowerCase(),
                callback = this[eventName]

            if (callback !== undefined && callback instanceof Function) {
                eventListener(htmlEventName, callback as EventListenerOrEventListenerObject)
            }
        }
    }

}
