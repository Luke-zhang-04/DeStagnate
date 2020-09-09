// eslint-disable-next-line
const path = require("path")

const files = [
        "nav.js",
        "footer.js",
        "compare.js",
        "src/calculator.js",
        "src/counter.js",
        "src/eventListener.js",
        "src/props.js",
        "src/ref.js",
        "src/svg.js",
        "src/tictactoe.js"
    ],
    configs = []

for (const file of files) {
    configs.push({
        entry: `./docs/lib/${file}`,
        output: {
            path: path.resolve(__dirname, "docs/compiled"),
            filename: file.replace("src/", ""),
            libraryTarget: "umd",
        },
        mode: "production"
    })
}

module.exports = configs
