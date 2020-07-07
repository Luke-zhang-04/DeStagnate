// eslint-disable-next-line
const path = require("path")

module.exports = {
    entry: "./build/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "deStagnate.bundle.js",
        library: "DeStagnate",
        libraryTarget: "var",
    },
    mode: "production",
}
