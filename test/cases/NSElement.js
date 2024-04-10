import {createElement, createElementNS} from "../destagnate.js"
import assert from "assert"

const width = 250
const direction = 2.5

export const test = () => {
    document.getElementById("svg-1")?.appendChild(
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

    document.getElementById("svg-2")?.appendChild(
        createElement(
            "svg:svg",
            {
                width: width * 2,
                height: width,
                viewBox: `0 0 ${width * 2} ${width}`,
            },
            createElement("svg:circle", {
                cx: 0,
                cy: 0,
                r: width,
            }),
            createElement("svg:rect", {
                width: width,
                height: width,
                fill: direction > 0 ? "#0D6EFD" : "#28A745",
                x: 0,
            }),
        ),
    )

    it("Should have a tagname of svg", () => {
        assert.strictEqual("svg", document.querySelector("#svg-1").firstChild?.tagName)
        assert.strictEqual("svg", document.querySelector("#svg-2").firstChild?.tagName)
    })
}
