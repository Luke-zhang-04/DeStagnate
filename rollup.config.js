import {babel} from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import filesize from "rollup-plugin-filesize"
import {nodeResolve} from "@rollup/plugin-node-resolve"
import progress from "rollup-plugin-progress"
import {terser} from "rollup-plugin-terser"
import visualizer from "rollup-plugin-visualizer"

const bannerProd = `/**
 * Destagnate v2.0.0 | https://luke-zhang-04.github.io/DeStagnate/
 * @copyright (C) 2020 Luke Zhang https://luke-zhang-04.github.io
 * @license MIT
 */
`

const bannerDev = `/**
 * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
*/
`

/**
 * Creates plugin setup with parameters
 * @param {string} target - Browserslist target env
 * @param {boolean} prod - if bundle is production
 * @returns {import("rollup").Plugin[]} rollup plugin configs
 */
const makePlugins = (target = "es6", prod = true) => [
    commonjs(),
    nodeResolve(),
    babel({
        babelrc: false,
        babelHelpers: "bundled",
        presets: [
            ["@babel/preset-env", {
                browserslistEnv: target,
            }],
        ],
        minified: prod,
        comments: !prod,
        shouldPrintComment: (val) => (
            !prod &&
                (/@/u).test(val) &&
                !((/eslint|istanbul/u).test(val)) &&
                !(/@author Luke Zhang/u).test(val) // Remove license headers in favour of one banner
        ),
    }),
    ...prod
        ? [terser()]
        : [],
    // To make bundling look cool
    filesize(),
    progress(),
]

const es5 = (() => {
    /**
     * @type {import("rollup").RollupOptions[]}
     */
    const configs = []

    /**
     * @type {[format: import("rollup").ModuleFormat, extension?: string][]}
     */
    const formats = [
        // ["iife", "js"],
        // ["cjs"],
    ]

    for (const [format, extension] of formats) {
        configs.push({
            input: "lib",
            output: {
                file: `dist/es5/deStagnate.min.${extension ?? format}`,
                format,
                banner: bannerProd,
                name: "DeStagnate",
                sourcemap: false,
            },
            plugins: makePlugins("es5", true),
        })

        configs.push({
            input: "lib",
            output: {
                file: `dist/es5/deStagnate.${extension ?? format}`,
                format,
                banner: bannerDev,
                name: "DeStagnate",
                sourcemap: "inline",
            },
            plugins: makePlugins("es5", false),
        })
    }

    return configs
})()

const es6 = (() => {
    /**
     * @type {import("rollup").RollupOptions[]}
     */
    const configs = []

    /**
     * @type {[format: import("rollup").ModuleFormat, extension?: string][]}
     */
    const formats = [
        ["esm", "mjs"],
        // ["iife", "js"],
        // ["cjs"],
    ]

    for (const [format, extension] of formats) {
        configs.push({
            input: "lib",
            output: {
                file: `dist/deStagnate.min.${extension ?? format}`,
                format,
                banner: bannerProd,
                name: "DeStagnate",
                sourcemap: false,
            },
            plugins: format === "esm"
            ? [
                ...makePlugins("es6", true),
                visualizer({
                    filename: "docs/bundle-stats.html",
                    template: "sunburst",
                    gzipSize: true,
                }),
            ]
            : makePlugins("es6", true),
        })

        configs.push({
            input: "lib",
            output: {
                file: `dist/deStagnate.${extension ?? format}`,
                format,
                banner: bannerDev,
                name: "DeStagnate",
                sourcemap: "inline",
            },
            plugins: makePlugins("es6", false),
        })
    }

    return configs
})()

/**
 * @type {import("rollup").RollupOptions[]}
 */
const rollupConfig = [
    ...es5,
    ...es6,
]

export default rollupConfig
