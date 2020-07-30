/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * 
 * Copyright (C) 2020 Luke Zhang luke-zhang-04.github.io 
 * MIT License
 * 
 * @version 1.5.2
 * @exports Events
 * @package
 */

type El = (
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
export default class Events {

    /**
     * Binds event listeners event
     * Do not call manually
     * @protected
     * @instance
     * @pacakge
     * @param {HTMLElement} element - element to bind listeners to
     * @returns {void} void;
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
     * @param {HTMLElement} element - element to bind listeners to
     * @returns {void} void;
     */
    protected unbindEventListeners = (element: HTMLElement): void => {
        this._eventListener(element.removeEventListener)
    }

    /**
     * Focus event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onFocus = (): void => undefined

    /**
     * Blur event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onBlur = (): void => undefined

    /**
     * Focus in event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onFocusIn = (): void => undefined

    /**
     * Focus out event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onFocusOut = (): void => undefined

    /**
     * Animation start event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onAnimationStart = (): void => undefined

    /**
     * Animation cancel event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onAnimationCancel = (): void => undefined

    /**
     * Animation end event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onAnimationEnd = (): void => undefined

    /**
     * Animation iteration event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onAnimationIteration = (): void => undefined


    /**
     * Transition start event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onTransitionStart = (): void => undefined

    /**
     * Transition cancel event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onTransitionCancel = (): void => undefined

    /**
     * Transition end event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onTransitionEnd = (): void => undefined

    /**
     * Transition run event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onTransitionRun = (): void => undefined
    

    /**
     * Auxillary click event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onAuxClick = (): void => undefined

    /**
     * Click event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onClick = (): void => undefined

    /**
     * Double click event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onDblClick = (): void => undefined

    /**
     * Mousedown event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onMouseDown = (): void => undefined

    /**
     * Mouse enter event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onMouseEnter = (): void => undefined

    /**
     * Mouse leave event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onMouseLeave = (): void => undefined

    /**
     * Mouse move event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onMouseMove = (): void => undefined

    /**
     * Mouseover event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onMouseOver = (): void => undefined

    /**
     * Mouseout event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onMouseOut = (): void => undefined

    /**
     * Mouseup event
     * @protected
     * @instance
     * @returns {void}
     */
    protected onMouseUp = (): void => undefined

    private _eventListener = (el: El): void => {
        for (const [event, callback] of Object.entries(this._events())) {
            el(event, callback)
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
