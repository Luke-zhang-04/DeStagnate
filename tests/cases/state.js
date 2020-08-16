/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @license MIT
 * @version 1.6.1
 * Main test suite for destagnate
 */

const DeStagnate = require("../deStagnate.bundle"),
    assert = require("assert"),
    niceTry = require("nice-try")

const {createElement} = DeStagnate

class State extends DeStagnate.default {

    constructor (parent) {
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

    render = () => createElement(
        "div",
        {},
        [
            createElement(
                "p",
                {},
                ["Seconds:"]
            ),
            createElement(
                "p",
                {},
                this.state.count
            ),
        ],
        createElement(
            "p",
            {},
            "TEST"
        ),
    )

}

const checkNaN = (document) => {
        const val = document.getElementById("counter")
            .getElementsByTagName("p")[1]
            .innerHTML

        assert.equal(
            false,
            isNaN(Number(val)),
        )
    },
    value = (document, state) => {
        state.setState({count: 1})

        const val = document.getElementById("counter")
            .getElementsByTagName("p")[1]
            .innerHTML

        assert.equal(
            1,
            Number(val),
        )
    },
    getState = (state) => {
        state.setState({
            count: 2,
            warn: true,
        })

        assert.equal(
            2,
            state.getState.count,
        )
    },
    unmountedComponent = (document, state) => {
        state.unmount()

        const inner = document.getElementById("counter").innerHTML

        assert.equal(
            "",
            inner,
        )
    },
    invalidStateSetting = (state) => {
        const tried = niceTry(() => {
            state.state = state.getState

            return true
        })

        assert.equal(
            undefined,
            tried,
        )
    },
    nonStrictStateSet = (state) => {
        const tried = niceTry(() => {
            state.disableStrict()

            state.state = state.getState

            state.useStrict()

            return true
        })

        assert.equal(
            true,
            tried
        )
    },
    noThrow = (state) => {
        state.shouldthrow = false
        state.state = state.getState

        assert.equal(
            true,
            state.didthrow
        )
    }

module.exports.test = (document) => {
    DeStagnate.setDocument(document)

    const state = new State(document.getElementById("counter"))

    state.mount()

    it("Should return a number", () => checkNaN(document))

    it("Should return 1", () => value(document, state))

    it("Should return 2", () => getState(state))

    it("Should return 1", () => unmountedComponent(document, state))

    it("Should throw error and return undefined", () => invalidStateSetting(state))

    it("Should not throw error", () => nonStrictStateSet(state))

    it("Should return true", () => noThrow(state))
}
