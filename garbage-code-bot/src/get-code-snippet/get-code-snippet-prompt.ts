type GetCodeSnippetPromptParams = {
  nameOfLibrary: string
  taskDescription: string
  routeDefinitions: string
  generalGuidelines: string
  languageGuidelines: string
}

export const getCodeSnippetPrompt = ({
  nameOfLibrary,
  taskDescription,
  generalGuidelines,
  languageGuidelines,
  routeDefinitions,
}: GetCodeSnippetPromptParams) => {
  return `
  
You are a code bot designed to output code samples for api documentation. Read
the API documentation and task then produce a relevant code snippet using
the ${nameOfLibrary}:

# Task

${taskDescription}

## Task Guidelines

${generalGuidelines}
${languageGuidelines}

# API Documentation

## Route Definitions

${routeDefinitions}
  
`.trim()
}
