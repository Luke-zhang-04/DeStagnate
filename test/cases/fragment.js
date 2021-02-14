/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @license MIT
 * @version 2.0.0
 * Main test suite for destagnate
 */

import {createElement, fragment} from "../deStagnate.cjs"
import assert from "assert"

export const test = () => {
    document.body.appendChild(createElement(fragment, null,
        createElement("div", {id: "fragmentTest1"}),
        createElement("div", {id: "fragmentTest2"}),
    ))

    it("Should have fragmentTest1 and fragmentTest2", () => {
        assert.strictEqual(
            "fragmentTest1",
            document.querySelector("#fragmentTest1").id,
        )

        assert.strictEqual(
            "fragmentTest2",
            document.querySelector("#fragmentTest2").id,
        )
    })

}
