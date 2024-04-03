import {createElementNS} from "../destagnate.js"
import assert from "assert"

const width = 250
const direction = 2.5

export const test = () => {
    document.getElementById("SVG")?.appendChild(
        createElementNS(
            "http://www.w3.org/2000/svg",
            "svg",
            {
                width: width * 2,
                height: width,
                viewBox: `0 0 ${width * 2} ${width}`,
            },
            createElementNS("http://www.w3.org/2000/svg", "circle", {
                cx: 0,
                cy: 0,
                r: width,
            }),
            createElementNS("http://www.w3.org/2000/svg", "rect", {
                width: width,
                height: width,
                fill: direction > 0 ? "#0D6EFD" : "#28A745",
                x: 0,
            }),
        ),
    )

    it("Should have a tagname of svg", () => {
        assert.strictEqual("svg", document.querySelector("#SVG").firstChild?.tagName)
    })
}
