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
    }

module.exports = [prod, dev, test]
