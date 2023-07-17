type GetCodeSnippetPromptParams = {
  nameOfLibrary: string
  taskDescription: string
  routeDefinitions: string
  generalGuidelines: string
  languageGuidelines: string
  existingCodeSnippets?: Record<string, string>
}

export const getCodeSnippetPrompt = ({
  nameOfLibrary,
  taskDescription,
  generalGuidelines,
  languageGuidelines,
  routeDefinitions,
  existingCodeSnippets,
}: GetCodeSnippetPromptParams) => {
  return `
  
You are a code bot designed to output code samples for api documentation. Read
the API documentation and task then produce a relevant code snippet using
the ${nameOfLibrary}:

# Task

${taskDescription}

${
  existingCodeSnippets
    ? `
## Existing Code Snippets

${Object.entries(existingCodeSnippets)
  .map(
    ([language, snippet]) =>
      `\`\`\`${language}
${snippet}
\`\`\`
`
  )
  .join("\n\n")}

`.trim()
    : ""
}

## Task Guidelines

### General Guidelines

${generalGuidelines}

### ${nameOfLibrary} Guidelines

${languageGuidelines}

# API Documentation

## Route Definitions

${routeDefinitions}
  
`.trim()
}
