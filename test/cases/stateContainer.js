import {createElement, StateContainer} from "../destagnate.js"
import assert from "assert"

class Container extends StateContainer {
    constructor() {
        super("")
    }

    updateDOM(ref) {
        ref.current.className = this.value
    }
}

export const test = () => {
    it("Should have class success", () => {
        const container = new Container()

        // No update without ref, no crash
        container.value = "e"
        assert.strictEqual(null, document.getElementById("_STATETEST"))

        document.body.appendChild(
            createElement("div", {
                ref: container.ref,
                id: "_STATETEST",
            }),
        )

        container.value = "sucess"
        assert.strictEqual("sucess", document.getElementById("_STATETEST").className)

        container.update("success2")
        assert.strictEqual("success2", document.getElementById("_STATETEST").className)
    })
}
