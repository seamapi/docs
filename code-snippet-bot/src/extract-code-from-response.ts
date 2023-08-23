export const extractCodeFromResponse = (s: string) => {
  // Extract anything inside the markdown code snippet ``` tags e.g. ```ts
  const code_snippets = s.match(/```[^\n]+\n(.*?)```/gs)
  // get first code snippet without surrounding ```
  return code_snippets?.[0]
    ?.replace(/```[^\n]+\n/gs, "")
    .replace(/```/g, "")
    .trim()
}
