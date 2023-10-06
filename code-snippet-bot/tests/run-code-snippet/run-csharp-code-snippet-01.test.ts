import test from "ava"
import { runCsharpCodeSample } from "../../src/run-code-snippet/run-csharp-code-snippet"

test("run csharp code snippet 01", async (t) => {
  const { logged_content } = await runJavascriptCodeSample(`
    Console.WriteLine("Hello, World!");
  `)

  t.deepEqual(logged_content, ["Hello, World!"])
})
