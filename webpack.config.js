// eslint-disable-next-line
const path = require("path")

const babelConfig = [
        {
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                    plugins: [
                        [
                            "@babel/plugin-transform-runtime", {
                                regenerator: true,
                            },
                        ],
                    ],
                    minified: false,
                    shouldPrintComment: (val) => (
                        (/@/u).test(val) && !((/eslint|istanbul/u).test(val))
                    ),
                    sourceMap: false,
                },
            },
        }
    ],
    prod = {
        entry: "./build/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "deStagnate.bundle.min.js",
            library: "DeStagnate",
            libraryTarget: "var",
        },
        name: "prod",
        mode: "production",
        module: {
            rules: babelConfig,
        },
    },
    dev = {
        entry: "./build/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "deStagnate.bundle.js",
            library: "DeStagnate",
            libraryTarget: "var",
        },
        name: "dev",
        mode: "none",
        module: {
            rules: babelConfig,
        },
    },
    test = {
        entry: "./build/index.js",
        output: {
            path: path.resolve(__dirname, "tests"),
            filename: "deStagnate.bundle.js",
            library: "DeStagnate",
            libraryTarget: "commonjs2",
        },
        name: "test",
        mode: "none",
    },
    prodCjs = {
        entry: "./build/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "deStagnate.bundle.min.cjs",
            library: "DeStagnate",
            libraryTarget: "commonjs2",
        },
        name: "prodCjs",
        mode: "production",
        module: {
            rules: babelConfig,
        },
    },
    devCjs = {
        entry: "./build/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "deStagnate.bundle.cjs",
            library: "DeStagnate",
            libraryTarget: "commonjs2",
        },
        name: "devCjs",
        mode: "none",
        module: {
            rules: babelConfig,
        },
    },
    prodES6 = {
        entry: "./build/index.js",
        output: {
            path: path.resolve(__dirname, "dist/es6"),
            filename: "deStagnate.bundle.min.js",
            library: "DeStagnate",
            libraryTarget: "var",
        },
        name: "prodES6",
        mode: "production",
    },
    devES6 = {
        entry: "./build/index.js",
        output: {
            path: path.resolve(__dirname, "dist/es6"),
            filename: "deStagnate.bundle.js",
            library: "DeStagnate",
            libraryTarget: "var",
        },
        name: "devES6",
        mode: "none",
    },
    prodCjsES6 = {
        entry: "./build/index.js",
        output: {
            path: path.resolve(__dirname, "dist/es6"),
            filename: "deStagnate.bundle.min.cjs",
            library: "DeStagnate",
            libraryTarget: "commonjs2",
        },
        name: "prodCjsES6",
        mode: "production",
    },
    devCjsES6 = {
        entry: "./build/index.js",
        output: {
            path: path.resolve(__dirname, "dist/es6"),
            filename: "deStagnate.bundle.cjs",
            library: "DeStagnate",
            libraryTarget: "commonjs2",
        },
        name: "devCjsES6",
        mode: "none",
    }

module.exports = [
    prod,
    dev,
    test,
    prodCjs,
    devCjs,
    prodES6,
    devES6,
    prodCjsES6,
    devCjsES6,
]
