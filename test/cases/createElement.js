import assert from "assert"
import {createElement} from "../destagnate.js"

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
