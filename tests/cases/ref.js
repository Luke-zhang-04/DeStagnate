/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @license MIT
 * @version 1.5.3
 * Main test suite for destagnate
 */

const DeStagnate = require("../deStagnate.bundle"),
    assert = require("assert")

const {createDSComponent, createElement, createRef} = DeStagnate

class Ref2 extends DeStagnate.default {

    testRef = createRef()

    render = () => createElement("div", {
        id: "_REFTEST2",
        ref: this.testRef,
    })

}

class Ref extends DeStagnate.default {

    testRef = createRef()

    testRef2 = createRef()

    render = () => createElement(
        "div",
        {
            ref: this.testRef,
            id: "_REFTEST"
        },
        createDSComponent(
            Ref2,
            {},
            this.testRef2
        )
    )

}

module.exports.test = (document) => {
    DeStagnate.setDocument(document)

    const ref = new Ref(document.getElementById("ref"))

    ref.mount()

    it("Should have an ID of _REFTEST", () => {
        assert.equal(
            "_REFTEST",
            ref.testRef.current.id,
        )
    })

    it("Should have an ID of _REFTEST2", () => {
        assert.equal(
            "_REFTEST2",
            ref.testRef2.current.testRef.current.id,
        )
    })

    it("Should be instanceof Ref2", () => {
        assert.equal(
            true,
            ref.testRef2.current instanceof Ref2,
        )
    })
}
