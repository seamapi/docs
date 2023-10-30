import test from "ava"
import { runRubyCodeSample } from "../../src/run-code-snippet/run-ruby-code-snippet"

test("run ruby code snippet 01", async (t) => {
  const { logged_content} = await runRubyCodeSample(`
    puts("Hello, World!")
  `)

  t.is(logged_content, ["Hello, World!"])
})
