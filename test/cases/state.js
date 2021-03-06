/**
 * DeStagnate A simple, ReactJS inspired library to create dynamic components within static sites easier
 *
 * @license MIT
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */

import DeStagnate, {createElement} from "../deStagnate.cjs"
import assert from "assert"
import niceTry from "nice-try"

class State extends DeStagnate.Component {
    constructor(parent) {
        super(parent)

        this.state = {
            count: 0,
        }
    }

    shouldthrow = true

    didthrow = false

    componentDidCatch = (err) => {
        console.error("ERR: Do not mutate state directly. Use setState instead.")

        if (this.shouldthrow) {
            throw new Error(err)
        } else {
            this.didthrow = true
        }
    }

    render = () =>
        createElement(
            "div",
            {},
            [createElement("p", {}, ["Seconds:"]), createElement("p", {}, this.state.count)],
            createElement("p", {}, "TEST"),
        )
}

const checkNaN = () => {
        const val = document.getElementById("counter").getElementsByTagName("p")[1].innerHTML

        assert.strictEqual(false, isNaN(Number(val)))
    },
    value = (state) => {
        state.setState({count: 1})

        const val = document.getElementById("counter").getElementsByTagName("p")[1].innerHTML

        assert.strictEqual(1, Number(val))
    },
    getState = (state) => {
        state.setState({
            count: 2,
            warn: true,
        })

        assert.strictEqual(2, state.getState.count)
    },
    unmountedComponent = (state) => {
        state.unmount()

        const inner = document.getElementById("counter").innerHTML

        assert.strictEqual("", inner)
    },
    invalidStateSetting = (state) => {
        const tried = niceTry(() => {
            state.state = state.getState

            return true
        })

        assert.strictEqual(undefined, tried)
    },
    noThrow = (state) => {
        state.shouldthrow = false
        state.state = state.getState

        assert.strictEqual(true, state.didthrow)
    }

export const test = () => {
    const state = new State(document.getElementById("counter"))

    state.mount()

    it("Should return a number", () => checkNaN())

    it("Should return 1", () => value(state))

    it("Should return 2", () => getState(state))

    it("Should return 1", () => unmountedComponent(state))

    it("Should throw error and return undefined", () => invalidStateSetting(state))

    it("Should return true", () => noThrow(state))
}
