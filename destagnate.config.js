/* eslint-disable @typescript-eslint/no-var-requires */

const calculator = {
        entry: "./docs/src/calculator.js",
        output: "docs/examples/calculator.js",
        mode: "development",
        typescript: { // If typescript found only
            esModuleInterop: true,
        }
    },
    counter= {
        entry: "./docs/src/counter.js",
        output: "docs/examples/counter.js",
        mode: "development",
        typescript: { // If typescript found only
            esModuleInterop: true,
        }
    }

module.exports = [calculator, counter]
