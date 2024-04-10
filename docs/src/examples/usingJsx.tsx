import * as DeStagnate from "../../../"
import {createElement} from "../../../"
import htm from "htm"

const data = new Array(10).fill(undefined).map((_, index) => index)
const container = document.getElementById("jsx-example")!

interface TableData {
    num: number
}

jsx: {
    const Row: DeStagnate.FC<TableData, []> = ({num}) => (
        <tr>
            <td>{num}</td>
            <td class="px-3">{num % 2 === 0 ? "Even" : "Odd"}</td>
            <td>{(num % 3 === 0).toString()}</td>
        </tr>
    )

    container.appendChild(
        <div class="col-3">
            <table>
                <tr>
                    <th>Number</th>
                    <th class="px-3">Even/odd</th>
                    <th>Multiple of 3</th>
                </tr>
                {data.map((num) => (
                    <Row num={num} />
                ))}
            </table>
        </div>,
    )
}

createElement: {
    const Row: DeStagnate.FC<TableData, []> = ({num}) =>
        createElement(
            "tr",
            null,
            createElement("td", null, num),
            createElement("td", {class: "px-3"}, num % 2 === 0 ? "Even" : "Odd"),
            createElement("td", null, (num % 3 === 0).toString()),
        )

    container.appendChild(
        createElement(
            "div",
            {class: "col-3"},
            createElement(
                "table",
                null,
                createElement(
                    "tr",
                    null,
                    createElement("th", null, "Number"),
                    createElement("th", {class: "px-3"}, "Even/odd"),
                    createElement("th", null, "Multiple of 3"),
                ),
                data.map((num) => createElement(Row, {num})),
            ),
        ),
    )
}

vanillaDOM: {
    const row = (num: number): HTMLTableRowElement => {
        const tableRow = document.createElement("tr")

        const [d1, d2, d3] = [
            document.createElement("td"),
            document.createElement("td"),
            document.createElement("td"),
        ]

        d2.className = "px-3"
        d1.innerText = num.toString()
        d2.innerText = num % 2 === 0 ? "Even" : "Odd"
        d3.innerText = (num % 3 === 0).toString()

        tableRow.appendChild(d1)
        tableRow.appendChild(d2)
        tableRow.appendChild(d3)

        return tableRow
    }

    const col = document.createElement("div")

    col.setAttribute("class", "col-3")

    const table = document.createElement("table")

    const headerRow = document.createElement("tr")
    const [numberHeader, evenOddHeader, mult3Header] = [
        document.createElement("th"),
        document.createElement("th"),
        document.createElement("th"),
    ]

    evenOddHeader.className = "px-3"
    numberHeader.innerText = "Number"
    evenOddHeader.innerText = "Even/odd"
    mult3Header.innerText = "Multiple of 3"

    headerRow.appendChild(numberHeader)
    headerRow.appendChild(evenOddHeader)
    headerRow.appendChild(mult3Header)

    table.appendChild(headerRow)

    for (const num of data) {
        table.appendChild(row(num))
    }

    col.appendChild(table)
    container.appendChild(col)
}

htm: {
    const html = htm.bind(createElement)

    const Row: DeStagnate.FC<TableData, []> = ({num}) =>
        html`<tr>
            <td>${num}</td>
            <td class="px-3">${num % 2 === 0 ? "Even" : "Odd"}</td>
            <td>${(num % 3 === 0).toString()}</td>
        </tr>` as Element

    container.appendChild(
        html`<div class="col-3">
            <table>
                <tr>
                    <th>Number</th>
                    <th class="px-3">Even/odd</th>
                    <th>Multiple of 3</th>
                </tr>
                ${data.map((num) => html`<${Row} num=${num} />`)}
            </table>
        </div>` as Element,
    )
}
