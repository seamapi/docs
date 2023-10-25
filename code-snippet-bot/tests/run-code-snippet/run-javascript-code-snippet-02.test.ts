import test from "ava"
import { runJavascriptCodeSample } from "../../src/run-code-snippet/run-javascript-code-snippet"

test("run javascript code snippet 02", async (t) => {
  const { logged_content } = await runJavascriptCodeSample(`
    console.log(await seam.devices.list())
  `)

  t.is(logged_content[0].length, 3)
})
