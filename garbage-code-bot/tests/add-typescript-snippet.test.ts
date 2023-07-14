import test from "ava"
import { Configuration, OpenAIApi } from "openai"
import { route_definitions } from "../src/route-definitions"
import { getCodeSnippetPrompt } from "../src/get-code-snippet/get-code-snippet-prompt"
import { javascript_task_guidelines } from "../src/task-guidelines/javascript"
import { getOpenAI } from "../src/get-openai"
import { getChatCompletion } from "../src/get-chat-completion"
import { general_guidelines } from "../src/task-guidelines/general"
import { extractCodeFromResponse } from "../src/extract-code-from-response"

test("add typescript snippet", async (t) => {
  const task_description =
    "Create an access code that starts today and ends in 30 days."

  const relevant_route_definitions = await getChatCompletion(
    `

Trim the route definitions below to only include the routes relevant to the task.
Wrap your response route definitions in the \`\`\`ts templating tag.

# Task Description

${task_description}

# Route Definitions

\`\`\`ts
${route_definitions}
\`\`\`

        `.trim()
  )

  const completion = await getChatCompletion(
    getCodeSnippetPrompt({
      name_of_library: "Seam Typescript SDK",
      task_description,
      general_guidelines,
      language_guidelines: javascript_task_guidelines,
      route_definitions: relevant_route_definitions,
    })
  )

  t.truthy(
    extractCodeFromResponse(completion)?.includes(
      "await seam.accessCodes.create({"
    )
  )
})
