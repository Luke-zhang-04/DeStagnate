/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.1
 * @exports Events
 * @package
 */

import objectEntries, {EventListener, EventMember, EventsList} from "./_eventsUtils"
import BaseComponent from "./_base"


/* istanbul ignore next */
export default abstract class Events extends BaseComponent {

    /**
     * Focus event
     * @protected
     * @instance
     * @returns
     */
    protected onFocus: EventMember = undefined

    /**
     * Blur event
     * @protected
     * @instance
     * @returns
     */
    protected onBlur: EventMember = undefined

    /**
     * Focus in event
     * @protected
     * @instance
     * @returns
     */
    protected onFocusIn: EventMember = undefined

    /**
     * Focus out event
     * @protected
     * @instance
     * @returns
     */
    protected onFocusOut: EventMember = undefined

    /**
     * Animation start event
     * @protected
     * @instance
     * @returns
     */
    protected onAnimationStart: EventMember = undefined

    /**
     * Animation cancel event
     * @protected
     * @instance
     * @returns
     */
    protected onAnimationCancel: EventMember = undefined

    /**
     * Animation end event
     * @protected
     * @instance
     * @returns
     */
    protected onAnimationEnd: EventMember = undefined

    /**
     * Animation iteration event
     * @protected
     * @instance
     * @returns
     */
    protected onAnimationIteration: EventMember = undefined


    /**
     * Transition start event
     * @protected
     * @instance
     * @returns
     */
    protected onTransitionStart: EventMember = undefined

    /**
     * Transition cancel event
     * @protected
     * @instance
     * @returns
     */
    protected onTransitionCancel: EventMember = undefined

    /**
     * Transition end event
     * @protected
     * @instance
     * @returns
     */
    protected onTransitionEnd: EventMember = undefined

    /**
     * Transition run event
     * @protected
     * @instance
     * @returns
     */
    protected onTransitionRun: EventMember = undefined


    /**
     * Auxillary click event
     * @protected
     * @instance
     * @returns
     */
    protected onAuxClick: EventMember = undefined

    /**
     * Click event
     * @protected
     * @instance
     * @returns
     */
    protected onClick: EventMember = undefined

    /**
     * Double click event
     * @protected
     * @instance
     * @returns
     */
    protected onDblClick: EventMember = undefined

    /**
     * Mousedown event
     * @protected
     * @instance
     * @returns
     */
    protected onMouseDown: EventMember = undefined

    /**
     * Mouse enter event
     * @protected
     * @instance
     * @returns
     */
    protected onMouseEnter: EventMember = undefined

    /**
     * Mouse leave event
     * @protected
     * @instance
     * @returns
     */
    protected onMouseLeave: EventMember = undefined

    /**
     * Mouse move event
     * @protected
     * @instance
     * @returns
     */
    protected onMouseMove: EventMember = undefined

    /**
     * Mouseover event
     * @protected
     * @instance
     * @returns
     */
    protected onMouseOver: EventMember = undefined

    /**
     * Mouseout event
     * @protected
     * @instance
     * @returns
     */
    protected onMouseOut: EventMember = undefined

    /**
     * Mouseup event
     * @protected
     * @instance
     * @returns
     */
    protected onMouseUp: EventMember = undefined

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

    private _eventListener = (eventListener: EventListener): void => {
        for (const [event, callback] of objectEntries(this._events())) {
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
