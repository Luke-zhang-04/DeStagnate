/* eslint-disable multiline-comment-style, no-undef, no-magic-numbers */

// Const declarations since these variables are globally defined
// @ts-ignore ignores ts(2451): Cannot redeclare block-scoped variable
declare type DeStagnate = typeof import("../../lib")
// @ts-ignore ignores ts(2451): Cannot redeclare block-scoped variable
declare const DeStagnate: DeStagnate
// @ts-ignore ignores ts(2451): Cannot redeclare block-scoped variable
const DS = DeStagnate,
    // @ts-ignore ignores ts(2451): Cannot redeclare block-scoped variable
    {createElement, createRef} = DS

class RefExample extends DS.Component {

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
