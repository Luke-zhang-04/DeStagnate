import commonjs from "@rollup/plugin-commonjs"
import {nodeResolve} from "@rollup/plugin-node-resolve"

export default [
    "nav.js",
    "footer.js",
    "compare.js",
    "src/calculator.js",
    "src/counter.js",
    "src/eventListener.js",
    "src/props.js",
    "src/ref.js",
    "src/svg.js",
    "src/tictactoe.js"
]
    .map((file) => ({
        input: `./docs/lib/${file}`,
        output: {
            path: `docs/compiled/${file.replace("src/", "")}`,
            libraryTarget: "iife",
        },
        plugins: [
            commonjs(),
            nodeResolve(),
        ],
    }))
