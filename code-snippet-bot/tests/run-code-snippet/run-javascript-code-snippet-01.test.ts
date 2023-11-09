import test from "ava"
import { runJavascriptCodeSample } from "../../src/run-code-snippet/run-javascript-code-snippet"

test("run javascript code snippet 01", async (t) => {
  const { logged_content } = await runJavascriptCodeSample(`
    await new Promise(resolve => setTimeout(resolve, 100));
    console.log('Hello, World!');
  `)

  t.deepEqual(logged_content, ["Hello, World!"])
})
