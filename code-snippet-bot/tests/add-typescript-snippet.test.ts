import test from "ava"
import { getCodeSnippet } from "../src/get-code-snippet"

test("add typescript snippet", async (t) => {
  const completion = await getCodeSnippet({
    language: "javascript",
    taskDescription:
      "Create an access code that starts today and ends in 30 days.",
  })

  t.truthy(
    completion.includes("await seam.accessCodes.create({"),
    `Should have gotten accessCodes.create method used but instead got this: \n${completion}`
  )
})
