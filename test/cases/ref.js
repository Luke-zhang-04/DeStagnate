import {Fragment, createElement, createRef} from "../destagnate.js"
import assert from "assert"

const testRef = createRef()
const testRef2 = createRef()
const testRef3 = createRef()

export const test = () => {
    document.getElementById("ref").appendChild(
        createElement("div", {
            ref: [testRef, testRef2],
            id: "_REFTEST",
        }),
    )

    document.getElementById("ref").appendChild(
        createElement(Fragment, {
            ref: testRef3,
        }),
    )

    it("Should have an ID of _REFTEST", () => {
        assert.strictEqual("_REFTEST", testRef.current?.id)
        assert.strictEqual("_REFTEST", testRef2.current?.id)
    })

    it("Should be document fragment", () => {
        assert.strictEqual(true, testRef3.current instanceof DocumentFragment)
    })
}
