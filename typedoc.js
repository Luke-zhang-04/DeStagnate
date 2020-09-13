module.exports = {
    inputFiles: ["./src/"],
    mode: "modules",
    out: "docs/docs",
    exclude: ["./src/**/_*.ts", "./lib/*.js", "./src/private/", "*.tsx"],
    theme: "./node_modules/typedoc-dark-theme/bin/default/",
}
