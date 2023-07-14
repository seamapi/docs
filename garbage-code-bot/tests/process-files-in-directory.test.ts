import test from "ava"
import fs from "fs"
import os from "os"
import path from "path"
import { processFilesInDirectory } from "../src/process-files-in-directory"
// MockFS breaks OpenAI, so we use the real filesystem

const filesystem = {
  //   "easy.md": `
  // ## Easy

  // <!-- CODE INJECT START
  // Delete an access code
  // -->
  // {% tabs %}
  // {% tab title="Python" %}
  // \`\`\`python
  // print("Hello, World!")
  // \`\`\`
  // {% endtab %}
  // {% endtabs %}
  // <!-- CODE INJECT END -->

  // `,
  "medium.md": `
## Medium

<!-- CODE INJECT START
Create a webview, then get the connected account associated with the webview
-->
{% tabs %}
{% tab title="Python" %}
\`\`\`python
print("Hello, World!")
\`\`\`
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->



`,
  "some_other_file.md": "No injection here! move along",
}

let testDir: string

test.beforeEach(() => {
  // create a temporary directory representing the filesystem
  testDir = fs.mkdtempSync(path.join(os.tmpdir(), "test-"))

  // create the files from the filesystem config
  for (const [filepath, contents] of Object.entries(filesystem)) {
    const fullPath = path.join(testDir, filepath)
    fs.mkdirSync(path.dirname(fullPath), { recursive: true })
    fs.writeFileSync(fullPath, contents)
  }
})

test.afterEach(() => {
  // clean up the test directory
  fs.rmdirSync(testDir, { recursive: true })
})

test("processFilesInDirectory", async (t) => {
  await processFilesInDirectory(testDir)
  const result = fs.readFileSync(path.join(testDir, "medium.md"), "utf8")
  console.log(result)
})
