/* eslint-disable @typescript-eslint/no-var-requires */

const paths = ["calculator", "counter", "tictactoe.ts", "ref.ts"]

module.exports = paths.map((val) => {
    if (val.includes(".ts")) {
        return {
            entry: `./docs/src/${val}`,
            output: `./docs/compiled/${val.replace(".ts", "")}.js`,
            mode: "development",
        }
    }

    return {
        entry: `./docs/src/${val}.js`,
        output: `./docs/compiled/${val}.js`,
        mode: "development",
    }
})
