import {Fragment, type Ref, StateContainer, createElement} from "../../../"

let currentPlayer: "x" | "o" = "x"

class SquareState extends StateContainer<"" | "x" | "o", HTMLDivElement | null> {
    constructor() {
        super("")
    }

    public updateDOM(squareRef: Ref<HTMLDivElement>) {
        squareRef.current.innerText = this.value
    }
}

const squares = [
    [new SquareState(), new SquareState(), new SquareState()],
    [new SquareState(), new SquareState(), new SquareState()],
    [new SquareState(), new SquareState(), new SquareState()],
]

const checkForWinner = (): "" | "x" | "o" => {
    for (let i = 0; i < 3; i++) {
        const rows = [0, 1, 2].map((val) => squares[i][val].value)

        const columns = [0, 1, 2].map((val) => squares[val][i].value)

        if (rows[0] === rows[1] && rows[1] === rows[2] && rows[0]) {
            return rows[0]
        } else if (columns[0] === columns[1] && columns[1] === columns[2] && columns[0]) {
            return columns[0]
        }
    }

    const diagonals = [
        [squares[0][0].value, squares[1][1].value, squares[2][2].value],
        [squares[0][2].value, squares[1][1].value, squares[2][0].value],
    ]

    for (const diagonal of diagonals) {
        if (diagonal[0] === diagonal[1] && diagonal[1] === diagonal[2] && diagonal[0]) {
            return diagonal[0]
        }
    }

    return ""
}

const tictactoeParent = document.getElementById("nested")
const resetBtn = document.getElementById("nested-reset-btn")

tictactoeParent?.appendChild(
    createElement(
        Fragment,
        null,
        squares.map((row) =>
            createElement(
                "div",
                {class: "row"},
                row.map((square) =>
                    createElement(
                        "div",
                        {
                            class: "col-4",
                            onClick: () => {
                                // Check if square isn't already clicked
                                if (square.value === "") {
                                    square.value = currentPlayer
                                }

                                // Change current player
                                currentPlayer = currentPlayer === "x" ? "o" : "x"

                                if (checkForWinner()) {
                                    alert(`Player ${checkForWinner()} has won the game!`)
                                }
                            },
                        },
                        createElement(
                            "div",
                            {class: "tictactoe-square", ref: square.ref},
                            square.value,
                        ),
                    ),
                ),
            ),
        ),
    ),
)

resetBtn?.addEventListener("click", () => {
    for (const row of squares) {
        for (const square of row) {
            square.update("")
        }
    }
})
