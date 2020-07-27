/* eslint-disable multiline-comment-style, no-undef, no-magic-numbers */
/* Already declared
const DS = DeStagnate,
    {createElement} = DS
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
const {createDSComponent} = DS

// Current player
let currentPlayer: "x" | "o" = "x"

// Interfaces for states
interface SquareState {
    clicked: "" | "x" | "o",
}

class TicTacToe extends DS.default {

    private _squares = [ // Refs, simillar to React refs
        [createRef<Square>(), createRef<Square>(), createRef<Square>()],
        [createRef<Square>(), createRef<Square>(), createRef<Square>()],
        [createRef<Square>(), createRef<Square>(), createRef<Square>()],
    ]

    private _checkForWinner = (): SquareState["clicked"] => {
        for (let i = 0; i < 3; i++) {
            const rows = [0, 1, 2].map((val) => this._squares[i][val]
                .current
                ?.getState
                .clicked
            )

            const columns = [0, 1, 2].map((val) => this._squares[val][i]
                .current
                ?.getState
                .clicked
            )

            if (
                rows[0] === rows[1] &&
                rows[1] === rows[2] &&
                rows[0]
            ) {
                return rows[0]
            } else if (
                columns[0] === columns[1] &&
                columns[1] === columns[2] &&
                columns[0]
            ) {
                return columns[0]
            }

        }

        const diagonals = [
            [
                this._squares[0][0].current?.getState.clicked,
                this._squares[1][1].current?.getState.clicked,
                this._squares[2][2].current?.getState.clicked,
            ],
            [
                this._squares[0][2].current?.getState.clicked,
                this._squares[1][1].current?.getState.clicked,
                this._squares[2][0].current?.getState.clicked,
            ],
        ]

        for (const diagonal of diagonals) {
            if (
                diagonal[0] === diagonal[1] &&
                diagonal[1] === diagonal[2] &&
                diagonal[0]
            ) {
                return diagonal[0]
            }
        }

        return ""
    }

    public render = (): HTMLElement[] => [0, 1, 2]
        // Create 3 rows
        .map((val) => createElement(
            "div",
            {class: "row"},
            // Create 3 columns
            [0, 1, 2].map((val2) => createElement(
                "div",
                {
                    class: "col-4",
                    onClick: () => {
                        // Current square
                        const square = this._squares[val][val2]
                            .current

                        // Check if square isn't already clicked
                        if (square?.getState.clicked === "") {
                            square?.setState({clicked: currentPlayer})
                        }

                        // Change current player
                        if (currentPlayer === "x") {
                            currentPlayer = "o"
                        } else {
                            currentPlayer = "x"
                        }

                        if (this._checkForWinner()) {
                            alert(`Player ${this._checkForWinner()} has won the game!`)
                        }
                    },
                },
                createDSComponent(
                    Square,
                    {},
                    this._squares[val][val2],
                )
            ))
        ))

}

class Square extends DS.default<{}, SquareState> {

    public constructor (parent: HTMLElement) {
        super(parent)

        this.state = {
            clicked: "",
        }
    }

    public render = (): HTMLElement => createElement(
        "div",
        {class: "tictactoe-square",},
        this.state.clicked,
    )

}

const tictactoeParent = document.getElementById("nested")

const mountTicTacToe = (): void => {
    if (tictactoeParent) {
        const tictactoe = new TicTacToe(tictactoeParent),
            resetBtn = document.getElementById("nested-reset-btn")
    
        if (resetBtn) {
            resetBtn.addEventListener("click", () => {
                tictactoe.unmount()

                mountTicTacToe()
            })
        }
    
        tictactoe.mount()
    }
}

mountTicTacToe()
