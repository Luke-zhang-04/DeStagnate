module.exports = {
    entryPoints: ["./src/"],
    out: `${__dirname}/docs/docs`,
    exclude: ["./src/**/_*.ts", "./lib/*.js", "./src/private/", "*.tsx"],
    theme: "./node_modules/typedoc-dark-theme/bin/default/",
    highlightTheme: "dark-plus",
}
