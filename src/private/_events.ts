/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports Events
 * @package
 */

import BaseComponent from "./_base"

type EventListenerBinder = <T extends keyof EventsList>(
    type: T,
    listener: (event: HTMLElementEventMap[T])=> void,
    options?: boolean | AddEventListenerOptions
)=> void

type EventFunc<T extends Event> = (
    event: T
)=> void

interface EventsList {
    focus: EventFunc<FocusEvent>,
    blur: EventFunc<FocusEvent>,
    focusin: EventFunc<FocusEvent>,
    focusout: EventFunc<FocusEvent>,

    animationstart: EventFunc<AnimationEvent>,
    animationcancel: EventFunc<AnimationEvent>,
    animationend: EventFunc<AnimationEvent>,
    animationiteration: EventFunc<AnimationEvent>,

    transitionstart: EventFunc<TransitionEvent>,
    transitioncancel: EventFunc<TransitionEvent>,
    transitionend: EventFunc<TransitionEvent>,
    transitionrun: EventFunc<TransitionEvent>,

    auxclick: EventFunc<MouseEvent>,
    click: EventFunc<MouseEvent>,
    dblclick: EventFunc<MouseEvent>,
    mousedown: EventFunc<MouseEvent>,
    mouseenter: EventFunc<MouseEvent>,
    mouseleave: EventFunc<MouseEvent>,
    mousemove: EventFunc<MouseEvent>,
    mouseover: EventFunc<MouseEvent>,
    mouseout: EventFunc<MouseEvent>,
    mouseup: EventFunc<MouseEvent>,
}

/* istanbul ignore next */
export default abstract class Events extends BaseComponent {

    /**
     * Focus event
     * @protected
     * @instance
     * @returns void
     */
    protected onFocus: EventFunc<FocusEvent> | undefined = undefined

    /**
     * Blur event
     * @protected
     * @instance
     * @returns void
     */
    protected onBlur: EventFunc<FocusEvent> | undefined = undefined

    /**
     * Focus in event
     * @protected
     * @instance
     * @returns void
     */
    protected onFocusIn: EventFunc<FocusEvent> | undefined = undefined

    /**
     * Focus out event
     * @protected
     * @instance
     * @returns void
     */
    protected onFocusOut: EventFunc<FocusEvent> | undefined = undefined

    /**
     * Animation start event
     * @protected
     * @instance
     * @returns void
     */
    protected onAnimationStart: EventFunc<AnimationEvent> | undefined = undefined

    /**
     * Animation cancel event
     * @protected
     * @instance
     * @returns void
     */
    protected onAnimationCancel: EventFunc<AnimationEvent> | undefined =
        undefined

    /**
     * Animation end event
     * @protected
     * @instance
     * @returns void
     */
    protected onAnimationEnd: EventFunc<AnimationEvent> | undefined = undefined

    /**
     * Animation iteration event
     * @protected
     * @instance
     * @returns void
     */
    protected onAnimationIteration: EventFunc<AnimationEvent> | undefined =
        undefined


    /**
     * Transition start event
     * @protected
     * @instance
     * @returns void
     */
    protected onTransitionStart: EventFunc<TransitionEvent> | undefined =
        undefined

    /**
     * Transition cancel event
     * @protected
     * @instance
     * @returns void
     */
    protected onTransitionCancel: EventFunc<TransitionEvent> | undefined =
        undefined

    /**
     * Transition end event
     * @protected
     * @instance
     * @returns void
     */
    protected onTransitionEnd: EventFunc<TransitionEvent> | undefined = undefined

    /**
     * Transition run event
     * @protected
     * @instance
     * @returns void
     */
    protected onTransitionRun: EventFunc<TransitionEvent> | undefined = undefined


    /**
     * Auxillary click event
     * @protected
     * @instance
     * @returns void
     */
    protected onAuxClick: EventFunc<MouseEvent> | undefined = undefined

    /**
     * Click event
     * @protected
     * @instance
     * @returns void
     */
    protected onClick: EventFunc<MouseEvent> | undefined = undefined

    /**
     * Double click event
     * @protected
     * @instance
     * @returns void
     */
    protected onDblClick: EventFunc<MouseEvent> | undefined = undefined

    /**
     * Mousedown event
     * @protected
     * @instance
     * @returns void
     */
    protected onMouseDown: EventFunc<MouseEvent> | undefined = undefined

    /**
     * Mouse enter event
     * @protected
     * @instance
     * @returns void
     */
    protected onMouseEnter: EventFunc<MouseEvent> | undefined = undefined

    /**
     * Mouse leave event
     * @protected
     * @instance
     * @returns void
     */
    protected onMouseLeave: EventFunc<MouseEvent> | undefined = undefined

    /**
     * Mouse move event
     * @protected
     * @instance
     * @returns void
     */
    protected onMouseMove: EventFunc<MouseEvent> | undefined = undefined

    /**
     * Mouseover event
     * @protected
     * @instance
     * @returns void
     */
    protected onMouseOver: EventFunc<MouseEvent> | undefined = undefined

    /**
     * Mouseout event
     * @protected
     * @instance
     * @returns void
     */
    protected onMouseOut: EventFunc<MouseEvent> | undefined = undefined

    /**
     * Mouseup event
     * @protected
     * @instance
     * @returns void
     */
    protected onMouseUp: EventFunc<MouseEvent> | undefined = undefined

    /**
     * Binds event listeners event
     * Do not call manually
     * @protectedauxclick
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

    /* eslint-disable */
    private _eventListener = (eventListener: EventListenerBinder): void => {
        this.onFocus && eventListener("focus", this.onFocus)
        this.onBlur && eventListener("blur", this.onBlur)
        this.onFocusIn && eventListener("focusin", this.onFocusIn)
        this.onFocusOut && eventListener("focusout", this.onFocusOut)

        this.onAnimationStart && eventListener("animationstart", this.onAnimationStart)
        this.onAnimationEnd && eventListener("animationend", this.onAnimationEnd)
        this.onAnimationCancel && eventListener("animationcancel", this.onAnimationCancel)
        this.onAnimationIteration && eventListener("animationiteration", this.onAnimationIteration)

        this.onTransitionStart && eventListener("transitionstart", this.onTransitionStart)
        this.onTransitionEnd && eventListener("transitionend", this.onTransitionEnd)
        this.onTransitionCancel && eventListener("transitioncancel", this.onTransitionCancel)
        this.onTransitionRun && eventListener("transitionrun", this.onTransitionRun)

        this.onAuxClick && eventListener("auxclick", this.onAuxClick)
        this.onDblClick && eventListener("dblclick", this.onDblClick)
        this.onClick && eventListener("click", this.onClick)
        this.onDblClick && eventListener("dblclick", this.onDblClick)
        this.onMouseDown && eventListener("mousedown", this.onMouseDown)
        this.onMouseEnter && eventListener("mouseenter", this.onMouseEnter)
        this.onMouseLeave && eventListener("mouseleave", this.onMouseLeave)
        this.onMouseMove && eventListener("mousemove", this.onMouseMove)
        this.onMouseOver && eventListener("mouseover", this.onMouseOver)
        this.onMouseOut && eventListener("mouseout", this.onMouseOut)
        this.onMouseUp && eventListener("mouseup", this.onMouseUp)
    }
    /* eslint-enable */

}
