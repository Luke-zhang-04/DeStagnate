#! /usr/bin/env node
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.0
 */

// Replaces comments with exessive newlines with one newline

// eslint-disable-next-line
import fs from "fs"

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
        .replace(/window/gu, "_window")
        .replace(/innerText/gu, "innerHTML")
        .replace(
            /if \(_this._parent === undefined\)/gu,
            `if (_this._parent === undefined) ${ist}`,
        )
        .replace(
            /catch \(err\)/gu,
            `catch (err) ${ist}`,
        )
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

        const split = formattedData.split("\n")

        for (const [num, line] of split.entries()) {
            if (line.includes("function _")) {
                split[num] = `${line.replace(/\{/gu, "")}${ist} {`
            } else if (line.includes("modules")) {
                break
            }
        }

        formattedData = split.join("\n")

        formattedData = ` /* eslint-disable */\nconst niceTry = require("nice-try")\nlet doc\nlet _window\nniceTry(() => ${ist} {\n    doc = document\n    _window = window\n})\n${formattedData}\nmodule.exports.setDocument = (_doc) => {\n    doc = _doc\n}\nmodule.exports.setWindow = (__window) => {\n    _window = __window\n}\n`

        return formattedData
    },
    readFile = (path, options = "utf-8") => new Promise((resolve, reject) => {
        fs.readFile(path, options, (err, data) => {
            if (err) {
                reject(err)

                return
            }

            resolve(data)
        })
    }),
    writeFile = (path, data, options = "utf-8") => new Promise((resolve, reject) => {
        fs.writeFile(path, data, options, (err) => {
            if (err) {
                reject(err)

                return
            }

            resolve()
        })
    }),
    data = await readFile(process.argv[2])

if (typeof(data) !== "string") {
    throw new Error(data)
}

let formattedData = data

for (let _ = 0; _ < 2; _++) {
    formattedData = formattedData.replace(/\*\/\n\n/gu, "*/\n")
}

if (process.argv[2].includes("tests")) {
    formattedData = documentAlias(formattedData)
}

await writeFile(process.argv[2], formattedData)
