import {nodeResolve} from "@rollup/plugin-node-resolve"
import {terser} from "rollup-plugin-terser"

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
        nodeResolve(),
        terser(),
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
