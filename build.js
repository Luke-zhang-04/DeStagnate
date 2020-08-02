/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 */

// Replaces comments with exessive newlines with one newline

// eslint-disable-next-line
const fs = require("fs")
const ist = "/* istanbul ignore next */"

if (!process.argv[2]) {
    throw new Error("No input file")
}

class NewString extends String {

    addIstanbulIgnore = (searchValue) => new NewString(
        this.toString()
            .replace(
                new RegExp(searchValue, "gu"),
                `${searchValue.source ? searchValue.source.replace(/\\/gu, "") : searchValue} ${ist}`,
            )
    )

    /* eslint-disable max-len */
    fmt = () => this.toString().replace(/document/gu, "doc")
        .replace(/innerText/gu, "innerHTML")
        .replace(
            /__values = this && this.__values \|\| function \(o\)/gu,
            `__values = this && this.__values || function (o) ${ist} `,
        )
        .replace(
            /var __extends = this && this.__extends \|\| \(function \(\)/gu,
            `var __extends = this && this.__extends || (function () ${ist} `,
        )
        .replace(
            /__importDefault = this && this.__importDefault \|\| function \(mod\)/gu,
            `__importDefault = this && this.__importDefault || function (mod) ${ist} `,
        )
        .replace(
            /__read = this && this.__read \|\| function \(o, n\)/gu,
            `__read = this && this.__read || function (o, n) ${ist}`,
        )
        .replace(
            /\} finally \{/gu,
            `} finally ${ist} {`,
        )
    /* eslint-enable max-len */

}

const documentAlias = (data) => {
    let formattedData = new NewString(data)
        .addIstanbulIgnore(/catch \(e_1_1\)/gu)
        .addIstanbulIgnore(/catch \(e_2_1\)/gu)
        .addIstanbulIgnore(/catch \(e_3_1\)/gu)
        .addIstanbulIgnore(/\(function \(modules\)/gu)
        .addIstanbulIgnore(/function _typeof \(obj\)/gu)
        .fmt()

    formattedData = ` /* eslint-disable */
const niceTry = require("nice-try")
let doc

niceTry(() => {
    doc = document
})

${formattedData}

module.exports.setDocument = (_doc) => {
    doc = _doc
}`

    return formattedData
}

fs.readFile(process.argv[2], "utf-8", (err, data) => {
    if (err) {
        throw new Error(err)
    }

    let formattedData = data

    for (let _ = 0; _ < 2; _++) {
        formattedData = formattedData.replace(/\*\/\n\n/gu, "*/\n")
    }

    if (process.argv[2].includes("tests")) {
        formattedData = documentAlias(formattedData)
    }

    fs.writeFile(process.argv[2], formattedData, "utf-8", () => undefined)
})
