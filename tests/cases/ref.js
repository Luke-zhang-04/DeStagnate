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

const {createElement, createRef} = DeStagnate

class Ref extends DeStagnate.Component {

    testRef = createRef()

    render = () => createElement(
        "div",
        {
            ref: this.testRef,
            id: "_REFTEST"
        }
    )

}

module.exports.test = (document) => {
    DeStagnate.setDocument(document)

    const ref = new Ref(document.getElementById("ref"))

    ref.mount()

    it("Should have an ID of _REFTEST", () => {
        assert.strictEqual(
            "_REFTEST",
            ref.testRef.current.id,
        )
    })
}
