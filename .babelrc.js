// Babelrc for production/minified files

module.exports = {
    presets: ["minify"],
    plugins: [
        "babel-plugin-loop-optimizer",
    ],
    minified: true,
    shouldPrintComment: () => false,
    comments: false,
}
