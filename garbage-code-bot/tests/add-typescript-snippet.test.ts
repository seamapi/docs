import test from "ava"
import { Configuration, OpenAIApi } from "openai"
import { routeDefinitions } from "../src/route-definitions"
import { getCodeSnippetPrompt } from "../src/get-code-snippet/get-code-snippet-prompt"
import { javascriptTaskGuidelines } from "../src/task-guidelines/javascript"
import { getOpenAI } from "../src/get-openai"
import { getChatCompletion } from "../src/get-chat-completion"
import { generalGuidelines } from "../src/task-guidelines/general"
import { extractCodeFromResponse } from "../src/extract-code-from-response"
import { getCodeSnippet } from "../src/get-code-snippet"

test("add typescript snippet", async (t) => {
  const completion = await getCodeSnippet({
    language: "javascript",
    taskDescription:
      "Create an access code that starts today and ends in 30 days.",
  })

  t.truthy(completion.includes("await seam.accessCodes.create({"))
})
