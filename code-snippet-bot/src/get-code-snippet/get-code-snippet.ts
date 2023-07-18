import { extractCodeFromResponse } from "../extract-code-from-response"
import { getChatCompletion } from "../get-chat-completion"
import { getLanguageConfiguration } from "../language-configurations"
import { routeDefinitions } from "../route-definitions"
import { generalGuidelines } from "../task-guidelines"
import { getCodeSnippetPrompt } from "./get-code-snippet-prompt"
import stripComments from "strip-comments"

type GetCodeSnippetParams = {
  language: string
  taskDescription: string
  existingCodeSnippets?: Record<string, string>
  useExistingCodeSnippetIfFunctionallyIdentical?: boolean
}

export const getCodeSnippet = async ({
  taskDescription,
  language,
  existingCodeSnippets,
  useExistingCodeSnippetIfFunctionallyIdentical = true,
}: GetCodeSnippetParams): Promise<string> => {
  const languageConfig = getLanguageConfiguration(language)

  const relevantRouteDefs = await getChatCompletion(
    `

Trim the route definitions below to only include the routes relevant to the task.
Wrap your response route definitions in the \`\`\` templating tag. Break down
the task into parts leaving a comment for each part if there are multiple parts.

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
      existingCodeSnippets,
    }),
    {
      model: "gpt-4",
    }
  )

  const newSnippet = stripComments(extractCodeFromResponse(completion)!)

  // Check if the code snippets are functionally identical
  if (
    useExistingCodeSnippetIfFunctionallyIdentical &&
    existingCodeSnippets?.[language]
  ) {
    const identicalRes = await getChatCompletion(
      `
Are the following code snippets functionally identical? Output YES or NO (and
nothing else)

\`\`\`${language}
${newSnippet.trim()}
\`\`\`

\`\`\`${language}
${existingCodeSnippets[language].trim()}
\`\`\`
    `.trim(),
      {
        model: "gpt-3.5-turbo",
      }
    )

    const identical = identicalRes.includes("YES") ? true : false
    if (identical) return existingCodeSnippets[language].trim()
  }

  return newSnippet
}
