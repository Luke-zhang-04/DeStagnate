/**
 * DeStagnate A simple, ReactJS inspired library to create dynamic components within static sites easier
 *
 * @license MIT
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */

import DeStagnate, {createElement} from "../deStagnate.cjs"
import assert from "assert"

class ComponentA extends DeStagnate.Component {
    constructor() {
        super()

        this.state = {
            value: "A",
        }
    }

    render = () => createElement("div", {class: "ComponentA"}, this.state.value)
}

class ComponentB extends DeStagnate.Component {
    nestedComponent = new ComponentA()

    updateNestedComponent = (val = "B") => {
        this.nestedComponent.setState({value: val})
    }

    render = () => createElement("div", {class: "ComponentB"}, this.nestedComponent)
}

export const test = () => {
    const nestedComponent = new ComponentB(document.getElementById("nest"))

    nestedComponent.mount()

    it("Should return ComponentA", () => {
        assert.strictEqual(
            document.querySelector(".ComponentB").childNodes[0].classList[0],
            "ComponentA",
        )
    })

    context("Changing state of nested component", () => {
        it("Should equal A", () => {
            assert.strictEqual(
                document.querySelector("#nest .ComponentB .ComponentA").innerHTML,
                "A",
            )
        })

        it("Should equal B", () => {
            nestedComponent.updateNestedComponent()

            assert.strictEqual(
                document.querySelector("#nest .ComponentB .ComponentA").innerHTML,
                "B",
            )
        })

        it("Should equal C", () => {
            nestedComponent.updateNestedComponent("C")
            nestedComponent.forceUpdate()

            assert.strictEqual(
                document.querySelector("#nest .ComponentB .ComponentA").innerHTML,
                "C",
            )
        })
    })
}
