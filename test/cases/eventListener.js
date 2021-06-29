/**
 * DeStagnate A simple, ReactJS inspired library to create dynamic components within static sites easier
 *
 * @license MIT
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */

import assert from "assert"
import {createElement} from "../deStagnate.cjs"

export const test = () => {
    let clicked = false

    const element = createElement("div", {
        id: "_EVENTLISTENERTEST",
        onClick: (event) => {
            clicked = true
            event.preventDefault()
        },
    })

    document.body.appendChild(element)

    const event = new window.MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
    })

    it("Should have called event listener", () => {
        assert.strictEqual(
            false,
            document.getElementById("_EVENTLISTENERTEST").dispatchEvent(event),
        )
    })

    it("Event listener should have fired", () => {
        assert.strictEqual(true, clicked)
    })
}
