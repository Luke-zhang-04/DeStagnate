import {babel} from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import {nodeResolve} from "@rollup/plugin-node-resolve"

/**
 * Create rollup config
 * @param {stirng} file - filename
 * @returns {import("rollup").RollupOptions} rollup config
 */
const createConfig = (file) => ({
    input: `./docs/lib/${file}`,
    output: {
        file: `docs/compiled/${file.replace("examples/", "")}`,
        format: "iife",
    },
    plugins: [
        commonjs(),
        nodeResolve(),
        babel({
            presets: [
                ["minify", {
                    builtIns: true,
                    evaluate: true,
                    mangle: true,
                }],
            ],
            comments: true,
            shouldPrintComment: (comment) => /licen[sc]e|copyright|@preserve|^!/i.test(comment),
            babelrc: false,
            babelHelpers: "bundled",
        })
    ],
})

export default [
    "nav.js",
    "footer.js",
    "compare.js",
    "examples/calculator.js",
    "examples/counter.js",
    "examples/eventListener.js",
    "examples/props.js",
    "examples/ref.js",
    "examples/svg.js",
    "examples/tictactoe.js"
].map(createConfig)
