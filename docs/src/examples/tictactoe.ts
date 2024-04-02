import {Fragment, createElement, createRef} from "../../../" // Import library from root

// Current player
let currentPlayer: "x" | "o" = "x"

class Square {
    public clicked: "" | "x" | "o" = ""
    public ref = createRef<HTMLDivElement>()

    public update(value: "" | "x" | "o") {
        this.clicked = value

        if (this.ref.current) {
            this.ref.current.innerText = value
        }
    }
}

const squares = [
    [new Square(), new Square(), new Square()],
    [new Square(), new Square(), new Square()],
    [new Square(), new Square(), new Square()],
]

const checkForWinner = (): "" | "x" | "o" => {
    for (let i = 0; i < 3; i++) {
        const rows = [0, 1, 2].map((val) => squares[i][val].clicked)

        const columns = [0, 1, 2].map((val) => squares[val][i].clicked)

        if (rows[0] === rows[1] && rows[1] === rows[2] && rows[0]) {
            return rows[0]
        } else if (columns[0] === columns[1] && columns[1] === columns[2] && columns[0]) {
            return columns[0]
        }
    }

    const diagonals = [
        [squares[0][0].clicked, squares[1][1].clicked, squares[2][2].clicked],
        [squares[0][2].clicked, squares[1][1].clicked, squares[2][0].clicked],
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
                                if (square.clicked === "") {
                                    square.update(currentPlayer)
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
                            square.clicked,
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
