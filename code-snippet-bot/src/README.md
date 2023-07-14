# Garbage Code Bot (SDK Code Snippet Generator)

The Garbage Code Bot generates code snippets for Seam SDK usage. Snippets are
generated via the following process:

1. Find snippet template marker in markdown file
2. Parse snippet template marker for task description
3. Generate a prompt using route documentation, task description, and task
   guidelines (including language-specific guidelines)
4. Generate a `code_snippet` using the prompt
5. Evaluate code snippet against fake-seam-connect and save `print_output`
6. Place `code_snippet` and `print_output` inside snippet template markdown,
   formatted for Gitbook with tabs for each language
7. Repeat 3-6 for each target language
