module.exports = {
    entryPoints: ["./src/"],
    out: `${__dirname}/docs/public/docs`,
    exclude: ["./src/**/_*.ts", "./lib/*.js", "./src/private/", "*.tsx"],
    plugin: ["typedoc-material-theme", "typedoc-plugin-missing-exports"],
    themeColor: "#cb9820",
    darkHighlightTheme: "dark-plus",
    customCss: "./docs/typedoc.css",
    navigationLinks: {
        Examples: "..",
        GitHub: "https://github.com/Luke-zhang-04/DeStagnate",
    },
    sidebarLinks: {
        Examples: "..",
        GitHub: "https://github.com/Luke-zhang-04/DeStagnate",
    },
}
