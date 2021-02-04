/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.1
 * @package
 */

export type EventListener = (
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
)=> void

export type EventMember<
    K extends keyof HTMLElementEventMap,
> = (event: HTMLElementEventMap[K]) => unknown | undefined

export interface EventsList {
    focus?: EventMember<"focus">,
    blur?: EventMember<"blur">,
    focusin?: EventMember<"focusin">,
    focusout?: EventMember<"focusout">,

    animationstart?: EventMember<"animationstart">,
    animationcancel?: EventMember<"animationcancel">,
    animationend?: EventMember<"animationend">,
    animationiteration?: EventMember<"animationiteration">,

    transitionstart?: EventMember<"transitionstart">,
    transitioncancel?: EventMember<"transitioncancel">,
    transitionend?: EventMember<"transitionend">,
    transitionrun?: EventMember<"transitionrun">,

    auxclick?: EventMember<"auxclick">,
    click?: EventMember<"click">,
    dblclick?: EventMember<"dblclick">,
    mousedown?: EventMember<"mousedown">,
    mouseenter?: EventMember<"mouseenter">,
    mouseleave?: EventMember<"mouseleave">,
    mousemove?: EventMember<"mousemove">,
    mouseover?: EventMember<"mouseover">,
    mouseout?: EventMember<"mouseout">,
    mouseup?: EventMember<"mouseup">,
}
