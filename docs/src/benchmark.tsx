import * as DeStagnate from "../.."
import * as htl from "htl"
import htm from "htm"

const html = htm.bind(DeStagnate.createElement)

declare global {
    interface Window {
        Benchmark: typeof import("benchmark")
    }
}

const suite = new window.Benchmark.Suite()

const data = new Array(50).fill(undefined).map((_, index) => index)
const startBtn = document.getElementById("start-btn") as HTMLButtonElement
const result = document.getElementById("bench-result")!

interface TableData {
    num: number
}

startBtn.addEventListener("click", () => {
    startBtn.disabled = true
    startBtn.classList.add("disabled")
    suite
        .add("innerHTML", () => {
            const row = (num: number): string => `<tr>
                <td>${num}</td>
                <td class="px-3">${num % 2 === 0 ? "Even" : "Odd"}</td>
                <td>${(num % 3 === 0).toString()}</td>
            </tr>`

            const col = document.createElement("div")

            col.className = "col-3"
            col.innerHTML = `<table>
                <tr>
                    <th>Number</th>
                    <th class="px-3">Even/odd</th>
                    <th>Multiple of 3</th>
                </tr>
                ${data.map((num) => row(num))}
            </table>`
        })
        .add("Vanilla DOM", () => {
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
        })
        .add("DeStagnate", () => {
            const Row: DeStagnate.FC<TableData, []> = ({num}) => (
                <tr>
                    <td>{num}</td>
                    <td class="px-3">{num % 2 === 0 ? "Even" : "Odd"}</td>
                    <td>{(num % 3 === 0).toString()}</td>
                </tr>
            )

            ;<div class="col-3">
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
            </div>
        })
        .add("DeStagnate + HTM", () => {
            const Row: DeStagnate.FC<TableData, []> = ({num}) =>
                html`<tr>
                    <td>${num}</td>
                    <td class="px-3">${num % 2 === 0 ? "Even" : "Odd"}</td>
                    <td>${(num % 3 === 0).toString()}</td>
                </tr>` as Element

            html`<div class="col-3">
                <table>
                    <tr>
                        <th>Number</th>
                        <th class="px-3">Even/odd</th>
                        <th>Multiple of 3</th>
                    </tr>
                    ${data.map((num) => html`<${Row} num=${num} />`)}
                </table>
            </div>` as Element
        })
        .add("HTL", () => {
            const row = (num: number): Node => htl.html`<tr>
                <td>${num}</td>
                <td class="px-3">${num % 2 === 0 ? "Even" : "Odd"}</td>
                <td>${(num % 3 === 0).toString()}</td>
            </tr>`

            htl.html`<div class="col-3">
                <table>
                    <tr>
                        <th>Number</th>
                        <th class="px-3">Even/odd</th>
                        <th>Multiple of 3</th>
                    </tr>
                    ${data.map((num) => row(num))}
                </table>
            </div>`
        })
        .on("cycle", function (event: Event) {
            console.log(String(event.target))
            result.appendChild(<p>{String(event.target)}</p>)
        })
        .on("complete", () => {
            startBtn.disabled = false
            startBtn.classList.remove("disabled")
        })
        .run({async: false})
})
