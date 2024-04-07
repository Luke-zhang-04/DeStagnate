import {createElement, Fragment} from "../destagnate.js"
import assert from "assert"

export const test = () => {
    document.body.appendChild(
        createElement(
            Fragment,
            null,
            createElement("div", {id: "fragmentTest1"}),
            createElement(Fragment, undefined, createElement("div", {id: "fragmentTest2"})),
            createElement(Fragment),
        ),
    )

    it("Should have fragmentTest1 and fragmentTest2", () => {
        assert.strictEqual("fragmentTest1", document.querySelector("#fragmentTest1").id)

        assert.strictEqual("fragmentTest2", document.querySelector("#fragmentTest2").id)
    })
}
