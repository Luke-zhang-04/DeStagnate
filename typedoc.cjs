module.exports = {
    entryPoints: ["./src/"],
    out: `${__dirname}/docs/docs`,
    exclude: ["./src/**/_*.ts", "./lib/*.js", "./src/private/", "*.tsx"],
    plugin: ["typedoc-material-theme"],
    themeColor: "#cb9820",
    darkHighlightTheme: "dark-plus",
}
