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

export type EventMember = EventListenerOrEventListenerObject | undefined

export interface EventsList {
    focus: EventMember,
    blur: EventMember,
    focusin: EventMember,
    focusout: EventMember,

    animationstart: EventMember,
    animationcancel: EventMember,
    animationend: EventMember,
    animationiteration: EventMember,

    transitionstart: EventMember,
    transitioncancel: EventMember,
    transitionend: EventMember,
    transitionrun: EventMember,

    auxclick: EventMember,
    click: EventMember,
    dblclick: EventMember,
    mousedown: EventMember,
    mouseenter: EventMember,
    mouseleave: EventMember,
    mousemove: EventMember,
    mouseover: EventMember,
    mouseout: EventMember,
    mouseup: EventMember,
}

/**
 * Returns array of events
 * Not a generator because Babel Regenerator Runtime causes dist files to be wayyyy to large
 * @param events - events object
 */
export const eventsList = (
    events: EventsList,
): [keyof EventsList, EventMember][] => {
    const res: [keyof EventsList, EventMember][] = []

    for (const key of Object.keys(events)) {
        res.push([key as keyof EventsList, events[key as keyof EventsList]])
    }

    return res
}

export default eventsList
