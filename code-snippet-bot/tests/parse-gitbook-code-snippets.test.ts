import test from "ava"
import { parseGitbookCodeSnippets } from "../src/parse-gitbook-code-snippets"

test("parseGitbookCodeSnippets parses code snippets correctly", (t) => {
  const exampleString = `
    {% tabs %}
    {% tab title="Javascript" %}
    \`\`\`javascript
    console.log("Hello, World!");
    \`\`\`
    {% endtab %}
    {% tab title="Python" %}
    \`\`\`python
    print("Hello, World!")
    \`\`\`
    {% endtab %}
    {% endtabs %}
  `

  const expectedOutput = {
    javascript: 'console.log("Hello, World!");',
    python: 'print("Hello, World!")',
  }

  const result = parseGitbookCodeSnippets(exampleString)

  t.deepEqual(result, expectedOutput)
})
