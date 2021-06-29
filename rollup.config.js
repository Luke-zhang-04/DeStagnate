import {babel} from "@rollup/plugin-babel"
import filesize from "rollup-plugin-filesize"
import {nodeResolve} from "@rollup/plugin-node-resolve"
import progress from "rollup-plugin-progress"
import {terser} from "rollup-plugin-terser"

const bannerProd = `/**
 * Destagnate v2.1.0 | https://luke-zhang-04.github.io/DeStagnate/
 * @copyright (C) 2020 - 2021 Luke Zhang https://luke-zhang-04.github.io
 * @license MIT
 */`

const bannerDev = `/**
 * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.1.0
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
            !/@author Luke Zhang/u.test(val), // Remove license headers in favour of one banner
    }),
    ...(prod
        ? [
              terser({
                  mangle: {
                      properties: {
                          regex: /^_/u, // Mangle private properties
                      },
                  },
              }),
          ]
        : []),
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
            input: "lib",
            output: {
                file: `dist/es5/deStagnate.min.${extension ?? format}`,
                format,
                banner: bannerProd,
                name: "DeStagnate",
                sourcemap: true,
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
            },
            plugins: makePlugins("es5", false),
        },
        {
            input: "lib/createElementOnly",
            output: {
                file: `dist/es5/createElement.min.${extension ?? format}`,
                format,
                banner: bannerProd,
                name: "DeStagnate",
                sourcemap: true,
            },
            plugins: makePlugins("es5", true),
        },
        {
            input: "lib/createElementOnly",
            output: {
                file: `dist/es5/createElement.${extension ?? format}`,
                format,
                banner: bannerDev,
                name: "DeStagnate",
                sourcemap: true,
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
            },
            plugins: makePlugins("es6", false),
        },
        {
            input: "lib/createElementOnly",
            output: {
                file: `dist/${format}/createElement.min.${extension ?? format}`,
                format,
                banner: bannerProd,
                name: "DeStagnate",
                sourcemap: true,
            },
            plugins: makePlugins("es6", true),
        },
        {
            input: "lib/createElementOnly",
            output: {
                file: `dist/${format}/createElement.${extension ?? format}`,
                format,
                banner: bannerDev,
                name: "DeStagnate",
                sourcemap: true,
            },
            plugins: makePlugins("es6", false),
        },
    ])

    return configs.flat()
})()

/** @type {import("rollup").RollupOptions[]} */
const rollupConfig = [...es5, ...es6]

export default rollupConfig
