import assert from "assert"
import {createElement} from "../destagnate.js"

export const test = () => {
    const myComponent = ({text, id = "FCTest"}) => createElement("p", {id}, text)
    const myComponent2 = ({text, id = "FCTest2"}, ...children) =>
        createElement(
            "p",
            {id},
            createElement("p", null, text),
            createElement("div", null, children),
        )

    it('Should equal "Testing function component"', () => {
        document.body.appendChild(createElement(myComponent, {text: "Testing function component"}))

        assert.strictEqual(
            "Testing function component",
            document.querySelector("#FCTest").innerHTML,
        )
    })

    it('Should equal "Testing function component 2"', () => {
        document.body.appendChild(
            createElement(
                myComponent2,
                {text: "Testing function component 2"},
                "Child1",
                0,
                "child2",
                createElement("a"),
            ),
        )

        assert.strictEqual(
            "Testing function component 2",
            document.querySelector("#FCTest2").firstChild.innerHTML,
        )
        assert.strictEqual(
            "Child10child2<a></a>",
            document.querySelector("#FCTest2").lastChild.innerHTML,
        )
    })
}
