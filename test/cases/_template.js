/**
 * DeStagnate A simple, ReactJS inspired library to create dynamic components within static sites easier
 *
 * @license MIT
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
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
