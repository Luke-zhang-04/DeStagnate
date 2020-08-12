/* eslint-disable multiline-comment-style, no-undef, no-magic-numbers */

// Const declarations since these variables are globally defined
// @ts-ignore ignores ts(2451): Cannot redeclare block-scoped variable
declare type DeStagnate = typeof import("../../lib")
// @ts-ignore ignores ts(2451): Cannot redeclare block-scoped variable
declare const DeStagnate: DeStagnate
// @ts-ignore ignores ts(2451): Cannot redeclare block-scoped variable
const DS = DeStagnate,
    // @ts-ignore ignores ts(2451): Cannot redeclare block-scoped variable
    {createElement} = DS

// Current player
let currentPlayer: "x" | "o" = "x"

// Interfaces for states
interface SquareState {
    clicked: "" | "x" | "o",
}

class TicTacToe extends DS.Component {

    private _squares = [ // A bunch of squares
        [new Square(), new Square(), new Square()],
        [new Square(), new Square(), new Square()],
        [new Square(), new Square(), new Square()],
    ]

    private _checkForWinner = (): SquareState["clicked"] => {
        for (let i = 0; i < 3; i++) {
            const rows = [0, 1, 2].map((val) => this._squares[i][val]
                .getState
                .clicked
            )

            const columns = [0, 1, 2].map((val) => this._squares[val][i]
                .getState
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
                this._squares[0][0].getState.clicked,
                this._squares[1][1].getState.clicked,
                this._squares[2][2].getState.clicked,
            ],
            [
                this._squares[0][2].getState.clicked,
                this._squares[1][1].getState.clicked,
                this._squares[2][0].getState.clicked,
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
                this._squares[val][val2],
            ))
        ))

}

class Square extends DS.Component<{}, SquareState> {

    public constructor () {
        super()

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
