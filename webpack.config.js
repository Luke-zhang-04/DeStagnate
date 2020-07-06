
const path = require("path")

const minifiedConfig = {}

module.exports = {
    entry: "./build/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "dateplus.bundle.js",
        library: "dateplus",
        libraryTarget: "commonjs2",
    },
    mode: "production",
}
