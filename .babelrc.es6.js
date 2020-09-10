// Babelrc for ES6

module.exports = {
    presets: [],
    shouldPrintComment: (val) => /@/.test(val) && !(/eslint|istanbul/.test(val)),
}
