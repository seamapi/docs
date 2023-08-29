import test from "ava"
import { addCodeOutputComments } from "../../src/add-code-output-comments"
import { getLanguageConfiguration } from "../../src/language-configurations"

test("javascript code output comments 01", async (t) => {
  const newSnippet = await addCodeOutputComments(
    `
console.log(await seam.devices.list())
  `.trim(),
    {
      languageConfig: getLanguageConfiguration("javascript"),
      high_level_objective: "List Devices",
    }
  )

  console.log(newSnippet)
})
