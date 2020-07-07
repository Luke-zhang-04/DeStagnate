/* eslint-disable multiline-comment-style, no-undef, no-magic-numbers */
/* Already declared
const DS = DeStagnate,
    createElement = DS.createElement.default
*/

class Calculator extends DS.DeStagnate {

    constructor (props) {
        super(props)

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
     * Evaluate current claculation
     * @returns {number} clculation
     */
    _evalCalc = () => eval(this.state.calculation)
    /* eslint-disable no-eval */

    /**
     * Calculator buttons for 3 numbered rows
     * @type {Array.<HTMLElement>}
     */
    _numBtns = [
        createElement("div", {class: "calc-btns row"}, 
            ["7", "8", "9", ["x", "*"]].map((val) => (
                this._calcButton(
                    val instanceof Array ? val[0] : val,
                    val instanceof Array ? val[1] : val,
                )
            ))
        ),
        createElement("div", {class: "calc-btns row"}, 
            ["4", "5", "6", "-"].map((val) => (
                this._calcButton(
                    val instanceof Array ? val[0] : val,
                    val instanceof Array ? val[1] : val,
                )
            ))
        ),
        createElement("div", {class: "calc-btns row"}, 
            ["1", "2", "3", "+"].map((val) => (
                this._calcButton(
                    val instanceof Array ? val[0] : val,
                    val instanceof Array ? val[1] : val,
                )
            ))
        ),
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

    render = () => createElement("div", {}, [
        this._calcDisplay(),
        createElement("div", {class: "calc-btns row"}, [
            createElement("div", {
                class: "col-3 calc-btn clear",
                onClick: () => this.setState({calculation: ""}),
            }, "C"), // Clear
            createElement("div", {
                class: "col-3 calc-btn",
                onClick: () => this.setState({
                    calculation: this.state.calculation.slice(
                        0, this.state.calculation.length - 1,
                    ),
                }),
            }, "\u2190"), // Backspace

            this._calcButton("%"),
            this._calcButton("\u00f7", "/"),
        ]),
        ...this._numBtns,
        createElement("div", {class: "calc-btns row"}, [
            this._calcButton("0"),
            this._calcButton("."),
            createElement("div", {
                class: "col-6 calc-btn equals",
                onClick: () => this.setState({calculation: this._evalCalc()}),
            }, "="), // Equals
        ]),
    ])

}

const calculator = new Calculator(document.querySelector("#calculator"))

calculator.mount() // Must call once
