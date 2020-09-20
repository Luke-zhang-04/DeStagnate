/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @license MIT
 * @version 2.0.0
 * Main test suite for destagnate
 */

const DeStagnate = require("../deStagnate.bundle"),
    assert = require("assert")

const {createElement} = DeStagnate

module.exports.test = (document, window) => {
    DeStagnate.setDocument(document)
    let clicked = false

    const element = createElement(
        "div",
        {
            id: "_EVENTLISTENERTEST",
            onClick: (event) => {
                clicked = true
                event.preventDefault()
            }
        }
    )

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
