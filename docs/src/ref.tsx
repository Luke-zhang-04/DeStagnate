import DeStagnate, {createRef} from "../../lib"

class RefExample extends DeStagnate {

    private static _inputGroupPrepend = (): JSX.Element => <div class="input-group-prepend">
        <span class="input-group-text">
            Input
        </span>
    </div>

    private _formRef = createRef<HTMLInputElement>()

    private _getInputValues = () => {
        const val = this._formRef.current?.value

        alert(`INPUT VALUE: "${val}"`)
    }

    public render = (): HTMLElement[] => [
        <div class="input-group">
            <RefExample._inputGroupPrepend/>
            <input
                type="text"
                class="form-control mb-3"
                placeholder="Insert text here"
                ref={this._formRef}
            ></input>
        </div>,
        <button
            class="btn btn-light mb-3"
            onClick={this._getInputValues}
        >See Input Value</button>
    ]

}

const refParent = document.getElementById("ref")

if (refParent) {
    const refComponent = new RefExample(refParent)

    refComponent.mount()
}
