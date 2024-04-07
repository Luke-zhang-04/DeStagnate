import {dirname} from "path"
import {fileURLToPath} from "url"
import {nodeResolve} from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * Create rollup config
 *
 * @param {string} file - Filename
 * @returns {import("rollup").RollupOptions} Rollup config
 */
const createConfig = (file) => ({
    input: `${__dirname}/lib/${file}`, // This is probably from like 2020, but not sure why we're not using the TS plugin??
    output: {
        file: `${__dirname}/public/js/${file.replace("examples/", "")}`,
        format: "iife",
    },
    plugins: [nodeResolve(), terser()],
})

export default [
    "nav.js",
    "footer.js",
    "examples/calculator.js",
    "examples/eventListener.js",
    "examples/svg.js",
    "examples/tictactoe.js",
    "examples/usingJsx.js",
].map(createConfig)
