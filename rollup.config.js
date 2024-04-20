import {babel} from "@rollup/plugin-babel"
import filesize from "rollup-plugin-filesize"
import {nodeResolve} from "@rollup/plugin-node-resolve"
import progress from "rollup-plugin-progress"
import terser from "@rollup/plugin-terser"

const bannerProd = `/**
 * DeStagnate
 * @license MIT
 * @copyright 2020 - 2024 Luke Zhang
 */`

const bannerDev = `/**
 * DeStagnate: A lightweight wrapper around vanilla DOM methods
 *
 * @license MIT
 * @version 3.2.0
 * @copyright 2020 - 2024 Luke Zhang
 */`

/**
 * Creates plugin setup with parameters
 *
 * @param {string} target - Browserslist target env
 * @param {boolean} prod - If bundle is production
 * @returns {import("rollup").Plugin[]} Rollup plugin configs
 */
const makePlugins = (target = "es6", prod = true) => [
    nodeResolve(),
    babel({
        babelrc: false,
        babelHelpers: "bundled",
        presets: [
            [
                "@babel/preset-env",
                {
                    browserslistEnv: target,
                },
            ],
        ],
        minified: prod,
        comments: !prod,
        shouldPrintComment: (val) =>
            !prod &&
            /@/u.test(val) &&
            !/eslint|istanbul/u.test(val) &&
            !/@copyright .* Luke Zhang/u.test(val), // Remove license headers in favour of one banner
    }),
    ...(prod ? [terser()] : []),
    // To make bundling look cool
    filesize(),
    progress(),
]

const es5 = (() => {
    /** @type {[format: import("rollup").ModuleFormat, extension?: string][]} */
    const formats = [["iife", "js"], ["cjs"]]

    /** @type {import("rollup").RollupOptions[][]} */
    const configs = formats.map(([format, extension]) => [
        {
            input: "lib", // TODO: bundle directly from source
            output: {
                file: `dist/es5/deStagnate.min.${extension ?? format}`,
                format,
                banner: bannerProd,
                name: "DeStagnate",
                sourcemap: true,
                exports: "named",
            },
            plugins: makePlugins("es5", true),
        },
        {
            input: "lib",
            output: {
                file: `dist/es5/deStagnate.${extension ?? format}`,
                format,
                banner: bannerDev,
                name: "DeStagnate",
                sourcemap: true,
                exports: "named",
            },
            plugins: makePlugins("es5", false),
        },
    ])

    return configs.flat()
})()

const es6 = (() => {
    /** @type {[format: import("rollup").ModuleFormat, extension?: string][]} */
    const formats = [["esm", "js"], ["iife", "js"], ["cjs"]]

    /** @type {import("rollup").RollupOptions[]} */
    const configs = formats.map(([format, extension]) => [
        {
            input: "lib",
            output: {
                file: `dist/${format}/deStagnate.min.${extension ?? format}`,
                format,
                banner: bannerProd,
                name: "DeStagnate",
                sourcemap: true,
                exports: format === "esm" ? "auto" : "named",
            },
            plugins: makePlugins("es6", true),
        },
        {
            input: "lib",
            output: {
                file: `dist/${format}/deStagnate.${extension ?? format}`,
                format,
                banner: bannerDev,
                name: "DeStagnate",
                sourcemap: true,
                exports: format === "esm" ? "auto" : "named",
            },
            plugins: makePlugins("es6", false),
        },
    ])

    return configs.flat()
})()

/** @type {import("rollup").RollupOptions[]} */
const rollupConfig = [...es5, ...es6]

export default rollupConfig
