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
        compile(data);
    });
}
else {
    throw new Error("😰 No input file specified, exiting...");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsMklBQTJJO0FBQzNJLG1EQUFvQztBQUNwQyx1Q0FBd0I7QUFDeEIseUNBQWlDO0FBRWpDLG1CQUFPO0tBQ0YsTUFBTSxDQUFDLGtCQUFrQixFQUFFLGdDQUFnQyxFQUFFLFFBQVEsQ0FBQztLQUN0RSxNQUFNLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDLENBQUE7QUFFM0MsbUJBQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRTNCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLG1CQUFPLENBQUMsR0FBYSxDQUFDLEVBRTVELE9BQU8sR0FBRyxDQUFDLFFBQWdCLEVBQVEsRUFBRTtJQUNqQyxNQUFNLE9BQU8sR0FBRztRQUNaLG1DQUFtQztRQUNuQyx5Q0FBeUM7S0FDNUMsQ0FBQTtJQUVELElBQUksbUJBQU8sQ0FBQyxJQUFJLEVBQUU7UUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUE7S0FDOUM7SUFFRCxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUN2QixRQUFRLEVBQ1I7UUFDSSxPQUFPO1FBQ1AsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7UUFDOUIsUUFBUSxFQUFFLG1CQUFPLENBQUMsSUFBZTtRQUNqQyxPQUFPLEVBQUUsbUJBQU8sQ0FBQyxJQUFlO1FBQ2hDLFFBQVEsRUFBRSxDQUFDLG1CQUFPLENBQUMsSUFBZTtRQUNsQyxVQUFVLEVBQUUsUUFBUTtLQUN2QixDQUNKLENBQUE7SUFFRCxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO1FBQ2pCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJO2FBQ2QsT0FBTyxDQUFDLHVCQUF1QixFQUFFLDBCQUEwQixDQUFDO2FBQzVELE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUUzQyxJQUFJLENBQUMsbUJBQU8sQ0FBQyxJQUFJLEVBQUU7WUFDZiwyQkFBMkI7WUFDM0IsSUFBSSxHQUFHLCtLQUErSyxJQUFJLEVBQUUsQ0FBQTtTQUMvTDtRQUVELElBQUksTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3BCO2FBQU07WUFDSCxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtnQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUM3QixDQUFDLENBQUMsQ0FBQTtTQUNMO0tBQ0o7QUFDTCxDQUFDLENBQUE7QUFFTCxJQUFJLEtBQUssRUFBRTtJQUNQLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakIsQ0FBQyxDQUFDLENBQUE7Q0FDTDtLQUFNO0lBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFBO0NBQzVEIn0=