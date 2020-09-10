// eslint-disable-next-line
const path = require("path")

const prod = {
        entry: "./lib/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "deStagnate.bundle.min.js",
            library: "DeStagnate",
            libraryTarget: "var",
        },
        mode: "production",
    },
    dev = {
        entry: "./lib/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "deStagnate.bundle.js",
            library: "DeStagnate",
            libraryTarget: "var",
        },
        mode: "none",
    },
    test = {
        entry: "./lib/index.js",
        output: {
            path: path.resolve(__dirname, "tests"),
            filename: "deStagnate.bundle.js",
            library: "DeStagnate",
            libraryTarget: "commonjs2",
        },
        mode: "none",
    },
    prodCjs = {
        entry: "./lib/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "deStagnate.bundle.min.cjs",
            library: "DeStagnate",
            libraryTarget: "commonjs2",
        },
        mode: "production",
    },
    devCjs = {
        entry: "./lib/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "deStagnate.bundle.cjs",
            library: "DeStagnate",
            libraryTarget: "commonjs2",
        },
        mode: "none",
    },
    prodES6 = {
        entry: "./lib/index.js",
        output: {
            path: path.resolve(__dirname, "dist/es6"),
            filename: "deStagnate.bundle.min.js",
            library: "DeStagnate",
            libraryTarget: "var",
        },
        mode: "production",
    },
    devES6 = {
        entry: "./lib/index.js",
        output: {
            path: path.resolve(__dirname, "dist/es6"),
            filename: "deStagnate.bundle.js",
            library: "DeStagnate",
            libraryTarget: "var",
        },
        mode: "none",
    },
    prodCjsES6 = {
        entry: "./lib/index.js",
        output: {
            path: path.resolve(__dirname, "dist/es6"),
            filename: "deStagnate.bundle.min.cjs",
            library: "DeStagnate",
            libraryTarget: "commonjs2",
        },
        mode: "production",
    },
    devCjsES6 = {
        entry: "./lib/index.js",
        output: {
            path: path.resolve(__dirname, "dist/es6"),
            filename: "deStagnate.bundle.cjs",
            library: "DeStagnate",
            libraryTarget: "commonjs2",
        },
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
