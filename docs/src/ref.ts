/* eslint-disable multiline-comment-style, no-undef, no-magic-numbers */
/* Already declared
const DS = DeStagnate,
    {createElement, createRef} = DS,
*/

// Const declarations since these variables are globally defined
// @ts-ignore ignores ts(2451): Cannot redeclare block-scoped variable
declare type DS = typeof import("../../lib")
// @ts-ignore ignores ts(2451): Cannot redeclare block-scoped variable
declare const DS: DS
// @ts-ignore ignores ts(2451): Cannot redeclare block-scoped variable
declare const {createElement, createRef}: DS

// Declare previously undeclared variables
// @ts-ignore ignores ts(2451): Cannot redeclare block-scoped variable
const {createRef} = DS

class RefExample extends DS.default {

    private _inputGroupPrepend = (): HTMLElement => createElement(
        "div",
        {class: "input-group-prepend"},
        createElement(
            "span",
            {class: "input-group-text",},
            "Input"
        )
    )

    private _formRef = createRef<HTMLInputElement>()

    private _getInputValues = () => {
        const val = this._formRef.current?.value

        alert(`INPUT VALUE: "${val}"`)
    }

    public render = (): HTMLElement[] => [
        createElement(
            "div",
            {class: "input-group"},
            this._inputGroupPrepend(),
            createElement(
                "input",
                {
                    type: "text",
                    class: "form-control mb-3",
                    placeholder: "Insert text here",
                    ref: this._formRef,
                }
            )
        ),
        createElement(
            "button",
            {
                class: "btn btn-light mb-3",
                onClick: this._getInputValues
            },
            "Get input value"
        )
    ]

}

const refParent = document.getElementById("ref")

if (refParent) {
    const refComponent = new RefExample(refParent)

    refComponent.mount()
}
