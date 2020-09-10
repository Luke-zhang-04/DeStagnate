/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.0
 * @exports Events
 * @package
 */

import BaseComponent from "./_base"

type E = (
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
)=> void

interface EventsList {
    focus: EventListenerOrEventListenerObject,
    blur: EventListenerOrEventListenerObject,
    focusin: EventListenerOrEventListenerObject,
    focusout: EventListenerOrEventListenerObject,

    animationstart: EventListenerOrEventListenerObject,
    animationcancel: EventListenerOrEventListenerObject,
    animationend: EventListenerOrEventListenerObject,
    animationiteration: EventListenerOrEventListenerObject,

    transitionstart: EventListenerOrEventListenerObject,
    transitioncancel: EventListenerOrEventListenerObject,
    transitionend: EventListenerOrEventListenerObject,
    transitionrun: EventListenerOrEventListenerObject,

    auxclick: EventListenerOrEventListenerObject,
    click: EventListenerOrEventListenerObject,
    dblclick: EventListenerOrEventListenerObject,
    mousedown: EventListenerOrEventListenerObject,
    mouseenter: EventListenerOrEventListenerObject,
    mouseleave: EventListenerOrEventListenerObject,
    mousemove: EventListenerOrEventListenerObject,
    mouseover: EventListenerOrEventListenerObject,
    mouseout: EventListenerOrEventListenerObject,
    mouseup: EventListenerOrEventListenerObject,
}

/* istanbul ignore next */
export default abstract class Events extends BaseComponent {

    /**
     * Binds event listeners event
     * Do not call manually
     * @protected
     * @instance
     * @pacakge
     * @param element - element to bind listeners to
     * @returns void
     */
    protected bindEventListeners = (element: HTMLElement): void => {
        this._eventListener(element.addEventListener)
    }

    /**
     * Binds event listeners event
     * Do not call manually
     * @protected
     * @instance
     * @pacakge
     * @param element - element to bind listeners to
     * @returns void
     */
    protected unbindEventListeners = (element: HTMLElement): void => {
        this._eventListener(element.removeEventListener)
    }

    /**
     * Focus event
     * @protected
     * @instance
     * @returns
     */
    protected onFocus = (): void => undefined

    /**
     * Blur event
     * @protected
     * @instance
     * @returns
     */
    protected onBlur = (): void => undefined

    /**
     * Focus in event
     * @protected
     * @instance
     * @returns
     */
    protected onFocusIn = (): void => undefined

    /**
     * Focus out event
     * @protected
     * @instance
     * @returns
     */
    protected onFocusOut = (): void => undefined

    /**
     * Animation start event
     * @protected
     * @instance
     * @returns
     */
    protected onAnimationStart = (): void => undefined

    /**
     * Animation cancel event
     * @protected
     * @instance
     * @returns
     */
    protected onAnimationCancel = (): void => undefined

    /**
     * Animation end event
     * @protected
     * @instance
     * @returns
     */
    protected onAnimationEnd = (): void => undefined

    /**
     * Animation iteration event
     * @protected
     * @instance
     * @returns
     */
    protected onAnimationIteration = (): void => undefined


    /**
     * Transition start event
     * @protected
     * @instance
     * @returns
     */
    protected onTransitionStart = (): void => undefined

    /**
     * Transition cancel event
     * @protected
     * @instance
     * @returns
     */
    protected onTransitionCancel = (): void => undefined

    /**
     * Transition end event
     * @protected
     * @instance
     * @returns
     */
    protected onTransitionEnd = (): void => undefined

    /**
     * Transition run event
     * @protected
     * @instance
     * @returns
     */
    protected onTransitionRun = (): void => undefined


    /**
     * Auxillary click event
     * @protected
     * @instance
     * @returns
     */
    protected onAuxClick = (): void => undefined

    /**
     * Click event
     * @protected
     * @instance
     * @returns
     */
    protected onClick = (): void => undefined

    /**
     * Double click event
     * @protected
     * @instance
     * @returns
     */
    protected onDblClick = (): void => undefined

    /**
     * Mousedown event
     * @protected
     * @instance
     * @returns
     */
    protected onMouseDown = (): void => undefined

    /**
     * Mouse enter event
     * @protected
     * @instance
     * @returns
     */
    protected onMouseEnter = (): void => undefined

    /**
     * Mouse leave event
     * @protected
     * @instance
     * @returns
     */
    protected onMouseLeave = (): void => undefined

    /**
     * Mouse move event
     * @protected
     * @instance
     * @returns
     */
    protected onMouseMove = (): void => undefined

    /**
     * Mouseover event
     * @protected
     * @instance
     * @returns
     */
    protected onMouseOver = (): void => undefined

    /**
     * Mouseout event
     * @protected
     * @instance
     * @returns
     */
    protected onMouseOut = (): void => undefined

    /**
     * Mouseup event
     * @protected
     * @instance
     * @returns
     */
    protected onMouseUp = (): void => undefined

    private _eventListener = (eventListener: E): void => {
        for (const [event, callback] of Object.entries(this._events())) {
            eventListener(event, callback)
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
