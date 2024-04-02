import assert from "assert"
import {createElement} from "../destagnate.js"

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
