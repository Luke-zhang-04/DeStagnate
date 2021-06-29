/**
 * DeStagnate A simple, ReactJS inspired library to create dynamic components within static sites easier
 *
 * @license MIT
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */

import DeStagnate, {createElement} from "../deStagnate.cjs"
import assert from "assert"

class StateDidChange extends DeStagnate.Component {
    constructor(parent) {
        super(parent)

        this.state = {
            key1: 0,
            key2: 0,
        }
    }

    shouldComponentUpdate = () => this.stateDidChange(["key1"])

    update = this.setState

    render = () =>
        createElement(
            DeStagnate.fragment,
            null,
            createElement("p", null, this.state.key1),
            createElement("p", null, this.state.key2),
        )
}

class StateDidChangeDeep extends DeStagnate.Component {
    constructor(parent) {
        super(parent)

        this.state = {
            key1: 0,
            key2: {
                key1: 0,
                key2: 0,
            },
            key3: [0, 1, 2],
        }
    }

    update = this.setState

    render = () => createElement("div")
}

export const test = () => {
    const stateDidChange = new StateDidChange(document.getElementById("stateDidChange"))
    const stateDidChangeDeep = new StateDidChangeDeep(
        document.getElementById("stateDidChangeDeep"),
    )

    stateDidChange.mount()
    stateDidChangeDeep.mount()

    it("Should still have key1 and key2 at 0", () => {
        stateDidChange.update({
            key2: 1,
        })

        assert.strictEqual("0", document.querySelectorAll("#stateDidChange p")[0].innerHTML)

        assert.strictEqual("0", document.querySelectorAll("#stateDidChange p")[1].innerHTML)
    })

    it("Should have both key1 and key2 at 1", () => {
        stateDidChange.update({
            key1: 1,
        })

        assert.strictEqual("1", document.querySelectorAll("#stateDidChange p")[0].innerHTML)

        assert.strictEqual("1", document.querySelectorAll("#stateDidChange p")[1].innerHTML)

        assert.strictEqual(stateDidChange.prevState.key2, 1)
    })

    it("Should not have changed state", () => {
        stateDidChangeDeep.update({
            key1: 0,
        })

        assert.strictEqual(false, stateDidChangeDeep.stateDidChange())
    })

    it("Should have changed state", () => {
        stateDidChangeDeep.update({
            key3: [0, 1],
        })

        assert.strictEqual(true, stateDidChangeDeep.stateDidChange())
    })
}
