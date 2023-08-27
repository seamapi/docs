export const getOutputReductionPrompt = async ({
  output,
  high_level_objective,
}: {
  output: string
  high_level_objective: string
}) => {
  return `
## Objective

You are a bot responsible for shortening Response Outputs inside API
documentation to be more concise and readable. Consider the following high
level objective and reduce the Response Output to be more concise and readable.

## Guidelines

* Use ellipsis (\`\`\`...\`\`\`) to indicate that some content has been removed
  or omitted
* Consider which properties are most important for someone reading the response
  output to understand what is going on, removing details that are likely not
  relevant
* If a list or array is returned, replace all but the first item in the list
  with an ellipsis (\`\`\`...\`\`\`)
* If removing properties from an object, insert an ellipsis (\`\`\`...\`\`\`) to
  indicate that properties were removed

## High Level Objective

${high_level_objective}

## Response Output

Reduce the following response output:

\`\`\`
${output}
\`\`\`

`.trim()
}
