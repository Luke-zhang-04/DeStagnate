import DeStagnate from "destagnate"

class Calculator extends DeStagnate.Component {

    constructor (parent) {
        super(parent)

        this.state = {
            calculation: "",
        }
    }

    /**
     * Appends new values to calculation
     * @param {string} text - text of button
     * @param {string | undefined} append - value to append to
     * calculation
     * @returns {Object.<string, string>} new state
     */
    _appendState = (text, append) => ({
        calculation: this.state.calculation + (append ? append : text),
    })

    /**
     * Create a calculator button
     * @param {Object.<string, string | undefined>} param0 - text of button and value to append to
     * calculaton
     * @returns {HTMLElement} col element
     */
    _calcButton = ({text, append}) => <div
        class="col-3 calc-btn"
        onClick={() => this.setState(this._appendState(text, append))}
    >{text}</div>

    /* eslint-disable no-eval */
    /**
     * Evaluate current calculation
     * @returns {number} calculation
     */
    _evalCalc = () => eval(this.state.calculation)
    /* eslint-disable no-eval */

    /**
     * Calculator buttons for 3 numbered rows
     * @type {Array.<HTMLElement>}
     */
    _numBtns = [
        <div class="calc-btns row">
            {["7", "8", "9", ["x", "*"]].map((val) => <this._calcButton
                text={val instanceof Array ? val[0] : val}
                append={val instanceof Array ? val[1] : val}
            />)}
        </div>,
        <div class="calc-btns row">
            {["4", "5", "6", "-"].map((val) => <this._calcButton
                text={val instanceof Array ? val[0] : val}
                append={val instanceof Array ? val[1] : val}
            />)}
        </div>,
        <div class="calc-btns row">
            {["1", "2", "3", "+"].map((val) => <this._calcButton
                text={val instanceof Array ? val[0] : val}
                append={val instanceof Array ? val[1] : val}
            />)}
        </div>,
    ]

    /**
     * Calculator Display
     * @returns {HTMLElement} display
     */
    _calcDisplay = () => <div class="calc-display">
        {this.state.calculation}
    </div>

    render = () => (
        <div>
            <this._calcDisplay/>
            <div class="calc-btns row">
                <div
                    class="col-3 calc-btn clear"
                    onClick={() => this.setState({calculation: ""})}
                >C</div>
                <div
                    class="col-3 calc-btn"
                    onClick={() => this.setState({
                        calculation: this.state.calculation.slice(
                            0, this.state.calculation.length - 1,
                        ),
                    })}
                >{"\u2190"}</div>
                <this._calcButton text="%"/>
                <this._calcButton text={"\u00f7"} append="/"/>
            </div>
            {this._numBtns.map((btn) => btn)}
            <div class="calc-btns row">
                <this._calcButton text="0"/>
                <this._calcButton text="."/>
                <div
                    class="col-6 calc-btn equals"
                    onClick={() => (
                        this.setState({calculation: this._evalCalc()})
                    )}
                ></div>
            </div>
        </div>
    )

}

const calculator = new Calculator(document.querySelector("#calculator"))

calculator.mount() // Must call once
