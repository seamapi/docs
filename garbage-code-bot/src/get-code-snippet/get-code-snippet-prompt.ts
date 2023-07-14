type GetCodeSnippetPromptParams = {
  name_of_library: string
  task_description: string
  route_definitions: string
  general_guidelines: string
  language_guidelines: string
}

export const getCodeSnippetPrompt = ({
  name_of_library,
  task_description,
  general_guidelines,
  language_guidelines,
  route_definitions,
}: GetCodeSnippetPromptParams) => {
  return `
  
You are a code bot designed to output code samples for api documentation. Read
the API documentation and task then produce a relevant code snippet using
the ${name_of_library}:

# Task

${task_description}

## Task Guidelines

${general_guidelines}
${language_guidelines}

# API Documentation

## Route Definitions

${route_definitions}
  
`.trim()
}
