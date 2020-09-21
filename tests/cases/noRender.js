/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @license MIT
 * @version 2.0.0
 * Main test suite for destagnate
 */

const DeStagnate = require("../deStagnate.bundle"),
    assert = require("assert"),
    niceTry = require("nice-try")

class NoRender extends DeStagnate.Component {

    componentDidCatch = (err) => {
        console.log("ERR: This class does not abstract the render method")

        throw new Error(err)
    }

}

module.exports.test = (document) => {
    DeStagnate.setDocument(document)

    const noRender = niceTry(() => {
        const _noRender = new NoRender(document.body)

        _noRender.mount()

        return _noRender
    })

    it("Should return undefined", () => {
        assert.strictEqual(
            undefined,
            noRender,
        )
    })
}
