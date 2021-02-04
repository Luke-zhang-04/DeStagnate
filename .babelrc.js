// Babelrc for production/minified files

module.exports = {
    presets: [
        ["minify", {
            builtIns: true,
            evaluate: true,
            mangle: true,
        }],
    ],
    comments: true,
    shouldPrintComment: (comment) => /licen[sc]e|copyright|@preserve|^!/i.test(comment),
}
