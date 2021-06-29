/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @license MIT
 * @version 2.1.0
 * Main test suite for destagnate
 */

import DeStagnate, {createElement} from "../deStagnate.cjs"
import assert from "assert"

class COMPONENTNAMECLASS extends DeStagnate.Component {
    render = () => createElement()
}

export const test = () => {
    const COMPONENTNAME = new COMPONENTNAMECLASS(document.getElementById("COMPONENTNAME"))

    COMPONENTNAME.mount()

    it("", () => {
        assert.strictEqual(true, true)
    })
}
