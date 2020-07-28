/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.5.1
 * @exports Events
 * @package
 */

type El = (
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
)=> void

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
        const el = element.addEventListener

        console.log("BINDING")

        this._focusListeners(el)
        this._animationListeners(el)
        this._transitionListeners(el)
        this._mouseListeners(el)
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
        const el = element.removeEventListener

        this._focusListeners(el)
        this._animationListeners(el)
        this._transitionListeners(el)
        this._mouseListeners(el)
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

    private _focusListeners = (el: El): void => {
        el("focus", this.onFocus)
        el("blur", this.onBlur)
        el("focusin", this.onFocusIn)
        el("focusout", this.onFocusOut)
    }

    private _animationListeners = (el: El): void => {
        el("animationstart", this.onAnimationStart)
        el("animationcancel", this.onAnimationCancel)
        el("animationend", this.onAnimationEnd)
        el("animationiteration", this.onAnimationIteration)
    }

    private _transitionListeners = (el: El): void => {
        el("transitionstart", this.onTransitionStart)
        el("transitioncancel", this.onTransitionCancel)
        el("transitionend", this.onTransitionEnd)
        el("transitionrun", this.onTransitionRun)
    }

    private _mouseListeners = (el: El): void => {
        el("auxclick", this.onAuxClick)
        el("click", this.onClick)
        el("dblclick", this.onDblClick)
        el("mousedown", this.onMouseDown)
        el("mouseenter", this.onMouseEnter)
        el("mouseleave", this.onMouseLeave)
        el("mousemove", this.onMouseMove)
        el("mouseover", this.onMouseOver)
        el("mouseout", this.onMouseOut)
        el("mouseup", this.onMouseUp)
    }

}
