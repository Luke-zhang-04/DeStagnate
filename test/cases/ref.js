/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @license MIT
 * @version 2.1.0
 * Main test suite for destagnate
 */

import DeStagnate, {createElement, createRef} from "../deStagnate.cjs"
import assert from "assert"

class Ref extends DeStagnate.Component {
    testRef = createRef()

    render = () =>
        createElement("div", {
            ref: this.testRef,
            id: "_REFTEST",
        })
}

export const test = () => {
    const ref = new Ref(document.getElementById("ref"))

    ref.mount()

    it("Should have an ID of _REFTEST", () => {
        assert.strictEqual("_REFTEST", ref.testRef.current.id)
    })
}
