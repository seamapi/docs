import test from "ava"
import { addCodeOutputComments } from "../../src/add-code-output-comments"
import { getLanguageConfiguration } from "../../src/language-configurations"

test("curl code output comments 01", async (t) => {
  const newSnippet = await addCodeOutputComments(
    `
curl \\
  -H "Authorization: Bearer \${SEAM_API_KEY}" \\
  https://connect.getseam.com/devices/list;
  `.trim(),
    {
      languageConfig: getLanguageConfiguration("bash"),
      high_level_objective: "List Devices",
    }
  )

  console.log(newSnippet)
})
