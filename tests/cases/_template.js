/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @license MIT
 * @version 1.6.0
 * Main test suite for destagnate
 */

const DeStagnate = require("../deStagnate.bundle"),
    assert = require("assert")

const {createElement} = DeStagnate

class COMPONENTNAMECLASS extends DeStagnate.default {

    render = () => createElement(
    )

}

module.exports.test = (document) => {
    DeStagnate.setDocument(document)

    const COMPONENTNAME = new COMPONENTNAMECLASS(document.getElementById("COMPONENTNAME"))

    COMPONENTNAME.mount()

    it("", () => {
        assert.equal(
            true,
            true,
        )
    })
}
