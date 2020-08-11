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

module.exports.test = (document) => {
    DeStagnate.setDocument(document)

    const element = createElement(
        "div",
        {id: "_ELEMENTTEST"},
        createElement(
            "div",
            {
                class: "bg-dark",
                skip: [],
                innerHTML: "coverage",
            }
        )
    )

    document.body.appendChild(element)

    it("Should have class bg-dark", () => {
        assert.equal(
            "bg-dark",
            document.getElementById("_ELEMENTTEST")
                .querySelector("div")
                .classList[0],
        )
    })
}