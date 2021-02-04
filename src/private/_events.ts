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

import {EventListener, EventMember, EventsList} from "./_eventsUtils"
import {Preset as BaseComponent} from "./_base"

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
    protected bindEventListeners = (element: HTMLElement): void => {
        this._eventListener(element.addEventListener)
    }

    /**
     * Binds event listeners event
     * Do not call manually
     * @pacakge
     */
    protected unbindEventListeners = (element: HTMLElement): void => {
        this._eventListener(element.removeEventListener)
    }

    private _eventListener = (eventListener: EventListener): void => {
        type Events = [event: string, callback: EventListenerOrEventListenerObject][]

        for (const [event, callback] of Object.entries(this._events()) as Events) {
            if (callback !== undefined) {
                eventListener(event, callback)
            }
        }
    }

    private _events = (): EventsList => ({
        focus: this.onFocus,
        blur: this.onBlur,
        focusin: this.onFocusIn,
        focusout: this.onFocusOut,

        animationstart: this.onAnimationStart,
        animationcancel: this.onAnimationCancel,
        animationend: this.onAnimationEnd,
        animationiteration: this.onAnimationIteration,

        transitionstart: this.onTransitionStart,
        transitioncancel: this.onTransitionCancel,
        transitionend: this.onTransitionEnd,
        transitionrun: this.onTransitionRun,

        auxclick: this.onAuxClick,
        click: this.onClick,
        dblclick: this.onDblClick,
        mousedown: this.onMouseDown,
        mouseenter: this.onMouseEnter,
        mouseleave: this.onMouseLeave,
        mousemove: this.onMouseMove,
        mouseover: this.onMouseOver,
        mouseout: this.onMouseOut,
        mouseup: this.onMouseUp,
    })

}
