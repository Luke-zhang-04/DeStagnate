/**
 * DeStagnate A simple, ReactJS inspired library to create dynamic components within static sites easier
 *
 * @license MIT
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */

import assert from "assert"
import {createElement} from "../deStagnate.cjs"

export const test = () => {
    const element = createElement(
        "div",
        {id: "_ELEMENTTEST"},
        createElement("div", {
            class: "bg-dark",
            skip: [],
            innerHTML: "coverage",
        }),
    )

    document.body.appendChild(element)

    it("Should have class bg-dark", () => {
        assert.strictEqual(
            "bg-dark",
            document.getElementById("_ELEMENTTEST").querySelector("div").classList[0],
        )
    })
}
