/* eslint-disable @typescript-eslint/no-var-requires */

const calculator = {
        entry: "./docs/src/calculator.js",
        output: "docs/compiled/calculator.js",
        mode: "development",
    },
    counter = {
        entry: "./docs/src/counter.js",
        output: "docs/compiled/counter.js",
        mode: "development",
    },
    nest = {
        entry: "./docs/src/tictactoe.ts",
        output: "docs/compiled/tictactoe.js",
        mode: "development"
    },
    ref = {
        entry: "./docs/src/ref.ts",
        output: "docs/compiled/ref.js",
        mode: "development"
    }

module.exports = [calculator, counter, nest, ref]
