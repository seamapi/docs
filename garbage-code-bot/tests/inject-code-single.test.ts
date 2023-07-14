import test from "ava"
import fs from "fs"
import mockFs from "mock-fs"
import { getCodeInjects, injectCode } from "../src/inject-code-syntax" // Assuming this is the path to your file

const filePath = "/test.md"

const mockMarkdown = `
## Test File

<!-- CODE INJECT START
This is a test prompt.
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

const expectedUpdatedMarkdown = `
## Test File

<!-- CODE INJECT START
This is a test prompt.
-->
{% tabs %}
{% tab title="Python" %}
\`\`\`python
print("Hello, Garbage Code Bot!")
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

test("injectCode modifies code injects correctly", async (t) => {
  await injectCode({
    filePath,
    injectIndex: 0,
    codeSnippets: { python: 'print("Hello, Garbage Code Bot!")' },
  })

  const newContent = fs.readFileSync(filePath, "utf-8")

  t.is(newContent, expectedUpdatedMarkdown)
})
