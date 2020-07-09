import ts, {JsxEmit} from "typescript"

const compile = (code: string): ts.TranspileOutput => ts.transpileModule(
    code,
    {
        compilerOptions: {
            noEmitOnError: true,
            jsx: JsxEmit.Preserve,
            target: ts.ScriptTarget.ESNext,
            module: ts.ModuleKind.CommonJS,
        },
    }
)

export default compile
