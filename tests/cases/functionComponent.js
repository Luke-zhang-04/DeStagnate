/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @license MIT
 * @version 1.7.1
 * Main test suite for destagnate
 */

const DeStagnate = require("../deStagnate.bundle"),
    assert = require("assert")

const {createElement} = DeStagnate

module.exports.test = (document) => {
    DeStagnate.setDocument(document)

    const myComponent = ({text}) => createElement("p", {id: "FCTest"}, text)

    document.body.appendChild(createElement(myComponent, {text: "Testing function component"}))

    it("Should equal \"Testing function component\"", () => {
        assert.strictEqual(
            "Testing function component",
            document.querySelector("#FCTest").innerHTML,
        )
    })

}
