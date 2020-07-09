/* eslint-disable multiline-comment-style, no-undef, no-magic-numbers, max-len */
/* Already declared
const DS = DeStagnate,
    {createElement} = DS
*/

class Calculator extends DS.default {

    constructor (parent) {
        super(parent)

        this.state = {
            calculation: "",
        }
    }

    /**
     * Create a calculator button
     * @param {string} text - text of button
     * @param {string | undefined} append - value to append to calculaton
     * @returns {HTMLElement} col element
     */
    _calcButton = (text, append) => createElement("div", {
        class: "col-3 calc-btn", // Bootstrap grid
        onClick: () => this.setState({
            calculation: this.state.calculation + (append ? append : text),
        }),
    }, text)

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
        <div className="calc-btns row"> 
            {["7", "8", "9", ["x", "*"]].map((val) => (
                this._calcButton(
                    val instanceof Array ? val[0] : val,
                    val instanceof Array ? val[1] : val,
                )
            ))}
        </div>,
        <div className="calc-btns row"> 
            {["4", "5", "6", "-"].map((val) => (
                this._calcButton(
                    val instanceof Array ? val[0] : val,
                    val instanceof Array ? val[1] : val,
                )
            ))}
        </div>,
        <div className="calc-btns row"> 
            {["1", "2", "3", "+"].map((val) => (
                this._calcButton(
                    val instanceof Array ? val[0] : val,
                    val instanceof Array ? val[1] : val,
                )
            ))}
        </div>,
    ]

    /**
     * Calculator Display
     * @returns {HTMLElement} display
     */
    _calcDisplay = () => createElement(
        "div",
        {class: "calc-display"},
        this.state.calculation,
    )

    render = () => (
        <div>
            {this._calcDisplay()}
            <div className="calc-btns row">
                <div
                    className="col-3 calc-btn clear"
                    onClick={() => this.setState({calculation: ""})}
                >C</div>
                {createElement("div", {
                    class: "col-3 calc-btn",
                    onClick: () => this.setState({
                        calculation: this.state.calculation.slice(
                            0, this.state.calculation.length - 1,
                        ),
                    }),
                }, "\u2190")}
                {this._calcButton("%")}
                {this._calcButton("\u00f7", "/")}
            </div>
            {this._numBtns.map((btn) => btn)}
            {createElement("div", {class: "calc-btns row"}, [
                this._calcButton("0"),
                this._calcButton("."),
                createElement("div", {
                    class: "col-6 calc-btn equals",
                    onClick: () => this.setState({calculation: this._evalCalc()}),
                }, "="), // Equals
            ])}
        </div>
    )

}

const calculator = new Calculator(document.querySelector("#calculator"))

calculator.mount() // Must call once