// Standard Babelrc

module.exports = {
    presets: ["@babel/preset-env"],
    shouldPrintComment: (val) => /@/.test(val) && !(/eslint|istanbul/.test(val)),
}