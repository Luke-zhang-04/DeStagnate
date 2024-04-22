import * as DeStagnate from "../../../"

class CalcState extends DeStagnate.StateContainer<string, HTMLDivElement | null> {
    public constructor() {
        super("")
    }

    protected updateDOM(calcDisplay: DeStagnate.Ref<HTMLDivElement>) {
        // `calcDisplay` is the same as `this.ref`, except `calcDisplay.current` is guaranteed not
        // to be null.
        DeStagnate.clearChildren(calcDisplay.current)
        DeStagnate.bindChildren(calcDisplay.current, this.value)
    }
}

const calcState = new CalcState()

const CalcButton = ({text, append}: {text: string; append?: string}) => (
    // Invoking the `calcState.value` setter is equivalent to calling `calcState.update()`, which
    // will automatically call `updateDOM` after setting value.
    <div class="col-3 calc-btn" onClick={() => (calcState.value += append ?? text)}>
        {text}
    </div>
)

document.querySelector("#calculator")?.appendChild(
    <div>
        <div class="calc-display" ref={calcState.ref}></div>
        <div class="calc-btns row">
            <div class="col-3 calc-btn clear" onClick={() => (calcState.value = "")}>
                C
            </div>
            <div
                class="col-3 calc-btn"
                onClick={() =>
                    (calcState.value = calcState.value.slice(0, calcState.value.length - 1))
                }
            >
                {"\u2190"}
            </div>
            <CalcButton text="%" />
            <CalcButton text={"\u00f7"} append="/" />
        </div>
        <div class="calc-btns row">
            {["7", "8", "9", ["x", "*"]].map((val) => (
                <CalcButton
                    text={Array.isArray(val) ? val[0] : val}
                    append={Array.isArray(val) ? val[1] : val}
                />
            ))}
        </div>
        <div class="calc-btns row">
            {["4", "5", "6", "-"].map((val) => (
                <CalcButton text={val} />
            ))}
        </div>
        <div class="calc-btns row">
            {["1", "2", "3", "+"].map((val) => (
                <CalcButton text={val} />
            ))}
        </div>
        <div class="calc-btns row">
            <CalcButton text="0" />
            <CalcButton text="." />
            <div
                class="col-6 calc-btn equals"
                onClick={() => {
                    /* eslint-disable no-eval */
                    calcState.value = eval(calcState.value).toString() // DO NOT USE EVAL IN A REAL APP EVAL OBJECTIVELY SUCKS
                    // These examples are just tests to make sure the library is working anyways
                    /* eslint-enable no-eval */
                }}
            >
                =
            </div>
        </div>
    </div>,
)
