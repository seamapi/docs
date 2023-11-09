import test from "ava"
import { runRubyCodeSample } from "../../src/run-code-snippet/run-ruby-code-snippet"

test("run ruby code snippet 02", async (t) => {
  const { execution_result } = await runRubyCodeSample(`
  puts client.devices.list  
  `)

  t.truthy(
    execution_result!.includes("Seam::Device:"),
  )
})
