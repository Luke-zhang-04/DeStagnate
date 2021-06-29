/**
 * DeStagnate A simple, ReactJS inspired library to create dynamic components within static sites easier
 *
 * @license MIT
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */

import assert from "assert"
import {createElement} from "../deStagnate.cjs"

export const test = () => {
    const myComponent = ({text}) => createElement("p", {id: "FCTest"}, text)

    document.body.appendChild(createElement(myComponent, {text: "Testing function component"}))

    it('Should equal "Testing function component"', () => {
        assert.strictEqual(
            "Testing function component",
            document.querySelector("#FCTest").innerHTML,
        )
    })
}
