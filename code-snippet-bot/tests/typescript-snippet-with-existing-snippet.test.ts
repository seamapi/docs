import test from "ava"
import { getCodeSnippet } from "../src/get-code-snippet"

test("typescript snippet should be same as existing snippet if it's good enough", async (t) => {
  const existingSnippet = `
// Get the list of all devices
const allDevices = await seam.devices.list()

console.log(allDevices)`.trim()

  const completion = await getCodeSnippet({
    language: "javascript",
    taskDescription: "List all the devices",
    existingCodeSnippets: {
      javascript: existingSnippet,
    },
  })

  // TODO: getCodeSnippet should ask if they're functionally identical
  t.is(existingSnippet, completion)
})
