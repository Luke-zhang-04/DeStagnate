const path = require("path")

module.exports = {
    entry: "./build/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "dynamComponent.bundle.js",
        library: "DynamComponent",
        libraryTarget: "var",
    },
    mode: "production",
}
