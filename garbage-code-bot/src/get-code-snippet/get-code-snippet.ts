import { extractCodeFromResponse } from "../extract-code-from-response"
import { getChatCompletion } from "../get-chat-completion"
import { getLanguageConfiguration } from "../language-configurations"
import { routeDefinitions } from "../route-definitions"
import { generalGuidelines } from "../task-guidelines"
import { getCodeSnippetPrompt } from "./get-code-snippet-prompt"

type GetCodeSnippetParams = {
  language: string
  taskDescription: string
}

export const getCodeSnippet = async ({
  taskDescription,
  language,
}: GetCodeSnippetParams): Promise<string> => {
  const languageConfig = getLanguageConfiguration(language)

  const relevantRouteDefs = await getChatCompletion(
    `

Trim the route definitions below to only include the routes relevant to the task.
Wrap your response route definitions in the \`\`\` templating tag.

# Task Description

${taskDescription}

# Route Definitions

\`\`\`ts
${routeDefinitions}
\`\`\`

      `.trim()
  )

  const completion = await getChatCompletion(
    getCodeSnippetPrompt({
      nameOfLibrary: `Seam ${languageConfig.title} SDK`,
      taskDescription,
      generalGuidelines: generalGuidelines,
      languageGuidelines: languageConfig.languageGuidelines,
      routeDefinitions: relevantRouteDefs,
    })
  )

  return extractCodeFromResponse(completion)!
}
