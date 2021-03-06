/**
 * DeStagnate A simple, ReactJS inspired library to create dynamic components within static sites easier
 *
 * @license MIT
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */

import DeStagnate, {createElement} from "../deStagnate.cjs"
import assert from "assert"

class Props extends DeStagnate.Component {
    render = () =>
        this.props.colors.map((color) =>
            createElement("button", {class: `btn btn-${color}`}, `${color} button`),
        )
}

const btnPrimary = (document) => {
        const val = document.getElementById("props").getElementsByTagName("button")[0].classList

        assert.strictEqual(true, val.contains("btn-primary"))
    },
    btnDark = (document) => {
        const _val = document.getElementById("props").getElementsByTagName("button"),
            val = _val[_val.length - 1].classList

        assert.strictEqual(true, val.contains("btn-dark"))
    },
    propsLength = (document) => {
        const val = document.getElementById("props").getElementsByTagName("button")

        assert.strictEqual(8, val.length)
    }

export const test = () => {
    const props = new Props(document.querySelector("#props"), {
        colors: ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"],
    })

    props.mount() // Must call once

    it('Should have class "btn btn-primary"', () => btnPrimary(document))

    it('Should have class "btn btn-dark"', () => btnDark(document))

    it("Should include 8 buttons", () => propsLength(document))

    it("Should not throw error", () => props.setState(props.getState))

    it("Should be an array with length of 8", () => {
        assert.strictEqual(true, props.getProps.colors instanceof Array)

        assert.strictEqual(8, props.getProps.colors.length)
    })
}
