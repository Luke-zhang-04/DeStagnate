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
 * @version 1.2.0
 */
/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
const Babel = __importStar(require("@babel/core"));
const fs = __importStar(require("fs"));
const compile_1 = __importDefault(require("./compile"));
const commander_1 = require("commander");
commander_1.program
    .option("-o, --out <file>", "output file; stdout by default", "stdout")
    .option("-p --prod", "production mode");
commander_1.program.parse(process.argv);
const [input, output] = [process.argv[2], commander_1.program.out], compile = (fileData) => {
    const plugins = [
        "@babel/plugin-transform-react-jsx",
        "@babel/plugin-proposal-class-properties",
    ];
    if (commander_1.program.prod) {
        plugins.push("babel-plugin-loop-optimizer");
    }
    const res = Babel.transform(fileData, {
        plugins,
        presets: ["@babel/preset-env"],
        minified: commander_1.program.prod,
        compact: commander_1.program.prod,
        comments: !commander_1.program.prod,
        sourceMaps: "inline",
    });
    if (res && res.code) {
        let code = res.code
            .replace(/React.createElement/gu, "DeStagnate.createElement")
            .replace(/className: "/gu, "class: \"");
        if (!commander_1.program.prod) {
            // eslint-disable-next-line
            code = `// WARNING: THIS CODE WAS COMPILED FOR DEVELOPMENT, AND IS NOT OPTIMISED FOR PRODUCTION. FOR PRODUCTION, USE THE --prod FLAG, OR ADD mode: production TO YOU CONFIG FILE\n\n${code}`;
        }
        if (output === "stdout") {
            console.log(code);
        }
        else {
            fs.writeFile(output, code, "utf8", () => {
                console.log("😃 Success");
            });
        }
    }
};
if (input) {
    fs.readFile(input, "utf8", (_, data) => {
        if (input.includes(".ts") || input.includes(".tsx")) {
            const code = compile_1.default(data);
            compile(code.outputText);
        }
        else {
            compile(data);
        }
    });
}
else {
    throw new Error("😰 No input file specified, exiting...");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsMklBQTJJO0FBQzNJLG1EQUFvQztBQUNwQyx1Q0FBd0I7QUFDeEIsd0RBQThDO0FBQzlDLHlDQUFpQztBQUVqQyxtQkFBTztLQUNGLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxnQ0FBZ0MsRUFBRSxRQUFRLENBQUM7S0FDdEUsTUFBTSxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO0FBRTNDLG1CQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUUzQixNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxtQkFBTyxDQUFDLEdBQWEsQ0FBQyxFQUU1RCxPQUFPLEdBQUcsQ0FBQyxRQUFnQixFQUFRLEVBQUU7SUFDakMsTUFBTSxPQUFPLEdBQUc7UUFDWixtQ0FBbUM7UUFDbkMseUNBQXlDO0tBQzVDLENBQUE7SUFFRCxJQUFJLG1CQUFPLENBQUMsSUFBSSxFQUFFO1FBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0tBQzlDO0lBRUQsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FDdkIsUUFBUSxFQUNSO1FBQ0ksT0FBTztRQUNQLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQzlCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLElBQWU7UUFDakMsT0FBTyxFQUFFLG1CQUFPLENBQUMsSUFBZTtRQUNoQyxRQUFRLEVBQUUsQ0FBQyxtQkFBTyxDQUFDLElBQWU7UUFDbEMsVUFBVSxFQUFFLFFBQVE7S0FDdkIsQ0FDSixDQUFBO0lBRUQsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtRQUNqQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSTthQUNkLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSwwQkFBMEIsQ0FBQzthQUM1RCxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFFM0MsSUFBSSxDQUFDLG1CQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2YsMkJBQTJCO1lBQzNCLElBQUksR0FBRywrS0FBK0ssSUFBSSxFQUFFLENBQUE7U0FDL0w7UUFFRCxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNwQjthQUFNO1lBQ0gsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDN0IsQ0FBQyxDQUFDLENBQUE7U0FDTDtLQUNKO0FBQ0wsQ0FBQyxDQUFBO0FBRUwsSUFBSSxLQUFLLEVBQUU7SUFFUCxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDbkMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakQsTUFBTSxJQUFJLEdBQUcsaUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUU1QixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1NBQzNCO2FBQU07WUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDaEI7SUFDTCxDQUFDLENBQUMsQ0FBQTtDQUNMO0tBQU07SUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUE7Q0FDNUQifQ==