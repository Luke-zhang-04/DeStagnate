/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @license MIT
 * @version 2.1.0
 * Main test suite for destagnate
 */

import DeStagnate, {createElementNS} from "../deStagnate.cjs"
import assert from "assert"

class NSElement extends DeStagnate.Component {
    render = () =>
        createElementNS(
            "http://www.w3.org/2000/svg",
            "svg",
            {
                width: this.props.width * 2,
                height: this.props.width,
                viewBox: `0 0 ${this.props.width * 2} ${this.props.width}`,
            },
            createElementNS("http://www.w3.org/2000/svg", "circle", {
                cx: 0,
                cy: 0 /* eslint-disable id-length */,
                r: this.props.width /* eslint-enable id-length */,
            }),
            createElementNS("http://www.w3.org/2000/svg", "rect", {
                width: this.props.width,
                height: this.props.width,
                fill: this.direction > 0 ? "#0D6EFD" : "#28A745" /* eslint-disable id-length */,
                x: 0 /* eslint-enable id-length */,
            }),
        )
}

export const test = () => {
    const nsElement = new NSElement(document.getElementById("SVG"), {width: 250})

    nsElement.mount()

    it("Should have a tagname of svg", () => {
        assert.strictEqual("svg", document.querySelector("#SVG svg").tagName)
    })
}
