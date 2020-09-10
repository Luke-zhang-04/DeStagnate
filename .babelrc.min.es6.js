// Babelrc for production/minified files

module.exports = {
    presets: ["minify"],
    plugins: [
        "babel-plugin-loop-optimizer",
        "transform-merge-sibling-variables",
        "transform-minify-booleans"
    ],
    minified: true,
    shouldPrintComment: () => false,
    comments: false,
}
