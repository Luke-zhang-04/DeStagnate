import DeStagnate from "../../../" // Import library from root

let calculation = ""

const calcDisplay = DeStagnate.createRef<HTMLDivElement>()

const updateCalculation = (newCalculation: string) => {
    calculation = newCalculation

    if (calcDisplay.current) {
        DeStagnate.clearChildren(calcDisplay.current)

        calcDisplay.current.appendChild(document.createTextNode(calculation))
    }
}

const CalcButton = ({text, append}: {text: string; append?: string}) => (
    <div class="col-3 calc-btn" onClick={() => updateCalculation(calculation + (append ?? text))}>
        {text}
    </div>
)

document.querySelector("#calculator")?.appendChild(
    <div>
        <div class="calc-display" ref={calcDisplay}></div>
        <div class="calc-btns row">
            <div class="col-3 calc-btn clear" onClick={() => updateCalculation("")}>
                C
            </div>
            <div
                class="col-3 calc-btn"
                onClick={() => updateCalculation(calculation.slice(0, calculation.length - 1))}
            >
                {"\u2190"}
            </div>
            <CalcButton text="%" />
            <CalcButton text={"\u00f7"} append="/" />
        </div>
        <div class="calc-btns row">
            {["7", "8", "9", ["x", "*"]].map((val) => (
                <CalcButton
                    text={val instanceof Array ? val[0] : val}
                    append={val instanceof Array ? val[1] : val}
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
                    calculation = eval(calculation).toString() // DO NOT USE EVAL IN A REAL APP EVAL OBJECTIVELY SUCKS
                    /* eslint-enable no-eval */
                    if (calcDisplay.current) {
                        calcDisplay.current.innerText = calculation
                    }
                }}
            >
                =
            </div>
        </div>
    </div>,
)
