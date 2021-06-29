import DeStagnate, {createRef} from "../../../" // Import library from root

class RefExample extends DeStagnate.Component {
    public constructor(parent: HTMLElement) {
        super(parent)
    }

    private _formRef = createRef<HTMLInputElement>()

    private static _inputGroupPrepend = (): JSX.Element => (
        <div class="input-group-prepend">
            <span class="input-group-text">Input</span>
        </div>
    )

    public render = () => (
        <>
            <div class="input-group">
                <RefExample._inputGroupPrepend />
                <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Insert text here"
                    ref={this._formRef}
                ></input>
            </div>
            <button class="btn btn-light mb-3" onClick={this._getInputValues}>
                See Input Value
            </button>
        </>
    )

    private _getInputValues = (): void => {
        const val = this._formRef.current?.value

        alert(`INPUT VALUE: "${val}"`)
    }
}

const refParent = document.getElementById("ref")

if (refParent) {
    const refComponent = new RefExample(refParent)

    refComponent.mount()
}
