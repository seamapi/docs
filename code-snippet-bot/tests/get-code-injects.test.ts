import test from "ava"
import mockFs from "mock-fs"
import fs from "fs"
import { getCodeInjects, injectCode } from "../src/inject-code-syntax" // Assuming this is the path to your file

const filePath = "/test.md"

const mockMarkdown = `
## Test File

<!-- CODE INJECT START
This is a test prompt.
With a second line!
-->
{% tabs %}
{% tab title="Python" %}
\`\`\`python
print("Hello, World!")
\`\`\`
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->
`

test.before((t) => {
  // Create a mock file system
  mockFs({
    [filePath]: mockMarkdown,
  })
})

test.after((t) => {
  // Restore the file system
  mockFs.restore()
})

test("getCodeInjects extracts code injects correctly", async (t) => {
  const codeInjects = await getCodeInjects(filePath)

  t.is(codeInjects.length, 1)

  t.is(codeInjects[0].prompt?.split("\n")[0], "This is a test prompt.")
  t.is(codeInjects[0].prompt?.split("\n")[1], "With a second line!")
})
