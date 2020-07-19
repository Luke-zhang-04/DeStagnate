#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * DeStagnate CLI
 * CLI for compiling files that use JSX code
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.2.4
 */
/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires, global-require */
const Babel = __importStar(require("@babel/core"));
const fs = __importStar(require("fs"));
const pkg = __importStar(require("../package.json"));
const compileTs_1 = __importDefault(require("./compileTs"));
const commander_1 = require("commander");
commander_1.program
    .option("-o, --out <file>", "output file stdout by default", "stdout")
    .option("-p --production", "production mode")
    .on("--help", () => {
    // eslint-disable-next-line
    console.log("\nNote that an input of config file is always required. Your command structure therefore should look like\n\n\tnpx destagnate [input file or config file][options]]\n");
})
    .version(pkg.version);
commander_1.program.parse(process.argv);
// eslint-disable-next-line
const input = process.argv[2], compile = (fileData, config) => {
    const plugins = [
        "@babel/plugin-transform-react-jsx",
        "@babel/plugin-proposal-class-properties",
    ];
    if (config.mode === "production") {
        plugins.push("babel-plugin-loop-optimizer");
    }
    const res = Babel.transform(fileData, {
        plugins,
        presets: ["@babel/preset-env"],
        minified: (config.mode === "production"),
        compact: (config.mode === "production"),
        comments: !(config.mode === "production"),
        sourceMaps: "inline",
    });
    if (res && res.code) {
        let code = res.code
            .replace(/React.createElement/gu, "DeStagnate.createElement")
            .replace(/className: "/gu, "class: \"");
        if (config.mode !== "production") {
            // eslint-disable-next-line
            code = `// WARNING: THIS CODE WAS COMPILED FOR DEVELOPMENT, AND IS NOT OPTIMISED FOR PRODUCTION. FOR PRODUCTION, USE THE --prod FLAG, OR ADD mode: production TO YOU CONFIG FILE\n\n${code}`;
        }
        if (config.output === "stdout") {
            console.log(code);
        }
        else {
            fs.writeFile(config.output, code, "utf8", () => {
                console.log("😃 Success");
            });
        }
    }
}, compileWithConfig = () => {
    /* eslint-disable no-sync */
    let config;
    try {
        config = require(`${process.cwd()}/${input.replace("./", "")}`);
    }
    catch (_) {
        throw new Error("😰 No input file or config file given");
    }
    if (config instanceof Array) {
        for (const file of config) {
            fs.readFile(file.entry, "utf8", (_, data) => {
                let code = data;
                if (file.entry.includes(".ts") || file.entry.includes(".tsx")) {
                    code = compileTs_1.default(code).outputText;
                }
                compile(code, file);
            });
        }
    }
    else {
        fs.readFile(config.entry, "utf8", (_, data) => {
            compile(data, config);
        });
    }
};
if (input && !input.includes(".config.js")) {
    fs.readFile(input, "utf8", (_, data) => {
        if (input.includes(".ts") || input.includes(".tsx")) {
            const code = compileTs_1.default(data);
            compile(code.outputText, {
                entry: process.argv[2],
                output: commander_1.program.out,
                mode: commander_1.program.production ? "production" : "development",
            });
        }
        else {
            compile(data, {
                entry: process.argv[2],
                output: commander_1.program.out,
                mode: commander_1.program.production ? "production" : "development",
            });
        }
    });
}
else if (input &&
    (input.includes(".config.js") || input.includes(".config.json"))) {
    compileWithConfig();
}
else {
    throw new Error("😰 No input file or config file given");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7R0FPRztBQUNILCtMQUErTDtBQUMvTCxtREFBb0M7QUFDcEMsdUNBQXdCO0FBQ3hCLHFEQUFzQztBQUN0Qyw0REFBZ0Q7QUFDaEQseUNBQWlDO0FBV2pDLG1CQUFPO0tBQ0YsTUFBTSxDQUFDLGtCQUFrQixFQUFFLCtCQUErQixFQUFFLFFBQVEsQ0FBQztLQUNyRSxNQUFNLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7S0FDNUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDZiwyQkFBMkI7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1S0FBdUssQ0FBQyxDQUFBO0FBQ3hMLENBQUMsQ0FBQztLQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7QUFFekIsbUJBQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRTNCLDJCQUEyQjtBQUMzQixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUV6QixPQUFPLEdBQUcsQ0FBQyxRQUFnQixFQUFFLE1BQWlCLEVBQVEsRUFBRTtJQUNwRCxNQUFNLE9BQU8sR0FBRztRQUNaLG1DQUFtQztRQUNuQyx5Q0FBeUM7S0FDNUMsQ0FBQTtJQUVELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7UUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0tBQzlDO0lBRUQsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FDdkIsUUFBUSxFQUNSO1FBQ0ksT0FBTztRQUNQLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQzlCLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtB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