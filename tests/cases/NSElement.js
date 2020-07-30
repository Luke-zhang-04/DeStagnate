/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @license MIT
 * @version 1.5.1
 * Main test suite for destagnate
 */

const DeStagnate = require("../deStagnate.bundle"),
    assert = require("assert")

const {createElementNS} = DeStagnate

class NSElement extends DeStagnate.default {

    render = () => createElementNS(
        "http://www.w3.org/2000/svg",
        "svg",
        {
            width: this.props.width * 2,
            height: this.props.width,
            viewBox: `0 0 ${this.props.width * 2} ${this.props.width}`,
        },
        createElementNS(
            "http://www.w3.org/2000/svg",
            "circle",
            {
                cx: 0,
                cy: 0, /* eslint-disable id-length */
                r: this.props.width, /* eslint-enable id-length */
            },
        ),
        createElementNS(
            "http://www.w3.org/2000/svg",
            "rect",
            {
                width: this.props.width,
                height: this.props.width,
                fill: this.direction > 0 ? "#0D6EFD" : "#28A745", /* eslint-disable id-length */
                x: 0, /* eslint-enable id-length */
            },
        ),
    )

}

module.exports.test = (document) => {
    DeStagnate.setDocument(document)

    const nsElement = new NSElement(document.getElementById("SVG"), {width: 250})

    nsElement.mount()

    it("Should have a tagname of svg", () => {
        assert.equal(
            "svg",
            document.querySelector("#SVG svg").tagName,
        )
    })
}
